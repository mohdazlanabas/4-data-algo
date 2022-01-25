//.filter()
// creates a new array

//const shows = ['lupin', 'Cobra Kai', '24', 'Mr.Robot']
//const displayShows = shows.filter(word => word.length <= 5)
//console.log(displayShows)

//const showDisplay = document.querySelector('.display')
//showDisplay.innerHTML =displayShows

const shows = [
    {name: 'Lupin', series : 1, episode:5 },
    {name: 'Cobra Kai', series : 3, episode:30 },
    {name: '24', series : 5, episode:50 },
    {name: 'Mr. Robot', series : 3, episode:24 },
]

const displayShows = shows.filter(show => show.series > 2)
console.log(displayShows)