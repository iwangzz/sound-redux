import React, { Component } from 'react'

export default class Callback extends Component {
    componentDidMount() {
        console.log(111);
        window.setTimeOut(opener.SC.connectCallback, 1)
    }

    render() {
        return (
            <div><p>The page should close soon.</p></div>
        )
    }
}