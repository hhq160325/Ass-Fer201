import React, { Component } from "react";
import OrchidsListData from "../shared/ListOfOrchids";
import Orchids from "./Orchids";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      orchids: OrchidsListData,
    };
  }

  render() {
    return <Orchids orchids={this.state.orchids} />;
  }
}

export default Main;
