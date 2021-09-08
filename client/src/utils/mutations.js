import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

export const BOOK_SAVE = gql`
  mutation bookSave($bookInput: BookInput!) {
    bookSave(bookInput: $bookInput) {
      _id
      username
      email
      savedBooks {
        bookId
        title
      }
    }
  }
`;

export const BOOK_REMOVE = gql`
  mutation bookRemove($bookID: String!) {
    bookRemove(bookId: $bookID) {
      _id
      email
      username
      savedBooks {
        bookId
        title
      }
    }
  }
`;
