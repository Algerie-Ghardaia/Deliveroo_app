import React from "react";

export default function Section({ data }) {
  return (
    <>
      <section>
        <div className="container section">
          <div>
            <h1>{data.restaurant.name}</h1>
            <p>{data.restaurant.description}</p>
          </div>
          <div className="picture_magasin">
            <img src={data.restaurant.picture} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
