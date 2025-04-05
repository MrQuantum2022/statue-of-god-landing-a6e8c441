
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-solo-dark to-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-solo-red/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-solo-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold blue-gradient inline-block mb-4">BEHIND THE MASK</h2>
          <div className="w-20 h-1 bg-solo-teal mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Card className="glass-card border-solo-teal/20 shadow-xl shadow-solo-teal/5 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-[500px] w-full overflow-hidden">
                  <img 
                    src="/lovable-uploads/882980a7-b7b8-4f1d-8b99-aa4b71766a95.png" 
                    alt="Statue of God Cosplay" 
                    className="w-full h-full object-cover object-center transform transition-transform hover:scale-105 duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">Bringing Solo Leveling's<br/><span className="text-solo-red">Statue of God</span> to Life</h3>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                I'm Tushar, a professional cosplayer specializing in bringing characters from anime and gaming to life with meticulous attention to detail and craftsmanship.
              </p>
              <p className="text-gray-300 mb-4">
                My Statue of God cosplay from Solo Leveling represents the pinnacle of my work, featuring hand-crafted elements, LED lighting effects, and screen-accurate details that capture the ominous presence of this iconic character.
              </p>
              <p className="text-gray-300 mb-4">
                Each costume I create is built with performance in mind, combining comfort with dramatic visual impact perfect for conventions, photoshoots, and special events.
              </p>
            </div>
            <div className="mt-6 flex items-center">
              <a href="https://www.instagram.com/digitally__artistic_/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-solo-teal transition-colors text-sm">@digitally__artistic_</a>
              <span className="mx-2 text-gray-500">•</span>
              <span className="text-gray-400 text-sm">Professional Cosplayer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
