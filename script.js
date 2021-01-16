
class CountdownTimer {

    constructor({selector, targetDate}) {
        this.selector = document.querySelector(selector);
        this.targetDate = targetDate;
        this.start();
    }

    get targetDate() {
        return this._targetDate;
    }

    set targetDate(value) {
        this._targetDate = new Date(value);
    }

    start() {
        setInterval(() => {
            const currentDate = Date.now();
            const leftDate = this.targetDate - currentDate;
            this.updateTimerFormat(leftDate);

        }, 1000)
    }
        updateTimerFormat(time) {
            const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
            const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
            const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
            this.updateMarkupDate(days,hours,mins,secs);
        }

        pad(value) {
            return String(value).padStart(2, '0');
        }
      updateMarkupDate(...array) {
          [...this.selector.children].forEach((el,index) => el.firstElementChild.textContent=array[index]);

      }
    }


const timers = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021'),
});

