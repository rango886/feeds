const feeds = [
	["Finance", [
		"chinaetfs",
		"SmartGAA",
		"lamboCFA",
		"GlobalMacroHedge",
		"ForrestM",
		"yan-guan-lin-20",
		"Equity-Investment",
		"forex-analysis",
		"yuefenginvest",
		"trading",
		"c_106548378",
		"sanleima",
		"c_156910707",
		"worldofboss",
		"xiangxt1984",
		"hthgyj",
		"Lhtz-Jqxx",
		"quanttech",
		"ricequant",
		"tiangu1",
		"touyanbang88",
		"Chouma2016",
		"sishimiao",
		"DimensionsCapital",
	]],
	["FP", [
		"yinwang",
		"marisa",
		"hllvm",
		"self-discipline",
		"zju-lambda",
		"impress-your-cat",
		"yangbo",
		"rust-lang",
	]],
	["心理", [
		"knowyourself2015",
		"knowyourself",
		"pongba_mindhacks",
		"mindhacks",
		"PSY_Jile",
		"bhahhltmusic",
	]],
	["政治 / 人文", [
		"knowledgewealth",
		"mzmojo",
		"gushibuduo",
		"dushu_magazine",
		"hulianzatan9",
		"commando",
		"bigeguide",
		"zhidaoxue",
		"zhidaoshe",
	]],
	["ACG", [
		"yumenaka",
		"c_126395105",
		"heibai",
		"acgpiping",
		"c_150242766",
		"chenshuidongman",
		"mowanglingyu",
		"ACGerTalk",
	]],
	["独立", [
		"hiyeka",
		"wxieshuo",
		"yeka52",
		"aloha-yaoyao",
		"FannyAndLiang",
		"FlyTheCode",
		"zhoudaobiji",
		"iamawguo",
	]],
	["科学", [
		"conformalgeometry",
		"principia1687",
		"zerojz",
	]],
	["后端", [
		"prattle",
		"programmer_life",
		"milocode",
	]],
	["商业", [
		"jingyunxiaowu",
		"xingshu100",
		"caozsay",
		"Professor-Li",
	]],
	["Security", [
		"chaitin-tech",
		"HuorongLab",
		"datasec",
		"fhe-blockchain",
		"dong-tian-yang",
		"twosecurity",
		"freebuf",
		"drops",
	]],
	["算法", [
		"algorithmicliberalartsdegree",
		"c_124392554",
		"c_131397850",
	]],
	["机器学习", [
		"almosthuman2014",
	]],
	["文艺", [
		"c_40866915",
	]],
	["法律", [
		"mclawman",
		"laodongfaquanji",
	]],
];

const lis = R.fromPairs(Array.from(document.getElementsByTagName("li")).map(li => [/(?:^|\.)([^.]+)\/$/.exec(li.getElementsByTagName("a")[0].getAttribute("href"))[1], li]))

document.body.appendChild(DIV.apply(null, R.flatten(feeds.map(cate => [
	H2(cate[0]),
	UL.apply(null, cate[1].map(id => lis[id])),
]))));
