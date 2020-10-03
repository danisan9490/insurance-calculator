import React, { Fragment } from 'react';

const Resumen = ({ datos }) => {

  // extraer de datos
  const { marca, year, plan } = datos;

  if (marca === '' || year === '' || plan === '') return null;

  return (
    <Fragment>
      <h2>Insurance Summary</h2>
      <ul>
        <li>Brand: </li>
        <li>Plan: </li>
        <li>Year: </li>
      </ul>
    </Fragment>
  );
}

export default Resumen; 