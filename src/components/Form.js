import React from 'react';
import { Formik, Field } from 'formik';

const Example = () => (
  <div>
   
    <Formik
      initialValues={{ email: '', gender: 'male', firstName: '',lastName:'',pan:'',dob:'' }}
      onSubmit={(values, actions) => {
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   actions.setSubmitting(false);
        // }, 1000);
        const json=JSON.stringify(values, null, 2)
        console.log(json);
      }}
      

      
      render={(props) => (
        <form onSubmit={props.handleSubmit}>
          <div >
          <ul className="form">
            <li><label><strong>First Name: </strong></label>
          
          <Field name="firstName" 
          component={CustomInputComponent} 
          placeholder="First Name" /> </li>
            <li>
            <label><strong>Last Name: </strong></label>
          <Field
            type="text"
            name="lastName"
            placeholder="Last Name" /> 
          
            </li>
            <li>
            <label><strong>Email: </strong></label>
            <Field type="email" name="email" placeholder="Email" />

            </li>
            <li>
            <Field component="select" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </Field>
            </li>
            <li>
            <label><strong>Date of Birth: </strong></label>
            <Field type="date" name="dob" placeholder="Date of Birth"/>
            </li>
            <li><label><strong>PAN: </strong></label>
          <Field type="text" name="pan" placeholder="Permanent Account Number" validate={validate}/>
            </li>
            <li><button type="submit">Submit</button></li>
          </ul>
        </div>
          
        </form>
      )}
    />
  </div>
);

const validate=(value) => {
  const panValue = value.toUpperCase();
  
  // const c5 = dependencies.lastName ? dependencies.lastName.charAt(0).toUpperCase() : '[A-Z]';
  const regex = '^([A-Z]{3}([CHFATBLJGP])[A-Z]{1}[0-9]{4}[A-Z])$';

  if (value && (!panValue.match(regex))){
      return 'Please enter correct PAN number';
  }
  return '';
}

const CustomInputComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <div>
    <input type="text" {...field} {...props} />
    {touched[field.name] &&
      errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </div>
);

export default Example
