
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, Scissors, Users } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Cosplay Photoshoots",
    description: "Professional photoshoots featuring my Statue of God or other character cosplays. Perfect for promotional materials, conventions, or special events.",
    icon: User,
    color: "text-solo-red",
    borderColor: "border-solo-red/20",
    shadowColor: "shadow-solo-red/5",
  },
  {
    id: 2,
    title: "Cosplay Workshops",
    description: "Learn the art of cosplay creation, from pattern-making to prop building. Workshops can be customized for beginners or advanced cosplayers.",
    icon: Calendar,
    color: "text-solo-teal",
    borderColor: "border-solo-teal/20",
    shadowColor: "shadow-solo-teal/5",
  },
  {
    id: 3,
    title: "Custom Costume Creation",
    description: "Commission custom cosplay pieces or full costumes, built with attention to detail and screen-accurate references.",
    icon: Scissors,
    color: "text-solo-purple",
    borderColor: "border-solo-purple/20",
    shadowColor: "shadow-solo-purple/5",
  },
  {
    id: 4,
    title: "Event Appearances",
    description: "Book the Statue of God or other character cosplays for conventions, parties, store openings, or special events to create a memorable experience.",
    icon: Users,
    color: "text-solo-blue",
    borderColor: "border-solo-blue/20",
    shadowColor: "shadow-solo-blue/5",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-solo-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-solo-magenta/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold blue-gradient inline-block mb-4">SERVICES</h2>
          <div className="w-20 h-1 bg-solo-teal mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">Professional cosplay services tailored to your needs.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Card key={service.id} className={`glass-card ${service.borderColor} ${service.shadowColor} hover:shadow-lg transition-shadow duration-300`}>
              <CardHeader>
                <div className={`${service.color} mb-4`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-display text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            All services can be customized to meet your specific requirements. Contact me to discuss your project and get a personalized quote.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-solo-red hover:bg-solo-red/80 text-white font-medium rounded-md transition-colors shadow-lg shadow-solo-red/20"
          >
            Book a Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
