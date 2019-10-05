const tempData = {
		title: {
			text: 'Avg Temperature in Fahrenheit in 2018',
		},
		data: [
			{
				type: "column",
				dataPoints: [
					{ label: "California",  y: 65  },
					{ label: "New York", y: 55  },
					{ label: "Florida", y: 68 },
					{ label: "Washington",  y: 45  },
					{ label: "Neveda",  y: 73  }
					]
			}
			]
	};

const rainData = {
		title: {
			text: 'Avg Rainfall in cm in 2018',
		},
		data: [
			{
				type: "column",
				dataPoints: [
					{ label: "California",  y: 4  },
					{ label: "New York", y: 6  },
					{ label: "Florida", y: 18 },
					{ label: "Washington",  y: 10  },
					{ label: "Neveda",  y: 4  }
					]
			}
			]
	};

const deforestData = {
		title: {
			text: 'Deforestation in 2018 (% of State Land)',
		},
		data: [
			{
				type: "column",
				dataPoints: [
					{ label: "California",  y: 40},
					{ label: "New York", y: 48},
					{ label: "Florida", y: 32},
					{ label: "Washington",  y: 12},
					{ label: "Neveda",  y: 6}
					]
			}
			]
	};

const carbonEmData = {
		title: {
			text: 'Carbon Emission in 2018 (In tons)',
		},
		data: [
			{
				type: "column",
				dataPoints: [
					{ label: "California",  y: 8900  },
					{ label: "New York", y: 7100   },
					{ label: "Florida", y: 2000  },
					{ label: "Washington",  y: 1758   },
					{ label: "Neveda",  y: 1003   }
					]
			}
			]
	};

module.exports.get_graphs = function(req, res, next) {
	var featureData = rainData;
	if(req.query.type == "temp"){
		featureData = tempData;
	}
	if(req.query.type == "deforest"){
		featureData = deforestData;
	}
	if(req.query.type == "carbonEm"){
		featureData = carbonEmData;
	}
	
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(featureData));
};