import { useState } from 'react'
import './App.css'
import EventsComponent from "./components/EventsComponent";



function App() {
  const [count, setCount] = useState(0)
return (
    <div>
      <EventsComponent />
    </div>
  );
}

export default App
