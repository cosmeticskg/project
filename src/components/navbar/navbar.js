import React, { useEffect } from "react";
import "./navbar.css";
import navLogo from "../../img/menu.png";
import { connect, useDispatch } from "react-redux";
import {
  getBrandsRequestThunk,
  getCategoriesRequestThunk
} from "../../containers/home-page/actions";
import { Link } from "react-router-dom";
import { setBrand } from "../../containers/filter-page/actions";

const Navbar = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getBrandsRequestThunk());
    // dispatch(getCategoriesRequestThunk());
  }, []);

  const { brands, categories, setBrand } = props;
  let brandsForNavBar = brands.slice(0, 6);

  return (
    <nav className="main__nav">
      <ul>
        <li className="main__nav__category">
          <img src={navLogo} alt="menu-icon" />
          <a href="#">Категории</a>
          <ul>
            <li key="allBrands">
              <Link to="/filters">
                <span>Бренды</span>
                <ul>
                  {brands && brands.length
                    ? brands.map(brand => {
                        return (
                          <li key={brand.id}>
                            <Link to="/filters">
                              <span
                                value={brand.id}
                                onClick={e => {
                                  setBrand(brand.id);
                                }}
                              >
                                {brand.name}
                              </span>
                            </Link>
                          </li>
                        );
                      })
                    : <span>loading...</span>}
                </ul>
              </Link>
            </li>
            {categories && categories.length ? (
              categories.map(item => {
                if (item.parent === null) {
                  return (
                    <li key={item.id}>
                      <Link to="/filters">
                        <span>{item.name}</span>
                        <ul>
                          {categories && categories.length
                            ? categories.map(subItem => {
                                if (subItem.parent === item.id) {
                                  return (
                                    <li key={subItem.id}>
                                      <Link to="/filters">
                                        <span>{subItem.name}</span>
                                      </Link>
                                    </li>
                                  );
                                }
                              })
                            : <span>loading...</span>}
                        </ul>
                      </Link>
                    </li>
                  );
                }
              })
            ) : (
              <div>loading</div>
            )}
          </ul>
        </li>

        {brandsForNavBar.map(item => {
          return (
            <li>
              <Link to="/filters">
                <span
                  value={item.id}
                  onClick={e => {
                    setBrand(item.id);
                  }}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const mapStateToProps = state => ({
  brands: state.home.brands,
  categories: state.home.categories,
  currentBrand: state.filter.currentBrand
});

const mapDispatchToProps = dispatch => {
  return {
    setBrand: brandId => dispatch(setBrand(brandId))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
