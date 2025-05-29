
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Lightbulb, Globe } from "lucide-react";

export const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to solving real-world problems through innovative AI solutions."
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Every solution we create puts the user experience at the forefront of design."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible with artificial intelligence."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our solutions are designed to create positive change across industries worldwide."
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
              About Multisence AI
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
              <p>
                At Multisence AI, we believe that artificial intelligence should be intuitive, 
                accessible, and transformative. Founded with a vision to bridge the gap between 
                complex AI technology and practical business solutions, we've dedicated ourselves 
                to creating tools that genuinely make a difference.
              </p>
              <p>
                Our team of AI experts, designers, and engineers work tirelessly to develop 
                solutions that not only leverage the latest in machine learning and artificial 
                intelligence but also prioritize user experience and real-world applicability.
              </p>
              <p>
                From smart retail solutions to creative AI platforms, every product we build 
                reflects our commitment to innovation, quality, and the belief that technology 
                should serve humanity's greatest challenges.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-normal text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-light text-gray-900 mb-8">Our Vision</h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            To create a future where artificial intelligence seamlessly integrates into everyday life, 
            empowering businesses and individuals to achieve more than they ever thought possible. 
            We envision a world where AI doesn't replace human creativity and intuition, but amplifies it.
          </p>
        </div>
      </div>
    </section>
  );
};
