import { RichText } from '@wordpress/block-editor';
import { produce } from 'immer';
import React, { useState } from 'react';
import { getActiveIcon, getIcon } from '../Settings/ContentSettings/function';
import './Backend.scss';

const Backend = ({ attributes, setAttributes }) => {
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
      <div>
        <div className='accordion'>
          {items.map((item, index) => (
            <div key={index} className={`accordion-item ${activeIndex === index ? "activeItem" : ""}`}>
              {/* Accordion Title */}
              <div onClick={() => handleClick(index)} className="accordion-title">

                
                <div className='title-wrapper'>
                  <div className={`icon icon-withTitle ${activeIndex === index ? 'active' : ''}`}>
                    {activeIndex === index ? (collapseIcon.openIcon.startsWith("http") ? <img src={collapseIcon.openIcon} alt="image" /> : getActiveIcon(collapseIcon.openIcon)) : (collapseIcon.closeIcon.startsWith("http") ? <img src={collapseIcon.closeIcon} alt="image" /> : getIcon(collapseIcon.closeIcon))}
                  </div>

                <RichText
                  tagName={itemStyles.title.tagName}
                  className="title"
                  value={item.title}
                  onChange={value => {
                    const newAccordion = produce(items, draft => {
                      draft[index].title = value;
                    });
                    setAttributes({ items: newAccordion });
                  }}
                  />
                </div>


                <div className={`icon ${activeIndex === index ? 'active' : ''}`}>
                  {activeIndex === index ? (collapseIcon.openIcon.startsWith("http") ? <img src={collapseIcon.openIcon} alt="image" /> : getActiveIcon(collapseIcon.openIcon)) : (collapseIcon.closeIcon.startsWith("http") ? <img src={collapseIcon.closeIcon} alt="image" /> : getIcon(collapseIcon.closeIcon))}
                </div>
              </div>

              {/* Accordion Content */}
              <div className={`accordion-content ${activeIndex === index ? 'active' : ''}`}>
                <RichText
                  tagName="p"
                  value={item.content}
                  onChange={value => {
                    const newAccordion = produce(items, draft => {
                      draft[index].content = value;
                    });
                    setAttributes({ items: newAccordion });
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Backend;