import React, { useEffect } from "react";
import { CloseSVG } from "../../assets/images";
import { Button, Input, Img, Heading, Text } from "./..";
import { Link } from "react-router-dom";
import LogIn from "modals/LogIn";
import CreateAccount from "modals/CreateAccount";
import { useLoginRegisterModal } from "context/loginRegisterModalContext";
import supabase from "config/supabase";
import { useUser } from "context/userContext";

export default function Header({ ...props }) {
  const loginRegisterContext = useLoginRegisterModal();
  const [searchBarValue1, setSearchBarValue1] = React.useState("");
  const { user, handleLogout } = useUser();

  return (
    <header {...props}>
      <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 md:px-5 max-w-[1200px]">
        <div className="flex flex-row justify-start items-start gap-[11px]">
          <Img
            src="images/sport_name.png"
            alt="realestateone"
            className="h-[40px] w-[40px]"
          />
          <Text
            size="lg"
            as="p"
            className="mt-[5px] !text-orange-A700 !font-markoone"
          >
            SportsSpark
          </Text>
        </div>
        <div className="flex flex-row sm:flex-col justify-between items-center w-[41%] md:w-full sm:gap-10">
          <div className="flex flex-row w-[64%] sm:w-full gap-10">
            <div className="flex flex-row justify-start items-start w-[25%] gap-1.5">
              <Heading as="h6">
                <Link to="/">Home</Link>
              </Heading>
            </div>
            <div className="flex flex-row justify-start items-start w-[25%] gap-1.5">
              <Heading as="h6">
                <Link to="/listing">Listing</Link>
              </Heading>
            </div>
            <div className="flex flex-row justify-start items-start w-[25%] gap-1.5">
              <Heading as="h6">
                <Link to="/sports">Sports</Link>
              </Heading>
            </div>
            {user && (
              <div className="flex flex-row justify-start items-start w-[25%] gap-1.5">
                <Heading as="h6">
                  <Link to="/analytics">Analytics</Link>
                </Heading>
              </div>
            )}
            {user && (
              <div className="flex flex-row justify-start items-start w-[25%] gap-1.5">
                <Heading as="h6">
                  <Link to="/events">Events</Link>
                </Heading>
              </div>
            )}
            {user && (
              <div className="flex flex-row justify-start items-start w-[25%] gap-1.5">
                <Heading as="h6">
                  <Link to="/profile">Profile</Link>
                </Heading>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-[19%] md:w-full gap-2.5">
          {user && (
            <Button
              size="lg"
              shape="round"
              className="sm:px-5 font-semibold min-w-[94px]"
              onClick={handleLogout}
            >
              Logout
            </Button>
          )}
          {!user && (
            <Button
              size="lg"
              shape="round"
              className="sm:px-5 font-semibold min-w-[94px]"
              onClick={loginRegisterContext.openLoginModal}
            >
              Log in
            </Button>
          )}
        </div>
      </div>

      <LogIn
        isOpen={loginRegisterContext.isLoginModalOpen}
        onClose={loginRegisterContext.closeLoginModal}
        onOpen={loginRegisterContext.openRegisterModal}
      />
      <CreateAccount
        isOpen={
          !loginRegisterContext.isLoginModalOpen &&
          loginRegisterContext.isRegisterModalOpen
        }
        onClose={loginRegisterContext.closeRegisterModal}
        onOpen={loginRegisterContext.openLoginModal}
      />
    </header>
  );
}
