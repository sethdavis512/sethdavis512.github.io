import React from 'react'
import { Link } from 'gatsby'
import '../styles/bulma.min.css'
import '../styles/main.css'

class Layout extends React.Component {
    render() {
        const { children } = this.props

        return (
            <div className="site-wrapper">
                <header>
                    <nav
                        className="navbar is-dark"
                        role="navigation"
                        aria-label="main navigation"
                    >
                        <div className="container">
                            <div className="columns is-centered">
                                <div className="column is-two-thirds-tablet">
                                    <div className="navbar-brand">
                                        <Link
                                            className="navbar-item logo"
                                            to={`/`}
                                        >{`<TWS />`}</Link>
                                        <a
                                            role="button"
                                            className="navbar-burger"
                                            aria-label="menu"
                                            aria-expanded="false"
                                        >
                                            <span aria-hidden="true"></span>
                                            <span aria-hidden="true"></span>
                                            <span aria-hidden="true"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                <main>
                    <section className="section">
                        <div className="container">
                            <div className="columns is-centered is-two-thirds-tablet">
                                <div className="column is-8">{children}</div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="footer">
                    © {new Date().getFullYear()} Tech with Seth
                </footer>
            </div>
        )
    }
}

export default Layout
