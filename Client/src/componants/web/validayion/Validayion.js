import * as yup from 'yup'
export const registerSchema = yup.object({
    userName:yup.string().required("username is required").min(3,"min is 3").max(30,"max is 30"),
    email:yup.string().required("email is required ").email(),
    password:yup.string().required("password is required").min(3,"min is 3").max(30,"max is 30"),
})
export const loginSchema = yup.object({
    email:yup.string().required("email is required ").email(),
    password:yup.string().required("password is required").min(3,"min is 3").max(30,"max is 30"),
})
export const sendCodeSchema = yup.object({
    email:yup.string().required("email is required ").email()
})
export const changePasswordSchema = yup.object({
    email:yup.string().required("email is required ").email(),
    password:yup.string().required("password is required").min(3,"min is 3").max(30,"max is 30"),
    code:yup.string().required("code is required").length(4,"must 4"),
})


