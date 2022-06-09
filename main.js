import './src/styles/settings/color.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';
import BoardGame from './src/objects/BoardGame';

const $root = document.querySelector('#root');
const $htmlBoardGame = BoardGame(2);

$root.insertAdjacentHTML('beforeend', $htmlBoardGame);
