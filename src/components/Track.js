import React from "react";
import { Link } from "react-router-dom";
const Track = props => {
  const { track } = props;
  return (
    <div className="card">
      <div className="container">
        <h5>{track.artist_name}</h5>
        <p>
          <i class="fas fa-play" />
          <strong>Track: {track.track_name}</strong>
        </p>
        <p>
          <i class="fas fa-compact-disc" />
          <strong>Album: {track.album_name}</strong>
        </p>
        <Link to={{ pathname: `/lyrics/track/${track.track_id}` }}>
          <button>View Lyrics!</button>
        </Link>
      </div>
    </div>
  );
};
export default Track;
