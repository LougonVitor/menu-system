import './card.css'
import edit from '../../../assets/icons/edit.svg'
import del from '../../../assets/icons/delete.svg'
import  DeleteModal  from '../delete-modal/delete-modal'
import { useState } from 'react'

export interface CardProps {
    id?: number,
    price: number,
    title: string,
    image: string
}

export default function Card( { id, price, title, image } : CardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev)
    }

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
                        <button onClick={handleOpenModal}>
                            <img src={del} alt="svg delete icon" className='svg-action delete'/>
                        </button>
                    </div>
                </div>
            </div>

            {isModalOpen && <DeleteModal id={id} title={title} closeModal={handleOpenModal}/>}
        </>
    );
}