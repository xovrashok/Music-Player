import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ButtonContainer, ButtonTitle } from "./styles";
import { IconContext } from "react-icons";

const SidebarButton = (props) => {
  const location = useLocation();

  const isActive = location.pathname === props.to;

  const activeStyle = {
    backgroundColor: "rgba(244, 187, 146,1)",
    color: "white",
    transform: "scale(1.05)",
  };

  return (
    <Link to={props.to} style={{ textDecoration: "none", textAlign: "center" }}>
      <ButtonContainer style={isActive ? activeStyle : {}}>
        <IconContext.Provider value={{ size: "24px" }}>
          {props.icon}
        </IconContext.Provider>
        <ButtonTitle>{props.title}</ButtonTitle>
      </ButtonContainer>
    </Link>
  );
};

export default SidebarButton;
