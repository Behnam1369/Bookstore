import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const divStyle = {
  textAlign: 'center',
  marginTop: '120px',
};

const buttonStyle = {
  fontFamily: 'Roboto, sans-serif',
  backgroundColor: '#0290ff',
  color: '#fff',
  border: 'none',
  outline: 'none',
  padding: '10px',
  borderRadius: '3px',
  cursor: 'pointer',
};

function Categories() {
  const status = useSelector((state) => state.categoriesReducers);
  const dispatch = useDispatch();
  return (
    <div style={divStyle}>
      <button type="button" style={buttonStyle} onClick={() => { dispatch(checkStatus()); }}>Check Status</button>
      <p>{status}</p>
    </div>
  );
}

export default Categories;
