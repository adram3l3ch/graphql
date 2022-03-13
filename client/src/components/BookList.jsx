import React from 'react';
import { gql, useQuery } from '@apollo/client';

const getBooks = gql`
	{
		books {
			name
			id
		}
	}
`;

const BookList = () => {
	const { data, loading } = useQuery(getBooks);
	return loading ? (
		<h1>Loading...</h1>
	) : (
		<ul className='book-list'>
			{data.books.map(book => (
				<li key={book.id}>{book.name}</li>
			))}
		</ul>
	);
};

export default BookList;
