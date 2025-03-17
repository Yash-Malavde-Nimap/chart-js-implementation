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
import { BarChartData } from "../data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);

const BarComponent = () => {
  const options = {
    plugins: {
      title: {
        display: true,
        text: "This is Bar Chart Example",
        font: {
          size: 22,
          weight: "bold",
          color: "#fff",
        },
      },
    },
  };

  return (
    <div>
      {/* <h2>Bar Chart</h2> */}
      <div style={{ position: "relative", height: "100vh", width: "60%" }}>
        <Bar options={options} data={BarChartData} />
      </div>
    </div>
  );
};

export default BarComponent;
