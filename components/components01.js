import { showNotification } from '../modules/showNotification.js';

export class Components01 {
  constructor() {

    this.renderSkeleton();

    this.DOM = {
      selectInput: document.querySelector('[data-select]'),
      numberInput: document.querySelector('[data-number]'),
    };

    this.PROPS = {
      ratings: {
        sony: 3.1,
        samsung: 2.4,
        vizio: 3.3,
        panasonic: 4.6,
        phillips: 1.1,
      },
      starsTotal: 5,
      product: null,
    };

    this.getRatings();

    this.DOM.selectInput.addEventListener('change', this.onSelect);
    this.DOM.numberInput.addEventListener('blur', this.onNumber);
  }

  /**
   * @function getRatings - Fill stars color
   */
  getRatings = () => {
    for (let rating in this.PROPS.ratings) {
      const starPercentage = (this.PROPS.ratings[rating] / this.PROPS.starsTotal) * 100;
      document.querySelector(`[data-name="${rating}"] .stars-inner`).style.width = `${Math.round(starPercentage / 10) * 10}%`;
      document.querySelector(`[data-name="${rating}"] .number-rating`).innerHTML = this.PROPS.ratings[rating];
    }
  };

  /**
   * @function onSelect - Select change handler
   * @param value
   */
  onSelect = ({ target: { value } }) => {
    this.PROPS.product = value;
    this.DOM.numberInput.disabled = false;
    this.DOM.numberInput.value = this.PROPS.ratings[this.PROPS.product];
  };

  /**
   * @function onNumber - Number field change handler
   * @param value
   */
  onNumber = ({ target: { value } }) => {
    if (value > 5) {
      showNotification('danger', 'Please rate 1 - 5');
      return;
    }
    this.PROPS.ratings[this.PROPS.product] = value;
    this.getRatings();
  };

  /**
   * @function renderSkeleton
   */
  renderSkeleton = () => {
    const mock = [
      {
        name: 'sony',
        value: 'Sony 4K TV',
      },
      {
        name: 'samsung',
        value: 'Samsung 4K TV',
      },
      {
        name: 'vizio',
        value: 'Vizio 4K TV',
      },
      {
        name: 'panasonic',
        value: 'Panasonic 4K TV',
      },
      {
        name: 'phillips',
        value: 'Phillips 4K TV',
      },
    ];

    document.querySelector('.component01').innerHTML = `
    <header>
      <h4 class='title'>Component #1</h4>
      <select data-select=''>
        <option value='0' disabled selected>Select Product</option>
        ${mock.map(({ name, value }) => `<option value='${name}'>${value}</option>`).join('')}
      </select>
      <input type='number' step='0.1' max='5' placeholder='Rate 1 - 5' data-number='' disabled>
    </header>

    <table class='table'>
      <thead>
        <tr>
          <th>4K Television</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
      ${mock.map(({ name, value }) => `
        <tr data-name='${name}'>
          <td>${value}</td>
          <td>
            <div class='stars-outer'>
              <div class='stars-inner'></div>
            </div>
            <span class='number-rating'></span>
          </td>
        </tr>
        `).join('')}
      </tbody>
    </table>`;
  };
}
