import { useState, useEffect } from 'react'
interface Profile {
  name: string
  bio: string
}
function Profile () {
  const [data, setData] = useState<Profile | null>(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  const styles = {
    backgroundColor: '#eaeaff',
    padding: '1.5rem',
    borderRadius: '0.5rem',
  }

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  )
}

export default Profile
