import React, { Component } from 'react'

export default class Comment extends Component {
    render(){
        const { commentaries } = this.props
        return (
            <div>

                <h2>User: {commentaries.user}</h2>
                <p>Text: {commentaries.text}</p>

            </div>
        )
    }
}
