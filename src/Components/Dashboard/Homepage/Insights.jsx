
import React, { useState, useEffect } from 'react';
import './Styles.css'
import insight1 from '../../../assets/insight1.jpg'
import Modal from 'react-modal';
import { Close, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const insightsData = [
  {
    id: 1,
    image: insight1,
    text: 'Understanding Endometriosis',
    slides: [
      'Endometriosis occurs when tissue similar to the lining inside the uterus is found outside the uterus.',
      'Common symptoms include pain, heavy periods, and fertility problems.',
      'It affects an estimated 1 in 10 women during their reproductive years.',
      'There is no cure, but treatments include pain relief, hormone therapy, and surgery.',
      'Lifestyle changes and support can help manage symptoms.',
    ],
  },
  {
    id: 2,
    image: insight1,
    text: 'Symptoms of Endometriosis',
    slides: [
      'Pelvic pain, often associated with menstrual periods.',
      'Pain during intercourse.',
      'Pain with bowel movements or urination.',
      'Excessive bleeding during periods or between periods.',
      'Infertility.',
    ],
  },
  {
    id: 3,
    image: insight1,
    text: 'Diet and Endometriosis',
    slides: [
      'Anti-inflammatory foods may help reduce symptoms.',
      'Foods rich in Omega-3 fatty acids, such as fish, flaxseed, and walnuts.',
      'Fruits and vegetables, especially leafy greens and berries.',
      'Avoiding processed foods and high-sugar foods.',
      'Staying hydrated is crucial.',
    ],
  },
];

const customStyles = {
  content: {
    display: 'flex',
    position: 'absolute',
    margin: 'auto',
    maxHeight: '300px',
    maxWidth: '40%',
    justifyContent: 'center',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '1px 1px 10px lightgray'
    
  }
};

function Insights() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentInsight, setCurrentInsight] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    if (modalIsOpen) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [modalIsOpen, currentSlideIndex]);

  const openModal = (insight) => {
    setCurrentInsight(insight);
    setCurrentSlideIndex(0);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentInsight(null);
    setCurrentSlideIndex(0);
  };

  const nextSlide = () => {
    if (currentSlideIndex < currentInsight.slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      closeModal();
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  return (
    <div>
      <div className="insights">
        <h3 className='subHeader'>Insights</h3>
        <div className="insightChoices">
          <ul>
            <li style={{backgroundColor: '#215759', border: 'none', color: 'white'}}><b>All</b></li>
            <li>Recommended</li>
            <li>Symptoms</li>
            <li>Food</li>
            <li>First Aid</li>
          </ul>
        </div>
        <div className="insightCards">
          {insightsData.map((insight) => (
            <div
              className="insightCard"
              key={insight.id}
              onClick={() => openModal(insight)}>
              <img src={insight.image} alt={insight.text} width={100}  />
              <p>{insight.text}</p>
            </div>
          ))}
        </div>
      </div>

      {currentInsight && (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
          <div className="modalContent" style={{height: '90%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button
              className="closeButton"
              onClick={closeModal}
              style={{
                background: '#888',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#fff',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                top: 10,
                left: '50%',
                transform: 'translateX(-50%)',
                position: 'absolute',  
                marginBottom: '20px'
                
              }}
            >
              <Close/>
            </button>
            <button
                onClick={prevSlide}
                disabled={currentSlideIndex === 0}
                style={{
                  padding: '5px 10px',
                  cursor: 'pointer',
                  position: 'absolute',
                  top: '50%',
                  left: '10px',
                  transform: 'translateY(-50%)',
                }}
              >
                <KeyboardArrowLeft/>
              </button>
              <div style={{ height: '100%',width: '80%', paddingTop: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', justifyItems: 'center'}}>
                <div className="slideBar" style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px'}}>
                  {currentInsight.slides.map((_, index) => (
                    <div
                      key={index}
                      style={{
                        width: '20%',
                        height: '5px',
                        backgroundColor: currentSlideIndex === index ? '#ffdd00' : '#ccc',
                        margin: '0 2px',
                      }}
                    />
                  ))}
                </div>
                <div className="slideContent" style={{ minHeight: '100px', color: '#333', textAlign: 'center', }}>
                  {currentInsight.slides[currentSlideIndex]}
                </div>
              </div>
              <button
                onClick={nextSlide}
                style={{
                  padding: '5px 10px',
                  cursor: 'pointer',
                  position: 'absolute',
                  top: '50%',
                  right: '10px',
                  transform: 'translateY(-50%)',
                }}
              >
                <KeyboardArrowRight/>
              </button>
          </div>
        </Modal>
      )}
      <hr/>
    </div>
  );
}

export default Insights;
