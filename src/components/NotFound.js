import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Desculpe</h2>
      <p>Página não encontrada</p>
      <Link to="/">Voltar para a página inicial...</Link>
    </div>
  );
};

export default NotFound;
