import './App.css'
import Profile from './components/profile';
import Dashboard from './components/dashboard';
import ExpensiveCalculation from './components/expensive-calculation';


function App() {
  return (
    <div>
      <h1>My App</h1>
      <Profile />
      <Dashboard />
      <ExpensiveCalculation />
    </div>
  )
}

export default App
