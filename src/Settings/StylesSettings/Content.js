import { __experimentalBoxControl as BoxControl, PanelBody } from '@wordpress/components';
import { __ } from "@wordpress/i18n";
import { produce } from 'immer';
import React from 'react';
import { ColorsControl, Typography } from "../../../../Components";


const Content = ({ attributes, setAttributes }) => {
  const { itemStyles } = attributes;

  const updateItemStyles = (property, value, secondProp = false) => {
    const newArray = produce(itemStyles, draft => {
      if (secondProp !== false) {
        draft[property][secondProp] = value;
      } else {
        draft[property] = value;
      }
    })
    setAttributes({ itemStyles: newArray })
  }

  return (
    <div>
      <PanelBody title={__("Accordion Content", "simple-usable-carousel")} initialOpen={false}>
        {/* Content Typography */}
        <Typography
          label={__('Typography', 'simple-usable-accordion')}
          value={itemStyles.content.typo}
          onChange={val => updateItemStyles("content", val, "typo")}
        />

        {/* Content Background and Text Color */}
        <ColorsControl
          value={itemStyles.content.colors}
          onChange={val => updateItemStyles("content", val, "colors")}
          defaults={{ color: '#333', bg: '#0000' }}
        />

        {/* Content Padding */}
        <BoxControl
          label={__("Content Padding", "simple-usable-accordion")}
          values={itemStyles.content.padding}
          onChange={val => updateItemStyles("content", val, "padding")}
        />

      </PanelBody>
    </div>
  );
};

export default Content;