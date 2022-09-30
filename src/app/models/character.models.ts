
export interface Origin {
    name: string;
    url: string;
}

export interface Location{
    name: string;
    url: string;
}

export interface Character{
    id:         number;
    name:       string;
    status:     string;
    species:    string;
    type :      string;
    gender:     string;
    origin:     Origin;
    location:   Location;
    image:      string;
    episode:    string[];
    url:        string;
    created:    string;
}


// {
//     "id": 2,
//     "name": "Morty Smith",
//     "status": "Alive",
//     "species": "Human",
//     "type": "",
//     "gender": "Male",
//     "origin": {
//       "name": "Earth",
//       "url": "https://rickandmortyapi.com/api/location/1"
//     },
//     "location": {
//       "name": "Earth",
//       "url": "https://rickandmortyapi.com/api/location/20"
//     },
//     "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
//     "episode": [
//       "https://rickandmortyapi.com/api/episode/1",
//       "https://rickandmortyapi.com/api/episode/2",
//       // ...
//     ],
//     "url": "https://rickandmortyapi.com/api/character/2",
//     "created": "2017-11-04T18:50:21.651Z"
//   }