// get repository list
export type Repository = {
  id: string;
  name: string;
  url: string;
  stargazers: {
    totalCount: number;
  };
  defaultBranchRef: {
    target: {
      committedDate: string; // или можно использовать Date, если даты возвращаются в другом формате
    };
  };
};

export type GetRepositoryVariables = {
    getQuery: string;
  };

// TOP
export interface GetTopRepositoryResponseData {
  search: {
    nodes: Repository[];
  };
}
// не топ
export type GetRepositoryResponseData = {
  search: {
    repositoryCount: number;
    nodes: Repository[];
  };
};



// get repo

export type Star = {
  totalCount: number;
};

export type Commit = {
  committedDate: string;
};

export type DefaultBranchRef = {
  target: Commit;
};

export interface Owner {
  avatarUrl: string;
  login: string;
  url: string;
}

export type Language = {
  name: string;
};

export type Languages = {
  nodes: Language[];
};

export interface RepositoryData {
  name: string;
  stargazers: Star;
  defaultBranchRef: DefaultBranchRef;
  owner: Owner;
  languages: Languages;
  description: string;
  url: string;
}

export interface GetRepoInfoData {
  node: RepositoryData;
}

export interface GetRepoInfoVariables {
  getId: string;
}
