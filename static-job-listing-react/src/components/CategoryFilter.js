import "../style/CategoryFilter.css";

function CategoryFilter({ categoryFilter, updateCategoryFilter }) {
  return (
    <div className="CategoryFilter">
      <div className="CategoryFilter__listItem">
        {categoryFilter.map((cat) => (
          <div className="CategoryFilter__listItem--item" key={cat}>
            <span>{cat}</span>
            <div
              className="CategoryFilter__listItem--item__remove"
              onClick={() =>
                updateCategoryFilter(
                  categoryFilter.filter((word) => word !== cat)
                )
              }
            >
              <img src="/assets/icon-remove.svg" alt="remove"></img>
            </div>
          </div>
        ))}
      </div>
      <div
        className="CategoryFilter__clear"
        onClick={() => updateCategoryFilter((categoryFilter = []))}
      >
        Clear
      </div>
    </div>
  );
}

export default CategoryFilter;
