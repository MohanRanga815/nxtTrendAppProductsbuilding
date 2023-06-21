import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const renderRatingsFilterList = () => {
    const {ratingsList} = props

    return ratingsList.map(eachRating => {
      const {changeRating, activeRating} = props
      const onClickRating = () => changeRating(eachRating.ratingId)

      const ratingClassName =
        activeRating === eachRating.ratingId ? 'up active-rating' : 'up'

      return (
        <li
          className="rating-list"
          key={eachRating.ratingId}
          onClick={onClickRating}
        >
          <img
            src={eachRating.imageUrl}
            alt={`rating ${eachRating.ratingId}`}
            className="rating-image"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const renderFilters = () => (
    <div>
      <h1 className="rating-head">Rating</h1>
      <ul className="rate-lists">{renderRatingsFilterList()}</ul>
    </div>
  )

  const renderCategories = () => {
    const {categoryOptions} = props
    return categoryOptions.map(category => {
      const {changeCategory, activeCategoryId} = props
      const onClickCategory = () => changeCategory(category.categoryId)
      const isActive = category.categoryId === activeCategoryId
      const categoryClassName = isActive
        ? 'category-name active-name'
        : 'category-name'

      return (
        <li
          className="category-item"
          key={category.categoryId}
          onClick={onClickCategory}
        >
          <p className={categoryClassName}>{category.name}</p>
        </li>
      )
    })
  }

  const renderProductCategory = () => (
    <>
      <h1 className="category-head">Category</h1>
      <ul className="categories-lists">{renderCategories()}</ul>
    </>
  )

  const onEnterSearch = event => {
    const {enterSearchInputEl} = props
    if (event.key === 'Enter') {
      enterSearchInputEl()
    }
  }

  const onChangeSearch = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props

    return (
      <div className="search-con">
        <input
          type="search"
          value={searchInput}
          placeholder="Search"
          className="search-input"
          onChange={onChangeSearch}
          onKeyDown={onEnterSearch}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const {clearFilter} = props

  return (
    <div className="filter-group-container">
      {renderSearchInput()}
      {renderProductCategory()}
      {renderFilters()}
      <button type="button" className="clear-filter" onClick={clearFilter}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
