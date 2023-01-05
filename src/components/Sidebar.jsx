import React from "react";
import "./Sidebar.css";
import { Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button startIcon={<CreateIcon fontSize="large" className="sidebar__compose" />}>Compose</Button>
    </div>
  );
}

export default Sidebar;
