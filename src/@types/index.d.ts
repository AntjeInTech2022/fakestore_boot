import { Auth } from "firebase/auth";
interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
  rating: Array<{
    rate: number;
    count: number;
  }>;
}

type Products = Product[];

interface ProductsContext {
  products: Products | null;
}

interface User {
  auth: Auth;
  uid: string;
  displayName?: string | null;
  email: string;
  photoURL?: string | null;
  prevState?: null;
}
