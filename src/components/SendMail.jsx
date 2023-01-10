import React from "react";
import "./SendMail.css";
import { Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useForm } from "react-hook-form";

function SendMail() {
  const { register, handleSubmit, watch, formState: errors } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close className="sendMail__close" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="To"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail__error">To field is required!</p>}
        <input
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        <input
          type="text"
          className="sendMail__message"
          placeholder="Message"
          {...register("message", { required: true })}
        />
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
