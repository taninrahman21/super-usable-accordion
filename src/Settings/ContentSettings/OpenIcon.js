import { Tooltip } from '@wordpress/components';
import { produce } from 'immer';
import React from 'react';
import "../../Backend/Backend.scss";
import { BsUpload, HiOutlineBan } from '../../utils/icons';
import { svgActiveIcons } from './svgIcon';
import { MediaUpload } from '@wordpress/block-editor';

const OpenIcon = ({ attributes, setAttributes }) => {
  const { collapseIcon } = attributes;

  
  return (
    <>
      <div style={{ display: "flex", gap: "7px", justifyContent: "space-between", alignItems: "center", fontSize: "20px" }}>
        <div>
          <h4>Active Icon</h4>
        </div>
        <div style={{ display: "flex", gap: "7px", fontSize: "25px" }}>
          <Tooltip
            text="None" placement="top-start" >
            <HiOutlineBan onClick={() => {
              const newIcon = produce(collapseIcon, draft => {
                draft.openIcon = '';
              })
              setAttributes({ collapseIcon: newIcon });
            }} className={`acr-icon ${collapseIcon.openIcon === "" ? "activeOption" : ""}`} />
          </Tooltip>
          <MediaUpload
            onSelect={(media) => {
              const newIcon = produce(collapseIcon, draft => {
                draft.openIcon = media.url;
              })
              setAttributes({ collapseIcon: newIcon });
            }}
            render={({ open }) => (
              <Tooltip text="Upload SVG" placement="top-start" >
                <BsUpload onClick={open} title="Upload SVG" className={`acr-icon ${collapseIcon.openIcon.startsWith("http") ? "activeOption" : ""}`} />
              </Tooltip>
            )}
          ></MediaUpload>

          {/* <Tooltip text="Plus Icon" placement="top-start" >
            <AiOutlineMinus className="acr-icon" />
          </Tooltip> */}
        </div>
      </div>


      <h5 style={{ marginTop: 0 }}>Recommend Icons</h5>
      <div style={{ display: "flex", gap: "5px", fontSize: "25px", marginBottom: "20px" }}>
        {
          svgActiveIcons.map((svgIcon, index) => {
            return (
              <span key={index} onClick={() => {
                const newIcon = produce(collapseIcon, draft => {
                  draft.openIcon = svgIcon.value;
                })
                setAttributes({ collapseIcon: newIcon });
              }} className={`recommend-icon ${collapseIcon.openIcon === svgIcon.value ? "activeIcon" : ""}`}>
                {svgIcon.icon}
              </span>
            )
          })
        }
      </div>
    </>
  );
};

export default OpenIcon;