const Searchbar = () => {
  return (
    <>
      <div className="input-group">
        <div className="form-outline">
          <input
            type="search"
            id="form1"
            className="form-control"
            placeholder="Search..."
          />
        </div>
        <button type="button" className="btn btn-primary">
          <i className="bi bi-search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </i>
        </button>
      </div>
    </>
  );
};

export default Searchbar;
