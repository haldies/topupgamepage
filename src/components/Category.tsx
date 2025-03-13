const categories = ["Technology", "Science", "Health", "Sports", "Business", "Education", "Entertainment", "Politics", "Environment"];

const Category = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex space-x-4 py-4 bg-gray-100 rounded-lg  w-max whitespace-nowrap">
        {categories.map((category, index) => (
          <button
            key={index}
            className="px-4 py-2 border border-gray-400 rounded-lg transition duration-300"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
