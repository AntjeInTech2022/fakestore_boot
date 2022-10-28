import {
  Auth,
  UserCredential,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

interface AuthContextModel {
  auth: Auth;
  user: User | null;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  sendPasswordResetEmail?: (email: string) => Promise<void>;
}

interface AuthContext {
  auth: Auth;
  user: User | null;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  sendPasswordResetEmail?: (email: string) => Promise<void>;
  createUser: (email: string, password: string) => Promise<boolean>;
  signInWithGoogle: () => void;
}
interface AuthProviderProps {
  children?: ReactNode;
}

interface UserContextState {
  isAuthenticated: boolean;
  isLoading: boolean;
  id?: string;
}

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
