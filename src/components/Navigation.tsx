import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <ul className="flex items-center justify-center gap-20 bg-slate-950 p-2 text-2xl text-slate-50">
        <NavLink to={'/'}>
          <li>
            <button className="p-4 px-10 hover:rounded-lg hover:bg-slate-50 hover:text-slate-950">
              Home
            </button>
          </li>
        </NavLink>
        <NavLink to={'/about'}>
          <li>
            <button className="p-4 px-10 hover:rounded-lg hover:bg-slate-50 hover:text-slate-950">
              About
            </button>
          </li>
        </NavLink>
        <NavLink to={'/blog'}>
          <li>
            <button className="p-4 px-10 hover:rounded-lg hover:bg-slate-50 hover:text-slate-950">
              Blog
            </button>
          </li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Navigation
