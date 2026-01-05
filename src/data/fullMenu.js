import imgBurgerChickenSingle from '../assets/image/burger_chicken_single.webp'
import imgBurgerChickenDouble from '../assets/image/burger_chicken_double.webp'
import imgBurgerBeefSingle from '../assets/image/burger_beef_single.webp'
import imgBurgerBeefDouble from '../assets/image/burger_beef_double.webp'
import chickenToastImg from '../assets/image/toast_chicken.webp'
import beefToastImg from '../assets/image/toast_beef.webp'

export const fullMenu = [
  {
    featured: true,
    id: 'burger-chicken-single',
    category: 'burger',
    subcategory: 'chicken',
    label: 'Burger Ayam',
    description: '1 chicken patty, cheese, sauce, mayonnaise',
    price: 16000,
    image: imgBurgerChickenSingle,
    tags: ['burger', 'chicken', 'single'],
  },
  {
    id: 'burger-chicken-double',
    category: 'burger',
    subcategory: 'chicken',
    label: 'Burger Ayam',
    description: '2 chicken patty, cheese, sauce, mayonnaise',
    price: 22000,
    image: imgBurgerChickenDouble,
    tags: ['burger', 'chicken', 'double'],
  },
  {
    featured: true,
    id: 'burger-beef-single',
    category: 'burger',
    subcategory: 'beef',
    label: 'Burger Sapi',
    description: '1 beef patty, cheese, sauce, mayonnaise',
    price: 19000,
    image: imgBurgerBeefSingle,
    tags: ['burger', 'beef', 'single'],
  },
  {
    id: 'burger-beef-double',
    category: 'burger',
    subcategory: 'beef',
    label: 'Burger Sapi',
    description: '2 beef patty, cheese, sauce, mayonnaise',
    price: 28000,
    image: imgBurgerBeefDouble,
    tags: ['burger', 'beef', 'double'],
  },
  {
    id: 'toast-chicken',
    category: 'toast',
    subcategory: 'chicken',
    label: 'Chicken Toast',
    description: 'Chicken patty, cheese, sauce, mayonnaise',
    price: 17000,
    image: chickenToastImg,
    tags: ['toast', 'chicken'],
  },
  {
    id: 'toast-beef',
    category: 'toast',
    subcategory: 'beef',
    label: 'Beef Toast',
    description: 'Beef patty, cheese, sauce, mayonnaise',
    price: 20000,
    image: beefToastImg,
    tags: ['toast', 'beef'],
  },
]
