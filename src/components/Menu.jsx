import React from 'react';

const Menu = () => {
  const categories = [
    {
      id: 1,
      name: 'Main Dish',
      count: '86 dishes',
      image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400',
      bgColor: 'bg-orange-100'
    },
    {
      id: 2,
      name: 'Break Fast',
      count: '12 break fast',
      image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400',
      bgColor: 'bg-blue-100'
    },
    {
      id: 3,
      name: 'Dessert',
      count: '48 dessert',
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
      bgColor: 'bg-pink-100'
    },
    {
      id: 4,
      name: 'Browse All',
      count: '255 Items',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      bgColor: 'bg-green-100'
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-secondary font-bold text-sm tracking-wider uppercase mb-4">
            CUSTOMER FAVORITES
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark">
            Popular Categories
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center">
                {/* Image Container */}
                <div className={`w-24 h-24 mx-auto mb-6 rounded-full ${category.bgColor} p-4 group-hover:scale-110 transition-transform duration-300`}>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-gray-light font-medium">
                  ({category.count})
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;