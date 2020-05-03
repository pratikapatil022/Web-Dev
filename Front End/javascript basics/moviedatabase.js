var movielist = [{
        status: true,
        name: "Schindlers List",
        ratings: "4.5",
        comments: ["10/10 would recomend", "its alright,, watched for the sake of it"],
    },
    {
        status: false,
        name: "Frozen 2",
        ratings: "3.5",
        comments: ["it was alright", "would recommend for the kids sounds doggy i know...."],
    }
]
movielist.forEach(function (movie) {
    if (movie.status) {
        console.log("I have watched this movie")
    } else {
        console.log("I have not watched this movie");
    }
})
console.log(movielist[0].ratings);