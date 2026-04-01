import React, { useState } from 'react';
import './ContactUs.css';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [status, setStatus] = useState({
        loading: false,
        error: null,
        success: false
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, error: null, success: false });

        try {
            // Using FormSubmit.co for easy email sending
            const formSubmitUrl = 'https://formsubmit.co/ajax/devoltaa71@gmail.com';

            const response = await fetch(formSubmitUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    _subject: `New Contact Form Submission from ${formData.name}`,
                    _template: 'table',
                    _captcha: 'false'
                })
            });

            if (response.ok) {
                setStatus({ loading: false, error: null, success: true });
                setFormData({ name: '', email: '', phone: '', message: '' });

                // Reset success message after 5 seconds
                setTimeout(() => {
                    setStatus({ ...status, success: false });
                }, 5000);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            setStatus({
                loading: false,
                error: 'Failed to send message. Please try again or email us directly.',
                success: false
            });
        }
    };

    return (
        <div className="contact-container">
            <h1 className="contact-title">
                GET IN
                <span className="contact-highlight"> Touch</span>
            </h1>
            <div className="contact-wrapper">
                {/* Left Side - Contact Info */}
                <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p className="contact-description">
                        Devolta, we offer comprehensive IT solutions at affordable prices.
                        Contact us today to learn more about our services and pricing options.
                    </p>

                    <div className="info-section">
                        <div className="info-item">
                            <div className="info-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div className="info-content">
                                <h4>Location</h4>
                                <p>Model Town K Block Lahore<br />Pakistan</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <div className="info-content">
                                <h4>Phone</h4>
                                <p>+92 324 5356726<br />+92 331 4151120</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <div className="info-content">
                                <h4>Email</h4>
                                <p>devoltaa71@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-links">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/profile.php?id=61578796947298&rdid=JQhk9qmvHq55i9Cq&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AsYNGnSnP%2F#" className="social-icon" aria-label="Facebook">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                            <a href="IwY2xjawQ5BfhleHRuA2FlbQIxMABicmlkETFpSkJtV21rU1VEd3VwWDRVc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHmjQGaiuogIvoMOcL4jlGWTI_2TeGCxlPPsat0a71QLnS9YE7SZKcVzp32d7_aem_CzyTK9D0sU3dGfdD3G_6pw" className="social-icon" aria-label="Instagram">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <circle cx="12" cy="12" r="3"></circle>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="contact-form-container">
                    <h2>Fill Up The Form</h2>
                    <p className="form-note">
                        Your email address will not be published. Required fields are marked *
                    </p>

                    {status.success && (
                        <div className="success-message">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span>Message sent successfully! We'll get back to you soon.</span>
                        </div>
                    )}

                    {status.error && (
                        <div className="error-message">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                            <span>{status.error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Your Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter your email address"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number *</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Enter your phone number"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Enter Your Message Here *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="Tell us about your project or requirements..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={status.loading}
                        >
                            {status.loading ? (
                                <>
                                    <span className="spinner"></span>
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;