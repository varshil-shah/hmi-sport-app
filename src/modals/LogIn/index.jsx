import React, { useState } from "react";
import { Heading, Button, Img, CheckBox, Input } from "../../components";
import { default as ModalProvider } from "react-modal";
// import supabase from "config/supabase";

export default function LogIn({ isOpen, onClose, onOpen, ...props }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // console.log(supabase.auth.session());

  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      className="min-w-[480px]"
    >
      <div className="flex flex-col items-center justify-center w-full p-[29px] sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
        <div className="flex flex-col items-center justify-start w-full gap-[29px] my-[9px]">
          <div className="flex flex-col items-center justify-start w-full gap-[13px]">
            <div className="flex flex-row justify-center w-full pt-[5px]">
              <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                <div className="flex flex-row justify-between items-start w-full">
                  <Heading size="4xl" as="h1" className="tracking-[-0.72px]">
                    Log in
                  </Heading>
                  <Button
                    size="sm"
                    shape="square"
                    className="w-[30px] mt-1"
                    onClick={onClose}
                  >
                    <Img src="images/img_frame_1000001678.svg" />
                  </Button>
                </div>
                <Input
                  shape="round"
                  type="email"
                  name="email"
                  placeholder="user / email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  prefix={
                    <Img
                      src="images/img_icon_24px_user.svg"
                      alt="icon / 24px / user"
                    />
                  }
                  className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                />
                <Input
                  shape="round"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  prefix={
                    <Img
                      src="images/img_icon_20px_lock.svg"
                      alt="icon / 20px / lock "
                    />
                  }
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
            <div className="flex flex-row justify-between w-full">
              <CheckBox
                shape="round"
                name="remember"
                label="Remember"
                id="remember"
                className="mb-0.5 gap-2 text-left font-bold"
              />
              <a href="#">
                <Heading size="md" as="h2" className="text-right !font-bold">
                  Forgot Password
                </Heading>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[18px]">
            <Button
              size="4xl"
              shape="round"
              className="w-full sm:px-5 font-bold"
            >
              Log in
            </Button>
            <p className="!text-red-400 my-5 font-bold">
              Print error message here. Print error message here.
            </p>
          </div>
          <div className="h-px w-full bg-blue_gray-100_01" />
          <div className="flex flex-row sm:flex-col justify-center w-full gap-2 sm:gap-2">
            <a href="#" className="ml-[25px] sm:ml-5">
              <Heading
                size="lg"
                as="h2"
                className="!text-gray-600_02 tracking-[-0.40px] text-center"
              >
                Don’t have an account?
              </Heading>
            </a>
            <a href="#" className="mr-[25px] sm:mr-5" onClick={onOpen}>
              <Heading size="lg" as="h3" className="tracking-[-0.40px]">
                Create Account
              </Heading>
            </a>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
