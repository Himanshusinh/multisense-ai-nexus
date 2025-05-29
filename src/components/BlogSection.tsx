
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";

export const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Retail: How CartX is Revolutionizing Shopping",
      excerpt: "Discover how smart retail technology is transforming the customer experience and streamlining operations.",
      author: "Dr. Sarah Chen",
      date: "May 15, 2024",
      readTime: "5 min read",
      category: "AI Innovation"
    },
    {
      title: "Maximizing ROI with AI-Powered Appointment Scheduling",
      excerpt: "Learn how AppointX's intelligent scheduling algorithms can boost your business efficiency by up to 40%.",
      author: "Michael Rodriguez",
      date: "May 10, 2024",
      readTime: "3 min read",
      category: "Business Solutions"
    },
    {
      title: "Creative AI: The Next Frontier in Content Generation",
      excerpt: "Exploring how WildMind AI is pushing the boundaries of machine creativity and content strategy.",
      author: "Alex Thompson",
      date: "May 8, 2024",
      readTime: "7 min read",
      category: "Technology"
    }
  ];

  return (
    <section id="blog" className="py-20 px-4 bg-slate-900/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Latest Insights
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Stay updated with the latest trends in AI, industry insights, and expert analysis from our team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.title}
              className="bg-slate-800/50 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group hover:scale-105 backdrop-blur-sm"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between text-sm text-slate-400 mb-3">
                  <span className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-slate-300 leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-blue-500/50 text-blue-400 hover:bg-blue-500/10 group"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-lg px-8 py-6"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};
