import { ContainerPosts, FormContainer, HomeContainer, ProfileContainer, Socials } from "./styles"
import company from '../../assets/Icons/company.svg'
import followers from '../../assets/Icons/followers.svg'
import username from './../../assets/Icons/username.svg'
import redirect from './../../assets/Icons/redirect.svg'
import { Post } from "./Post"
import { useEffect, useState } from "react"
import { api } from "../../lib/axios"
import { Link } from "react-router-dom"

interface User {
  login: string;
  id: number;
  avatar_url: string;
  company: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  html_url: string;
}

interface Issue {
  id: number;
  title: string;
  body: string;
  number: number;
  updated_at: string;
}

export function Home() {
  const [user, setUser] = useState<User>()
  const [issue, setIssue] = useState<Issue[]>([])
  const [search, setSearch] = useState<string>('')

  const getUser = async () => {
    const result = await api.get('/users/anamandello')
    setUser(result.data)
  } 

  const getIssues = async (value?: string) => {
      let result
      result = await api.get('/search/issues',{
        params: {
          q: `${value ? value : ''}repo:anamandello/Desafio-api-Github`
        }
      })
      setIssue(result.data.items)
  }

  useEffect(() => {
    getUser()
    getIssues()
  }, [])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value)
    getIssues(value)
  }

  return(
    <HomeContainer>
      <ProfileContainer>
        <img src={user?.avatar_url} alt="" />
        <div>
          <div>
            <h2>{user?.name}</h2>
            <a href={user?.html_url}>
              <span>GITHUB</span>
              <img src={redirect} alt=""/>
            </a>
          </div>
          <p>{user?.bio}</p>
          <Socials>
            <p>
              <img src={username} alt="" />
              <span>{user?.login}</span>
            </p>
            <p>
              <img src={company} alt="" />
              <span>{user?.company}</span>
            </p>
            <p>
              <img src={followers} alt="" />
              <span>{user?.followers} seguidores</span>
            </p> 
          </Socials>
        </div>
      </ProfileContainer>
      
      <FormContainer onSubmit={(e) => e.preventDefault()}>
        <div>
          <h3>Publicações</h3>
          <span>{issue.length} publicações</span>
        </div>

        <input type="text" placeholder="Buscar conteúdo" value={search} onChange={handleSearch}/>
      </FormContainer>

      <ContainerPosts>
        {issue.map((item) => {
          return(
            <Link key={item.id} to={`post/${item.number}`}>
              <Post issue={item}/>
            </Link>
          )
        })}
      </ContainerPosts>
    </HomeContainer>
  )
}