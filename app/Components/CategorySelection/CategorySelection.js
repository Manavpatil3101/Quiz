'use client'
import React from 'react';
import styled from 'styled-components';

const Card = ({color,text,desc}) => {
  return (
    <StyledWrapper>
      <div className='whole'>
      <div className="cards">
      
        <div className={`card ${color}`}>      
          <p className="tip">{text}</p>
          <p className="second-text">{desc}</p>
        </div>
      

        {/* red,blue,green,yellow */}
        {/* HTML,CSS,JS,React */}

        {/* <div className="card blue">
          <p className="tip">CSS</p>
          <p className="second-text">Lorem Ipsum</p>
        </div>
        <div className="card green">
          <p className="tip">JS</p>
          <p className="second-text">Lorem Ipsum</p>
        </div>
        <div className="card yellow">
          <p className="tip">React</p>
          <p className="second-text">Lorem Ipsum</p>
        </div> */}
      </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cards {
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-decoration: none;
  }

  .cards .red {
    background-color: #f43f5e;
  }

  .cards .blue {
    background-color: #3b82f6;
  }

  .cards .green {
    background-color: #22c55e;
  }

   .cards .yellow {
    background-color: #FFCC33;
  }

  .cards .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 200px;
    width: 90%;
    margin: -30px auto;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: 400ms;
  }

  .whole{
    width: 70%;
    margin: 100px auto;
  }

  .cards .card p.tip {
    font-size: 4em;
    font-weight: 700;
  }

  .cards .card p.second-text {
    font-size: .7em;
  }

  .cards .card:hover {
    transform: scale(1.1, 1.1);
  }

  .cards:hover > .card:not(:hover) {
    filter: blur(10px);
    transform: scale(0.9, 0.9);
  }`;

export default Card;
