import { useState } from 'react'
import CourseCard from '../components/CourseCard'
export default function MyCourses({ courses, enrolled, completed }) {
  const [filter,setFilter]=useState('All')
  const list=courses.filter(c=>enrolled.includes(c.id)).filter(c=>filter==='All'||(filter==='Completed'?(completed[c.id]?.length||0)===c.lessons.length:(completed[c.id]?.length||0)<c.lessons.length))
  return <div className="page-content"><div className="page-intro"><span className="eyebrow">YOUR PERSONAL LIBRARY</span><h1>My courses</h1><p>All the courses you've enrolled in, in one place.</p></div><div className="filter-chips">{['All','In progress','Completed'].map(x=><button key={x} className={`chip ${filter===x?'selected':''}`} onClick={()=>setFilter(x)}>{x}</button>)}</div>{list.length?<div className="course-grid">{list.map(c=><CourseCard key={c.id} course={c} enrolled progress={Math.round((completed[c.id]?.length||0)/c.lessons.length*100)}/>)}</div>:<div className="empty-state"><span>📖</span><h3>{enrolled.length?'Nothing in this filter':'No enrolled courses yet'}</h3><p>Explore courses and start learning at your own pace.</p></div>}</div>
}