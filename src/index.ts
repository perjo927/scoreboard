// import data from "./data";
// import HyperHTMLElement from "hyperhtml-element";
import hyperHTML from "hyperhtml";
import moment from "moment";
import "moment-countdown";
import Chartist from "chartist";

class Stats extends hyperHTML.Component {
  state: any;

  get defaultState() { 
    return {
      stats: [
        {
          type: "alert",
          progress: 85,
          amount: null,
          text: this.count() + " left."
        },
        {
          type: "success",
          progress: 5,
          amount: 0,
          text: "items done."
        },
        {
          type: "warning",
          progress: 5,
          amount: 0,
          text: "coins collected."
        }
      ]
    }; 
  }

  private count() {
    return moment("20181231").countdown().toString();
  }

  render() {
    return this.html`
      <div class="statistics">
        ${this.state.stats.map(stat => ProgressBar(stat))}
      </div>
      `;
  }
}

function ProgressBar(data) {
  return hyperHTML.wire(data, ':progress-bar')`
    <div id=${data.type} class=${data.type + " stats"}>
     ${data.amount} ${data.text}
    </div>
    <div class=${data.type + "-box grid"} >
        <span 
          class=${data.type + "-bar-filled bar"} 
          style=${"width: "+ data.progress +"vw;"}>
        </span>
        <span 
          class=${data.type + "-bar-empty bar"} 
          style=${"width: "+ (100-data.progress) +"vw;"}>
        </span>
    </div>
  `
}

function Chart() {
  return hyperHTML.wire(data, ':chart')`
    <div class="line-chart .ct-square"></div>
  `
}

const update = () => hyperHTML(document.getElementById("stats"))`
  ${new Stats}
`;
update();
setInterval(update, 1000);


hyperHTML.bind(document.getElementById('chart'))`
  ${Chart()}
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