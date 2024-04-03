import React, { useRef, useState } from "react";
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

import { useSport } from "../../context/sportContext";

const sportsOptions = [
  { value: "badminton", label: "Badminton" },
  { value: "cricket", label: "Cricket" },
  { value: "football", label: "Football" },
  { value: "basketball", label: "Basketball" },
  { value: "tableTennis", label: "Table Tennis" },
];

const Select = ({ options, value, onChange, title = "" }) => {
  return (
    <select
      className="block appearance-none w-full bg-white border-blue_gray-100_01 border border-solid px-4 py-3 pr-8 rounded-md"
      value={value}
      onChange={onChange}
    >
      <option value="">Select {title}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default function CreateEvent() {
  const nameRef = useRef(null);
  const locationRef = useRef(null);
  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const descriptionRef = useRef(null);
  const teamSizeRef = useRef(null);
  const priceRef = useRef(null);

  const [images, setImages] = useState([]);
  const [parking, setParking] = useState("");
  const [sport, setSport] = useState("");
  const [food, setFood] = useState("");
  const [sportType, setSportType] = useState("");

  const { createSport } = useSport();

  const handleUpload = (e) => {
    const files = e.target.files;
    const images = Array.from(files).map((file) => ({
      imageName: file.name,
      imageUrl: URL.createObjectURL(file),
    }));
    setImages(images);
    console.log(images);
  };

  function handleCreateEvent() {
    const newSport = {
      name: nameRef.current.value,
      location: locationRef.current.value,
      date: dateRef.current.value,
      time: timeRef.current.value,
      images: images,
      description: descriptionRef.current.value,
      sport: sport,
      parking: parking,
      teamSize: teamSizeRef.current.value,
      food: food,
      sportsType: sportType,
      price: priceRef.current.value,
    };

    console.log(newSport);

    createSport(newSport);

    // reset all values
    nameRef.current.value = "";
    locationRef.current.value = "";
    dateRef.current.value = "";
    timeRef.current.value = "";
    descriptionRef.current.value = "";
    teamSizeRef.current.value = "";
    priceRef.current.value = "";

    setImages([]);
    setSport("");
    setFood("");
    setParking("");
    setSportType("");
  }

  async function uploadImages() {}

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
                    onClick={handleCreateEvent}
                  >
                    Create event
                  </Button>
                </div>

                <div className="h-[534px] w-px md:w-full md:h-px my-[25px] bg-blue_gray-100_01" />

                <div className="flex flex-col w-[44%] md:w-full ml-[25px] gap-10 sm:ml-5">
                  <div className="flex flex-col w-full pt-[3px] gap-[19px]">
                    <div className="flex flex-col w-full gap-3 mt-12">
                      <input
                        shape="round"
                        type="file"
                        name="images"
                        placeholder="Select images"
                        className="block appearance-none w-full bg-white border-blue_gray-100_01 border border-solid px-4 py-3 pr-8 rounded-md"
                        onChange={handleUpload}
                        multiple
                      />
                      <Select
                        options={sportsOptions}
                        title="sport"
                        value={sport}
                        onChange={(e) => setSport(e.target.value)}
                      />
                      <Select
                        options={[
                          { value: "available", label: "Available" },
                          { value: "unavilable", label: "Unavailable" },
                        ]}
                        title="parking"
                        value={parking}
                        onChange={(e) => setParking(e.target.value)}
                      />
                      <Input
                        shape="round"
                        type="number"
                        name="teamSize"
                        placeholder="Team Size"
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                        ref={teamSizeRef}
                      />
                      <Select
                        options={[
                          { label: "none", value: "None" },
                          { label: "jain", value: "Jain" },
                          { label: "veg", value: "Vegetarian" },
                          { label: "non-veg", value: "Non-Vegetarian" },
                        ]}
                        title="food"
                        value={food}
                        onChange={(e) => setFood(e.target.value)}
                      />
                      <Select
                        options={[
                          { label: "indoor", value: "Indoor" },
                          { label: "outdoor", value: "Outdoor" },
                        ]}
                        title="sport type"
                        value={sportType}
                        onChange={(e) => setSportType(e.target.value)}
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
