import './App.css'
import Countries from './component/Countries/Countries'

function App() {

  return (
    <div>
      <img style={{display:'block',marginLeft:'auto',marginRight:'auto',}} src="../public/img/png-transparent-earth-graphy-globe-earth-globe-photography-atmosphere-removebg-preview.png" alt="" />
      <h1 style={{textAlign:'center'}}>All Country</h1>
      <Countries></Countries>
    </div>
  )
}

export default App
