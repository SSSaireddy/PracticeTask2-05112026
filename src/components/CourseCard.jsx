import { Link } from 'react-router-dom'
import { Clock3, Star, Users } from 'lucide-react'
export default function CourseCard({ course, progress = 0, enrolled = false, onEnroll }) {
  return <article className="course-card">
    <div className={`course-art ${course.color || 'violet'}`}><span className="course-art-icon">{course.icon || '📘'}</span><span className="course-category">{course.category}</span></div>
    <div className="course-content"><div className="course-meta"><span>{course.level}</span><span><Star size={13} fill="currentColor"/> {course.rating || '4.8'}</span></div>
      <Link className="course-title" to={`/course/${course.id}`}>{course.title}</Link><p className="instructor">by {course.instructor}</p>
      <div className="course-stats"><span><Clock3 size={14}/>{course.duration}</span><span><Users size={14}/>{course.students || 500} learners</span></div>
      {enrolled ? <><div className="progress-row"><span>Progress</span><b>{progress}%</b></div><div className="progress-track"><span style={{width:`${progress}%`}}/></div><Link className="btn btn-primary btn-full" to={`/course/${course.id}`}>Continue learning</Link></> :
      <button className="btn btn-outline btn-full" onClick={onEnroll}>View course & enrol</button>}
    </div>
  </article>
}