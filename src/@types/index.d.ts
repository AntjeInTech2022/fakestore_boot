//@Lucas use interface or type?
interface intfApiData {
    id: string;
    title: string;
    description: string;
    category: string;
    image: string;
    rating: Array<{
       rate: number;
       count: number}>
}
//         "rating": {
//             "rate": 3.9,
//             "count": 120

interface intfUserData {
    auth: any;
    uid: string;
    displayName?: string;
    email: string;
    photoURL?: string; 
    prevState?: null;   
}

type typeUser = {
    auth: any,
    uid: string,
    displayName?: any,
    email: string,
    photoURL?: any, 
    prevState?: any,  
  };
  
