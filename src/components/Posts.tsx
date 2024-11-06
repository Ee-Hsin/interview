import { useState, useEffect } from "react"

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [error, setError] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchPosts = async () => {
        setLoading(true)
        setError("")

        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            if (!res.ok) throw new Error("issue retrieving data")

            const data = await res.json()
            setPosts(data)
        } catch (err: any) {
            throw new Error("There was an error:" + err.message)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    fetchPosts()
  }, [])

  return (
    <div>
      {posts.map((post) => (
        <div>{post.title}</div>
      ))}
    </div>
  )
}

export default Posts
