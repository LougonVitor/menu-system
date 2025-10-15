import { useFoodDataUpdate } from '../../hook/useFoodDataUpdate'
import { FoodData } from '../../interface/FoodData'
import { useState } from 'react'
import './update-modal.css'

interface foodProps {
    id?: number,
    title: string,
    price: number,
    image: string,
    closeModal: () => void
}

interface InputProps {
    label: string,
    value: number | string,
    updateValue(value: any) : void,
    classNameLabel: string,
    classNameInput: string
}

const Input = ({label, value, updateValue, classNameInput, classNameLabel} : InputProps) => {
    return (
        <>
            <label className={classNameLabel}>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)} className={classNameInput} />
        </>
    )
}

export default function UpdateModal({id, title, price, image, closeModal}: foodProps) {
    const [titleState, setTitle] = useState(title);
    const [priceState, setPrice] = useState(price);
    const [imageState, setImage] = useState(image);
    const { mutate: udpateFood, isPending } = useFoodDataUpdate();

    const submit = (event: React.FormEvent) => {
        event.preventDefault();

        const foodData : FoodData = {
            id,
            title: titleState,
            price: priceState,
            image: imageState
        }

        udpateFood(foodData);
        closeModal();
    }

    const hadleCancelDelete = () => {
        closeModal();
    }

    debugger;

    return (
        <>
            <div className="modal-overlay">
            <div className="modal-body">
                <h2>Send Form</h2>
                <form className="input-container">
                    <Input label={"Title"} value={titleState} updateValue={setTitle} classNameInput="modal-input" classNameLabel="modal-label"></Input>
                    <Input label={"Price"} value={priceState} updateValue={setPrice} classNameInput="modal-input" classNameLabel="modal-label"></Input>
                    <Input label={"Image"} value={imageState} updateValue={setImage} classNameInput="modal-input" classNameLabel="modal-label"></Input>
                    <button onClick={submit} className="btn-modal put">{isPending ? 'Updating...' : 'Update'}</button>
                    <button className="btn-modal cancel" onClick={hadleCancelDelete}>{isPending ? 'Canceling...' : 'Cancel'}</button>
                </form>
            </div>
        </div>
        </>
    )
}