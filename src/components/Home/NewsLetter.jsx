import React from "react";
//Toast msg
import { ToastContainer, toast, Flip } from "react-toastify";
// import { motion } from "framer-motion";

import "react-toastify/dist/ReactToastify.css";
//email validator
import { validate } from "react-email-validator";
//form service
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import { BiErrorCircle } from "react-icons/bi";

import Grid2 from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/system";

const NewsLetter = () => {
  const [state, handleSubmit] = useForm("xyyazlar");
  const [validatorMsg, setValidatorMsg] = useState(null);
  //Subscribed toast
  const notify = () =>
    toast.success("Subscribed!", {
      position: "top-right",
      autoClose: 4000,
      transition: Flip,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  // ------------------------------------------------------------------------------------

  //-------------------------------------------------------------------------------------
  //handle email validation and form submit
  const handlevalidation = (e) => {
    e.preventDefault();
    const isValid = validate(e.target[0].value);
    if (isValid) {
      setValidatorMsg(null);
      notify();
      return handleSubmit(e);
    } else {
      setValidatorMsg("invalid email");
    }
  };

  return (
    <Wrapper>
      <ToastContainer />
      <div className="container">
        <div className="contact-section-wrapper">
          <h3
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            // data-aos-offset="300"
            // data-aos-easing="ease-in-sine"
          >
            Join our newsletter and get 20% off
          </h3>
          <div className="contact-form-wrapper">
            <Grid2
              container
              spacing={{ xs: 5, sm: 4, md: 2 }}
              direction={{ xs: "column", md: "row" }}
            >
              <Grid2 item md={6}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat sint unde quaerat ratione soluta veniam provident
                  adipisci cumque eveniet tempore?
                </p>
              </Grid2>
              <Grid2 item md={6}>
                <form onSubmit={handlevalidation}>
                  <input
                    type="text"
                    placeholder="enter email"
                    name="email"
                    id="email"
                  />
                  <button disabled={state.submitting}> subscribe</button>
                </form>
              </Grid2>
            </Grid2>
            <span
              className={
                validatorMsg
                  ? "email-validator-msg"
                  : "email-validator-msg email-validator-msg-none"
              }
            >
              <BiErrorCircle />
              {validatorMsg}
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled("section")`
  padding: var(--section-padding);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 20vh;

  h3 {
    color: var(--txt-clr-1);
  }
  .contact-section-wrapper {
    // width: 100%;
    display: flex;
    // justify-content: flex-end;
    align-items: flex-start;
    gap: 2rem;
    flex-direction: column;
  }
  .contact-section-wrapper h3 {
    /* padding-top: 5rem; */
  }

  .contact-form-wrapper {
    width: 100%;
    padding-bottom: 5rem;
  }

  .contact-form-wrapper form {
    border: var(--border-black-thin);
    border-radius: var(--radius);
    display: flex;
    height: auto;
    width: 100%;
  }

  .contact-form-wrapper form > input {
    width: 80%;
    border: none;
    border-right: var(--border-black-thin);
    text-transform: capitalize;
    padding: 0.8rem 0.6rem;
    outline: none;
  }

  .contact-form-wrapper span {
    float: leftt;
    background-color: #ecbba0;
    display: block;
    color: rgb(153, 8, 8);
    margin: 4% 2%;
    padding: 1%;
    text-transform: capitalize;
    border-radius: 5px;
    line-height: 1.5;
    transition: 0.3s all ease-in-out;
    width: 50%;
  }
  .contact-form-wrapper span svg {
    vertical-align: middle;
    margin-right: 0.3rem;
    height: 100%;
  }
  .email-validator-msg-none {
    display: none !important;
  }
  .contact-form-wrapper form button {
    text-align: center;
    background-color: var(--txt-clr-2);
    flex: 1;
    color: var(--nav-bg-clr-light);
    font-weight: 600;
    padding: 0.2rem 0.4rem;
    transition: 0.3s all ease-in-out;
  }

  .contact-form-wrapper form button:hover {
    background-color: var(--txt-clr-2-dark);
  }
`;
export default NewsLetter;
