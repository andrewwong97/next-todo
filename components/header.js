import Link from 'next/link'

export default () => (
  <div className="header">
    <nav className="main-nav">
      <a href="/" class="brand">WorkBook</a>
      <ul className="main-nav-wrapper">
        <li className="main-nav-item"><Link href="/one"><a className="main-nav-link">One</a></Link></li>
        <li className="main-nav-item"><Link href="/two"><a className="main-nav-link">Two</a></Link></li>
        <li className="main-nav-item"><Link href="/three"><a className="main-nav-link">Three</a></Link></li>
      </ul>
    </nav>
  </div>
)
