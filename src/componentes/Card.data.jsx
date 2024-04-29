import React, { useState } from "react";
import '../sass/carddata.scss';

const CardData = ({ setNombreD, setNumeroCuentaD, setCvcD, setMesD, setYearD, onSubscribeClick }) => {
  const [nombre, setNombre] = useState('');
  const [numeroCuenta, setNumeroCuenta] = useState('');
  const [cvc, setCvc] = useState('');
  const [mes, setMes] = useState('');
  const [year, setYear] = useState('');
  const [errors, setErrors] = useState({
    nombre: '',
    numeroCuenta: '',
    cvc: '',
    fecha:''
  });

  const handleNombreChange = (e) => {
    const value = e.target.value;
    setNombreD(value)
    setNombre(value);
  };

  const handleNumeroCuentaChange = (e) => {
    const value = e.target.value.slice(0, 16);
    setNumeroCuentaD(value);
    setNumeroCuenta(value);
  };

  const handleNumeroCvc = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 3);
    setCvcD(value);
    setCvc(value);
  };

  const handleMes = (e) => {
    const value = Math.min(Math.max(parseInt(e.target.value.replace(/\D/g, ''), 10), 1), 12).toString().padStart(2, '0');
    setMesD(value);
    setMes(value);
  };

  const handleYear = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 2);
    setYearD(value);
    setYear(value);
  };

  const handleInputClick = (fieldName) => {
    // Al hacer clic en un campo de entrada, quitar estilo de error
    setErrors({ ...errors, [fieldName]: '' });
  };

  const handleClick = (e) => {
    e.preventDefault();

    const formErrors = {};

    // Validar el nombre
    if (!nombre.trim()) {
      formErrors.nombre = "Can't be blank";
    } else if (!/^[a-zA-Z\s]*$/.test(nombre)) {
      formErrors.nombre = 'Wrong format, no numbers';
    }

    // Validar número de cuenta
    if (!numeroCuenta.trim()) {
      formErrors.numeroCuenta = "Can't be blank";
    } else if (!/^\d+$/.test(numeroCuenta)) {
      formErrors.numeroCuenta = 'Wrong format, only numbers';
    } else if (!/^\d{16}$/.test(numeroCuenta)) {
      formErrors.numeroCuenta = 'Must be 16 digits';
    }

    // Validar cvc
    if (!cvc.trim()) {
      formErrors.cvc = "Can't be blank";
    } else if (!/^\d{3}$/.test(cvc)) {
      formErrors.cvc = 'Only 3 digits';
    }

    // Validar fecha
    if (!year.trim() || !mes.trim()) {
      formErrors.fecha = "Can't be blank";
    }

    setErrors(formErrors);

    // Verificar si no hay errores en los campos
    const isValid = Object.values(formErrors).every(error => error === '');
    if (isValid) {
      onSubscribeClick();
    }
  };

  const getErrorClass = (fieldName) => {
    return errors[fieldName] ? 'error-texto' : '';
  };

  return (
    <div className="form-container">
      <form>
        <label htmlFor="nombre">CARDHOLDER NAME</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={handleNombreChange}
          onClick={() => handleInputClick('nombre')} // Controlador de evento para el clic en el campo
          required
          placeholder="e.g. Jane Applessed"
          className={getErrorClass('nombre')}
        />
        {errors.nombre && <p className="text-invalid">{errors.nombre}</p>}
        <label htmlFor="numero">CARD NUMBER</label>
        <input
          type="text"
          id="numero"
          name="numero"
          value={numeroCuenta}
          onChange={handleNumeroCuentaChange}
          onClick={() => handleInputClick('numeroCuenta')} // Controlador de evento para el clic en el campo
          required
          placeholder="e.g. 1234 5678 9012 3456"
          className={getErrorClass('numeroCuenta')}
        />
        {errors.numeroCuenta && <p className="text-invalid">{errors.numeroCuenta}</p>}
        <div className="form-container-date">
          <div className="date-izq">
            <label htmlFor="expiracion">EXP.DATE(MM/YY)</label>
            <input
              type="text"
              id="expiracion"
              name="expiracion"
              onChange={handleMes}
              value={mes}
              onClick={() => handleInputClick('fecha')} // Controlador de evento para el clic en el campo
              placeholder="MM"
              required
              className={getErrorClass('fecha')}
            />
            <input
              type="text"
              id="expiracion"
              name="expiracion"
              value={year}
              onChange={handleYear}
              onClick={() => handleInputClick('fecha')} // Controlador de evento para el clic en el campo
              placeholder="YY"
              required
              className={getErrorClass('fecha')}
            />
            {errors.fecha && <p className="text-invalid">{errors.fecha}</p>}
          </div>
          <div className="date-der">
            <label htmlFor="cvv">CVC</label>
            <input
              type="text"
              id="cvc"
              name="cvc"
              value={cvc}
              onChange={handleNumeroCvc}
              onClick={() => handleInputClick('cvc')} // Controlador de evento para el clic en el campo
              required
              placeholder="e.g. 123"
              className={getErrorClass('cvc')}
            />
            {errors.cvc && <p className="text-invalid">{errors.cvc}</p>}
          </div>
        </div>
        <button type="submit" onClick={handleClick}>Confirm</button>
      </form>
    </div>
  );
};

export { CardData };
