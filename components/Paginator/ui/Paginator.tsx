import  { memo, useCallback } from "react";
import { repositoryActions, useAppDispatch } from "../../../state";
import { PaginatorStyle } from "../lib/style/paginator-style";
import { PropsType } from "../lib/model/paginator-types";

export const Paginator: React.FC<PropsType> = memo(({ currentPage, countPages }) => {
  const dispatch = useAppDispatch();

  const { PaginatorContainer, Button, Li } = PaginatorStyle;

  const handlePageChange = useCallback(
    (pageNumber: number) => {
      dispatch(repositoryActions(pageNumber));
    },
    [dispatch]
  );

  const item = [];
  for (let i = 1; i <= countPages; i++) {
    item.push(
      <Li key={i}>
        <Button
          $isActive={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Button>
      </Li>
    );
  }

  return <PaginatorContainer>{item}</PaginatorContainer>;
}) 
