import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import {
  Img,
  Heading,
  Button,
  TextArea,
  Input,
  Text,
  SelectBox,
} from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const sportsOptions = [
  { value: "badminton", label: "Badminton" },
  { value: "cricket", label: "Cricket" },
  { value: "football", label: "Football" },
  { value: "basketball", label: "Basketball" },
  { value: "tableTennis", label: "Table Tennis" },
];

export default function CreateEvent() {
  const nameRef = useRef(null);
  const locationRef = useRef(null);
  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const sportRef = useRef(null);
  const parkingRef = useRef(null);
  const teamSizeRef = useRef(null);
  const foodRef = useRef(null);
  const sportsTypeRef = useRef(null);
  const priceRef = useRef(null);

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
            <div className="flex flex-col items-center justify-start w-full gap-11 md:px-5 max-w-[1200px]">
              <div className="flex flex-col items-center justify-start w-full pt-0.5 gap-[15px]">
                <Heading
                  size="6xl"
                  as="h1"
                  className="tracking-[-1.08px] text-center"
                >
                  Create a new event
                </Heading>
                <Text as="p" className="text-center">
                  Create a new event and invite your friends to join you.
                </Text>
              </div>
              <div className="flex flex-row md:flex-col justify-start items-start w-full gap-[50px] p-[23px] md:gap-5 sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                <div className="flex flex-col items-center justify-start w-[44%] md:w-full ml-[25px] gap-10 sm:ml-5">
                  <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[19px]">
                    <Heading size="3xl" as="h2" className="tracking-[-0.56px]">
                      Event
                    </Heading>
                    <div className="flex flex-col items-center justify-start w-full gap-3">
                      <Input
                        shape="round"
                        type="text"
                        name="eventName"
                        placeholder="Event Name"
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                        ref={nameRef}
                      />
                      <Input
                        shape="round"
                        type="text"
                        name="location"
                        placeholder="Location"
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                        ref={locationRef}
                      />
                      <Input
                        shape="round"
                        type="date"
                        name="date"
                        placeholder="Select Date"
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                        ref={dateRef}
                      />
                      <Input
                        shape="round"
                        type="time"
                        name="time"
                        placeholder="Select Time"
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                        ref={timeRef}
                      />

                      <TextArea
                        shape="round"
                        name="inputbox_one"
                        placeholder="Enter Description"
                        className="w-full sm:pb-5 sm:pr-5 text-gray-600_02 font-semibold"
                        ref={descriptionRef}
                      />
                    </div>
                  </div>
                  <Button
                    size="2xl"
                    shape="round"
                    className="w-full sm:px-5 font-semibold"
                  >
                    Create event
                  </Button>
                </div>

                <div className="h-[534px] w-px md:w-full md:h-px my-[25px] bg-blue_gray-100_01" />

                <div className="flex flex-col w-[44%] md:w-full ml-[25px] gap-10 sm:ml-5">
                  <div className="flex flex-col w-full pt-[3px] gap-[19px]">
                    <div className="flex flex-col w-full gap-3 mt-12">
                      <Input
                        shape="round"
                        type="file"
                        name="images"
                        placeholder="Select images"
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                        ref={imageRef}
                      />
                      <SelectBox
                        shape="round"
                        type="text"
                        name=""
                        placeholder="Select Sport"
                        options={sportsOptions}
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                        ref={sportRef}
                      ></SelectBox>
                      <SelectBox
                        shape="round"
                        type="text"
                        name="parking"
                        placeholder="Parking"
                        options={[
                          { value: "available", label: "Available" },
                          { value: "unavilable", label: "Unavailable" },
                        ]}
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                        ref={parkingRef}
                      />
                      <Input
                        shape="round"
                        type="number"
                        name="teamSize"
                        placeholder="Team Size"
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                        ref={teamSizeRef}
                      />
                      <SelectBox
                        shape="round"
                        type="text"
                        name="food"
                        placeholder="Food Available"
                        options={[
                          { label: "none", value: "None" },
                          { label: "jain", value: "Jain" },
                          { label: "veg", value: "Vegetarian" },
                          { label: "non-veg", value: "Non-Vegetarian" },
                        ]}
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                        ref={foodRef}
                      />
                      <SelectBox
                        shape="round"
                        type="number"
                        name="sportsType"
                        placeholder="Sport Type"
                        options={[
                          { label: "indoor", value: "Indoor" },
                          { label: "outdoor", value: "Outdoor" },
                        ]}
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                        ref={sportsTypeRef}
                      />

                      <Input
                        shape="round"
                        type="number"
                        name="price"
                        placeholder="Participation Price"
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                        ref={priceRef}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] md:p-5 bg-white-A700" />
      </div>
    </>
  );
}
