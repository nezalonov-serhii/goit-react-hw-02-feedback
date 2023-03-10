import {
  Title,
  WrapFeedback,
  WrapTotal,
} from 'components/Stattistics/Statistics.styled';

export const Stattistics = ({
  good,
  neutral,
  bad,
  total,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <div>
      <Title>Statistics</Title>
      <WrapFeedback>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </WrapFeedback>
      <WrapTotal>
        <p>Total: {total()}</p>
        <p>Positive feedback: {countPositiveFeedbackPercentage(total)}%</p>
      </WrapTotal>
    </div>
  );
};
