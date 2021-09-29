import { nanoid } from 'nanoid'

export const categoriesCitizenConfig = [
  {
    id: nanoid(),
    name: 'Gastronomy',
    imgUrl:
      'https://format-com-cld-res.cloudinary.com/image/private/s--3oF8YeUW--/c_limit,g_center,h_1200,w_65535/fl_keep_iptc.progressive,q_95/DuchessNovember2015_Final-0331_dgksz3.jpg',
    list: [
      { id: nanoid(), name: 'bars', link: '/country/category/bars/citizen-requests' },
      { id: nanoid(), name: 'cafeterias', link: '/country/category/cafeterias/citizen-requests' },
      { id: nanoid(), name: 'coffee shops', link: '/country/category/coffee_shops/citizen-requests' },
      {
        id: nanoid(),
        name: 'discotheque/nightclubs',
        link: '/country/category/discotheque_nightclubs/citizen-requests',
      },
      {
        id: nanoid(),
        name: 'family/casual dining restaurants',
        link: '/country/category/family_casual_dining_restaurants/citizen-requests',
      },
      { id: nanoid(), name: 'fast food outlets', link: '/country/category/fast_food_outlets/citizen-requests' },
      { id: nanoid(), name: 'food courts', link: '/country/category/food_courts/citizen-requests' },
      { id: nanoid(), name: 'grill rooms', link: '/country/category/grill_rooms/citizen-requests' },
      { id: nanoid(), name: 'poolside barbeque', link: '/country/category/poolside_barbeque/citizen-requests' },
      { id: nanoid(), name: 'pubs', link: '/country/category/pubs/citizen-requests' },
      {
        id: nanoid(),
        name: 'specialty/ethnic restaurants',
        link: '/country/category/specialty_ethnic_restaurants/citizen-requests',
      },
      { id: nanoid(), name: 'take-away counters', link: '/country/category/take-away_counters/citizen-requests' },
      { id: nanoid(), name: 'themed restaurant', link: '/country/category/themed_restaurant/citizen-requests' },
      { id: nanoid(), name: 'vending machines', link: '/country/category/vending_machines/citizen-requests' },
    ],
  },
  {
    id: nanoid(),
    name: 'Shops',
    imgUrl: 'https://cdn3.iconfinder.com/data/icons/e-commerce-2-2/380/1-512.png',
    list: [
      { id: nanoid(), name: 'supermarket', link: '/country/category/supermarket/citizen-requests' },
      { id: nanoid(), name: 'bakers bakery', link: '/country/category/bakers_bakery/citizen-requests' },
      { id: nanoid(), name: 'bookshop', link: '/country/category/bookshop/citizen-requests' },
      { id: nanoid(), name: 'butcher’s', link: '/country/category/butcher’s/citizen-requests' },
      { id: nanoid(), name: 'chemist pharmacy', link: '/country/category/chemist_pharmacy/citizen-requests' },
      { id: nanoid(), name: 'stationers', link: '/country/category/stationers/citizen-requests' },
      { id: nanoid(), name: 'shoe shops', link: '/country/category/shoe_shops/citizen-requests' },
      { id: nanoid(), name: 'sport inventory', link: '/country/category/sport_inventory/citizen-requests' },
      { id: nanoid(), name: 'fish shop', link: '/country/category/fish_shop/citizen-requests' },
      { id: nanoid(), name: 'greengrocer’s', link: '/country/category/greengrocer’s/citizen-requests' },
      { id: nanoid(), name: 'hardware store', link: '/country/category/hardware_store/citizen-requests' },
    ],
  },
  {
    id: nanoid(),
    name: 'Sport/Entertaiments',
    imgUrl: 'https://www.norvanreports.com/wp-content/uploads/2021/01/Sports-in-AfCFTA-norvanreports.jpg',
    list: [
      { id: nanoid(), name: 'Basketball', link: '/country/category/basketball/citizen-requests' },
      { id: nanoid(), name: 'Football', link: '/country/category/football/citizen-requests' },
      { id: nanoid(), name: 'Chess', link: '/country/category/chess/citizen-requests' },
      { id: nanoid(), name: 'Volleyball', link: '/country/category/volleyball/citizen-requests' },
      { id: nanoid(), name: 'Wrestling', link: '/country/category/wrestling/citizen-requests' },
      { id: nanoid(), name: 'Kendo', link: '/country/category/kendo/citizen-requests' },
      { id: nanoid(), name: 'Athletics', link: '/country/category/athletics/citizen-requests' },
    ],
  },
  {
    id: nanoid(),
    name: 'Education',
    imgUrl:
      'https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/01/Pictures/_c34102da-9849-11e5-b4f4-1b7a09ed2cea.jpg',
    list: [
      { id: nanoid(), name: 'Schools', link: '/country/category/schools/citizen-requests' },
      { id: nanoid(), name: 'Museums', link: '/country/category/museums/citizen-requests' },
      {
        id: nanoid(),
        name: 'Computer Lab Classrooms',
        link: '/country/category/computer_lab_classrooms/citizen-requests',
      },
      { id: nanoid(), name: 'Science Lab', link: '/country/category/science_lab/citizen-requests' },
      {
        id: nanoid(),
        name: 'content Mastery and Life Skill Classrooms',
        link: '/country/category/content_mastery_and_life_skill_classrooms/citizen-requests',
      },
      { id: nanoid(), name: 'School Campuses', link: '/country/category/school_campuses/citizen-requests' },
    ],
  },
  { id: nanoid(), name: '5', list: [{ id: nanoid(), name: '5', link: '/country/category/4/citizen-requests' }] },
  { id: nanoid(), name: '6', list: [{ id: nanoid(), name: '6', link: '/country/category/5/citizen-requests' }] },
  { id: nanoid(), name: '7', list: [{ id: nanoid(), name: '7', link: '/country/category/6/citizen-requests' }] },
  { id: nanoid(), name: '8', list: [{ id: nanoid(), name: '8', link: '/country/category/7/citizen-requests' }] },
  { id: nanoid(), name: '9', list: [{ id: nanoid(), name: '9', link: '/country/category/8/citizen-requests' }] },
]

