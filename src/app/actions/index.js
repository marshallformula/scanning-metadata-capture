export const DIVIDER_RESIZE = Symbol('DIVIDER_RESIZE')
export const moveDivider = position => ({ type: DIVIDER_RESIZE, position })

export const IMAGE_ROTATE = Symbol('IMAGE_ROTATE')
export const rotateViewerImage = rotation => ({ type: IMAGE_ROTATE, rotation })
