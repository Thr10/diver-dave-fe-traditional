import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import classNames from '../../tools/classNames';
import { useAsyncEffect } from 'ahooks';
import { useState } from 'react';
import { CookingItemBaseType } from '../../types/cooking';
import { getCookingList } from '../../api/cooking';
import TestIconImg from '../../assets/images/test.png';
import { ReactComponent as CornIcon } from '../../assets/icons/corn_icon.svg';
import { ReactComponent as FishIcon } from '../../assets/icons/fish_icon.svg';
import { ReactComponent as PepperIcon } from '../../assets/icons/pepper_icon.svg';
import { useNavigate } from 'react-router-dom';

export default function CookingList() {
  const nav = useNavigate();
  const [cookings, setCookings] = useState<CookingItemBaseType[]>([]);
  useAsyncEffect(async () => {
    const cookings = await getCookingList();
    setCookings(cookings);
  }, []);

  const goDetailPage = (uuid: number): void => {
    nav(`/cookingDetail/${uuid}`);
  };

  return (
    <div>
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {cookings.map((cooking) => (
          <li
            key={cooking.uuid}
            className="col-span-1 flex rounded-md shadow-sm border"
            onClick={() => goDetailPage(cooking.uuid)}>
            <div
              className={classNames(
                'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium',
              )}>
              <img src={TestIconImg} />
            </div>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md  border-gray-200 bg-white">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <div className="font-medium text-gray-900 hover:text-gray-600">
                  {cooking.name_zh}
                </div>
                <div className="flex items-center justify-start text-gray-400 ">
                  <div className="flex items-center">
                    <FishIcon className="w-4 h-4" />
                    {cooking.fish_needs_num}
                  </div>
                  <div className="flex items-center">
                    <CornIcon className="w-3 h-3" />
                    {cooking.farm_needs_num}
                  </div>
                  <div className="flex items-center">
                    <PepperIcon className="w-3 h-3" />
                    {cooking.spices_needs_num}
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
