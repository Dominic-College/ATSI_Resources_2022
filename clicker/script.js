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

function clickme() {
    stats.balance += stats.gain
	play("click.wav")
}

setInterval(refresh, 50);
setInterval(gainAuto, 50);

function upgradeGain(){
	if (stats.balance >= stats.gain * 100) {
		stats.balance -= stats.gain * 100
		stats.gain += 1
	}
}

function refresh(){
	document.querySelector("#counter").innerHTML = stats.balance.toLocaleString("en", {   
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
}); + " Cookies" 
	document.querySelector("#cookiespersec").innerHTML = stats.
}

function gainAuto(){
	for(let i in stats.upgrades){
		stats.balance += (stats.upgrades[i].amount * stats.upgrades[i].cps) / 20
	}
}

function upgradeClicker(clicker){
	if (stats.balance >= stats.upgrades[clicker].cost) {
		play("powerUp.wav")
		stats.upgrades[clicker].amount++ 
		stats.balance -= stats.upgrades[clicker].cost
		stats.upgrades[clicker].cost*=1.2
		document.getElementById(clicker).innerHTML = "Owned: " + String(stats.upgrades[clicker].amount) + "<br>Price: " + Math.floor(stats.upgrades[clicker].cost).toLocaleString() + " Cookies"
	}
}

function play(audio) {
	var audio = new Audio(audio);
	audio.volume = 0.8;
	audio.play();
}