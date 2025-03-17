import { useState } from "react";
import { TaskChartData } from "../data";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);

export const TaskChartBar = () => {
  const [employee, setEmployee] = useState("all");

  const handleChange = (e) => {
    e.preventDefault();
    setEmployee(e.target.value);
  };

  console.log();

  const updatedData =
    employee === "all"
      ? TaskChartData
      : {
          ...TaskChartData,
          datasets: TaskChartData.datasets.filter(
            (item) => item.label === employee
          ),
        };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: true,
          color: "black",
        },
        ticks: {
          font: {
            size: 12,
            weight: "bold",
          },
          color: "black",
        },
        min: 0,
      },
      y: {
        grid: {
          display: true,
          color: "black",
          borderColor: "#fff",
          borderWidth: 1,
        },
        ticks: {
          font: {
            size: 12,
            weight: "bold",
          },
          color: "black",
        },
        min: 0,
        max: 30,
        // max: Math.max(TaskChartData.datasets[0].data) + 10,
      },
    },
    plugins: {
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#333",
        bodyColor: "black",
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 10,
      },
      legend: {
        display: employee === "all" ? false : true,
        labels: {
          font: {
            size: 14,
            weight: "bold",
          },
          color: "black",
        },
      },
      title: {
        display: true,
        color: "black",
        text: "Tasks completed by Employees ",
        font: {
          size: 22,
          weight: "bold",
        },
      },
    },
  };

  return (
    <div
      style={{
        background: "#f3f3f3",
        padding: "20px",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* <div>
          <h2 style={{
            fontSize:'24px'
          }}>Task Completed by Employee</h2>
        </div> */}

      <div>
        <label htmlFor="emp">Employee : </label>
        <select
          style={{
            background: "transparent",
            padding: "10px",
            borderRadius: "4px",
            outline: "none",
          }}
          name="Employee"
          id="emp"
          value={employee}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Employee
          </option>
          <option value="all">All</option>
          {TaskChartData.datasets.map((item, index) => (
            <option
              style={
                {
                  // background: item.borderColor,
                  // color:'white'
                }
              }
              key={index}
              value={item.label}
            >
              {item.label}
            </option>
          ))}
        </select>
        <div style={{ height: "500px", width: "60vw" }}>
          <Bar data={updatedData} options={options} />
        </div>
      </div>
    </div>
  );
};
