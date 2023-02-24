import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {cartSlice} from "@/app/store/slice";
import {useMemo} from "react";

const rootAction = {
  ...cartSlice.actions
}

export const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch])
}