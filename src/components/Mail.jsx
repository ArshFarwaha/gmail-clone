import React from "react";
import "./Mail.css";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { LabelImportant } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOpenMail } from "../features/mailSlice";

function Mail() {
  const navigate = useNavigate();
  const selectedMail = useSelector(selectOpenMail);

  function navHome() {
    navigate("/");
  }

  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={navHome}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <ArchiveOutlinedIcon />
          </IconButton>
          <IconButton>
            <ReportGmailerrorredOutlinedIcon />
          </IconButton>
          <IconButton>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
          <IconButton>
            <MarkunreadOutlinedIcon />
          </IconButton>
          <IconButton>
            <AccessTimeOutlinedIcon />
          </IconButton>
          <IconButton>
            <AddTaskOutlinedIcon />
          </IconButton>
          <IconButton>
            <DriveFileMoveOutlinedIcon />
          </IconButton>
          <IconButton>
            <LabelOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <IconButton>
            <KeyboardAltOutlinedIcon />
          </IconButton>
          <IconButton>
            <LocalPrintshopOutlinedIcon />
          </IconButton>
          <IconButton>
            <OpenInNewIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>{selectedMail.subject}</h2>
          <LabelImportant className="mail__important" />
          <p>{selectedMail.title}</p>
          <p className="mail__time">{selectedMail.time}</p>
        </div>
        <div className="mail__message">
          <p>{selectedMail.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
