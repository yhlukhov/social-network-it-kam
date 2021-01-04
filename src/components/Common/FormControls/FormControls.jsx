import React from "react";
import { Field } from "react-final-form";
import styled from "styled-components";
import { Err } from "../../StyledComponents";
import css from "./FormControls.module.css";

const FormControl = ({ input, meta:{error, touched, submitError}, ...props }) => {
   return (
      <div className={(error && touched) ? css.err : null}>
         {props.children}
         {(error || submitError) && touched && <Err>{error || submitError}</Err>}
      </div>
   );
}

export const Textarea = (props) => {
   const {input, meta, ...restProps} = props
   return (
   <FormControl {...props} >
      <Textarr {...input} {...restProps} />
   </FormControl>
   )
}
export const TextInput = (props) => {
   const {input, meta, ...restProps} = props
   return (
   <FormControl {...props} >
      <Input {...input} {...restProps} />
   </FormControl>
   )
}

// export const CreateField = (placeholder, name, validators, component) => {
//    return <Field placeholder={placeholder} name={name} validate={validators} component={component} }

const Input = styled.input`
   width: 200px;
   height: 30px;
   border: 1px solid lightblue;
   border-bottom-left-radius: 5px;
   border-top-left-radius: 5px;
`;
const Textarr = styled.textarea`
   width: 200px;
   height: 50px;
   border: 1px solid lightblue;
   border-bottom-left-radius: 5px;
   border-top-left-radius: 5px;
`