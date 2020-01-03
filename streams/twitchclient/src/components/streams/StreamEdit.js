import React from 'react';
import {connect} from 'react-redux';
import {editStream} from '../../actions/index';

//props.match.params.id gives us the id of the user in the url
//ie: localhost:3000/streams/edit/:id
const StreamEdit = (props) => {
  return <div>StreamEdit</div>;

};

//select appropriate stream with the id given by ownProps
const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {
  editStream: editStream
})(StreamEdit);
