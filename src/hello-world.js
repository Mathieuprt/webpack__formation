import HelloWorldButton from "./componants/hello-world-button/hello-world-button.js";
import Heading from "./componants/heading/heading.js";
import React from "react";

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

const heading = new Heading();
heading.render("hello world");
