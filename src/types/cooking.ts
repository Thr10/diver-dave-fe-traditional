export interface CookingItemBaseInfo {
  uuid: number;
  icon_name: string;
  name_en: string;
  name_zh: string;
  price: number;
  yield: number;
  mark: number;
  scene_picture: string;
  complex_info: CookingComplexInfo;
}

export interface CookingItemDetailInfo extends CookingItemBaseInfo {
  price_max: number;
  mark_max: number;
  describe: string;
  unlock_fire: string;
}

export type CookingMenuItem = {
  name: string;
  icon_name: string;
  required: number;
};

export type CookingUnlockType = 'EMPLOYEE' | 'SHOP' | 'SPECIAL';
export type CookingTag =
  | 'NO_FARM'
  | 'NO_FISH'
  | 'NO_CONDIMENT'
  | 'BOSS'
  | 'EMPLOYEE'
  | 'SHARK_FESTIVE'
  | 'SAILFISH_FESTIVE';

export type FestiveType = 'SAILFISH' | 'SHARK' | 'MEDUSA' | 'TUNNY';

export type CookingComplexInfo = {
  menu: CookingMenuItem[];
  unlock_info: {
    type: CookingUnlockType;
    employee_level: number;
    employee_name: string;
    employee_icon: string;
    employee_id: number;
    boss_name: string;
    boss_icon: string;
    boss_id: number;
    shop_level: number;
    event_name: string;
    event_icon: string;
    event_id: number;
  };
  tag_list: CookingTag[];
  festive_list: FestiveType[];
};
