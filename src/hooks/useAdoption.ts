import { useDispatch, useSelector } from "react-redux";
import {
  AdoptionActiveSelector,
  handleActiveSelector,
  handleDetailsView
} from "../../redux/modules/adoption/adoptionSlice";
import { RootState } from "../../redux/modules/rootReducer";

type AdoptionType = {
  activeSelector: AdoptionActiveSelector;
  handleCategory: (type: AdoptionActiveSelector) => void;
  isDetailsView: boolean;
  handleView: (state: boolean) => void;
};
export const useAdoption = (): AdoptionType => {
  const { activeSelector, isDetailsView } = useSelector(
    ({ adoption }: RootState) => adoption
  );

  const dispatch = useDispatch();
  const handleCategory = (type: AdoptionActiveSelector) => {
    dispatch(handleActiveSelector(type));
  };

  const handleView = (state: boolean) => {
    dispatch(handleDetailsView(state));
  };
  return {
    activeSelector,
    handleCategory,
    isDetailsView,
    handleView
  };
};
