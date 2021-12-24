import React from "react";


const Frase = ({ frase }) => {
  
  
  console.log(frase.author);


  return (
  
    <div className="frase">
      <h3>{frase.quote}</h3> <br/>
      <p>{frase.author}</p>
    </div>
    

  );
};

export default Frase;
