/**/
var firstOneChart=echarts.init(document.getElementById("first-one"),"customed");
var firstOneOpition = {
	title:{
		text:"TYUT软件投档线",
		subtext: '纯属虚构',
		left:"center",
		textStyle:{
			color:"#dfe8fe"
		}
	},
	legend:{
		orient: 'horizontal',
        data:['2013年','2014年','2015年','2016年','2017年'],
		bottom:"5",
		textStyle: {
			color: '#fff'
		}
	},
	toolbox: {
        show: true,
        feature: {
            dataView: {readOnly: false},
        }
    },
	tooltip: {
        trigger: 'item',
    },
    visualMap: {
    	show: false,
    	min: 80,
    	max: 600,
    	inRange: {
    		colorLightness: [0, 1]
    	}
    },
    series : [
    {
    	name: '投档线',
    	type: 'pie',
    	radius: '55%',
    	data:[
    	{value:440, name:'2013年'},
    	{value:480, name:'2014年'},
    	{value:471, name:'2015年'},
    	{value:479, name:'2016年'},
    	{value:451, name:'2017年'}
    	],
    	roseType: 'angle',
    }
    ]
};
firstOneChart.setOption(firstOneOpition);
/**/
var firstTwoChart=echarts.init(document.getElementById("first-two"),"customed");
var firstTwoOption={
 	title: {
        text: '离一本线分数差',
        left:"center",
        textStyle:{
			color:"#dfe8fe"
		}
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {                    //legend的data属性必须跟series的name一致
        data:['分数差'],
        bottom:"5",
        textStyle: {
			color: '#fff'
		}
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['2013年','2014年','2015年','2016年','2017年'],
        nameTextStyle:{
        	color:"black"
        }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} 分'
        },
        nameTextStyle:{
        	color:"#c0d3fe"
        }
    },
    series: [
        {
            name:'分数差',
            type:'line',
            data:[41, 54, 44, 40, 30,],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        
    ]
};
firstTwoChart.setOption(firstTwoOption);
/**/
var secondChart = echarts.init(document.getElementById('second'));
var secondOption = {
	title: {
		text : '山西省高校地图',
		left:"center",
		textStyle:{
			color:"#dfe8fe"
		}
	},
	tooltip : {
		trigger: 'item',
	},
	toolbox: {
        show: true,
        feature: {
            dataView: {readOnly: false},
        }
    },
    legend: {
		bottom:"5",
		data: ['高校位置及投档线'],
		textStyle: {
			color: '#fff'
		}
	},
	geo:{
		map:"山西",
		itemStyle: {					// 定义样式
            normal: {					// 普通状态下的样式
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {					// 高亮状态下的样式
                areaColor: '#2a333d'
            }
        }
	},
	series: [{
		name: '高校位置及投档线',
		type: 'scatter',
		coordinateSystem: 'geo',
		label: {
			normal: {
				show: false
			},
			emphasis: {
				show: false
			}
		},
		itemStyle: {

			emphasis: {
				borderColor: '#fff',
				borderWidth: 1
			}
		},
		data: [{
				name: "太原理工大学",
				value: [112.52293, 37.8603, "451分"]
			}, {
				name: "山西大学",
				value: [112.58679, 37.80079, "456分"]
			}, {
				name: "中北大学",
				value: [112.44299, 38.01135, "453分"]
			}, {
				name: "山西财经大学",
				value: [112.58754, 37.79049, "457分"]
			}, {
				name: "山西师范大学",
				value: [111.50678, 36.08077, "443分"]
			}, {
				name: "山西农业大学",
				value: [112.58224, 37.42388, "410分"]
			}, {
				name: "山西医科大学",
				value: [112.55377, 37.85044,"454分"]
			}, {
				name: "太原科技大学",
				value: [112.49176, 37.87568, "446分"]
			}
		],
	}]
};
secondChart.setOption(secondOption);
/**/
var thridOneChart=echarts.init(document.getElementById("thrid-one"),"customed");
var thridOneOption={
	title:{
		text: '超二本线分数差',
        left:"center",
        textStyle:{
			color:"#dfe8fe"
		}
	},
	tooltip: {
        trigger: 'axis'
    },
	toolbox:{
		show: true,
        feature: {
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
        }
	},
	legend:{
		data:["分数差"],
		bottom:"5",
		textStyle: {
			color: '#fff'
		}
	},
	xAxis:{
		data:["2013年","2014年","2015年","2016年","2017年"]
	},
	yAxis:{
		type: 'value',
        axisLabel: {
            formatter: '{value} 分'
        }
	},
	series:[{
		name:'分数差',
		type:'bar',                 //柱状图
		data:[0,18,28,41,51],
		markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
	}]
};
thridOneChart.setOption(thridOneOption);
/**/
var thridTwoChart=echarts.init(document.getElementById("thrid-two"),"customed");
var thridTwoOption={
	title:{
		text:"报考热度",
		subtext:'纯属虚构',
		x:'center',
		textStyle:{
			color:"#dfe8fe"
		}
	},
	tooltip:{
		trigger:'item',
		formatter:"{a}<br/>{b}:{c}({d}%)"
	},
	legend:{
		rient:"vertical",
		left:"left",
		data:['直接访问',"邮件营销","联盟广告","视频广告","搜索引擎"],
		textStyle: {
			color: '#fff'
		}
	},
	series:[
	{
		name:"访问来源",
		type:'gauge',
		radius:'58%',
		data:[
		{value:100, name:'完成率'},
		]
	}],
};
thridTwoChart.setOption(thridTwoOption);