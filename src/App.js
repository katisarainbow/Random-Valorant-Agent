import React, { useState, useEffect } from "react";
import Quote from "./components/Quote";

function App() {

  const [agents, setAgents] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents")
      .then((res) => res.json())
      .then((Agents) => {
        const allAgents = Agents.data;
        const noSovaDuplicate = allAgents.filter((item) => {
          if (item.fullPortraitV2 != null) {
            return true
          } else { return false }
        })
        setAgents(noSovaDuplicate);
        setIsLoading(false);
      });
  }, []);

  console.log(agents);

  return (
    !isLoading ?
      <div className="App">
        <Quote agents={agents} />
      </div> : <h1>Hola</h1>
  );
}

export default App;
