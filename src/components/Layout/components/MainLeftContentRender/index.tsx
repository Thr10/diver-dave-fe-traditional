import { Route, Routes, Navigate } from 'react-router-dom';
import CookingList from '../../../../pages/CookingList';
import CookingDetail from '../../../../pages/CookingDetail';

export default function MainLeftContent() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="cookingList" />}></Route>
      <Route path="/cookingList" element={<CookingList />}></Route>
      <Route path="/cookingDetail/:uuid" element={<CookingDetail />}></Route>
    </Routes>
  );
}
