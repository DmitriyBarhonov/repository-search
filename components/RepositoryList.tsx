import React from "react";
import { Repository } from "../state/repository-reducer/repository-reducer-types";



interface RepositoryListProps {
  repositories: Repository[];
  onViewDetails: (repoName: string) => void;
}

export const RepositoryList: React.FC<RepositoryListProps> = () => {
  return <div></div>;
};
