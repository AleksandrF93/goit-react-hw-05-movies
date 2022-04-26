import Container from './components/Container';
import AppBar from './components/AppBar';
import { Routes, Route } from 'react-router';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./views/HomePage'));
const MoviesPage = lazy(() => import('./views/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage'));

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;