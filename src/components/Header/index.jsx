import React from "react";
import { CloseSVG } from "../../assets/images";
import { Button, Input, Img, Heading, Text } from "./..";
import { Link } from "react-router-dom";

export default function Header({ ...props }) {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

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
              <Heading as="h6">Agents</Heading>
            </div>
          </div>
          <Heading as="h6" className="text-center">
            Property
          </Heading>
          <Heading as="h6">Blog</Heading>
        </div>
        <div className="flex flex-row justify-start items-center w-[19%] md:w-full gap-2.5">
          <Input
            size="xs"
            shape="square"
            name="search"
            placeholder="Search"
            value={searchBarValue1}
            onChange={(e) => setSearchBarValue1(e)}
            prefix={
              <Img
                src="images/img_icon_24px_search.svg"
                alt="icon / 24px / search"
                className="cursor-pointer"
              />
            }
            suffix={
              searchBarValue1?.length > 0 ? (
                <CloseSVG
                  onClick={() => setSearchBarValue1("")}
                  height={24}
                  width={24}
                  fillColor="#191919ff"
                />
              ) : null
            }
            className="w-[55%] gap-2 text-gray-900 font-bold"
          />
          <Button
            size="lg"
            shape="round"
            className="sm:px-5 font-semibold min-w-[94px]"
          >
            Log in
          </Button>
        </div>
      </div>
    </header>
  );
}
