import { GoogleLogin } from "@react-oauth/google";
import "./App.css";
import UserProfile from "./components/UserProfile/UserProfile";
import { useState } from "react";

const responseMessage = (response: object) => {
  console.log(response);
  console.log("Success");
};

const errorMessage = () => {
  console.log("Fail");
};

function App() {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  return (
    <>
      <h1>Google Auth Implement with React and TypeScript</h1>
      <UserProfile
        user={user}
        setUser={setUser}
        profile={profile}
        setProfile={setProfile}
      />
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </>
  );
}

export default App;
