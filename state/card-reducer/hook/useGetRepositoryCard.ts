import { useEffect } from "react";
import { useAppDispatch } from "../../app-reducer/hooks/useAppHooks";
import { getCardRepository } from "../card-async-actions";
 

export const useGetRepositoryCard = (id: string) => {
  const dispatch = useAppDispatch();
  const getLCardRepositoryHandler = (getId: string) => {
    dispatch(getCardRepository({ getId }));
  };

  useEffect(() => {
    getLCardRepositoryHandler(id || "1");
  }, []);

  return {
    getLCardRepositoryHandler,
  };
};
