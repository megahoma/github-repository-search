import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  right: 8px;
  bottom: 8px;
  margin-top: 16px;

  border-radius: 4px;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
  background-color: ${(props) => props.color};
  color: #fff;
  font-size: 0.875rem;

  transform: translateY(150%);
  animation: ani 1s forwards;
  @keyframes ani {
    0% {
      transform: translateY(150%);
    }
    100% {
      transform: translateY(0);
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 6px 16px;
`

export const Icon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  padding: 7px 0;
  background-image: url(${(props) => props.color});
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.9;
`
export const Message = styled.div`
  padding: 8px 5px 8px 0;
`
