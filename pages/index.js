import Head from 'next/head'
import Link from 'next/link'
import Status from '../components/status.js'
import Task from '../components/task.js'
import Header from '../components/header.js'


export default () => (
    <div className="App">
      	<Head>
      		<title>WorkBook | Feed-Based Task Tracking</title>
      	</Head>
        <Header />
    		<div md={4} className="center-wrapper">
    			<h1>To Do</h1>
    			<Status />
    			<Task text="derp"/>
          <Task text="derp"/>
          <Task text="derp"/>
    		</div>

    	<style jsx global>{`
			.App {
				font-family: Helvetica, sans-serif;
			}

			.main-nav {
				display: flex;
				height: 40px;
				padding: 5px 40px;
				align-items: center;
				justify-content: space-between;
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
