import React, {useState } from "react";
import { CreatePostComponent, FollowersComponent, GraphsComponent, TransactionListComponent, PostsComponent } from '../components/creator-page';
import './creatorPage.css';

const CreatorPage = () => {

	const [currentComponent, setComponent] = useState('createPost');

	function getComponent(){

		let component;

		switch (currentComponent) {
			case 'createPost':
				component = <CreatePostComponent/>;
				break;
			case 'followers':
				component = <FollowersComponent />;
				break;
			case 'graphs':
				component = <GraphsComponent />;
				break;
			case 'transactionList':
				component = <TransactionListComponent />;
				break;
			case 'posts':
				component = <PostsComponent />;
				break;
		}
		return component;
	}

	/*
	addComponent = async type => {
  console.log(`Loading ${type} component...`);

  import(`./components/${type}.js`)
    .then(component =>
      this.setState({
        components: this.state.components.concat(component.default)
      })
    )
    .catch(error => {
      console.error(`"${type}" not yet supported`);
    });
};
	*/

	return (
		<div id= 'page-wrapper'>
			
			<div className='testDiv1'>
				<div className='flex-test'>
					<div className='flex1'>
						<button onClick={() => setComponent('createPost')} > <p>New Post</p> </button>
					</div>
					<div className='flex1'>
						<button onClick={() => setComponent('posts')} > <p>Posts</p> </button>
					</div>
					<div className='flex1'>
						<button onClick={() => setComponent('transactionList')} > <p>Transactions</p> </button>
					</div>
					<div className='flex1'>
						<button onClick={() => setComponent('graphs')} > <p>Graphs</p> </button>
					</div>
					<div className='flex1'>
						<button onClick={() => setComponent('followers')} > <p>Followers</p> </button>
					</div>
				</div>

				<div className='screens-test'>
					<div className='screen1'>
						{getComponent()}
					</div>
				</div>

				<div>
					<h1>
						Creator Page
					</h1>
					<p>Use tabular graphs to provide an eazy user experiance</p>

				</div>
			</div>

			
		</div>

		
	);
};

export default CreatorPage;