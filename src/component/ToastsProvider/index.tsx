import React, { useState, useCallback, useMemo, useContext } from "react";
import { createPortal } from "react-dom";
import ToastsContainer from "../ToastsContainer";

interface ToastsProviderProps {}

interface ToastItem {
  id: number;
  content: string;
  timeout: number;
  remove: () => void;
}

let id = 0;
const getUniqueId = () => id++;

const ToastsContext = React.createContext({
  addToast: (content: string): never | void => {
    throw new Error("To add a toast, wrap the app in a ToastsProvider.");
  },
});

export const useToasts = () => {
  return useContext(ToastsContext);
};

const ToastsProvider: React.FC<ToastsProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback((content: string) => {
    const toastId = getUniqueId();

    const toast = {
      id: toastId,
      content,
      timeout: 2000,
      remove: () => {
        setToasts((latestToasts) =>
          latestToasts.filter(({ id }) => id !== toastId)
        );
      },
    };

    setToasts((latestToasts) => [...latestToasts, toast]);
  }, []);

  const contextValue = useMemo(
    () => ({
      addToast,
    }),
    [addToast]
  );

  return (
    <ToastsContext.Provider value={contextValue}>
      {children}

      {createPortal(<ToastsContainer toasts={toasts} />, document.body)}
    </ToastsContext.Provider>
  );
};

export default ToastsProvider;
