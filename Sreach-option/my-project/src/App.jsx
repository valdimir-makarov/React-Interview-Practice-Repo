import { useEffect, useState } from 'react';


import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`);
        const result = await res.json();
        setSuggestions(result);
      } catch (error) {
        console.error('Error fetching suggestions:', error.message);
      }
    };

    // Check if searchTerm is not empty before making the request
    if (searchTerm.trim() !== '') {
      fetchData();
    } else {
      // If searchTerm is empty, clear suggestions
      setSuggestions([]);
    }
  }, [searchTerm]);

  return (
    <>
      <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      {/* Display suggestions or any other UI based on your requirements */}
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
