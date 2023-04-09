let allCards = document.getElementById("allCard");

let url = "https://kontests.net/api/v1/all";
// let url = "https://codeforces.com/api/user.rating?handle=Fefer_Ivan";

let response = fetch(url);

response.then((v) => {
    return v.json();
})
.then((contests) => {
        console.log(contests)
        let text="";
        let itr = 0;
        for (contestNo in contests) {
            console.log(contests[contestNo])
            itr++;
            text +=`
                    <div class = "card col-md-4 mx-0" >
                        <img src="./codeforcesLogo.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <a class="btn btn-block btn-success">${contests[contestNo].site}</a>
                            <hr>
                            <h5 class="card-title" style="color:#ff5d8f;">${contests[contestNo].name}</h5>
                            <!-- <hr> -->
                            <p class="card-text">Start at: ${contests[contestNo].start_time}</p>
                            <p class="card-text">End at: ${contests[contestNo].end_time}</p>
                            <p class="card-text">Duration : ${(contests[contestNo].duration / 1000)} Hours</p>
                            <hr>
                            <p class="card-text">Status is : ${(contests[contestNo].status )} Hours</p>
                            <a href="${contests[contestNo].url}" class="btn btn-outline-info">Contest Link</a>
                        </div>
                    </div>
                    `
        }
        allCards.innerHTML = text;
        
    })