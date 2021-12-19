import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    iconSwitch: string

    colors: {
      backgroundColor: string
      backgroundColorContent: string
      text: string
      textHeader: string
      primary: string
      secondary: string

      backgroundColorTopics: string
      backgroundColorHoverTopics: string
      textTopics: string
      textHoverTopics: string
    }
  }
}
