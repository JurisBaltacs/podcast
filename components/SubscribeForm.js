import { useFormik } from "formik";
import subscribeFormSchema from "../schemas/subscribeFormSchema";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  actions.resetForm();
};

const BasicForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        name: "",
      },
      validationSchema: subscribeFormSchema,
      onSubmit,
    });

  const handleSubmitAlert = (name) => {
    alert(
      `${name} nesaņems e-pastu, jo šī lapa ir daļa no Jura Baltača programmēšanas portfolio. Ja Tev interesē podkāsts, meklē 'Svarīgās detaļas' Spotify.`
    );
  };

  return (
    <div className="pl-4">
      <div className="font-black text-2xl md:mb-4">PIESAKIES JAUNUMIEM</div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="name"></label>
        <input
          value={values.name}
          onChange={handleChange}
          id="name"
          type="name"
          placeholder="Vārds"
          onBlur={handleBlur}
          className="mt-2 pl-3 w-full h-10 text-grey1 placeholder-grey4 focus:placeholder-opacity-0"
        />

        {errors.name && touched.name && (
          <p className="text-orange1 text-sm">{errors.name}</p>
        )}
        <label htmlFor="email"></label>
        <input
          value={values.email}
          onChange={handleChange}
          id="email"
          type="email"
          placeholder="E-pasts"
          onBlur={handleBlur}
          className="w-full text-grey1 h-10 placeholder-grey4 focus:placeholder-opacity-0 mt-2"
        />

        {errors.email && touched.email && (
          <p className="text-orange1 text-sm">{errors.email}</p>
        )}

        <button
          onClick={() => handleSubmitAlert(values.name || "Anonīmais cilvēks")}
          type="submit"
          className="bg-orange1 mt-2 rounded-md font-bold transition duration-300 w-32 py-2 hover:bg-grey5"
        >
          PIETEIKTIES
        </button>
      </form>
    </div>
  );
};
export default BasicForm;
