import BarComponent from "./components/Bar";
import LineComponent from "./components/Line";
import PieComponent from "./components/Pie";
import { TaskChartLine } from "./components/TaskChartLine";
import { TaskChartBar } from "./components/TaskChartBar";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        // gap: "50px",
        background: "#ffe5be",
        minHeight: "100vh",
        paddingTop:'5rem',
        paddingBottom:'5rem',
        gap:"5rem"
      }}
    >
      {/* <LineComponent /> */}
      {/* <BarComponent /> */}
      {/* <PieComponent /> */}
      <TaskChartLine />
      <TaskChartBar />
    </div>
  );
};

export default App;
