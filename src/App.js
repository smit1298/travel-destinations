import "./App.css";
import { useEffect, useState } from "react";
import DestinationForm from "./components/Destination/DestinationForm";
import DestinationList from "./components/Destination/DestinationList";

function App() {
  const [destinations, setDestinations] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedDestinations =
      JSON.parse(localStorage.getItem("destinations")) || [];
    setDestinations(storedDestinations);
  }, []);

  useEffect(() => {
    localStorage.setItem("destinations", JSON.stringify(destinations));
  }, [destinations]);

  const addDestination = (destination) => {
    setDestinations([...destinations, destination]);
  };

  const removeDestination = (name) => {
    setDestinations(destinations.filter((dest) => dest.name !== name));
  };

  const toggleVisited = (name) => {
    setDestinations(
      destinations.map((dest) =>
        dest.name === name ? { ...dest, visited: !dest.visited } : dest
      )
    );
  };

  const filteredDestinations = destinations.filter((dest) => {
    if (filter === "visited") return dest.visited;
    if (filter === "notVisited") return !dest.visited;
    return true;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Travel Destinations</h1>
      <DestinationForm addDestination={addDestination} />
      <div className="flex flex-col items-center xl:flex-row  w-full space-y-3 xl:space-y-0 mt-4">
        <button
          className={` ${
            filter === "all" ? "bg-yellow-400" : ""
          } mr-2 border-2 border-solid rounded-lg py-2 w-[40%] xl:w-[10%] px-4`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={` ${
            filter === "visited" ? "bg-green-400" : ""
          } mr-2 border-2 border-solid rounded-lg py-2 w-[40%] xl:w-[10%] px-4`}
          onClick={() => setFilter("visited")}
        >
          Visited
        </button>
        <button
          className={` ${
            filter === "notVisited" ? "bg-red-400" : ""
          } mr-2 border-2 border-solid rounded-lg py-2 w-[40%] xl:w-[10%] px-4`}
          onClick={() => setFilter("notVisited")}
        >
          Not Visited
        </button>
      </div>
      <DestinationList
        destinations={filteredDestinations}
        removeDestination={removeDestination}
        toggleVisited={toggleVisited}
      />
    </div>
  );
}

export default App;
