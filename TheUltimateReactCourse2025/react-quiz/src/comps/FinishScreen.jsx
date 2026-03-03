export default function FinishScreen({ points, maxPossiblePoints, highScore }) {
  const percentage = (points/maxPossiblePoints) * 100;

  let emoji;
  if(percentage === 100) emoji = '🥇';
  if(percentage >= 80 && percentage < 100) emoji = '🥈';
  if(percentage >= 70 && percentage < 80) emoji = '🥉';
  if(percentage >= 60 && percentage < 70) emoji = '🫤';
  if(percentage < 60) emoji = '🤦';


  return (
    <>
      <p className="result" >
        <strong>{emoji}</strong> You Scored <strong>{points}</strong> out of {maxPossiblePoints} ({Math.ceil(percentage)}%).
      </p>
      <p className="highscore">(High Score: {highScore} points)</p>
    </>
  )
}