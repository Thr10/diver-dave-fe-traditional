import { PaperClipIcon } from '@heroicons/react/24/outline';
import { useAsyncEffect } from 'ahooks';
import { useParams } from 'react-router-dom';
import { getCookingDetail } from '../api/cooking';
import { useState } from 'react';
import {
  CookingItemDetailInfo,
  CookingUnlockType,
  FestiveType,
} from '../types/cooking';
import {
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
} from '@heroicons/react/20/solid';
import getImgUrl from '../tools/getImgUrl';
import CoinIcon from '../assets/images/coin_icon.png';
import AmountIcon from '../assets/images/amount_icon_icon.png';
import TastyIcon from '../assets/images/tasty_icon.png';
import { COOKING_TAG_MAP } from './CookingList';
import classNames from '../tools/classNames';

const UNLOCK_CONTENT_MAP: Record<CookingUnlockType, string> = {
  EMPLOYEE: '员工解锁',
  SHOP: '店铺等级解锁',
  SPECIAL: '特殊事件',
};

const FESTIVE_ICON_NAME_MAP: Record<FestiveType, string> = {
  SHARK: 'SharkStormWeekend',
  MEDUSA: 'JellyFish',
  SAILFISH: 'MarlinSail',
  TUNNY: 'Tuna',
};

const timeline = [
  {
    id: 1,
    content: 'Applied to',
    target: 'Front End Developer',
    href: '#',
    date: 'Sep 20',
    datetime: '2020-09-20',
    icon: UserIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 2,
    content: 'Advanced to phone screening by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 22',
    datetime: '2020-09-22',
    icon: HandThumbUpIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 3,
    content: 'Completed phone screening with',
    target: 'Martha Gardner',
    href: '#',
    date: 'Sep 28',
    datetime: '2020-09-28',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 4,
    content: 'Advanced to interview by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: HandThumbUpIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 5,
    content: 'Completed interview with',
    target: 'Katherine Snyder',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
];

export default function CookingDetail() {
  const [detailInfo, setDetailInfo] = useState<CookingItemDetailInfo | null>(
    null,
  );
  let params = useParams();
  console.log(params.uuid);
  useAsyncEffect(async () => {
    if (params.uuid) {
      const info = await getCookingDetail(Number(params.uuid));
      setDetailInfo(info);
    }
  }, [params.uuid]);
  return !detailInfo ? null : (
    <div>
      <div className="px-4 sm:px-0 flex">
        <div className="flex-1">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            {detailInfo.name_zh}
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            {detailInfo.describe}
          </p>
        </div>
        <div className="ml-auto w-[3rem] flex flex-col justify-center">
          <img
            className="w-full"
            src={getImgUrl('cooking', detailInfo.icon_name)}
            alt=""
          />
          <div className=" flex items-center justify-center gap-1 text-slate-300 ">
            {detailInfo.yield}
            <img src={AmountIcon} className="w-4" />
          </div>
        </div>
      </div>
      <div className="flex justify-start gap-2 mt-2 sm:px-0 px-4">
        {detailInfo.complex_info.tag_list.map((tag, idx) => {
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
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              <div className="flex items-center">
                <p className="mr-4">基本信息</p>
                {detailInfo.complex_info.festive_list.map((festive, idx) => {
                  return (
                    <div
                      key={festive}
                      className="w-6 h-6 bg-lime-200 p-1 rounded-lg">
                      <img
                        className="w-full"
                        src={getImgUrl(
                          'festival',
                          FESTIVE_ICON_NAME_MAP[festive],
                        )}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <dl className="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-2">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4  sm:px-6 xl:px-8">
                  <dt className="text-sm font-medium leading-6 text-gray-500">
                    {'Lv.1'}
                  </dt>

                  <dd className="w-full flex-none text-lg font-medium leading-10 tracking-tight text-gray-900">
                    <div className="flex items-center justify-start text-gray-400 gap-2">
                      <div className="flex items-center gap-1">
                        <img src={CoinIcon} className="w-4" />
                        {detailInfo.price}
                      </div>
                      <div className=" flex items-center gap-1">
                        <img src={TastyIcon} className="w-4" />
                        {detailInfo.mark}
                      </div>
                    </div>
                  </dd>
                </div>

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4  sm:px-6 xl:px-8">
                  <dt className="text-sm font-medium leading-6 text-gray-500">
                    {'Lv.Max'}
                  </dt>

                  <dd className="w-full flex-none text-lg font-medium leading-10 tracking-tight text-gray-900">
                    <div className="flex items-center justify-start text-gray-400 gap-2">
                      <div className="flex items-center gap-1">
                        <img src={CoinIcon} className="w-4" />
                        {detailInfo.price_max}
                      </div>
                      <div className=" flex items-center gap-1">
                        <img src={TastyIcon} className="w-4" />
                        {detailInfo.mark_max}
                      </div>
                    </div>
                  </dd>
                </div>
              </dl>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              解锁条件 {` (${detailInfo.unlock_fire} 🔥)`}
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <div className="mt-5">
                <img
                  className="mx-auto h-10 w-10 rounded-full"
                  src={getImgUrl(
                    'staff',
                    detailInfo.complex_info.unlock_info.employee_icon,
                  )}
                  alt=""
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">
                    {
                      UNLOCK_CONTENT_MAP[
                        detailInfo.complex_info.unlock_info.type
                      ]
                    }
                  </div>
                  <svg
                    viewBox="0 0 2 2"
                    width={3}
                    height={3}
                    aria-hidden="true"
                    className="fill-gray-900">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="text-gray-600">{`${detailInfo.complex_info.unlock_info.employee_name} (Lv.${detailInfo.complex_info.unlock_info.employee_level}) `}</div>
                </div>
              </div>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              食材
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <div className="mt-5">
                <ul role="list" className="-mb-8">
                  {detailInfo.complex_info.menu.map((material, idx) => (
                    <li key={idx}>
                      <div className="relative pb-8">
                        {idx !== detailInfo.complex_info.menu.length - 1 ? (
                          <span
                            className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                            aria-hidden="true"
                          />
                        ) : null}
                        <div className="relative flex space-x-3">
                          <div className="w-10 h-10 flex items-center">
                            <img
                              className="w-full"
                              src={getImgUrl(
                                'cooking_meterials',
                                material.icon_name,
                              )}
                              alt=""
                            />
                          </div>
                          <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                            <div>
                              <p className="text-sm text-gray-500">
                                {material.name}
                              </p>
                            </div>
                            <div className="whitespace-nowrap text-right text-sm text-gray-500">
                              {material.required}
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
