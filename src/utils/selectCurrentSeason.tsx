export default function selectCurrentSeason(): string {
  const month: number = new Date().getMonth()

  switch (true) {
    case month === 12 || month <= 2:
      return 'WINTER'

    case month >= 3 && month <= 5:
      return 'SPRING'

    case month >= 6 && month <= 8:
      return 'SUMMER'

    case month >= 9 && month <= 11:
      return 'FALL'

    default:
      return 'Season not found'
  }
}
