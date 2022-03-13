import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import BookDetails from './BookDetails';

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
	const [state, setState] = useState();
	return loading ? (
		<h1>Loading...</h1>
	) : (
		<div>
			<ul className='book-list'>
				{data.books.map(book => (
					<li
						key={book.id}
						onClick={e => {
							setState(book.id);
						}}
					>
						{book.name}
					</li>
				))}
			</ul>
			<BookDetails state={state} />
		</div>
	);
};

export default BookList;
