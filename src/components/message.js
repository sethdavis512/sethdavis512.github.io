import React from 'react'

const Message = ({ children, className }) => {
    return (
        <article className={`message ${className}`}>
            <div className="message-body">{children}</div>
        </article>
    )
}

export default Message
