import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import Data from './data';
import people from './data';
import './Review.css';

function Review() {
  const [pepole, setPeople] = useState(Data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index - 1);
    }, 3000)
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section_container">
      <div className="title">
        <h2>People's Experience</h2>
        <div className="under_line"></div>
      </div>
      <div className="section-center">
        {pepole.map((person, personIndex) => {
          console.log(person)


          const { id, image, name, title, quote } = person;

          // more stuff coming up,

          let position = "nextSlide";
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
            position = 'lastSlide'
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          )
        })}
        <button className="prev" onClick={() => setIndex(index + 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index - 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Review;
