import { useState } from "react";

export default function Form({ getMovies }) {
  const [formData, setFormData] = useState({
    searchTerm: ""
  });

  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(formData.searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="searchTerm"
        type="text"
        onChange={handleChange}
        value={formData.searchTerm}
      />
      <input type="submit" />
    </form>
  );
}