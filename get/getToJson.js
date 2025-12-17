import fs from 'fs'

async function get(){
    const res =await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.text()
    return data
}

async function tojson(){
    const data =await get()
    await fs.writeFile("./data/users.json",data,(()=>{
        console.log("data added");
    }))
}

