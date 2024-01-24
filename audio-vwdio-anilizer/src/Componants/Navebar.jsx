import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
export const Navebar = () => {
  const navigate = useNavigate();
  return (
    <DIV>
      <div onClick={() => navigate("/")} className="logo">
        <h1>AUDIO&VEDIO ANALIZER</h1>
      </div>
      <div className="content">
        <Link style={{textDecoration:"none"}} to="/audio">Recored Audio</Link>
        <Link style={{textDecoration:"none"}} to="/vedio">Recored Vedio</Link>
        <Link style={{textDecoration:"none"}} to="/screen">Recored Screen</Link>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  background-color: #1976d2;
  margin: 0px;
  .logo {
    display: flex;
    width: 30%;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    color: black;
    cursor: pointer;
  }
  .content {
    display: flex;

    width: 60%;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    color: white;
  }

  .content > Link {
    cursor: pointer;
    text-decoration: none;
  }

  .content > Link:hover {
    color: black;
  }
`;
