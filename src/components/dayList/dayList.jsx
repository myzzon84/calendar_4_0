
import './dayList.scss';

const DayList = ({month, titleYear, day, onSetDay, labelNote}) => {

    let blockArr = [];

    let daysName = ['Пн','Вт','Ср','Чт','Пт','Сб','Нд'];
    let content;

    let itemClass;
    let numberDay = 0;

    let countDayOfMonth = () => {
        let numMonth = month + 1;
        let numYear = titleYear;
        if(numMonth === 13){
            numMonth = 1;
            numYear += 1;
        }
        let temp = new Date(`${numMonth}-01-${numYear}`) - new Date(`${month}-01-${titleYear}`);
        let count = Math.round(temp / 1000 / 60 / 60 / 24);
        return count;
    }

    let firstDayInMonth = () => {
        let firstDay = new Date(`${month}-01-${titleYear}`).getDay();
        if(firstDay === 0){
            firstDay = 7;
        }
        return firstDay;
    }

    for (let i = 0; i < 49; i++) {
        content = '';

        if(content < countDayOfMonth() && i > firstDayInMonth() + 6){
            content = i - 5 - firstDayInMonth();
        }

        if(content > countDayOfMonth() && i > firstDayInMonth() + 6){
            content = '';
        }

        if(i <= 6){
            content = daysName[i];
        }

        if(numberDay === 8){
            numberDay = 1;
        }

        if(i < 7){
            itemClass = 'item dayTitle';
        }else{
            itemClass = 'item';
        }

        if(i === 5 || i === 6){
            itemClass += ' weekend';
        }

        if(numberDay === 6 || numberDay === 7){
            itemClass += ' weekend';
        }

        if(i === firstDayInMonth() + 6){
            content = 1;
        }

        if(content === ''){
            itemClass += ' opacity';
        }

        if(content === day){
            itemClass += ' currentDay';
        }

        if(itemClass.includes('dayTitle') || itemClass.includes('opacity')){
            itemClass += ' cursor';
        }

        let thisMonthNote = [];
        
        labelNote().forEach((item) => {
            if(item[0] === month && item[2] === titleYear){
                thisMonthNote.push(item[1]);
            }
        });

        for(let i = 0; i < thisMonthNote.length; i++){
            if(thisMonthNote[i] === content){
                itemClass += ' labelNote';
            }
        }

        blockArr.push(
            <div className={itemClass} key={i} onClick={onSetDay}>
                {content}
            </div>
        );
        if(i >= 6){
            numberDay++;
        }
    }

    return (
        <div className="dayListWrapper">
            {blockArr}
        </div>
    );
}

export default DayList;