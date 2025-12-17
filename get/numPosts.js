import fs from 'fs'

export async function getData() {
    return new Promise((res) => {
        fs.readFile("./data/users.json", "utf8", async (err, data) => {
            res(JSON.parse(data))
        })
    })

}

function sumPosts(posts) {
    let obj = {}
    posts.forEach((p) => {
        let bool = true
        for (let k in obj) {
            if (Number(k) === Number(p.userId)) {
                
                obj[k] += 1
                bool = false
            }
        }
        if (bool === true)
            obj[p.userId] = 1
    })
    return obj
}

export async function top3() {
    await getData().then((posts) => {
        let obj = sumPosts(posts)
        const list = Object.entries(obj)
        list.sort((a, b) => b[1] - a[1])
        for(let i = 0;i<=2;i++){
            console.log(list[i]);
        }
    })
}
