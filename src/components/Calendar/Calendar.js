import React from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import { getJson } from '../../modules/helpers';
import 'react-infinite-calendar/styles.css';
import './Calendar.css';

class Calendar extends InfiniteCalendar {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getHolidays(data) {
    const url = `https://holidayapi.com/v1/holidays?key=${data.key}&country=${data.country}&year=${data.year}`;
    return getJson(url);
  }

  render() {
    const data = {
      key: `2eda3eec-837f-4309-a203-2660903f183f`,
      country: `BR`,
      year: `2017`
    };

    this.getHolidays(data).then((res) => {
        if (res.error) {

        } else {
            
        }
    });

    const today = new Date();
    const lastWeek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 7
    );

    return (
      <InfiniteCalendar
        width={ this.props.width }
        height={ this.props.height }
        rowHeight={ this.props.rowHeight }
        selected={ today }
        minDate={ lastWeek }
        disabledDays={ this.props.disabledDays }
        locale={{
          locale: require('date-fns/locale/pt'),
          headerFormat: 'dddd, D MMMM',
          weekdays: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
          blank: 'Nenhuma data selecionada',
          todayLabel: {
            long: 'Hoje',
            short: 'Hoje'
          }
        }}
        theme={{
          selectionColor: 'rgb(249, 206, 35)',
          textColor: {
            default: '#333',
            active: '#fff'
          },
          weekdayColor: 'rgb(146, 118, 255)',
          headerColor: '#333',
          floatingNav: {
            background: 'rgba(81, 67, 138, 0.96)',
            color: '#fff',
            chevron: '#ffa726'
          }
        }}
      />
    );
  }
}

export default Calendar;
