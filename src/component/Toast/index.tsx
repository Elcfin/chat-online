import { useEffect, useState } from "react";
import "./index.scss";

interface ToastProps {
  id: number;
  content: string;
  timeout: number;
  remove: () => void;
}

const Toast = ({ content, timeout, remove }: ToastProps) => {
  const [isShake, setIsShake] = useState(false);
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    if (isFirst) {
      setIsShake(true);
      setIsFirst(false);
    }
    const timeoutHandle = setTimeout(() => {
      remove();
    }, timeout);
    return () => clearTimeout(timeoutHandle);
  }, [remove]);

  return (
    <div
      className={["toast", isShake ? "toast-shake" : null].join(" ")}
      onClick={() => setIsShake(true)}
    >
      {content}
    </div>
  );
};

export default Toast;
