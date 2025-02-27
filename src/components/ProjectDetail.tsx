"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import type { Project } from "../types/Project"

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const [project, setProject] = useState<Project | null>(null)
  const [content, setContent] = useState<string>("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return

    // Charger les métadonnées du projet
    fetch("/projects-metadata.json")
      .then((response) => response.json())
      .then((data) => {
        const projectData = data.find((p: Project) => p.slug === slug)
        if (projectData) {
          setProject(projectData)

          // Charger le contenu markdown du projet
          return fetch(`/projects_articles/${slug}.md`)
        }
        throw new Error("Projet non trouvé")
      })
      .then((response) => response.text())
      .then((markdownContent) => {
        // Supprimer le frontmatter du contenu markdown
        const contentWithoutFrontmatter = markdownContent.replace(/---[\s\S]*?---/, "")
        setContent(contentWithoutFrontmatter)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Erreur lors du chargement du projet:", error)
        setLoading(false)
      })
  }, [slug])

  if (loading) {
    return <div className="loading">Chargement du projet...</div>
  }

  if (!project) {
    return <div className="error">Projet non trouvé</div>
  }

  return (
    <div className="container">
      <Link to="/" className="back-link">
        ← Retour aux projets
      </Link>

      <article className="project-detail">
        <div className="project-header">
          <h1>{project.title}</h1>
          <div className="project-meta">
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <time className="project-date">{new Date(project.date).toLocaleDateString()}</time>
          </div>
        </div>

        <div className="markdown-content">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </article>
    </div>
  )
}

export default ProjectDetail

