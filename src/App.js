import "./App.css";
import "./assets/css/compo.css";
import Table from "./components/table";
import { students } from "./assets/studentsbd";

function App() {
  return (
    <div className="outerDiv">
      <div className="leftDiv">
        <Table students={students} />
      </div>
    </div>
  );
}

export default App;
