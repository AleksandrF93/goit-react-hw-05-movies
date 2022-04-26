import PageHeading from '../components/PageHeading';
import TrendingMoviesList from '../components/TrendingMoviesList';

export default function HomeView() {
  return (
    <>
      <PageHeading text="Trending movies" />
      <TrendingMoviesList />
    </>
  );
}