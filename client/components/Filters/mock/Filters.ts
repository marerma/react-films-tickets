const enum FILTER_TYPES {
  genre = 'genre',
  title = 'title',
  cinema = 'cinema',
}

const DROP_GENRES = {
  label: 'Жанр',
  placeholder: 'Выберите жанр',
  filterType: FILTER_TYPES.genre,
}

const DROP_CINEMAS = {
  label: 'Кинотеатр',
  placeholder: 'Выберите кинотеатр',
  filterType: FILTER_TYPES.cinema,
}

export { FILTER_TYPES, DROP_CINEMAS, DROP_GENRES }
