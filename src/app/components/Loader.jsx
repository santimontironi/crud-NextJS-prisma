"use client"

import { ClimbingBoxLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
        <ClimbingBoxLoader color="#10B981" size={15} />
    </div>
  )
}

export default Loader