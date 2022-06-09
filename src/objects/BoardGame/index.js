import CardGame from '../../components/CardGame';

const BoardGame = (amountCards) => {
  const $htmlCardGame = CardGame();
  const $htmlBoardGame = $htmlCardGame.repeat(amountCards);

  return $htmlBoardGame;
};

export default BoardGame;
