import { PanelBody, SelectControl, Tooltip } from '@wordpress/components';
import { __ } from "@wordpress/i18n";
import { produce } from 'immer';
import React from 'react';
import '../../Backend/Backend.scss';
import { BiPlus, BsUpload, HiOutlineBan } from '../../utils/icons';
import { svgIcons } from './svgIcon';
import CloseIcon from './CloseIcon';
import OpenIcon from './OpenIcon';

const Icon = ({ attributes, setAttributes }) => {
  const { collapseIcon } = attributes;



  return (
    <div>
      <PanelBody title={__("Icon", "simple-usable-accordion")} initialOpen={false}>

        <CloseIcon attributes={attributes} setAttributes={setAttributes} />
        <OpenIcon attributes={attributes} setAttributes={setAttributes} />

        {/* Icon Position */}
        <SelectControl
          label="Icon Position"
          labelPosition='side-left'
          value={collapseIcon.position}
          options={[
            { label: 'Right(default)', value: 'right' },
            { label: 'Left', value: 'left' },
            { label: 'With Title', value: 'withTitle' },
          ]}
          onChange={(value) => {
            const newIcon = produce(collapseIcon, draft => {
              draft.position = value;
            })
            setAttributes({ collapseIcon: newIcon });
          }}
        />
      </PanelBody>
    </div>
  );
};

export default Icon;