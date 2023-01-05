// ⚡️ Import Styles
import './style.scss';
import feather from 'feather-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Components01 } from './components/components01.js';
import { Components02 } from './components/components02.js';

// ⚡️ Render Skeleton
document.querySelector('#app').innerHTML = `
<div class='app-container'>
  <div class='components'>
    <h2 class='title'>Star Ratings</h2>
    <div class='component01'></div>
    <div class='component02'></div>
  </div>

  <a class='app-author' href='https://github.com/nagoev-alim' target='_blank'>${feather.icons.github.toSvg()}</a>
</div>
`;

// ⚡️Class instance
new Components01()
new Components02()
