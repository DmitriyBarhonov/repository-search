import React, { memo } from "react";
import { useAppSelector } from "../../../state";
import { styleRepositoryList } from "../lib/style/repository-listr-style";
import { stringifyDate } from "../../../shared";
import { PropsType } from "../lib/model/repository-list";

export const RepositoryList: React.FC<PropsType> = memo(
  ({ repositoryList }) => {
    const isLoading = useAppSelector(
      (state) => state.rootReducer.app.isLoading
    );

    const {
      Commit,
      Link,
      Name,
      NameLink,
      Star,
      StyledLink,
      Table,
      Th,
      Thead,
      Tr,
      Tbody,
    } = styleRepositoryList;

    if (!repositoryList && !isLoading) return <div>No data</div>;

    return (
      <Table>
        <Thead>
          <Tr>
            <Th className="name">Repository</Th>
            <Th className="star">Stars</Th>
            <Th className="commit">Last Commit</Th>
            <Th className="link">Link</Th>
          </Tr>
        </Thead>
        <Tbody>
          {repositoryList?.map((repo) => (
            <Tr key={repo.id}>
              <Name>
                <NameLink to={`card/${repo.id}`}>{repo.name}</NameLink>
              </Name>
              <Star>{repo.stargazers.totalCount || `0`}</Star>
              <Commit>
                {repo.defaultBranchRef
                  ? stringifyDate(repo.defaultBranchRef.target.committedDate)
                  : `No data`}
              </Commit>
              <Link>
                <StyledLink href={repo.url}>Github</StyledLink>
              </Link>
            </Tr>
          ))}
        </Tbody>
      </Table>
    );
  }
);
