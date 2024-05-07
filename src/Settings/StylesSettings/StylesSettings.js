import React from 'react';
import AccordionItem from './AccordionItem';
import Content from './Content';
import Layout from './Layout';
import Title from './Title';

const StylesSettings = ({ attributes, setAttributes }) => {
  return (
    <div>
      <AccordionItem attributes={attributes} setAttributes={setAttributes} />
      <Title attributes={attributes} setAttributes={setAttributes} />
      <Content attributes={attributes} setAttributes={setAttributes} />
      <Layout attributes={attributes} setAttributes={setAttributes} />
    </div>
  );
};

export default StylesSettings;