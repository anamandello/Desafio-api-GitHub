import { PostBody, PostContainer } from "./styles";
import ReactMarkdown from 'react-markdown';
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface Issue {
  id: number;
  title: string;
  body: string;
  number: number;
  updated_at: string;
}

interface IssueProps {
  issue: Issue;
}

export function Post({issue}: IssueProps) {
  const data = Date.parse(issue.updated_at)

  const dateRelativeToNow = formatDistanceToNow(data, {
    locale: ptBR,
    addSuffix: true
  })

  return(
    <PostContainer>
       <div>
         <h2>{issue.title}</h2>
         <span>{dateRelativeToNow}</span>
       </div>
      <PostBody>
        <ReactMarkdown components={{ a: 'span'}}>
          {issue.body}
        </ReactMarkdown>
      </PostBody>
    </PostContainer>
  )
}