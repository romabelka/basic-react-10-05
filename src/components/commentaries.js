import React from 'react'
import Commentary from './commentary'
import toggleDisplay from '../decorators/toggle-display'

function Commentaries(props) {
    return (
        <div>
            <hr />
            <h3>Commentaries ({ props.comments.length })</h3>
            <button onClick = { props.toggleDisplay }>
                { props.isDisplayed ? 'hide comments' : 'display comments' }
            </button>
            <ul>
                { props.isDisplayed && props.comments.map((comment, id) => {
                    return (
                        <Commentary key = { id }
                                    user = { comment.user }
                                    text = { comment.text } />
                    )
                }) }
            </ul>
        </div>
    )
}

export default toggleDisplay(Commentaries)