$(document).ready(function()
{
	$("#wordCloud").jQWCloud({
		words: [
				{word: 'Prashant', weight: 40, color: 'white'},
				{word: 'Sandeep', weight: 39, color: 'white'},
				{word: 'Ajinkya', weight: 11, color: 'white'},
				{word: 'Rishi', weight: 27, color: 'white'},
				{word: 'Kuldeep', weight: 36, color: 'white'},
				{word: 'Vivek', weight: 39, color: 'white'},
				{word: 'Saheer', weight: 12, color: 'white'},
				{word: 'Lohit', weight: 27, color: 'white'},
				{word: 'Anirudh', weight: 36, color: 'white'},
				{word: 'Raj', weight: 22, color: 'white'},
				{word: 'Mohan', weight: 40, color: 'white'},
				{word: 'Yadav', weight: 39, color: 'white'},
				{word: 'India', weight: 11, color: 'white'},
				{word: 'USA', weight: 27, color: 'white'},
				{word: 'Sreekar', weight: 36, color: 'white'},
				{word: 'Ram', weight: 39, color: 'white'},
				{word: 'Deepali', weight: 12, color: 'white'},
				{word: 'Kunal', weight: 27, color: 'white'},
				{word: 'Rishi', weight: 80, color: 'white'},
				{word: 'Chintan', weight: 22, color: 'white'}
				       		        
		],
		//cloud_color: 'yellow',		
		minFont: 10,
		maxFont: 80,
		//fontOffset: 5,
		//cloud_font_family: 'Owned',
		verticalEnabled: false,
		//padding_left: 1,
		//showSpaceDIV: true,
		//spaceDIVColor: 'white',
		word_common_classes: 'WordClass',		
		word_mouseEnter :function(){
			$(this).css("text-decoration","underline");
		},
		word_mouseOut :function(){
			$(this).css("text-decoration","none");	
		},
		word_click: function(){ 			
			alert("You have selected:" +$(this).text());
		},		              
		beforeCloudRender: function(){
		       date1=new Date();
	 	},
	 	afterCloudRender: function(){
				var date2=new Date();
				console.log("Cloud Completed in "+(date2.getTime()-date1.getTime()) +" milliseconds");
			}
	});
	
});