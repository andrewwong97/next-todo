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
  </div>
)
