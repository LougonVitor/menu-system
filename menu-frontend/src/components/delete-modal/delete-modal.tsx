import './delete-modal.css'
import { useFoodDataDelete } from '../../hook/useFoodDataDelete'

interface foodProps {
    id?: number,
    title: string,
    closeModal: () => void
}

export default function DeleteModal({ id, title, closeModal}: foodProps) {
    const { mutate: deleteFood, isPending } = useFoodDataDelete();

    const handleDeleteFood = () => {
        deleteFood(id);
    }

    const hadleCancelDelete = () => {
        closeModal();
    }

    return (
    <>
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Are you sure you want to delete {title} food?</h2>
                <form className="input-container">
                    <button className="btn-modal delete" onClick={handleDeleteFood}>{isPending ? 'Deleting...' : 'Delete'}</button>
                    <button className="btn-modal cancel" onClick={hadleCancelDelete}>{isPending ? 'Canceling...' : 'Cancel'}</button>
                </form>
            </div>
        </div>
    </>
    )
}