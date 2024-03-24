import React, { useRef, useState } from "react";
import { Heading, Button, Img, CheckBox, Input } from "../../components";
import { default as ModalProvider } from "react-modal";
import supabase from "config/supabase";
import { useLoginRegisterModal } from "context/loginRegisterModalContext";

export default function CreateAccount({ isOpen, onClose, onOpen, ...props }) {
  const name = useRef();
  const age = useRef();
  const email = useRef();
  const password = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { closeRegisterModal } = useLoginRegisterModal();

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      setLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email: email.current.value,
        password: password.current.value,
      });
      if (error) {
        setError(error.message);
      } else {
        alert("Account created successfully");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
      closeRegisterModal();
    }
  };

  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      className="min-w-[680px]"
    >
      <form
        className="flex flex-row justify-center w-full p-[29px] sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]"
        onSubmit={handleCreateAccount}
      >
        <div className="flex flex-col items-center justify-start w-full mt-2.5 mb-[7px] gap-[29px]">
          <div className="flex flex-col items-start justify-start w-full gap-[15px]">
            <div className="flex flex-col items-center justify-start w-full gap-6">
              <div className="flex flex-row justify-between items-center w-full">
                <Heading size="4xl" as="h1" className="tracking-[-0.72px]">
                  Create Account
                </Heading>
                <Button
                  size="sm"
                  shape="square"
                  className="w-[30px]"
                  onClick={onClose}
                >
                  <Img src="images/img_icon_24px_close.svg" />
                </Button>
              </div>
              <div className="flex flex-row md:flex-col justify-start w-full gap-5">
                <div className="flex flex-col items-center justify-start w-[49%] md:w-full gap-5">
                  <Input
                    shape="round"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    ref={name}
                    className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                  />
                  <Input
                    shape="round"
                    type="number"
                    name="age"
                    placeholder="Age"
                    ref={age}
                    className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[49%] md:w-full gap-5">
                  <Input
                    shape="round"
                    type="email"
                    name="email"
                    placeholder="Email address"
                    ref={email}
                    className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                  />
                  <Input
                    shape="round"
                    type="password"
                    name="password"
                    ref={password}
                    placeholder="Password"
                    suffix={
                      <Img
                        src="images/img_icon_20px_eyehide.svg"
                        alt="icon / 20px / eye-hide"
                      />
                    }
                    className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                  />
                </div>
              </div>
            </div>
            <CheckBox
              shape="round"
              name="check_list"
              label="I agree to all Terms & Conditions"
              id="checklist"
              className="gap-2 !text-gray-600_02 text-left font-bold"
            />
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[18px]">
            <Button
              size="4xl"
              shape="round"
              className="w-full sm:px-5 font-bold"
            >
              {loading ? "Loading..." : "Create Account"}
            </Button>
            {error && <p className="!text-red-400 my-5 font-bold">{error}</p>}
          </div>
          <div className="h-px w-full bg-blue_gray-100_01" />
          <div className="flex flex-row md:flex-col justify-center w-full gap-2">
            <a href="#" className="mb-px ml-[196px] md:ml-5">
              <Heading
                size="lg"
                as="h2"
                className="!text-gray-600_02 tracking-[-0.40px] text-center"
              >
                Have an account?
              </Heading>
            </a>
            <a href="#" className="mr-[196px] md:mr-5" onClick={onOpen}>
              <Heading size="lg" as="h3" className="tracking-[-0.40px]">
                Log in
              </Heading>
            </a>
          </div>
        </div>
      </form>
    </ModalProvider>
  );
}
