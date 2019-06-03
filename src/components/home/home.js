import React, { Component } from "react";
import { graphql, compose } from "react-apollo";

import { GET_REPOSITORIES } from "./api";
import Loading from "../common/loading/loading";
import RepositoriesList from "../common/repositoriesList/repositoriesList";

class Home extends Component {
  render() {
    const { error, loading, repositories } = this.props;
    return (
      <div>
        {loading && <Loading />}
        {!loading && repositories && (
          <RepositoriesList repositories={repositories} />
        )}
      </div>
    );
  }
}

export default graphql(GET_REPOSITORIES, {
  props: ({ data: { error, loading, search } }) => {
    return {
      repositories: search ? search.nodes : [],
      loading,
      error
    };
  }
})(Home);
