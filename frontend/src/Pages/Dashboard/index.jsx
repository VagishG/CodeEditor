import React, { useEffect } from "react";
import { getRequest, postRequest } from "../../Helper/api";
import { useNavigate } from "react-router-dom";
export default function index() {
  const [respos, setRespos] = React.useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function login() {
      const query = new URLSearchParams(window.location.search);
      const code = query.get("code");
      if (code) {
        const resposne = await postRequest(`auth/login`, { code: code });
        if (resposne.status === 200) {
          console.log("Login Success");
          navigate("/dashboard");
        } else {
          console.log("Login Failed");
        }
      }
    }
    login();
  }, []);

  async function Logout() {
    const res = await postRequest("auth/logout");
    console.log(res);
  }

  async function getRepos() {
    const res = await getRequest("user/getRepos");
    console.log(res.data);
    setRespos(res.data.items);
  }
  const repo = respos.map((repo) => {
    return <li key={repo.id}>{repo.name}</li>;
  });
  return (
    <div>
      Dashboard
      <button onClick={() => Logout()}>Logout</button>

      <button onClick={()=>getRepos()}>Get List of Repos</button>
      <ol>
        {repo}
      </ol>
    </div>
  );
}
