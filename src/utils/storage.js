const read = (key, fallback) => {
  try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback }
  catch { return fallback }
}
export const getCourses = () => read('vs_courses', null)
export const saveCourses = value => localStorage.setItem('vs_courses', JSON.stringify(value))
export const getEnrolled = () => read('vs_enrolled', ['react', 'python'])
export const saveEnrolled = value => localStorage.setItem('vs_enrolled', JSON.stringify(value))
export const getCompleted = () => read('vs_completed', {})
export const saveCompleted = value => localStorage.setItem('vs_completed', JSON.stringify(value))
export const getScores = () => read('vs_scores', {})
export const saveScores = value => localStorage.setItem('vs_scores', JSON.stringify(value))
export const getProfile = () => read('vs_profile', { name: 'Arjun Reddy', email: 'arjun.reddy@example.com', phone: '+91 98765 43210', city: 'Hyderabad, Telangana', bio: 'Curious learner exploring technology and design.' })
