import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; // Allows us to make Button for nav
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostIndex extends Component {

  componentDidMount() {
    // lifecycle method in React
    // this function is called automatically
    this.props.fetchPosts();
  }

  renderPosts() {
    // use lodash map function which can deal with objects
    return _.map(this.props.posts, post => {
      return (
        <li key={post.id} className="list-group-item">
          <Link to={`/posts/${post.id}`}>
            { post.title }
          </Link>
        </li>
      )
    });
  }
  // "to" property allows us to send user to
  // new component
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}
// Instead of passing in mapDispatchToProps, we can pass action creator directly
export default connect(mapStateToProps, { fetchPosts })(PostIndex);
