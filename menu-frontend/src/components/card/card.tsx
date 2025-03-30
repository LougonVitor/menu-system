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
                    <h1>Price: US${price}</h1>
                    <p>Title: {title}</p>
                </div>

                <button>Buy</button>
            </div>
        </>
    );
}