import axios from 'axios'
import { useState } from 'react'

const Article = ({ article }: { article: any }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editContent, setEditCotent] = useState('')
  const dateFormater = (date: Date) => {
    let newDate = new Date(date).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    })
    return newDate
  }
  const handleEdit = () => {
    const data = {
      author: article.author,
      content: editContent ? editContent : article.content,
      date: article.date,
      updatedDate: Date.now(),
    }
    axios.put(`http://localhost:3004/articles/${article.id}`, data).then(() => {
      setIsEditing(false)
    })
  }
  const handleDelete = () => {
    axios.delete(`http://localhost:3004/articles/${article.id}`).then(() => {
      window.location.reload()
    })
  }
  return (
    <div>
      <div>
        <h3>{article.author}</h3>
        <em>Posté le {dateFormater(article.date)} </em>
      </div>
      {isEditing ? (
        <textarea
          defaultValue={editContent ? editContent : article.content}
          onChange={(e) => setEditCotent(e.target.value)}
          autoFocus
        ></textarea>
      ) : (
        <p>{editContent ? editContent : article.content}</p>
      )}
      <div>
        {isEditing ? (
          <button onClick={() => handleEdit()}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button
          onClick={() =>
            window.confirm('Voulez vous vraiment supprimer cet article ? ')
              ? handleDelete()
              : null
          }
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Article
