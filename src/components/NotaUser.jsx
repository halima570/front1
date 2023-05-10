import './pop.css'


function Modal(props) {
    if (!props.isOpen) return null;
  
    return (
      <div className="modal ">
        <div className="modal-content border-2 border-blue-400 rounded-xl">
          {props.children}
          <button onClick={props.onClose} className='p-2 font-bold bg-blue-400 text-white rounded-xl m-2 cursor'>Close</button>
        </div>
        <div className="modal-overlay" onClick={props.onClose}></div>
      </div>
    );
  }
  export default Modal