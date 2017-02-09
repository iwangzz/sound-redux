import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { CLIENT_ID } from '../../src/constants/auth'

export default class Stream extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //     }
    // }

    // componentWillMount() {
    //     console.log('will mount')
    // }

    componentDidMount() {
        // console.log('did update')
        const audioElement = ReactDOM.findDOMNode(this.refs.audio)
        
        if (!audioElement) {return;}

        const  { activeTrack } = this.props

        if (activeTrack)  {
            audioElement.play();
        } else {
            audioElement.pause();
        }

    }

    render() {
        const {user, tracks = [], activeTrack, onAuth, onPlay}  = this.props
        return (
            <div>
                <div>
                {
                  user ? <div>{user.username}</div> : <button onClick={onAuth} type="button">Login</button>
                }
                </div>
                <br/>
                <ul>
                    {tracks.map((track, index) => {return (
                        <li key={index} className="track">
                            {track.origin.title}
                            <button type="button" onClick={() => onPlay({track})}>Play</button>
                        </li>
                    )})}
                </ul>
                {
                activeTrack ?
                  <audio id="audio" ref="audio" src={`${activeTrack.origin.stream_url}?client_id=${CLIENT_ID}`}></audio> :
                  null
                }
            </div>
        )
    }
}