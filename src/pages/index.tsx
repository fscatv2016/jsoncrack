import React from "react";
import Layout from "src/layout/Layout";

export const HomePage = () => {
  React.useEffect(() => {
    window.location.href = "/editor";
  }, []);
  return <Layout></Layout>;
};

export default HomePage;
