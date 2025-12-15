const FarmCard = ({ image, name, role }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden text-center">
      <img src={image} alt={name} className="w-full h-72 object-cover" />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
        <div className="mt-4 flex justify-center">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white">
            🌿
          </span>
        </div>
      </div>
    </div>
  );
};
export default FarmCard;
