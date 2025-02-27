import ProjectList from "../components/ProjectList";

function Projects() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-6">Mes Projets</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Découvrez les projets sur lesquels j'ai travaillé.
      </p>
      {/* Ici, vous pouvez ajouter une liste ou une grille de vos projets */}
      <ProjectList />
    </div>
  );
}

export default Projects;
