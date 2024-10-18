import axios from 'axios'
import { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import Article from './Article'

const Blog = () => {
  const [blogData, setBlogData] = useState([])
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState(false)

  const getData = () => {
    axios.get('http://localhost:3004/articles').then((res) => {
      setBlogData(res.data)
    })
  }
  useEffect(() => {
    getData()
  }, [])

  const handleSubmit = (e: any) => {
    e.preventDeafult()
    content.length < 140
      ? setError(true)
      : axios.post('http://localhost:3004/articles', {
          author,
          content,
          date: Date.now(),
        }),
      setError(false)
    setAuthor('')
    setContent('')
    getData()
  }
  return (
    <div>
      <Navigation />
      <h1>Blog</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <input
          type="text"
          placeholder="Nom"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        <textarea
          placeholder="Message"
          onChange={(e) => {
            setContent(e.target.value)
          }}
          className="{error ? 'border-red-500' : 'border-gray-300'} h-40 w-full"
          value={content}
        ></textarea>
        {error && (
          <p className="text-2xl text-red-500">
            Veuillez écrire plus de 140 caractères
          </p>
        )}
        <input
          type="submit"
          value="Envoyer
        "
        />
      </form>
      <ul>
        {blogData
          .sort((a: any, b: any) => b.date - a.date)
          .map((article: any) => {
            return <Article key={article.id} article={article} />
          })}
      </ul>
    </div>
  )
}

export default Blog
