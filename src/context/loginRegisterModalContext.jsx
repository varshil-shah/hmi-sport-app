import { useState, useContext, createContext } from "react";

const initialState = {
  isLoginModalOpen: false,
  isRegisterModalOpen: false,
  openLoginModal: () => {},
  closeLoginModal: () => {},
  openRegisterModal: () => {},
  closeRegisterModal: () => {},
};

const loginRegisterContext = createContext();

function LoginRegisterModalProvider({ children }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  function openLoginModal() {
    setIsLoginModalOpen(true);
  }

  function closeLoginModal() {
    closeRegisterModal();
    setIsLoginModalOpen(false);
  }

  function openRegisterModal() {
    closeLoginModal();
    setIsRegisterModalOpen(true);
  }

  function closeRegisterModal() {
    setIsRegisterModalOpen(false);
  }

  return (
    <loginRegisterContext.Provider
      value={{
        isLoginModalOpen,
        isRegisterModalOpen,
        openLoginModal,
        closeLoginModal,
        openRegisterModal,
        closeRegisterModal,
      }}
    >
      {children}
    </loginRegisterContext.Provider>
  );
}

function useLoginRegisterModal() {
  const context = useContext(loginRegisterContext);
  if (!context) {
    throw new Error(
      "useLoginRegister must be used within a LoginRegisterProvider"
    );
  }
  return context;
}

export { LoginRegisterModalProvider, useLoginRegisterModal };
