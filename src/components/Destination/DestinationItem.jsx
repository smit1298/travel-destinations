import { IconButton } from "@mui/material";
import React from "react";
import { NotVisitedIcon, RemoveIcon, VisitedIcon } from "../Common/icons";

const DestinationItem = ({ destination, removeDestination, toggleVisited }) => {
  return (
    <div
      className={`p-4 mb-2 space-y-2.5 border rounded-lg ${
        destination.visited ? "bg-green-200" : "bg-white"
      }`}
    >
      <h2 className="text-xl capitalize font-bold">{destination.name}</h2>
      <p className="capitalize text-lg font-nornmal">{destination.country}</p>
      <p className="capitalize text-lg font-nornmal">
        {destination.description}
      </p>
      <button className="mr-2" onClick={() => toggleVisited(destination.name)}>
        {destination.visited ? (
          <div className="flex items-center gap-2">
            <IconButton>
              <NotVisitedIcon size={20} />
            </IconButton>
            <p> Mark as Not Visited</p>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <IconButton>
              <VisitedIcon size={20} />
            </IconButton>
            <p> Mark as Visited</p>
          </div>
        )}
      </button>
      <button
        className="flex items-center gap-2"
        onClick={() => removeDestination(destination.name)}
      >
        <IconButton>
          <RemoveIcon size={20} />
        </IconButton>
        Remove
      </button>
    </div>
  );
};

export default DestinationItem;
