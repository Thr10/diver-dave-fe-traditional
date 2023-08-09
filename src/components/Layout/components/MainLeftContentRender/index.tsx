import { Route, Routes, Navigate } from 'react-router-dom';
import CookingList from '../../../../pages/CookingList';
import CookingDetail from '../../../../pages/CookingDetail';
import NewCookingList from '../../../../pages/NewCookingList';

export default function MainLeftContent() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="cooking_list" />}></Route>
      <Route path="/cooking_list" element={<NewCookingList />}></Route>
      <Route path="/cookingDetail/:uuid" element={<CookingDetail />}></Route>
    </Routes>
  );
}
