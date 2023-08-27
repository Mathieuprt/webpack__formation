import "./hello-world-button.scss";

class HelloWorldButton {
  buttonCssClass = "hello__world--button";
  render() {
    const button = document.createElement("button");
    button.innerHTML = "Hello World";

    button.classList.add(this.buttonCssClass); // class properties
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
