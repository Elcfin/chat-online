import "./App.scss";
import Main from "./page/Main";
import Chat from "./page/Chat";
import ToastsProvider from "./component/ToastsProvider";

import {
  Route,
  Switch,
  useLocation,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";

import { connect, sendMessage } from "./network/websocket-server";

const App = (props: RouteComponentProps) => {
  const location = useLocation();

  if (location.pathname === "/") {
    const path = {
      pathname: "/main",
    };
    props.history.push(path);
  }

  return (
    <div className="App">
      <ToastsProvider>
        <Switch>
          <Route path="/main" component={Main} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </ToastsProvider>
    </div>
  );
};

export default withRouter(App);
