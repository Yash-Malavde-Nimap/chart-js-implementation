import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  // plugins,
} from "chart.js";
import { PieChartData } from "../data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
  Title
);

const PieComponent = () => {
  const options = {
    plugins: {
      title: {
        display: true,
        text: "This is Pie Chart Example",
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
      {/* <h2>Pie Chart</h2> */}

      <div style={{ position: "relative", height: "600px", width: "80%" }}>
        <Pie options={options} data={PieChartData} />
      </div>
    </div>
  );
};

export default PieComponent;
