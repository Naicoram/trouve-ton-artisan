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

  if (isLoaded) {
    return (
      <div className='.artisan-profile'>
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
    );
  } else {
    return (
      <div>
        <h3>Loading</h3>
      </div>
    );
  }
}

export default Details;