declare module 'animated-backgrounds' {
  import { FC } from 'react'

  export interface AnimatedBackgroundOptions {
    animationName?: string
  }

  export const AnimatedBackground: FC<AnimatedBackgroundOptions>
}
