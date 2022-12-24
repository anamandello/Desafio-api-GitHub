import styled from "styled-components";

export const PostContainer = styled.section`
  max-width: 54rem;
  margin: auto;
  margin-top: -5rem;
`

export const InfoPost = styled.div`
  background: ${props => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem;

  div:first-child {
    display: flex;
    justify-content: space-between;
    
    a{
      text-transform: uppercase;
      text-decoration: none;
      color: ${props => props.theme['blue']};
      display: flex;
      gap: 0.5rem;
      font-size: 0.75rem;
      border-bottom: 1px solid transparent;

      img{
        width: 0.75rem;
      }

      &:hover{
        border-bottom: 1px solid ${props => props.theme['blue']};
      }
    }
  }

  h1{
    color: ${props => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 1.125rem;
  }
`

export const Socials = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 0.5rem;

  div{
    display: flex;
    gap: 0.5rem;
    color: ${props => props.theme['base-span']};
  }
`

export const ContentPost = styled.section`
  padding: 2.5rem 2rem;
  line-height: 1.6rem;

  h3{
    font-size: 1.375rem;
    margin: 1rem 0;
  }

  a{
    text-decoration: none;
    color: ${props => props.theme['blue']};

    &:hover{
      border-bottom: 1px solid ${props => props.theme['blue']};
    }
  }

  blockquote{
    margin: 2.5rem 0;
    padding: 1rem;
    background: ${props => props.theme['base-post']};
    border-radius: 2px;
    line-height: 1.6;
    font-family: 'Fira Code';
  };
`
