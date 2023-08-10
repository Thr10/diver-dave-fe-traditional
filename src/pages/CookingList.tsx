import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';
import classNames from '../tools/classNames';
import { useNavigate } from 'react-router-dom';
import { CookingItemBaseInfo, CookingTag } from '../types/cooking';
import { getCookingList } from '../api/cooking';
import { useAsyncEffect } from 'ahooks';
import getImgUrl from '../tools/getImgUrl';
import CoinIcon from '../assets/images/coin_icon.png';
import AmountIcon from '../assets/images/amount_icon_icon.png';
import TastyIcon from '../assets/images/tasty_icon.png';

const statuses: Record<string, string> = {
  Paid: 'text-green-700 bg-green-50 ring-green-600/20',
  Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
};

type CookingTagRenderTransferInfo = {
  style: string;
  content: string;
};

export const COOKING_TAG_MAP: Record<CookingTag, CookingTagRenderTransferInfo> =
  {
    NO_FARM: {
      style: 'text-green-700 bg-green-50 ring-green-600/20',
      content: '✖农场产出',
    },
    NO_FISH: {
      style: 'text-green-700 bg-green-50 ring-green-600/20',
      content: '✖鱼',
    },
    NO_CONDIMENT: {
      style: 'text-green-700 bg-green-50 ring-green-600/20',
      content: '✖调味品',
    },
    BOSS: {
      style: 'text-red-700 bg-red-50 ring-red-600/10',
      content: 'Boss',
    },
    EMPLOYEE: {
      style: 'text-blue-700 bg-blue-50 ring-blue-600/10',
      content: '员工解锁',
    },
    SAILFISH_FESTIVE: {
      style: 'text-red-700 bg-red-50 ring-red-600/10',
      content: '旗鱼节',
    },
    SHARK_FESTIVE: {
      style: 'text-red-700 bg-red-50 ring-red-600/10',
      content: '鲨鱼节',
    },
  };

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
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 xl:gap-x-8">
      {cookings.map((cooking) => (
        <li
          key={cooking.uuid}
          onClick={() => goDetailPage(cooking.uuid)}
          className="overflow-hidden rounded-xl border border-gray-200 bg-opacity-20">
          <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-100 p-6 bg-opacity-50 relative">
            <img
              src={getImgUrl('cooking', cooking.icon_name)}
              alt={cooking.name_zh}
              className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
            />
            <div className="text-sm font-medium leading-6 text-gray-900">
              {cooking.name_zh}
            </div>
            <div
              className="
              rounded-md
              overflow-hidden
              z-0
              absolute 
              right-0 
              h-full
              after:content-['']
              after:absolute 
              after:w-full 
              after:h-full 
              after:top-0 
              after:z-0
              after:left-0 after:shadow-[0_0_15px_15px_rgba(255,255,255,1)_inset]
            ">
              <img
                className="h-full z-0"
                src={getImgUrl('cooking_scene', cooking.scene_picture)}
                alt=""
              />
            </div>
          </div>
          <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
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
              <div>
                <img src="" alt="" />
              </div>
            </div>
            <div className="flex justify-start gap-x-4 py-3">
              {cooking.complex_info.tag_list.map((tag, idx) => {
                return (
                  <div
                    className={classNames(
                      COOKING_TAG_MAP[tag].style,
                      'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset',
                    )}>
                    {COOKING_TAG_MAP[tag].content}
                  </div>
                );
              })}
            </div>
          </dl>
        </li>
      ))}
    </ul>
  );
}
