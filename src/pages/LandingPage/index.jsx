import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text, Button, Input } from "../../components";
import Header from "../../components/Header";
import LandingPageCard from "../../components/LandingPageCard";

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Sports App</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[99px] overflow-auto bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="flex justify-center items-center w-full md:h-auto p-[19px] bg-white-A700" />
          <div className="flex flex-col md:flex-row justify-between items-center w-full py-[50px] md:py-5 bg-yellow-50">
            <div className="md:w-1/2">
              <div>
                <Heading
                  size="5xl"
                  as="h1"
                  className="tracking-[-0.92px] text-center my-1"
                >
                  <>
                    SportsSpark
                    <br />
                    Where you&#39;ll love to live
                  </>
                </Heading>
                <Text size="lg" as="p" className="!text-gray-700 mb-3">
                  We help businesses customize, automate, and scale up their ad
                  production and delivery.
                </Text>
              </div>
              <div className="flex flex-col justify-center items-center md:items-start w-full p-6 sm:p-5 bg-white-A700 rounded-[16px]">
                <div className="flex flex-col items-center justify-start w-full gap-6">
                  <div className="flex flex-col items-center justify-start w-full gap-5">
                    <Input
                      shape="round"
                      name="city"
                      placeholder="City/Street"
                      suffix={
                        <Img
                          src="images/img_icon_20px_map.svg"
                          alt="icon / 20px / map"
                        />
                      }
                      className="w-full gap-[35px] font-semibold border-blue_gray-100_01 border border-solid"
                    />
                    <Input
                      shape="round"
                      name="icon20pxupdowna"
                      placeholder="Property Type"
                      suffix={
                        <Img
                          src="images/img_icon_20px_updown_arrow.svg"
                          alt="icon / 20px / up-down arrow"
                        />
                      }
                      className="w-full gap-[35px] font-semibold border-blue_gray-100_01 border border-solid"
                    />
                    <Input
                      shape="round"
                      name="price"
                      placeholder="Price Range"
                      suffix={
                        <Img
                          src="images/img_icon_20px_updown_arrow.svg"
                          alt="icon / 20px / up-down arrow"
                        />
                      }
                      className="w-full gap-[35px] font-semibold border-blue_gray-100_01 border border-solid"
                    />
                  </div>
                  <Button
                    size="4xl"
                    shape="round"
                    className="w-full sm:px-5 font-bold"
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-4 flex justify-center items-center">
              <Img
                src="images/dashboard.png"
                alt="image_one"
                className="w-[89%] md:h-auto sm:w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row md:flex-col justify-start w-full gap-6 md:gap-5 md:px-5 max-w-[1200px]">
            <div className="flex flex-col items-start justify-center w-[49%] md:h-auto gap-[49px] p-[50px] md:p-5 bg-red-100 rounded-[20px]">
              <div className="flex flex-col items-center justify-start mt-[23px] gap-[15px]">
                <Heading size="4xl" as="h2" className="tracking-[-0.72px]">
                  Simple & easy way to find your sports event
                </Heading>
                <Text as="p" className="!text-gray-900">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </Text>
              </div>
              <Button
                shape="round"
                className="mb-[23px] sm:px-5 font-semibold min-w-[138px] sm:min-w-full"
              >
                Get Started
              </Button>
            </div>
            <div className="w-[49%] md:w-full gap-6 grid-cols-2 sm:grid-cols-1 sm:gap-5 grid">
              <div className="flex flex-col items-start justify-center w-full md:h-auto gap-5 p-[30px] sm:p-5 bg-deep_orange-50 rounded-[20px]">
                <Img
                  src="images/img_search_status.svg"
                  alt="image"
                  className="h-[30px] w-[30px] mt-[7px]"
                />
                <Heading
                  size="3xl"
                  as="h3"
                  className="mb-[7px] tracking-[-0.56px]"
                >
                  <>
                    Search <br />
                    your location
                  </>
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-center w-full md:h-auto gap-5 p-[30px] sm:p-5 bg-deep_orange-50 rounded-[20px]">
                <Img
                  src="images/img_eye.svg"
                  alt="eye_one"
                  className="h-[30px] w-[30px] mt-[7px]"
                />
                <Heading
                  size="3xl"
                  as="h4"
                  className="mb-[7px] tracking-[-0.56px]"
                >
                  <>
                    Visit <br />
                    Appointment
                  </>
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-center w-full md:h-auto gap-5 p-[30px] sm:p-5 bg-deep_orange-50 rounded-[20px]">
                <Img
                  src="images/img_wallet.svg"
                  alt="wallet_one"
                  className="h-[30px] w-[30px] mt-[7px]"
                />
                <Heading
                  size="3xl"
                  as="h5"
                  className="mb-[7px] tracking-[-0.56px]"
                >
                  <>
                    Get your <br />
                    dream house
                  </>
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-center w-full md:h-auto gap-5 p-[30px] sm:p-5 bg-deep_orange-50 rounded-[20px]">
                <Img
                  src="images/img_emoji_happy.svg"
                  alt="emojihappy_one"
                  className="h-[30px] w-[30px] mt-[7px]"
                />
                <Heading
                  size="3xl"
                  as="h6"
                  className="mb-[7px] tracking-[-0.56px]"
                >
                  <>
                    Enjoy your <br />
                    Appointment
                  </>
                </Heading>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full p-[50px] md:p-5 bg-gray-50">
          <div className="flex flex-row justify-center w-full mx-[70px] md:mx-5 max-w-[1200px]">
            <div className="flex flex-row md:flex-col w-full gap-[100px] md:gap-10">
              <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[18px]">
                <Button
                  color="white_A700"
                  size="3xl"
                  shape="circle"
                  className="w-[60px]"
                >
                  <Img src="images/img_frame.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                  <Heading size="5xl" as="h2" className="tracking-[-0.92px]">
                    $15.4M
                  </Heading>
                  <Heading
                    size="lg"
                    as="h3"
                    className="!text-blue_gray-600 tracking-[-0.40px]"
                  >
                    <>
                      Owned from
                      <br />
                      Properties transactions
                    </>
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[18px]">
                <Button
                  color="white_A700"
                  size="3xl"
                  shape="circle"
                  className="w-[60px]"
                >
                  <Img src="images/img_frame_orange_a700.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                  <Heading size="5xl" as="h4" className="tracking-[-0.92px]">
                    25K+
                  </Heading>
                  <Heading
                    size="lg"
                    as="h5"
                    className="!text-blue_gray-600 tracking-[-0.40px]"
                  >
                    Properties for Buy & sell Successfully
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[18px]">
                <Button
                  color="white_A700"
                  size="3xl"
                  shape="circle"
                  className="w-[60px]"
                >
                  <Img src="images/img_icon.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                  <Heading size="5xl" as="h6" className="tracking-[-0.92px]">
                    500
                  </Heading>
                  <Heading
                    size="lg"
                    as="h5"
                    className="!text-blue_gray-600 tracking-[-0.40px]"
                  >
                    <>
                      Daily completed <br />
                      transactions
                    </>
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[19%] md:w-full mb-[26px] gap-[18px]">
                <Button
                  color="white_A700"
                  size="3xl"
                  shape="circle"
                  className="w-[60px]"
                >
                  <Img src="images/img_icon_orange_a700.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-full gap-4">
                  <Heading size="5xl" as="h1" className="tracking-[-0.92px]">
                    600+
                  </Heading>
                  <Heading
                    size="lg"
                    as="h5"
                    className="!text-blue_gray-600 tracking-[-0.40px]"
                  >
                    Reagular Clients
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start h-[1200px] w-full md:h-auto gap-[53px] md:px-5 max-w-[1200px]">
            <div className="flex flex-row justify-center w-full pt-[5px]">
              <div className="flex flex-col items-center justify-start w-full gap-[17px]">
                <div className="flex flex-row sm:flex-col justify-between items-start w-full sm:gap-10">
                  <Heading size="4xl" as="h2" className="tracking-[-0.72px]">
                    Featured Sports
                  </Heading>
                  <div className="flex flex-row justify-start items-center mt-[7px] gap-2 sm:mt-0">
                    <Heading
                      size="md"
                      as="h3"
                      className="mt-0.5 !text-orange-A700 !font-bold"
                    >
                      Explore All
                    </Heading>
                    <Img
                      src="images/img_icon_24px_v.svg"
                      alt="icon24pxv_one"
                      className="h-[24px] w-[24px]"
                    />
                  </div>
                </div>
              </div>
            </div>
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
        </div>
        <div className="flex flex-col items-center justify-center w-full px-14 py-[120px] md:p-5 bg-gray-50_01">
          <div className="flex flex-col items-center justify-start w-full gap-[150px] max-w-[1200px]">
            <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
              <div className="flex flex-col items-start justify-start w-[47%] md:w-full gap-[58px]">
                <div className="flex flex-col items-center justify-start gap-[19px]">
                  <Heading size="4xl" as="h2" className="tracking-[-0.72px]">
                    Simple & easy way to find your dream Appointment
                  </Heading>
                  <Text as="p" className="!text-gray-700">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. In a free hour, when our power of
                    choice is untrammelled and when nothing prevents our being
                    able to do what we like best, every pleasure is to be
                    welcomed.
                  </Text>
                </div>
                <Button
                  shape="round"
                  className="sm:px-5 font-semibold min-w-[138px] sm:min-w-full"
                >
                  Get Started
                </Button>
              </div>
              <div className="flex flex-row sm:flex-col justify-start w-[47%] md:w-full gap-5 sm:gap-5">
                <div className="flex flex-col items-center justify-start w-[49%] sm:w-full gap-4">
                  <Img
                    src="https://images.pexels.com/photos/711187/pexels-photo-711187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="image_two"
                    className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="https://images.pexels.com/photos/957312/chess-checkmated-chess-pieces-black-white-957312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="image_three"
                    className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[49%] sm:w-full gap-4">
                  <Img
                    src="https://images.pexels.com/photos/8007167/pexels-photo-8007167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="image_four"
                    className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="https://images.pexels.com/photos/159515/football-american-football-runner-player-159515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="image_five"
                    className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
              <Img
                src="https://images.pexels.com/photos/10347862/pexels-photo-10347862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="image_six"
                className="w-[44%] md:w-full md:h-[589px] object-cover rounded-[10px]"
              />
              <div className="flex flex-col items-start justify-start w-[44%] md:w-full gap-[60px]">
                <div className="flex flex-col items-center justify-start w-full gap-[18px]">
                  <div className="flex flex-col items-center justify-start w-full gap-[19px]">
                    <Heading size="4xl" as="h3" className="tracking-[-0.72px]">
                      Best rated host on popular rental sites
                    </Heading>
                    <Text as="p" className="!text-gray-700">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, when our power of
                      choice is untrammelled.
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-3">
                    <div className="flex flex-row justify-start items-center w-full gap-3.5 py-0.5 sm:gap-3.5">
                      <Img
                        src="images/img_icon_check.svg"
                        alt="iconcheck_one"
                        className="h-[24px] w-[24px]"
                      />
                      <Heading size="md" as="h4">
                        Find excellent deals
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full gap-3.5 sm:gap-3.5">
                      <Img
                        src="images/img_icon_check.svg"
                        alt="iconcheck_three"
                        className="h-[24px] w-[24px]"
                      />
                      <Heading size="md" as="h5" className="mt-[5px]">
                        Friendly host & Fast support
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full gap-3.5 sm:gap-3.5">
                      <Img
                        src="images/img_icon_check.svg"
                        alt="iconcheck_five"
                        className="h-[24px] w-[24px]"
                      />
                      <Heading size="md" as="h6" className="mt-[5px]">
                        Secure payment system
                      </Heading>
                    </div>
                  </div>
                </div>
                <Button
                  shape="round"
                  className="sm:px-5 font-semibold min-w-[134px] sm:min-w-full"
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full gap-6">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row justify-center w-full md:px-5 max-w-[1010px]">
              <div className="flex flex-row md:flex-col justify-between w-full md:gap-10">
                <Img
                  src="https://images.pexels.com/photos/289923/pexels-photo-289923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image_seven"
                  className="w-[46%] md:w-full md:h-[344px] object-cover rounded-lg"
                />
                <div className="flex flex-row justify-center w-[46%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                    <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                      <div className="flex flex-col items-start justify-center gap-[5px]">
                        <Heading
                          size="3xl"
                          as="h2"
                          className="mt-0.5 tracking-[-0.56px]"
                        >
                          Taylor Wilson
                        </Heading>
                        <Heading size="md" as="h3">
                          Product Manager - Static Mania
                        </Heading>
                      </div>
                      <Img
                        src="images/img_shape.svg"
                        alt="shape_one"
                        className="h-[51px]"
                      />
                    </div>
                    <Heading
                      size="2xl"
                      as="h4"
                      className="!text-gray-700 !font-semibold !leading-[165%]"
                    >
                      Eget eu massa et consectetur. Mauris donec. Leo a, id sed
                      duis proin sodales. Turpis viverra diam porttitor mattis
                      morbi ac amet. Euismod commodo. We get you customer
                      relationships that last.{" "}
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end w-full pl-14 pr-[215px] gap-[270px] md:gap-10 md:px-5">
            <div className="flex flex-row justify-start items-center w-[10%] gap-2">
              <Img
                src="images/img_icon_24px_v_gray_600.svg"
                alt="icon24pxv_three"
                className="h-[24px] w-[24px]"
              />
              <Heading size="md" as="h2" className="!text-gray-600 !font-bold">
                Previews
              </Heading>
            </div>
            <div className="flex flex-row justify-start items-center w-[7%] gap-2">
              <Heading
                size="md"
                as="h3"
                className="mt-px !text-orange-A700 !font-bold"
              >
                Next
              </Heading>
              <Img
                src="images/img_icon_24px_v.svg"
                alt="icon24pxv_five"
                className="h-[24px] w-[24px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full px-14 py-[120px] md:p-5 bg-gray-900">
          <div className="flex flex-col items-center justify-start w-full gap-[118px] max-w-[1200px]">
            <div className="flex flex-col items-center justify-start w-full gap-[60px]">
              <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                <Heading
                  size="4xl"
                  as="h2"
                  className="!text-white-A700 tracking-[-0.72px]"
                >
                  Upcoming Events
                </Heading>
                <div className="flex flex-row justify-start items-center gap-2">
                  <Heading
                    size="md"
                    as="h3"
                    className="mt-0.5 !text-orange-A700 !font-bold"
                  >
                    Explore All
                  </Heading>
                  <Img
                    src="images/img_icon_24px_v.svg"
                    alt="icon24pxv_seven"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </div>
              <div className="flex flex-row md:flex-col w-full gap-6">
                <div className="flex flex-col items-center justify-start w-[32%] md:w-full gap-6">
                  <Img
                    src="https://images.pexels.com/photos/8007167/pexels-photo-8007167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="image"
                    className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-center justify-start w-full gap-[23px]">
                    <Heading
                      size="2xl"
                      as="h4"
                      className="!text-white-A700 tracking-[-0.48px]"
                    >
                      9 Easy-to-Ambitious DIY Projects to Improve Your Home
                    </Heading>
                    <div className="flex flex-row justify-start items-center w-full gap-2">
                      <Heading
                        size="md"
                        as="h5"
                        className="mt-px !text-deep_orange-400 !font-bold"
                      >
                        Read the Article
                      </Heading>
                      <Img
                        src="images/img_icon_24px_v_deep_orange_400.svg"
                        alt="read_the"
                        className="h-[24px] w-[24px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[32%] md:w-full gap-6">
                  <Img
                    src="https://images.pexels.com/photos/957312/chess-checkmated-chess-pieces-black-white-957312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="image_one"
                    className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-center justify-start w-full gap-[23px]">
                    <Heading
                      size="2xl"
                      as="h6"
                      className="!text-white-A700 tracking-[-0.48px]"
                    >
                      Serie Shophouse Launch In July, Opportunity For Investors
                    </Heading>
                    <div className="flex flex-row justify-start items-center w-full gap-2">
                      <Heading
                        size="md"
                        as="h6"
                        className="mt-px !text-deep_orange-400 !font-bold"
                      >
                        Read the Article
                      </Heading>
                      <Img
                        src="https://images.pexels.com/photos/8007094/pexels-photo-8007094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="icon24pxv_one"
                        className="h-[24px] w-[24px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[32%] md:w-full gap-6">
                  <Img
                    src="https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="image_one"
                    className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-center justify-start w-full gap-[23px]">
                    <Heading
                      size="2xl"
                      as="h4"
                      className="!text-white-A700 tracking-[-0.48px]"
                    >
                      Looking for a New Place? Use This Time to Create Your
                      Wishlist
                    </Heading>
                    <div className="flex flex-row justify-start items-center w-full gap-2">
                      <Heading
                        size="md"
                        as="h6"
                        className="mt-px !text-deep_orange-400 !font-bold"
                      >
                        Read the Article
                      </Heading>
                      <Img
                        src="images/img_icon_24px_v_deep_orange_400.svg"
                        alt="icon24pxv_one"
                        className="h-[24px] w-[24px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-[30px] p-10 sm:p-5 bg-gray-400_01 rounded-[10px]">
              <div className="flex flex-col items-center justify-start w-[54%] md:w-full pt-[3px] gap-[5px]">
                <Heading
                  size="3xl"
                  as="h3"
                  className="tracking-[-0.56px] text-center"
                >
                  For Recent Update, News.
                </Heading>
                <Text as="p" className="!text-gray-900 text-center">
                  We helps businesses customize, automate and scale up their ad
                  production and delivery.
                </Text>
              </div>
              <div className="flex flex-row sm:flex-col justify-start w-[54%] md:w-full gap-2 sm:gap-5">
                <Input
                  color="gray_50_02"
                  size="sm"
                  shape="round"
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="w-[78%] md:w-full font-semibold"
                />
                <Button
                  shape="round"
                  className="sm:px-5 font-semibold min-w-[126px]"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center items-center w-full px-14 py-[74px] md:p-5 bg-white-A700">
          <div className="flex flex-col items-center justify-center w-full mt-[5px] gap-[115px] mx-auto max-w-[1200px]">
            <div className="flex flex-row md:flex-col justify-start items-center w-full gap-px md:gap-5">
              <div className="flex flex-col items-center justify-start w-[29%] md:w-full gap-[43px]">
                <div className="flex flex-row justify-start items-start w-full gap-[11px]">
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
                <div className="flex flex-col items-start justify-start w-full gap-7">
                  <Heading as="h6">
                    <>
                      59 Bervely Hill Ave, Brooklyn Town,
                      <br />
                      New York, NY 5630, CA, US
                    </>
                  </Heading>
                  <div className="flex flex-col items-start justify-center gap-2">
                    <Heading as="h6" className="mt-px">
                      +(123) 456-7890
                    </Heading>
                    <Heading as="h6">info@mail.com</Heading>
                  </div>
                  <div className="flex flex-row justify-start w-full gap-3">
                    <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                      <Img
                        src="images/img_icon_facebook.svg"
                        alt="iconfacebook"
                        className="h-[30px] w-[30px]"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                      <Img
                        src="images/img_icon_twitter.svg"
                        alt="icontwitter_one"
                        className="h-[30px] w-[30px]"
                      />
                    </div>
                    <Img
                      src="images/img_icon_instragram.svg"
                      alt="iconinstragram"
                      className="h-[30px] w-[30px]"
                    />
                    <Img
                      src="images/img_icon_linked_in.svg"
                      alt="iconlinkedin"
                      className="h-[30px] w-[30px]"
                    />
                    <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                      <Img
                        src="images/img_icon_youtube.svg"
                        alt="iconyoutube_one"
                        className="h-[30px] w-[30px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-col justify-between items-center w-[72%] md:w-full md:gap-10">
                <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
                  <Heading size="md" as="h6" className="!font-bold">
                    Features
                  </Heading>
                  <div className="flex flex-col items-start justify-start w-full gap-[15px]">
                    <Heading as="h6">Home v1</Heading>
                    <Heading as="h6">Home v2</Heading>
                    <Heading as="h6">About</Heading>
                    <Heading as="h6">Contact</Heading>
                    <Heading as="h6">Search</Heading>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
                  <Heading size="md" as="h6" className="!font-bold">
                    Information
                  </Heading>
                  <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[15px]">
                    <Heading as="h6">Listing v1</Heading>
                    <Heading as="h6">Listing v2</Heading>
                    <Heading as="h6">Property Details</Heading>
                    <Heading as="h6">Agent List</Heading>
                    <Heading as="h6">Agent Profile</Heading>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
                  <Heading size="md" as="h6" className="!font-bold">
                    Documentation{" "}
                  </Heading>
                  <div className="flex flex-col items-start justify-center w-full gap-[15px]">
                    <Heading as="h6" className="mt-0.5">
                      Blog
                    </Heading>
                    <Heading as="h6">FAQ</Heading>
                    <a href="#">
                      <Heading as="h6">Privacy Policy</Heading>
                    </a>
                    <Heading as="h6">License</Heading>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
                  <Heading size="md" as="h6" className="!font-bold">
                    Others
                  </Heading>
                  <div className="flex flex-col items-start justify-center w-full gap-[15px]">
                    <a href="#" className="mt-0.5">
                      <Heading as="h6">Log in</Heading>
                    </a>
                    <Heading as="h6">Enter OTP</Heading>
                    <Heading as="h6">New Password</Heading>
                    <a href="#">
                      <Heading as="h6">Reset Password</Heading>
                    </a>
                    <a href="#">
                      <Heading as="h6">Create Account</Heading>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <Heading as="h6">© 2022. All rights reserved.</Heading>
          </div>
        </footer>
      </div>
    </>
  );
}
