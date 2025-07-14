import React from 'react';
import { Utensils, Truck, ShoppingCart, Gift } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Utensils,
      title: 'CATERING',
      description: 'Delight your guests with our flavors and presentation',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      id: 2,
      icon: Truck,
      title: 'FAST DELIVERY',
      description: 'We deliver your order promptly to your door',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 3,
      icon: ShoppingCart,
      title: 'ONLINE ORDERING',
      description: 'Explore menu & order with ease using our Online Ordering',
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 4,
      icon: Gift,
      title: 'GIFT CARDS',
      description: 'Give the gift of exceptional dining with Foodi Gift Cards',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="animate-fade-in">
            <div className="mb-8">
              <p className="text-secondary font-bold text-sm tracking-wider uppercase mb-4">
                OUR STORY & SERVICES
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-dark leading-tight mb-6">
                Our Culinary Journey<br />And Services
              </h2>
              <p className="text-lg text-gray-light leading-relaxed mb-8">
                Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, 
                blending culinary artistry with warm hospitality.
              </p>
            </div>

            <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Explore Our Story
            </button>
          </div>

          {/* Right Side - Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center h-full">
                    {/* Icon */}
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-light text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-dark mb-4">
              Ready to Experience Our Services?
            </h3>
            <p className="text-gray-light mb-6">
              Join thousands of satisfied customers who trust us for their dining needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105">
                Order Now
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;