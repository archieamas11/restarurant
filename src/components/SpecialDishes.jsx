import React from 'react';
import { Star } from 'lucide-react';

const SpecialDishes = () => {
  const dishes = [
    {
      id: 1,
      name: 'Fattoush Salad',
      description: 'Fresh mixed greens with crispy pita bread and tangy sumac dressing',
      price: 23.00,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      name: 'Vegetable Salad',
      description: 'Seasonal vegetables with house-made vinaigrette and herbs',
      price: 26.00,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      name: 'Egg Vegi Salad',
      description: 'Protein-rich salad with farm-fresh eggs and garden vegetables',
      price: 23.00,
      rating: 4.5,
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        <Star className="w-4 h-4 fill-accent text-accent" />
        <span className="font-semibold text-dark">{rating}</span>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-secondary font-bold text-sm tracking-wider uppercase mb-4">
            SPECIAL DISHES
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-tight">
            Standout Dishes<br />From Our Menu
          </h2>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={dish.id}
              className="group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-300">
                    {dish.name}
                  </h3>
                  
                  <p className="text-gray-light mb-4 text-sm leading-relaxed">
                    {dish.description}
                  </p>

                  {/* Price and Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-dark">
                        <span className="text-secondary">$</span>{dish.price.toFixed(2)}
                      </span>
                    </div>
                    {renderStars(dish.rating)}
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full mt-4 bg-primary text-white py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialDishes;