import {Routes, Route} from 'react-router-dom';
import BlogPage from './pages/BlogPage/BlogPage';
import BlogsPage from './pages/BlogsPage/BlogsPage';
import CreateBlogPage from './pages/createBlogPage/createBlogPage';

function App() {
  return (
    <Routes>
      <Route path='/post' element={<CreateBlogPage />}></Route>
      <Route path='/home' element={<BlogsPage />}></Route>
      <Route path='/blog' element={<BlogPage />}></Route>
    </Routes>
  );
}

export default App;
