import { React } from "react";

//IMPORTING COMPONENETS
import Navbar from "./components/Navbar";
import SwordsContainer from "./components/SwordsContainer";

function Home() {
  return (
    <>
      <Navbar />
      <SwordsContainer></SwordsContainer>
    </>
  );
}

export default Home;
