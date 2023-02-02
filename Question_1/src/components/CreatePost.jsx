import React, { Component } from 'react'
import { actionCreatePost } from '../Redux/actions/question1Action';
import { connect } from 'react-redux';
import swal from 'sweetalert';
 class CreatePost extends Component {
  state ={
    values: {
        userId: 0,
        title:"",
        body: ""
    }
  }

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
    });
  };
  
  handleSubmit =  () => {
    const { values } = this.state;
    this.props.dispatch(actionCreatePost(values));
    this.setState({
      values: {
        userId: 0,
        title:"",
        body: ""
      },
    });
    swal("Success","New post have been created", "success");
  }

    render() {
        const {values} =this.state;
    return (
 <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Create New Post</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <p>User ID: </p>
        <input type="number" name='userId' value={values.userId} onChange={this.handleChange} className='form-control mb-4' placeholder='Typing here...'/>
        <p>Title: </p>
        <input type="text" name='title' value={values.title} onChange={this.handleChange} className='form-control mb-4' placeholder='Typing here...'/>
        <p>Body: </p>
        <textarea  type="text" name='body' value={values.body} onChange={this.handleChange} className='form-control mb-4' placeholder='Typing here...'/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={this.handleSubmit}>Create</button>
      </div>
    </div>
  </div>
</div>

    )
  }
}

export default connect()(CreatePost);