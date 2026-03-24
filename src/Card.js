import React from 'react';
import Modal from './Modal';

function Card() {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card custom-card text-center h-100">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" className="card-img-top" alt="Laptop" style={{height: '200px', objectFit: 'cover'}} />
            <div className="card-body">
              <h5 className="card-title fw-bold">Project 1</h5>
              <p className="card-text">Check out the cool features of my first web application built with React.</p>
              <button type="button" className="btn btn-custom" data-bs-toggle="modal" data-bs-target="#demoModal">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card custom-card text-center h-100">
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" className="card-img-top" alt="Code" style={{height: '200px', objectFit: 'cover'}} />
            <div className="card-body">
              <h5 className="card-title fw-bold">My Hobbies</h5>
              <p className="card-text">When I'm not coding, you can usually find me listening to music or gaming.</p>
              <button type="button" className="btn btn-custom" data-bs-toggle="modal" data-bs-target="#demoModal">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card custom-card text-center h-100">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b" className="card-img-top" alt="Computer" style={{height: '200px', objectFit: 'cover'}} />
            <div className="card-body">
              <h5 className="card-title fw-bold">Future Goals</h5>
              <p className="card-text">Working towards landing an awesome role in the tech industry after graduation.</p>
              <button type="button" className="btn btn-custom" data-bs-toggle="modal" data-bs-target="#demoModal">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Modal />
    </div>
  );
}

export default Card;