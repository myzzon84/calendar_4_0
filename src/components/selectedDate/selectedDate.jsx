import './selectedDate.scss';

import AddNoteForm from '../addNoteForm/addNoteForm';

const SelectedDate = ({ 
                        titleYear, 
                        month, 
                        day, 
                        noteForm, 
                        onSetNoteForm, 
                        onSetTextNote, 
                        textNote, 
                        addNote, 
                        closeNoteForm
                    }) => {
    return (
        <div className="selectedDateWrapper">
            <div className="selectedDate">
                {`${day} ${new Date(`${month}`).toLocaleString('uk', { month: 'long' })} ${titleYear}`}
            </div>
            <div className="button">
                <button className="addNote" onClick={onSetNoteForm}>
                    {'Додати замітку'}
                </button>
            </div>
            {noteForm ? <AddNoteForm 
                            onSetTextNote={onSetTextNote} 
                            textNote={textNote}
                            day={day}
                            month={month}
                            titleYear={titleYear}
                            addNote={addNote}
                            closeNoteForm={closeNoteForm}/> : null}
        </div>
    );
}

export default SelectedDate;