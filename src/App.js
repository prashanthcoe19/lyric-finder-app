import React, { Fragment, Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Tracks from "./components/Tracks";
import Lyrics from "./components/Lyrics";
import Alert from "./components/Alert";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import axios from "axios";
import "./App.css";
class App extends Component {
  state = {
    searchTerm: " ",
    trackList: [],
    heading: " ",
    alert: null
  };
  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_APII}`
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          trackList: res.data.message.body.track_list,
          heading: "Top Ten Tracks"
        });
      })
      .catch(err => console.log(err));
  }

  searchTracks = text => {
    this.setState({ loading: true });
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=${text}&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_API}`
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          trackList: res.data.message.body.track_list,
          heading: "Search Results ",
          loading: false
        });
      });
  };

  //setAlert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Alert alert={this.state.alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Fragment>
                  <Search
                    searchTracks={this.searchTracks}
                    loading={this.state.loading}
                    setAlert={this.setAlert}
                  />
                  <h2>
                    <strong>{this.state.heading}</strong>
                  </h2>
                  <Tracks trackList={this.state.trackList} />
                </Fragment>
              )}
            />
            <Route path="/lyrics/track/:id" component={Lyrics} />
            <Route path="/about" component={About} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
