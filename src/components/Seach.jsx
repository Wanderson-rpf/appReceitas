import React, { useState } from "react";

function Seach() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
      <form className="box-search">
        <label 
          htmlFor="input__search"
          className={showSearch ? 'label-search-show' : 'label-search' }>
          <input
            className="input-search"
            autoComplete="off"
            type="text"
            name="search"
            id="input__search"
            placeholder="Search"
            value={ search }
            onChange={ ({target}) => setSearch(target.value) }
            onClick={ () => setShowSearch(!showSearch) }
          />
        </label>
        { showSearch && (
          <div className="search-type">
            <div className="container-filter">
              <label htmlFor="radio__name">
                <input
                  className="radio_filter"
                  type="radio"
                  name="name"
                  id="radio__name" 
                  value="name"
                  checked={ filter === 'name' }
                  onChange={ ({target}) => setFilter(target.value) }
                />
                Name
              </label>
              <label htmlFor="radio__ingred">
                <input
                  className="radio_filter"
                  type="radio"
                  name="ingredients"
                  id="radio__ingred" 
                  value="ingredients"
                  checked={ filter === 'ingredients' }
                  onChange={ ({target}) => setFilter(target.value) }
                />
                Ingredients
              </label>
            </div>
          <button type="button" className="btn-search">
            Search
          </button>
        </div>
        )}
      </form>
    </div>
  );
}

export default Seach;
