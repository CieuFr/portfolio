import { Link } from "react-router-dom"

interface OneProjectProps {
  id: string
  title: string
  date: string
  summary: string
}

function OneProject({ id, title, date, summary }: OneProjectProps) {
  return (
    <Link to={`/articles/${id}`} className="block">
      <div className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{date}</p>
        <p className="text-muted-foreground">{summary}</p>
      </div>
    </Link>
  )
}

export default OneProject

