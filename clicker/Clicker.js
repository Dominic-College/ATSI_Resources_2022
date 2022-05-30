var stats = {
	balance:0,
	gain:1,
	upgrades: {
		cursors: {
			amount:0,
			cost:10,
			cps:1,
			name:"Cursor"
		},
		grandmas: {
			amount:0,
			cost:250,
			cps:5,
			name:"Grandma"
		},
		farms: {
			amount:0,
			cost:5000,
			cps:25,
			name:"Farm"
		},
		mines: {
			amount:0,
			cost:25000,
			cps:50,
			name:"Mine"
		},
		factories: {
			amount:0,
			cost:100000,
			cps:250,
			name:"Factory"
		},
		banks: {
			amount:0,
			cost:250000,
			cps:1000,
			name:"Sperm Bank"
		}
	}
};

abbrev = new Intl.NumberFormat('en-US');

function cum_clicked(x){
    stats[x] += stats.gain
	play("Brother.mp3")
}

setInterval(refresh, 50);
setInterval(gainAuto, 1000);

function upgradeGain(){
	if (stats.cums >= stats.gain * 100) {
		stats.cums -= stats.gain * 100
		stats.gain += 1
	}
}

function refresh(){
	document.getElementById("balance").innerHTML = "$"+abbrev.format(Math.floor(stats.balance))
}

function gainAuto(){
	for(let i in stats.upgrades){
		stats.balance += stats.upgrades[i].amount * stats.upgrades[i].cps
	}
}

function upgradeClicker(clicker){
	if (stats.balance >= stats.upgrades[clicker].cost) {
		play("powerUp.wav")
		stats.upgrades[clicker].amount++ 
		stats.balance -= stats.upgrades[clicker].cost
		stats.upgrades[clicker].cost*=1.2
		document.getElementById(clicker).innerHTML = "Owned: " + String(stats.upgrades[clicker].amount) + "<br>Price: $" + abbrev.format(Math.floor(stats.upgrades[clicker].cost))
	}
}

function play(audio) {
	var audio = new Audio(audio);
	audio.volume = 0.8;
	audio.play();
}