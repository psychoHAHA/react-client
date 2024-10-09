import React from "react"

type Props = {
  children: React.ReactElement[] | React.ReactElement
}

const Container = ({ children }: Props) => {
  return <div className="flex max-w-screen-x1 mx-auto mt-10">{ children }</div>
}

export default Container
