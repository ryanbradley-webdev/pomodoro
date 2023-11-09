import { FONT_OPTIONS, COLOR_OPTIONS, TIMER_OPTIONS } from "../constants/appOptions"

export type FontOption = typeof FONT_OPTIONS[number]
export type ColorOption = typeof COLOR_OPTIONS[number]
export type TimerOption = typeof TIMER_OPTIONS[number]
export type TimerTimes = { [K in typeof TIMER_OPTIONS[number]]: number }

export type AppSettings = {
  font: FontOption
  color: ColorOption
  timer: TimerOption
  timerTimes: TimerTimes
}

export const valueIsFont = (value: string): value is FontOption => {
  return FONT_OPTIONS.includes(value as FontOption)
}

export const valueIsColor = (value: string): value is ColorOption => {
  return COLOR_OPTIONS.includes(value as ColorOption)
}
