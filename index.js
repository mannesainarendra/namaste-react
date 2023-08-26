const paragraphEl = React.createElement("div", {id: "container", className: "container-class"}, React.createElement("div", {className: "inner-container-class"}, [React.createElement("h1", {}, "Heading1"), React.createElement("h2", {}, "Heading2")]));
console.log(paragraphEl);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(paragraphEl);