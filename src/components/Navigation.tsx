import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <ul className="flex items-center justify-center gap-2 bg-slate-950 p-2 px-4 text-2xl text-slate-50 md:gap-10 lg:gap-20">
        <NavLink to={'/'}>
          <li>
            <button className="p-4 hover:rounded-lg hover:bg-slate-50 hover:text-slate-950 lg:px-10">
              Home
            </button>
          </li>
        </NavLink>
        <NavLink to={'/about'}>
          <li>
            <button className="p-4 hover:rounded-lg hover:bg-slate-50 hover:text-slate-950 lg:px-10">
              About
            </button>
          </li>
        </NavLink>
        <NavLink to={'/blog'}>
          <li>
            <button className="p-4 hover:rounded-lg hover:bg-slate-50 hover:text-slate-950 lg:px-10">
              Blog
            </button>
          </li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Navigation
