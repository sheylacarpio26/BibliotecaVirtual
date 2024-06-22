import React from "react";
import styled from "styled-components";
import { Dropdown, DropdownItem, NavDropdown } from "react-bootstrap";

// Estilos usando styled-components
const StyledDropdownItem = styled(NavDropdown.Item)`
  padding: 5px;
  &:hover {
    background-color: green;
    color: pink;
  }
`;

const MiDropdown = () => {
  return (
    <NavDropdown title="Categorias">
      <StyledDropdownItem >Cuentos</StyledDropdownItem>
      <StyledDropdownItem >Artes</StyledDropdownItem>
      <StyledDropdownItem >Derecho y Filosofia</StyledDropdownItem>
      <StyledDropdownItem >Ciencia Ficción</StyledDropdownItem>
      <NavDropdown.Divider />
      <StyledDropdownItem >Mangas y Anime</StyledDropdownItem>      
    </NavDropdown>
  );
};

export default MiDropdown;
