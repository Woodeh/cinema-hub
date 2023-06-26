import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { BlogPage } from "../pages/BlogPage/BlogPage";
import { PostPage } from "../pages/PostPage/PostPage";
import { SignInPage } from "../pages/SignInPage/SignInPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { RegistrationConfirmPage } from "../pages/RegistrationConfirmPage/RegistrationConfirmPage";
import { ActivatePage } from "../pages/ActivatePage/ActivatePage";
import { useAppSelector } from "../store/hooks";
import { ProtectedRoute } from "./ProtectedRoute";
import { Settings } from "../pages/Settings/Settings";
import { MovieInfo } from "../components/MainPageFilms/Movies/MovieInfo";
import { Trends } from "../pages/TrendsPage/Trends";
import { Favorites } from "../pages/FavoritesPage/FavoritesPage";
import { Search } from "../pages/SearchPage/SearchPage";

export const Router: FC = () => {
  const { confirmEmail } = useAppSelector((state) => state.confirmEmail);

  return (
    <Routes>
      {/* <Route path='/main' element={<MainPage/>}/> */}
      <Route path="/settings" element={<Settings />} />
      <Route
        path="/trends"
        element={
          <Trends
            handleFilterMovie={function (): void {
              throw new Error("Function not implemented.");
            }}
            handleMoveMain={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        }
      />
      <Route
        path=""
        element={
          <BlogPage
            handleFilterMovie={function (): void {
              throw new Error("Function not implemented.");
            }}
            handleMoveMain={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        }
      />
      <Route path="/posts/:id" element={<PostPage />} />
      <Route
        path="/movies/:id"
        element={
          <MovieInfo
            match={{
              params: {
                id: "",
              },
            }}
          />
        }
      />
      /favorites
      <Route path="/favorites" element={<Favorites handleFilterMovie={function (): void {
        throw new Error("Function not implemented.");
      } } handleMoveMain={function (): void {
        throw new Error("Function not implemented.");
      } } />} />
      <Route path="/search-page" element={<Search />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/activate/:uid/:token" element={<ActivatePage />} />
      <Route element={<ProtectedRoute access={!!confirmEmail} />}>
        <Route
          path="/confirm-registration"
          element={<RegistrationConfirmPage />}
        />
      </Route>
      <Route path="*" element={<>Такой страницы не существует</>} />
    </Routes>
  );
};
