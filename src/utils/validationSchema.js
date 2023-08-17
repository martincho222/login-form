import * as yup from "yup"

export const login_schema = yup.object({
    email: yup.string().required("Email Obligatorio").min(10, "Minimo 10 caracteres").max(30, "maximo 30 caracteres"),
    password: yup.string().required().min(8, "minimo 8 caracteres").max(20, "maximo 20")
})

export const validateEmail = {
    required: "Email requerido",
    pattern:{
        value: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        message:"No concuerda"
    },

}