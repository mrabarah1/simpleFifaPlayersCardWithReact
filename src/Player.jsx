import Card from "react-bootstrap/Card";






function Player(props) {
  const { name, image, nationality, age, team, jerseyNumber, number } = props;
  return (
    <Card className="card">
      <img src={image} alt={team} />
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        <h2>{nationality}</h2>
        <h4>{team}</h4>
        <p>{age}</p>
        <p>{jerseyNumber}</p>
        <span className="number">{`#${number + 1}`}</span>
      </Card.Text>
    </Card>
  );
}
export default Player;
