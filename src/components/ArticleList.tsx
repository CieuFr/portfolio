"use client";

import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import type { Article } from "../types/Article";

const ArticleList = () => {
  const [Articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Charger les métadonnées des projets
    fetch("/articles-metadata.json")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des projets:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Chargement des articles...</div>;
  }

  return (
    <div className="container">
      <div className="project-grid">
        {Articles.map((Article) => (
          <ArticleCard key={Article.slug} Article={Article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
