export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ul>
      <li>
        <button
          onClick={() => {
            onLeaveFeedback(options.good);
          }}
        >
          Good
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            onLeaveFeedback(options.neutral);
          }}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            onLeaveFeedback(options.bad);
          }}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};
