import React, { Component } from "react";
import CreatePost from "./CreatePost";
import { connect } from "react-redux";
import { actionFetchPosts } from "../Redux/actions/question1Action";
import GoToBottom from "./GoToBottom";
class Question1 extends Component {
 
    fetchData = () =>{
        this.props.dispatch(actionFetchPosts());
    }
 
    renderPosts = () => {
    const { posts, isLoading, error } = this.props;

    if (isLoading) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    }

    if (error) {
      return <h1>{error}</h1>;
    }

    return posts.map((item, index) => {
      const { userId, title, body } = item;
      return (
        <div className="col-lg-3 col-sm-6 mt-2" key={index}>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">User ID: {userId}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Title: {title}</h6>
              <p className="card-text">
               {body}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Zodinet Intership Test Question 1</h1>
       
        <div className="handleButtons">
          <button className="btn btn-info me-4" onClick={this.fetchData}>Fetch</button>
          <GoToBottom/>
          <button
            type="button"
            className="btn btn-secondary ms-4"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Create Post
          </button>
        </div>
        
        <CreatePost />
        <div className="posts row mt-5">{this.renderPosts()}</div>
        
      </div>
    );
  }
 
}

export default connect((state) => ({
posts: state.postData.posts,
  isLoading: state.postData.isLoading,
  error: state.postData.error,
}))(Question1);
