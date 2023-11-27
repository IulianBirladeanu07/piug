// Gallery.js
import React, { useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import './Gallery.css';
import image1 from '../../images/1.jpg'; // Import the other image
import image11 from '../../images/11.jpg'; 
import image12 from '../../images/12.jpg'; 
import image13 from '../../images/13.jpg'; 
import image14 from '../../images/14.jpg'; 

import image15 from '../../images/15.jpg'; 
import image16 from '../../images/16.jpg'; 
import image17 from '../../images/17.jpg'; 
import image18 from '../../images/18.jpg'; 
import tokyo from '../../images/tokyo.jpg'; 
import tokyo1 from '../../images/tokyo-1.jpg'; 

import newYorkImage from '../../images/new-york.jpg';
import londonImage from '../../images/london.jpg';
import dubaiImage from '../../images/dubai.jpg';
import sydneyImage from '../../images/sydney.jpg';
import romeImage from '../../images/rome.jpg';
import barcelonaImage from '../../images/barcelona.jpg';
import amsterdamImage from '../../images/amsterdam.jpg';

import capeTownImage from '../../images/cape-town.jpg';
import beijingImage from '../../images/beijing.jpg';
import boraBoraImage from '../../images/bora-bora.jpg';


const Gallery = () => {
  const images = [
    {
      src: image1,
      caption: 'Explorați această oază de frumusețe, unde confortul se întâlnește cu natura. Priviți apusurile spectaculoase și bucurați-vă de relaxare absolută.',
    },
    {
      src: tokyo,
      caption: 'Descoperiți magia acestui loc unic, unde tradiția se împletește cu modernul. Fiecare colț ascunde o poveste fascinantă a istoriei și culturii locale.',
    },
    {
      src: tokyo1,
      caption: 'Înconjurați-vă de lux și eleganță în această destinație de top. Fiecare detaliu este perfect orchestrat pentru a vă oferi o experiență memorabilă.',
    },
    {
      src: image11,
      caption: 'Aduceți-vă amicii sau familia și creați amintiri de neuitat în acest loc fermecător. Fiecare zi aduce cu sine aventuri noi și surprize plăcute.',
    },
    {
      src: image12,
      caption: 'Plecați într-o călătorie plină de descoperiri și senzații unice. Înconjurați-vă de peisaje impresionante și trăiți experiențe autentice.',
    },
    {
      src: image13,
      caption: 'Indiferent dacă sunteți în căutarea relaxării sau a aventurii, această destinație vă oferă o gamă variată de opțiuni. Experimentați tot ce vă doriți.',
    },
    {
      src: image14,
      caption: 'Fiecare colț al acestei destinații ascunde povești fascinante și locuri pline de farmec. Fiți gata să vă lăsați surprinși de frumusețea sa.',
    },
    {
      src: image15,
      caption: 'Descoperiți diversitatea culturală și gastronomică a acestei destinații. Fiecare zi aduce cu sine noi arome și experiențe memorabile.',
    },
    {
      src: image16,
      caption: 'Bucurați-vă de liniștea și frumusețea acestei destinații ascunse. Fiecare moment este o oportunitate de a vă conecta cu natura și de a vă relaxa.',
    },
    {
      src: image17,
      caption: 'Îmbinați aventura cu relaxarea în această destinație perfect echilibrată. Fiecare activitate este concepută pentru a vă oferi satisfacție și bucurie.',
    },
    {
      src: image18,
      caption: 'Admirați peisajele incredibile și arhitectura unică a acestui loc remarcabil. Fiecare detaliu contribuie la o experiență cu adevărat de neuitat.',
    },
    {
      src: barcelonaImage,
      caption: 'Explorați tradițiile autentice și ospitalitatea caldă a acestei destinații. Fiecare întâlnire este o oportunitate de a vă conecta cu locuitorii locali și cultura lor.',
    },
    {
      src: newYorkImage,
      caption: 'Alegeți această destinație pentru o incursiune într-un paradis tropical. Plaje nesfârșite și recife de corali vă așteaptă pentru a vă oferi o experiență subacvatică unică.',
    },
    {
      src: londonImage,
      caption: 'Descoperiți bogăția culturală și spirituală a acestui loc sacru. Fiecare templu și ritual aduc cu sine o energie pozitivă și o conexiune cu trecutul.',
    },
    {
      src: sydneyImage,
      caption: 'Înconjurați-vă de peisaje montane spectaculoase și aer proaspăt de munte. Fiecare traseu vă conduce către priveliști panoramice și aventuri încântătoare.',
    },
    {
      src: dubaiImage,
      caption: 'Alegeți această destinație pentru o experiență culinară de neuitat. Bucătăria locală vă va răsfăța simțurile și vă va introduce într-o lume a gusturilor autentice.',
    },
    {
      src: romeImage,
      caption: 'Explorați fascinația istoriei antice în această destinație încărcată de relicve și artefacte. Fiecare sit arheologic spune o poveste captivantă a trecutului.',
    },
    {
      src: amsterdamImage,
      caption: 'Bucurați-vă de atmosfera vibrantă și plină de viață a acestei destinații urbane. Fiecare stradă este plină de magazine, restaurante și artă stradală impresionantă.',
    },
    {
      src: capeTownImage,
      caption: 'Alegeți această destinație pentru aventuri în natură și explorare. Parcurile naționale și rezervațiile naturale vă așteaptă pentru a vă oferi clipe de relaxare și descoperire.',
    },
    {
      src: boraBoraImage,
      caption: 'Îmbinați relaxarea pe plajă cu aventurile subacvatice în această destinație tropicală. Snorkelingul și scufundările vă dezvăluie frumusețile ascunse ale oceanului.',
    },
    {
      src: beijingImage,
      caption: 'Alegeți această destinație pentru o incursiune în peisajele rurale pitorești. Sate tradiționale și peisaje idilice vă duc într-o călătorie în inima culturii locale.',
    },
    // Adăugați mai multe imagini și descrieri aici dacă este necesar
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handlePrevClick = () => {
    setStartIndex(Math.max(0, startIndex - 1));
  };

  const handleNextClick = () => {
    setStartIndex(Math.min(images.length - 3, startIndex + 1));
  };

  return (
    <div>
      <h2>Galerie</h2>
      <Row xs={1} md={2} lg={3} className="gallery-container">
        {images.slice(startIndex, startIndex + 3).map((image, index) => (
          <Col key={index} className="mb-4">
            <Card className="h-100 polaroid">
              <Card.Img variant="top" src={image.src} className="image img-fluid" />
              <Card.Body>
                <Card.Text className="caption">{image.caption}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="gallery-buttons">
        <Button variant="primary" onClick={handlePrevClick} disabled={startIndex === 0}>
          Previous
        </Button>
        <Button variant="primary" onClick={handleNextClick} disabled={startIndex === images.length - 3}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Gallery;
