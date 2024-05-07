import { __experimentalBorderControl as BorderControl, __experimentalBoxControl as BoxControl, PanelBody, RangeControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { produce } from 'immer';
import React from 'react';
import { BColor } from "../../../../Components";

const Layout = ({ attributes, setAttributes }) => {
  const { layout } = attributes;

  const colors = [
    { name: 'Blue 20', color: '#72aee6' },
    { name: 'Red', color: '#eee' }
  ];

  const updateLayout = (property, value, secondProp = false) => {
    const newArray = produce(layout, draft => {
      if (secondProp !== false) {
        draft[property][secondProp] = value;
      } else {
        draft[property] = value;
      }
    })
    setAttributes({ layout: newArray })
  }

  return (
    <div>
      <PanelBody title={__("Layout Settings", "simple-usable-carousel")} initialOpen={false}>
        {/* Background Color */}
        <BColor
          label={__('Background Color', 'simple-usable-carousel')}
          value={layout.backgroundColor}
          onChange={(value) => updateLayout("backgroundColor", value)}
          defaultColor='#fff' />

        {/* Padding */}
        <BoxControl
          label={__("Padding", "simple-usable-accordion")}
          values={layout.padding}
          onChange={(value) => updateLayout("padding", value)}
        />

        {/* Border */}
        <BorderControl
          colors={colors}
          label={__('Border')}
          onChange={value => updateLayout("border", value)}
          value={layout.border}
        />

        {/* Border Radius */}
        <RangeControl
          label={__("Border Radius", "simple-usable-accordion")}
          labelPosition="side-left"
          value={layout.borderRadius}
          onChange={(value) => updateLayout("borderRadius", value)}
          min={0}
          max={100}
        />


        {/* Width */}
        <UnitControl
          label={__('Width', "simple-usable-accordion")}
          labelPosition='side-left'
          value={layout.width}
          onChange={value => updateLayout("width", value)}
        />

      </PanelBody>
    </div>
  );
};

export default Layout;