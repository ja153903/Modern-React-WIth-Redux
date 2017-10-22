import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {

  componentDidMount() {
    // provided by react router such that we are provided the
    // id out of the url
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;

    // Before it makes a request, it might not yet exist
    if (!post) {
        return (<div>Loading...</div>);
    }

    return (
      <div>
        <Link to="/" className="btn btn-primary">Back to Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

// the ownProps argument is the props object
// that is going to the PostsShow component
// this.props === ownProps
function mapStateToProps({ posts }, ownProps) {
  return {
    post: posts[ownProps.match.params.id]
  };
}


export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
