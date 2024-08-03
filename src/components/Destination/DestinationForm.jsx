import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

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

  const isFormValid = name && country && description;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: 2,
        border: "2px solid",
        borderRadius: "10px",
        borderColor: "#f3f4f6"
      }}
    >
      <Typography variant="h6" gutterBottom>
        Add New Destination
      </Typography>
      <Box sx={{ mb: 2 }}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <TextField
          label="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          fullWidth
          required
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          rows={4}
          fullWidth
          required
        />
      </Box>
      <Button
        type="submit"
        variant="contained"
        color="success"
        className=""
        disabled={!isFormValid}
      >
        Add Destination
      </Button>
    </Box>
  );
};

export default DestinationForm;
