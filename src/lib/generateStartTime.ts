export const generateStartTime = (selectedOption: string) => {
  switch (selectedOption) {
    case 'pomodoro':
      return 1200
    case 'short break':
      return 300
    case 'long break':
      return 900
    default:
      return 600
  }
}
