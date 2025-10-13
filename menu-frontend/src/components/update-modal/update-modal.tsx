import { useFoodDataUpdate } from '../../hook/useFoodDataUpdate'
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
/*     updateValue(value: any) : void,*/
    classNameLabel: string,
    classNameInput: string
}

const Input = ({label, value, /* updateValue, */ classNameInput, classNameLabel} : InputProps) => {
    return (
        <>
            <label className={classNameLabel}>{label}</label>
            <input value={value} /* onChange={event => updateValue(event.target.value)} */ className={classNameInput} />
        </>
    )
}

export default function UpdateModal({id, title, price, image, closeModal}: foodProps) {
    const { isPending } = useFoodDataUpdate();

    const hadleCancelDelete = () => {
        closeModal();
    }

    const submit = (event: React.FormEvent) => {
        event.preventDefault()


    }

    return (
        <>
            <div className="modal-overlay">
            <div className="modal-body">
                <h2>Send Form</h2>
                <form className="input-container">
                    <Input label={"Title"} value={title} classNameInput="post-input" classNameLabel="post-label"></Input>
                    <Input label={"Price"} value={price} classNameInput="post-input" classNameLabel="post-label"></Input>
                    <Input label={"Image"} value={image} classNameInput="post-input" classNameLabel="post-label"></Input>
                    <button onClick={submit} className="btn-modal put">{isPending ? 'Updating...' : 'Update'}</button>
                    <button className="btn-modal cancel" onClick={hadleCancelDelete}>{isPending ? 'Canceling...' : 'Cancel'}</button>
                </form>
            </div>
        </div>
        </>
    )
}