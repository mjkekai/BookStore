import { gql } from "@apollo/client";

export const QUERY = gql`
  query {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookID
        authors
        description
        title
        image
        link
      }
    }
  }
`;
