import React from 'react'

function Comment({comment}) {

    return (
        <li><h4>{comment.user}</h4>
            <p>{comment.id}</p>
        </li>
    )
}

export default Comment