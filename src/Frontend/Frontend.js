import React, { useState } from 'react';
import '../Backend/Backend.scss';
import { getActiveIcon, getIcon } from '../Settings/ContentSettings/function';

const Frontend = ({ attributes }) => {
  const { items, collapseIcon, itemStyles } = attributes;
  const [activeIndex, setActiveIndex] = useState(0); // -1 for initial closed state

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(-1);
      setTimeout(() => {
        setActiveIndex(index);
      }, 250);
    }
  };

  return (
    <>
      <div className='accordion'>
        {items.map((item, index) => (
          <div key={index} className={`accordion-item ${activeIndex === index ? "activeItem" : ""}`}>
            {/* Accordion Title */}
            <div onClick={() => handleClick(index)} className="accordion-title">
              <itemStyles.title.tagName
                className="title"
                dangerouslySetInnerHTML={{ __html: item.title }}></itemStyles.title.tagName>
              
              <div className={`icon ${activeIndex === index ? 'active' : ''}`}>
                {activeIndex === index ? (collapseIcon.openIcon.startsWith("http") ? <img src={collapseIcon.openIcon} alt="image" /> : getActiveIcon(collapseIcon.openIcon)) : (collapseIcon.closeIcon.startsWith("http") ? <img src={collapseIcon.closeIcon} alt="image" /> : getIcon(collapseIcon.closeIcon))}
              </div>
            </div>

            {/* Accordion Content */}
            <div className={`accordion-content ${activeIndex === index ? 'active' : ''}`}>
              <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Frontend;