import './index.css'

import Card from '../../components/card/card'
import { useFoodData } from '../../hook/useFoodData';

export default function Home() {
  const { data } = useFoodData();

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
                  price={foodData.price}
                  title={foodData.title}
                  image={foodData.image}
                />
              )}
            </div>
          </div>

        </div>
      </>  
    );
}