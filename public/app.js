// get user's data
// get user's coordinates
async function getCoords() {

    //wait until promise is fulfilled
    pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })

    //return user coordinates
    return [pos.coords.latitude, pos.coords.longitude]
}


// get user's time
function userTime() {
    
    //grabs today's date, time, in detail
    const now = new Date()
    
    //returns the hour as an interger
    return now.getHours()
}

function getMealTime() {
    const tod = userTime()
    
    //returns time of day based on interger returned from getHours function
    return tod > 20 ? 'latenight snack' : tod > 16 ? 'dinner' : tod > 11 ? 'lunch' : 'breakfast'
}


// helper functions
// check time of day


// build ads
// build ad 1\
function buildAd1() {
    const mealTime = getMealTime()
    //select div for 1st Ad
    let content = document.querySelector('.ad1')
    
    //create paragraph tag to display Ad message
    let inner = document.createElement('p')

    //formulate string to put inside paragraph tag based on Time of day
    inner.innerHTML = `We've got the best <span>${mealTime}</span> in town`

    //append string inside 'p' tag
    content.append(inner)
}


// build ad 2
function buildAd2(coordinates) {
    const coords = coordinates

    //setup google map search based on coordinates
    const href = `https://www.google.com/maps/search/coffee/@${coords[0]},${coords[1]},15z/`
    
    //select div for 2nd Ad
    let content = document.querySelector('.ad2')

    //create 'p' tag to display Ad message
    let inner = document.createElement('p')

    //formulate string to put inside 'p' tag
    inner.innerHTML = `It's time to try our coffee! <span><a href="${href}" target="_blank">We're this close!</a></span>`

    //append string inside 'p' tag
    content.append(inner)
}

// event listeners
// on load, build ads
window.onload = async () => {
    buildAd1()
    const coords = await getCoords()
    buildAd2(coords)
}
