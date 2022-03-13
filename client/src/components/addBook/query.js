import { gql } from '@apollo/client';

const addBook = gql`
	mutation ($name: String!, $genre: String, $authorID: String) {
		addBook(name: $name, genre: $genre, authorID: $authorID) {
			name
			genre
		}
	}
`;

const getAuthors = gql`
	{
		authors {
			name
			id
		}
	}
`;

const getBooks = gql`
	{
		books {
			name
			id
		}
	}
`;

export { addBook, getAuthors, getBooks };
