import './Home.css';

function Home() {
  return (
    <div className="home">
      <h3 className="home-title">COMMENT TROUVER MON ARTISAN ?</h3>
      <ol className="steps">
        <li>1- Choisir la catégorie d'artisanat dans le menu</li>
        <li>2- Choisir un artisan</li>
        <li>3- Le contacter via le formulaire de contact</li>
        <li>4- Une réponse sera apportée sous 48h</li>
      </ol>
    </div>
  );
}

export default Home;