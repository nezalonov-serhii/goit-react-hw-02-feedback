import PropTypes from 'prop-types';

import { FeedbackListButtons } from 'components/Feedback/Feedback.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const { good, neutral, bad } = options;
  return (
    <FeedbackListButtons>
      <li>
        <button
          name="good"
          onClick={() => {
            onLeaveFeedback(good);
          }}
        >
          Good
        </button>
      </li>
      <li>
        <button
          name="neutral"
          onClick={() => {
            onLeaveFeedback(neutral);
          }}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          name="bad"
          onClick={() => {
            onLeaveFeedback(bad);
          }}
        >
          Bad
        </button>
      </li>
    </FeedbackListButtons>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,

  options: PropTypes.exact({
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
  }),
};
