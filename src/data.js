export const LineChartData = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "Steps By A",
      data: ["1000", "3000", "1000", "1500", "5000", "6000", "7000"],
      borderColor: "blue",
    },
    {
      label: "Steps By B",
      data: ["1000", "900", "2000", "3500", "2000", "5000", "2000"],
      borderColor: "red",
    },
    {
      label: "Steps By C",
      data: ["1000", "2000", "900", "1500", "4000", "9000", "6500"],
      borderColor: "green",
    },
  ],
};

export const BarChartData = {
  labels: [
    "Rent",
    "Groceries",
    "Utilities",
    "Transportation",
    "Others",
    "",
    "",
    "",
    "",
  ],
  datasets: [
    {
      label: "Expenses",
      data: [100, 200, 100, 300, 420],
      backgroundColor: ["red", "blue", "green", "yellow", "brown"],
      borderWidth: 1,
    },
  ],
};

export const PieChartData = {
  labels: ["Facebook", "Instagram", "Twitter", "YouTube", "Linkedin"],
  datasets: [
    {
      label: "Time Spent",
      data: [120, 30, 45, 60, 10],
      backgroundColor: ["red", "blue", "green", "yellow", "brown"],
      hoverOffset: 10,
    },
  ],
};

export const TaskChartData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Raj",
      data: [19, 18, 15, 12, 23, 16, 14, 22, 25, 13, 11, 21],
      borderColor: "hsl(350, 100%, 50%)",
      backgroundColor: "hsl(350, 100%, 50%)",
    },
    {
      label: "Sanya",
      data: [24, 17, 12, 16, 18, 15, 14, 20, 21, 13, 22, 25],
      borderColor: "hsl(155, 100%, 50%)",
      backgroundColor: "hsl(155, 100%, 50%)",
    },
    {
      label: "Shiv",
      data: [14, 21, 17, 18, 16, 15, 19, 12, 13, 24, 22, 11],
      borderColor: "hsl(10, 100%, 50%)",
      backgroundColor: "hsl(10, 100%, 50%)",
    },
    {
      label: "Meera",
      data: [20, 22, 11, 24, 13, 18, 17, 15, 19, 16, 21, 12],
      borderColor: "hsl(125, 100%, 50%)",
      backgroundColor: "hsl(125, 100%, 50%)",
    },
    {
      label: "Rohan",
      data: [15, 18, 14, 21, 12, 16, 19, 17, 23, 10, 22, 13],
      borderColor: "hsl(35, 100%, 50%)",
      backgroundColor: "hsl(35, 100%, 50%)",
    },
    {
      label: "Sophie",
      data: [17, 13, 22, 14, 21, 23, 16, 15, 12, 25, 18, 19],
      borderColor: "hsl(230, 100%, 50%)",
      backgroundColor: "hsl(230, 100%, 50%)",
    },
    {
      label: "Aditya",
      data: [20, 24, 18, 16, 22, 14, 17, 13, 21, 12, 23, 15],
      borderColor: "hsl(180, 100%, 50%)",
      backgroundColor: "hsl(180, 100%, 50%)",
    },
    {
      label: "Krishna",
      data: [19, 16, 21, 13, 14, 20, 12, 17, 22, 18, 15, 23],
      borderColor: "hsl(40, 100%, 50%)",
      backgroundColor: "hsl(40, 100%, 50%)",
    },
  ],
};
