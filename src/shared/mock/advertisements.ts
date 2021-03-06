import { nanoid } from 'nanoid'

export const advertisementsConfig = [
  {
    id: nanoid(),
    link: '/advertisement/1',
    type: 'citizen',
    title: 'Cafe Kafka',
    date: new Date(),
    location: 'Warsaw, Poland',
    imgLink: 'https://studentdepot.pl/Media/Photos/001323photo.jpeg',
    rating: 4,
    likeAmount: 34,
    disLikeAmount: 2,
    peopleViewed: 123,
  },
  {
    id: nanoid(),
    link: '/advertisement/2',
    type: 'entrepreneur',
    title: 'Kawa Warszawa',
    date: new Date(),
    location: 'Warsaw',
    imgLink: 'https://kawa-warszawa.pl/wp-content/uploads/2021/05/Tlo-1000x650-45.jpg',
    rating: 4,
    likeAmount: 24,
    disLikeAmount: 1,
    peopleViewed: 133,
  },
  {
    id: nanoid(),
    link: '/advertisement/3',
    type: 'entrepreneur',
    title: 'Cafe',
    date: new Date(),
    location: 'Warsaw',
    imgLink: 'https://www.hexham-courant.co.uk/resources/images/12623076?type=responsive-gallery-fullscreen',
    rating: 3,
    likeAmount: 3,
    disLikeAmount: 1,
    peopleViewed: 13,
  },
  {
    id: nanoid(),
    link: '/advertisement/4',
    type: 'citizen',
    title: 'Chillouthostel',
    date: new Date(),
    location: 'Warsaw',
    imgLink: 'https://chillouthostel.pl/wp-content/uploads/2018/03/67152.jpg',
    rating: 5,
    likeAmount: 64,
    disLikeAmount: 2,
    peopleViewed: 163,
  },
  {
    id: nanoid(),
    link: '/advertisement/5',
    type: 'citizen',
    title: 'My-mamy',
    date: new Date(),
    location: 'Warsaw',
    imgLink: 'https://mymamy.pl/uploads/polecane-miejsca/item-c836cd3c819b57115b6c78e9c8856474.jpg',
    rating: 5,
    likeAmount: 10,
    disLikeAmount: 0,
    peopleViewed: 22,
  },
  {
    id: nanoid(),
    link: '/advertisement/6',
    type: 'citizen',
    title: 'Eventime',
    date: new Date(),
    location: 'Warsaw',
    imgLink: 'https://www.eventime.info/media/djcatalog2/images/item/3/rivercafe-restauracja-na-wisle.1_f.png',
    rating: 4,
    likeAmount: 123,
    disLikeAmount: 10,
    peopleViewed: 340,
  },
  {
    id: nanoid(),
    link: '/advertisement/7',
    type: 'entrepreneur',
    title: 'Cafe Kafka',
    date: new Date(),
    location: 'Warsaw',
    imgLink: 'https://www.gdziezjesc.info/kuchnie/images_new/100140/3.jpg',
    rating: 5,
    likeAmount: 14,
    disLikeAmount: 4,
    peopleViewed: 83,
  },
]
