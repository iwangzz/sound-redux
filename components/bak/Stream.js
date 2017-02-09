import React, {Component} from 'react'
import { connect } from 'react-redux'

class Stream extends Component {

    constructor() {
        super()
        this.state = {
        }
    }

    componentWillMount() {
        // console.log('will mount')
    }

    componentDidMount() {
        // console.log('did update')
    }

    render() {
        const {tracks = []}  = this.props
        return (
            <div>
                <ul>
                    {tracks.map((track, index) => {return (
                        <li key={index} className="track">
                            {track.title}
                            <button type="button" onClick={() => this.setState({ [index]: !this.state[index] })}>{this.state[index] ? 'Dislike' : 'Like'}</button>
                        </li>
                    )})}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const tracks = state.track;
    return {
        tracks
    }
}

export default connect(mapStateToProps)(Stream)


