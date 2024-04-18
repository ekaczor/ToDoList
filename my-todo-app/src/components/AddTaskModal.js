import "./AddTaskModal.css"

const AddTaskModal = ({onClose}) => {
    return (
        <div className="modal">
            <div className="top">
            <div>Add Task</div>
            <div className="exit" onClick={onClose}>X</div>
            </div>
        </div>
    )
}

export default AddTaskModal;