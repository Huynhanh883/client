import * as React from 'react'
import {StylesCrossPlatform} from '../styles'

type ResizeMode = 'contain' | 'cover' | 'stretch' | 'center' | 'repeat'
export type Props = {
  src: string
  style?: any
  // desktop-only: transform src prop into srcSet for @2x @3x images
  useSrcSet?: boolean
  onDragStart?: (e: React.SyntheticEvent) => void
  onLoad?: (e: React.BaseSyntheticEvent) => void
  resizeMode?: ResizeMode
}

export type ReqProps = {
  src: any
  style?: StylesCrossPlatform | null
  resizeMode?: ResizeMode
}

export declare function srcToSrcSet(src: string): string

export default class Image extends React.Component<Props> {}
// Can accept require()
export class RequireImage extends React.Component<ReqProps> {}
