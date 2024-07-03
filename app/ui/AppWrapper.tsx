import { FC, useEffect } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";
import { useGetRepository } from "../../state";
import { HomePage, RepositoryCard } from "../../pages";
import { NotFound } from "../../pages/404/404";
import { AppStyle } from "../lib/app-style";

export const AppWrapper: FC = () => {
  const [searchParams] = useSearchParams();
  const { getListRepositoryHandler } = useGetRepository();
  const searhName = searchParams.get("search");
  const { AppContainer } = AppStyle;
  useEffect(() => {
    getListRepositoryHandler(searhName || "star sort:stars");
  },[]);
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/card/:id" element={<RepositoryCard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppContainer>
  );
};
