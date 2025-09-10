import { ProfileCard } from './ProfileCard';

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
    <div className="w-full space-y-8 sm:space-y-12 p-2 sm:p-4 lg:p-6">
      {/* Admin Team Grid */}
      <div className="w-full">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-800 px-4">
          Admin Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {adminTeam.map((member, index) => (
            <div key={index} className="w-full max-w-sm mx-auto">
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

      {/* Team Members Grid */}
      <div className="w-full">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-800 px-4">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full max-w-sm mx-auto">
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