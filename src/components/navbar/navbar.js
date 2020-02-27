import React, { useEffect } from "react";
import "./navbar.css";
import navLogo from "../../img/menu.png";
import { connect, useDispatch } from "react-redux";
import {
  getBrandsRequestThunk,
  getCategoriesRequestThunk
} from "../../containers/home-page/actions";
import { Link } from "react-router-dom";

const Navbar = props => {
  console.log(props);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrandsRequestThunk());
    dispatch(getCategoriesRequestThunk());
  }, []);

  const { brands, categories, subCategories } = props;

  return (
    <nav className="main__nav">
      <ul>
        <li className="main__nav__category">
          <img src={navLogo} alt="menu-icon" />
          <a href="#">Категории</a>
          <ul>
            {categories && categories.length ? (
              categories.map(item => {
                if (item.parent === null) {
                  return (
                    <li key={item.id}>
                      {/* <Link to="filters"> */}
                      <a>{item.name}</a>
                      <ul>
                        {categories && categories.length
                          ? categories.map(subItem => {
                              if (subItem.parent === item.id) {
                                return (
                                  <li key={subItem.id}>
                                    <a href="#">{subItem.name}</a>
                                  </li>
                                );
                              }
                            })
                          : console.log("no items")}
                      </ul>
                      {/* </Link> */}
                    </li>
                  );
                }
              })
            ) : (
              <div>loading</div>
            )}
          </ul>
        </li>

        {brands.map(item => {
          return (
            <li>
              <a href="#">{item.name}</a>
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
});

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchBrands: () => dispatch(getBrandsRequestThunk()),
//     fetchCategories: () => dispatch(getCategoriesRequestThunk()),
//   };
// };
export default connect(mapStateToProps)(Navbar);
