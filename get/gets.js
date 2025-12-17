import { getData } from "./numPosts.js"
export async function getProfile(id) {
    const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const resPosts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const resTols = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
    const user = await resUser.json()
    const posts = await resPosts.json()
    const todos = await resTols.json()
    console.log("name", user.name)
    console.log("email", user.email)
    console.log("num posts", posts.length)
    const Percentage = 100 / todos.length
    let sum = 0
    todos.forEach((t) => {
        if (Boolean(t.completed) === true) {
            sum += Percentage
        }
    })
    console.log("Percentage of todos Percentage", sum);
}

export async function getBYWord(word) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await res.json()
    posts.forEach((p) => {
        let list = p.title.split(" ")
        let list1 = p.body.split(" ")
        for (let s of list) {
            if (String(s) === String(word)) {
                console.log(p);
            }
        }
        for (let s of list1) {
            if (String(s) === String(word)) {
                console.log(p);
            }
        }
    })
}

export async function getSuspicious() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await res.json()
    for(let u of users){
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${u.id}`)
        const todos = await res.json()
        const Percentage = 100 / todos.length
        let sum = 0
        todos.forEach((t) => {
            if (Boolean(t.completed) === true) {
                sum += Percentage
            }
        })
        if(todos.length > 10 && sum <= 30){
            await getProfile(u.id)
        }
    
}
}

export async function debit(id1,id2){
    const res1Posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id1}`)
    const res1Todos = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id1}`)
    const res2Posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id2}`)
    const res2Todos = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id2}`)
    const posts1 = await res1Posts.json()
    const todos1 = await res1Todos.json()
    const posts2 = await res2Posts.json()
    const todos2 = await res2Todos.json()
    const A = (posts1.length*2)+todos1.length
    const B = (posts2.length*2)+todos2.length
    console.log("A",A)
    console.log("B",B)
    if(A>B){
        console.log("A more busi");
    }else if(B>A){
        console.log("B more busi");
    }else{
        console.log("no won");
    }
}

