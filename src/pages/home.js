import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import Layout from "../components/layout";

const Home = () => {

  const navigate = useNavigate();
  const handleStart = () => {
    navigate("/questions");
  };
  return (
    <Layout>
      <div className="miniWrap home">
        <p>
          Depression can affect anyone, but recovery is possible with proper
          care and support!
        </p>

        <Button onClick={handleStart} title="Click here to take test" />
      </div>
    </Layout>
  );
};

export default Home;
