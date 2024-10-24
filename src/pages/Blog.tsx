import axios from 'axios'
import { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import { cn } from '../libs/utils'
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
    e.preventDefault() // Correction ici
    if (content.length < 140) {
      setError(true)
    } else {
      axios.post('http://localhost:3004/articles', {
        author,
        content,
        date: Date.now(),
      })
      setError(false)
      setAuthor('')
      setContent('')
      getData()
    }
  }

  return (
    <div>
      <Navigation />
      <div className={cn('flex', 'flex-col', 'items-center', 'justify-center')}>
        <h1 className={cn('text-7xl')}>Blog</h1>
        <form
          onSubmit={handleSubmit}
          className={cn(
            'mt-16',
            'flex',
            'flex-col',
            'items-center',
            'justify-center'
          )}
        >
          <input
            type="text"
            placeholder="Nom"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            className={cn('mb-8', 'rounded-xl', 'p-4', 'pr-96')}
          />
          <textarea
            placeholder="Message"
            onChange={(e) => setContent(e.target.value)}
            className={cn(
              error ? 'border-red-500' : 'border-gray-300',
              'h-40',
              'w-full',
              'rounded-xl',
              'p-4'
            )}
            value={content}
          ></textarea>
          {error && (
            <p className={cn('text-2xl', 'text-red-500')}>
              Veuillez écrire plus de 140 caractères
            </p>
          )}
          <input
            type="submit"
            value="Envoyer"
            className={cn(
              'mt-4',
              'text-xl',
              'text-slate-50',
              'rounded-3xl',
              'border-2',
              'border-slate-950',
              'bg-slate-950',
              'px-10',
              'py-4',
              'hover:bg-slate-50',
              'hover:text-slate-950'
            )}
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
    </div>
  )
}

export default Blog
