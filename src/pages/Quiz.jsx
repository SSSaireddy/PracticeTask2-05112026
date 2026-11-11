import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CheckCircle2, Trophy } from 'lucide-react'
const questions = [
  {q:'Which technology is primarily used to build React user interfaces?', options:['React','Excel','MySQL','Photoshop'], answer:0},
  {q:'What is a reusable piece of UI in React called?', options:['Database','Component','Spreadsheet','Server'], answer:1},
  {q:'Which hook is commonly used to manage component state?', options:['useRoute','useStyle','useState','usePage'], answer:2},
  {q:'Which syntax is commonly used to describe UI in React?', options:['JSX','SQL','XML Schema','Markdown only'], answer:0},
  {q:'What is React Router used for?', options:['Image editing','Page navigation','Database backups','CSS animation'], answer:1}
]
export default function Quiz({courses,scores,onSaveScore}) {
 const {id}=useParams(), course=courses.find(c=>c.id===id), [answers,setAnswers]=useState({}),[submitted,setSubmitted]=useState(false)
 if(!course)return <div className="empty-state">Course not found</div>
 const score=questions.filter((q,i)=>answers[i]===q.answer).length, percent=Math.round(score/questions.length*100)
 return <div className="page-content quiz-wrap"><Link to={`/course/${id}`} className="back-link">← Back to course</Link><div className="quiz-header"><span className="eyebrow">KNOWLEDGE CHECK</span><h1>{course.title} — Quiz</h1><p>Answer all five questions. You need 60% to pass this practice quiz.</p></div>{!submitted?<div className="panel quiz-panel">{questions.map((q,i)=><div className="question-block" key={q.q}><div className="question-count">QUESTION {i+1} OF {questions.length}</div><h3>{q.q}</h3><div className="answer-list">{q.options.map((o,j)=><button key={o} onClick={()=>setAnswers(a=>({...a,[i]:j}))} className={`answer-option ${answers[i]===j?'chosen':''}`}><span className="answer-letter">{String.fromCharCode(65+j)}</span>{o}</button>)}</div></div>)}<button className="btn btn-primary btn-full" disabled={Object.keys(answers).length!==questions.length} onClick={()=>{setSubmitted(true);onSaveScore(id,{score,percent,passed:percent>=60})}}>Submit answers</button></div>:<div className="panel result-panel"><div className="result-trophy"><Trophy size={38}/></div><span className="eyebrow">QUIZ RESULT</span><h1>{percent}%</h1><h2>{percent>=60?'Well done! You passed.':'Keep practising — you can do better.'}</h2><p>You answered {score} out of {questions.length} questions correctly.</p><div className="result-bar"><span style={{width:`${percent}%`}}/></div><div className="result-actions"><button className="btn btn-outline" onClick={()=>{setAnswers({});setSubmitted(false)}}>Try again</button><Link className="btn btn-primary" to={`/course/${id}`}>Back to course</Link></div></div>}</div>
}