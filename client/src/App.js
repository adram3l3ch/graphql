import BookList from './components/BookList';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import AddBook from './components/addBook/AddBook';

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<main className='main'>
				<h1>Hello World</h1>
				<BookList />
				<AddBook />
			</main>
		</ApolloProvider>
	);
}

export default App;
