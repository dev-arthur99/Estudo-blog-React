import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      setLoading(false);
      history.push('/');
    });
  };

  return (
    <div>
      <div className="create">
        <h2>Novo post</h2>
        <form onSubmit={handleSubmit}>
          <label>Título:</label>
          <input
            type="text"
            required
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <label>Texto:</label>
          <textarea
            required
            value={body}
            onChange={e => setBody(e.target.value)}
          ></textarea>
          <label>Autor:</label>
          <input
            type="text"
            required
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
          {!loading && <button>Postar</button>}
          {loading && <button disabled>Postando...</button>}
        </form>
      </div>
    </div>
  );
};

export default Create;
