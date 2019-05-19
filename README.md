# Legislators

Legislators is an app that pulls and displays information for all the current members of the United State Congress. View it live [here](http://www.legislators.xyz).

## Screenshots
![dashboard](/assets/dashboard.png)

![member](/assets/member.png)

## Tech
<b>Built with</b>
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Immutable.js](https://immutable-js.github.io/immutable-js/)
- [Leaflet](https://leafletjs.com/)

The app also uses the Google Places, Google Civic Information, and Mapbox API's.

## TODO
- [x] Display default images for members who do not have a photo
- [ ] Display congressional districts properly for members of at large districts
- [x] Transition away from Google Fusion Tables API as it will be deprecated by the end of 2019
- [ ] Add Cook Political Report data for each district
- [ ] Better filtering options (State, District, Chamber, Party)
- [ ] Show full map view
- [ ] Show vacant seats

## Credits

This app pulls data from several sources including the following:
- https://github.com/unitedstates/congress-legislators
- https://github.com/unitedstates/districts
- https://github.com/unitedstates/images
