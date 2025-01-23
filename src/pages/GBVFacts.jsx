import React, { useState } from 'react';

function GBVFacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/forms/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          message: formData.question,
          contact: formData.email
        })
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', question: '' }); // Clear form
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* First Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold inline-block relative">
            Defining Gender Based Violence
          </h1>
          <div className="border-t border-gray-300 mt-4"></div>
        </div>

        <div className="prose max-w-none">
          {/* GBV definition */}
          <div className="flex">
            <span className="text-6xl font-bold text-green-600 mr-2 leading-none">T</span>
            <p className="text-gray-700">
              Gender-Based Violence (GBV) refers to harmful acts directed at individuals based on their gender. It is rooted in gender inequality, power imbalances, and systemic discrimination. GBV includes physical, sexual, emotional, psychological, and economic abuse.
            </p>
          </div>

          <p className="my-6 text-gray-700">
            Globally, one in three women experiences physical or sexual violence in their lifetime, according to the World Health Organization (WHO). Men and boys can also be survivors of GBV, though women and girls are disproportionately affected.
          </p>

          <p className="my-6 text-gray-700">
            In Kenya, between 39% and 47% of women have experienced some form of GBV in their lifetime. One in three Kenyan girls and one in five boys face sexual violence before the age of 18. Domestic violence affects both genders, with 38% of married women and 9% of married men reporting physical violence from their partners.
          </p>

          <p className="my-6 text-gray-700">
            GBV during pregnancy in Kenya is alarmingly high, estimated at 13.5%. Organizations like the Gender Violence Recovery Centre (GVRC) have been instrumental in supporting over 44,000 survivors since its inception, highlighting the urgent need for intervention and support.
          </p>
        </div>

        {/* Second heading with border line */}
        <div className="text-center my-12">
          <h2 className="text-3xl font-bold inline-block relative">
            What You Need to Know About Gender-Based Violence
          </h2>
          <div className="border-t border-gray-300 mt-4"></div>
        </div>

        <div className="prose max-w-none mb-16">
          <ul className="list-disc space-y-4 pl-5 text-gray-700">
            <li>GBV encompasses physical, sexual, emotional, psychological, and economic abuse.</li>
            <li>Globally, one in three women experiences physical or sexual violence in their lifetime (WHO).</li>
            <li>In Kenya, 39% to 47% of women experience GBV in their lifetime, among the highest rates in the world.</li>
            <li>One in three Kenyan girls and one in five boys face sexual violence before the age of 18 (Kenya VAC, 2010).</li>
            <li>Domestic violence impacts both genders, with 38% of married women and 9% of married men reporting physical violence from their partners (KDHS, 2014).</li>
            <li>Pregnant women in Kenya face GBV at a rate of 13.5% (KDHS, 07/08).</li>
            <li>Men and boys also experience GBV, with 5% of cases involving boys and 3% involving men at GVRC.</li>
            <li>Organizations like GVRC in Kenya have supported over 44,000 survivors since 2001.</li>
          </ul>
        </div>

        {/* Talk to us Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-green-600 mb-8">Talk to Us</h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            <div>
              <label htmlFor="question" className="block text-gray-700 mb-2">Your Question</label>
              <textarea
                id="question"
                value={formData.question}
                onChange={handleChange}
                rows="6"
                className="w-full border border-gray-300 rounded-md p-2"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
            >
              Ask Us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GBVFacts;
