import PageHeading from '../components/PageHeading';
import SearchMovies from '../components/SearchMovies';

export default function MoviesView() {
  return (
    <>
      <PageHeading text="Search movies" />
      <SearchMovies />
    </>
  );
}