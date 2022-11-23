import { maxLengthCreator, required } from '../../utils/validators/validators';
import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';

const maxLength100 = maxLengthCreator(100)

const AddMessageForm: React.FC<InjectedFormProps>  = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field component={Textarea}
             validate={[required, maxLength100]}
             name='newMessageBody' placeholder='Enter your message' />
    </div>
    <div>
      <button>Add message</button>
    </div>
  </form>
}

export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)