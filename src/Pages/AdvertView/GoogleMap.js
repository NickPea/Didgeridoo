import React from "react";

export default function GoogleMap() {
  return (
    <div>
      <iframe
        title="google maps"
        frameBorder="0"
        style={{
          width: "100%",
          height: "40vh"
        }}
        src={`https://www.google.com/maps/embed/v1/place?q=${
          /*Address*/ "earth" /*Address */
        }&key=AIzaSyCuVfpVrHEEcdvzoxPAFRi1GsbeDoJU4Sc&maptype=roadmap`}></iframe>
    </div>
  );
}
