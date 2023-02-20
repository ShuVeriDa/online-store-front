'use client'

import {FC, useState} from 'react';
import styles from './Search.module.scss';
import {Input, InputGroup, InputLeftElement} from "@chakra-ui/input";
import {SearchIcon} from "@chakra-ui/icons";

interface ISearchProps {
}

export const Search: FC<ISearchProps> = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className={styles.search}>
      <InputGroup>
        <InputLeftElement pointerEvents={'none'}
                          children={<SearchIcon color={'gray.300'} />}
        />
        <Input type={'search'}
               value={searchTerm}
               onChange={e => setSearchTerm(e.currentTarget.value)}
               placeholder={"Search"}
               variant={'outline'}
        />
      </InputGroup>

      <div>Search</div>

    </div>
  );
};