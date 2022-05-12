import styled, { css } from 'styled-components';
import { Colors } from 'styles/colors';
import { generateRandomColorCode } from 'utils';

interface ContainerProps {
  isActive: boolean;
  flex?: number;
}

export const Container = styled.div.attrs<ContainerProps>((props) => ({
  style: {
    backgroundColor: props.isActive
      ? `#${generateRandomColorCode()}`
      : Colors.white,
  },
}))<ContainerProps>`
  flex: ${(props) => props.flex ?? 1};

  border: 1px solid ${Colors.gray};
  ${(props) =>
    !props.isActive &&
    css`
      transition: background-color 0.3s ease-out 0s;
    `};
`;
