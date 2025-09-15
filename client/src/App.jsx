import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Jobs from "./components/Jobs";
import CreateJob from "./components/CreateJob";

const App = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [refresh, setRefresh] = useState(false);

  const onJobAdded = () => {
    setRefresh(!refresh);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto flex flex-col items-center justify-center p-4">
        <CreateJob onJobAdded={onJobAdded} />
        <Filters active={activeFilter} setActive={setActiveFilter} />
        <Jobs filter={activeFilter} refresh={refresh} />
      </div>
    </>
  );
};

export default App;
