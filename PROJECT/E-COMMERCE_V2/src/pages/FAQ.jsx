import React from 'react'
import Footer from '../components/Footer'
const FAQ = () => {
  return (
    <>
    <div className="container my-4">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <div>
        <h5>1. How do I place an order?</h5>
        <p>To place an order, simply browse our products, add them to your cart, and proceed to checkout. After entering your details, confirm the order, and you'll receive an email confirmation.</p>
        
        <h5>2. How do I track my order?</h5>
        <p>Once your order is shipped, you will receive a tracking number via email. You can use this number to track the status of your order on our shipping partner’s website.</p>
        
        <h5>3. Can I modify my order after it's placed?</h5>
        <p>Unfortunately, once an order is placed and confirmed, it cannot be modified. However, you can cancel the order if it hasn’t been processed and place a new one.</p>
        
        <h5>4. What payment methods do you accept?</h5>
        <p>We accept payments through credit cards, debit cards, and popular digital wallets like PayPal, Stripe, etc.</p>
        
        <h5>5. Do you offer international shipping?</h5>
        <p>Yes, we offer international shipping to several countries. Please check our shipping policy for details.</p>
        
        <h5>6. How can I contact customer support?</h5>
        <p>You can contact our customer support team via email at support@ourstore.com or by using our live chat feature on the website.</p>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default FAQ
