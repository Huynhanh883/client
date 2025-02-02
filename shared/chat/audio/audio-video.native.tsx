import * as React from 'react'
import RNVideo from 'react-native-video'
import {Props} from './audio-video'

class AudioVideo extends React.Component<Props> {
  private vidRef = React.createRef<RNVideo>()
  seek = (seconds: number) => {
    if (this.vidRef.current) {
      this.vidRef.current.seek(seconds)
    }
  }
  render() {
    return (
      <RNVideo
        ref={this.vidRef}
        source={{uri: this.props.url}}
        style={{height: 0, width: 0}}
        paused={this.props.paused}
      />
    )
  }
}

export default AudioVideo
