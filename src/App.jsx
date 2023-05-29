import './App.css'
import WheaterProvider from './Context/WheatherProvider'
import AppWheather from './Components/AppWheather'

function App() {
  return (
    <WheaterProvider>
        <AppWheather/>
      </WheaterProvider>
  )
}

export default App
