import React from "react"

const Button = ({
  stringValue,
  setCalculatedValueString,
  calculatedValueString,
}) => {

    


  return (
    <button
      onClick={() =>
        setCalculatedValueString(
          !calculatedValueString
            ? stringValue
            : calculatedValueString + stringValue
        )
      }
      className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold"
    >
      <div className="rounded-full h-20 w-20 flex items-center bg-blue-800 justify-center shadow-lg border-2 border-blue-700 hover:border-2 hover:border-gray-500 focus:outline-none">
        {stringValue}
      </div>
    </button>
  )
}

export default Button
