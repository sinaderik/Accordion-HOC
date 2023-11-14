import React, { useState } from 'react';
import WithAccordion from "../HOC/WithAccordion"
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ id, title, info, showInfo, handelQuestion }) => {

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button onClick={handelQuestion} className='btn'>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default WithAccordion(Question);
