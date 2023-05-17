import { GoogleLogin } from "@react-oauth/google";
import "./App.css";

const responseMessage = (response: object) => {
  console.log(response);
  console.log("Success");
};

const errorMessage = () => {
  console.log("Fail");
};

function App() {
  return (
    <>
      <h1>Google Auth Implement with React and TypeScript</h1>

      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </>
  );
}

export default App;
