import React from 'react';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      videos:[
        {songid:'Io2hbcrAYBw', songname:'twenty one pilots: The Hype', selected:false},
        {songid:'BKLVpDTZOPQ', songname:'Foster The People: Sit Next to Me', selected:false},
        {songid:'qr1-WpWOUk8', songname:'lovelytheband: broken', selected:false},
        {songid:'veHqJSC-9Lo', songname:'The XX: Intro long version', selected:false}
      ],
      selected:[]
    }
  }

  handlechange = (event) => {
    console.log(event.target.name)
    let song = this.state.videos.find((obj) => obj.songid === event.target.name )
    song.selected = !song.selected
    this.setState({
      ...song
    })
    console.log(this.state)
  }

  // for next time fix .map so that its logic is inthe filter method
  render() {
    const selected = this.state.videos.filter((obj) => obj.selected).map(obj => obj.songid)
    console.log(selected)
    console.log(selected.join(','))
    return (
      <div>
      <div>
        Hello youtube2
      </div>

      <iframe width="800" height="400" 
        src={`https://www.youtube.com/embed/${selected.join(',')}?&loop=1&playlist=${selected.join(',')}`}>
      </iframe>

      <form>
        
      {this.state.videos.map((video,idx) => (
        <label style={{display: 'block'}} onChange={this.handlechange}>
          
        <input type="checkbox" name={video.songid} />
        {video.songname}
        </label>
      ))}


      </form>

      </div>
     
    );
  }
}

export default App;
