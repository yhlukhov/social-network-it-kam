import React from 'react';
import { Form, Field } from 'react-final-form'
import styled from 'styled-components';

const Login = (props) => {
   const required = value => (value ? undefined : 'Required')
   const onSubmit = values => {
      props.login(values.email, values.password)
   }
   return(
      <div>
         <h2>Login</h2>
         <Form onSubmit={onSubmit}
            render={({handleSubmit, form, submitting, pristine, values})=>(
               <form onSubmit={handleSubmit}>
                  <Field name="email" validate={required}>
                     {({input, meta}) => (
                        <Input>
                           <label>Email:</label>
                           <input {...input} type="text" />
                           {meta.error && meta.touched && <Err>{meta.error}</Err>}
                        </Input>
                     )}
                  </Field>
                  <Field name="password" validate={required}>
                     {({input, meta}) => (
                        <Input>
                           <label>Password:</label>
                           <input {...input} type="text" />
                           {meta.error && meta.touched && <Err>{meta.error}</Err>}
                        </Input>
                     )}
                  </Field>
                  <LoginBt type="submit">Login</LoginBt>
               </form>
            )}
         />
      </div>
   )
}

export default Login

const Input = styled.div`
   display:flex;
   flex-direction:column;
   width: 250px;
   margin: 5px;
`
const Err = styled.span`
   color: lightsalmon;
   font-size: small;
   margin-top: -2px;
`
const LoginBt = styled.button`
   margin: 10px 5px;
   padding: 3px 10px;
   background-color: lightgoldenrodyellow;
   border: 1px solid goldenrod;
   border-radius: 3px;
`