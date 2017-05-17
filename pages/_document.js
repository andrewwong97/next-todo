// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import Header from '../components/header'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage()
    const styles = flush()
    return { html, head, styles }
  }

  render () {
    return (
     <html>
       <Head>
         <style>{`body { margin: 0 } /* custom! */`}</style>
       </Head>
       <Header />
       <body>
         <Main />
         <NextScript />
       </body>
       <style jsx global>{`
 			body {
 				font-family: Helvetica, sans-serif;
 			}

      a:visited {
        text-decoration: none;
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
     </html>
    )
  }
}
