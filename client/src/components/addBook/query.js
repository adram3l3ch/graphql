import { gql } from '@apollo/client';

const addBook = gql`
	mutation ($name: String!, $genre: String, $authorId: String) {
		addBook(name: $name, genre: $genre, authorID: $authorId) {
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

const getBook = gql`
	query ($id: String) {
		book(id: $id) {
			id
			name
			genre
			author {
				name
				id
				age
				books {
					name
					id
				}
			}
		}
	}
`;

export { addBook, getAuthors, getBooks, getBook };
