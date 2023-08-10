import { Route, Routes, Navigate } from 'react-router-dom';
import CookingDetail from '../../../../pages/CookingDetail';
import CookingList from '../../../../pages/CookingList';

export default function MainLeftContent() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="cooking_list" />}></Route>
      <Route path="/cooking_list" element={<CookingList />}></Route>
      <Route path="/cookingDetail/:uuid" element={<CookingDetail />}></Route>
    </Routes>
  );
}
