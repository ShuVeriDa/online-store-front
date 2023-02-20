import {FC} from 'react';
import {IMenuLink} from "@/app/components/layout/header/Menu/MenuItem/menu-item.interface";
import Link from "next/link";

interface IMenuItemProps {
  item: IMenuLink
}

export const MenuItem: FC<IMenuItemProps> = ({item}) => {
  return (
    <li>
     <Link href={item.link}>{item.name}</Link>
    </li>
  );
};