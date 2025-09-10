import { ProfileCard } from "./ProfileCard";


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

// Real admin data
const adminTeam = [
  { name: "A R Khan Bappy", role: "Admin" },
  { name: "Hamidur Rahman Rupom", role: "Admin" },
  { name: "Md. Tanzil Hasan Rafi", role: "Admin" },
  { name: "Khalid Mahmood", role: "Admin" },
  { name: "Moontasir Zaman Piyas", role: "Admin" }
];

// Real team member data
const teamMembers = [
  { name: "Abdullah Bin Jafor", role: "Team" },
  { name: "Afnan Osman Polin", role: "Team" },
  { name: "Dewan Shopneel Shakhir", role: "Team" },
  { name: "Farhan Shariar", role: "Team" },
  { name: "Hasin Raiyan", role: "Team" },
  { name: "Mahir Sarowar Megh", role: "Team" },
  { name: "Md Abu Eusuf", role: "Team" },
  { name: "Md Al Hossain Mukib", role: "Team" },
  { name: "Md Emran Hossain", role: "Team" },
  { name: "Md Kawser Alam", role: "Team" },
  { name: "Md. Akram Hoshen", role: "Team" },
  { name: "MD. Al-Amin Miah", role: "Team" },
  { name: "MD. ASRAFUL HAQUE", role: "Team" },
  { name: "Md. Atiqur Rahman", role: "Team" },
  { name: "Md. Nafizur Alam", role: "Team" },
  { name: "Minhajul Islam Antor", role: "Team" },
  { name: "S. M. SHAHRIAR HOSSAIN", role: "Team" },
  { name: "Saifullah Al-Mahmud Hossainy", role: "Team" },
  { name: "Sajidur Rahman Ridwan", role: "Team" },
  { name: "Samir Hossain", role: "Team" },
  { name: "Shadman Ahmad Abeer", role: "Team" },
  { name: "Shaon Sikder Sunny", role: "Team" },
  { name: "Sheikh Shahriar", role: "Team" }
];

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

      {/* Admin Team Grid */}
      <div className="w-full">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Admin Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {adminTeam.map((member, index) => (
            <div key={index} className="w-full">
              <ProfileCard
                name={member.name}
                role={member.role}
                description=""
                image="/ui/admin.jpg"
                isAdmin={true}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Team Members Grid - 3 Column Grid */}
      <div className="w-full">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full">
              <ProfileCard
                name={member.name}
                role={member.role}
                description=""
                image="/ui/admin.jpg"
                isAdmin={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
