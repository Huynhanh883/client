import * as React from 'react'
import {StylesCrossPlatform} from '../styles'

type ResizeMode = 'contain' | 'cover' | 'stretch' | 'center' | 'repeat'
type SrcSetSizes = '1' | '2' | '3'

export type Props = {
  src: string
  style?: any
  onDragStart?: (e: React.SyntheticEvent) => void
  onLoad?: (e: React.BaseSyntheticEvent) => void
  resizeMode?: ResizeMode
}

export type ReqProps = {
  src: string | {[mult: string]: string}
  style?: StylesCrossPlatform | null
  resizeMode?: ResizeMode
  useSrcSet?: boolean
}

export default class Image extends React.Component<Props> {}
// Can accept require()
export class RequireImage extends React.Component<ReqProps> {}
