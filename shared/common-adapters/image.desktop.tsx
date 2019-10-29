import * as React from 'react'
import path from 'path'
import {Props, ReqProps} from './image'

const multiples = [1, 2, 3]
// Converts from a single src to srcset by appending @2x @3x filename extensions
const srcToSrcSet = (src: string) => {
  const {dir, name, ext} = path.parse(src)
  return multiples
    .map(mult => {
      const newSrc = `${dir}/${name}${mult > 1 ? `@${mult}x` : ''}${ext} ${mult}x`
      return newSrc
    })
    .join(', ')
}

// @ts-ignore clash between StylesCrossPlatform and React.CSSProperties
const RequireImage = ({src, useSrcSet, style}: ReqProps) => (
  <img
    src={useSrcSet ? undefined : src}
    srcSet={useSrcSet ? srcToSrcSet(src) : undefined}
    // @ts-ignore TODO fix styles
    style={style}
  />
)
const Image = ({src, style, onDragStart, onLoad}: Props) => (
  <img src={src} style={style} onDragStart={onDragStart} onLoad={onLoad} />
)

export default Image
export {RequireImage}
