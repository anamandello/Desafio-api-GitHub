import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme['base-post']};
  border-radius: 10px;
  width: 416px;
  padding: 2rem;
  gap: 1.125rem;
  height: 16.25rem;
  border: 2px solid transparent;

  &:hover{
    border: 2px solid ${props => props.theme['base-border']};
  }

  div{
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    h2{
      color: ${props => props.theme['base-title']};
      font-size: 1.25rem;
      font-weight: bold;
      line-height: 1.6;
    }

    span{
      color: ${props => props.theme['base-span']};
      font-size: 0.875rem;
      flex-shrink: 0;
    }
  }
`

export const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-overflow: ellipsis; 
  line-height: 1.6;

  a{
    text-decoration: none;
  }
`