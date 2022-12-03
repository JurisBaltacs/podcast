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
    <div>
      <div className="footer__title">PIESAKIES JAUNUMIEM</div>
      <div className="footer__paragraph">
        Saņem jaunākās sērijas e-pastā. Nekāda spama!
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form__input-wrapper">
          <input
            aria-label="vards"
            name="fields[first_name]"
            placeholder="Vārds"
            type="text"
            onChange={handleNameChange}
            value={name}
          />

          <input
            aria-label="epasts"
            name="email_address"
            placeholder="E-pasts"
            required
            type="email"
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        <button className="form__subscribe-button">PIETEIKTIES</button>
      </form>
    </div>
  );
};

export default SubscribeForm;
