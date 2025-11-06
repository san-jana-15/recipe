import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import movieImage from '@/assets/project-movie.jpg';
import memoryImage from '@/assets/project-memory.jpg';
import travelImage from '@/assets/project-travel.jpg';

interface Project {
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Movie Search App',
      description:
        'A sleek movie search app that lets users instantly find films by title and view key details like ratings, release year, and plot.',
      image: movieImage,
      liveUrl: 'https://dynamic-maamoul-4703af.netlify.app/',
      githubUrl: 'https://github.com/san-jana-15/moviessearchapp',
    },
    {
      title: 'Memory Game',
      description:
        'A fun, player-friendly matching game where you flip cards and test your visual memory. Sharpen your recall skills by finding all the matching pairs as quickly as possible.',
      image: memoryImage,
      liveUrl: 'https://memory-game-mini.netlify.app/',
      githubUrl: 'https://github.com/san-jana-15/memory-game',
    },
    {
      title: 'Trabook Landing Page',
      description:
        'A modern landing page for a travel company named Trabook, featuring beautiful destination imagery and engaging travel content.',
      image: travelImage,
      liveUrl: 'https://shimmering-kheer-879f95.netlify.app/',
      githubUrl: 'https://github.com/san-jana-15/fsd',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="default"
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
