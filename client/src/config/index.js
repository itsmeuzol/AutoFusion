export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "cars", label: "Cars" },
      { id: "bikes", label: "Bikes" },
      { id: "rentals", label: "Rentals" },
      { id: "services", label: "Service" },
      { id: "bids", label: "Bids" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "tesla", label: "Tesla" },
      { id: "toyota", label: "Toyota" },
      { id: "honda", label: "Honda" },
      { id: "ford", label: "Ford" },
      { id: "bmw", label: "BMW" },
      { id: "tata", label: "Tata Motors" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "vehicles",
    label: "Vehicles",
    path: "/shop/listing",
  },
  {
    id: "cars",
    label: "Cars",
    path: "/shop/listing?category=cars",
  },
  {
    id: "bikes",
    label: "Bikes",
    path: "/shop/listing?category=bikes",
  },
  {
    id: "rentals",
    label: "Rentals",
    path: "/shop/listing?category=rentals",
  },
  {
    id: "bids",
    label: "Bids",
    path: "/shop/listing?category=bids",
  },
  {
    id: "services",
    label: "ServiceParts",
    path: "/shop/listing?category=services",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  cars: "Cars",
  bikes: "Bikes",
  rentals: "Rentals",
  services: "Services",
  bids: "Bids",
};

export const brandOptionsMap = {
  tesla: "Tesla",
  toyota: "Toyota",
  honda: "Honda",
  ford: "Ford",
  bmw: "BMW",
  tata: "Tata Motors",
};

export const filterOptions = {
  category: [
    { id: "cars", label: "Cars" },
    { id: "bikes", label: "Bikes" },
    { id: "rentals", label: "Rentals" },
    { id: "services", label: "ServiceParts" },
    { id: "bids", label: "Bids" },
  ],
  brand: [
    { id: "tesla", label: "Tesla" },
    { id: "toyota", label: "Toyota" },
    { id: "honda", label: "Honda" },
    { id: "ford", label: "Ford" },
    { id: "bmw", label: "BMW" },
    { id: "tata", label: "Tata Motors" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
