import './thisMonthNoteList.scss';

import del from './res/close.png';

const ThisMonthNoteList = ({ month, titleYear, labelNote, deleteNote }) => {

    let thisMonthNote = labelNote().filter((item) => {
        return item[0] === month && item[2] === titleYear;
    });

    let list = thisMonthNote.map((item, i) => {
        return (
            <div className='noteWrapper' key={i}>
                <div className="date">
                    {`${item[1]} ${new Date(`${item[0]}`).toLocaleString('uk', { month: 'long' })} ${item[2]}`}
                </div>
                <div className="text">
                    {item[3]}
                </div>
                <img className='delete' src={del} alt="delete" id={item[4]} onClick={deleteNote} />
            </div>
        );
    });
    let viewList = list.length > 0 ? list : null;
    let title =
        <div className="monthNoteTitle">
            {'Замітки місяця'}
        </div>;
    let viewTitle = list.length > 0 ? title : null

    return (
        <div className="thisMonthNoteListWrapper">
            {viewTitle}
            {viewList}
        </div>
    );
}

export default ThisMonthNoteList;