import React from "react";
import "./SendMail.css";
import { Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";

function SendMail() {
  const { register, handleSubmit, watch, formState: errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail__close"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="To"
          name="to"
          {...register("to", { required: "To field is required" })}
        />
        <ErrorMessage errors={errors} name="to" />

        <input
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {/* {errors.subject && (
          <p className="sendMail__error">Subject field is required!</p>
        )} */}
        <input
          type="text"
          className="sendMail__message"
          placeholder="Message"
          {...register("message", { required: true })}
        />
        {/* {errors.message && (
          <p className="sendMail__error">Messsage field is required!</p>
        )} */}
        <div className="sendMail__options">
          <Button className="sendMail__send" variant="contained" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
