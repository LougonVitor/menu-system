import './card.css'

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
                </div>

                <button>Buy</button>
            </div>
        </>
    );
}