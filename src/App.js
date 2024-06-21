import logo from './logo.svg';
import './App.css';
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <div className="row">
      <Card name="Earth"></Card>
      <Card name="World"></Card>
      <Card name="Mars"></Card>
      <Card name="Jupiter"></Card>
      <Card name="saturn"></Card>
      <Card name="Urainus"></Card>
      <Card name="Pluto"></Card>
      </div>
      
    </div>
  );
}

export default App;
