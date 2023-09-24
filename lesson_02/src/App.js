import React, { Component } from "react";

import List from "./components/List/List";

export default class App extends Component {
  state = {
    animals: [
      { type: `turtle`, icon: `🐢` },
      { type: `octopus`, icon: `🐙` },
      { type: `fish`, icon: `🐠` },
      { type: `flamingo`, icon: `🦩` },
      { type: `penguin`, icon: `🐧` },
    ],
  };

  render() {
    return <>{<List list={this.state.animals} />}</>;
  }
}
