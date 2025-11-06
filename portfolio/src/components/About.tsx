import { Code2, Sparkles, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient code is my priority',
    },
    {
      icon: Sparkles,
      title: 'Modern Tech',
      description: 'Always exploring cutting-edge web technologies',
    },
    {
      icon: Heart,
      title: 'User-Focused',
      description: 'Creating intuitive, user-friendly experiences',
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full" />
          
          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
            I'm a passionate web developer with a strong foundation in HTML, CSS, JavaScript, and React. 
            I enjoy turning ideas into interactive and user-friendly websites. With a background in computer 
            science and hands-on experience building projects like e-commerce platforms, movie search apps, 
            and management systems, I'm constantly exploring new technologies to sharpen my skills and 
            deliver clean, efficient code.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
