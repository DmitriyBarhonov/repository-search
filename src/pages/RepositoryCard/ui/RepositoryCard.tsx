import { NavLink, useParams } from "react-router-dom";
import { useAppSelector, useGetRepositoryCard } from "../../../state";
import { Loading, stringifyDate } from "../../../shared";
import { RepositoryCardStyle } from "../lib/card-style";

export const RepositoryCard = () => {
  const { id } = useParams();
  useGetRepositoryCard(id || "");
  const card = useAppSelector(
    (state) => state.rootReducer.cadrRepository.cardItem
  );
  const isLoading = useAppSelector((state) => state.rootReducer.app.isLoading);
  const {
    ArticleContainer,
    CardTitle,
    CardInfo,
    Star,
    Commit,
    Author,
    Description,
    Languages,
    LanguagesList,
    Img,
    CardInfoText,
  } = RepositoryCardStyle;

  if (isLoading) return <Loading />;
  if (!card) return <div>No info</div>;

  const lastCommit = stringifyDate(card.defaultBranchRef?.target.committedDate);
  return (
    <ArticleContainer>
      <CardTitle>
        <a href={card.url}>{card.name}</a>
      </CardTitle>
      <CardInfo>
        <CardInfoText>
          <Star>Stars: {card.stargazers.totalCount}</Star>
          <Commit>Last commit: {lastCommit}</Commit>
          <Author>
            Author: <a href={card.owner.url}>{card.owner.login}</a>
          </Author>

          {!!card.languages.nodes.length && (
            <Languages>
              Used languages:
              <LanguagesList>
                {card.languages.nodes.map((language, index, array) => (
                  <li key={language.name}>
                    {language.name}
                    {index < array.length - 1 ? ", " : "."}
                  </li>
                ))}
              </LanguagesList>
            </Languages>
          )}

          <Description>Description: {card.description}</Description>
        </CardInfoText>

        <Img>
          <img src={card.owner.avatarUrl} alt="Repository card" />
        </Img>
      </CardInfo>

      <NavLink to="/">Back to search</NavLink>
    </ArticleContainer>
  );
};
