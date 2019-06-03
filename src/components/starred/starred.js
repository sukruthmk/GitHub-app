import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { gql } from "apollo-boost";
import { Button } from "react-bootstrap";
import styled from "styled-components";

import { ADD_STAR, GET_REPOSITORIES, REMOVE_STAR } from "./api";
import Loading from "../common/loading/loading";
import RepositoriesList from "../common/repositoriesList/repositoriesList";

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

class Starred extends Component {
  render() {
    const {
      addStar,
      error,
      loading,
      repositories,
      loadMore,
      removeStar
    } = this.props;
    return (
      <div>
        {error && <div>{error}</div>}
        {loading && <Loading />}
        {!loading && repositories && (
          <React.Fragment>
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
    props: ({ data: { error, loading, viewer, fetchMore } }) => {
      let starredRepositories = null;
      if (viewer) {
        starredRepositories = viewer.starredRepositories;
      }
      return {
        repositories: starredRepositories ? starredRepositories.nodes : null,
        loading,
        error,
        loadMore: () =>
          fetchMore({
            variables: { after: starredRepositories.pageInfo.endCursor },
            updateQuery: (previousResult = {}, { fetchMoreResult = {} }) => {
              const previousSearch =
                previousResult.viewer.starredRepositories || {};
              const currentSearch =
                fetchMoreResult.viewer.starredRepositories || {};
              const previousNodes = previousSearch.nodes || [];
              const currentNodes = currentSearch.nodes || [];
              // Specify how to merge new results with previous results
              return {
                viewer: {
                  ...previousResult,
                  starredRepositories: {
                    ...previousSearch,
                    nodes: [...previousNodes, ...currentNodes],
                    pageInfo: currentSearch.pageInfo
                  }
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
              data: { viewerHasStarred: true, __typename: "Repository" }
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
              data: { viewerHasStarred: false, __typename: "Repository" }
            });
          }
        })
    })
  })
)(Starred);
