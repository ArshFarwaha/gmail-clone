import React from "react";
import "./EmailRow.css";
import { Checkbox, IconButton } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";

function EmailRow({ id, title, subject, description, time }) {
  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <h4 className="emailRow__message">
        {subject}
        <span className="emailRow__description">{description}</span>
      </h4>
      <h3 className="emailRow__description">{time}</h3>
    </div>
  );
}

export default EmailRow;
