var React = require("react");


var About = (props) => {
  return(
    <div className>
      <h1 className="text-center">About</h1>
      <p>
        This app created using React.
      </p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a>
        </li>
      </ul>
    </div>
  );
}

module.exports = About;
