import { object, string, number, ref } from "yup";

let Validations = object({
  username: string().required("Bu alan zorunludur"),
  email: string()
    .email("Geçerli bir e-posta adresi girin")
    .required("Bu alan zorunludur"),
  password: string()
    .min(5, "En az 5 karakter giriniz")
    .required("Bu alan zorunludur"),
  passwordConfirm: string()
    .oneOf([ref("password")], "Parolalar eşleşmiyor")
    .min(5, "En az 5 karakter giriniz")
    .required("Bu alan zorunludur"),
});

export default Validations;
