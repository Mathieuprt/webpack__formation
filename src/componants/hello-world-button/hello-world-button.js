import "./hello-world-button.css";

class HelloWorldButton {
  render() {
    const button = document.createElement("button");
    button.innerHTML = "Hello World";

    button.classList.add("hello__world--button");
    const body = document.querySelector("body");
    button.onclick = function () {
      const p = document.createElement("p");
      p.innerHTML = "Hello World";
      p.classList.add("hello__world--text");
      body.append(p);
    };

    body.appendChild(button);
  }
}

export default HelloWorldButton;
