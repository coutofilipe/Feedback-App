import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button";

function FeedbackForm() {
  const [reviewText, setReviewTExt] = useState('');

  const handleReviewText = (e) => {
    setReviewTExt(e.target.value);
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your experince with us?</h2>
        <div className="input-group">
          <input
            onChange={handleReviewText}
            type="reviewText"
            value={reviewText}
            placeholder="Write a review here" />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  )
}
export default FeedbackForm