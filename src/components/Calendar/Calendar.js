import React from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import { getJson } from '../../modules/helpers';
import 'react-infinite-calendar/styles.css';
import './Calendar.css';

class Calendar extends InfiniteCalendar {
  constructor(props) {
    super(props);

    this.config = {
      key: `2eda3eec-837f-4309-a203-2660903f183f`,
      country: `BR`,
      year: `2017`
    };

    this.state = {
      holidays: [],
      loader: true,
      error: null
    };
  }

  getHolidays(data) {
    return getJson(`https://holidayapi.com/v1/holidays?key=${data.key}&country=${data.country}&year=${data.year}`);
  }

  renderLoader() {
    return <div></div>;
  }

  renderError() {
    return (
      <div>
        {this.state.error.message}
      </div>
    );
  }

  renderCalendar() {
    if (this.state.error) {
      return this.renderError();
    }

    const today = new Date();
    const lastWeek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 7
    );
    const holidays = [];

    Object.keys(this.state.holidays).map(date => {
      return holidays.push(new Date(date.split(`-`).join(`/`)));
    });
    
    return (
      <InfiniteCalendar
        width={ `100%` }
        height={ window.innerHeight - 147 }
        rowHeight={ 138 }
        selected={ today }
        minDate={ lastWeek }
        disabledDates={ holidays }
        locale={{
          locale: require(`date-fns/locale/pt`),
          headerFormat: `dddd, D MMMM`,
          weekStartsOn: 1,
          weekdays: [`Dom`,`Seg`,`Ter`,`Qua`,`Qui`,`Sex`,`Sáb`],
          blank: `Nenhuma data selecionada`,
          todayLabel: {
            long: `Hoje`,
            short: `Hoje`
          }
        }}
        theme={{
          selectionColor: `rgb(249, 206, 35)`,
          textColor: {
            default: `#333`,
            active: `#fff`
          },
          weekdayColor: `rgb(146, 118, 255)`,
          headerColor: `#333`,
          floatingNav: {
            background: `rgba(81, 67, 138, 0.96)`,
            color: `#fff`,
            chevron: `#ffa726`
          }
        }}
      />
    );
  }

  componentDidMount() {
    return this.getHolidays(this.config)
      .then(res => {
        this.setState({
          holidays: res.holidays,
          loader: false
        });
      })
      .catch(err => {
        this.setState({
          loader: false,
          error: err
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.loader ?
          this.renderLoader()
          : this.renderCalendar()}
      </div>
    );
  }
}

export default Calendar;
