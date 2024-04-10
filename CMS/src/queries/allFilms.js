import { gql } from 'graphql-request';


export const allFilms = gql`
query {allFilms {
  films {
    title
    director
    releaseDate
    speciesConnection {
      species {
        name
        classification
        homeworld {
          name
        }
      }
    }
  }
}}
`;