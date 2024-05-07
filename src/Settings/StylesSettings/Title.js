import { __experimentalBoxControl as BoxControl, PanelBody, RangeControl } from '@wordpress/components';
import { __ } from "@wordpress/i18n";
import { produce } from 'immer';
import React from 'react';
import { BColor, Background, Typography } from "../../../../Components";

const Title = ({ attributes, setAttributes }) => {
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
    <>
      <PanelBody title={__("Accordion Title", "simple-usable-carousel")} initialOpen={false}>
        {/* Title Typography */}
        <Typography
          label={__('Typography', 'simple-usable-accordion')}
          value={itemStyles.title.typo}
          onChange={val => updateItemStyles("title", val, "typo")}
        />

        {/* Title Background */}
        <Background
          label={__('Background', 'simple-usable-carousel')}
          value={itemStyles.title.background}
          onChange={val => updateItemStyles("title", val, "background")}
          isImage={false}
          defaults={{ color: '#000' }} />

        {/* Title Color */}
        <BColor
          label={__('Title Color', 'simple-usable-carousel')}
          value={itemStyles.title.color}
          onChange={val => updateItemStyles("title", val, "color")}
          defaultColor='#fff' />

        {/* Icon Color */}
        <BColor
          label={__('Icon Color', 'simple-usable-carousel')}
          value={itemStyles.icon.color}
          onChange={val => updateItemStyles("icon", val, "color")}
          defaultColor='#fff' />
        
        {/* Icon Size */}
        <RangeControl
          label={__("Icon Size", "simple-usable-accordion")}
          labelPosition="side-left"
          value={itemStyles.icon.size}
          onChange={(value) => {
            const newStyles = produce(itemStyles, draft => {
              draft.icon.size = value;
            })
            setAttributes({ itemStyles: newStyles })
          }}
          min={0}
          max={100}
        />


        {/* Accordion Heading Padding */}
        <BoxControl
          values={itemStyles.title.padding}
          onChange={val => updateItemStyles("title", val, "padding")}
        />


      </PanelBody>
    </>
  );
};

export default Title;