import React, { useState } from 'react'

const DestinationForm = ({ addDestination }) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addDestination({ name, country, description, visited: false });
    setName("");
    setCountry("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border"> 
      <div className="mb-2">
        <label className="block">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-1 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block">Country</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="border p-1 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-1 w-full"
          required
        ></textarea>
      </div>
      <button type="submit" className="bg-green-300 rounded-md text-white p-2">
        Add Destination
      </button>
    </form>
  );
};

export default DestinationForm