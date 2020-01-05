import React from "react";
import Track from "./Track";
import Spinner from "./Spinner";
const Tracks = props => {
  if (props.trackList === undefined || props.trackList.length === 0) {
    return <Spinner />;
  } else {
    return (
      <React.Fragment>
        <div className="grid-container">
          {props.trackList.map(item => {
            return <Track key={item.track.track_id} track={item.track} />;
          })}
        </div>
      </React.Fragment>
    );
  }
};

export default Tracks;
