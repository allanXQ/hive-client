import {
  selectActiveAsset,
  selectAssets,
  selectKlineInterval,
  selectKlineIntervals,
} from "redux/features/app/appDataSlice";

const { useEffect } = require("react");
const { useDispatch, useSelector } = require("react-redux");
const { apiCall } = require("redux/async/asyncThunk");

const useAssetsData = () => {
  const dispatch = useDispatch();
  const klineInterval = useSelector(selectKlineInterval);
  const klineIntervals = useSelector(selectKlineIntervals);
  const assets = useSelector(selectAssets);
  const activeAsset = useSelector(selectActiveAsset);
  useEffect(() => {
    dispatch(
      apiCall({
        endpoint: "app/assets",
        method: "get",
        slice: "appData",
      })
    );
  }, []);

  const assetNames = assets.map((asset) => asset.assetName);

  return { klineInterval, klineIntervals, assets, assetNames, activeAsset };
};

export default useAssetsData;
