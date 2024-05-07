import React from 'react';
import { getBackgroundCSS, getBoxCSS, getColorsCSS, getTypoCSS } from "../../../Components/utils/getCSS";

const Styles = ({ attributes }) => {
  const { cId, itemStyles, layout, collapseIcon } = attributes;
  const { title, margin, content, icon, border, borderColor, borderRadius } = itemStyles;

  // console.log(content.typo)

  const mainSl = `#main-wrapper-${cId}`;
  const accordionSl = `${mainSl} .accordion`;
  const accItemSl = `${accordionSl} .accordion-item`;

  const accHeadingSl = `${accItemSl} .accordion-title`;
  const accTitleSl = `${accHeadingSl} .title`;
  const accIconSl = `${accHeadingSl} .icon`;
  const accContentSl = `${accItemSl} .accordion-content`;


  return <style>{`

    ${getTypoCSS(accTitleSl, title.typo)?.styles}
    ${getTypoCSS(accContentSl, content.typo)?.styles}
    
    ${mainSl} {
      border: ${layout.border.width} ${layout.border.style} ${layout.border.color};
      padding: ${getBoxCSS(layout.padding)};
      background: ${layout.backgroundColor};
      border-radius: ${layout.borderRadius}px;
      width: ${layout.width};
    }

    ${accItemSl} {
      margin: ${getBoxCSS(margin)};
      border-radius: ${borderRadius}px;
      border-width: ${border.top} ${border.right} ${border.bottom} ${border.left};
      border-style: solid;
      border-color: ${borderColor};
    }

    ${accHeadingSl} {
      ${getBackgroundCSS(title.background)};
      padding: ${getBoxCSS(title.padding)};
      border-radius: ${borderRadius}px;
      ${collapseIcon.position === "left" && "flex-direction: row-reverse;"}
    }

    ${accHeadingSl} .title-wrapper .icon-withTitle {
      ${collapseIcon.position === "withTitle" && "display: block;"}
    } 
 
    ${accItemSl}.activeItem .accordion-title {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }


    ${accTitleSl} {
      color: ${title.color};
    }


    ${accIconSl} {
      color: ${icon.color};
      font-size: ${icon.size}px;
      ${collapseIcon.position === "withTitle" && "display: none;"}
    }
    ${accIconSl} img {
      width: ${icon.size}px;
    }

    ${accContentSl} {
      border-radius: ${borderRadius}px;
    }

    ${accContentSl} p {
      ${getColorsCSS(content.colors)};
      padding: ${getBoxCSS(content.padding)};
    }
    ${accItemSl}.activeItem .accordion-content {
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    }

  `}</style>;
};

export default Styles;