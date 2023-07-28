import React, { useState } from "react"
import Button from "../components/calculator/Button"

const calculator = () => {
  const [calculatedValueString, setCalculatedValueString] = useState(null)
  const [lastValue, setLastValue] = useState()
  return (
    <div className="container flex items-center p-4 mx-auto min-h-screen justify-center bg-black">
      <div className="mx-auto overflow-hidden mt-10  mb-2 bg-blue-900 shadow-lg border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6">
        <div className="">
          <div className="p-5 text-white text-center text-3xl bg-blue-900">
            <span className="text-red-500">Calcu</span>lator
          </div>
          <div className="pt-16 p-5 pb-0 text-white text-right text-3xl bg-blue-800">
            {calculatedValueString}
          </div>
          <div className="p-5 text-white text-right text-3xl bg-blue-800">
            {lastValue && "=" + <span className="text-red-500">2100</span>}
          </div>

          <div className="flex items-stretch bg-blue-900 h-24">
            <Button
              stringValue="%"
              setCalculatedValueString={setCalculatedValueString}
              calculatedValueString={calculatedValueString}
            />
            <Button
              stringValue="("
              setCalculatedValueString={setCalculatedValueString}
              calculatedValueString={calculatedValueString}
            />
            <Button
              stringValue=")"
              setCalculatedValueString={setCalculatedValueString}
              calculatedValueString={calculatedValueString}
            />
            <Button
              stringValue="÷"
              setCalculatedValueString={setCalculatedValueString}
              calculatedValueString={calculatedValueString}
            />
          </div>

          <div className="flex items-stretch bg-blue-900 h-24">
            <Button
              stringValue="7"
              setCalculatedValueString={setCalculatedValueString}
              calculatedValueString={calculatedValueString}
            />
            <Button
              stringValue="8"
              setCalculatedValueString={setCalculatedValueString}
              calculatedValueString={calculatedValueString}
            />
            <Button
              stringValue="9"
              setCalculatedValueString={setCalculatedValueString}
              calculatedValueString={calculatedValueString}
            />
            <Button
              stringValue="×"
              setCalculatedValueString={setCalculatedValueString}
              calculatedValueString={calculatedValueString}
            />
          </div>

          <div className="flex items-stretch bg-blue-900 h-24">
            <Button
              stringValue="4"
              setCalculatedValueString={setCalculatedValueString}
              calculatedValueString={calculatedValueString}
            />
            <Button
              stringValue="5"
              setCalculatedValueString={setCalculatedValueString}
              calculatedValueString={calculatedValueString}
            />
            <Button
              stringValue="6"
              setCalculatedValueString={setCalculatedValueString}
              calculatedValueString={calculatedValueString}
            />
            <Button
              stringValue="-"
              setCalculatedValueString={setCalculatedValueString}
              calculatedValueString={calculatedValueString}
            />
          </div>

          <div className="flex items-stretch bg-blue-900 h-24">
            <Button
              stringValue="1"
              setCalculatedValueString={setCalculatedValueString}
              calculatedValueString={calculatedValueString}
            />
            <Button
              stringValue="2"
              setCalculatedValueString={setCalculatedValueString}
              calculatedValueString={calculatedValueString}
            />
            <Button
              stringValue="3"
              setCalculatedValueString={setCalculatedValueString}
              calculatedValueString={calculatedValueString}
            />
            <Button
              stringValue="+"
              setCalculatedValueString={setCalculatedValueString}
              calculatedValueString={calculatedValueString}
            />
          </div>

          <div className="flex items-stretch bg-blue-900 h-24 mb-4">
            <Button
              stringValue="+"
              setCalculatedValueString={setCalculatedValueString}
              calculatedValueString={calculatedValueString}
            />
            <Button
              stringValue="0"
              setCalculatedValueString={setCalculatedValueString}
              calculatedValueString={calculatedValueString}
            />
            <Button
              stringValue="."
              setCalculatedValueString={setCalculatedValueString}
              calculatedValueString={calculatedValueString}
            />
            <Button
              stringValue="="
              setCalculatedValueString={setCalculatedValueString}
              calculatedValueString={calculatedValueString}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default calculator
