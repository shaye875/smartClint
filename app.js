import readLineSync from 'readline-sync'
import { top3 } from './get/numPosts.js'
import { getBYWord, getProfile, getSuspicious, debit } from './get/gets.js'
import { loadavg } from 'os'
async function menu() {
    let flag = true
    while (flag) {
        console.log("1.get top 3 posts")
        console.log("2.get profile by id");
        console.log("3.get post by word");
        console.log("4.get people Suspicious")
        console.log("5.debet wou is more busi");
        console.log("0.exit");
        const choich = Number(readLineSync.question())
        switch (choich) {
            case 1:
                await top3()
                break
            case 2:
                const id = Number(readLineSync.question("enter id: "))
                await getProfile(id)
                break
            case 3:
                const word = readLineSync.question("enter word: ")
                await getBYWord(word)
                break
            case 4:
                await getSuspicious()
                break
            case 5:
                const id1 = Number(readLineSync.question("enter id: "))
                const id2 = Number(readLineSync.question("enter id: "))
                await debit(id1,id2)
                break
            case 0:
                flag = false
                break
        }
    }
}
await menu()