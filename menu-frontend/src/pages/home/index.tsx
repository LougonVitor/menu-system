import './index.css'

import Card from '../../components/card/card'
import { useFoodData } from '../../hook/useFoodData';
import { useState } from 'react';
import CreateModal from '../../components/create-modal/create-modal';

export default function Home() {
  const { data } = useFoodData();
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

    return (
      <>
        <div id='container'>

          <div className='centralizing'>
            <div className='title-box'>
              <h1>Menu System</h1>
            </div>

            <div className='card-box'>
              {data?.map(foodData => 
                <Card 
                  key={foodData.id}
                  price={foodData.price}
                  title={foodData.title}
                  image={foodData.image}
                />
              )}
            </div>

            {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
            <button onClick={handleOpenModal}>Test</button>
          </div>

        </div>
      </>  
    );
}