import React from 'react';
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {

  //#268
  onSubmitCallBack = (formValues) => {
    this.props.createStream(formValues);
  };

  //handleSubmit #233 2:30
  render() {
    return (
        <div>
          <h3>Create a Stream</h3>
          <StreamForm onSubmitProp={this.onSubmitCallBack}/>
        </div>
    )
  }
}

export default connect(null, {
  createStream: createStream
})(StreamCreate);
