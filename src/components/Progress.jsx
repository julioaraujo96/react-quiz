function Progress({ index, numQuestions, points, maxPossibleQuestions, answer }) {
  return (
    <header className='progress'>
      <progress max={numQuestions} value={index} />
      <p>
        Question <strong> {index + Number(answer !== null )} </strong> /
        {numQuestions}
      </p>

      <p>
        <strong> {points} </strong> / {maxPossibleQuestions}
      </p>
    </header>
  );
}

export default Progress;
