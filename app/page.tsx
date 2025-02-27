import Layout from "@/components/layout"

export default function Home() {
  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-6">Bienvenue sur mon Portfolio</h1>
        <p className="text-lg text-muted-foreground">Découvrez mes projets, mon parcours et mes articles.</p>
      </div>
    </Layout>
  )
}

