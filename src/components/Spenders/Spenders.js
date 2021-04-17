import Card from "../UI/Card";
import "./Spenders.css";

function Spenders(props) {
  return (
    <Card className="spenders__card">
      <h1 className="spenders__h1">Spenders</h1>
      <div className="spenders__names">
        <h2>{props.people[0].spender}</h2>
        <h2>{props.people[1].spender}</h2>
        <h2>{props.people[2].spender}</h2>
        <h2>{props.people[3].spender}</h2>
      </div>
    </Card>
  );
}

export default Spenders;
