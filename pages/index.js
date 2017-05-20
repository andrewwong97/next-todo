import Head from 'next/head'
import Link from 'next/link'
import Status from '../components/status.js'
import Task from '../components/task.js'
import Header from '../components/header.js'


export default class extends React.Component {
  static async getInitialProps() {
		return {data: ['one', 'two', 'three', 'four', 'five']}
	}

  render() {
    return (
        <div className="App">
          	<Head>
          		<title>WorkBook | Feed-Based Task Tracking</title>
          	</Head>
        		<div className="center-wrapper">
        			<h1>To Do</h1>
        			<Status />
              <ul className="tasklist">
          			{this.props.data.map((i) => {
          				return (<Task text={i} />);
          			})}
          		</ul>
        		</div>

        	<style jsx global>{`
    			h1 {
    				font-weight: 600;
    			}

    			h2 {
    				font-weight: 400;
    			}
        	`}</style>
        </div>
    );
  }

}
