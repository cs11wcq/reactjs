import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song}) => {
  if (!song) {
    return 'Select a song'
  }
  return (
  <div>
    <h3>Details for:</h3>
    <p>
      Title: {song.title}
      <br />
      Duration: {song.duration}
    </p>

  </div>
  );
};

const mapStateToProps = (state) => {
  console.log('HERE',state);
  return {
    song: state.spiderman
  }
};

export default connect(mapStateToProps)(SongDetail);
