import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  service: {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = service.icon;
  
  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card">
      <CardHeader>
        <div className="h-14 w-14 rounded-lg bg-gradient-primary p-3 mb-4">
          <Icon className="h-full w-full text-primary-foreground" />
        </div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
        <CardDescription className="text-base">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;