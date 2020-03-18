import API from "../../API";

export const GET_FOOTER_DATA_SUCCESS = "[FOOTER] GET_FOOTER_DATA_SUCCESS";
export const GET_FOOTER_DATA_ERROR = "[FOOTER] GET_FOOTER_DATA_ERROR";

export const getFooterDataSuccess = data => ({
  type: GET_FOOTER_DATA_SUCCESS,
  payload: data
});

export const getFooterDataError = () => ({ type: GET_FOOTER_DATA_ERROR });

export const getSocialNetworkDataThunk = () => dispatch => {
  return API.getFooterData()
    .then(res => {
      let brands = res.data;
      dispatch(getFooterDataSuccess(brands));
    })
    .catch(err => {
      console.log(err, "ERROR FROM GET SOCIAL NETWORKS IN FOOTER");
      dispatch(getFooterDataError());
    });
};
