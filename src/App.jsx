import { Fragment } from "react";
import Netflixseries from "./components/NetflixSeries";
// import "./components/Netflix.css"
import  "./components/Netflix.module.css";

export const App = () =>{
  return (
  <section className="container">
    <h1 className="card-heading">List of best Netflix Series!</h1>
   <Netflixseries/>;
   </section>
   );
};
