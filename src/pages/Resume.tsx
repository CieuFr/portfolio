import { GraduationCap, Briefcase } from "lucide-react";

function Resume() {
  return (
    <div className="py-12 space-y-12">
      <div className="flex items-center space-x-4">
        <img
          src="/placeholder.svg?height=150&width=150"
          alt="Profile"
          className="rounded-full w-32 h-32"
        />
        <div>
          <h1 className="text-4xl font-bold mb-2">John Doe</h1>
          <p className="text-xl text-muted-foreground">
            Développeur Web Full Stack
          </p>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold flex items-center">
          <Briefcase className="mr-2" />
          Expériences Professionnelles
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium">
              Développeur Senior - TechCorp
            </h3>
            <p className="text-muted-foreground">2018 - Présent</p>
            <p>
              Développement d'applications web complexes utilisant React et
              Node.js.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium">
              Développeur Junior - WebStudio
            </h3>
            <p className="text-muted-foreground">2015 - 2018</p>
            <p>Création de sites web responsives pour divers clients.</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold flex items-center">
          <GraduationCap className="mr-2" />
          Formation
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium">
              Master en Informatique - Université de Technologie
            </h3>
            <p className="text-muted-foreground">2013 - 2015</p>
          </div>
          <div>
            <h3 className="text-xl font-medium">
              Licence en Informatique - Université de Sciences
            </h3>
            <p className="text-muted-foreground">2010 - 2013</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
