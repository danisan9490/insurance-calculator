import React from 'react';
import styled from '@emotion/styled';
import { primerMayuscula } from '../helper';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;


const Resumen = ({ datos }) => {

  // extraer de datos
  const { marca, year, plan } = datos;

  if (marca === '' || year === '' || plan === '') return null;

  return (
    <ContenedorResumen>
      <h2>Insurance Summary</h2>
      <ul>
        <li>Brand: {primerMayuscula(marca)}</li>
        <li>Plan: {primerMayuscula(plan)}</li>
        <li>Year:  {year} </li>
      </ul>
    </ContenedorResumen>
  );
}

export default Resumen; 