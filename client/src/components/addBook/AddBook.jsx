import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { addBook, getAuthors, getBooks } from './query.js';

const AddBook = () => {
	const { data } = useQuery(getAuthors);
	const [name, setName] = useState('');
	const [genre, setGenre] = useState('');
	const [authorId, setAuthorId] = useState('');
	const [addBookMutation] = useMutation(addBook);

	const submitHandler = e => {
		e.preventDefault();
		addBookMutation({
			variables: { name, genre, authorId },
			refetchQueries: [{ query: getBooks }],
		});
	};

	return (
		<div>
			<form onSubmit={submitHandler} style={{ display: 'grid', gap: '1rem' }}>
				<div>
					<label htmlFor=''>Name:</label>
					<input type='text' value={name} onChange={e => setName(e.target.value)} />
				</div>
				<div>
					<label htmlFor=''>Genre:</label>
					<input type='text' value={genre} onChange={e => setGenre(e.target.value)} />
				</div>
				<div>
					<label htmlFor=''>Author:</label>
					<select onChange={e => setAuthorId(e.target.value)}>
						<option value=''>select author</option>
						{data?.authors.map(author => (
							<option key={author.id} value={author.id}>
								{author.name}
							</option>
						))}
					</select>
				</div>
				<button type='submit'>Add Book</button>
			</form>
		</div>
	);
};

export default AddBook;
