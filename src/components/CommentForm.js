import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions/actions';

const CommentForm = React.createClass({
  getInitialState: function () {
    return {
      name: '',
      body: ''
    };
  },

  handleBodyChange: function (event) {
    this.setState({
      body: event.target.value
    });
  },

  handleSubmit: function (event) {
    event.preventDefault();
    this.props.addComment(this.state.body, this.props.articleID);
  },

  render: function () {
    return (
      <div className='box' >
        <form onSubmit={this.handleSubmit}>
          <label className="label">Comment - posting as Northcoder</label>
          <p className="control">
            <textarea
              className="textarea"
              onChange={this.handleBodyChange} />
          </p>
          <button className="button is-primary" >Submit</button>
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
