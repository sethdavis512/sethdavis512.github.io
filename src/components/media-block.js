import React from 'react'

const MediaBlock = ({ children, img }) => {
    return (
        <article className="media">
            <figure className="media-left">
                <div className="image is-64x64">{img}</div>
            </figure>
            <div className="media-content">
                <div className="content">{children}</div>
                <nav className="level is-mobile">
                    <div className="level-left">
                        {/* <a className="level-item">
                            <span className="icon is-small">
                                <i className="fas fa-reply"></i>
                            </span>
                        </a> */}
                    </div>
                </nav>
            </div>
        </article>
    )
}

export default MediaBlock
