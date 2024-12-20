import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import Trial from "./Trial";
import Order from "./Order";
import { KnowEffect } from "./KnowEffect";

function App() {
  let imageRef = "logo192.png";
  return (
    <div>
      {/* <Header primaryHeading={"Sri Estates"} imageRef={imageRef}></Header> */}

      {/* <Trial></Trial> */}
      {/* <Order></Order> */}
      <KnowEffect></KnowEffect>
    </div>
  );
}

export default App;
