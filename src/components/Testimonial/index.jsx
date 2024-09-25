import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    comment: 'Booking my bus ticket was a breeze! The app is user-friendly and efficient.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    comment: 'Great experience! I loved the variety of bus options available.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Michael Brown',
    comment: 'The customer service was fantastic when I needed to change my booking.',
    rating: 5,
  },
];

const Testimonial = () => {
  return (
      <section className='py-16 lg:px-[10rem]'>
        <h1 className='text-4xl font-bold text-primary px-2 pb-2'>Testimonial</h1>
          <div className='w-full flex flex-col lg:flex-row gap-2 lg:gap-4'>
              <div className="w-full lg:w-1/2 mx-auto p-6 bg-white rounded-lg shadow-md my-4">
                  <h2 className="text-2xl font-bold text-center mb-6">What Our Customers Say</h2>
                  <div className="space-y-6">
                      {testimonials.map((testimonial) => (
                          <div key={testimonial.id} className="p-4 border border-gray-300 rounded-lg">
                              <div className="flex items-center mb-2">
                                  <span className="font-semibold text-lg">{testimonial.name}</span>
                                  <span className="ml-2 text-yellow-500">
                                      {'⭐'.repeat(testimonial.rating)}
                                      {'☆'.repeat(5 - testimonial.rating)}
                                  </span>
                              </div>
                              <p className="text-gray-700">{testimonial.comment}</p>
                          </div>
                      ))}
                  </div>
              </div>
              <div className="w-full lg:w-1/2 mx-auto p-6 bg-white rounded-lg shadow-md my-4">
                  <h2 className="text-2xl font-bold text-center mb-6">What Our Customers Say</h2>
                  <div className="space-y-6">
                      {testimonials.map((testimonial) => (
                          <div key={testimonial.id} className="p-4 border border-gray-300 rounded-lg">
                              <div className="flex items-center mb-2">
                                  <span className="font-semibold text-lg">{testimonial.name}</span>
                                  <span className="ml-2 text-yellow-500">
                                      {'⭐'.repeat(testimonial.rating)}
                                      {'☆'.repeat(5 - testimonial.rating)}
                                  </span>
                              </div>
                              <p className="text-gray-700">{testimonial.comment}</p>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

  );
};

export default Testimonial;
