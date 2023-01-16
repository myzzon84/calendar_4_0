
import './monthList.scss';

import close from './res/close.png';

const MonthList = ({month, onMonthSelect, closeMontList}) => {

    let monthAll = "monthItem";
    let monthSelected = "monthItem selectedMonth";
    let monthListStyle;

    let monthArr = [];

    for(let i = 1; i < 13; i++){
        monthListStyle = month === i ? monthSelected : monthAll;
        monthArr.push(
            <div className={monthListStyle} key={i}  >
                <span data-number-month={`${i}`} onClick={onMonthSelect}>
                    {new Date(`${i}`).toLocaleString('uk', {month: 'long'})}
                </span>
            </div>
        );
    }

    return(
        <div className="monthListWrapper">
            {monthArr}
            <img className='close' src={close} alt="close" onClick={closeMontList} />
        </div>
    );
}

export default MonthList;