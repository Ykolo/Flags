import axios from 'axios'
import { useState } from 'react'
import { cn } from '../libs/utils'

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
      content: editContent || article.content,
      date: article.date,
      updatedDate: Date.now(),
    }
    axios.put(`http://localhost:3004/articles/${article.id}`, data).then(() => {
      setIsEditing(false);
      setEditCotent("")
    }).catch((error) => {
      console.log("Erreur lors de l'edit", error);
    })
  }
  const handleDelete = () => {
    axios.delete(`http://localhost:3004/articles/${article.id}`).then(() => {
      window.location.reload()
    }).catch((error) => {
      console.log("Erreur lors de la suppression", error);
    })
  }
  return (
    <div className={cn('mx-40 mt-16 rounded-xl bg-slate-50 text-xl')}>
      <div className={cn('flex')}>
        <h3 className={cn('m-2')}>{article.author}</h3>
        <span className={cn('m-2 text-lg')}>
          Posté le {dateFormater(article.date)}{' '}
        </span>
      </div>
      {isEditing ? (
        <textarea
          defaultValue={editContent ? editContent : article.content}
          onChange={(e) => setEditCotent(e.target.value)}
          autoFocus
          className={cn("w-11/12 h-32 ml-16")}
        />
      ) : (
        <p className={cn('mx-4')}>
          {editContent ? editContent : article.content}
        </p>
      )}
      <div>
        {isEditing ? (
          <button
            onClick={() => handleEdit()}
            className={cn(
              'm-4 rounded-xl border-2 border-slate-950 bg-slate-950 px-4 py-2 text-slate-50 hover:bg-slate-50 hover:text-slate-950'
            )}
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className={cn(
              'm-4 rounded-xl border-2 border-slate-950 bg-slate-950 px-4 py-2 text-slate-50 hover:bg-slate-50 hover:text-slate-950'
            )}
          >
            Edit
          </button>
        )}
        <button
          onClick={() =>
            window.confirm('Voulez vous vraiment supprimer cet article ? ')
              ? handleDelete()
              : null
          }
          className={cn(
            'm-4 rounded-xl border-2 border-red-500 bg-red-500 px-4 py-2 text-red-50 hover:bg-red-50 hover:text-red-500'
          )}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Article
