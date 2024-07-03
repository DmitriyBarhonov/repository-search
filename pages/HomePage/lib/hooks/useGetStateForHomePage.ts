import { useAppSelector } from "../../../../state";

export const useGetStateForHomePage = () => {

  const isLoading = useAppSelector((state)=> state.rootReducer.app.isLoading)

  const repositoryList = useAppSelector(
    (state) => state.rootReducer.repository.repositoryList
  );
  const repositoryCount = useAppSelector(
    (state) => state.rootReducer.repository.repositoryCount
  );
  const currentPage = useAppSelector(
    (state) => state.rootReducer.repository.currentPage
  );

  return {
    repositoryList,
    repositoryCount,
    currentPage,
    isLoading
  };
};
