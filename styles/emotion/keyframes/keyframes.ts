import { keyframes } from '@emotion/react'

const _keyframes = {
  fadeIn: keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
  `,
  fadeOut: keyframes`
    from {
        opacity: 1;
    }
    to{
        opacity: 0;
    }`,
}

export default _keyframes
