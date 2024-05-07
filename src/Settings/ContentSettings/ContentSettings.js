import React from 'react';
import AccordionItems from './accordionItems';
import Icon from './Icon';

const ContentSettings = ({ attributes, setAttributes }) => {
  return (
    <div>
      <AccordionItems attributes={attributes} setAttributes={setAttributes} />
      <Icon attributes={attributes} setAttributes={setAttributes} />
    </div>
  );
};

export default ContentSettings;