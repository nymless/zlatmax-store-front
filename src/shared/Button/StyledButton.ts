import styled from 'styled-components/macro';
import { darken } from 'polished';

interface StyledButtonProps {
  darkBackground?: boolean;
  scaleOnHover?: boolean;
  backgroundColor?: string;
  scaleType?: string;
}

export const StyledButton = styled.button.attrs((props: StyledButtonProps) => {
  let backgroundColor;
  if (props.backgroundColor) {
    backgroundColor = props.backgroundColor;
  } else {
    backgroundColor = props.darkBackground ? '#000000' : '#E8AA31';
  }
  return {
    backgroundColor,
    scaleType: props.scaleOnHover
      ? 'transform: scale(102%);'
      : `background-color: ${darken(0.1, backgroundColor)}`,
  };
})<StyledButtonProps>`
  width: 100%;
  min-height: 50px;
  border: none;
  color: #ffffff;
  background-color: ${(props: StyledButtonProps) => props.backgroundColor};
  cursor: pointer;
  border-radius: 3px;
  font-size: 1.125rem;
  font-weight: 600;

  &:hover {
    ${(props: StyledButtonProps) => props.scaleType}
  }
`;
