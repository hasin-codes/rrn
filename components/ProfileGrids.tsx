import ProfileCard from './ProfileCard';

// Mock data for the grids
const adminData = {
  name: "Admin",
  role: "Administrator", 
  description: "System administrator with full access to all features and user management capabilities.",
  image: "/ui/admin.jpg",
  isAdmin: true
};

const executivesData = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    description: "Visionary leader with 15+ years in sports management and community building.",
    image: "/ui/admin.jpg",
    isAdmin: true
  },
  {
    name: "Mike Chen", 
    role: "CTO",
    description: "Technology innovator passionate about creating seamless digital experiences.",
    image: "/ui/admin.jpg",
    isAdmin: true
  },
  {
    name: "Emily Rodriguez",
    role: "COO", 
    description: "Operations expert focused on scaling community impact and member satisfaction.",
    image: "/ui/admin.jpg",
    isAdmin: true
  },
  {
    name: "David Kim",
    role: "CFO",
    description: "Financial strategist ensuring sustainable growth and community investment.",
    image: "/ui/admin.jpg", 
    isAdmin: true
  },
  {
    name: "Lisa Thompson",
    role: "CMO",
    description: "Marketing visionary building brand awareness and community engagement.",
    image: "/ui/admin.jpg",
    isAdmin: true
  }
];

// Generate 9 executives for 3x3 grid
const generateExecutives = () => {
  const roles = ["Founder", "Creative Director", "Operations Manager", "Product Designer", "UX Researcher", "Strategy Lead", "Developer Lead", "Community Manager", "Head Coach"];
  const names = ["Darlene Robertson", "Albert Flores", "Ronald Richards", "Dianne Russell", "Courtney Henry", "Kristin Watson", "Brooklyn Simmons", "Jacob Jones", "Guy Hawkins"];
  
  return Array.from({ length: 9 }, (_, index) => ({
    name: names[index],
    role: roles[index],
    description: `Experienced professional with expertise in ${roles[index].toLowerCase()} and community leadership.`,
    image: "/ui/admin.jpg",
    isAdmin: true
  }));
};

const allExecutives = generateExecutives();

export default function ProfileGrids() {
  return (
    <div className="w-full space-y-12 p-6">
      {/* Cyan Admin Label Square */}
      <div className="flex justify-center">
        <div className="w-32 h-32 bg-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl">
          <div className="text-center">
            <div className="text-white text-2xl font-bold">ADMIN</div>
            <div className="text-cyan-100 text-sm mt-1">System Access</div>
          </div>
        </div>
      </div>

      {/* 3x1 Grid - Top Row */}
      <div className="w-full">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {executivesData.slice(0, 3).map((executive, index) => (
            <div key={index} className="w-full">
              <ProfileCard
                name={executive.name}
                role={executive.role}
                description={executive.description}
                image={executive.image}
                isAdmin={executive.isAdmin}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 3x3 Grid - Executive Team */}
      <div className="w-full">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {allExecutives.map((executive, index) => (
            <div key={index} className="w-full">
              <ProfileCard
                name={executive.name}
                role={executive.role}
                description={executive.description}
                image={executive.image}
                isAdmin={executive.isAdmin}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
