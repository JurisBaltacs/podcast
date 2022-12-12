import React, { useState } from "react";

// Code taken from: https://pragmaticpineapple.com/add-newsletter-subscription-form-to-react-website/

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const FORM_URL = `your form URL, we will describe it in a sec`;

    const data = new FormData(event.target);

    try {
      const response = await fetch(FORM_URL, {
        method: "post",
        body: data,
        headers: {
          accept: "application/json",
        },
      });
      const json = await response.json();

      if (json.status === "success") {
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
  };
  // #TODO: Pielikt e-pasta validation.
  return (
    <div className="pl-4">
      <div className="font-black text-2xl mb-4">PIESAKIES JAUNUMIEM</div>
      <div className="text-grey6 mb-4">
        Saņem jaunākās sērijas e-pastā. Nekāda spama!
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <input
            className="mt-2 mb-2 w-5/6 text-grey1"
            aria-label="vards"
            name="fields[first_name]"
            placeholder="Vārds"
            type="text"
            onChange={handleNameChange}
            value={name}
          />

          <input
            className=" mb-2 w-5/6 text-grey1 mb-4"
            aria-label="epasts"
            name="email_address"
            placeholder="E-pasts"
            required
            type="email"
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        <button className="bg-orange1 mt-2 rounded-md text-14 font-bold transition ease-in-out w-32 py-2 hover:bg-grey5">
          PIETEIKTIES
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;
