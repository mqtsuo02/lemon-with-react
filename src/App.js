import React from "react";
import MessageBox from "./Components/MessageBox";
import lemonText from "./lemonText";

const formatText = text => text.replace(/\r?\n/g, "").replace(/　/g, "");

const splitText = text =>
  text
    .replace(/。/g, "。,")
    .replace(/」/g, "」,")
    .split(",");

const App = () => (
  <div>
    <h1>檸檬 / 梶井基次郎</h1>
    <MessageBox messages={splitText(formatText(lemonText))} />
  </div>
);

export default App;
