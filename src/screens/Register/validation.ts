import * as yup from 'yup';

export const schema = yup.object({
  name: yup.string().required('this field is required').min(4, 'this field must be at least 4 characters').max(40, 'this field must be at most 40 characters'),
  email: yup.string().required('this field is required').min(4, 'this field must be at least 4 characters').max(60, 'this field must be at most 60 characters'),
  password: yup.string().required('this field is required').min(4, 'this field must be at least 4 characters').max(10, 'this field must be at most 10 characters'),
  phone: yup.string().required('this field is required').min(4, 'this field must be at least 4 characters').max(16, 'this field must be at most 10 characters'),
});

export type ValidationSchema = yup.Asserts<typeof schema>
