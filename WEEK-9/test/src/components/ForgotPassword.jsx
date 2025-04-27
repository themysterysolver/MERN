import { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRecover = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <form onSubmit={handleRecover} className="p-4">
      <h2 className="text-xl mb-4">Forgot Password</h2>
      {success ? <div>Recovery email sent!</div> : null}
      <input  type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required />
      <button type="submit" >Send Recovery Email</button>
    </form>
  );
};

export default ForgotPassword;
