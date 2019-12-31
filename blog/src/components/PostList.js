import React from 'react';
import {connect} from 'react-redux';
import {fetchPostsAndUsers} from '../actions';
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {

    console.log("AFTER INITIAL RENDER");
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.postMan.map(post => {
      return (
          <div className="item" key={post.id}>
            <i className={"large middle aligned icon user"} />
            <div className="content">
              <div className="description">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
              <UserHeader userId={post.userId}/>
            </div>
          </div>
      )
    })
  }
  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>
  }
}

//state is redux and props is react
const mapStateToProps = (state) => {
  return {postMan: state.posts};
};
//we use connect to connect the redux to react
export default connect(mapStateToProps, {
  fetchPostsAndUsers: fetchPostsAndUsers
})(PostList);
