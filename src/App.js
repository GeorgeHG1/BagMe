import React, { Component } from 'react';
import Footer from './Footer';
import GroceryListLive from './GroceryListLive';
import BasketListLive from './BasketListLive';
import FilterLink from './FilterLink';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">

				<header className="App-header">
					<div style={{ textAlign: 'left' }}>
						<i className="fa fa-shopping-bag" style={{ fontSize: '40px', color: 'lightblue', backgroundColor: 'white', padding: '30px', borderRadius: '100px', marginLeft: '180px' }} aria-hidden="true"/>
					</div>
					<h1 style={{ marginTop: '-90px', marginRight: '180px', fontSize: '80px' }}>BagMe</h1>
				</header>


				<nav >
					<div style={{ textAlign: 'center' }}>
						<FilterLink filter="SHOW_ALL">
							<button>
								All
							</button>
						</FilterLink>
						<FilterLink filter="SHOW_ACTIVE">
							<button>
								Pending
							</button>
						</FilterLink>
						<FilterLink filter="SHOW_COMPLETED">
							<button>
								Purchased
							</button>
						</FilterLink>
					</div>
				</nav>

                <main>
					<GroceryListLive />
					<BasketListLive />
                </main>

				<Footer />

            </div>
        );
    }
}

export default App;