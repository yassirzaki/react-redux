import React from 'react'

export default function Hello(props) {
    const {firstname, lastname} = props;
    return (
        <div className="Hello">
            Hello {firstname} {lastname}
        </div>
    )
}
