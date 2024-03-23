import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import {
  Button,
  Img,
  GoogleMap,
  SelectBox,
  Input,
  Heading,
} from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LandingPageCard from "../../components/LandingPageCard";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const rangeOptions = [
  { label: "Around 1KM", value: "1KM" },
  { label: "Around 2KM", value: "2KM" },
  { label: "Around 3KM", value: "3KM" },
  { label: "Around 4KM", value: "4KM" },
  { label: "Around 5KM", value: "5KM" },
];

const teamOptions = [
  { label: "single", value: "single" },
  { label: "team", value: "team" },
];

export default function ListingMapViewPage() {
  const [searchBarValue8, setSearchBarValue8] = React.useState("");

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
            <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-[18px] md:px-5 max-w-[1200px]">
              <Heading size="4xl" as="h1" className="tracking-[-0.72px]">
                Find ongoing sports
              </Heading>
              <div className="flex flex-col items-center justify-start w-full gap-3">
                <div className="flex flex-row md:flex-col justify-start w-full gap-5">
                  <Input
                    shape="round"
                    name="search"
                    placeholder="Enter your address"
                    value={searchBarValue8}
                    onChange={(e) => setSearchBarValue8(e)}
                    suffix={
                      searchBarValue8?.length > 0 ? (
                        <CloseSVG
                          onClick={() => setSearchBarValue8("")}
                          height={24}
                          width={24}
                          fillColor="#626262ff"
                        />
                      ) : (
                        <Img
                          src="images/img_icon_24px_search_gray_700.svg"
                          alt="icon / 24px / search"
                          className="cursor-pointer"
                        />
                      )
                    }
                    className="w-[36%] md:w-full gap-[35px] !text-gray-700 font-semibold border-blue_gray-100_01 border border-solid"
                  />
                  <SelectBox
                    shape="round"
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_700.svg"
                        alt="arrow_down"
                      />
                    }
                    name="price"
                    placeholder="Select range"
                    options={rangeOptions}
                    className="w-[20%] md:w-full gap-px font-bold border-blue_gray-100_01 border border-solid"
                  />
                  <SelectBox
                    shape="round"
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_700.svg"
                        alt="arrow_down"
                      />
                    }
                    name="pressed"
                    placeholder="Select team"
                    options={teamOptions}
                    className="w-[18%] md:w-full gap-px font-bold border-blue_gray-100_01 border border-solid"
                  />

                  <Button
                    size="4xl"
                    shape="round"
                    rightIcon={
                      <Img
                        src="images/img_icon_20px_search.svg"
                        alt="icon / 20px / search"
                      />
                    }
                    className="gap-2.5 font-bold min-w-[124px]"
                  >
                    Search
                  </Button>
                </div>
                <div className="flex flex-row md:flex-col justify-start w-full gap-2.5 md:gap-5">
                  <Button
                    color="blue_gray_100"
                    size="md"
                    variant="outline"
                    shape="round"
                    rightIcon={
                      <Img
                        src="images/img_icon_16px_close.svg"
                        alt="icon / 16px / close"
                      />
                    }
                    className="gap-2 font-semibold min-w-[145px]"
                  >
                    5+ players
                  </Button>
                  <Button
                    color="blue_gray_100"
                    size="md"
                    variant="outline"
                    shape="round"
                    rightIcon={
                      <Img
                        src="images/img_icon_16px_close.svg"
                        alt="icon / 16px / close"
                      />
                    }
                    className="gap-2 font-semibold min-w-[243px]"
                  >
                    Near to me
                  </Button>
                  <Button
                    color="blue_gray_100"
                    size="md"
                    variant="outline"
                    shape="round"
                    rightIcon={
                      <Img
                        src="images/img_icon_16px_close.svg"
                        alt="icon / 16px / close"
                      />
                    }
                    className="gap-2 font-semibold min-w-[151px]"
                  >
                    Outdoor
                  </Button>
                  <Button
                    color="blue_gray_100"
                    size="md"
                    variant="outline"
                    shape="round"
                    rightIcon={
                      <Img
                        src="images/img_icon_16px_close.svg"
                        alt="icon / 16px / close"
                      />
                    }
                    className="gap-2 !text-gray-900 font-semibold min-w-[168px]"
                  >
                    Mumbai
                  </Button>
                  <Button
                    color="blue_gray_100"
                    size="md"
                    variant="outline"
                    shape="round"
                    rightIcon={
                      <Img
                        src="images/img_icon_16px_close.svg"
                        alt="icon / 16px / close"
                      />
                    }
                    className="gap-2 !text-gray-900 font-semibold min-w-[174px]"
                  >
                    Badminton
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[60px] md:px-5 max-w-[1200px]">
              <GoogleMap showMarker={false} className="h-[428px] w-full" />
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
                    banner="https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="flex flex-col items-center justify-start w-full"
                    location="Rajiv Gandhi Stadium, Hyderabad"
                    date="15th June 2021"
                    teamSize="12"
                    sportName="Football"
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
                  <LandingPageCard
                    banner="https://images.pexels.com/photos/4219639/pexels-photo-4219639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="flex flex-col items-center justify-start w-full"
                    location="Narendra Modi Stadium, Ahmedabad"
                    date="20th June 2021"
                    teamSize="15"
                    sportName="Cricket"
                    sportType="Outdoor"
                  />
                  <LandingPageCard
                    banner="https://images.pexels.com/photos/6693287/pexels-photo-6693287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="flex flex-col items-center justify-start w-full"
                    location="The Mumbai's club, Mumbai"
                    date="22nd June 2021"
                    teamSize="1"
                    sportName="Chess"
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
