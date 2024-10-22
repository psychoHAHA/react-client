import React from "react"

type Props = {
  children: React.ReactElement[] | React.ReactElement
}

const Container = ({ children }: Props) => {
  return <div className="flex flex-col sm:flex-row max-w-screen-x1 mx-auto mt-10">{ children }</div>
}

export default Container
