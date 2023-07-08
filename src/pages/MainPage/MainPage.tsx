import { FC } from "react";
import "./MainPage.scss";
import { Header } from "../../components/Layouts/Header/Header";
import { Movies } from "./MainPageMovieList/MainPageMovieList";

interface IMainPage {}

export const BlogPage: FC<IMainPage> = () => {
  return (
    <div className="blog">
      <Header />
      <Movies />
    </div>
  );
};
