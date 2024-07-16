import './App.css'
import Layout from "./layout/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';

function App() {
  
  return (
    <>
    <p style={{backgroundColor: 'lightblue'}}>
      Before we implement login backend, To access the dashboard append /home to the url
    </p>
    <Layout />
    </>
  )
}

export default App
