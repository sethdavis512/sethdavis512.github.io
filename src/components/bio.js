/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import MediaBlock from './media-block'

const Bio = () => {
    const data = useStaticQuery(graphql`
        query BioQuery {
            avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
                childImageSharp {
                    fixed(width: 50, height: 50) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            site {
                siteMetadata {
                    author
                    social {
                        twitter
                        github
                        codepen
                    }
                }
            }
        }
    `)

    const { author, social } = data.site.siteMetadata

    return (
        <div className="box">
            <MediaBlock
                img={
                    <Image
                        fixed={data.avatar.childImageSharp.fixed}
                        alt={author}
                        imgStyle={{
                            borderRadius: `50%`
                        }}
                    />
                }
            >
                <p>
                    Written by <strong>{author}</strong>.
                    <br />
                    <a href={`https://github.com/${social.github}`}>
                        GitHub
                    </a>{' '}
                    <a href={`https://codepen.com/${social.codepen}`}>
                        Codepen
                    </a>{' '}
                    <a href={`https://twitter.com/${social.twitter}`}>
                        Twitter
                    </a>
                </p>
            </MediaBlock>
        </div>
    )
}

export default Bio
