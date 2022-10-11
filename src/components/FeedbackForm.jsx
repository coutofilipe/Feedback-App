import { useState } from "react"
import Card from "./shared/Card"

function FeedbackForm() {
  const [reviewText, setReviewTExt] = useState('');

  const handleReviewText = (e) => {
    setReviewTExt(e.target.value);
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your experince with us?</h2>
        <input
          onChange={handleReviewText}
          type="reviewText"
          value={reviewText}
          placeholder="Write a review here" />
        <button type="submit">Submit</button>
      </form>
    </Card>
  )
}
export default FeedbackForm