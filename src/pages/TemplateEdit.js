import React from 'react';
import TemplateInfoForm from '~src/components/TemplateInfoForm';
import ImageUpload from '~src/components/ImageUpload';
import FooterEdit from '~src/components/Footer/FooterEdit';
import './templateEdit.scss';

const TemplateEdit = () => (
  <div className="Template-Edit">
    <TemplateInfoForm />
    <ImageUpload />
    <FooterEdit />
  </div>
);

export default TemplateEdit;
