import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.mdx
        console.log('post.frontmatter', post.frontmatter)
        const siteTitle = this.props.data.site.siteMetadata.title
        const { previous, next } = this.props.pageContext

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO
                    title={post.frontmatter.title}
                    description={post.frontmatter.description || post.excerpt}
                />
                <article>
                    <header>
                        <h1 className="title is-1">{post.frontmatter.title}</h1>
                        <p
                            style={{
                                marginBottom: post.frontmatter.updated
                                    ? '0.5rem'
                                    : '2rem'
                            }}
                        >
                            <strong>Posted:</strong> {post.frontmatter.date}
                        </p>
                        {post.frontmatter.updated && (
                            <p style={{ marginBottom: '2rem' }}>
                                <strong>Updated:</strong>{' '}
                                {post.frontmatter.updated}
                            </p>
                        )}
                    </header>
                    <div className="content">
                        <MDXRenderer>{post.body}</MDXRenderer>
                    </div>
                    <footer>
                        <Bio />
                    </footer>
                </article>

                <nav style={{ marginTop: '2rem' }}>
                    <ul>
                        <li>
                            {previous && (
                                <Link
                                    className="button is-default"
                                    to={previous.fields.slug}
                                    rel="prev"
                                >
                                    ← Go to: {previous.frontmatter.title}
                                </Link>
                            )}
                        </li>
                        <li>
                            {next && (
                                <Link
                                    className="button is-default"
                                    to={next.fields.slug}
                                    rel="next"
                                >
                                    Go to: {next.frontmatter.title} →
                                </Link>
                            )}
                        </li>
                    </ul>
                </nav>
                <script
                    async
                    src="https://static.codepen.io/assets/embed/ei.js"
                ></script>
            </Layout>
        )
    }
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        mdx(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            body
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                updated(formatString: "MMMM DD, YYYY")
                description
            }
        }
    }
`
