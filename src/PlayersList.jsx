// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Player from './Player'
import { players } from "./players";
import "./index.css";

function PlayersList() {
    

  return (
    <>
        <h1 className="text">Fifa players card</h1>
      <card>
        {players.map((team, index) => {
          return <Player {...team} key={team.id} number={index}/>
        })}
      </card>
    </>
  );
}
export default PlayersList;
