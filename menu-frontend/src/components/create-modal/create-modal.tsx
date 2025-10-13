import { useEffect, useState } from "react"
import { useFoodDataMutate } from "../../hook/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";
import './create-modal.css'

interface InputProps {
    label: string,
    value: number | string,
    updateValue(value: any) : void,
    classNameLabel: string,
    classNameInput: string
}

interface ModalProps {
    closeModal() : void
}

const Input = ({label, value, updateValue, classNameInput, classNameLabel} : InputProps) => {
    return (
        <>
            <label className={classNameLabel}>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)} className={classNameInput} />
        </>
    )
}

export default function CreateModal({ closeModal } : ModalProps) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const { mutate, isSuccess, isPending} = useFoodDataMutate();

    useEffect(() => {
        if(isSuccess) closeModal
        return
    }, [isSuccess])

    const submit = (event: React.FormEvent) => {
        event.preventDefault();

        const foodData : FoodData = {
            title,
            price,
            image
        }

        mutate(foodData);
    }

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Send Form</h2>
                <form className="input-container">
                    <Input label={"Title"} value={title} updateValue={setTitle} classNameInput="post-input" classNameLabel="post-label"></Input>
                    <Input label={"Price"} value={price} updateValue={setPrice} classNameInput="post-input" classNameLabel="post-label"></Input>
                    <Input label={"Image"} value={image} updateValue={setImage} classNameInput="post-input" classNameLabel="post-label"></Input>
                    <button onClick={submit} className="btn-modal post">{isPending ? 'Posting...' : 'Post'}</button>
                </form>
            </div>
        </div>
    )
}