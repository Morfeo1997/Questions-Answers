export const saveGameData = gameData => {
  try {
    localStorage.setItem('triviaGameData', JSON.stringify(gameData));
    return true;
  } catch (error) {
    console.error('Error guardando los archivos del juego:', error);
    return false;
  }
};

export const loadGameData = id => {
  try {
    const data = localStorage.getItem('games');
    const parsedData = JSON.parse(data);
    const findedGame = parsedData.find(g => g.id == id);
    return findedGame;
  } catch (error) {
    console.error('Error cargando los archivos del juego:', error);
    return null;
  }
};
