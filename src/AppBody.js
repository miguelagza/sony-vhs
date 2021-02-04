import React from "react";
import "./AppBody.css";
import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";
import { useStateValue } from "./StateProvider";
import Brightness6Icon from "@material-ui/icons/Brightness6";

function AppBody() {
  const [{ title, model }, dispatch] = useStateValue();
  return (
    <div className='appBody'>
      <div className='appBody__cinematron'>
        <h3>{title}</h3>
        <h1>{model}</h1>
      </div>
      <button
        onClick={() => {
          if (title === "Cinematron") {
            dispatch({ type: "CHANGE_DINAMICRON" });
          } else {
            dispatch({ type: "CHANGE_CINEMATRON" });
          }
        }}
      >
        <Brightness6Icon />
      </button>
      <div className='appBody__explore'>
        <SettingsBackupRestoreIcon />
        <h4>Explore More</h4>
      </div>
    </div>
  );
}

export default AppBody;
