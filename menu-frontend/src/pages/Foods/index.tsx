import './style.css'

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

            <div className='card-box'>
              {data?.map(foodData => 
                <Card 
                  key={foodData.id}
                  id={foodData.id}
                  price={foodData.price}
                  title={foodData.title}
                  image={foodData.image}
                />
              )}
            </div>

            {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
            {isModalOpen && <button onClick={handleOpenModal} className='btn-open-overlay' id='btn-close'>Close Post Tab</button>}
            {!isModalOpen && <button onClick={handleOpenModal} className='btn-open-overlay'>Post Food</button>}
          </div>

        </div>
      </>  
    );
}