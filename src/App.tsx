import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Blog from './pages/Blog'
import Error from './pages/Error'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
