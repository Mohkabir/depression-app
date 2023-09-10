import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import Layout from "../components/layout";

const Report = () => {
  const navigate = useNavigate();
  const handleEnd = () => {
    navigate("/home");
  };
  return (
    <Layout>
      <div className="miniWrap home">
        <div className="reportWrap">
          <p>
            Congratulations Sandra! your test shows you are not depressed. It is
            adviced you do more activities that makes you happy if you feel a
            little down.
          </p>
        </div>

        <Button onClick={handleEnd} title="End session" />
      </div>
    </Layout>
  );
};

export default Report;
