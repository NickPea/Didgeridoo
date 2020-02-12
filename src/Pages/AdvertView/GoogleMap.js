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
        }&key="YOUR-GOOGLE-API-KEY-HERE"&maptype=roadmap`}></iframe>
    </div>
  );
}
