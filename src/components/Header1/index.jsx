import React from "react";
import { CloseSVG } from "../../assets/images";
import { Button, Input, Img, Heading, Text } from "./..";

export default function Header1({ ...props }) {
  const [searchBarValue2, setSearchBarValue2] = React.useState("");

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
        <div className="flex flex-row sm:flex-col justify-center w-[41%] md:w-full sm:gap-5">
          <div className="flex flex-row justify-start items-start w-[14%] sm:w-full gap-1.5">
            <Heading as="h6">Home</Heading>
          </div>
          <div className="flex flex-row w-[40%] sm:w-full ml-[50px] gap-10 md:ml-5">
            <div className="flex flex-row justify-start items-start w-[40%] gap-1.5">
              <Heading as="h6">Listing</Heading>
            </div>
            <div className="flex flex-row justify-start items-start w-[40%] gap-1.5">
              <Heading as="h6">Agents</Heading>
            </div>
          </div>
          <Heading as="h6" className="ml-10 sm:ml-5 text-center">
            Property{" "}
          </Heading>
          <Heading as="h6" className="ml-10 sm:ml-5">
            Blog
          </Heading>
        </div>
        <div className="flex flex-row justify-start items-center w-[19%] md:w-full gap-2.5">
          <Input
            size="xs"
            shape="square"
            name="search"
            placeholder="Search"
            value={searchBarValue2}
            onChange={(e) => setSearchBarValue2(e)}
            prefix={
              <Img
                src="images/img_icon_24px_search.svg"
                alt="icon / 24px / search"
                className="cursor-pointer"
              />
            }
            suffix={
              searchBarValue2?.length > 0 ? (
                <CloseSVG
                  onClick={() => setSearchBarValue2("")}
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
