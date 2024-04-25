import { useDispatch, useSelector } from "react-redux";
import {
  handleDashboardDrawer,
  handleDrawer
} from "../../redux/modules/navigation/navigationSlice";
import { RootState } from "../../redux/modules/rootReducer";

type Props = {
  isOpen: boolean;
  handleDrawer: (state: boolean) => void;
  handleClose: () => void;
  isDashboardDrawerOpen: boolean;
  controlDashboardDrawer: (state: boolean) => void;
};

export const useHamburger = (): Props => {
  const { isDrawerOpen, isDashboardDrawerOpen } = useSelector(
    ({ navigation }: RootState) => navigation
  );

  const dispatch = useDispatch();

  const controlDrawer = (state: boolean) => {
    dispatch(handleDrawer(state));
  };

  const handleClose = () => {
    dispatch(handleDrawer(false));
  };
  const controlDashboardDrawer = (state: boolean) => {
    dispatch(handleDashboardDrawer(state));
  };

  return {
    isOpen: isDrawerOpen,
    handleDrawer: controlDrawer,
    handleClose,
    isDashboardDrawerOpen,
    controlDashboardDrawer
  };
};
