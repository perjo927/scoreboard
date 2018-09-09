import hyperHTML from "hyperhtml";
import moment from "moment";
import "moment-countdown";
import Chartist from "chartist";

function countdown(render) {
  render`
    <div class="stats alert">
      ${moment("20181231").countdown().toString() + " left"}.
    </div>
  `;
}
setInterval(countdown, 1000,
  hyperHTML(document.getElementById('countdown'))
);
const progressRender = hyperHTML.bind(document.getElementById("progress"));
progressRender`
    <div class="stats success">
      ${0 + " items done"}.
    </div>
`;


const data = {
  series: [[
    {x: 36, y: 0},
    {x: 37, y: 100}
  ]]
};

const options = {
  axisX: {
    type: Chartist.AutoScaleAxis,
    labelInterpolationFnc: function(value) {
      return 'w.' + value;
    },
    onlyInteger: true,
    low: 36,
    high: 52
  },
  axisY: {
    type: Chartist.AutoScaleAxis,
    onlyInteger: true,
    ticks: [0, 25, 50, 75, 100, 125, 150],
    low: 0,
    high: 150
  },
  showArea: true
};

new Chartist.Line('.line-chart', data, options);
new Chartist.Bar('.progress-bar', {
  series: [
    [5],
  ]
}, {
  horizontalBars: true,
  axisX: {
    type: Chartist.AutoScaleAxis,
    onlyInteger: true,
    low: 0,
    high: 150
  },
  axisY: {
    offset: 50
  },
  height: 100
});

new Chartist.Bar('.time-bar', {
  series: [
    [51], // todo: moment relative
  ]
}, {
  horizontalBars: true,
  reverseData: true,

  axisX: {
    type: Chartist.AutoScaleAxis,
    onlyInteger: true,
    low: 36, // todo: moment absolute
    high: 52 // todo: moment absolute
  },
  axisY: {
    offset: 50
  },
  height: 100
});
