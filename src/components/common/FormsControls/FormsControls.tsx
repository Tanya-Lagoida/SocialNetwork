import React from 'react';
import styles from './FormsControls.module.css';
import { FieldValidatorType } from '../../../utils/validators/validators';
import {Field, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form';

type FormsControlsPropsType = {
  meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormsControlsPropsType> = ({meta, children,  ...props}) => {
  const hasError = meta.touched && meta.error
  return <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
    <div>
      {children}
    </div>
      {hasError && <span>{meta.error}</span>}
  </div>
}
export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  const {input, meta, children,  ...restProps} = props
  return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
  const {input, meta, children,  ...restProps} = props
  return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export function createField<FormKeysType extends string>(placeholder: string | undefined,
                            name: FormKeysType,
                            validators: Array<FieldValidatorType>,
                            component: React.FC<WrappedFieldProps>,
                            props: {}, text = '') {
  return <div>
    <Field placeholder={placeholder} name={name}
           validate={validators}
           component={component}
           {...props}
    /> {text}
  </div>
}

