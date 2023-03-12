import { useEffect, useState } from 'react';
import { getPosts } from './api/axios'
import PostsList from './PostsList';
import Searchbar from './Searchbar';

export default function App() {

  const [posts, setPosts] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    getPosts().then(data => {
      setPosts(data)
      return data
    }).then(data => setSearchTerm(data))
  }, [])

  return (
    <main className="container my-5">
      <Searchbar posts={posts} setSearchTerm={setSearchTerm} />
      <PostsList searchTerm={searchTerm} />
    </main>
  )
}
