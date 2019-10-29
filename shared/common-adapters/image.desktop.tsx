import * as React from 'react'
import {Props, ReqProps} from './image'

const formatSrcSet = (srcSet: {[mult: string]: string}): string => {
  return Object.keys(srcSet)
    .map(mult => {
      const url = srcSet[mult]
      return `${url} ${mult}x`
    })
    .join(', ')
}

// @ts-ignore clash between StylesCrossPlatform and React.CSSProperties
const RequireImage = ({src, useSrcSet, style}: ReqProps) => (
  <img
    src={src}
    srcSet={useSrcSet ? formatSrcSet(src) : undefined}
    // @ts-ignore TODO fix styles
    style={style}
  />
)
const Image = ({src, style, onDragStart, onLoad}: Props) => (
  <img src={src} style={style} onDragStart={onDragStart} onLoad={onLoad} />
)

export default Image
export {RequireImage}
