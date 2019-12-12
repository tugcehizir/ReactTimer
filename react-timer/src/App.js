import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dateSecondFirst: new Date(),
      dateSecondFinish: new Date(),
      dateMinuteFirst: new Date(),
      dateMinuteFinish: new Date()
    };
  }

  componentDidMount() {
    const { dateSecondFirst, dateMinuteFirst } = this.state;
    this.setState({
      dateSecondFirst: dateSecondFirst.getSeconds(),
      dateMinuteFirst: dateMinuteFirst.getMinutes()
    });
  };

  handleClick = (event) => {
    const newDate = new Date();
    this.setState({
      dateSecondFinish: newDate.getSeconds(),
      dateMinuteFinish: newDate.getMinutes()
    });
  }
  showClick = () => {

    console.log('ilk dakika', this.state.dateMinuteFirst);
    console.log('ilk saniy', this.state.dateSecondFirst);


    console.log('son dakika', this.state.dateMinuteFinish);
    console.log('son saniy', this.state.dateSecondFinish);

    const { dateSecondFinish, dateSecondFirst, dateMinuteFinish, dateMinuteFirst } = this.state;

    let fark = 0;
    let farkDk = 0;
    let dk = 0;
    while (1) {   //Saniye Kontrolü
      if (dateSecondFinish > dateSecondFirst) {
        fark = dateSecondFinish - dateSecondFirst;
      }
      else if (dateSecondFirst > dateSecondFinish) {
        fark = (60 - dateSecondFirst) + dateSecondFinish;
      }
      if (fark > 60) { return ('Hoşgeldiniz!!') }

      //Dk Kontrolü
      if (dateMinuteFinish > dateMinuteFirst) {
        farkDk = dateMinuteFinish - dateMinuteFirst;
      }
      else if (dateMinuteFirst > dateMinuteFinish) {
        farkDk = (60 - dateMinuteFirst) + dateMinuteFinish;
      }

      return (fark + ' saniyeden beri buradasınız!');
    }
  }
  render() {
    return (
      <div>
        <button key='stop' onClick={this.handleClick}>Durdur!</button>

        <p key='th'>{this.showClick()}</p>
      </div>
    );
  }
}


export default App;

