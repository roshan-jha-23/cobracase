//bg-blue-900 border-blue-900
//bg-zinc-900 border-zinc-900
//bg-rose-900 border-rose-900
//bg-red-900 border-red-900
//bg-green-900 border-green-900
//bg-yellow-900 border-yellow-900
//bg-orange-900 border-orange-900
//bg-pink-900 border-pink-900
//bg-purple-900 border-purple-900

import { PRODUCT_PRICES } from "@/config/products";

//bg-teal-900 border-teal-900
export const COLORS = [
  { label: "Black", value: "black", tw: "zinc-900" },
  { label: "Blue", value: "blue", tw: "blue-900" },
  { label: "Rose", value: "rose", tw: "rose-900" },
  { label: "Red", value: "red", tw: "red-900" },
  { label: "Green", value: "green", tw: "green-900" },
  { label: "Yellow", value: "yellow", tw: "yellow-900" },
  { label: "Purple", value: "purple", tw: "purple-900" },
  { label: "Orange", value: "orange", tw: "orange-900" },
  { label: "Pink", value: "pink", tw: "pink-900" },
  { label: "Teal", value: "teal", tw: "teal-900" },
] as const

export const MODELS={
  name:"models",
  options:[
    {
      label:"iPhone X",
      value:"iphonex"
    },
    {
      label:"iPhone 11",
      value:"iphone11"
    },
    {
      label:"iPhone 12",
      value:"iphone12"
    },
    {
      label:"iPhone 13",
      value:"iphone13"
    },
    {
      label:"iPhone 14",
      value:"iphone14"
    },
    {
      label:"iPhone 15",
      value:"iphone15"
    },
    {
      label:"iPhone 16",
      value:"iphone16"
    },
  ]
} as const

export const MATERIALS = {
  name: "materials",
  options: [
    {
      label: "Silicone",
      value: "silicone",
      description: undefined,
      price: PRODUCT_PRICES.material.Silicone,
    },
    {
      label: "Soft PolyCarbonate",
      value: "polyCarbonate",
      description: "Scratch-resitant coating",
      price: PRODUCT_PRICES.material.polyCarbonate,
    },
  ],
} as const;
export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "Smooth",
      value: "smooth",
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Textured",
      value: "texture",
      description: "Soft Grippy Texture",
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const;

