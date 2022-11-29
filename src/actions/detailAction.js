import axios from "axios";
import { gameDetailsURL,gameDevelopersDetailsURL,gameStoresDetailsURL, gameScreenshotURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const detailData = await axios.get(gameDetailsURL(id));
  const developersData = await axios.get(gameDevelopersDetailsURL(id));
  const storesData = await axios.get(gameStoresDetailsURL(id));
  const screenShotData = await axios.get(gameScreenshotURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      developers: developersData.data,
      stores: storesData.data,
      screen: screenShotData.data,
    },
  });
};
