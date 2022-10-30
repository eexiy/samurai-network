import { Field, Form, Formik } from "formik";
import s from './MyPosts.module.css'
import {AiOutlineSend} from 'react-icons/ai'

const AddPostForm = (props) => {

    let addNewPost = (values) => {
        props.sendPost(values);
    }

    return (
        <Formik
            initialValues={{
                newPostText: ""
            }}
            onSubmit={(values, { resetForm }) => {
                console.log(values.newPostText);
                addNewPost(values.newPostText);
                resetForm({ values: '' });
            }
            }
        >
            {() => (
                <Form>
                    <div className={s.myPostField}>
                        <Field
                            name={'newPostText'}
                            as={'textarea'}
                            placeholder={'enter text'}
                        />
                        <button type={'submit'}><AiOutlineSend /></button>
                    </div>

                </Form>
            )}
        </Formik>
    )
}
export default AddPostForm