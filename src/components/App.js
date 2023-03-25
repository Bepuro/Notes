import React, {Component} from "react";

import Notes from "./Notes";

import {withoutIndex} from "../utils";


class App extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
          "Покупки: чай, кофе",
          "Дела: писать код, исправлять ошибки в проекте",

      ]
    };
  }

  onNoteDelete = (indexToRemove) => {
    this.setState(oldState => {
      return {
        notes: withoutIndex(oldState.notes, indexToRemove)
      };
    });
  };

  onNoteCreate = newNoteText => {
    this.setState(oldState => {
      return {
        notes: [newNoteText].concat(oldState.notes)
      };
    });
  };
  render() {
    return(
        <Notes notes = {this.state.notes}
               onDelete = {this.onNoteDelete}
               onCreate = {this.onNoteCreate}
        />
    );
  }
}

export default App;
