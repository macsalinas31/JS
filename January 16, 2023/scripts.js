console.log("Sending a request to server");

setTimeout(
    () => {
        console.log("Received a response from the server");
    },
    3000
);

console.log("This is the end of the file!");

//Call Stack
// check if triangle is a right triangle

// a^2 + b^2 = c^2

const multiply = (x, y) => {
    return x * y;
}

const square = (x) => {
   return multiply(x, x);
}

const isRightTriangle = (a,b,c) => {
    return square(a) + square(b) === square(c);
}

console.log( isRightTriangle(3, 4, 5));


// loadFBNewsFeed('myProfile')
//     .then(() => {
//         //runs if promise is resolved
//     })
//     .then((res) => {
//         //runs if promise is resolved
//     })
//     .catch((err) => {
//         //runs if promise is rejected
//     })

    //Unsplash access key
    // QX_IFPf3CL5eTkeiT3mmNk5r-d2u9o-Y43bDDwBaWQE
    // https://api.unsplash.com/search/photos
    // Authorization: Client-ID YOUR_ACCESS_KEY

    // https://api.unsplash.com/search/photos
    // ?key=value&key2=value2&key3=value3
    // query string / query parameters

    const baseURL = "https://api.unsplash.com/";
    const search = "search/photos";
    const query = "?query=cars";

    const requestURL = baseURL + search + query;
    // https://api.unsplash.com/search/photos?query=cars

    const ACCESS_KEY = "QX_IFPf3CL5eTkeiT3mmNk5r-d2u9o-Y43bDDwBaWQE";
    const clientID = `Client-ID ${ACCESS_KEY}`;

    //create headers
    const myHeaders = new Headers();

    myHeaders.append("Authorization", clientID);

    // request options / configuration
    const requestOptions = {
        method: "GET",
        headers: myHeaders
    }

    const output = document.querySelector('#output');

    fetch( requestURL, requestOptions )
     .then(res => {
        return res.json();
     })
     .then(result => {
        console.log(result);

        for (let photo of result.results) {
            // photo.urls.small
            const imageContainer = document.createElement('div');
            const image = document.createElement('img');

            image.src = photo.urls.small;

            imageContainer.append(image);
            output.append(imageContainer);
        }

     })
     .catch(err => {
        console.log(err);
        
     })