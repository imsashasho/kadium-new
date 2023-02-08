import FormMonster from '../../../pug/components/form/form';
import SexyInput from '../../../pug/components/input/input';
import * as yup from 'yup';
import i18next from 'i18next';
import { successPopup } from './successPopup';

// import * as yup from 'yup';

// const contactSchema = yup.object().shape({
//   tel: yup.string().required(),
//   name: yup.string().required(),
//   confirmation: yup
//     .bool()
//     .oneOf([true])
//     .required(),
// });

// export const contactForm = selector => {
//   const formRef = document.querySelector(selector);
//   const handleSubmit = event => {
//     event.preventDefault();
//     const { target } = event;
//     console.log(target.elements);
//   };

//   formRef.addEventListener('submit', handleSubmit);
// };

export const contactFormFooter = (formRef, onSuccess) => {
  const btnRef = formRef.querySelector('[data-btn-submit-footer]');
  new FormMonster({
    elements: {
      $form: formRef,
      $btnSubmit: btnRef,
      showSuccessMessage: false,
      successAction: () => {
        console.log('open')
        successPopup.open();
        onSuccess && onSuccess();
      },
      fields: {
        phone: {
          inputWrapper: new SexyInput({
            animation: 'none',
            $field: formRef.querySelector('[data-field-phone]'),
            typeInput: 'phone',
          }),
          rule: yup
            .string()
            .required(i18next.t('required'))
            .min(16, i18next.t('field_too_short', { cnt: 19 - 7 })),

          defaultMessage: i18next.t('phone'),
          valid: false,
          error: [],
        },
      },
    },
  });
};
