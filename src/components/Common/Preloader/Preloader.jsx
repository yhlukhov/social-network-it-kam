import React from "react";
import preloader from "../../../assets/images/preloader.svg";

const Preloader = (props) => {
   return <div>{props.status ? <img src={preloader} alt="loading..." /> : null}</div>;
};

export default Preloader;
