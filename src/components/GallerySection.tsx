
import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

const images = [
  {
    id: 1,
    src: "/lovable-uploads/129c4ef6-5988-46a6-8c6d-8b2f583a6b0e.png",
    alt: "Statue of God full body shot",
  },
  {
    id: 2,
    src: "/lovable-uploads/07930635-2da6-4543-92b0-3ebab95038f5.png",
    alt: "Statue of God closeup with glowing eyes",
  },
  {
    id: 3,
    src: "/lovable-uploads/bf7ed56a-ec4b-4634-a5ad-d977ee2387d4.png",
    alt: "Statue of God with other cosplayers",
  },
  {
    id: 4,
    src: "/lovable-uploads/16e3090f-52e6-4d7e-b2bc-3ed1d53c24d0.png",
    alt: "Statute of God with female cosplayer",
  },
  {
    id: 5,
    src: "/lovable-uploads/65337eaa-23bb-4c77-a827-3ff8fd7e4c84.png",
    alt: "Solo Leveling manga art reference",
  },
  {
    id: 6,
    src: "/lovable-uploads/0fdbd20d-134d-480a-bae7-fc7317abb830.png",
    alt: "Solo Leveling official art",
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<(typeof images)[0] | null>(null);

  return (
    <section id="gallery" className="py-20 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-solo-dark to-transparent opacity-70"></div>
      <div className="absolute top-40 -left-40 w-80 h-80 bg-solo-red/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 -right-40 w-80 h-80 bg-solo-purple/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold red-gradient inline-block mb-4">GALLERY</h2>
          <div className="w-20 h-1 bg-solo-red mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">Explore my Statue of God cosplay from Solo Leveling, featuring hand-crafted details and LED lighting effects.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <Card key={image.id} className="glass-card border-white/10 overflow-hidden group cursor-pointer" onClick={() => setSelectedImage(image)}>
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Image modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-black/95 border border-white/10 p-0">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 bg-black/50 text-white rounded-full p-1"
            aria-label="Close dialog"
          >
            <X className="h-6 w-6" />
          </button>
          {selectedImage && (
            <div className="relative w-full h-full max-h-[80vh]">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
