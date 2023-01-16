// eslint-disable-next-line
import { useState } from "react";

import TitleYear from "../titleYear/titleYear";
import MonthTitle from "../monthTitle/monthTitle";
import DayList from "../dayList/dayList";
import SelectedDate from "../selectedDate/selectedDate";
import ThisMonthNoteList from "../thisMonthNoteList/thisMonthNoteList";
import AllNoteList from "../allNoteList/allNoteList";

import './App.scss';

const App = () => {

    let dataNotes = [
        {
            date: '01-12-2023',
            text: 'Test note1',
            id: 3
        },
        {
            date: '01-11-2023',
            text: 'Test note2',
            id: 21
        },
        {
            date: '01-13-2023',
            text: 'Test note3',
            id: 44
        },
        {
            date: '01-21-2023',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa impedit exercitationem fugiat   recusandae velit architecto sunt consequatur tempora dolore nostrum perspiciatis natus  blanditiis sequi, asperiores nisi doloribus, facilis aliquid. Corporis porro inventore dolore ut? Consectetur sit maiores hic magni odit consequuntur possimus, quam distinctio non asperiores dolorem nam consequatur ratione labore quis perferendis! Suscipit saepe natus voluptate consequatur Fugit autem ipsum aliquam labore eligendi explicabo eius ea soluta impedit, unde    placeat ullam quam quis tempora! Facilis aliquid amet aspernatur nemo laudantium, nulla eveniet minima  ipsum animi itaque reiciendis.',
            id: 1
        },
        {
            date: '07-19-1984',
            text: 'Test note',
            id: 5
        },
        {
            date: '05-01-1986',
            text: 'Test note',
            id: 2
        },
    ];

    let [data, setData] = useState(dataNotes);

    ////// Year ///////

    let [titleYear, setTitleYear] = useState(new Date().getFullYear());
    let changeTitleYear = (e) => {
        if (e.target.className.includes('left')) {
            setTitleYear(titleYear - 1);
            if (titleYear === startYearList) {
                setStartYearList(startYearList - 50);
            }
        }
        if (e.target.className.includes('right')) {
            setTitleYear(titleYear + 1);
            if (titleYear === startYearList + 49) {
                setStartYearList(startYearList + 50);
            }
        }
    }

    let [startYearList, setStartYearList] = useState(2000);
    let changeYearList = (e) => {

        if (e.target.className.includes('left')) {
            if (startYearList === 0) {
                return;
            }
            setStartYearList(startYearList - 50);
        }
        if (e.target.className.includes('right')) {
            setStartYearList(startYearList + 50);
        }
    }

    let [showYearList, setShowYearList] = useState(false);
    let onShowYearList = () => {
        setShowYearList(!showYearList);
        setShowMonthList(false);
    }



    let selectYear = (e) => {
        setTitleYear(titleYear = Number(e.target.textContent));
    }

    ////////// Month //////////

    let [showMonthList, setShowMonthList] = useState(false);
    let onShowMonthList = () => {
        setShowMonthList(!showMonthList);
    }


    let [month, setMonth] = useState(new Date().getMonth() + 1);
    let changeMonthTitle = (e) => {
        if (e.target.className.includes('left')) {
            if (month - 1 === 0) {
                setMonth(12);
                setTitleYear(titleYear - 1);
            } else {
                setMonth(month - 1);
            }
        }
        if (e.target.className.includes('right')) {
            if (month + 1 === 13) {
                setMonth(1);
                setTitleYear(titleYear + 1);
            } else {
                setMonth(month + 1);
            }

        }
    }

    let onMonthSelect = (e) => {
        setMonth(Number(e.target.getAttribute('data-number-month')));
    }

    let closeMontList = () => {
        setShowMonthList(false);
    }

    ////////// Day //////////

    let [day, setDay] = useState(new Date().getDate());
    let onSetDay = (e) => {
        if (isNaN(Number(e.target.innerText)) || Number(e.target.innerText) === 0) {
            return;
        }
        setDay(Number(e.target.innerText));
    }

    /////////////////////////

    let labelNote = () => {
        let dateArr = data.map((item) => {
            let temp = item.date.match(/\d+/g).map(elem => Number(elem));
            temp.push(item.text, item.id);
            return temp;
        });
        return dateArr;
    }

    let deleteNote = (e) => {
        let id = Number(e.target.getAttribute('id'));
        let newData = data.filter((item) => {
            return item.id !== id;
        });
        console.log(id)
        setData(newData);
    }

    let [noteForm, setNoteForm] = useState(false);
    let onSetNoteForm = () => {
        setNoteForm(!noteForm);
    }

    let [textNote, setTextNote] = useState('');
    let onSetTextNote = (e) => {
        setTextNote(e.target.value);
    }

    let addNote = () => {
        if (textNote === '') {
            return;
        }
        let newData = JSON.parse(JSON.stringify(data));
        newData.sort((a, b) => {
            if (a.id > b.id) return 1;
            if (a.id < b.id) return -1;
            return 0;
        });
        let id = -1;
        for (let i = 0; i < newData.length; i++) {
            if (newData[i].id === i) {
                continue;
            } else {
                id = i;
                break;
            }
        }
        if (id === -1) {
            id = newData.length;
        }
        let getZero = (num) => {
            if (num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
        }
        newData.push({
            date: `${getZero(month)}-${getZero(day)}-${titleYear}`,
            text: `${textNote}`,
            id: id
        });
        setData(newData);
    }

    let closeNoteForm = () => {
        setTextNote('');
        onSetNoteForm();
    }

    return (
        <div className="appWrapper">
            <TitleYear
                titleYear={titleYear}
                changeTitleYear={changeTitleYear}
                startYearList={startYearList}
                changeYearList={changeYearList}
                showYearList={showYearList}
                onShowYearList={onShowYearList}
                selectYear={selectYear}
                onShowMonthList={onShowMonthList} />
            <MonthTitle
                month={month}
                changeMonthTitle={changeMonthTitle}
                onShowMonthList={onShowMonthList}
                showMonthList={showMonthList}
                onMonthSelect={onMonthSelect}
                closeMontList={closeMontList}
            />
            <DayList
                month={month}
                titleYear={titleYear}
                day={day}
                onSetDay={onSetDay}
                labelNote={labelNote} />
            <SelectedDate
                titleYear={titleYear}
                month={month}
                day={day}
                noteForm={noteForm}
                onSetNoteForm={onSetNoteForm}
                onSetTextNote={onSetTextNote}
                textNote={textNote}
                addNote={addNote}
                closeNoteForm={closeNoteForm} />
            <ThisMonthNoteList
                month={month}
                day={day}
                titleYear={titleYear}
                labelNote={labelNote}
                deleteNote={deleteNote} />
            <AllNoteList
                data={data}
                deleteNote={deleteNote} />
        </div>
    );
}

export default App;


// new Date('12').toLocaleString('uk', {month: 'long'})