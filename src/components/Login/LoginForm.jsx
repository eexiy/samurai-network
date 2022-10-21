import { ErrorMessage, Form, Formik } from "formik"
import { createField } from "../../common/Preloader/FormValidation/FormControls";
import loginFormSchema from "../../common/Preloader/FormValidation/LoginFormSchema"
import s from './Login.module.css'

const validateEmail = (value) => {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

const LoginForm = (props) => {
    return (
        <div>
            <Formik
                initialValues={{ email: "", password: "", rememberMe: false }}
                validationSchema={loginFormSchema}
                onSubmit={(values, setFieldValue) => {
                    props.login(values.email, values.password, values.rememberMe)
                }}>
                {() => (
                    <Form>
                        <div className={s.loginForm}>
                            <div className={s.loginTxtField}>
                                {createField(validateEmail, 'text', 'email', null)}
                                <span></span>
                                <label>Email</label>
                                <div className={s.loginErr}>
                                    <ErrorMessage name="email" component="div" />
                                </div>
                            </div>
                            <div className={s.loginTxtField}>
                                {createField(null, 'password', 'password', null)}
                                <span></span>
                                <label>Password</label>
                                <div className={s.loginErr}>
                                    <ErrorMessage name="password" component="div" />
                                </div>
                            </div>
                            <button className={s.loginBtn} type='submit'>Log in</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}



export default LoginForm