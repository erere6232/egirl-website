import { Calendar, CheckCircle, Clock, Target } from 'lucide-react';

interface RoadmapItemProps {
  phase: string;
  time: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
  icon?: React.ComponentType<any>;
}

const RoadmapItem = ({ phase, time, title, description, status, icon: Icon }: RoadmapItemProps) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-400" />;
      case 'current':
        return <Clock className="w-6 h-6 text-egirl-pink animate-pulse" />;
      case 'upcoming':
        return <Target className="w-6 h-6 text-gray-400" />;
      default:
        return <Calendar className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'completed':
        return 'border-green-400 bg-green-400/10';
      case 'current':
        return 'border-egirl-pink bg-egirl-pink/10';
      case 'upcoming':
        return 'border-gray-400 bg-gray-400/10';
      default:
        return 'border-gray-400 bg-gray-400/10';
    }
  };

  return (
    <div className={`relative p-6 rounded-2xl border-2 ${getStatusColor()} transition-all duration-300 hover:scale-105`}>
      <div className="flex items-start space-x-4">
        {/* Status Icon */}
        <div className="flex-shrink-0">
          {getStatusIcon()}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-egirl-pink font-bold text-lg">{phase}</span>
            <span className="text-gray-300 text-sm bg-white/10 px-3 py-1 rounded-full">
              {time}
            </span>
          </div>
          
          <h3 className="text-white font-semibold text-xl mb-3">{title}</h3>
          
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>

        {/* Custom Icon */}
        {Icon && (
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-r from-egirl-pink to-egirl-purple rounded-full flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
        )}
      </div>

      {/* Status Badge */}
      <div className="absolute top-4 right-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          status === 'completed' ? 'bg-green-400/20 text-green-300' :
          status === 'current' ? 'bg-egirl-pink/20 text-egirl-pink' :
          'bg-gray-400/20 text-gray-300'
        }`}>
          {status === 'completed' ? 'Completed' :
           status === 'current' ? 'In Progress' : 'Upcoming'}
        </span>
      </div>
    </div>
  );
};

export default RoadmapItem;
