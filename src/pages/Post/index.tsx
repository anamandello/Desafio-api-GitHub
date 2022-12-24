import { ContentPost, InfoPost, PostContainer, Socials } from "./styles";
import redirect from './../../assets/Icons/redirect.svg'
import back from './../../assets/Icons/back.svg'
import username from './../../assets/Icons/username.svg'
import date from './../../assets/Icons/date.svg'
import comments from './../../assets/Icons/comments.svg'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import ReactMarkdown from 'react-markdown'
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface user {
  login?: string;
}

interface post {
  title: string;
  body: string;
  html_url: string;
  updated_at: string;
  comments: number;
  user?: user;
}

export function Post(){
  const { idIssue } = useParams();
  const [ post, setPost ] = useState({} as post);
  const [ data, setData ] = useState<string>()

  const getPost = async () => {
    const response = await api.get(`/repos/anamandello/Desafio-api-Github/issues/${idIssue}`)
    setPost(response.data)

    const data = Date.parse(response.data.updated_at)

    const dateRelativeToNow = formatDistanceToNow(data, {
      locale: ptBR,
      addSuffix: true
    })

    setData(dateRelativeToNow)
  }
 
  useEffect(() => {
    getPost()
  }, []) 

  return (
    <PostContainer>
      <InfoPost>
        <div>
          <Link to={'/'}>
            <img src={back} alt="" />
            <span>Voltar</span>  
          </Link>
          <a href={post.html_url}>
            <span>Ver no github</span>  
            <img src={redirect} alt="" />
          </a>
        </div>
        <h1>{post.title}</h1>
        <Socials>
          <div>
            <img src={username} alt="" />
            <span>{post?.user?.login}</span>
          </div>
          <div>
            <img src={date} alt="" />
            <span>{data}</span>
          </div>
          <div>
            <img src={comments} alt="" />
            <span>{post.comments} comentários</span>
          </div>
        </Socials>
      </InfoPost>
      <ContentPost>
        <ReactMarkdown>
          {post.body}
        </ReactMarkdown>
      </ContentPost>
    </PostContainer>
  )
}