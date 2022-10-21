import { Field } from "formik";

export const createField = (validateEmail, type, name, placeholder, text,) => (
    <>
        <Field validate={validateEmail} type={type} name={name} placeholder={placeholder} /> {text}
    </>
)