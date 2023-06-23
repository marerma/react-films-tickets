const GENRES: { [key: string]: { ru: string; en: string } } = {
  horror: {
    ru: 'Ужасы',
    en: 'horror',
  },
  action: {
    ru: 'Боевик',
    en: 'action',
  },
  comedy: {
    ru: 'Комедия',
    en: '',
  },
  fantasy: {
    ru: 'Фэнтези',
    en: 'fantasy',
  },
}

const translateGenre = (genre: string) => {
  return GENRES[genre].ru
}
export { translateGenre }
