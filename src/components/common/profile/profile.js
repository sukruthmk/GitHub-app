import React from "react";
import { Query } from "react-apollo";

import { GET_AVATAR } from "./api";
import Img from "./img";
import Loading from "../loading/loading";

class Profile extends React.PureComponent {
  render() {
    return (
      <Query query={GET_AVATAR}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          if (error) return <div>Error :(</div>;

          return <Img url={data.viewer.avatarUrl} />;
        }}
      </Query>
    );
  }
}

export default Profile;
