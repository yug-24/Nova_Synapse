import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle: string;
  color: string;
  gradient: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  icon: Icon,
  title,
  value,
  subtitle,
  color,
  gradient,
}) => {
  return (
    <div className={`glass-effect rounded-xl p-4 border border-white/20 bg-gradient-to-br ${gradient}`}>
      <div className="flex items-center justify-between mb-3">
        <Icon className={`w-6 h-6 ${color}`} />
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {value}
          </div>
        </div>
      </div>
      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {title}
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        {subtitle}
      </p>
    </div>
  );
};

export default DashboardCard;