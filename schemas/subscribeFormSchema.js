import { object, string } from "yup";

const subscribeFormSchema = object({
  email: string()
    .email("Lūdzu pievieno derīgu e-pastu")
    .required("E-pasta lauks ir obligāts"),
  name: string().required("Vārda lauks ir obligāts"),
});

export default subscribeFormSchema;
