import { type } from 'os';
import React from 'react';

interface IBook{
  bookName: string,
  author: string,
  createYear: number,
}

interface IUser{
  name: string,
  age: number,
  email: string
}


interface IProduct {
  productName: string,
  productPrice: number,
  quantity: number,
}


interface Movie {
  title: string;
  director: string;
  year: number;
}

interface IProducts {
  name: string;
  price: number;
}

interface ICircle {
  kind: 'circle',
  radius: number
}

interface ISquare {
  kind: 'square',
  sideLength: number
}


interface IPerson {
  name: string,
  age?: number,
  id?: number
}


interface interface1{
  name: string
}
interface interface2{
  age: number
}
interface interface3{
  id: number
}

interface IUserData extends interface1, interface2, interface3{} // объеденить интерфейнсы в один

const TypesSciptes: React.FC = () => {











  const user: IUserData = {
    name: 'Max',
    age: 12,
    id: 32,
  }

  type TPerson = {
    name: string,
    age?: number,
    id?: number
  }

  const person = {
    name: 'Max'
  }


  function greet(person: TPerson | IPerson){
    console.log('hello ' + person.name)
  }

  greet(person)






  const palindromeArray1: string[] = ['a', 'b', 'c', 'b', 'a'];
  const palindromeArray2: number[] = [1, 2, 3, 2, 1];
  const nonPalindromeArray: string[] = ['a', 'b', 'c', 'd', 'e'];
  
  function isPalindrome<T>(arr: T[]):boolean{
    if(arr.reverse() === arr){
      return true
    }else{
      return false
    }
  }









  const array = [1, 2, 3, 4, 5]
  
  function reversedArray<T>(arr: T[]): T[]{
    return arr.reverse()
  }

  const reversedArrays: number[] = reversedArray(array)

  console.log(reversedArrays)




  const arary1 = [1, 2, 3]
  const arary2 = [4, 5, 6]

  function mergedArray<T>(arr1: T[], arr2: T[]): T[]{
    return [...arr1, ...arr2]
  }

  const mergedArrays: number[] = mergedArray(arary1, arary2)

  console.log(mergedArrays)






  type TGreetFunction = (a: string) => void

  function greeting(fn: TGreetFunction){
    console.log('hello')
  }

  const prontConsol = (a: string) => {
    console.log(a)
  }

  greeting(prontConsol)










  type Shape = ICircle | ISquare
  
  const getArea = (shape: Shape) => {
    if(shape.kind === 'circle'){
      console.log(shape.kind + ' radius = ' + shape.radius ** 2)
    }else if(shape.kind === 'square'){
      console.log(shape.kind + ' sideLength = ' + shape.sideLength ** 2)
    }
  }

  getArea({kind: 'square', sideLength: 5})















  const productList: IProducts[] = [
    { name: "Apple", price: 2 },
    { name: "Banana", price: 3 },
    { name: "Orange", price: 6 },
    { name: "Mango", price: 4 },
    { name: "Grapes", price: 5 }
  ];


  function filterProductsByPrice(products: IProducts[]): IProducts[] {
    return products.filter(product => product.price < 5);
  }

  const cheapProducts = filterProductsByPrice(productList);
  console.log("Продукты с ценой ниже 5$:");
  cheapProducts.forEach(product => {
    console.log(`- ${product.name}: $${product.price}`);
  });















  const examples = (x: number | string, y: string | boolean) => {
    if(x === y){
      x.toUpperCase();
      console.log('lower')
      y.toLowerCase();
    }else{
      console.log('x ' + x)
      console.log('y '+y)
    }
  }

  examples('hello', 'hello')




  const randGenerator = (min: number, max: number):number => {
    const randNum = Math.floor(Math.random() * max)
    return randNum
  }














  const sumF = (num1: number, num2: number):number => {
    return num1 + num2
  }





  const movieDescription = (movie: Movie): { title: string; director: string; year: number } => {

    return {
      title: movie.title,
      director: movie.director,
      year: movie.year
    }
  }

  movieDescription({
    title: '12 абрикосовых мавп',
    director: 'Карась барабась',
    year: 1935,
  })













  type TNumbers = number[]

  const sumNumbers = (num: TNumbers):number => {

    console.log(num.reduce((acc, current) => acc + current, 0))

    return num.reduce((acc, current) => acc + current, 0)
  }

  sumNumbers([1,2,3,4,5])

















  const calculateTotalPrice = (product: IProduct):string => {
    const thisProduct = product.quantity * product.productPrice
    console.log(`${product.productName} - ${thisProduct}$ x ${product.quantity}kg.`)

    return `${product.productName} - ${thisProduct}$ x ${product.quantity}kg.`
  }

  const products = {
    productName: 'Banana',
    productPrice: 2.99,
    quantity: 2,
  }

  calculateTotalPrice(products)












  type TCoordinates = {
    latitude: number,
    longitude: number,
  }

  const locationDescription = (coords: TCoordinates):string => {
    console.log('Location: ' + coords.latitude + ' ' + coords.longitude)

    return  'Location: '
  }

  const cord = {
    latitude: 6456,
    longitude: 2324,
  } 

  locationDescription(cord)











  const currentUser = {
    name: 'Max',
    age: 12,
    email: 'dimaSidorenko@gameil.com'
  }

  const isAdult = (user: IUser): boolean => {
    user.age >= 18 ? console.log(`Name: ${user.name} Age: ${user.age} he is AUDIT !!`) : console.log(`Name: ${user.name} Age: ${user.age} he is NOT_AUDIT !!`)
  
    return true
  }

  isAdult(currentUser)












  const TBook = {
    bookName: '12 rules of life',
    author: 'Jordan Piterson',
    createYear: 2005,
  }

  function bookData(book: IBook): string{
    console.log(`Book: ${book.bookName}, author: ${book.author}, year: ${book.createYear}`)
    return ''
  }

  bookData(TBook)






  function sum(a: number, b: number): number {
    return a + b;
  }

  function isEven(num: number): boolean {
    return num % 2 === 0;
  }

  function concatenateStrings(str1: string, str2: string): string {
    return str1 + str2;
  }



  return (
    <div>

    </div>
  );
};

export default TypesSciptes;