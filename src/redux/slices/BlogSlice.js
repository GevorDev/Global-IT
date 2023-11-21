import { createSlice } from "@reduxjs/toolkit";
import BlogImg1 from "../../assets/blog/blog-img1.png"
import BlogImg2 from "../../assets/blog/blog-img2.png"
import BlogImg3 from "../../assets/blog/blog-img3.png"
import BlogImg4 from "../../assets/blog/blog-img4.png"
import BlogImg5 from "../../assets/blog/blog-img5.png"


const initialState = {
    blog: [
        {
            id:1,
            img: BlogImg1,
            title: "Ինչ է պետք IT մուտք գործելու համար",
            desc: "Մարդկանց մեծամասնությունը կարծում է որ ծրագրավորող կամ դիզայներ դառնալու համար հարկավոր է ունենալ թանկարժեք և գերհզոր համակարգիչ։Իրականում դա մեծ շփոթմունք է, և եթե դուք ունեք համակարգիչ որը կապահովի ձեր ամենափոէր պահանջները ուրեմն ձեր IT կարիերան սկսելու համար ձեզ ավել բան պետք չէ։" 
        },
        {
            id:2,
            img: BlogImg2,
            title: "Ինչ է պետք IT մուտք գործելու համար",
            desc: "Մարդկանց մեծամասնությունը կարծում է որ ծրագրավորող կամ դիզայներ դառնալու համար հարկավոր է ունենալ թանկարժեք և գերհզոր համակարգիչ։Իրականում դա մեծ շփոթմունք է, և եթե դուք ունեք համակարգիչ որը կապահովի ձեր ամենափոէր պահանջները ուրեմն ձեր IT կարիերան սկսելու համար ձեզ ավել բան պետք չէ։" 
        },
        {
            id:3,
            img: BlogImg3,
            title: "Ինչ է պետք IT մուտք գործելու համար",
            desc: "Մարդկանց մեծամասնությունը կարծում է որ ծրագրավորող կամ դիզայներ դառնալու համար հարկավոր է ունենալ թանկարժեք և գերհզոր համակարգիչ։Իրականում դա մեծ շփոթմունք է, և եթե դուք ունեք համակարգիչ որը կապահովի ձեր ամենափոէր պահանջները ուրեմն ձեր IT կարիերան սկսելու համար ձեզ ավել բան պետք չէ։" 
        },
        {
            id:4,
            img: BlogImg4,
            title: "Ինչ է պետք IT մուտք գործելու համար",
            desc: "Մարդկանց մեծամասնությունը կարծում է որ ծրագրավորող կամ դիզայներ դառնալու համար հարկավոր է ունենալ թանկարժեք և գերհզոր համակարգիչ։Իրականում դա մեծ շփոթմունք է, և եթե դուք ունեք համակարգիչ որը կապահովի ձեր ամենափոէր պահանջները ուրեմն ձեր IT կարիերան սկսելու համար ձեզ ավել բան պետք չէ։" 
        },
        {
            id:5,
            img: BlogImg5,
            title: "Ինչ է պետք IT մուտք գործելու համար",
            desc: "Մարդկանց մեծամասնությունը կարծում է որ ծրագրավորող կամ դիզայներ դառնալու համար հարկավոր է ունենալ թանկարժեք և գերհզոր համակարգիչ։Իրականում դա մեծ շփոթմունք է, և եթե դուք ունեք համակարգիչ որը կապահովի ձեր ամենափոէր պահանջները ուրեմն ձեր IT կարիերան սկսելու համար ձեզ ավել բան պետք չէ։" 
        },
    ]

}
const BlogSlice = createSlice({
    name: "blog",
    initialState,
    
})

export default BlogSlice.reducer;