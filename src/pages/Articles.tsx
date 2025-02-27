import OneProject from "../components/OneProject"

const articles = [
  { id: "1", title: "Mon premier projet", date: "2023-01-15", summary: "Un résumé de mon premier projet..." },
  { id: "2", title: "Application React", date: "2023-03-22", summary: "Développement d'une application React..." },
  { id: "3", title: "API REST avec Node.js", date: "2023-06-10", summary: "Création d'une API REST complète..." },
]

function Articles() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-6">Mes Articles</h1>
      <p className="text-lg text-muted-foreground mb-8">Découvrez mes derniers articles et projets.</p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <OneProject key={article.id} {...article} />
        ))}
      </div>
    </div>
  )
}

export default Articles

