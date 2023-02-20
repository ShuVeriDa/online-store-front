
import { FC } from 'react'

import styles from './Header.module.scss'
import {Menu} from "@/app/components/layout/header/Menu/Menu";
import {Search} from "@/app/components/layout/header/Search/Search";
import {Cart} from "@/app/components/layout/header/Cart/Cart";

const Header: FC = () => {
	return <header className={styles.header}>
		<Menu />
		<Search />
		<Cart />
	</header>
}

export default Header