export const categoriesCountryConfig = [
  {
    id: nanoid(),
    name: 'Gastronomy',
    imgUrl:
      'https://format-com-cld-res.cloudinary.com/image/private/s--3oF8YeUW--/c_limit,g_center,h_1200,w_65535/fl_keep_iptc.progressive,q_95/DuchessNovember2015_Final-0331_dgksz3.jpg',
    list: [
      { id: nanoid(), name: 'bars', link: '/country/category/bars' },
      { id: nanoid(), name: 'cafeterias', link: '/country/category/cafeterias' },
      { id: nanoid(), name: 'coffee shops', link: '/country/category/coffee_shops' },
      { id: nanoid(), name: 'discotheque/nightclubs', link: '/country/category/discotheque_nightclubs' },
      {
        id: nanoid(),
        name: 'family/casual dining restaurants',
        link: '/country/category/family_casual_dining_restaurants',
      },
      { id: nanoid(), name: 'fast food outlets', link: '/country/category/fast_food_outlets' },
      { id: nanoid(), name: 'food courts', link: '/country/category/food_courts' },
      { id: nanoid(), name: 'grill rooms', link: '/country/category/grill_rooms' },
      { id: nanoid(), name: 'poolside barbeque', link: '/country/category/poolside_barbeque' },
      { id: nanoid(), name: 'pubs', link: '/country/category/pubs' },
      {
        id: nanoid(),
        name: 'specialty/ethnic restaurants',
        link: '/country/category/specialty_ethnic_restaurants',
      },
      { id: nanoid(), name: 'take-away counters', link: '/country/category/take-away_counters' },
      { id: nanoid(), name: 'themed restaurant', link: '/country/category/themed_restaurant' },
      { id: nanoid(), name: 'vending machines', link: '/country/category/vending_machines' },
    ],
  },
  {
    id: nanoid(),
    name: 'Shops',
    imgUrl: 'https://cdn3.iconfinder.com/data/icons/e-commerce-2-2/380/1-512.png',
    list: [
      { id: nanoid(), name: 'supermarket', link: '/country/category/supermarket' },
      { id: nanoid(), name: 'bakers bakery', link: '/country/category/bakers_bakery' },
      { id: nanoid(), name: 'bookshop', link: '/country/category/bookshop' },
      { id: nanoid(), name: 'butcher’s', link: '/country/category/butcher’s' },
      { id: nanoid(), name: 'chemist pharmacy', link: '/country/category/chemist_pharmacy' },
      { id: nanoid(), name: 'sport inventory', link: '/country/category/sport_inventory' },
      { id: nanoid(), name: 'stationers', link: '/country/category/stationers' },
      { id: nanoid(), name: 'shoe shops', link: '/country/category/shoe_shops' },
      { id: nanoid(), name: 'fish shop', link: '/country/category/fish_shop' },
      { id: nanoid(), name: 'greengrocer’s', link: '/country/category/greengrocer’s' },
      { id: nanoid(), name: 'hardware store', link: '/country/category/hardware_store' },
    ],
  },
  {
    id: nanoid(),
    name: 'Sport/Entertaiments',
    imgUrl: 'https://www.norvanreports.com/wp-content/uploads/2021/01/Sports-in-AfCFTA-norvanreports.jpg',
    list: [
      { id: nanoid(), name: 'Basketball', link: '/country/category/basketball' },
      { id: nanoid(), name: 'Football', link: '/country/category/football' },
      { id: nanoid(), name: 'Chess', link: '/country/category/chess' },
      { id: nanoid(), name: 'Volleyball', link: '/country/category/volleyball' },
      { id: nanoid(), name: 'Wrestling', link: '/country/category/wrestling' },
      { id: nanoid(), name: 'Kendo', link: '/country/category/kendo' },
      { id: nanoid(), name: 'Athletics', link: '/country/category/athletics' },
    ],
  },
  {
    id: nanoid(),
    name: 'Education',
    imgUrl:
      'https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/01/Pictures/_c34102da-9849-11e5-b4f4-1b7a09ed2cea.jpg',
    list: [
      { id: nanoid(), name: 'Schools', link: '/country/category/schools' },
      { id: nanoid(), name: 'Museums', link: '/country/category/museums' },
      {
        id: nanoid(),
        name: 'Computer Lab Classrooms',
        link: '/country/category/computer_lab_classrooms',
      },
      { id: nanoid(), name: 'Science Lab', link: '/country/category/science_lab' },
      {
        id: nanoid(),
        name: 'content Mastery and Life Skill Classrooms',
        link: '/country/category/content_mastery_and_life_skill_classrooms',
      },
      { id: nanoid(), name: 'School Campuses', link: '/country/category/school_campuses' },
    ],
  },
  { id: nanoid(), name: '5', list: [{ id: nanoid(), name: '5', link: '/country/category/5' }] },
  { id: nanoid(), name: '6', list: [{ id: nanoid(), name: '6', link: '/country/category/6' }] },
  { id: nanoid(), name: '7', list: [{ id: nanoid(), name: '7', link: '/country/category/7' }] },
  { id: nanoid(), name: '8', list: [{ id: nanoid(), name: '8', link: '/country/category/8' }] },
  { id: nanoid(), name: '9', list: [{ id: nanoid(), name: '9', link: '/country/category/9' }] },
  { id: nanoid(), name: '10', list: [{ id: nanoid(), name: '10', link: '/country/category/10' }] },
  { id: nanoid(), name: '11', list: [{ id: nanoid(), name: '11', link: '/country/category/11' }] },
]

