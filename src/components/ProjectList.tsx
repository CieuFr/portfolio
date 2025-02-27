"use client"

import { useState, useEffect } from "react"
import ProjectCard from "./ProjectCard"
import type { Project } from "../types/Project"

const ProjectList = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Charger les métadonnées des projets
    fetch("/projects-metadata.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des projets:", error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div className="loading">Chargement des projets...</div>
  }

  return (
    <div className="container">
      <h1>Mes Projets</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectList

