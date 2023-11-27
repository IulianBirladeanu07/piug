import React, { useEffect, useState } from 'react';
import { Carousel, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import homeImage from '../../images/home_image.jpg';

import './Home.css'

const Home = () => {
  const [showHelpModal, setShowHelpModal] = useState(false);

  useEffect(() => {
    // Scroll to the bottom of the page when the component is mounted
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  const handleHelpButtonClick = () => {
    setShowHelpModal(true);
  };

  const handleCloseHelpModal = () => {
    setShowHelpModal(false);
  };

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={homeImage} alt="First slide" />
          <Carousel.Caption>
            <h3>Bine ați venit!</h3>
            <p style={{ color: '#ffffff', fontSize: 20 }}>Explorați lumea noastră online!</p>
            <Button variant="primary" className="help-button" onClick={handleHelpButtonClick}>
              <FontAwesomeIcon icon={faQuestionCircle} />
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Help Modal */}
      <Modal show={showHelpModal} onHide={handleCloseHelpModal}>
        <Modal.Header closeButton>
          <Modal.Title>Help</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add your help content here */}
          If you have any issues or questions, please contact support@example.com.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseHelpModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
