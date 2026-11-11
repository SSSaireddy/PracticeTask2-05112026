import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import MyCourses from './pages/MyCourses'
import LessonViewer from './pages/LessonViewer'
import Quiz from './pages/Quiz'
import Profile from './pages/Profile'
import Admin from './pages/Admin'
import { initialCourses } from './data/courses'
import { getCourses, saveCourses, getEnrolled, saveEnrolled, getCompleted, saveCompleted, getScores, saveScores } from './utils/storage'

export default function App() {
 const [courses,setCourses]=useState(()=>getCourses()||initialCourses)
 const [enrolled,setEnrolled]=useState(getEnrolled)
 const [completed,setCompleted]=useState(getCompleted)
 const [scores,setScores]=useState(getScores)
 useEffect(()=>saveCourses(courses),[courses])
 useEffect(()=>saveEnrolled(enrolled),[enrolled])
 useEffect(()=>saveCompleted(completed),[completed])
 useEffect(()=>saveScores(scores),[scores])
 const enroll=id=>setEnrolled(v=>v.includes(id)?v:[...v,id])
 const complete=(id,index)=>setCompleted(v=>({...v,[id]:v[id]?.includes(index)?v[id]:[...(v[id]||[]),index]}))
 return <Routes><Route element={<Layout/>}>
  <Route path="/" element={<Dashboard courses={courses} enrolled={enrolled} completed={completed}/>}/>
  <Route path="/courses" element={<Courses courses={courses} enrolled={enrolled} onEnroll={enroll}/>}/>
  <Route path="/course/:id" element={<CourseDetails courses={courses} enrolled={enrolled} onEnroll={enroll} completed={completed}/>}/>
  <Route path="/my-courses" element={<MyCourses courses={courses} enrolled={enrolled} completed={completed}/>}/>
  <Route path="/lesson/:id/:index" element={<LessonViewer courses={courses} completed={completed} onComplete={complete}/>}/>
  <Route path="/quiz/:id" element={<Quiz courses={courses} scores={scores} onSaveScore={(id,result)=>setScores(v=>({...v,[id]:result}))}/>}/>
  <Route path="/profile" element={<Profile/>}/>
  <Route path="/admin" element={<Admin courses={courses} onSaveCourses={setCourses}/>}/>
  <Route path="*" element={<Navigate to="/" replace/>}/>
 </Route></Routes>
}