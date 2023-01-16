import { useState } from 'react';
import './allNoteList.scss';

import plusMinus from './res/plus-minus.png';
import del from './res/close.png';

const AllNoteList = ({data, deleteNote, toDate}) => {

    let sortData = JSON.parse(JSON.stringify(data)).map((item) => {
        let data = item.date.match(/\d+/g).reverse().join('-');
        item.date = data;
        return item;
    });
    sortData.sort((a, b) => {
        if(a.date < b.date) return 1;
        if(a.date > b.date) return -1;
        return 0;
    })
    console.log(sortData);

    let [showAllNotes, setShowAllNotes] = useState(false);

    let imageClass = 'plusMinusPlus';
    if(showAllNotes){
        imageClass += ' minus';
    }

    let onShowAllNotes = () => {
        setShowAllNotes(!showAllNotes);
    }

    let listAllNotes = sortData.map((item, i) => {
        let date = item.date.match(/\d+/g);
        return(
            <li 
                className='noteWrapper' 
                key={i}
            >
                <div className="date">
                    {`${date[1]} ${new Date(`${date[2]}`).toLocaleString('uk', {month: 'long'})} ${date[0]}`}
                </div>
                <div className="text">
                    {`${sortData[i].text}`}
                </div>
                <button 
                    className='toDate' 
                    data-day={date[1]} 
                    data-month={date[2]} 
                    data-year={date[0]}
                    onClick={toDate}
                >
                    {'До дати'}
                </button>
                <img 
                    className='delete' 
                    src={del} alt="delete note" 
                    id={sortData[i].id} 
                    onClick={deleteNote}
                />
            </li>
        );
    })

    return (
        <div className="allNoteListWrapper">
            <div className="titleWrapper">
                <div className="title">
                    {'Всі замітки'}
                </div>
                <div className="plusMinus">
                    <img className={imageClass}  src={plusMinus} alt="open/close list" onClick={onShowAllNotes}/>
                </div>
            </div>
            <ul>
                {showAllNotes ? listAllNotes : null}
            </ul>
        </div>
    );
}

export default AllNoteList;