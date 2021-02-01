import React from 'react';
import useFetch from '../useFetch';
import BlogList from './BlogList';

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch(
    'http://localhost:8000/blogs'
  );

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Carregando...</div>}
      {blogs && <BlogList blogs={blogs} title="Todos os posts!" />}
    </div>
  );
};

export default Home;
