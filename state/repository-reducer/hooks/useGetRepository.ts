import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../app-reducer/hooks/useAppHooks";
import {
  getListRepository,
  getListTopRepository,
} from "../repository-async-actions";
import { useCallback } from "react";
import _debounce from "lodash/debounce";


export const useGetRepository = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const getListRepositoryHandler = (getQuery: string) => {
    dispatch(getListRepository({ getQuery }));
  };

  const getListTopRepositoryHandler = (getQuery: string) => {
    dispatch(getListTopRepository({ getQuery }));
  };

  const debouncedGetListRepositoryHandler = useCallback(
    _debounce((value: string) => {
      setSearchParams({ search: value });
      getListRepositoryHandler(value);
    }, 1000),
    []
  );


  return {
    setSearchParams,
    debouncedGetListRepositoryHandler,
    searchParams,
    getListRepositoryHandler,
    getListTopRepositoryHandler,
  };
};
