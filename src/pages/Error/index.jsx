import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Heading, Input, Text } from "../../components";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const [searchBarValue22, setSearchBarValue22] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Sports App</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full md:h-auto py-[50px] gap-[116px] md:pb-5 bg-gray-50_01 ">
        <div className="flex flex-col items-center justify-start w-[34%] md:w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[30px]">
            <Img
              src="images/img_frame_1000001686.svg"
              alt="image"
              className="h-[480px]"
            />
            <div className="flex flex-col items-center justify-center w-[54%] md:w-full gap-[19px]">
              <Heading
                size="3xl"
                as="h1"
                className="mt-px tracking-[-0.56px] text-center"
              >
                Something wrong!
              </Heading>
              <Button
                color="gray_600_02"
                size="4xl"
                variant="outline"
                shape="round"
                rightIcon={
                  <Img
                    src="images/img_icon_16px_arrow_right.svg"
                    alt="icon / 24px / arrow-right"
                  />
                }
                className="gap-2.5 font-bold min-w-[157px] sm:min-w-full"
              >
                <Link to="/">Homepage</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
