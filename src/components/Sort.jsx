import React from 'react';
import { Menu,Input, MenuItem } from 'semantic-ui-react'


const Sort = ({ setSort, sortBy, setSearch, searchQuery }) => {

  return(
  <Menu text horizontal="true">
          <Menu.Item header>Сортувати по:</Menu.Item>
          <Menu.Item
            active={sortBy === 'all'}
            onClick={setSort.bind(this, 'all')}
          ><strong>Всі</strong> 
          </Menu.Item>
          <Menu.Item
            active={sortBy === 'title'}
            onClick={setSort.bind(this, 'title')}
          ><strong>Назва</strong></Menu.Item>
          <Menu.Item
            active={sortBy === 'priceLow'}
            onClick={setSort.bind(this, 'priceLow')}
          ><strong>Ціна(дешеві)</strong> </Menu.Item>
          <Menu.Item
            active={sortBy === 'priceHigh'}
            onClick={setSort.bind(this, 'priceHigh')}
          ><strong>Ціна(дорогі)</strong></Menu.Item>
          <MenuItem>
          <Input icon="search" 
          onChange={e=>setSearch(e.target.value)} 
          placeholder="Знайти"
          value={searchQuery}
          />
          </MenuItem>
        </Menu>
  )
};

export default Sort;