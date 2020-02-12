import React, { useState, useEffect } from "react";
import Loading from "@material-ui/core/CircularProgress";


//TODO: provide url for web advert provider

export default function CommercialAd() {
  const [state, setstate] = useState();
  const url = "";
  useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(data => setstate(data))
      // .catch(e => setstate(e.message));
  }, []);

  return (
    <div>
      Commerical Adverts:
      <p>{!state ? <Loading size={20} /> : state}</p>
    </div>
  );
}
