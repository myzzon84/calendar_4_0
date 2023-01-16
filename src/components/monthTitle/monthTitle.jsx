import './monthTitle.scss';

import arrow from './res/arrow.png';

import MonthList from '../monthList/monthList';

const MonthTitle = ({month, changeMonthTitle, onShowMonthList, showMonthList, onMonthSelect, closeMontList}) => {
    return(
        <div className="monthTitleWrapper">
            <img className='left arrow' src={arrow} alt="left arrow" onClick={changeMonthTitle} />
            <div className="month" onClick={onShowMonthList}>
                {new Date(`${month}`).toLocaleString('uk', {month: 'long'})}
            </div>
            <img className='right arrow' src={arrow} alt="right arrow" onClick={changeMonthTitle} />
            { showMonthList ? <MonthList 
                                    month={month}
                                    onMonthSelect={onMonthSelect}
                                    closeMontList={closeMontList}/> : null}
        </div>
    );
}

export default MonthTitle;