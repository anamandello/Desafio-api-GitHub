import styled from "styled-components";

export const HomeContainer = styled.section`
  max-width: 54rem;
  width: 100%;
  margin: auto;
  margin-top: -5rem;
  margin-bottom: 5rem;
`

export const ProfileContainer = styled.div`
  background: ${props => props.theme['base-profile']};
  border-radius: 10px;
  display: flex;
  gap: 2rem;
  padding: 2rem;
  

  img {
    padding-left: 0.5rem;
    width: 9.125rem;
    height: 9.125rem;
  }

  div{
    width: 100%;
      div:first-child{
      display: flex;
      justify-content: space-between;

      a{
        display: flex;
        gap: 0.5rem;
        align-self: flex-start;
        text-decoration: none;
        font-size: 0.75rem;
        color: ${props => props.theme['blue']};

        img {
          margin: auto;
          width: 0.75rem;
          height: 0.75rem;
          padding-left: 0;
        }

        &:hover{
          border-bottom: 1px solid ${props => props.theme['blue']};
        }
      }

      h2{
        color: ${props => props.theme['base-title']};
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0.5rem 0;
      }
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis; 
      line-height: 1.6;
      height: 50px;
      margin-bottom: 2rem;
    }
  }
`

export const Socials = styled.div`
  display: flex;
  gap: 2rem;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    img {
      padding-left: 0;
      width: 1.125rem;
      height: 1.125rem;
    }
  
    span {
      color: ${props => props.theme['base-subtitle']};
    }
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  padding: 4.75rem 0;

  div{
    display: flex;
    justify-content: space-between;
  }

  span{
    font-size: 0.875rem;
    color: ${props => props.theme['base-span']};
  }

  input{
    width: 100%;
    padding: 0.75rem 1rem;
    background: ${props => props.theme['base-input']};
    color: ${props => props.theme['base-text']};
    border: 1px solid ${props => props.theme['base-border']};
    border-radius: 6px;

    &::placeholder{
      color: ${props => props.theme['base-label']};
    }
  }
`

export const ContainerPosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 54rem;
  gap: 2rem;

  a{
    text-decoration: none;
    color: ${props => props.theme['base-text']};
  }
`