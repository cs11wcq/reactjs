import React from 'react';
import {connect} from 'react-redux';
import {fetchStream, editStream} from '../../actions/index';
import StreamForm from './StreamForm';
import _ from 'lodash';

//props.match.params.id gives us the id of the user in the url
//ie: localhost:3000/streams/edit/:id
class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  //formValues are title and description bc of what we did below when
  //we used _.pick to pick those properties
  onSubmitCallBack = (formValues) => {
    // console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };
  //NOTE: #269 initialValues is very important keyword for redux form
  //initialValues causes form to be loaded with the initial vals of title/descr.
  //outside curly braces rep that we are going to write some jsx
  //the second set of curly braces reps an object
  //Stream is an object with specific title and description properties
  //which match the Field "name" properties(title & description) from StreamForm
  //StreamForm is wrapped by ReduxForm helper, which has initialValues
  //One way to get only the title and description properties is
  //initialValues={{title: this.props.stream.title, description: this.props.stream.description }}
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }
    //console.log('props',this.props);
    return (
        <div>
          <h3>
            Edit a Stream
          </h3>
          <StreamForm onSubmitProp={this.onSubmitCallBack}
                      initialValues={_.pick(this.props.stream, 'title', 'description')}
          />
        </div>
    )
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
