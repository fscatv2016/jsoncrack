import React from "react";

export const HomePage = () => {
  React.useEffect(() => {
    window.location.href = "/editor";
  }, []);
  return null;
};

export default HomePage;
