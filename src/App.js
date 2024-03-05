import { Component } from "react";
import "./App.css";
import Banner from "./Banner";
import Exhibit from "./Exhibit";
import AddressDisplay from "./AddressDisplay";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner bannerText="Sextant" />
        <Exhibit name="Child Component">
          <p> It is 1st child component</p>
        </Exhibit>
        <Exhibit name="Child Component">
          <p> It is 2nd child component</p>
        </Exhibit>
      </div>
    );
  }
}

export default App;
