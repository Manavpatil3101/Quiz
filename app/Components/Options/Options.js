import React from "react";
import styled from "styled-components";

const Options = ({ option, selectedOption, correctAnswer, children }) => {
  let status = "";
  if (selectedOption) {
    if (option === correctAnswer) {
      status = "correct";
    } else if (option === selectedOption) {
      status = "incorrect";
    }
  }

  return (
    <StyledWrapper status={status}>
      <button>
        <span>{children}</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    background: ${({ status }) =>
      status === "correct"
        ? "#d4edda"
        : status === "incorrect"
        ? "#f8d7da"
        : "transparent"};
    border: 2px solid
      ${({ status }) =>
        status === "correct"
          ? "#28a745"
          : status === "incorrect"
          ? "#dc3545"
          : "#e6b800"};
    color: ${({ status }) =>
      status === "correct" || status === "incorrect" ? "#000" : "#e6b800"};
    position: relative;
    padding: 5px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: 600;
    cursor: ${({ status }) => (status ? "default" : "pointer")};
    border-radius: 25px;
    outline: none;
    overflow: hidden;
    transition: all 0.3s ease;
    text-align: center;
    width: 95%;
  }

  button span {
    margin: 10px;
  }

  button:active {
    transform: scale(0.9);
  }

  button::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    border-radius: 50%;
    display: block;
    width: 20em;
    height: 20em;
    left: -5em;
    text-align: center;
    transition: box-shadow 0.5s ease-out;
    z-index: -1;
    width: 120%;
  }

  @media (max-width: 576px){
    button::before{
        width: 220%;
    }
    span{
    font-size: 20px;
    }
}

  button:hover {
    color: ${({ status }) =>
      status === "correct" || status === "incorrect" ? "#000" : "#fff"};
    border: 1px solid
      ${({ status }) =>
        status === "correct"
          ? "#28a745"
          : status === "incorrect"
          ? "#dc3545"
          : "#e6b800"};
  }

  button:hover::before {
    box-shadow: ${({ status }) =>
      status ? "none" : "inset 0 0 0 30em #e6b800"};
  }
`;

export default Options;
