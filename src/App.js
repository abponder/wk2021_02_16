import React from 'react';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      videos:[
        {songid:'Io2hbcrAYBw', songname:'twenty one pilots: The Hype', selected:true},
        {songid:'BKLVpDTZOPQ', songname:'Foster The People: Sit Next to Me', selected:true},
        {songid:'qr1-WpWOUk8', songname:'lovelytheband: broken', selected:true},
        {songid:'veHqJSC-9Lo', songname:'The XX: Intro long version', selected:true}
      ],
      currentselection:[
        {songid:'Io2hbcrAYBw', songname:'twenty one pilots: The Hype', selected:true},
        {songid:'BKLVpDTZOPQ', songname:'Foster The People: Sit Next to Me', selected:true},
        {songid:'qr1-WpWOUk8', songname:'lovelytheband: broken', selected:true},
        {songid:'veHqJSC-9Lo', songname:'The XX: Intro long version', selected:true}
      ],
      selected:['Io2hbcrAYBw','BKLVpDTZOPQ','qr1-WpWOUk8','veHqJSC-9Lo']
    }
  }

  handlechange = (event) => {
    console.log(event.target.name)
    let songs = this.state.currentselection.map((obj) => {
      if(obj.songid === event.target.name){
        obj.selected = !obj.selected
      }
      return obj
    } )
    
    this.setState({
      currentselection:songs
    })
  }

  onrefreshsubmit = (event) => {
    event.preventDefault()
    this.setState({
      videos:this.state.currentselection,
      selected:this.state.currentselection.filter((obj) => obj.selected).map(obj => obj.songid)
    })
  }
    
  // for next time fix .map so that its logic is inthe filter method
  //https://developers.google.com/youtube/iframe_api_reference
  //https://www.npmjs.com/package/react-player
  render() {
    
    // const selected = this.state.videos.filter((obj) => obj.selected).map(obj => obj.songid)
    // const selected = this.state.currentselection.filter((obj) => obj.selected).map(obj => obj.songid)
    // console.log(selected)
    // console.log(selected.join(','))
    return (
      <div>
      <div>
        Hello youtube2
      </div>

      <iframe width="800" height="400" 
        src={`https://www.youtube.com/embed/${this.state.selected.join(',')}?&loop=1&playlist=${this.state.selected.join(',')}`}>
      </iframe>

      <form onSubmit={this.onrefreshsubmit}>
        
      {this.state.currentselection.map((video,idx) => (
        <label style={{display: 'block'}} onChange={this.handlechange}>
          
        <input type="checkbox" checked={video.selected} name={video.songid} />
        {video.songname}
        </label>
      ))}

      <input
        type='submit'
        value='refresh'
      />

      </form>


      </div>
     
    );
  }
}

export default App;
