function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className='progress'>
      <progress max={numQuestions} value={index} />
      <p>
        Question <strong> {index + Number(answer !== null )} </strong> /
        {numQuestions}
      </p>

      <p>
        <strong> {points} </strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
