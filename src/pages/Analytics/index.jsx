import React from "react";
import Header from "components/Header";
import { Heading, Img, Text } from "../../components";

function Analytics() {
  return (
    <div className="flex flex-col items-center justify-start w-full gap-[99px] overflow-auto bg-white-A700">
      <div className="flex flex-col items-center justify-start w-full">
        <Header className="flex justify-center items-center w-full md:h-auto p-[19px] bg-white-A700" />
        {/* Write analytics code from here */}
        <Heading as="h2" size="xl" className="mb-4">
          Analytics Overview
        </Heading>
        <div className="flex flex-row items-center justify-start p-8">
          <div className="grid grid-cols-5 gap-5">
            <div className="bg-white p-4 rounded-lg shadow">
              <Heading as="h3" size="lg" className="mb-2">
                Total Users
              </Heading>
              <Text className="text-xl font-bold">1000</Text>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Heading as="h3" size="lg" className="mb-2">
                Total Revenue
              </Heading>
              <Text className="text-xl font-bold">$10,000</Text>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Heading as="h3" size="lg" className="mb-2">
                Page Views
              </Heading>
              <Text className="text-xl font-bold">5000</Text>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Heading as="h3" size="lg" className="mb-2">
                Page Views
              </Heading>
              <Text className="text-xl font-bold">5000</Text>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Heading as="h3" size="lg" className="mb-2">
                Page Views
              </Heading>
              <Text className="text-xl font-bold">5000</Text>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-start justify-start p-8">
          {/* Line Chart */}
          <div className="bg-white p-4 rounded-lg shadow mr-8">
            {/* Insert your line chart component here */}
            <h3 className="text-xl font-bold mb-4">Line Chart</h3>
            <div className="w-full h-64"></div>
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-4 rounded-lg shadow">
            {/* Insert your pie chart component here */}
            <h3 className="text-xl font-bold mb-4">Pie Chart</h3>
            <div className="w-full h-64">
              {" "}
              {/* Adjust height as needed */}
              {/* Your pie chart component */}
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
  );
}

export default Analytics;
