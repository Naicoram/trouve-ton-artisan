import { useState, useEffect } from 'react';
import './Details.css';
import { useParams, useNavigate } from "react-router";

function Details() {
  const id = useParams().id;
  const [isLoaded, setIsLoaded] = useState(false);
  const [artisan, setArtisan] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/assets/datas.json")
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        const filteredArtisans = result.filter((artisan) => artisan.id === id);
        if (filteredArtisans.length > 0) {
          setArtisan(filteredArtisans[0]);
        } else {
          navigate("/404");
        }
      });
  }, []);

  if (!isLoaded) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="details-container">
      {/* Partie gauche : infos artisan */}
      <div className="artisan-profile">
        <h3>{artisan.name}</h3>
        <img
          className="artisan-img"
          src="/assets/profile.jpg"
          alt={artisan.name}
        />
        <div className="stars">
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className="star"
              style={artisan.note >= i ? { background: "#F8CA00" } : {}}
            ></span>
          ))}
        </div>
      </div>

      {/* Partie droite : formulaire de contact */}
      <div className="contact-form">
        <h3>Contactez {artisan.name}</h3>
        <form className='contact-content'>
          <div>
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default Details;
