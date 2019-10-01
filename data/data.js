
const background = 'background-image: radial-gradient(#3dcd47,#1a1a1a);';
const header = 'Match the correct options';
const headerColor = '#fff';


const data = [
	{
		'listA' :[
	                "next.png",
	                "prev.png",
	                "happy.png",
	                "sad.png"
		        ],

		'listB' :[
	                "next.png",
	                "happy.png",
	                "prev.png",
	                "sad.png"
                ],

        'answer' :[
	               {"from":"next.png","to":"next.png"},
	               {"from":"prev.png","to":"prev.png"},
	               {"from":"happy.png","to":'happy.png'},
	               {"from":"sad.png","to":"sad.png"}
                 ]	
	},

	{
		'listA' :[
		            "sad.png",
	                "next.png",
	                "prev.png",
	                "happy.png"
	                
		        ],

		'listB' :[
	                "next.png",
	                "prev.png",
	                "happy.png",
	                "sad.png"
                ],

        'answer' :[
	               {"from":"next.png","to":"next.png"},
	               {"from":"happy.png","to":'happy.png'},
	               {"from":"sad.png","to":"sad.png"},
	               {"from":"prev.png","to":"prev.png"}

                 ]		
	},

	{
				'listA' :[
	                "next.png",
	                "happy.png",
	                 "prev.png",
	                "sad.png"
		        ],

		'listB' :[
		             "prev.png",
	                "next.png",
	                "happy.png",
	                "sad.png"
                ],

        'answer' :[
	                {"from":"next.png","to":"next.png"},
	               {"from":"prev.png","to":"prev.png"},
	               {"from":"happy.png","to":'happy.png'},
	               {"from":"sad.png","to":"sad.png"}
                 ]	
	}
	
];




