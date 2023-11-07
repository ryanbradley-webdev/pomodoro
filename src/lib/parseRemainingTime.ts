export const parseRemainingTime = (remainingtime: number) => {
  const minutes = Math.floor(remainingtime / 60)
  const seconds = remainingtime % 60

  const minutesString = minutes < 10 ? '0' + minutes : minutes
  const secondsString = seconds < 10 ? '0' + seconds : seconds

  return minutesString + ':' + secondsString
}
