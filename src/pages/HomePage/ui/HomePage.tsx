import React from "react";
import { Paginator, RepositoryList, SearchBar } from "../../../components";
import { Loading } from "../../../shared";
import { getRepositoryListByPagination } from "../lib/utils/repository-list-pagination-utils";
import { useGetStateForHomePage } from "../lib/hooks/useGetStateForHomePage";
import { HomePageStyle } from "../lib/style/style-home-page";

export const HomePage: React.FC = () => {
  const { currentPage, repositoryCount, repositoryList, isLoading } =
    useGetStateForHomePage();

  const { countPages, repositoryListByPagination } =
    getRepositoryListByPagination(repositoryList, repositoryCount);

  const { HomePageContainer } = HomePageStyle;

  return (
    <HomePageContainer>
      <SearchBar />
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <RepositoryList
            repositoryList={repositoryListByPagination[currentPage - 1]}
          />
          {repositoryList.length > 1 && (
            <Paginator currentPage={currentPage} countPages={countPages} />
          )}
        </div>
      )}
    </HomePageContainer>
  );
};
