import React from 'react'

export default function Commentary(props) {
        return (
            <li>
                <p><i>{props.user}</i> says:</p>
                <p>{props.text}</p>
            </li>
        )
}