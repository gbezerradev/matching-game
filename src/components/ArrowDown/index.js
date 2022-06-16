import './style.css';

const ArrowDown = (currentPlayer = 1) => {
  return /*html*/ `
    <img class="arrow-down"
         data-currentPlayer="${currentPlayer}"
         src="images/IconArrowDown.png" 
         alt="ícone de uma seta para baixo">
  `;
};

export default ArrowDown;
