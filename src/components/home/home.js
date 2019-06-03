import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Button } from "react-bootstrap";
import styled from "styled-components";

import { GET_REPOSITORIES } from "./api";
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

class Home extends Component {
  render() {
    const { error, loading, repositories, loadMore } = this.props;
    return (
      <div>
        {loading && <Loading />}
        {!loading && repositories && (
          <React.Fragment>
            <RepositoriesList repositories={repositories} />
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

export default graphql(GET_REPOSITORIES, {
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
})(Home);
