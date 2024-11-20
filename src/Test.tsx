import { useNavigate } from "react-router-dom";

const Test = () => {
  const navigate = useNavigate();

  return (
    <div style={{ border: "1px solid blue" }}>
      This blue box contains the testing component
      <button onClick={() => navigate("/module")}>Navigate to module</button>
    </div>
  );
};

export default Test;
