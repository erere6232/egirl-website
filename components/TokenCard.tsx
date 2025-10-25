import { Copy, ExternalLink, TrendingUp, Users, DollarSign } from 'lucide-react';
import { useState } from 'react';

interface TokenCardProps {
  title: string;
  value: string;
  icon: React.ComponentType<any>;
  description?: string;
  isClickable?: boolean;
  onClick?: () => void;
}

const TokenCard = ({ title, value, icon: Icon, description, isClickable, onClick }: TokenCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (value.includes('0x')) {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      className={`card hover:scale-105 transition-all duration-300 cursor-pointer group ${
        isClickable ? 'hover:shadow-egirl-pink/30' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-egirl-pink to-egirl-purple rounded-full flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        {isClickable && (
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-egirl-pink transition-colors" />
        )}
      </div>
      
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      
      <div className="flex items-center justify-between">
        <p className="text-egirl-pink font-bold text-xl">
          {value}
        </p>
        {value.includes('0x') && (
          <button
            onClick={handleCopy}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            title="Copy contract address"
          >
            <Copy className="w-4 h-4 text-gray-400 hover:text-egirl-pink" />
          </button>
        )}
      </div>
      
      {description && (
        <p className="text-gray-300 text-sm mt-2">{description}</p>
      )}
      
      {copied && (
        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
          Copied!
        </div>
      )}
    </div>
  );
};

export default TokenCard;
