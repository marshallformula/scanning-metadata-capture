export const DIVIDER_RESIZE = Symbol('DIVIDER_RESIZE')
export const moveDivider = position => {
  return {
    type: DIVIDER_RESIZE,
    position
  }
}