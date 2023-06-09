import "./app.css"
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Post from './components/post/Post';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Body from './components/body/Body';

function App() {
  return(
    <div className="app">
      <Header />
      <div className="land">
        <Sidebar />
          <Routes>
            <Route path="/" element={<Post />} />
            <Route path="/address" element={<Body />} />
          </Routes>
      </div>
    </div>
  )
}

export default App;
