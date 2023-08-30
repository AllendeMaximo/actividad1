import React from 'react';
import '../index.css'; 

function Card(props) {
  return (
    <div className="card">
      <div className="image-container">
        <img src={props.imageSrc} alt="Imagen" />
      </div>
      <div className="content">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
