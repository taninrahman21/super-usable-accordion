import React from 'react';
import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import ContentSettings from './ContentSettings/ContentSettings';
import StylesSettings from './StylesSettings/StylesSettings';
import './Settings.scss';

const Settings = ({ attributes, setAttributes }) => {
  return (
    <>
      <InspectorControls>
        <TabPanel
          className="my-tab-panel"
          activeClass="active-tab"
          tabs={[
            {
              name: 'tab1',
              title: 'Setting',
              className: 'setting-tab',
            },
            {
              name: 'tab2',
              title: 'Style',
              className: 'style-tab',
            },
          ]}>
          {(tab) => (
            <>
              {tab.name === 'tab1' && <ContentSettings attributes={attributes} setAttributes={setAttributes} />}
              {tab.name === 'tab2' && <StylesSettings attributes={attributes} setAttributes={setAttributes} />}
            </>
          )}
        </TabPanel>
      </InspectorControls>
    </>
  );
};

export default Settings;