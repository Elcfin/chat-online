import "./index.scss";
import Toast from "../Toast";

interface ToastsContainerProps {
  toasts: ToastItem[];
}

interface ToastItem {
  id: number;
  content: string;
  timeout: number;
  remove: () => void;
}

const ToastsContainer = (props: ToastsContainerProps) => {
  return (
    <div className="toast-x">
      {props.toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
};

export default ToastsContainer;
