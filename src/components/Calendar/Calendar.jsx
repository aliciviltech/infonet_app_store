import React, { useState } from 'react'
import './Calendar.css'
import { allMonths } from './allMonthsData';
import CalendarModal from './CalendarModal';

const Calendar = ({ toDoData }) => {
    const [showModal, setShowModal] = useState(false);
    const [modalDate, setModalDate] = useState('');
    const taskList = JSON.parse(localStorage.getItem('taskList')) || [];

    console.log(new Date('10-13-2024').getDay())

    const [currentDate, setCurrentDate] = useState(new Date());
    const [upToDate, setUpToDate] = useState({});

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const renderCalendar = () => {
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();

        // Get the first day of the month
        const firstDay = new Date(year, month, 1);
        // Get the last day of the month
        const lastDay = new Date(year, month + 1, 0);

        const daysInMonth = lastDay.getDate();
        const startDay = firstDay.getDay(); // Day of the week (0 - Sunday, 6 - Saturday)

        const calendarDays = [];

        // Create empty slots for the days before the first day of the month
        for (let i = 0; i < startDay; i++) {
            calendarDays.push(<div className="calendar-day empty" key={`empty-${i}`}></div>);
        }

        // Create slots for each day in the month
        outerLoop: for (let day = 1; day <= daysInMonth; day++) {
            const thisDate = new Date(year, month,day) ;
            console.log(thisDate, thisDate.getDay())
            for(let t=0; t<taskList.length; t++){
                if(new Date(year, month,day).toLocaleDateString() === new Date(taskList[t].dateInput).toLocaleDateString()){
                    calendarDays.push(
                        <div className={`calendar-day calendar-day-task ${thisDate.getDay()===0 ? 'sunday' : null}  `} key={day}
                        // style={{backgroundColor:`${thisDate.getDay()===0 ? 'red' : 'transparent'}`}}
                            onClick={()=>{
                                setShowModal(true);
                                setModalDate(taskList[t].dateInput)
                            }}
                            >
                            {day}
                            <i 
                                class="fa-regular fa-rectangle-list"
                                style={{color:'green'}}
                                ></i>
                        </div>
                    );
                    continue outerLoop;
                }
            }
            calendarDays.push(
                <div className={`calendar-day ${thisDate.getDay()===0 ? 'sunday' : null}  `} key={day}   > {day}</div>
            );
        }
        return calendarDays;
    };

    return (
        <div className="calendar">
            <div className="calendar-header">
                <button onClick={handlePrevMonth}><i class="fa-solid fa-backward-step"></i></button>
                <h2>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</h2>
                <button onClick={handleNextMonth}><i class="fa-solid fa-forward-step"></i></button>
            </div>
            <div className="day-names">
                <div className="dayName sunday">Sun</div>
                <div className="dayName">Mon</div>
                <div className="dayName">Tue</div>
                <div className="dayName">Wed</div>
                <div className="dayName">Thu</div>
                <div className="dayName">Fri</div>
                <div className="dayName">Sat</div>
            </div>
            <div className="calendar-body">
                {renderCalendar()}
            </div>


            {
                showModal &&
                <CalendarModal showModal={showModal} setShowModal={setShowModal} taskList={taskList} modalDate={modalDate}/>
            }
        </div>
    );




    // return (
    //     <div className='Calendar'>
    //         <h1>{toDoData}</h1>
    //         {
    //             allMonths.map((month, index) => {
    //                 const monthName = Object.keys(month)[0];
    //                 return (
    //                     <div className="monthContainer">
    //                         <h1>{monthName}</h1>
    //                         {month[monthName].map((date) => {
    //                             return (
    //                                 <div className="dateBox" onClick={()=>{setShowModal(true); setModalData([date, monthName])}}>
    //                                     {date}
    //                                 </div>
    //                             )
    //                         })}
    //                     </div>
    //                 )
    //             })
    //         }

    //         {
    //             showModal &&
    //             <CalendarModal modalData={modalData}/>
    //         }
    //     </div>
    // )
}

export default Calendar