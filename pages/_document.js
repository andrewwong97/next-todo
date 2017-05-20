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
      @import url('https://fonts.googleapis.com/css?family=Varela+Round');

 			body {
 				font-family: 'Varela Round', Helvetica, sans-serif;
        color: #2575bb;
 			}
      
      a {
        text-decoration: none !important;
      }

      a:visited {
        text-decoration: none !important;
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
