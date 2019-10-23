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
	}, 	{
		id: 20,
		name: 'Media’s social construction of environmental issues: focus on global warming – a comparative study',
		url: 'https://www.emerald.com/insight/content/doi/10.1108/01443330310790327/full/html',
	}, {
		id: 21,
		name: 'Rice yields decline with higher night temperature from global warming',
		url: 'https://www.pnas.org/content/101/27/9971.short',
	}, {
		id: 22,
		name: 'Phenology Under Global Warming',
		url: 'https://science.sciencemag.org/content/327/5972/1461',
	}, {
		id: 23,
		name: 'Fingerprints of global warming on wild animals and plants',
		url: 'https://www.nature.com/articles/nature01333',
	}, {
		id: 24,
		name: 'Balance as bias: global warming and the US prestige press',
		url: 'sciencedirect.com/science/article/abs/pii/S0959378003000669',
	}, {
		id: 25,
		name: 'Long-term strategies for mitigating global warming',
		url: 'https://www.sciencedirect.com/science/article/abs/pii/036054429390019A',
	}, {
		id: 26,
		name: 'Fossil fuel decarbonization technology for mitigating global warming',
		url: 'https://www.sciencedirect.com/science/article/abs/pii/S0360319998001281',
	}, {
		id: 27,
		name: 'Global warming benefits the small in aquatic ecosystems',
		url: 'https://www.pnas.org/content/106/31/12788.short',
	}, {
		id: 28,
		name: 'Global Warming and Global Dioxide Emission: An Empirical Study',
		url: 'https://www.sciencedirect.com/science/article/pii/S0301479796900250',
	}, {
		id: 27,
		name: 'Global warming in the twenty-first century: An alternative scenario',
		url: 'https://www.pnas.org/content/97/18/9875.short',
	}, {
		id: 28,
		name: 'Earth"s Atmosphere: A Multi-layered Cake',
		url: 'https://climate.nasa.gov/news/2919/earths-atmosphere-a-multi-layered-cake/',
	}, {
		id: 29,
		name: 'The Atmosphere: Earth"s Security Blanket',
		url: 'https://climate.nasa.gov/news/2914/the-atmosphere-earths-security-blanket/',
	}, {
		id: 30,
		name: '2019 Arctic Sea Ice Minimum Tied for Second Lowest on Record',
		url: 'https://climate.nasa.gov/news/2913/2019-arctic-sea-ice-minimum-tied-for-second-lowest-on-record/',
	}, {
		id: 31,
		name: 'Satellite Data Record Shows Climate Change"s Impact on Fires',
		url: 'https://climate.nasa.gov/news/2912/satellite-data-record-shows-climate-changes-impact-on-fires/',
	}, {
		id: 32,
		name: 'NASA"s ECOSTRESS Detects Amazon Fires from Space',
		url: 'https://climate.nasa.gov/news/2909/nasas-ecostress-detects-amazon-fires-from-space/',
	}, {
		id: 33,
		name: 'Landsat Illustrates Five Decades of Change to Greenland Glaciers',
		url: 'https://climate.nasa.gov/news/2908/landsat-illustrates-five-decades-of-change-to-greenland-glaciers/',
	}, {
		id: 34,
		name: 'NASA"s AIRS Maps Carbon Monoxide from Brazil Fires',
		url: 'https://climate.nasa.gov/news/2907/nasas-airs-maps-carbon-monoxide-from-brazil-fires/',
	}, {
		id: 35,
		name: 'Boreal Forest Fires Could Release Deep Soil Carbon',
		url: 'https://climate.nasa.gov/news/2905/boreal-forest-fires-could-release-deep-soil-carbon/',
	}, {
		id: 36,
		name: 'GRACE-FO Shows the Weight of Midwestern Floods',
		url: 'https://climate.nasa.gov/news/2904/grace-fo-shows-the-weight-of-midwestern-floods/',
	}, {
		id: 37,
		name: 'NASA Studies How Arctic Wildfires Change the World',
		url: 'https://climate.nasa.gov/news/2902/nasa-studies-how-arctic-wildfires-change-the-world/',
	}, {
		id: 38,
		name: 'NASA Gauges Plant Stress in Costa Rican Drought',
		url: 'https://climate.nasa.gov/news/2901/nasa-gauges-plant-stress-in-costa-rican-drought/',
	}, {
		id: 39,
		name: 'NASA Targets Coastal Ecosystems with New Space Sensor',
		url: 'https://climate.nasa.gov/news/2900/nasa-targets-coastal-ecosystems-with-new-space-sensor/',
	}, {
		id: 40,
		name: 'A Partnership Forged by Fire',
		url: 'https://climate.nasa.gov/news/2899/a-partnership-forged-by-fire/',
	}, {
		id: 41,
		name: 'NASA Tracks Wildfires from Above to Aid Firefighters Below',
		url: 'https://climate.nasa.gov/news/2898/nasa-tracks-wildfires-from-above-to-aid-firefighters-below/',
	}
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
				//console.log("Checking query: " +query);
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