import React, { Component } from "react";
import Spinner from "./Spinner";
import axios from "axios";
class Lyrics extends Component {
  state = {
    lyrics: {},
    artist: {}
  };
  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_APII}`
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          lyrics: res.data.message.body.lyrics
        });
        return axios.get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_APII}`
        );
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          artist: res.data.message.body.track
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const lyrics = this.state.lyrics;
    const artist = this.state.artist;
    if (
      artist === undefined ||
      lyrics === undefined ||
      Object.keys(artist).length === 0 ||
      Object.keys(lyrics).length === 0
    ) {
      return <Spinner />;
    } else {
      return (
        <div key={artist.artist_id}>
          <h1>{artist.track_name}</h1>
          <h3>{artist.artist_name}</h3>
          <h4>Album: {artist.album_name}</h4>
          {/* <h5>Release Date: {artist.updated_time}</h5> */}
          <p style={{ textAlign: "center" }}>
            {lyrics.lyrics_body.split("\n").map(lyric => {
              return <p>{lyric}</p>;
            })}
          </p>
        </div>
      );
    }
  }
}

export default Lyrics;
