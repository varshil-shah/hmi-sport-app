import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LandingPageCard from "../../components/LandingPageCard";
import { Link } from "react-router-dom";

export default function Events() {
  return (
    <>
      <Helmet>
        <title>Sports App</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] overflow-auto bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[60px]">
          <Header className="flex justify-center items-center w-full md:h-auto p-[19px] bg-white-A700" />
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row justify-between items-center w-full pt-[5px] gap-[18px] md:px-5 max-w-[1200px]">
              <Heading size="4xl" as="h1" className="tracking-[-0.72px]">
                My Events
              </Heading>
              <Button
                color="blue_gray_100_02"
                variant="outline"
                shape="round"
                className="font-semibold min-w-[134px]"
              >
                <Link to="/createevent">Create Event</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[60px] md:px-5 max-w-[1200px]">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="justify-center w-full gap-6 grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                  <LandingPageCard
                    className="flex flex-col items-center justify-start w-full"
                    banner="https://images.pexels.com/photos/8007094/pexels-photo-8007094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    location="APJ kalam badminton court, Mumbai"
                    date="10th June 2021"
                    teamSize="2"
                    sportName="Badminton"
                    sportType="Indoor"
                  />
                  <LandingPageCard
                    banner="https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="flex flex-col items-center justify-start w-full"
                    location="Sardar Patel Stadium, Mumbai"
                    date="12th June 2021"
                    teamSize="10"
                    sportName="Cricket"
                    sportType="Outdoor"
                  />
                  <LandingPageCard
                    banner="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="flex flex-col items-center justify-start w-full"
                    location="The Mumbai's club, Mumbai"
                    date="18th June 2021"
                    teamSize="1"
                    sportName="Swimming"
                    sportType="Indoor"
                  />
                </div>
              </div>
              <div className="flex flex-row sm:flex-col justify-between w-full sm:gap-10">
                <div className="flex flex-row justify-start gap-[5px]">
                  <Button
                    color="gray_700"
                    variant="outline"
                    shape="round"
                    className="font-semibold min-w-[48px]"
                  >
                    1
                  </Button>
                  <Button
                    color="blue_gray_100_02"
                    variant="outline"
                    shape="round"
                    className="font-semibold min-w-[48px]"
                  >
                    2
                  </Button>
                  <Button
                    color="blue_gray_100_02"
                    variant="outline"
                    shape="round"
                    className="font-semibold min-w-[48px]"
                  >
                    3
                  </Button>
                  <Button
                    color="blue_gray_100_02"
                    variant="outline"
                    shape="round"
                    className="font-semibold min-w-[48px]"
                  >
                    4
                  </Button>
                  <Button
                    color="blue_gray_100_02"
                    variant="outline"
                    shape="round"
                    className="font-semibold min-w-[48px]"
                  >
                    5
                  </Button>
                </div>
                <Button
                  color="blue_gray_100_02"
                  variant="outline"
                  shape="round"
                  rightIcon={
                    <Img
                      src="images/img_icon_16px_arrow_right.svg"
                      alt="icon / 16px / arrow - right"
                    />
                  }
                  className="gap-1 font-semibold min-w-[134px]"
                >
                  Next Page
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] md:p-5 bg-white-A700" />
      </div>
    </>
  );
}
