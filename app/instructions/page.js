'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const InstructionsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  const rules = [
    'There are a total of 4 categories in this Quiz Quest. Choose any one to begin answering quiz questions.',
    'Each quiz consists of 10 questions.',
    'You can take your time to answer each question.',
    'After submitting an answer, the next question will appear after 2 seconds. If your answer is incorrect, be sure to note the correct one before it moves on.',
    'The quiz will include a mix of easy, medium, and hard questions.',
    'All your recent test scores can be accessed through the home page.',
    'You can view your recent scores from the home page as well as on the final results page.'
  ];

  return (
    <div style={{ backgroundColor: '#f8f9fa' }}>
      {/* Hero Section */}
      <section
        className="py-5 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #0d6efd, #6610f2)' }}
      >
        <div className="container">
          <h1 className="display-5 fw-bold">Quiz Instructions</h1>
          <p className="lead">Please read the following rules carefully before starting the quiz.</p>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-5">
        <div className="container">
          <div className="bg-white p-4 rounded shadow-sm" data-aos="fade-up">
            <h4 className="fw-bold mb-3">Quiz Rules</h4>
            <ul className="list-unstyled mb-0">
              {rules.map((rule, index) => (
                <li key={index} className="mb-2">• {rule}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstructionsPage;
