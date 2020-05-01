import React, { useEffect } from "react";
import "./navbar.css";
import navLogo from "../../img/menu.png";
import { connect, useDispatch } from "react-redux";
import {
  getBrandsRequestThunk,
  getCategoriesRequestThunk,
  getSubcategoriesRequestThunk,
  getNavbarDataRequestThunk,
} from "../../containers/home-page/actions";
import { Link } from "react-router-dom";
import {
  setBrand,
  setCategory,
  setSubcategory,
} from "../../containers/filter-page/actions";
import API from "../../API";
import { getBrandsSuccess } from "../../containers/home-page/actions";

const Navbar = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getBrandsRequestThunk());
    // dispatch(getCategoriesRequestThunk());
    // dispatch(getSubcategoriesRequestThunk());
  }, []);

  const {
    brands,
    categories,
    setBrand,
    setCategory,
    setSubcategory,
    subcategories,
  } = props;

  // brands.sort(function (a, b) {
  //   if (a.id > b.id) {
  //     return 1;
  //   }
  //   if (a.id < b.id) {
  //     return -1;
  //   }
  //   return 0;
  // })
  let brandsForNavBar = brands.slice(0, 7);

  return (
    <nav className="main__nav">
      <ul>
        <li className="main__nav__category">
          <img src={navLogo} alt="menu-icon" />
          <a href="#" className="navbar_categories_title">
            Категории
          </a>
          <ul>
            <li key="allBrands">
              <Link to="/filters">
                <span>Бренды</span>
                <ul className="navbar_brands_wrapper">
                  {brands && brands.length ? (
                    brands.map((brand) => {
                      return (
                        <li key={brand.id}>
                          <Link to="/filters">
                            <span
                              value={brand.id}
                              onClick={(e) => {
                                setBrand(brand.id);
                                setSubcategory("0");
                                setCategory("0");
                              }}
                            >
                              {brand.name}
                            </span>
                          </Link>
                        </li>
                      );
                    })
                  ) : (
                    <span>loading...</span>
                  )}
                </ul>
              </Link>
            </li>
            {categories && categories.length ? (
              categories.map((item) => {
                return (
                  <li key={item.id}>
                    <Link to="/filters">
                      <span
                        value={item.id}
                        onClick={() => {
                          setCategory(item.id);
                          setBrand("0");
                          setSubcategory("0");
                        }}
                      >
                        {item.name}
                      </span>
                      <ul>
                        {subcategories && subcategories.length ? (
                          subcategories.map((subItem) => {
                            if (subItem.category === item.id) {
                              return (
                                <li key={subItem.id}>
                                  <Link to="/filters">
                                    <span
                                      value={subItem.id}
                                      onClick={() => {
                                        setCategory(item.id);
                                        setSubcategory(subItem.id);
                                        setBrand("0");
                                      }}
                                    >
                                      {subItem.name}
                                    </span>
                                  </Link>
                                </li>
                              );
                            }
                          })
                        ) : (
                          <span>loading...</span>
                        )}
                      </ul>
                    </Link>
                  </li>
                );
              })
            ) : (
              <div>loading</div>
            )}
          </ul>
        </li>

        <div className='main__nav__brands_wrapper'>
          {brandsForNavBar.map((item) => {
            return (
              <li className="main__nav__brands" key={item.id}>
                <Link to="/filters">
                  <span
                    value={item.id}
                    onClick={(e) => {
                      setBrand(item.id);
                    }}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </div>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  brands: state.home.brands,
  categories: state.home.categories,
  subcategories: state.home.subcategories,
  currentBrand: state.filter.currentBrand,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setBrand: (brandId) => dispatch(setBrand(brandId)),
    setCategory: (categoryId) => dispatch(setCategory(categoryId)),
    setSubcategory: (subCategoryId) => dispatch(setSubcategory(subCategoryId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
