
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="service-card bg-white group">
      <div className="mb-6 text-primary transition-transform duration-300 transform group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-foreground/70">{description}</p>
      
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-primary/10 border-l-[40px] border-l-transparent transform origin-top-right transition-all duration-300 group-hover:border-t-primary/20"></div>
    </div>
  );
};

export default ServiceCard;
