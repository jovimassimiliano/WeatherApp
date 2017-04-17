var React = require("react");

// var WeatherMessage = React.createClass({
//   render: function(){
//     var {temp,location} = this.props;
//
//     return(
//       <div>
//         <p>The weather in {location} is {temp} &deg;</p>
//       </div>
//     );
//   }
// })

var WeatherMessage = ({temp,location}) => {
  // var {temp,location} = props;
  return(
    <div>
      <p className="text-center">The weather in {location} is {temp} &deg;</p>
    </div>
  );
}
module.exports = WeatherMessage;
