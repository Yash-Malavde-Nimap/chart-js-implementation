import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { LineChartData } from "../data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title
);

const LineComponent = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
            weight: "bold",
          },
        },
      },
      y: {
        grid: {
          color: "#f0f0f0",
          borderColor: "#ddd",
          borderWidth: 1,
        },
        ticks: {
          font: {
            size: 12,
            weight: "bold",
          },
        },
      },
    },
    plugins: {
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#333",
        bodyColor: "#666",
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 10,
      },
      legend: {
        labels: {
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      title: {
        display: true,
        text: "This is Line Chart Example",
        font: {
          size: 22,
          weight: "bold",
        },
      },
    },
  };

  return (
    <>
      {/* <h2>Line Chart</h2> */}
      <div style={{ position: "relative", height: "600px", width: "60%" }}>
        <Line options={options} data={LineChartData} />
      </div>
    </>
  );
};

export default LineComponent;
