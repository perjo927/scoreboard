function getTimeProgress() {
    const start = new Date(2018, 8, 0, 0, 0, 0, 0);
    const end = new Date(2018, 11, 31, 0, 0, 0, 0);
    const today = new Date();
    const total = end.getTime() - start.getTime();
    const elapsed = today.getTime() - start.getTime();
    return( elapsed / total )*100;
}


export const data = {
    chart: {
        series: [[
          {x: 36, y: 0},
          {x: 37, y: 4},
          {x: 38, y: 5}
        ],
        [
          {x: 36, y: 0},
          {x: 37, y: 2.5},
          {x: 38, y: 5},
          {x: 39, y: 7.5},
          {x: 40, y: 10},
          {x: 41, y: 12.5},
          {x: 42, y: 15},
          {x: 43, y: 17.5},
          {x: 44, y: 20},
          {x: 45, y: 22.5},
          {x: 46, y: 25},
          {x: 47, y: 27.5},
          {x: 48, y: 30},
          {x: 49, y: 32.5},
          {x: 50, y: 35},
          {x: 51, y: 37.5},
          {x: 52, y: 40},
        ],
        [
          {x: 36, y: 0},
          {x: 37, y: 10},
          {x: 38, y: 20},
          {x: 39, y: 30},
          {x: 40, y: 40},
          {x: 41, y: 50},
          {x: 42, y: 60},
          {x: 43, y: 70},
          {x: 44, y: 80},
          {x: 45, y: 90},
          {x: 46, y: 100},
          {x: 47, y: 110},
          {x: 48, y: 120},
          {x: 49, y: 127},
          {x: 50, y: 134},
          {x: 51, y: 142},
          {x: 52, y: 150},
        ]]
    },
    stats: [
        {
          type: "alert",
          progress: 100-getTimeProgress(),
          amount: 0,
          text: "left.",
          isCustom: true
        },
        {
          type: "success",
          progress: ((4/150)*100),
          amount: 5,
          text: "tests written."
        },
        {
          type: "warning",
          progress: (1/60000)*100,
          amount: 0,
          text: "coins collected."
        }
    ]
}