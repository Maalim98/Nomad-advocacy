import { Link } from 'react-router-dom';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "After the incident, I felt lost. The counseling helped me find strength I didn't know I had. Now I help other survivors in my village.",
      author: "Amina H.",
      location: "Garissa",
      year: "2023"
    },
    {
      quote: "The women's support group became my second family. Together, we're breaking the silence and helping each other heal.",
      author: "Fatuma W.",
      location: "Wajir",
      year: "2023"
    },
    {
      quote: "Through the skills training program, I learned tailoring. Today I run my own shop and can provide for my children.",
      author: "Sahra M.",
      location: "Mandera",
      year: "2024"
    }
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-3">Community Voices</h2>
          <p className="text-neutral-600">Stories of resilience from survivors</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 border-l-4 border-purple-500 shadow-sm"
            >
              <FaQuoteLeft className="text-purple-500 mb-4 text-xl" />
              <p className="text-neutral-700 mb-6 leading-relaxed">
                {item.quote}
              </p>
              
              <div className="mt-auto">
                <div className="h-px w-12 bg-purple-500 mb-4"></div>
                <p className="font-medium text-neutral-900">{item.author}</p>
                <p className="text-sm text-neutral-500">
                  {item.location}, {item.year}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/contact" 
            className="inline-block bg-purple-600 text-white px-8 py-3 
                     hover:bg-purple-700 transition-colors"
          >
            Share Your Story
          </Link>
          <p className="mt-3 text-sm text-neutral-600">
            Your voice matters. Contact us to share your journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;