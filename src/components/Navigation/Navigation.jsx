import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks";
import { Divider, Stack } from "@mui/material";
import css from './Navigation.module.css'

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
      className={css.navigation}    >
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </Stack>
  );
};

export default Navigation;