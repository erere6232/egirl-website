import { Linkedin, Twitter, Github } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  avatar: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const TeamMember = ({ name, role, description, avatar, socialLinks }: TeamMemberProps) => {
  return (
    <div className="card group hover:scale-105 transition-all duration-300">
      <div className="flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="relative mb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-egirl-pink/30 group-hover:border-egirl-pink transition-colors">
            <img
              src={avatar}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-egirl-pink to-egirl-purple rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">👑</span>
          </div>
        </div>

        {/* Name and Role */}
        <h3 className="text-white font-bold text-xl mb-2">{name}</h3>
        <p className="text-egirl-pink font-semibold text-lg mb-4">{role}</p>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Social Links */}
        {socialLinks && (
          <div className="flex space-x-4">
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            )}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