export const categoriesEntrepreneurConfig = [
  {
    id: nanoid(),
    name: 'gastronomy',
    imgUrl:
      'https://format-com-cld-res.cloudinary.com/image/private/s--3oF8YeUW--/c_limit,g_center,h_1200,w_65535/fl_keep_iptc.progressive,q_95/DuchessNovember2015_Final-0331_dgksz3.jpg',
    list: [
      { id: nanoid(), name: 'bars', link: '/country/category/bars/entrepreneur-requests' },
      { id: nanoid(), name: 'cafeterias', link: '/country/category/cafeterias/entrepreneur-requests' },
      { id: nanoid(), name: 'coffee shops', link: '/country/category/coffee_shops/entrepreneur-requests' },
      {
        id: nanoid(),
        name: 'discotheque/nightclubs',
        link: '/country/category/discotheque_nightclubs/entrepreneur-requests',
      },
      {
        id: nanoid(),
        name: 'family/casual dining restaurants',
        link: '/country/category/family_casual_dining_restaurants/entrepreneur-requests',
      },
      { id: nanoid(), name: 'fast food outlets', link: '/country/category/fast_food_outlets/entrepreneur-requests' },
      { id: nanoid(), name: 'food courts', link: '/country/category/food_courts/entrepreneur-requests' },
      { id: nanoid(), name: 'grill rooms', link: '/country/category/grill_rooms/entrepreneur-requests' },
      { id: nanoid(), name: 'poolside barbeque', link: '/country/category/poolside_barbeque/entrepreneur-requests' },
      { id: nanoid(), name: 'pubs', link: '/country/category/pubs/entrepreneur-requests' },
      {
        id: nanoid(),
        name: 'specialty/ethnic restaurants',
        link: '/country/category/specialty_ethnic_restaurants/entrepreneur-requests',
      },
      { id: nanoid(), name: 'take-away counters', link: '/country/category/take-away_counters/entrepreneur-requests' },
      { id: nanoid(), name: 'themed restaurant', link: '/country/category/themed_restaurant/entrepreneur-requests' },
      { id: nanoid(), name: 'vending machines', link: '/country/category/vending_machines/entrepreneur-requests' },
    ],
  },
  {
    id: nanoid(),
    name: 'Shops',
    imgUrl: 'https://cdn3.iconfinder.com/data/icons/e-commerce-2-2/380/1-512.png',
    list: [
      { id: nanoid(), name: 'supermarket', link: '/country/category/supermarket/entrepreneur-requests' },
      { id: nanoid(), name: 'bakers bakery', link: '/country/category/bakers_bakery/entrepreneur-requests' },
      { id: nanoid(), name: 'bookshop', link: '/country/category/bookshop/entrepreneur-requests' },
      { id: nanoid(), name: 'butcher’s', link: '/country/category/butcher’s/entrepreneur-requests' },
      { id: nanoid(), name: 'chemist pharmacy', link: '/country/category/chemist_pharmacy/entrepreneur-requests' },
      { id: nanoid(), name: 'stationers', link: '/country/category/stationers/entrepreneur-requests' },
      { id: nanoid(), name: 'shoe shops', link: '/country/category/shoe_shops/entrepreneur-requests' },
      { id: nanoid(), name: 'fish shop', link: '/country/category/fish_shop/entrepreneur-requests' },
      { id: nanoid(), name: 'sport inventory', link: '/country/category/sport_inventory/entrepreneur-requests' },
      { id: nanoid(), name: 'greengrocer’s', link: '/country/category/greengrocer’s/entrepreneur-requests' },
      { id: nanoid(), name: 'hardware store', link: '/country/category/hardware_store/entrepreneur-requests' },
    ],
  },
  {
    id: nanoid(),
    name: 'Sport/Entertaiments',
    imgUrl: 'https://www.norvanreports.com/wp-content/uploads/2021/01/Sports-in-AfCFTA-norvanreports.jpg',
    list: [
      { id: nanoid(), name: 'Basketball', link: '/country/category/basketball/entrepreneur-requests' },
      { id: nanoid(), name: 'Football', link: '/country/category/football/entrepreneur-requests' },
      { id: nanoid(), name: 'Chess', link: '/country/category/chess/entrepreneur-requests' },
      { id: nanoid(), name: 'Volleyball', link: '/country/category/volleyball/entrepreneur-requests' },
      { id: nanoid(), name: 'Wrestling', link: '/country/category/wrestling/entrepreneur-requests' },
      { id: nanoid(), name: 'Kendo', link: '/country/category/kendo/entrepreneur-requests' },
      { id: nanoid(), name: 'Athletics', link: '/country/category/athletics/entrepreneur-requests' },
    ],
  },
  {
    id: nanoid(),
    name: 'Education',
    imgUrl:
      'https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/01/Pictures/_c34102da-9849-11e5-b4f4-1b7a09ed2cea.jpg',
    list: [
      { id: nanoid(), name: 'Schools', link: '/country/category/schools/entrepreneur-requests' },
      { id: nanoid(), name: 'Museums', link: '/country/category/museums/entrepreneur-requests' },
      {
        id: nanoid(),
        name: 'Computer Lab Classrooms',
        link: '/country/category/computer_lab_classrooms/entrepreneur-requests',
      },
      { id: nanoid(), name: 'Science Lab', link: '/country/category/science_lab/entrepreneur-requests' },
      {
        id: nanoid(),
        name: 'content Mastery and Life Skill Classrooms',
        link: '/country/category/content_mastery_and_life_skill_classrooms/entrepreneur-requests',
      },
      { id: nanoid(), name: 'School Campuses', link: '/country/category/school_campuses/entrepreneur-requests' },
    ],
  },
  { id: nanoid(), name: '5', list: [{ id: nanoid(), name: '5', link: '/country/category/4/citizen-requests' }] },
]

