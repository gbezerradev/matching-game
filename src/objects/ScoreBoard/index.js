import PlayerName from '../../components/PlayerName';

const ScoreBoard = () => {
  return /*html*/ `
    <header class="score-board">
      ${PlayerName('Player1')}
      ${PlayerName('Player2')}
    </header>
  `;
};

export default ScoreBoard;
