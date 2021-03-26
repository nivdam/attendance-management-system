import React from "react";
import styled from "styled-components/macro";
import { Flex, Button } from "../../styleElements";
import { ReactComponent as Humburger } from "../../assets/svg/humburger.svg";

const HeaderStyled = styled.header`
  color: white;
  background-color: ${(props) => props.theme.colors.mainColor};
`;

const Header = () => (
  <HeaderStyled>
    <Flex justifyContent={"space-between"} style={{ opacity: "1" }}>
      <Button type="button" primary>
        Hum <Humburger />
      </Button>
      <div>
        <button>עזרה</button>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          לאתר הילה
        </a>
        <Button type="button" primary>
          logout
        </Button>
      </div>
    </Flex>
  </HeaderStyled>
);

export default Header;
