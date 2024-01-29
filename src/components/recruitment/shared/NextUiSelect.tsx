


import React from "react";
import {Select, SelectItem} from "@nextui-org/react";
// WILL USE NPM PACKAGE COUNTRY STATE CITY!
export const cities = [
    {country: "Lahore", value: "lahore"},
    {country: "Karachi", value: "karachi"},
    {country: "Istanbul", value: "istanbul"},
  ];

type Props = {

}

type City = {
    country: string
    value: string
}
export default function NextUISelect({}:Props) {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      {/* <Select 
        label="Select an animal" 
        className="max-w-xs" 
      >
        {cities.map((city:City) => (
          <SelectItem key={city.value} value={city.value}>
            {city.country}
          </SelectItem>
        ))}
      </Select> */}
    </div>
  );
}
