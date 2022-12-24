import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";

export function Router(){
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/post/:idIssue' element={<Post/>} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  )
}