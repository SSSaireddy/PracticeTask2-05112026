import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { BookOpen, LayoutDashboard, Library, UserRound, Settings, Menu, GraduationCap, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  ['/', 'Dashboard', LayoutDashboard],
  ['/courses', 'Explore Courses', BookOpen],
  ['/my-courses', 'My Courses', Library],
  ['/profile', 'My Profile', UserRound],
  ['/admin', 'Admin Panel', Settings]
]
export default function Layout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const title = links.find(([path]) => path === location.pathname)?.[1] || 'Course Details'
  return <div className="app-shell">
    <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
      <div className="brand"><span className="brand-word" aria-label="Sainyx"><span>Sain</span><span className="brand-y">y</span><span>x</span><small>LEARNING PLATFORM</small></span><button className="mobile-close" onClick={() => setOpen(false)}><X/></button></div>
      <div className="nav-label">MENU</div>
      <nav>{links.map(([path, label, Icon]) => <NavLink end={path === '/'} to={path} key={path} onClick={() => setOpen(false)} className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}><Icon size={18}/><span>{label}</span></NavLink>)}</nav>
      <div className="sidebar-bottom"><div className="help-card"><div className="help-emoji">💡</div><b>Keep learning!</b><p>Small steps every day lead to big results.</p></div><div className="sidebar-user"><div className="avatar">AR</div><div><b>Arjun Reddy</b><small>Student Account</small></div></div></div>
    </aside>
    {open && <div className="mobile-backdrop" onClick={() => setOpen(false)} />}
    <main className="main-area">
      <header className="topbar"><button className="menu-toggle" onClick={() => setOpen(true)}><Menu/></button><div><div className="breadcrumb">Workspace / <b>{title}</b></div><div className="mobile-page-title">{title}</div></div><div className="topbar-right"><span className="date-label">Your learning space</span><div className="avatar">AR</div></div></header>
      <div className="page-wrap"><Outlet/></div>
      <footer className="footer">© 2026 Sainyx Learning Platform <span>Made for curious minds in India 🇮🇳</span></footer>
    </main>
  </div>
}