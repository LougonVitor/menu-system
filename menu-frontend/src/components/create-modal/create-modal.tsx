import { useEffect, useState } from "react"
import { useFoodDataMutate } from "../../hook/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";

interface InputProps {
    label: string,
    value: number | string,
    updateValue(value: any) : void
}

interface ModalProps {
    closeModal() : void
}

const Input = ({label, value, updateValue} : InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)} />
        </>
    )
}

export default function CreateModal({ closeModal } : ModalProps) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const { mutate, isSuccess} = useFoodDataMutate();

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
                    <Input label={"Title"} value={title} updateValue={setTitle}></Input>
                    <Input label={"Price"} value={price} updateValue={setPrice}></Input>
                    <Input label={"Image"} value={image} updateValue={setImage}></Input>
                    <button onClick={submit} className="btn-secondary">Post</button>
                </form>
            </div>
        </div>
    )
}