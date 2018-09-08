import Gun from 'gun/gun';
import hyperHTML from "hyperhtml";
import moment from "moment";

const gun = Gun();

// gun.get('per').put({
//   name: "Per",
//   score: "0",
// });

// gun.get('per').on((data, key) => {
//   console.log("update:", data);
// });

function tick(render) {
    render`
      <div>
        <h1>Hello, world!</h1>
        <h2>It is ${moment().format('MMMM Do YYYY, h:mm:ss a')}.</h2>
      </div>
    `;
}
  
setInterval(tick, 5000,
    hyperHTML.bind(document.getElementById('root')));