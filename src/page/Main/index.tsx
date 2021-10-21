import "./index.scss";
import { RouteComponentProps } from "react-router-dom";

import SliceText from "../../component/SliceText";
import MainInfo from "../../component/MainInfo";

interface MainProps extends RouteComponentProps {}

const Main = (props: MainProps) => {
  return (
    <div className="main">
      <div className="main-title">
        <SliceText content={"Chat Online"} />
      </div>
      <div className="main-info-part">
        <MainInfo
          handleBtnClick={(nickname: string) => {
            const path = {
              pathname: "/chat",
              query: { nickname, isLogin: true },
            };
            props.history.push(path);
          }}
        />
      </div>
    </div>
  );
};
export default Main;
