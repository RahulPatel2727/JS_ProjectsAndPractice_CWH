let el = document.getElementsByClassName("div")[0];
let div = document.createElement('div');
div.innerHTML = "<h1>hello this is new created div</h1>"
// div.className = "rahul"
// div.id="second"
// el.append(div)
div.innerHTML += "<i>hello rahul this is new created i tag</i>"
div.tagName = "tag"
// el.appendChild(div)

// document.body.append(div)
// console.log(el.classList)

// el.append(div);
el.prepend(div)
// el.appendChild(div)


// function x(i,j){
//     console.log(i+" I "+j+" J ")
//     return i+j
// }
let arr  = [100,200,300]
console.log(arr.map(bin))
function bin(u){
    return u.toString(4)
}
// let ans = arr.map(x,0,arr)
// console.log(ans)

// let a = [[1,2,3],[3,3,3]]
