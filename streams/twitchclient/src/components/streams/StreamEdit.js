import React from 'react';
import {connect} from 'react-redux';
import {editStream} from '../../actions/index';
import {fetchStream} from '../../actions/index';

//props.match.params.id gives us the id of the user in the url
//ie: localhost:3000/streams/edit/:id
class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }
    //console.log('props',this.props);
    return <div>{this.props.stream.title}</div>;
  }
}

//select appropriate stream with the id given by ownProps
const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {
  editStream: editStream,
  fetchStream: fetchStream
})(StreamEdit);
