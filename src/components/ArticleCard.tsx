import { Link } from "react-router-dom";
import { Article } from "../types/Article";

interface ArticleCardProps {
  Article: Article;
}

const ArticleCard = ({ Article }: ArticleCardProps) => {
  const { slug, title, description, date, tags } = Article;

  return (
    <Link to={`/articles/${slug}`} className="card-link">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">{title}</h2>
          <p className="card-date">{new Date(date).toLocaleDateString()}</p>
        </div>
        <div className="card-content">
          <p className="card-description">{description}</p>
        </div>
        <div className="card-footer">
          <div className="card-tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="card-link-text">
            Voir le projet <span className="arrow-icon">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
