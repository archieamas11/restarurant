import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const customers = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  return (
    <section id="offers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Chef Image */}
          <div className="relative animate-fade-in">
            <div className="relative max-w-md mx-auto">
              {/* Main Chef Image */}
              <img
                src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our Best Chef"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-2xl animate-bounce-gentle">
                😊
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-2xl animate-bounce-gentle" style={{animationDelay: '1s'}}>
                🍕
              </div>

              <div className="absolute top-1/2 -right-8 bg-white rounded-2xl p-3 shadow-xl animate-pulse">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  💬
                </div>
              </div>

              {/* Chef Badge */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-2 shadow-lg">
                <span className="text-sm font-semibold text-dark">Our Best Chef 😁</span>
              </div>
            </div>
          </div>

          {/* Right Side - Testimonial Content */}
          <div className="animate-slide-up">
            <div className="mb-8">
              <p className="text-secondary font-bold text-sm tracking-wider uppercase mb-4">
                TESTIMONIALS
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-dark leading-tight mb-6">
                What Our Customers<br />Say About Us
              </h2>
            </div>

            {/* Quote */}
            <div className="relative mb-8">
              <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
              <blockquote className="text-lg sm:text-xl text-gray-light leading-relaxed pl-6">
                "I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! 
                The attention to detail in presentation and service was impeccable"
              </blockquote>
            </div>

            {/* Customer Feedback Section */}
            <div className="flex items-center gap-6">
              {/* Customer Images */}
              <div className="flex -space-x-3">
                {customers.map((customer, index) => (
                  <img
                    key={customer.id}
                    src={customer.image}
                    alt={`Customer ${customer.id}`}
                    className={`w-12 h-12 rounded-full border-2 border-white object-cover ${
                      index === 2 ? 'z-10' : ''
                    }`}
                    style={{ zIndex: customers.length - index }}
                  />
                ))}
              </div>

              {/* Rating Info */}
              <div>
                <h4 className="font-bold text-dark mb-1">Customer Feedback</h4>
                <div className="flex items-center gap-2">
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold text-dark">4.9</span>
                  <span className="text-gray-light text-sm">(18.6k Reviews)</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Read More Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;