import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    iconSwitch: string

    colors: {
      backgroundColor: string
      backgroundColorSearch: string
      text: string
      textHeader: string
      primary: string
      secondary: string
    }
  }
}
