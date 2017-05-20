import Link from 'next/link'

export default () => (
  <div className="header">
    <nav className="main-nav">
      <Link prefetch href="/" class="brand">WorkBook</Link>
      <ul className="main-nav-wrapper">
        <li className="main-nav-item"><Link prefetch href="/one"><a className="main-nav-link">One</a></Link></li>
        <li className="main-nav-item"><Link href="/two"><a className="main-nav-link">Two</a></Link></li>
        <li className="main-nav-item"><Link href="/three"><a className="main-nav-link">Three</a></Link></li>
      </ul>
    </nav>
    <style jsx global>{`
    .main-nav {
        display: flex;
        height: 40px;
        padding: 5px 40px;
        align-items: center;
        justify-content: space-between;
        font-weight: 300;
        // border-bottom: 1px solid #f5f5ff;
        // background: #f5f5ff;
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
    `}</style>
  </div>
)
