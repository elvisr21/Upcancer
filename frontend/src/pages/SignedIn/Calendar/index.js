import './calendar.css'
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from "@syncfusion/ej2-react-schedule";
import { render } from '@testing-library/react';
import * as React from 'react';

export const CalendarPage=()=>{
    {/* Backend-- The Events are located here. */}
    var data =[{
                Id: 1,
                Subject: 'test',
                StartTime: new Date(year=2021,month=3,date=15,hours=10,mintues=0),
                EndTime: new Date(year=2021,month=3,date=15,hours=12,mintues=30),
            }];

    
        
        render(); 
            return <div class="main">
                <link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet" type="text/css" />
                <ScheduleComponent currentView='Month' height='700' width='1000' eventSettings={{ dataSource: data[0] }}>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
                 </ScheduleComponent>
                 <br />
            </div>
    
}
