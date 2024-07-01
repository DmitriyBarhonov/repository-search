import { useEffect } from "react";
import { useAppDispatch } from "../state/hooks/app-hooks";
import { getRepository } from "../state/repository-reducer/repository-async-actions";
import React from "react";

export const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRepository({getQuery: 'star'}));
  }, []);

  return <div>wdwdwdwddw</div>;
};
