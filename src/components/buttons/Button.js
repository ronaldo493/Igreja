import React from 'react';
import { Button as StyledButton } from '../../styles/map'; 

const Button = ({ onClick, children }) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
