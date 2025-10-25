import './card.css'
import edit from '../../../assets/icons/edit.svg'
import del from '../../../assets/icons/delete.svg'
import UpdateModal  from '../update-modal/update-modal'
import DeleteModal  from '../delete-modal/delete-modal'
import { useEffect, useState } from 'react'

export interface CardProps {
    id?: number,
    price: number,
    title: string,
    image: string
}

export default function Card( { id, price, title, image } : CardProps) {
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleOpenUpdateModal = () => {
        setIsUpdateModalOpen(prev => !prev)
    }

    const handleOpenDeleteModal = () => {
        setIsDeleteModalOpen(prev => !prev)
    }

    useEffect(() => {
    if (isUpdateModalOpen || isDeleteModalOpen) {
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, 0);
    } else {
        document.body.style.overflow = 'unset';
    }
    })

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
                        <button onClick={handleOpenUpdateModal}>
                            <img src={edit} alt="svg edit icon" className='svg-action edit'/>
                        </button>
                        <button onClick={handleOpenDeleteModal}>
                            <img src={del} alt="svg delete icon" className='svg-action delete'/>
                        </button>
                    </div>
                </div>
            </div>

            {isUpdateModalOpen && <UpdateModal id={id} title={title} price={price} image={image} closeModal={handleOpenUpdateModal}/>}
            {isDeleteModalOpen && <DeleteModal id={id} title={title} closeModal={handleOpenDeleteModal}/>}
        </>
    );
}