import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import LandingPage from "pages/LandingPage";
import AboutUs from "pages/AboutUs";
import ListingMapView from "pages/ListingMapView";
import PropertyDetails from "pages/PropertyDetails";
import AgentList from "pages/AgentList";
import AgentProfile from "pages/AgentProfile";
import ContactPage from "pages/ContactPage";
import BlogPage from "pages/BlogPage";
import BlogDetails from "pages/BlogDetails";
import Error from "pages/Error";
import FAQ from "pages/FAQ";
import PrivacyPolicy from "pages/PrivacyPolicy";
import Analytics from "pages/Analytics";
import Sports from "pages/Sports";
import Events from "pages/Events";
import CreateEvent from "pages/Events/CreateEvent";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <Error /> },
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "aboutus",
      element: <AboutUs />,
    },
    {
      path: "listing",
      element: <ListingMapView />,
    },
    {
      path: "propertydetails",
      element: <PropertyDetails />,
    },
    {
      path: "analytics",
      element: <Analytics />,
    },
    {
      path: "sports",
      element: <Sports />,
    },
    {
      path: "events",
      element: <Events />,
    },
    {
      path: "createevent",
      element: <CreateEvent />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
