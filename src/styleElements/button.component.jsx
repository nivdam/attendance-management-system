import styled, { css } from "styled-components/macro";
import { lighten, darken, rgba, setSaturation } from "polished";

export const Button = styled.button`
    border: none;
    background-color: transparent;
    
    /* border: 1px solid ${(props) => props.theme.colors.mainColor};
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.white}; */

    ${(props) =>
      props.primary &&
      css`
        color: ${(props) => props.theme.colors.white};
      `}

    ${(props) =>
      props.secondary &&
      css`
        color: ${(props) => props.theme.colors.white};
      `}


    &:not(:disabled) {
      cursor: pointer;

      ${(props) =>
        props.primary &&
        css`
          background-color: ${(props) => props.theme.colors.mainColor};

          &:hover {
            background-color: ${(props) =>
              darken(0.1, props.theme.colors.mainColor)};
          }
        `}
    ${(props) =>
      props.secondary &&
      css`
        color: ${(props) => props.theme.colors.white};
        background-color: ${(props) => props.theme.colors.secondaryColor};

        &:hover {
          background-color: ${(props) =>
            darken(0.1, props.theme.colors.secondaryColor)};
        }
      `}

      
      &:focus {
        outline: none;
        box-shadow: 0 0 3px 3px 
        ${(props) =>
          rgba(
            darken(
              0.4,
              props.primary
                ? props.theme.colors.mainColor
                : props.theme.colors.secondaryColor
            ),
            0.3
          )}
          ;
      }
    }


    &:disabled {
      ${(props) =>
        props.primary &&
        css`
          background-color: ${(props) =>
            setSaturation(0.3, props.theme.colors.mainColor)};
        `}
    ${(props) =>
      props.secondary &&
      css`
        background-color: ${(props) =>
          setSaturation(0.25, props.theme.colors.secondaryColor)};
      `}
    }
`;
