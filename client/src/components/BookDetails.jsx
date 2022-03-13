import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { getBook } from './addBook/query';

const BookDetails = ({ state }) => {
	const [book, setBook] = useState({});
	const [getBookLazy] = useLazyQuery(getBook);
	useEffect(() => {
		(async () => {
			if (state) {
				const { data } = await getBookLazy({ variables: { id: state } });
				setBook(data.book);
			}
		})();
	}, [state, getBookLazy]);

	return (
		<div>
			<p>Book details</p>
			<p>name: {book?.name}</p>
			<p>genre: {book?.genre}</p>
			<p>author: {book?.author?.name}</p>
		</div>
	);
};

export default BookDetails;
