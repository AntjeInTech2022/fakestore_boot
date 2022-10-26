import { Auth} from "firebase/auth";
interface Product{
    id: string;
    title: string;
    description: string;
    category: string;
    image: string;
    price: number; 
    rating: Array<{
       rate: number;
       count: number}>
}

type Products = Product[]

// interface User {
//     auth: Auth;
//     uid: string;
//     displayName?: string;
//     email: string;
//     photoURL?: string; 
//     prevState?: null;   
// }




  
