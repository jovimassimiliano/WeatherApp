var React = require("react");

var WeatherForm = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var location = this.refs.location.value;

    this.props.onSearch(location);
    this.refs.location.value = "";
  },

  render: function(){
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="location" placeholder="Enter your city"></input>
          <button className="hollow button expanded">Submit</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
