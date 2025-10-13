import './card.css'
import edit from '../../../assets/icons/edit.svg'
import del from '../../../assets/icons/delete.svg'

export interface CardProps {
    price: number,
    title: string,
    image: string
}

export default function Card( { price, title, image } : CardProps) {
    return (
        <>
            <div className='card'>
                <div className='box-card'>
                    <img src={image} alt="Food Image" />
                </div>

                <div className="box-info">
                    <h1>Price: <span>US$ {price}</span></h1>
                    <p>Title: <span>{title}</span></p>

                    <div className='button-div'>
                        <button>
                            <img src={edit} alt="svg edit icon" className='svg-action edit'/>
                        </button>
                        <button>
                            <img src={del} alt="svg delete icon" className='svg-action delete'/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}