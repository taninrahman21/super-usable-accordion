import { __experimentalBoxControl as BoxControl, PanelBody, RangeControl } from '@wordpress/components';
import { __ } from "@wordpress/i18n";
import { produce } from 'immer';
import React from 'react';
import { BColor } from "../../../../Components";

const AccordionItem = ({ attributes, setAttributes }) => {
  const { itemStyles } = attributes;

  const colors = [
    { name: 'Blue 20', color: '#72aee6' }
  ]


  return (
    <div>
      <PanelBody title={__("Accordion Item", "simple-usable-carousel")} initialOpen={false}>


        {/* Accordion Item Margin */}

        <BoxControl
          label='Margin'
          values={itemStyles.margin}
          onChange={val => {
            const newStyles = produce(itemStyles, draft => {
              draft.margin = val;
            })
            setAttributes({ itemStyles: newStyles })
          }}


        />

        {/* Accordion Item Border */}
        <BoxControl
          label={__('Border')}
          values={itemStyles.border}
          onChange={(value) => {
            const newStyles = produce(itemStyles, draft => {
              draft.border = value;
            })
            setAttributes({ itemStyles: newStyles })
          }}


        />

        {/* Border Radius */}
        <RangeControl
          label={__("Border Radius", "simple-usable-accordion")}
          labelPosition="side-left"
          value={itemStyles.borderRadius}
          onChange={(value) => {
            const newStyles = produce(itemStyles, draft => {
              draft.borderRadius = value;
            })
            setAttributes({ itemStyles: newStyles })
          }}
          min={0}
          max={100}
        />

        {/* Border Color */}
        <BColor
          label={__('Border Color', 'simple-usable-carousel')}
          value={itemStyles.title.color}
          onChange={(value) => {
            const newStyles = produce(itemStyles, draft => {
              draft.borderColor = value;
            })
            setAttributes({ itemStyles: newStyles })
          }}
          defaultColor='#fff' />


      </PanelBody>
    </div>
  );
};

export default AccordionItem;