import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import CourseCard from '../components/CourseCard'
export default function Courses({ courses, enrolled, onEnroll }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('popular')
  const categories = ['All', ...new Set(courses.map(c => c.category))]
  const filtered = useMemo(() => courses.filter(c => (category === 'All' || c.category === category) && `${c.title} ${c.instructor} ${c.category}`.toLowerCase().includes(search.toLowerCase())).sort((a,b) => sort === 'az' ? a.title.localeCompare(b.title) : sort === 'rating' ? b.rating-a.rating : b.students-a.students), [courses, category, search, sort])
  return <div className="page-content"><div className="page-intro"><span className="eyebrow">LEARN SOMETHING NEW</span><h1>Explore courses</h1><p>Discover practical courses taught by experienced instructors from India.</p></div>
    <div className="catalogue-tools"><div className="search-box"><Search size={18}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search courses, skills or instructors..."/></div><div className="sort-box"><SlidersHorizontal size={17}/><select value={sort} onChange={e=>setSort(e.target.value)}><option value="popular">Most popular</option><option value="rating">Top rated</option><option value="az">Name: A to Z</option></select></div></div>
    <div className="filter-chips">{categories.map(c=><button key={c} onClick={()=>setCategory(c)} className={`chip ${category===c?'selected':''}`}>{c}</button>)}</div>
    <div className="results-line"><b>{filtered.length} courses</b><span>Find the right skill for your next step</span></div>
    {filtered.length ? <div className="course-grid">{filtered.map(c=><CourseCard key={c.id} course={c} enrolled={enrolled.includes(c.id)} onEnroll={()=>onEnroll(c.id)}/>)}</div> : <div className="empty-state"><span>🔎</span><h3>No courses found</h3><p>Try another search term or category.</p></div>}
  </div>
}