import React, { FC, PropsWithChildren } from 'react';
import { StyledButton } from './StyledButton';

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  submitForm?: boolean;
  darkBackground?: boolean;
  scaleOnHover?: boolean;
  value?: number | string;
}

const Button: FC<PropsWithChildren<ButtonProps>> = React.memo((props) => {
  const buttonType = props.submitForm ? 'submit' : 'button';

  return (
    <StyledButton
      darkBackground={props.darkBackground}
      scaleOnHover={props.scaleOnHover}
      type={buttonType}
      onClick={props.onClick}
      value={props.value}
    >
      {props.children}
    </StyledButton>
  );
});

export default Button;
