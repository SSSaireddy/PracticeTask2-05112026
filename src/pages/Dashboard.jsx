import { useMemo } from 'react'
import { BookOpen, CheckCircle2, Clock3, TrendingUp, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import CourseCard from '../components/CourseCard'

export default function Dashboard({ courses, enrolled, completed }) {
  const myCourses = courses.filter(c => enrolled.includes(c.id))
  const done = Object.values(completed).reduce((n, ids) => n + ids.length, 0)
  const total = myCourses.reduce((n, c) => n + c.lessons.length, 0)
  const overall = total ? Math.round(done / total * 100) : 0
  const featured = useMemo(() => myCourses.slice(0, 2), [myCourses])
  return <div className="page-content">
    <section className="welcome-banner"><div><span className="eyebrow light">MONDAY MOTIVATION</span><h1>Welcome back, Arjun! 👋</h1><p>Every lesson brings you one step closer to your goals. Ready to learn something new today?</p><Link to="/courses" className="btn btn-white">Explore courses <ArrowRight size={16}/></Link></div><div className="banner-art">📚<span></span></div></section>
    <div className="section-heading"><div><h2>Your learning at a glance</h2><p>Here's how you're doing this week.</p></div></div>
    <div className="stats-grid">
      <div className="stat-card"><div className="stat-icon purple"><BookOpen/></div><div><span>Enrolled courses</span><strong>{myCourses.length}</strong><small>Keep building your skills</small></div></div>
      <div className="stat-card"><div className="stat-icon green"><CheckCircle2/></div><div><span>Lessons completed</span><strong>{done}</strong><small>One lesson at a time</small></div></div>
      <div className="stat-card"><div className="stat-icon orange"><TrendingUp/></div><div><span>Overall progress</span><strong>{overall}%</strong><small>Across your courses</small></div></div>
      <div className="stat-card"><div className="stat-icon blue"><Clock3/></div><div><span>Learning status</span><strong>{total ? 'Active' : 'Start'}</strong><small>Build a daily habit</small></div></div>
    </div>
    <div className="section-heading section-spaced"><div><h2>Continue learning</h2><p>Pick up right where you left off.</p></div><Link to="/my-courses" className="text-link">View all <ArrowRight size={15}/></Link></div>
    {featured.length ? <div className="course-grid">{featured.map(c => <CourseCard key={c.id} course={c} enrolled progress={Math.round((completed[c.id]?.length || 0)/c.lessons.length*100)}/>)}</div> : <div className="empty-state"><span>🎓</span><h3>Your learning journey starts here</h3><p>Explore the catalogue and enrol in your first course.</p><Link to="/courses" className="btn btn-primary">Browse courses</Link></div>}
  </div>
}