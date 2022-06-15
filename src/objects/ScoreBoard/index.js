import './style.css';
import PlayerName from '../../components/PlayerName';
import VsPlayer from '../../components/VsPlayer';
import PlayerScore from '../../components/PlayerScore';

const ScoreBoard = () => {
  return /*html*/ `
    <header class="score-board">
      ${PlayerName('Player1')}
      ${PlayerScore(2)}
      ${VsPlayer()}
      ${PlayerScore(1)}
      ${PlayerName('Player2')}
    </header>
  `;
};

export default ScoreBoard;
