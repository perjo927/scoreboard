import { data } from "./data";
import hyperHTML from "hyperhtml";
import moment from "moment";
import "moment-countdown";
import Chartist from "chartist";

class Stats extends hyperHTML.Component {
  state: any;

  get defaultState() {
    this.state = {stats: data.stats};

    this.state.stats[0].text = "Time left: " + this.count();
    this.state.stats[0].progress = 100-this.getTimeProgress();

    return this.state;
  }

  private count() {
    return moment("20181231").countdown().toString();
  }

  private getTimeProgress() {
    const start = new Date(2018, 8, 0, 0, 0, 0, 0);
    const end = new Date(2018, 11, 31, 0, 0, 0, 0);
    const today = new Date();
    const total = end.getTime() - start.getTime();
    const elapsed = today.getTime() - start.getTime();
    return( elapsed / total )*100;
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
     ${data.isCustom ? data.text : data.amount + " " + data.text}
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

new Chartist.Line('.line-chart', data.chart, options);