import { Repository } from "../../../../state/repository-reducer/repository-reducer-types";

export const getRepositoryListByPagination = (
  repositoryList: Repository[],
  count: number
) => {
  const repositoryListByPagination = [];
  const countRepository = count > 100 ? 100 : count;
  const countPages = Math.ceil(countRepository / 10);

  for (let i = 0; i < countPages; i += 1) {
    repositoryListByPagination.push(repositoryList.slice(i * 10, (i + 1) * 10));
  }

  return {repositoryListByPagination, countPages};
};
