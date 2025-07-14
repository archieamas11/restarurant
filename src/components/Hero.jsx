import React from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-green-50 to-white pt-20 lg:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-12 lg:py-0">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0 animate-fade-in">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-dark leading-tight mb-6">
                Dive into Delights<br />
                Of Delectable <span className="text-primary">Food</span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-medium mb-8 leading-relaxed">
                Where Each Plate Weaves a Story of Culinary<br className="hidden sm:block" />
                Mastery and Passionate Craftsmanship.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-12">
                <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Order Now
                </button>
                
                <div className="flex items-center gap-4">
                  <span className="text-lg font-semibold text-gray-dark">Watch Video</span>
                  <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group">
                    <Play className="w-5 h-5 text-dark ml-1 group-hover:text-primary transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="flex-1 relative">
            <div className="relative max-w-lg mx-auto">
              {/* Main Hero Image */}
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Delicious Food" 
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>

              {/* Floating Food Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl animate-bounce-gentle hidden sm:block">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=200" 
                    alt="Spicy Noodles" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">Spicy Noodles</h4>
                    <div className="flex items-center gap-1">
                      <div className="flex text-accent text-xs">
                        {'★'.repeat(4)}{'☆'.repeat(1)}
                      </div>
                      <span className="text-secondary font-bold text-sm">$18.00</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl animate-bounce-gentle hidden sm:block" style={{animationDelay: '1s'}}>
                <div className="flex items-center gap-3">
                  <img 
                    src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=200" 
                    alt="Vegetarian Salad" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">Fresh Salad</h4>
                    <div className="flex items-center gap-1">
                      <div className="flex text-accent text-xs">
                        {'★'.repeat(5)}
                      </div>
                      <span className="text-secondary font-bold text-sm">$23.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hot Spicy Food Badge */}
              <div className="absolute top-8 right-8 bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                🌶️ Hot Spicy Food
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;