export const locationCategoriesConfig = (locationId: string | number) => {
  return [
    {
      id: nanoid(),
      name: 'gastronomy',
      imgUrl:
        'https://format-com-cld-res.cloudinary.com/image/private/s--3oF8YeUW--/c_limit,g_center,h_1200,w_65535/fl_keep_iptc.progressive,q_95/DuchessNovember2015_Final-0331_dgksz3.jpg',
      list: [
        { id: nanoid(), name: 'bars', link: `/location/${locationId}/category/bars` },
        { id: nanoid(), name: 'cafeterias', link: `/location/${locationId}/category/cafeterias` },
        { id: nanoid(), name: 'coffee shops', link: `/location/${locationId}/category/coffee_shops` },
        {
          id: nanoid(),
          name: 'discotheque/nightclubs',
          link: `/location/${locationId}/category/discotheque_nightclubs`,
        },
        {
          id: nanoid(),
          name: 'family/casual dining restaurants',
          link: `/location/${locationId}/category/family_casual_dining_restaurants`,
        },
        { id: nanoid(), name: 'fast food outlets', link: `/location/${locationId}/category/fast_food_outlets` },
        { id: nanoid(), name: 'food courts', link: `/location/${locationId}/category/food_courts` },
        { id: nanoid(), name: 'grill rooms', link: `/location/${locationId}/category/grill_rooms` },
        { id: nanoid(), name: 'poolside barbeque', link: `/location/${locationId}/category/poolside_barbeque` },
        { id: nanoid(), name: 'pubs', link: `/location/${locationId}/category/pubs` },
        {
          id: nanoid(),
          name: 'specialty/ethnic restaurants',
          link: '/country/category/specialty_ethnic_restaurants/specialty_ethnic_restaurants',
        },
        {
          id: nanoid(),
          name: 'take-away counters',
          link: `/location/${locationId}/category/take_away_counters`,
        },
        { id: nanoid(), name: 'themed restaurant', link: `/location/${locationId}/category/themed_restaurant` },
        { id: nanoid(), name: 'vending machines', link: `/location/${locationId}/category/vending_machines` },
      ],
    },
    {
      id: nanoid(),
      name: 'Shops',
      imgUrl: 'https://cdn3.iconfinder.com/data/icons/e-commerce-2-2/380/1-512.png',
      list: [
        { id: nanoid(), name: 'supermarket', link: `/location/${locationId}/category/supermarket` },
        { id: nanoid(), name: 'bakers bakery', link: `/location/${locationId}/category/bakers_bakery` },
        { id: nanoid(), name: 'bookshop', link: `/location/${locationId}/category/bookshop` },
        { id: nanoid(), name: 'butcher’s', link: `/location/${locationId}/category/butcher’s` },
        { id: nanoid(), name: 'chemist pharmacy', link: `/location/${locationId}/category/chemist_pharmacy` },
        { id: nanoid(), name: 'stationers', link: `/location/${locationId}/category/stationers` },
        { id: nanoid(), name: 'shoe shops', link: `/location/${locationId}/category/shoe_shops` },
        { id: nanoid(), name: 'fish shop', link: `/location/${locationId}/category/fish_shop` },
        { id: nanoid(), name: 'sport inventory', link: `/location/${locationId}/category/sport_inventory` },
        { id: nanoid(), name: 'greengrocer’s', link: `/location/${locationId}/category/greengrocer’s` },
        { id: nanoid(), name: 'hardware store', link: `/location/${locationId}/category/hardware_store` },
      ],
    },
    {
      id: nanoid(),
      name: 'Sport/Entertaiments',
      imgUrl: 'https://www.norvanreports.com/wp-content/uploads/2021/01/Sports-in-AfCFTA-norvanreports.jpg',
      list: [
        { id: nanoid(), name: 'Basketball', link: `/location/${locationId}/category/basketball` },
        { id: nanoid(), name: 'Football', link: `/location/${locationId}/category/football` },
        { id: nanoid(), name: 'Chess', link: `/location/${locationId}/category/chess` },
        { id: nanoid(), name: 'Volleyball', link: `/location/${locationId}/category/volleyball` },
        { id: nanoid(), name: 'Wrestling', link: `/location/${locationId}/category/wrestling` },
        { id: nanoid(), name: 'Kendo', link: `/location/${locationId}/category/kendo` },
        { id: nanoid(), name: 'Athletics', link: `/location/${locationId}/category/athletics` },
      ],
    },
    {
      id: nanoid(),
      name: 'Education',
      imgUrl:
        'https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/01/Pictures/_c34102da-9849-11e5-b4f4-1b7a09ed2cea.jpg',
      list: [
        { id: nanoid(), name: 'Schools', link: `/location/${locationId}/category/schools` },
        { id: nanoid(), name: 'Museums', link: `/location/${locationId}/category/museums` },
        {
          id: nanoid(),
          name: 'Computer Lab Classrooms',
          link: `/location/${locationId}/category/computer_lab_classrooms`,
        },
        { id: nanoid(), name: 'Science Lab', link: `/location/${locationId}/category/science_lab` },
        {
          id: nanoid(),
          name: 'content Mastery and Life Skill Classrooms',
          link: `/location/${locationId}/category/content_mastery_and_life_skill_classrooms`,
        },
        { id: nanoid(), name: 'School Campuses', link: `/location/${locationId}/category/school_campuses` },
      ],
    },
    { id: nanoid(), name: '5', list: [{ id: nanoid(), name: '5', link: `/location/${locationId}/category/5` }] },
  ]
}