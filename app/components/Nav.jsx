var React = require("react");
var {Link,IndexLink} = require("react-router");

var Nav = React.createClass({
  render:function(){
    return(
      <div className="top-bar">
        <div className="top-bar-title">
          <strong>Timer App</strong>
        </div>
        <div className="top-bar-left">
          <ul className="menu">
            <li>
              <IndexLink to="/" activeClassName="active-link">Stopwatch</IndexLink>
            </li>
            <li>
              <Link to="/timer" activeClassName="active-link">Timer</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created by <a href="https://github.com">Jovi Massimiliano</a></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
