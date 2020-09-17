import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalculator,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
library.add(faCalculator, faPlus, faMinus);

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Header />
      <Button counter={counter} setCounter={setCounter} />
      <Footer />
    </div>
  );
}

export default App;
