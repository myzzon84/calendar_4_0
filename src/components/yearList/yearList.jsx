// eslint-disable-next-line
import { useState } from 'react';

import arrow from './res/arrow.png';
import close from './res/close.png';

import './yearList.scss';

const YearList = ({startYearList, changeYearList, showYearList, selectYear, titleYear, onShowYearList}) => {
    let yearArr = [];
    
    let allItem = "listItem";
    let selectedItem = 'listItem listItemSelected';
    let listItemClass;
    let dataValue = '';
    for(let i = 0; i < 50; i++){
        listItemClass = titleYear === startYearList + i ? selectedItem : allItem
        yearArr.push(
            <div className={listItemClass} key={i} tabIndex={0} onClick={selectYear} data={`${dataValue}`}>
                {startYearList + i}
            </div>
        );
    }

    let show = "yearListWrapper";
    let hide = "yearListWrapper displayNone";
    let yearListWrapperClass = showYearList ? show : hide;

    return(
        <div className={yearListWrapperClass}>
            {yearArr}
            <img className='arrow left' src={arrow} alt="arrow left" onClick={changeYearList} />
            <img className='arrow right' src={arrow} alt="arrow right" onClick={changeYearList} />
            <img className='close' src={close} alt="close" onClick={onShowYearList} />
        </div>
    );
}

export default YearList;