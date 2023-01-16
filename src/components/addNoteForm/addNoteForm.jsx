import './addNoteForm.scss';

import close from './res/close.png';

const AddNoteForm = ({onSetTextNote, textNote, addNote, closeNoteForm}) => {
    return(
        <div className="addNoteFormWrapper">
            <textarea className='textArea' onChange={onSetTextNote} value={textNote}>

            </textarea>
            <div className="buttons">
                <button className='btn' onClick={closeNoteForm}>
                    {'Відмінити'}
                </button>
                <button className='btn' onClick={addNote}>
                    {'Додати'}
                </button>
            </div>
            <img className='close' src={close} alt="close" onClick={closeNoteForm} />
        </div>
    );
}

export default AddNoteForm;