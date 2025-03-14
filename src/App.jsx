import './App.css'
import Profile from './components/profile';
import Dashboard from './components/dashboard';
import ExpensiveCalculation from './components/expensive-calculation';
import UseCallBackFunction from './components/usecallback';


function App() {
  return (
    <div>
      <h1>My App</h1>
      <Profile />
      <Dashboard />
      <ExpensiveCalculation />
      <UseCallBackFunction />
    </div>
  )
}

export default App
