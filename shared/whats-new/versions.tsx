import * as React from 'react'
import * as Kb from '../common-adapters'
import * as Styles from '../styles'
import {displayTab} from '../constants/settings'
import {keybaseFM} from '../constants/whats-new'
import NewFeatureRow from './new-feature-row'

/* Include images */
/* const S s imageName = require('../images/release/MAJ.MIN.PATCH/name.png') */
const fastUserSwitchingImage = require('../images/releases/4.7.0/fast-user-switching.png')
const fastUserSwitchingImage2x = require('../images/releases/4.7.0/fast-user-switching@2x.png')
const fastUserSwitchingImage3x = require('../images/releases/4.7.0/fast-user-switching@3x.png')
const pinnedMessagesImage = require('../images/releases/4.7.0/pinned-messages.png')
const pinnedMessagesImage2x = require('../images/releases/4.7.0/pinned-messages@2x.png')
const pinnedMessagesImage3x = require('../images/releases/4.7.0/pinned-messages@3x.png')
const darkModeImage = require('../images/releases/4.7.0/dark-mode.png')
const darkModeImage2x = require('../images/releases/4.7.0/dark-mode@2x.png')
const darkModeImage3x = require('../images/releases/4.7.0/dark-mode@3x.png')
const keybaseFMImage = require('../images/releases/4.7.0/keybase-fm.png')
const keybaseFMImage2x = require('../images/releases/4.7.0/keybase-fm@2x.png')
const keybaseFMImage3x = require('../images/releases/4.7.0/keybase-fm@3x.png')

export type VersionProps = {
  seen: boolean
  onNavigate: (props: {
    fromKey?: string
    path: Array<{props?: {}; selected: string}>
    replace?: boolean
  }) => void
  onNavigateExternal: (url: string) => void
}

export const Version = ({children}: {children: React.ReactNode}) => {
  return (
    // Always pass `seen` prop to children of a version to show row-level badging
    <Kb.Box2 direction="vertical" alignItems="flex-start" fullWidth={true}>
      {children}
    </Kb.Box2>
  )
}

export const VersionTitle = ({title}: {title: string}) => (
  <Kb.Box2 direction="vertical" alignItems="flex-start" fullWidth={true}>
    <Kb.Text type="BodySemibold" style={styles.versionTitle}>
      {title}
    </Kb.Text>
  </Kb.Box2>
)

export const Current = ({seen, onNavigate, onNavigateExternal}: VersionProps) => {
  return (
    <Version>
      <NewFeatureRow
        noSeparator={true}
        seen={seen}
        image={{
          1: fastUserSwitchingImage,
          2: fastUserSwitchingImage2x,
          3: fastUserSwitchingImage3x,
        }}
      >
        You can now quickly switch between all your signed in accounts from the user menu.
      </NewFeatureRow>
      <NewFeatureRow
        seen={seen}
        image={{
          1: darkModeImage,
          2: darkModeImage2x,
          3: darkModeImage3x,
        }}
        primaryButtonText="Open display settings"
        onPrimaryButtonClick={() => {
          onNavigate({path: [{props: {}, selected: displayTab}]})
        }}
      >
        Dark mode is here! You can access theme settings under the Display section in Settings.
      </NewFeatureRow>
      <NewFeatureRow
        seen={seen}
        primaryButtonText="Try it"
        onPrimaryButtonClick={() => {
          onNavigate({
            path: [{props: {namespace: 'chat2', title: 'New chat'}, selected: 'chatNewChat'}],
          })
        }}
        secondaryButtonText="Read the doc"
        onSecondaryButtonClick={() => {
          onNavigateExternal('https://keybase.io/docs/chat/phones_and_emails')
        }}
      >
        You can now start a conversation with a phone number or email address.
        {` `}
        <Kb.Emoji allowFontScaling={true} size={Styles.globalMargins.small} emojiName=":phone:" />
      </NewFeatureRow>
      <NewFeatureRow
        seen={seen}
        image={{
          1: pinnedMessagesImage,
          2: pinnedMessagesImage2x,
          3: pinnedMessagesImage3x,
        }}
      >
        Chat admins can now pin messages.
        {` `}
        <Kb.Emoji size={Styles.globalMargins.small} emojiName=":pushpin:" />
      </NewFeatureRow>
      <NewFeatureRow
        seen={seen}
        image={{
          1: keybaseFMImage,
          2: keybaseFMImage2x,
          3: keybaseFMImage3x,
        }}
      >
        Listen to
        {` `}
        <Kb.Icon
          type="iconfont-radio"
          color={Styles.globalColors.black_50}
          boxStyle={styles.inlineIcon}
          sizeType={Styles.isMobile ? 'Small' : 'Default'}
        />
        {` `}
        <Kb.Text type="BodySmallSemibold">{keybaseFM}</Kb.Text>
        {` `}
        to get updates and new features.
      </NewFeatureRow>
    </Version>
  )
}

export const Last = (_: VersionProps) => {
  return (
    <Version>
      <VersionTitle title="Last release" />
    </Version>
  )
}

export const LastLast = (_: VersionProps) => {
  return (
    <Version>
      <VersionTitle title="Last last release" />
    </Version>
  )
}

const styles = Styles.styleSheetCreate(() => ({
  inlineIcon: Styles.platformStyles({
    isElectron: {
      display: 'inline-block',
      marginTop: Styles.globalMargins.xtiny,
    },
  }),
  roundedImage: Styles.platformStyles({
    common: {
      borderColor: Styles.globalColors.grey,
      borderWidth: Styles.globalMargins.xxtiny,
    },
    isElectron: {
      // Pass borderRadius as a number to the image on mobile using collapseStyles
      borderRadius: '100%',
      borderStyle: 'solid',
    },
  }),
  versionTitle: {
    color: Styles.globalColors.black_50,
    marginBottom: Styles.globalMargins.tiny,
    marginTop: Styles.globalMargins.xsmall,
  },
}))
