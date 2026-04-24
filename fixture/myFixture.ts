import { test as myTest } from "@playwright/test";

// type Rudra = {
//     age: number,
//     email: string
// }

const myFixtureTest = myTest.extend<{
    age: number,
    email: string
}>({
    age: 27,
    email:"rudra@gmail.com"
})

export const test = myFixtureTest;