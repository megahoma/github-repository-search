import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;
  z-index: 100;
`
export const LoaderImg = styled.img`
  height: 40vmin;
  display: block;
  margin: 0 auto 0 auto;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-loader-spin infinite 10s linear;
  }

  @keyframes App-loader-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
