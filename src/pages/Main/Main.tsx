import React from "react";
import Posts from "../../components/Posts/Posts";
import "./MainStyles.css";

const Main: React.FC = () => {
  return (
    <div className="conteiner">
      <Posts />
      <Posts />
      <Posts />
    </div>
  );
};

export default Main;
