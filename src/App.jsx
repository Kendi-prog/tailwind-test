import { useState, useEffect } from 'react'
import LandingPage from './landing-page'
import './App.css'


function useLocalStorage(key, initialValue) {
  const[storeValue, setStoreValue] = useState(() => {
    try{
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch(error) {
      console.error("Error reading the localStorage", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try{
      localStorage.setItem(key, JSON.stringify(storeValue));

    } catch(error) {
      console.error("Error saving to localStorage", error);
    }
  }, [key, storeValue]);

  return [storeValue, setStoreValue];
}

function App() {
  const[name, setName] = useLocalStorage("username", "Leila");


  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Hello, {name}!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
      />
      <p>Try refreshing the page! The name persists in localStorage. 😊</p>
    </div>
  )
}

export default App
