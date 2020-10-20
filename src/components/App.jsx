import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoList from '/compiled/src/components/VideoList.js';
import Search from '/compiled/src/components/Search.js';
import VideoPlayer from '/compiled/src/components/VideoPlayer.js';
console.log(exampleVideoData);

/*
var App = () => (

  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><Search /></h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <div><h5><VideoPlayer /></h5></div>
      </div>
      <div className="col-md-5">
        <div><h5><VideoList videos={exampleVideoData}/></h5></div>
      </div>
    </div>
  </div>

);
*/
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      videoPlaying: exampleVideoData[0],
      videolist: []
    }
  }


  handleClick(clickedVideo){
    this.setState({
      videoPlaying: clickedVideo
    }, () => {console.log(this.state)});
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><Search /></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><VideoPlayer video={this.state.videoPlaying}/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><VideoList videos={exampleVideoData} handleClick = {this.handleClick.bind(this)}/></h5></div>
          </div>
        </div>
      </div>

    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
