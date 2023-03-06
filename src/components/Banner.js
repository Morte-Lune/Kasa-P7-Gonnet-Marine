////////////
// BANNER //
///////////

import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Banner() {
  
  const [homeLocation, setHomeLocation] = useState(false);
  const location = useLocation().pathname;

  useEffect(() => {
    if (location === "/") {
      setHomeLocation(true);
    }
  }, [location, homeLocation]);

  return (
    <div
      className={
        homeLocation ? "banner banner__home" : "banner banner__aPropos"
      }
    >
      {homeLocation ? (
        <h1 className="banner__titre"> Chez vous, partout et ailleurs</h1>
      ) : (
        ""
      )}
    </div>
  );
}

export default Banner;
