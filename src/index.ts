import hyperHTML from "hyperhtml";
import moment from "moment";
import Chartist from "chartist";

function tick(render) {
  render`
    <div>
      ${moment("20181231", "YYYYMMDD").fromNow()}.
    </div>
  `;
}
setInterval(tick, 1000,
  hyperHTML(document.getElementById('root'))
);

var data = {
  series: [[
    {x: 36, y: 0},
    {x: 37, y: 100}
  ]]
};

var options = {
  axisX: {
    type: Chartist.AutoScaleAxis,
    onlyInteger: true,
    low: 36,
    high: 52
  },
  axisY: {
    type: Chartist.FixedScaleAxis,
    ticks: [0, 25, 50, 75, 100, 125, 150],
    low: 0,
    high: 150
  },
  showArea: true
};

new Chartist.Line('.ct-chart', data, options);