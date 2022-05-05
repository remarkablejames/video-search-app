import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.formSubmitHandler("cars");
  }

  formSubmitHandler = async (searchTerm) => {
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
    console.log(searchTerm);
    console.log(response);
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
    console.log("from the App", video);
  };
  render() {
    return (
      <div className="ui container">
        <h2>Hello world from the App component</h2>
        <h3>I have {this.state.videos.length} videos</h3>
        <SearchBar formSubmit={this.formSubmitHandler} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
