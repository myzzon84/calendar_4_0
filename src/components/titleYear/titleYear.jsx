import './titleYear.scss';

import arrow from './res/arrow.png';

import YearList from '../yearList/yearList';

const TitleYear = ({titleYear, changeTitleYear, startYearList, 
                    changeYearList, showYearList, onShowYearList,
                    selectYear, onShowMonthList}) => {

    return(
        <div className="titleYearWrapper">
            <img className='left arrow' src={arrow} alt="left arrow" onClick={changeTitleYear} />
            <span className='year' onClick={onShowYearList}>
                {titleYear}
            </span>
            <img className='right arrow' src={arrow} alt="right arrow" onClick={changeTitleYear} />
            <YearList startYearList={startYearList} 
                      changeYearList={changeYearList} 
                      showYearList={showYearList}
                      selectYear={selectYear}
                      titleYear={titleYear}
                      onShowYearList={onShowYearList} />
        </div>
    );
}

export default TitleYear;