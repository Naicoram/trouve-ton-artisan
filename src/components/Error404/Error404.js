import './Error404.css';

function Error404() {
  return (
    <div className="error404-container">
      <h1 className="error404-title">404</h1>
      <p className="error404-text">La page que vous cherchez n’existe pas.</p>
      <a href="/" className="error404-link">Retour à l’accueil</a>
    </div>
  );
}

export default Error404;
