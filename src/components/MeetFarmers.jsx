import FarmerCard from "./FarmCard";

const farmers = [
  {
    Name: "Effie Thiancy",
    role: "farmer",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
  },
  {
    Name: "Jessica Brown",
    role: "farmer",
    image: "https://images.pexels.com/photos/3777564/pexels-photo-3777564.jpeg",
  },
  {
    Name: "Kevin Smith",
    role: "farmer",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
];
const MeetFarmers = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* header */}
        <div className="text-center mb-14">
          <p className="text-yellow-500 font-semibold mb-2">Team Members</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet our Members
          </h2>
        </div>
        {/* cards */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {farmers.map((farmer, index) => (
            <FarmerCard
              key={index}
              image={farmer.image}
              name={farmer.Name}
              role={farmer.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetFarmers;
