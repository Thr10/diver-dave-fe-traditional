import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import classNames from '../../tools/classNames';
import { useAsyncEffect } from 'ahooks';
import { useState } from 'react';
import { CookingItemBaseInfo } from '../../types/cooking';
import { getCookingList } from '../../api/cooking';
import TestIconImg from '../../assets/images/test.png';
// import { ReactComponent as CoinIcon } from '../../assets/icons/coin_icon.svg';
// import { ReactComponent as BowlIcon } from '../../assets/icons/bowl_icon.svg';
import { useNavigate } from 'react-router-dom';
import CoinIcon from '../../assets/images/coin_icon.png';
import AmountIcon from '../../assets/images/amount_icon_icon.png';
import TastyIcon from '../../assets/images/tasty_icon.png';

export default function CookingList() {
  const nav = useNavigate();
  const [cookings, setCookings] = useState<CookingItemBaseInfo[]>([]);
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
        className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2">
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
                <div className="font-medium text-gray-900 hover:text-gray-600 NotoSansSC">
                  {cooking.name_zh}
                </div>
                <div className="flex items-center justify-start text-gray-400 gap-2">
                  <div className="flex items-center gap-1">
                    <img src={CoinIcon} className="w-4" />
                    {cooking.price}
                  </div>
                  <div className=" flex items-center gap-1">
                    <img src={TastyIcon} className="w-4" />
                    {cooking.mark}
                  </div>
                  <div className=" flex items-center gap-1">
                    <img src={AmountIcon} className="w-4" />
                    {cooking.yield}
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
