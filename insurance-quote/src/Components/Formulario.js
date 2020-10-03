import React from 'react';
import styled from '@emotion/styled';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;
const Label = styled.label`
    flex: 0 0 100px;
`;
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;
const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Formulario = () => {
  return (
    <form>
      <Campo>
        <Label>Brand</Label>
        <Select>
          <option value="">-- Select --</option>
          <option value="americano">America</option>
          <option value="europeo">Europe</option>
          <option value="asiatico">Asia </option>
        </Select>
      </Campo>

      <Campo>
        <Label>Year</Label>
        <Select>
          <option value="">-- Select --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
        /> Basic

        <InputRadio
          type="radio"
          name="plan"
          value="completo"
        /> Complete
        </Campo>
      <button type="button">Calculate</button>
    </form>

  );
}

export default Formulario; 