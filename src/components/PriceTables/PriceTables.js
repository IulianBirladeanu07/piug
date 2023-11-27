import React, { useState } from 'react';
import './PriceTables.css';

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
import santoriniImage from '../../images/santorini.jpg';
import machuPicchuImage from '../../images/machu-picchu.jpg';

const destinations = [
  // ... (destinațiile anterioare)

  {
    name: 'New York, SUA',
    description: 'Experimentați pulsul orașului care nu doarme niciodată.',
    price: '$1600',
    details: 'Pachetul include bilete la spectacole de pe Broadway și tururi în cartiere celebre.',
    image: newYorkImage,
  },
  {
    name: 'Londra, Marea Britanie',
    description: 'Descoperiți istoria și eleganța în capitala britanică.',
    price: '$1400',
    details: 'Pachetul include bilete la muzee celebre și croaziere pe Tamisa.',
    image: londonImage,
  },
  {
    name: 'Dubai, Emiratele Arabe Unite',
    description: 'Intră în lumea luxului și a modernității.',
    price: '$2000',
    details: 'Pachetul include ședere la hoteluri de lux și experiențe unice în deșert.',
    image: dubaiImage,
  },
  {
    name: 'Sydney, Australia',
    description: 'Explorează frumusețea orașului și a Opera House-ului iconic.',
    price: '$1900',
    details: 'Pachetul include croaziere în port și aventuri în Parcul Național Blue Mountains.',
    image: sydneyImage,
  },
  {
    name: 'Roma, Italia',
    description: 'Pătrundeți în inima Romei antice și a artei renascentiste.',
    price: '$1700',
    details: 'Pachetul include bilete la Colosseum și Vatican.',
    image: romeImage,
  },
  {
    name: 'Barcelona, Spania',
    description: 'Bucurați-vă de arhitectura lui Gaudí și atmosfera vibrantă.',
    price: '$1500',
    details: 'Pachetul include plimbări pe Rambla și vizite la operele lui Gaudí.',
    image: barcelonaImage,
  },
  {
    name: 'Amsterdam, Olanda',
    description: 'Descoperiți canalele pitorești și atmosfera eclectică.',
    price: '$1300',
    details: 'Pachetul include plimbări cu barca și vizite la muzee celebre.',
    image: amsterdamImage,
  },
  {
    name: 'Cape Town, Africa de Sud',
    description: 'Explorează peisaje impresionante și viața sălbatică diversificată.',
    price: '$1800',
    details: 'Pachetul include safari și vizite la Table Mountain.',
    image: capeTownImage,
  },
  {
    name: 'Beijing, China',
    description: 'Descoperă istoria și cultura bogată a capitalei chineze.',
    price: '$1600',
    details: 'Pachetul include vizite la Marea Zid și Palatul Imperial.',
    image: beijingImage,
  },
  {
    name: 'Bora Bora, Polinezia Franceză',
    description: 'Relaxați-vă pe plajele cu nisip alb și apa cristalină.',
    price: '$2500',
    details: 'Pachetul include ședere în vile de lux peste apă și excursii cu barca.',
    image: boraBoraImage,
  },
  {
    name: 'Santorini, Grecia',
    description: 'Bucurați-vă de arhitectura albă și apusurile spectaculoase.',
    price: '$1700',
    details: 'Pachetul include ședere în hoteluri cu vedere la mare și tururi la siturile istorice.',
    image: santoriniImage,
  },
  {
    name: 'Machu Picchu, Peru',
    description: 'Explorați orașul antic înconjurat de munți.',
    price: '$1900',
    details: 'Pachetul include excursii la Machu Picchu și trasee în Munții Anzi.',
    image: machuPicchuImage,
  },
  // Adăugați mai multe destinații aici
];

const PriceDestinationTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
  
    // Filtrarea destinațiilor în funcție de termenul de căutare
    const filteredDestinations = destinations.filter(destination =>
      destination.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div>
        <h2>Tabel de Prețuri și Destinații</h2>
        
        {/* Câmpul de căutare */}
        <input
          type="text"
          placeholder="Caută destinație..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <table>
          <thead>
            <tr>
              <th>Destinație</th>
              <th>Preț</th>
              <th>Detalii</th>
            </tr>
          </thead>
          <tbody>
            {filteredDestinations.map((destination, index) => (
              <tr key={index}>
                <td>
                  <div className="destination-info">
                    <img src={destination.image} alt={destination.name} />
                    <div>
                      <h3>{destination.name}</h3>
                      <p>{destination.description}</p>
                    </div>
                  </div>
                </td>
                <td>{destination.price}</td>
                <td>{destination.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default PriceDestinationTable;