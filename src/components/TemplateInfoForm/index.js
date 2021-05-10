import React from 'react';
import ModuleToImport from '~src/components/ModuleToImport';
import SelectBox from '~src/elements/SelectBox';
import TextArea from '~src/elements/TextArea';
import Button from '~src/elements/Button';
import './templateInfoForm.scss';

const TemplateInfoForm = () => (
  <div className="Template-Info-Form">
    <div className="row first">
      <SelectBox name="type" label="Template Type">
        <option value="0">Select a type</option>
        <option value="1">Page</option>
        <option value="2">Module</option>
      </SelectBox>
      <SelectBox name="theme" label="Site Themes">
        <option value="0">Select a theme</option>
        <option value="1">Purple</option>
        <option value="2">Red</option>
        <option value="3">Green</option>
        <option value="4">Blue</option>
        <option value="5">Yellow</option>
      </SelectBox>
      <SelectBox name="category" label="Template Category">
        <option value="0">Select a category</option>
        <option value="1">Home</option>
        <option value="2">About</option>
        <option value="3">Contacts</option>
        <option value="4">Menu</option>
        <option value="5">Testimonials</option>
      </SelectBox>
    </div>
    <div className="row">
      <TextArea name="title" label="Page Title" height="36"></TextArea>
    </div>
    <div className="row">
      <TextArea name="description" label="Description"></TextArea>
    </div>
    <div className="row">
      <Button buttonClass="inline purple">Import Current Page</Button>
    </div>
    <div className="row">
      <TextArea name="code" label="Code" height="200"></TextArea>
    </div>
    <div className="row">
      <ModuleToImport />
    </div>
  </div>
);

export default TemplateInfoForm;
