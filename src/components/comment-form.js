import React, { Component } from 'react'

class CommentList extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Username" />
        <textarea placeholder="Comment text" />
        <button onClick={this.addComment} type="button">
          Add comment
        </button>
      </form>
    )
  }

  addComment() {
    console.log('add comment')
  }
}
