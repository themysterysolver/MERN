import { useState, useEffect } from 'react';
import { getFromStorage, saveToStorage } from '../utils/storage';

const FeedbackForm = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', mobile: '', email: '', rating: '5', feedback: '' });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedbacks = getFromStorage('feedbacks') || [];
    
    feedbacks.push(form);
    saveToStorage('feedbacks', feedbacks);
    setSuccess(true);
    console.log(feedbacks);
    setForm({ firstName: '', lastName: '', mobile: '', email: '', rating: '5', feedback: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl mb-4">Feedback Form</h2>
      {success && <div className="text-green">Thanks for your feedback!</div>}
      
      {['firstName', 'lastName', 'mobile', 'email'].map(field => (
        <div key={field} className="mb-2">
          <label htmlFor={field}>
            {field.replace(/([A-Z])/g, ' $1')}
          </label>
          <input
            id={field}
            className="border p-2 w-full"
            type={field === 'mobile' ? 'tel' : 'text'}
            placeholder={field.replace(/([A-Z])/g, ' $1')}
            value={form[field]}
            onChange={e => setForm({ ...form, [field]: e.target.value })}
            required
          />
        </div>
      ))}

      <div className="mb-2">
        <label htmlFor="rating">Rating</label>
        <select
          id="rating"
          className="border p-2 w-full"
          value={form.rating}
          onChange={e => setForm({ ...form, rating: e.target.value })}
        >
          {[1, 2, 3, 4, 5].map(n => (
            <option key={n} value={n}>
              {n} Star{n > 1 ? 's' : ''}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="feedback">Feedback</label>
        <textarea
          id="feedback"
          placeholder="Write your feedback here"
          value={form.feedback}
          onChange={e => setForm({ ...form, feedback: e.target.value })}
          required
        />
      </div>

      <button type="submit" class="btn btn-primary" >
        Submit
      </button>
    </form>
  );
};

export default FeedbackForm;
