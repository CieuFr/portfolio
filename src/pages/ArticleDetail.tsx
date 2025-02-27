import { useParams } from "react-router-dom"

// Simulons une base de données d'articles
const articlesData = {
  "1": { title: "Mon premier projet", date: "2023-01-15", content: "Contenu détaillé du premier projet..." },
  "2": {
    title: "Application React",
    date: "2023-03-22",
    content: "Détails sur le développement de l'application React...",
  },
  "3": { title: "API REST avec Node.js", date: "2023-06-10", content: "Explications sur la création de l'API REST..." },
}

function ArticleDetail() {
  const { id } = useParams<{ id: string }>()
  const article = articlesData[id as keyof typeof articlesData]

  if (!article) {
    return <div>Article non trouvé</div>
  }

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-muted-foreground mb-8">Publié le {article.date}</p>
      <div className="prose max-w-none">
        <p>{article.content}</p>
      </div>
    </div>
  )
}

export default ArticleDetail

