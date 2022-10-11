import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"

function FeedbackList({ feedback, handleDeleteProp }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          // handleDelete is a prop of feedbacklist
          handleDelete={handleDeleteProp}
        />
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
}

export default FeedbackList