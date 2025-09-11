import { useState, useEffect } from "react";
import "./Liste.css";
import { useSearchParams, useNavigate } from "react-router";

const routeToCategory = {
  batiment: "Bâtiment",
  service: "Services",
  fabrication: "Fabrication",
  alimentation: "Alimentation",
};

function Liste() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  const [isLoaded, setIsLoaded] = useState(false);
  const [artisanList, setArtisanList] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/assets/datas.json")
      .then((res) => res.json())
      .then((result) => {
        let filteredArtisans = result;
        if (category) {
          if (!Object.keys(routeToCategory).includes(category)) {
            navigate("/404");
          }
          filteredArtisans = filteredArtisans.filter(
            (artisan) => artisan.category === routeToCategory[category]
          );
        }
        if (search) {
          console.log(filteredArtisans);
          let lowerSearch = search.toLowerCase();
          filteredArtisans = filteredArtisans.filter(
            (artisan) =>
              artisan.name.toLowerCase().includes(lowerSearch) ||
              artisan.specialty.toLowerCase().includes(lowerSearch) ||
              artisan.location.toLowerCase().includes(lowerSearch)
          );
        }
        setArtisanList(filteredArtisans);
        setIsLoaded(true);
      });
  }, []);

  if (isLoaded) {
    return (
      <div className="artisan-list">
        <h1 className="artisan-title">NOS ARTISANS</h1>
        <div className="artisan-grid">
          {artisanList.map((artisan) => {
            return (
              <div
                className="artisan-card"
                onClick={() => navigate("/details/" + artisan.id)}
                key={artisan.id}
              >
                <img
                  className="artisan-img"
                  src="/assets/profile.jpg"
                  alt={artisan.name}
                />
                <h3 className="artisan-name">{artisan.name}</h3>
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span
                      key={i}
                      className="star"
                      style={artisan.note >= i ? { background: "#F8CA00" } : {}}
                    ></span>
                  ))}
                </div>
                <p className="artisan-speciality">{artisan.speciality}</p>
                <p className="artisan-location">{artisan.location}</p>
              </div>
            );
          })}
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

export default Liste;
