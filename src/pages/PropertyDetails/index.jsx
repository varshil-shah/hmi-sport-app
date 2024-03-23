import React from "react";
import { Helmet } from "react-helmet";
import {
  Img,
  Heading,
  Button,
  TextArea,
  Radio,
  RadioGroup,
  Text,
  RatingBar,
  GoogleMap,
} from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LandingPageCard from "../../components/LandingPageCard";

export default function PropertyDetailsPage() {
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
          <div className="flex flex-col items-center justify-start w-full gap-10">
            <Header className="flex justify-center items-center w-full md:h-auto p-[19px] bg-white-A700" />
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-row md:flex-col justify-start w-full gap-6 md:gap-5 md:px-5 max-w-[1200px]">
                <div className="flex flex-row justify-start w-[66%] md:w-full">
                  <Img
                    src="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="image"
                    className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[32%] md:w-full gap-6">
                  <Img
                    src="https://images.pexels.com/photos/102448/pexels-photo-102448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="image_one"
                    className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                  <div className="h-[263px] w-full relative">
                    <Img
                      src="https://images.pexels.com/photos/918798/pexels-photo-918798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="image_two"
                      className="justify-center h-[263px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[10px]"
                    />
                    <Button
                      color="white_A700"
                      size="lg"
                      shape="round"
                      leftIcon={
                        <Img
                          src="images/img_icon_image.svg"
                          alt="icon - image"
                        />
                      }
                      className="gap-1.5 bottom-[6%] right-[4%] m-auto text-gray-900 font-bold min-w-[122px] absolute"
                    >
                      3 more
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row md:flex-col justify-start items-start w-full gap-6 md:gap-5 md:px-5 max-w-[1200px]">
                <div className="flex flex-col items-center justify-start w-[66%] md:w-full gap-6">
                  <div className="flex flex-col items-center justify-start w-full gap-11 p-[39px] sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                    <div className="flex flex-col items-start justify-start w-full gap-[22px]">
                      <div className="flex flex-col items-start justify-start w-full gap-[17px]">
                        <Heading
                          size="3xl"
                          as="h1"
                          className="tracking-[-0.56px]"
                        >
                          January 12-February 10: AFC Asian Cup 2023
                        </Heading>
                        <Heading
                          size="lg"
                          as="h2"
                          className="tracking-[-0.40px]"
                        >
                          2861 62nd Ave, Oakland, Qatar
                        </Heading>
                      </div>
                      <div className="flex flex-row sm:flex-col w-[75%] gap-4">
                        <div className="flex flex-col items-start justify-start md:w-full gap-[5px] p-[5px] border-gray-600_02 border border-solid bg-white-A700 rounded-[10px]">
                          <Heading
                            size="2xl"
                            as="h3"
                            className="ml-[17px] md:ml-0 tracking-[-0.48px]"
                          >
                            $1,000
                          </Heading>
                          <Heading
                            size="xs"
                            as="h4"
                            className="ml-[17px] md:ml-0 !text-gray-600_02"
                          >
                            Online / Cash Payment
                          </Heading>
                        </div>
                        <div className="flex flex-col items-start justify-start md:w-full gap-1 p-[5px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                          <Heading
                            size="2xl"
                            as="h5"
                            className="ml-[17px] md:ml-0 tracking-[-0.48px]"
                          >
                            Available
                          </Heading>
                          <Heading
                            size="xs"
                            as="h6"
                            className="ml-[17px] md:ml-0 !text-gray-600_02"
                          >
                            Participation
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full pt-[3px] gap-3">
                      <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                        Glory in the Gulf: AFC Asian Cup 2023 Unveils Football's
                        Finest in Qatar
                      </Heading>
                      <Text as="p">
                        As the sun sets over the vast expanse of the Arabian
                        desert, anticipation mounts in the air as football fans
                        from across the globe converge upon Qatar for the AFC
                        Asian Cup 2023. Amidst the gleaming skyline of Doha, the
                        stage is set for a spectacle of athleticism, skill, and
                        sheer determination. From January 12 to February 10, the
                        stadiums resonate with the thunderous cheers of
                        supporters, as teams battle fiercely for continental
                        supremacy. With each match, history is made, dreams are
                        realized, and the spirit of unity and competition
                        transcends borders. As the tournament unfolds, the world
                        watches in awe as players showcase their talents,
                        weaving intricate patterns on the field, and leaving an
                        indelible mark on the beautiful game. Beyond the thrill
                        of victory and the agony of defeat, the AFC Asian Cup
                        2023 stands as a testament to the power of sport to
                        inspire, unite, and celebrate the human spirit.
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-6">
                      <div className="flex flex-col items-start justify-start w-full gap-[22px]">
                        <Heading
                          size="3xl"
                          as="h3"
                          className="tracking-[-0.56px]"
                        >
                          Local Information
                        </Heading>
                        <div className="flex flex-row sm:flex-col justify-start gap-3 sm:gap-5">
                          <Button
                            color="blue_gray_100_01"
                            size="lg"
                            variant="outline"
                            shape="round"
                            className="sm:px-5 font-semibold min-w-[119px]"
                          >
                            Near me
                          </Button>
                          <Button
                            size="lg"
                            shape="round"
                            className="sm:px-5 font-semibold min-w-[119px]"
                          >
                            Schools
                          </Button>
                          <Button
                            color="blue_gray_100_01"
                            size="lg"
                            variant="outline"
                            shape="round"
                            className="sm:px-5 font-semibold min-w-[119px]"
                          >
                            College
                          </Button>
                          <Button
                            color="blue_gray_100_01"
                            size="lg"
                            variant="outline"
                            shape="round"
                            className="font-semibold min-w-[119px]"
                          >
                            Upcoming
                          </Button>
                        </div>
                      </div>
                      <GoogleMap
                        showMarker={false}
                        className="h-[400px] w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center w-full gap-[19px] p-[39px] sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                    <Heading
                      size="3xl"
                      as="h3"
                      className="mt-[3px] tracking-[-0.56px]"
                    >
                      Sport Highlights
                    </Heading>
                    <div className="flex flex-row md:flex-col w-full gap-[150px] md:gap-10">
                      <div className="flex flex-col items-center justify-start w-[40%] md:w-full gap-2.5">
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center w-[41%] gap-2.5">
                            <div className="h-[8px] w-[8px] bg-gray-600_02 rounded-[50%]" />
                            <Text as="p" className="mt-[5px]">
                              Parking
                            </Text>
                          </div>
                          <Heading size="md" as="h6" className="text-right">
                            Available
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center w-[42%] gap-2.5 py-0.5">
                            <div className="h-[8px] w-[8px] bg-gray-600_02 rounded-[50%]" />
                            <Text as="p" className="mt-px">
                              Outdoor
                            </Text>
                          </div>
                          <Heading size="md" as="h6" className="text-right">
                            Yes
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center w-[35%] gap-2.5 py-0.5">
                            <div className="h-[8px] w-[8px] bg-gray-600_02 rounded-[50%]" />
                            <Text as="p" className="mt-px">
                              Place
                            </Text>
                          </div>
                          <Heading size="md" as="h6" className="text-right">
                            Qatar
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center w-[43%] gap-2.5 py-0.5">
                            <div className="h-[8px] w-[8px] bg-gray-600_02 rounded-[50%]" />
                            <Text as="p" className="mt-px">
                              Date
                            </Text>
                          </div>
                          <Heading size="md" as="h6" className="text-right">
                            23 Mar 2024
                          </Heading>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[40%] md:w-full mb-[42px] gap-2.5">
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center w-[36%] gap-2.5 py-0.5">
                            <div className="h-[8px] w-[8px] bg-gray-600_02 rounded-[50%]" />
                            <Text as="p" className="mt-px">
                              Team
                            </Text>
                          </div>
                          <Heading size="md" as="h6" className="text-right">
                            16 players
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center w-[45%] gap-2.5">
                            <div className="h-[8px] w-[8px] bg-gray-600_02 rounded-[50%]" />
                            <Text as="p" className="mt-[5px]">
                              Price
                            </Text>
                          </div>
                          <Heading size="md" as="h6" className="text-right">
                            $560
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center w-[39%] gap-2.5 py-0.5">
                            <div className="h-[8px] w-[8px] bg-gray-600_02 rounded-[50%]" />
                            <Text as="p" className="mt-px">
                              Food
                            </Text>
                          </div>
                          <Heading size="md" as="h6" className="text-right">
                            Veg
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center w-full gap-[21px] p-[39px] sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                    <Heading
                      size="3xl"
                      as="h3"
                      className="mt-[3px] tracking-[-0.56px]"
                    >
                      Event organisers
                    </Heading>
                    <div className="flex flex-row justify-start items-center w-full gap-6">
                      <Img
                        src="images/img_rectangle_5599.png"
                        alt="image_three"
                        className="w-[150px] md:h-auto object-cover rounded-[10px]"
                      />
                      <div className="flex flex-col items-start justify-start w-[26%] gap-0.5">
                        <Heading
                          size="lg"
                          as="h5"
                          className="tracking-[-0.40px]"
                        >
                          Bruno Fernandes
                        </Heading>
                        <div className="flex flex-row justify-start items-center gap-3.5 py-0.5">
                          <RatingBar
                            value={1}
                            isEditable={true}
                            size={16}
                            className="flex justify-between"
                          />
                          <Heading as="h6" className="mr-1.5">
                            4 review
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-2.5 py-0.5">
                          <Img
                            src="images/img_icon_20px_email.svg"
                            alt="icon20pxemail"
                            className="h-[20px] w-[20px]"
                          />
                          <Text size="s" as="p" className="mt-0.5">
                            bruno@relasto .com
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-2.5 py-0.5">
                          <Img
                            src="images/img_icon_20px_call.svg"
                            alt="icon20pxcall"
                            className="h-[20px] w-[20px]"
                          />
                          <Text size="s" as="p">
                            +65 0231 965 965
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[32%] sm:w-full gap-10 p-[23px] sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                  <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[19px]">
                    <Heading size="3xl" as="h3" className="tracking-[-0.56px]">
                      News letter
                    </Heading>
                    <div className="flex flex-col items-center justify-start w-full gap-3">
                      <RadioGroup name="requestfor" className="flex flex-col">
                        <Radio
                          value="fullname"
                          label="Full Name"
                          className="flex w-full pl-3.5 pr-[35px] gap-3.5 py-[17px] text-gray-600_02 text-lg font-semibold border-blue_gray-100_01 border bg-white-A700 rounded-[10px]"
                        />
                        <Radio
                          value="emailaddress"
                          label="Email Address"
                          className="flex w-full mt-3 pl-3.5 pr-[35px] gap-3.5 py-[17px] text-gray-600_02 text-lg font-semibold border-blue_gray-100_01 border bg-white-A700 rounded-[10px]"
                        />
                        <Radio
                          value="phonenumber"
                          label="Phone Number"
                          className="flex w-full mt-3 pl-3.5 pr-[35px] gap-3.5 py-[17px] text-gray-600_02 text-lg font-semibold border-blue_gray-100_01 border bg-white-A700 rounded-[10px]"
                        />
                        <Radio
                          value="date"
                          label="Date"
                          className="flex w-full mt-3 pl-3.5 pr-[35px] gap-3.5 py-[17px] text-gray-600_02 text-lg font-semibold border-blue_gray-100_01 border bg-white-A700 rounded-[10px]"
                        />
                      </RadioGroup>
                      <TextArea
                        shape="round"
                        name="inputbox_one"
                        placeholder="Message"
                        className="w-full sm:pb-5 sm:pr-5 text-gray-600_02 font-semibold"
                      />
                    </div>
                  </div>
                  <Button
                    size="2xl"
                    shape="round"
                    className="w-full sm:px-5 font-semibold"
                  >
                    Send Request
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[39px] md:px-5 max-w-[1200px]">
              <div className="flex flex-row sm:flex-col justify-between items-start w-full pt-[3px] sm:gap-10">
                <Heading size="3xl" as="h2" className="tracking-[-0.56px]">
                  Latest ongoing sports
                </Heading>
                <div className="flex flex-row justify-start items-center mt-[3px] gap-2 sm:mt-0">
                  <Heading
                    size="md"
                    as="h3"
                    className="mt-0.5 !text-orange-A700 !font-bold"
                  >
                    Explore All
                  </Heading>
                  <Img
                    src="images/img_icon_24px_v.svg"
                    alt="iconarrow_one"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </div>
              <div className="flex flex-row md:flex-col w-full gap-6">
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
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] md:p-5 bg-white-A700" />
      </div>
    </>
  );
}
