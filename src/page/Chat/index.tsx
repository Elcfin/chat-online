import { useRef } from "react";
import { RouteComponentProps } from "react-router-dom";

const Chat = (props: RouteComponentProps) => {
  const location = props.location;
  const query = (location as any).query;
  const nickname = useRef("");
  if (query && query.isLogin) nickname.current = query.nickname;
  console.log(nickname.current);
  return <div className="chat">chat</div>;
};
export default Chat;
