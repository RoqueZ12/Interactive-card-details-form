import React from "react";
import '../sass/cardizq.scss';

const Cardizq = ({ nombre, numeroCuenta, cvc, mes, year}) => {
 
  const separarNumero = (numero) => {
    const numeroComoCadena = numero.toString();
    const partes = [];
    for (let i = 0; i < numeroComoCadena.length; i += 4) {
      partes.push(numeroComoCadena.slice(i, i + 4));
    }
    return partes;
  };

  const partes = separarNumero(numeroCuenta).join(' '); // Unir los dígitos separados por un espacio

  return (
    <div className="card-container">
      <div className='card-img1'>
        <div className="card-img1-top">
          <div className="circulo"></div>
          <div className="mini-circulo"></div>
        </div>
        <div className="card-img1-mid">
          {partes.split(' ').map((grupo, index) => (
            <span key={index} className="number">
              {grupo}
              {index < partes.split(' ').length - 1 && <span>&nbsp;</span>}
            </span>
          ))}
        </div>
        <div className="card-img1-bottom">
          <p>{nombre}</p>
          <p>{mes}/{year}</p>
        </div>
      </div>
      <div className='card-img2'>
        <div className="card-img2-mid">
          <p>{cvc}</p>
        </div>
      </div>
    </div>
  );
};

export { Cardizq };
