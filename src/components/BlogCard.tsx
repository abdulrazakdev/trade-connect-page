import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <div className="flex items-center gap-4 mb-2">
          <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer">
          {post.title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;