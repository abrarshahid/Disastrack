const haversine_formula = (lat1, long1, lat2, long2) => {
    console.log(lat1,long1,lat2,long2)
    let dLat = ((lat2 - lat1) * Math.PI) / 180.0;
    let dLon = ((long2 - long1) * Math.PI) / 180.0;

    lat1 = (lat1 * Math.PI) / 180.0;
    lat2 = (lat2 * Math.PI) / 180.0;

    let ans =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);

    let rad = 6371;
    let distance = 2 * rad * Math.asin(Math.sqrt(ans));
    console.log(distance,lat1,long1)
    return distance;
};

export default haversine_formula;
