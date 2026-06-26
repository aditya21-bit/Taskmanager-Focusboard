function FilterTabs({
  category,
  setCategory,
  priority,
  setPriority,
}) {
  const categories = ["All", "Work", "Study", "Personal"];
  const priorities = ["All", "High", "Medium", "Low"];

  return (
    <>
      <div className="filter-tabs">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "active-filter" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="filter-tabs">
        {priorities.map((item) => (
          <button
            key={item}
            className={priority === item ? "active-filter" : ""}
            onClick={() => setPriority(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}

export default FilterTabs;