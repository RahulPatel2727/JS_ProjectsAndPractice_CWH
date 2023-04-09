let colSelect = ["rgb(246, 189, 176)",  "rgb(102, 168, 65)",  "rgb(221, 65, 155)",  "rgb(123, 73, 154)",  "rgb(231, 219, 1)",  "rgb(232, 88, 50)",  "rgb(85, 14, 132)",  "rgb(221, 119, 171)",  "rgb(137, 129, 215)",  "rgb(90, 186, 118)",  "rgb(189, 165, 60)",  "rgb(103, 243, 43)",  "rgb(48, 74, 212)",  "rgb(166, 41, 177)",  "rgb(120, 206, 245)",  "rgb(71, 182, 131)",  "rgb(174, 58, 16)",  "rgb(109, 228, 167)",  "rgb(250, 192, 12)",  "rgb(73, 149, 58)",  "rgb(215, 182, 171)",  "rgb(42, 150, 25)",  "rgb(153, 128, 191)",  "rgb(144, 194, 125)",  "rgb(182, 99, 149)",  "rgb(95, 19, 242)",  "rgb(78, 48, 130)",  "rgb(230, 212, 135)",  "rgb(222, 60, 109)",  "rgb(23, 136, 144)",  "rgb(57, 15, 238)",  "rgb(81, 222, 218)",  "rgb(137, 199, 106)",  "rgb(143, 60, 156)",  "rgb(244, 196, 140)",  "rgb(69, 218, 81)",  "rgb(134, 159, 13)",  "rgb(70, 97, 145)",  "rgb(239, 176, 232)",  "rgb(231, 79, 7)",  "rgb(37, 173, 102)",  "rgb(81, 103, 33)",  "rgb(228, 201, 52)",  "rgb(48, 155, 233)",  "rgb(221, 67, 78)",  "rgb(153, 199, 74)",  "rgb(129, 61, 153)",  "rgb(44, 46, 9)"];
let divv = document.getElementsByClassName("bulb");
let a = divv;
Array.from(a).forEach((id)=>{
    let existing = (id.classList.value);
    id.setAttribute("class",`color container ${existing}`)
    randomColor(id);
})

setInterval(async function(){
    Array.from(divv).forEach((id)=>{
        randomColor(id);
        h1Color();
    })
},200)

var i = 0;
function randomColor(id){
    // id.style.backgroundColor = colSelect[Math.floor(Math.random()*colSelect.length)];
    id.style.backgroundColor = colSelect[i++];
    id.style.color = colSelect[i++]
    i = i % colSelect.length;

}
let j=0;
function h1Color(){
    document.getElementsByTagName("h1")[0].style.color = colSelect[j++];
    j%=colSelect.length;
}

