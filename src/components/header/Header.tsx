import React, { useContext, useState } from "react"
import { ThemeContext } from "../theme-provider/ThemeProvider"
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react"
import { FaRegMoon } from "react-icons/fa"
import { LuSunMedium } from "react-icons/lu"
import { useDispatch, useSelector } from "react-redux"
import {
  logout,
  selectCurrent,
  selectIsAuthenticated,
} from "../../features/user/userSlice"
import { NavLink, useNavigate } from "react-router-dom"
import { CiLogout } from "react-icons/ci"

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentUser = useSelector(selectCurrent)

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem("token")
    navigate("/auth")
  }

  const toggleMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
        <p className="font-bold text-inherit">Network Social</p>
      </NavbarBrand>
      <NavbarItem
        className="lg:flex text-3xl cursor-pointer"
        onClick={() => toggleTheme()}
      >
        {theme === "light" ? <FaRegMoon /> : <LuSunMedium />}
      </NavbarItem>
      <NavbarMenuToggle className="sm:hidden"/>
      <NavbarMenu>
        <NavbarMenu>
          <NavLink to="/" className="text-xl" onClick={toggleMenu}>
            Посты
          </NavLink>
          <NavLink to="/following" className="text-xl" onClick={toggleMenu}>
            Подписки
          </NavLink>
          <NavLink to="/followers" className="text-xl" onClick={toggleMenu}>
            Подписчики
          </NavLink>
          <NavLink to={`/users/${currentUser?.id}`} className="text-xl" onClick={toggleMenu}>
            Профиль
          </NavLink>
          <NavbarItem>
            {isAuthenticated && (
              <Button
                color="default"
                variant="flat"
                className="gap-2"
                onClick={handleLogout}
              >
                <CiLogout />
                <span>Выйти</span>
              </Button>
            )}
          </NavbarItem>
        </NavbarMenu>
      </NavbarMenu>
      <NavbarItem className="hidden sm:inline">
            {isAuthenticated && (
              <Button
                color="default"
                variant="flat"
                className="gap-2"
                onClick={handleLogout}
              >
                <CiLogout />
                <span>Выйти</span>
              </Button>
            )}
          </NavbarItem>
    </Navbar>
  )
}

export default Header
