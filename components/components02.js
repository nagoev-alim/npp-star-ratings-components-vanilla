import 'star-rating.js/dist/star-rating.min.css';
import starRatingEsm from 'star-rating.js';

export class Components02 {
  constructor() {
    this.renderSkeleton();
    this.customRating();
    new starRatingEsm('[data-lib-rating]');
  }

  customRating = () => {
    const ratingStars = [...document.querySelectorAll('[data-star]')];
    const ratingResult = document.querySelector('[data-result]');

    const printRatingResult = (result, num = 0) => result.textContent = `${num}/5`;
    const executeRating = (stars, result) => {
      const starClassActive = 'fa-solid fa-star';
      const starClassUnactive = 'fa-regular fa-star';
      const starsLength = stars.length;
      let i;
      stars.map((star) => {
        star.addEventListener('click', () => {
          i = stars.indexOf(star);
          if (star.className.indexOf(starClassUnactive) !== -1) {
            printRatingResult(result, i + 1);
            for (i; i >= 0; --i) stars[i].className = starClassActive;
          } else {
            printRatingResult(result, i);
            for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
          }
        });
      });
    };

    printRatingResult(ratingResult);
    executeRating(ratingStars, ratingResult);
  };

  /**
   * @function renderSkeleton
   */
  renderSkeleton = () => {
    const mock = [
      {
        name: 'Excellent',
        value: 5,
      },
      {
        name: 'Very Good',
        value: 4,
      },
      {
        name: 'Average',
        value: 3,
      },
      {
        name: 'Poor',
        value: 2,
      },
      {
        name: 'Terrible',
        value: 1,
      },
    ];

    document.querySelector('.component02').innerHTML = `
      <h4 class='title'>Component #2 <br> (star-rating.js)</h4>
      <select data-lib-rating=''>
        <option value=''>Select a rating</option>
        ${mock.map(({ name, value }) => `<option value='${value}'>${name}</option>`).join('')}
      </select>

      <h4 class='title'>Component #3 <br>(Custom Star Ratings)</h4>
      <div>${Array.from({ length: 5 }).map(i => `<i data-star class='fa-regular fa-star'></i>`).join('')}</div>
      <span data-result=''></span>
     `;
  };
}
