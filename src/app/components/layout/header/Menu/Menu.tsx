import {FC} from 'react';
import Link from "next/link";
import Image from "next/image";
import {menu} from "@/app/components/layout/header/Menu/menu.data";
import {MenuItem} from "@/app/components/layout/header/Menu/MenuItem/MenuItem";
import styles from './Menu.module.scss';
interface IMenuProps {
}

export const Menu: FC<IMenuProps> = () => {
  return  (
    <div className={styles.menu}>
      <Link href='/'>
        <Image src='/images/logo.png'
               alt={'online-shop'}
               width={100}
               height={100}
        />
      </Link>

      <nav>
        <ul>
          {menu.map(item => <MenuItem key={item.link} item={item} />)}
        </ul>
      </nav>
    </div>
  );
};