import React from "react";
import { Heading, Button, Img } from "./..";
import { Link } from "react-router-dom";

export default function LandingPageCard({
  banner = "images/img_image_260x384.png",
  location = "2861 62nd Ave, Oakland, CA 94605",
  date = "3 Bed Room",
  teamSize = "1 Bath",
  sportName = "1,032 sqft",
  sportType = "Family",
  viewDetails = "View Details",
  ...props
}) {
  return (
    <div {...props}>
      <Img
        src={banner}
        alt="image_one"
        className="w-full md:h-auto sm:w-full rounded-tr-[10px] rounded-tl-[10px] object-cover"
      />
      <div className="flex flex-row justify-center w-full p-[19px] rounded-bl-[10px] rounded-br-[10px] border-red-100_01 border border-solid bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[25px] my-2.5 md:px-5 max-w-[344px]">
          <div className="flex flex-row justify-start items-center w-full gap-3">
            <Img
              src="images/img_icon_map_2.svg"
              alt="image_two"
              className="h-[24px] w-[24px]"
            />
            <Heading as="h1">{location}</Heading>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[19px]">
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row justify-start items-center gap-3">
                <Img
                  src="images/date_icon.png"
                  alt="3_bed_room_one"
                  className="h-[20px] w-[20px]"
                />
                <Heading as="h2" className="!text-gray-700">
                  {date}
                </Heading>
              </div>
              <div className="flex flex-row justify-start items-center gap-3">
                <Img
                  src="images/team_icon.png"
                  alt="1_bath_one"
                  className="h-[20px] w-[20px]"
                />
                <Heading as="h3" className="!text-gray-700">
                  {teamSize}
                </Heading>
              </div>
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row justify-start items-center gap-3">
                <Img
                  src="images/sport_name.png"
                  alt="1032_sqft_one"
                  className="h-[20px] w-[20px]"
                />
                <Heading as="h4" className="!text-gray-700">
                  {sportName}
                </Heading>
              </div>
              <div className="flex flex-row justify-start items-center gap-3">
                <Img
                  src="images/img_iocn_menu.svg"
                  alt="family_one"
                  className="h-[20px] w-[20px]"
                />
                <Heading as="h5" className="!text-gray-700">
                  {sportType}
                </Heading>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center w-full pr-[47px] md:pr-5">
            <Link
              to="/propertydetails"
              className="h-[48px] px-[31px] sm:px-5 text-white-A700 text-base font-semibold bg-gray-900 min-w-[156px] rounded-[10px] flex justify-center items-center"
            >
              {viewDetails}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
