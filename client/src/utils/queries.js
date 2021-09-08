import { gql } from "@apollo/client";

export const QUERY = gql`
query {
    me{
        -id
        username
        email
        bookCount
        savedBooks{
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
