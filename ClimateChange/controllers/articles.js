const allArticles = [
	{
		id:1,
		name:'Investors With $16 Trillion Want Deforestation Action',
		url:'https://www.bloomberg.com/news/articles/2019-09-18/investors-managing-16-trillion-demand-action-on-deforestation',
	},
	{
		id:2,
		name:'Brazilian Amazon fires scientifically linked to 2019 deforestation',
		url:'https://news.mongabay.com/2019/09/brazilian-amazon-fires-scientifically-linked-to-2019-deforestation-report/',
	},
	{
		id:3,
		name:'Will Deforestation and Warming Push the Amazon to a Tipping Point?', 
		url:'https://e360.yale.edu/features/will-deforestation-and-warming-push-the-amazon-to-a-tipping-point',
	}, 
	{
		id:4,
		name:'Amazon fires clearly linked to deforestation, scientists say', 
		url:'https://science.sciencemag.org/content/365/6456/853',
	}, 
	{
		id:5,
		name:'The Amazon is burning at record rates—and deforestation is to blame', 
		url:'https://www.nationalgeographic.com/environment/2019/08/wildfires-in-amazon-caused-by-deforestation/',
	}, 
	{
		id:6,
		name:'10 Things You Need to Know About the Fires in the Amazon', 
		url:'https://truthout.org/articles/10-things-you-need-to-know-about-the-fires-in-the-amazon/',
	}, 
	{
		id:7,
		name:'Amazon deforestation and development heighten Amazon fire risk: study', 
		url:'https://news.mongabay.com/2019/09/amazon-deforestation-and-development-heighten-amazon-fire-risk-study/',
	}, 
	{
		id:8,
		name:'Editorial: Climate change is already here. 2020 could be your last chance to stop an apocalypse', 
		url:'https://www.latimes.com/opinion/editorials/la-ed-climate-change-crisis-global-warming-part-1-story.html',
	}, 
	{
		id:9,
		name:'Global Warming Has Been Influencing Drought for a Century', 
		url:'https://www.scientificamerican.com/article/global-warming-has-been-influencing-drought-for-a-century/',
	}, 
		
	{
		id:10,
		name:'Mediterranean climate: California drought ends after more than 7 years, but dry conditions will return', 
		url:'https://www.usatoday.com/story/news/nation/2019/03/15/california-drought-free-after-7-years-dry-conditions-remain/3168753002/',
	}, 
	{
		id:11,
		name:'Developing nations should increase carbon footprint to tackle hunger: Study', 
		url:'https://www.business-standard.com/article/pti-stories/poor-countries-will-need-to-increase-carbon-footprint-to-address-hunger-study-119091700109_1.html',
	}, 
	{
		id:12,
		name:'Poor countries must increase carbon footprint to address hunger, says study', 
		url:'https://www.manilatimes.net/2019/09/19/opinion/columnists/topanalysis/poor-countries-must-increase-carbon-footprint-to-address-hunger-says-study/618571/',
	}, 

	{
		id:13,
		name:'How to Get Rid of Carbon Emissions: Pay Farmers to Bury Them', 
		url:'https://www.wsj.com/articles/how-to-get-rid-of-carbon-emissions-pay-farmers-to-bury-them-11568211869',
	}, 
	{
		id:14,
		name:'Climate Change Is Having Widespread Health Impacts', 
		url:'https://www.scientificamerican.com/article/climate-change-is-having-widespread-health-impacts/',
	}, 
	{
		id:15,
		name:'Climate Change Is Already Hitting Europe Harder Than Anyone Expected', 
		url:'https://www.truthdig.com/articles/climate-change-is-already-hitting-europe-harder-than-anyone-expected/',
	}, 
	{
		id:16,
		name:'The hard truths of climate change — by the numbers', 
		url:'https://www.nature.com/immersive/d41586-019-02711-4/index.html',
	}, 	{
		id:17,
		name:'Global Warming Is Conquering the Vikings', 
		url:'https://eos.org/articles/global-warming-is-conquering-the-vikings',
	}, 	{
		id:18,
		name:'Why Are Hurricanes Like Dorian Stalling, and Is Global Warming Involved?', 
		url:'https://insideclimatenews.org/news/03092019/hurricane-dorian-climate-change-stall-record-wind-speed-rainfall-intensity-global-warming-bahamas',
	}, 	{
		id:19,
		name:'Earth’s Orbital Shifts May Have Triggered Ancient Global Warming', 
		url:'https://www.scientificamerican.com/article/earths-orbital-shifts-may-have-triggered-ancient-global-warming/',
	}, 	

]
		
/*	
module.exports.get_articles = function(req, res, next) {
	var query = req.query.query;
	if(!query){
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({articles: allArticles}));
	}
	else{
		var matches = allArticles.filter(function(article){
			return article.name.toLowerCase().indexOf(query.toLowerCase()) != -1;
		});
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({articles: matches}));
	}	
};*/


module.exports.post_articles = function(req, res, next) {
	var queries = req.body.queries;
	console.log("Request: " +queries);
	if(queries.length==0){
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({articles: allArticles}));
	}
	else{
		var matches = allArticles.filter(function(article){
			for (const query of queries) {
				console.log("Checking query: " +query);
				if(article.name.toLowerCase().indexOf(query.toLowerCase()) != -1){
					return true;
				}
			}
			return false;
		});
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({articles: matches}));
	}	
};
