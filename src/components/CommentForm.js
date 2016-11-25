import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions/actions';

const CommentForm = React.createClass ({
  getInitialState: function () {
    return {
      name: '',
      body: ''
    };
  },

  handleNameChange:  function (event) {
    this.setState({
      name: event.target.value
    })
  },

  handleBodyChange: function (event) {
    this.setState({
      body: event.target.value
    })
  },

  handleSubmit: function (event) {
    event.preventDefault();
    console.log('blah', this.state.body, this.props.articleID)
    this.props.addComment(this.state.body, this.props.articleID);
  },

  render: function () {
    return (
      <div className='box' >
        <form onSubmit={this.handleSubmit}>
          <label className="label">Name</label>
        <p className="control">
          <input className="input"
            type="text" placeholder=""
            onChange={this.handleNameChange}
          />
        </p>
        <label className="label">Message</label>
        <p className="control">
          <textarea
            className="textarea"
            onChange={this.handleBodyChange}

            >
          </textarea>
        </p>
          <button  className="button is-primary" >Submit</button>
        </form>
      </div>
    );
  }

});
function mapStateToProps (state) {
  return {
    comments: state.comments
  };
}
function mapDispatchToProps (dispatch) {
  return {
    addComment: function (body, article) {
      dispatch(actions.addComment(body, article));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
