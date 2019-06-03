import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { gql } from "apollo-boost";
import { Alert, Button } from "react-bootstrap";
import styled from "styled-components";

import { ADD_STAR, GET_REPOSITORIES, REMOVE_STAR } from "./api";
import Loading from "../common/loading/loading";
import RepositoriesList from "../common/repositoriesList/repositoriesList";
import SearchBar from "../common/searchBar/searchBar";

const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  align-items: center;
  display: flex;
`;
const Content = styled.div`
  margin: auto;
`;

class Home extends Component {
  state = {
    search: ""
  };

  hanleChange = e => {
    const value = e.target.value;
    this.setState({
      search: value
    });
  };

  filterRepo = repositories => {
    const { search } = this.state;
    let filteredResult = repositories;
    if (search) {
      filteredResult = repositories.filter(function(repo) {
        const { nameWithOwner } = repo;
        return nameWithOwner.toLowerCase().includes(search.toLowerCase());
      });
    }

    return filteredResult;
  };

  render() {
    const { addStar, error, loading, loadMore, removeStar } = this.props;
    const repositories = this.filterRepo(this.props.repositories);
    return (
      <div>
        {error && <div>{error}</div>}
        {loading && <Loading />}
        {!loading && repositories && (
          <React.Fragment>
            <SearchBar onChange={this.hanleChange} search={this.state.search} />
            <Container>
              <Content>
                <Alert variant="danger">
                  Some repositories may have restriction for starring and
                  unstarring through GitHub Oauth API. So may not work.
                </Alert>
              </Content>
            </Container>
            <RepositoriesList
              repositories={repositories}
              addStar={addStar}
              removeStar={removeStar}
            />
            <Container>
              <Content>
                <Button onClick={loadMore}>Load More</Button>
              </Content>
            </Container>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default compose(
  graphql(GET_REPOSITORIES, {
    props: ({ data: { error, loading, search, fetchMore } }) => {
      return {
        repositories: search ? search.nodes : null,
        loading,
        error,
        loadMore: () =>
          fetchMore({
            variables: { after: search.pageInfo.endCursor },
            updateQuery: (previousResult = {}, { fetchMoreResult = {} }) => {
              const previousSearch = previousResult.search || {};
              const currentSearch = fetchMoreResult.search || {};
              const previousNodes = previousSearch.nodes || [];
              const currentNodes = currentSearch.nodes || [];
              // Specify how to merge new results with previous results
              return {
                ...previousResult,
                search: {
                  ...previousSearch,
                  nodes: [...previousNodes, ...currentNodes],
                  pageInfo: currentSearch.pageInfo
                }
              };
            }
          })
      };
    },
    options: {
      notifyOnNetworkStatusChange: true
    }
  }),
  graphql(ADD_STAR, {
    props: ({ mutate }) => ({
      addStar: starrableId =>
        mutate({
          variables: { starrableId },
          update: proxy => {
            proxy.writeFragment({
              id: `Repository:${starrableId}`,
              fragment: gql`
                fragment repository on Repository {
                  viewerHasStarred
                }
              `,
              data: {
                viewerHasStarred: true,
                __typename: "Repository"
              }
            });
          }
        })
    })
  }),
  graphql(REMOVE_STAR, {
    props: ({ mutate }) => ({
      removeStar: starrableId =>
        mutate({
          variables: { starrableId },
          update: proxy => {
            proxy.writeFragment({
              id: `Repository:${starrableId}`,
              fragment: gql`
                fragment repository on Repository {
                  viewerHasStarred
                }
              `,
              data: {
                viewerHasStarred: false,
                __typename: "Repository"
              }
            });
          }
        })
    })
  })
)(Home);
