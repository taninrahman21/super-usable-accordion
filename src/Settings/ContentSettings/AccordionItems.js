import { Button, PanelBody, SelectControl, TextControl, TextareaControl } from '@wordpress/components';
import { __ } from "@wordpress/i18n";
import { produce } from 'immer';
import React from 'react';



const AccordionItems = ({ attributes, setAttributes }) => {
  const { items, itemStyles } = attributes;

  // Add New Item Function
  const addNewItem = () => {
    setAttributes({
      items: [...items, { title: `Accordion #${items.length + 1}`, content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloremque assumenda magni similique fugiat animi quod. Ipsam sed dolores repellendus." }]
    });
  };

  // Delete Item Function
  const deleteItem = (index) => {
    const newAccordion = produce(items, draft => {
      draft.splice(index, 1);
    })
    setAttributes({ items: newAccordion });
  }


  return (
    <div>
      <PanelBody title={__("Accordion Items", "simple-usable-accordion")} initialOpen={true}>

        {
          items.map((item, index) => {
            return (
              <PanelBody title={__(`${item.title}`, "simple-usable-accordion")} key={index} initialOpen={false}>

                {/* Select Title Tag */}
                <SelectControl
                  label={__("Select Title Tag", "simple-usable-accordion")}
                  value={itemStyles.title.tagName}
                  options={[
                    { label: 'H1', value: 'H1' },
                    { label: 'H2', value: 'H2' },
                    { label: 'H3', value: 'H3' },
                    { label: 'H4', value: 'H4' },
                    { label: 'H5', value: 'H5' },
                    { label: 'H6', value: 'H6' },
                    { label: 'Div', value: 'div' },
                    { label: 'P', value: 'p' },
                  ]}
                  onChange={(newTag) => {
                    const newArray = produce(itemStyles, draft => {
                      draft.title.tagName = newTag;
                    })
                    setAttributes({ itemStyles: newArray });
                  }}
                />

                {/* Title TextControl */}
                <TextControl
                  label={__("Title", "simple-usable-accordion")}
                  value={item.title}
                  onChange={value => {
                    const newAccordion = produce(items, draft => {
                      draft[index].title = value;
                    })
                    setAttributes({
                      items: newAccordion
                    })
                  }}
                />

                {/* Content TextControl */}
                <TextareaControl
                  label={__("Content", "simple-usable-accordion")}
                  value={item.content}
                  onChange={(value) => {
                    const newAccordion = produce(items, draft => {
                      draft[index].content = value;
                    })
                    setAttributes({
                      items: newAccordion
                    })
                  }}
                />

                {/* Delete Item Button */}
                <div>
                  {
                    items.length > 1 && <Button onClick={() => deleteItem(index)} style={{
                      width: "100%",
                      marginTop: "15px",
                      background: "RED",
                      display: "flex",
                      justifyContent: "center",
                      color: 'white'
                    }}>
                      {__("Delete Item", "simple-usable-accordion")}
                    </Button>
                  }

                </div>

              </PanelBody>
            )
          })
        }

        {/* Add New Item Button */}
        <Button
          style={{
            width: "100%",
            marginTop: "15px",
            background: "#4527a4",
            display: "flex",
            justifyContent: "center",
          }}
          icon={"plus f132"}
          variant="primary"
          onClick={addNewItem}
        >
          {__("Add New Item", "simple-usable-accordion")}
        </Button>
      </PanelBody>
    </div>
  );
};

export default AccordionItems;