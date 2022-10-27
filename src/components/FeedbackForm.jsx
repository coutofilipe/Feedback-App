import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setbtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    setText(e.target.value)

    if (text === '') {
      setbtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('text must be at least 10 characters')
      setbtnDisabled(true)
    } else {
      setbtnDisabled(false)
      setMessage(null)
    }

    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      // create an object called newFeedback with the text and the rating!
      // using short hand version to declare the object pair value/key 
      // that we get form the useState Hook
      const newFeedback = {
        text,
        rating
      }
      handleAdd(newFeedback);
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />

        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text} />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {/* if there is a message then create a div with className='message', 
                with the content of the actual message */}
        {message && <div className='message'>{message}</div>}

      </form>
    </Card>
  )
}
export default FeedbackForm