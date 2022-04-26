import { fetchByName } from '../../services/fetchMovies';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSearchParams} from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import s from './SearchMovies.module.css';

export default function SearchMovies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    if (searchQuery.trim())
    fetchByName(searchQuery).then(response =>setResult([...response.results]));
  }, [searchQuery]);

  const handleSubmit = e => {  
    e.preventDefault();
    setSearchQuery(e.target[0].value);
    setSearchParams({ query: e.target[0].value });
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" className={s.input} />
        <button type="submit" className={s.button}>
          <FaSearch size="1.5em" fill="#2h" />
        </button>
      </form>

      {result &&
        result.map(({ original_title, id }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{original_title}</Link>
            </li>
          );
        })}
    </>
  );
}