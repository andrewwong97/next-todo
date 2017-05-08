import Head from 'next/head'
import Link from 'next/link'
import Status from '../components/status.js'

export default () => (
    <div className="App">
    	<Head>
    		<title>My Admin Site</title>
    	</Head>
    	<nav className="main-nav">
    		<ul className="main-nav-wrapper">
    			<li className="main-nav-item"><Link href="/one"><a className="main-nav-link">One</a></Link></li>
    			<li className="main-nav-item"><Link href="/two"><a className="main-nav-link">Two</a></Link></li>
    			<li className="main-nav-item"><Link href="/three"><a className="main-nav-link">Three</a></Link></li>
    		</ul>
    	</nav>
		<div className="center-wrapper">
			<h1>Welcome to ToDo</h1>
			<Status />
		</div>
    	<style jsx>{`
			.App {
				font-family: Helvetica, sans-serif;
			}

			.main-nav {
				display: flex;
				height: 40px;
				align-items: center;
				justify-content: flex-end;
				font-weight: 300;
				border-bottom: 1px solid #dfdfdf;
			}

			.main-nav-wrapper {
				list-style-type: none;
			}

			.main-nav-wrapper > .main-nav-item {
				display: inline;
				margin: 20px;
				padding: 20px;
			}

			.main-nav-wrapper > .main-nav-item > .main-nav-link {
				text-decoration: none;
				color: #2575bb;
				transition: color 200ms ease-in;
			}

			.main-nav-link:hover {
				color: red;
			}

    		.center-wrapper {
    			display: block;
    			margin: 0 auto;
    			text-align: center;
    		}

			h1 {
				font-weight: 600;
			}

			h2 {
				font-weight: 400;
			}
    	`}</style>
    </div>
)
