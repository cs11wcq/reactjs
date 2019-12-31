import React from "react";
import {connect} from 'react-redux';

class UserHeader extends React.Component {

  render() {
    const {user} = this.props;
    //if no user found
    if (!user) {
      return null; //don't want component to show anything
    }
    return <div>{user.name}</div>
  }
}

const mapStateToProps=(state, ownProps) => {
  return {user: state.users.find(user => user.id === ownProps.userId)}
};
export default connect(mapStateToProps)(UserHeader);
