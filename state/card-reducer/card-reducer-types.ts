export type GetRepositoryCardVariables = {
  getId: string; // тип переменной getId должен соответствовать ID репозитория в GraphQL
};

export type LanguageCard = {
  name: string;
};

export interface OwnerCard {
  avatarUrl: string;
  login: string;
  url: string;
}

export interface RepositoryCard {
  name: string;
  stargazers: {
    totalCount: number;
  };
  defaultBranchRef: {
    target: {
      committedDate: string;
    };
  };
  owner: OwnerCard;
  languages: {
    nodes: LanguageCard[];
  };
  description: string;
  url: string;
}

export interface GetRepositoryCardResponseData {
  node: RepositoryCard;
}
