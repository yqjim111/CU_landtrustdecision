'use strict'        // let the browser know we're serious

// debug statement letting us know the file is loaded
console.log('Loaded map.js')

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoieXFqaW0xMTEiLCJhIjoiY2psb2k5ZGZkMXR1czNxdDV3dW55b3hyaiJ9.ihJM3eJ8hNrDmr7EYKjo7w'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/yqjim111/cjuo8ys5p066h1fpln1cxlrw6',
    center: [-66.390, 18.187],
    zoom: 8.2
})