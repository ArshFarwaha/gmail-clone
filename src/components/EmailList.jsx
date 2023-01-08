import React from "react";
import "./EmailList.css";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { Checkbox, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import InboxIcon from "@mui/icons-material/Inbox";
import { People, LocalOffer } from "@mui/icons-material";

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <NavigateBeforeIcon />
          </IconButton>
          <IconButton>
            <NavigateNextIcon />
          </IconButton>
          <IconButton>
            <VerticalSplitIcon />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <KeyboardIcon />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={People} title="Social" color="#1A73E8" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>
      <div className="emailList_list">
        <EmailRow
          title="Twitch"
          subject="Hey fellow streamer"
          description="This is a test"
          time="10pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
