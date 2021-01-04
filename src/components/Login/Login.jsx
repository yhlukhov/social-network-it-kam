import React, { useState } from "react"
import { Form, Field } from "react-final-form"
import { connect } from "react-redux"
import { login } from "../../redux/authReducer"
import styled from "styled-components"
import { composeValidators, minLength, required } from "../../utils/validators"
import { TextInput } from "../Common/FormControls/FormControls"
import { compose } from "redux"
import { withLoginRedirect } from "../../HOC/withLoginRedirect"

const LoginForm = ({login}) => {
   const onSubmit = (values) => {
      login(values.email, values.password, values.remember)
   }

   let [pwdVisib, changePwdVisib] = useState(false)
   const togglePwdVisib = () => {
      changePwdVisib(!pwdVisib)
   }

   return (
      <Form
         onSubmit={onSubmit}
         render={({ handleSubmit, submitting, submitError }) => (
            <form onSubmit={handleSubmit}>
               <Field name="email" validate={composeValidators(required, minLength(3))}>
                  {({ input, meta }) => (
                     <Input>
                        <label>Email:</label>
                        <TextInput
                           input={input}
                           meta={meta}
                           type="text"
                           style={{ width: "240px", borderRadius: "5px" }}
                        />
                     </Input>
                  )}
               </Field>
               <Field name="password" validate={required}>
                  {({ input, meta }) => (
                     <Input>
                        <label>Password:</label>
                        <div style={{ position: "relative" }}>
                           <TextInput
                              input={input}
                              meta={meta}
                              type={pwdVisib ? "text" : "password"}
                              style={{ width: "240px", borderRadius: "5px" }}
                           />
                           <PwHint onClick={togglePwdVisib}>{pwdVisib ? "hide" : "show"}</PwHint>
                        </div>
                     </Input>
                  )}
               </Field>
               <Field name="remember" type="checkbox">
                  {({ input }) => (
                     <div style={{ fontSize: "small" }}>
                        <input {...input} type="checkbox" style={{ width: "20px", marginTop: "3px" }} />
                        <label>Remember me</label>
                     </div>
                  )}
               </Field>
               <LoginBt disabled={submitting ? true : false} type="submit">
                  Login
               </LoginBt>
               {submitError && <div className="error">{submitError}</div>}
            </form>
         )}
      />
   )
}

const Login = (props) => {
   return (
      <div>
         <h2>Login</h2>
         <LoginForm {...props} />
      </div>
   )
}

export default compose(connect(null, { login }), withLoginRedirect)(Login)

////// CSS //////
const Input = styled.div`
   display: flex;
   flex-direction: column;
   width: fit-content;
   margin: 5px;
`

const LoginBt = styled.button`
   margin: 10px 5px;
   padding: 3px 10px;
   background-color: lightgoldenrodyellow;
   border: 1px solid goldenrod;
   border-radius: 3px;
`
const PwHint = styled.span`
   font-size: small;
   color: darkkhaki;
   cursor: pointer;
   position: absolute;
   top: 8px;
   right: 10px;
`
