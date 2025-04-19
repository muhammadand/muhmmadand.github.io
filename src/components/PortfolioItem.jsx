// src/components/PortfolioItem.jsx
function PortfolioItem({ title, description, image }) {
    return (
      <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h4 className="text-lg font-semibold mb-1">{title}</h4>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    );
  }
  
  export default PortfolioItem;
  