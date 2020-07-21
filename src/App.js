import React ,{ useState, useEffect} from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import Pagination from './components/ui/Pagination';
import './App.css';

const App = () => {
  const [items, setItems]=useState([])
  const [isLoading, setIsLoading]=useState(true)
  const [query, setQuery]=useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);


  useEffect(() => {
    const fetchChars= async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      
      setItems(result.data)
      setIsLoading(false)
    }
    fetchChars()
  }, [query])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentItems = items.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div className="container">
      <Header />
      <Search getQuery= {(q) =>setQuery(q) }/>
      <CharacterGrid isLoading={isLoading} items={currentItems} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={items.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
