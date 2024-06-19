import React, { useState } from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  const [modalContent, setModalContent] = useState('');

  const readmore = (service) => {
    setModalContent(service);
    // Trigger modal opening
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
  };

  return (
    <div id='services' className='services'>
      {/* Services Title */}
      <div className='services-title'>
        <h1>My Services</h1>
        <img src={theme_pattern} alt='Theme Pattern' />
      </div>

      {/* Modal */}
      <div className='modal fade' id='exampleModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>Service Details</h5>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div className='modal-body'>
              {/* Render modal content based on selected service */}
              {modalContent && (
                <>
                  <h2>{modalContent.s_name}</h2>
                  <p>{modalContent.s_full_desc}</p>
                  {/* Add other fields here if needed */}
                </>
              )}
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                Close
              </button>
              <button type='button' className='btn btn-primary'>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Container */}
      <div className='services-container'>
        {/* Map through services data */}
        {Services_Data.map((service, index) => (
          <div key={index} className='services-format'>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            {/* Read more button */}
            <div className='services-readmore' onClick={() => readmore(service)}>
              <p>Read more</p>
              <img src={arrow_icon} alt='Arrow Icon' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
