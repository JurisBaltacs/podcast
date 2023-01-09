import { number, object, string, date } from "yup";

const blogPostSchema = object({
  body: string().required().min(3),
  createdAt: date().required(),
  id: number().required().integer().min(1),
  image: string().required().min(3),
  title: string().required().min(3),
});

export default blogPostSchema;
