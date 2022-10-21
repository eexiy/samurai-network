import * as Yup from "yup";
import { AiOutlineExclamationCircle } from 'react-icons/ai'

const loginFormSchema = Yup.object().shape({
    email: Yup.string()
        //минимальная длина - 2 символа
        .min(2, "Must be longer than 2 characters")
        //максимальная длина - 30 символов
        .max(30, "Nice try, nobody has a first name that long")
        .required(<AiOutlineExclamationCircle />),
    password: Yup.string()
        .min(8, "Must be longer than 8 characters")
        .required(<AiOutlineExclamationCircle />)
});
export default loginFormSchema;