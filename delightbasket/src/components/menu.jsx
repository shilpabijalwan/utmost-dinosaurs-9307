import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Box,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

export function CategoriesList() {
  return (
    <Box m={0}>
      <Menu>
        <MenuButton
          as={Button}
          borderRadius="0"
          colorScheme="teal"
          rightIcon={<ChevronDownIcon />}
        >
          SHOP BY CATEGORY
        </MenuButton>
        <MenuList
          left={0}
          borderRadius="0"
          padding={30}
          // border="1px solid blue"
        >
          FRUITS & VEGETABLES <MenuItem>Foodgrains, Oil & Masala</MenuItem>
          <MenuItem>Bakery, Cakes & Dairy</MenuItem>
          <MenuItem>Beverages</MenuItem>
          <MenuItem>Snacks & Branded Foods</MenuItem>
          <MenuItem>Beauty & Hygiene</MenuItem>
          <MenuItem>Cleaning & Household</MenuItem>
          <MenuItem>Snacks & Branded Foods</MenuItem>
          <MenuItem>Baby Care</MenuItem>
          <MenuItem>Kitchen, Garden & Pets</MenuItem>
          <MenuItem>Eggs, Meat & Fish</MenuItem>
          <MenuItem></MenuItem>
          <MenuItem>Gourmet & World Food</MenuItem>
          <MenuItem>View All</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}
