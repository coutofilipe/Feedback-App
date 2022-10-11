import { useState } from "react"
import RatingSelect from "./RatingSelect";
import Card from "./shared/Card"
import Button from "./shared/Button";

function FeedbackForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState('');

  const handleTextChange = (e) => {

    if (message === '') {
      setbtnDisabled(true)
      setMessage(null)

    } else if (text !== '' && text.trim().length <= 10) {
      setbtnDisabled(true)
      setMessage('Insert at least 10 chars')
      setbtnDisabled(true)

    } else {
      setMessage(null);
      setbtnDisabled(false)

    }
    setText(e.target.value);
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your experince with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review here"
            value={text} />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}
export default FeedbackForm