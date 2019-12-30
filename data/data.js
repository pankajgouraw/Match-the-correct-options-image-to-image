
const background = 'radial-gradient(rgb(242, 189, 189),rgb(179, 156, 156))';
const header = 'Match the body parts with their respective functions they perform.';
const headerColor = '#fff';

const data = [
	{
		'listA' :[
	                "ears.jpg",
	                "eyes.png",
	                "hands.png",
	                "nose.jpg",
	                "legs.png"
		        ],

		'listB' :[
	                "listening.jpg",
	                "running.jpg",
	                "watching.jpg",
	                "writing.jpg",
	                "smelling.jpg"
                ],

        'answer' :[
	               {"from":"ears.jpg","to":"listening.jpg"},
	               {"from":"eyes.png","to":"watching.jpg"},
	               {"from":"hands.png","to":'writing.jpg'},
	               {"from":"nose.jpg","to":'smelling.jpg'},
	               {"from":"legs.png","to":"running.jpg"}
                 ]	
	}

];
