import React from "react"
import Button from "../button/Button"
import { Link } from "react-router-dom"

type Props = {
  children: React.ReactNode
  icon: JSX.Element
  href: string
}

const NavButton = ({ children, icon, href }: Props) => {
  return (
    <Button className="flex justify-start text-xl" icon={icon}>
      <Link to={href}>{children}</Link>
    </Button>
  )
}

export default NavButton
