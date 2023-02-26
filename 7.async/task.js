class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if(!time || !callback) {
      throw new Error('отсутствуют обязательные аргументы');
    }

    const index = this.alarmCollection.findIndex(alarm => alarm.time === time);//гугляж помог, но не понимаю синтаксис findIndex(alarm => alarm.time === time)--от куда взялся alarm и что это? так понимаю это имя переменной может быть любым?
    if (index !== -1) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({
      time,
      callback,
      canCall: true,//зачем это нужно?
    });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time !== time);//тут уж без непонятного мне alarm не обошлось. я так понимаю что это переменная которая создается и после завершения функции удаляется??? т.е alarm - это просто имя переменной?
  }

  getCurrentFormattedTime() {//этот метод из стандартной библиотеки Js но вообще не понимаю ни одной строчки
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;//кроме этой)))
  }

  start() {//почему этот метод не принемает аргументы?
    if (this.intervalId !== null) {
      return;
    }

    const checkAlarms = () => {//от сюда мне помогла нейросеть(((
      this.alarmCollection.forEach((alarm) => {
        if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    };

    checkAlarms();
    this.intervalId = setInterval(checkAlarms, 1000);//здесь все ясно
  }

  stop() {//почему этот метод не принемает аргументы?
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {//почему этот метод не принемает аргументы?
    this.alarmCollection.forEach(function(call) {
      call.canCall = true;
    });
  }

  clearAlarms() {//всю голову сломал. не могу понять почему не прохожу тест на удаление всех звонков...//почему этот метод не принемает аргументы?
    this.stop();
    this.alarmCollection = [];
  }
}










