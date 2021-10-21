import { useState } from "react";

import "./index.scss";
import SliceButton from "../SliceButton";
import { useToasts } from "../ToastsProvider";

interface MainInfoProps {
  handleBtnClick: (nickname: string) => void;
}

const MainInfo = (props: MainInfoProps) => {
  const [value, setValue] = useState("");
  const { addToast } = useToasts();

  let timer: number | null = null;
  const handleClick = () => {
    if (value) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      props.handleBtnClick(value);
    } else {
      if (timer) return;
      addToast(`请输入用户名`);
      timer = window.setTimeout(() => {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
      }, 2100); /* toast 持续时间为 2s */
    }
  };

  return (
    <div className="main-info">
      <div className="main-info-nickname-x">
        <input
          type="text"
          placeholder="-"
          className="main-info-nickname"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <label className="main-info-nickname-label">nickname</label>
        <div className="main-info-nickname-underline"></div>
      </div>
      <div className="main-info-enter">
        <SliceButton
          handleClick={() => {
            handleClick();
          }}
          content="Enter"
        />
      </div>
    </div>
  );
};

export default MainInfo;
