import React from 'react';

const Button = ({texto, onClick}) => {
  return (
    <button className="botao-inserir" onClick={onClick} texto={texto}>{texto}</button>
  )
}

export default Button
