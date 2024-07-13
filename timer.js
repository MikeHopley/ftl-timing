function debounce(func, timeout = 300){
	let timer
	return (...args) => {
		clearTimeout(timer)
		timer = setTimeout(() => { func.apply(this, args) }, timeout)
	}
}

const weaponsData = {
	lasers: {
		basic_laser: 10,
		burst_laser_1: 11,
		burst_laser_2: 12,
		burst_laser_3: 19,
		heavy_laser_1: 9,
		heavy_laser_2: 13,
		charge_laser_1: 6,
		charge_laser_2: 5,
		chain_laser: 16,
		vulcan: 11.1
	},
	flak: {
		flak_1: 10,
		flak_2: 21
	},
	ion: {
		ion_blast_1: 8,
		ion_blast_2: 4,
		heavy_ion: 13,
		ion_stunner: 10,
		chain_ion: 14,
		charge_ion: 6,
	},
	beams: {
		mini_beam: 12,
		hull_beam: 14,
		pike_beam: 16,
		halberd_beam: 17,
		glaive_beam: 25,
		fire_beam: 20
	},
	missiles: {
		leto_missile: 9,
		artemis_missile: 10,
		hermes_missile: 14,
		breach_missile: 22,
	},
	bombs: {
		small_bomb: 13,
		fire_bomb: 15,
		stun_bomb: 17,
		ion_bomb: 22,
		lockdown_bomb: 15
	},
	crystal: {
		crystal_burst_1: 15,
		crystal_burst_2: 17,
		crystal_heavy_1: 13,
		crystal_heavy_2: 19
	}
}

const shipsData = {
	kestrel_A: {
		totalRooms: 17,
		ventedRooms: 0,
		preVentedRooms: 0,
		oxygen: 100,
	},
	kestrel_B: {
		totalRooms: 15,
		ventedRooms: 0,
		preVentedRooms: 0,
		oxygen: 100,
	},
	kestrel_C: {
		totalRooms: 18,
		ventedRooms: 1,
		preVentedRooms: 1,
		oxygen: 94,
	},
	engi_A: {
		totalRooms: 16,
		ventedRooms: 0,
		preVentedRooms: 0,
		oxygen: 100,
	},
	engi_B: {
		totalRooms: 14,
		ventedRooms: 3,
		preVentedRooms: 3,
		oxygen: 79,
	},
	engi_C: {
		totalRooms: 17,
		ventedRooms: 0,
		preVentedRooms: 0,
		oxygen: 100,
	},
	fed_A: {
		totalRooms: 18,
		ventedRooms: 0,
		preVentedRooms: 0,
		oxygen: 100,
	},
	fed_B: {
		totalRooms: 18,
		ventedRooms: 0,
		preVentedRooms: 0,
		oxygen: 100,
	},
	fed_C: {
		totalRooms: 19,
		ventedRooms: 0,
		preVentedRooms: 0,
		oxygen: 100,
	},
	zoltan_A: {
		totalRooms: 18,
		ventedRooms: 0,
		preVentedRooms: 0,
		oxygen: 100,
	},
	zoltan_B: {
		totalRooms: 15,
		ventedRooms: 0,
		preVentedRooms: 0,
		oxygen: 100,
	},
	zoltan_C: {
		totalRooms: 18,
		ventedRooms: 0,
		preVentedRooms: 0,
		oxygen: 100,
	},
	mantis_A: {
		totalRooms: 18,
		ventedRooms: 0,
		preVentedRooms: 0,
		oxygen: 100,
	},
	mantis_B: {
		totalRooms: 17,
		ventedRooms: 0,
		preVentedRooms: 0,
		oxygen: 100,
	},
	mantis_C: {
		totalRooms: 18,
		ventedRooms: 0,
		preVentedRooms: 0,
		oxygen: 100,
	},
	slug_A: {
		totalRooms: 15,
		ventedRooms: 0,
		preVentedRooms: 0,
		oxygen: 100,
	},
	slug_B: {
		totalRooms: 20,
		ventedRooms: 0,
		preVentedRooms: 0,
		oxygen: 100,
	},
	slug_C: {
		totalRooms: 16,
		ventedRooms: 0,
		preVentedRooms: 0,
		oxygen: 100,
	},
	rock_A: {
		totalRooms: 18,
		ventedRooms: 0,
		preVentedRooms: 0,
		oxygen: 100,
	},
	rock_B: {
		totalRooms: 16,
		ventedRooms: 0,
		preVentedRooms: 0,
		oxygen: 100,
	},
	rock_C: {
		totalRooms: 17,
		ventedRooms: 0,
		preVentedRooms: 0,
		oxygen: 100,
	},
	stealth_A: {
		totalRooms: 15,
		ventedRooms: 0,
		preVentedRooms: 0,
		oxygen: 100,
	},
	stealth_B: {
		totalRooms: 15,
		ventedRooms: 4,
		preVentedRooms: 0,
		oxygen: 75,
	},
	stealth_C: {
		totalRooms: 14,
		ventedRooms: 0,
		preVentedRooms: 0,
		oxygen: 100,
	},
	lanius_A: {
		totalRooms: 16,
		ventedRooms: 2,
		preVentedRooms: 2,
		oxygen: 88,
	},
	lanius_B: {
		totalRooms: 18,
		ventedRooms: 2,
		preVentedRooms: 2,
		oxygen: 89,
	},
	crystal_A: {
		totalRooms: 19,
		ventedRooms: 0,
		preVentedRooms: 0,
		oxygen: 100,
	},
	crystal_B: {
		totalRooms: 16,
		ventedRooms: 4,
		preVentedRooms: 4,
		oxygen: 75,
	}
}

const defaultCrewSettings = {
	tilesPerSecond: 2.2,
	secondsPerTile: 0.455,
	pheromones: 25,
	human: 100,
	mantis: 150,
	rock: 50,
	lanius: 85,
	crystal: 80
}

Vue.component('treeselect', VueTreeselect.Treeselect)

Vue.component('timer', {
	data: function() {
		return {
			arbitraryTime: null,
			weapon: null,
			weaponsData: weaponsData,
			cloakedTime: 0
		}
	},

	props: ['mode', 'uid'],

	computed: {
		time() {
			if (this.mode == 'weapon') {
				return this.cooldown + this.cloakedTime
			}
			return this.arbitraryTime
		},
		validOxygenResult() {
			return this.time > 0
		},
		bonus() {
			return this.$root.manning ? 0.9 : 1
		},
		tilesUntilTime() {
			return this.tiles(this.time)
		},
		cooldown() {
			if (this.weapon == null) {
				return null
			}
			var levels = this.weapon.split('.')
			return this.bonus * this.weaponsData[levels[0]][levels[1]]
		},
		oxygenTilesToWalk() {
			let tiles = Number(this.fractionalOxygenTime) * this.$root.crewSpeed
			return tiles.toFixed(1)
		},
		oxygenLost() {
			return this.time * 1.2 * this.$root.proportionUnvented
		},
		oxygenLevel() {
			return this.$root.effectiveStartingOxygen - this.oxygenLost
		},
		oxygenMarker() {
			let integerPart = Math.floor(this.oxygenLevel)
			let decimalPart = this.oxygenLevel % 1
			
			if (decimalPart > 0.5) {
				return integerPart + 1
			}
			return integerPart
		},
		fractionalOxygenDrop() {
			return this.oxygenMarker + 0.5 - this.oxygenLevel
		},
		fractionalOxygenTime() {
			return this.fractionalOxygenDrop / (1.2 * this.$root.proportionUnvented)
		},
		weaponOptions() {
			let weapons = Object.entries(this.weaponsData)
			let result = []

			for (let [category, items] of weapons) {
				contents = []
				itemsArray = Object.entries(items)

				for (let [name, time] of itemsArray) {
					contents.push({
						id: category + '.' + name,
						label: this.$root.readableName(name),
					})
				}

				result.push({
					id: category,
					label: this.$root.readableName(category),
					children: contents
				}) 
			}
			return result
		},
	},
	methods: {
		tiles(time) {
			distance = time * this.$root.crewSpeed
			return Math.round(distance * 10) / 10
		},
	},

	template:`
<div>
	<div v-show="this.mode == 'weapon'">
		<div class="weapons-selection">
			<treeselect v-model="weapon" 
				:clearable="true"
				:options="weaponOptions"
				:disable-branch-nodes="true"
				:max-height="400"
				:disable-fuzzy-matching="true"
				placeholder="Select weapon">
			</treeselect>
		</div>
		<div>
			<input type="number" min="0" max="15" step="5" value="0" :id="'cloakedTime_' + this.uid" v-model.number="cloakedTime">
			<label :for="'cloakedTime_' + this.uid">Add cloak</label>
		</div>	
	</div>

	<div v-show="this.mode != 'weapon'" class="arbitrary-time">
		<input :id="'anyTime_' + this.uid" type="number" min="0" step="any" v-model.number="arbitraryTime"/>
		<label :for="'anyTime_' + this.uid">Arbitrary time (seconds)</label>
	</div>
	


	<div class="result" v-show="this.time > 0">
		<div>
			<p><span>{{ tilesUntilTime }}</span> tiles movement</p>
		</div>

		<div class="bigOr">
			<p>&mdash; OR &mdash;</p>
		</div>

		<div v-show="validOxygenResult">
			<p><span>{{ oxygenMarker }}</span>% O2, 
				then <span>{{oxygenTilesToWalk }}</span> tiles</p>
		</div>
	</div>
</div>
`
})

var app = new Vue({
	el: '#app',
	data: {
		shipsData: shipsData,
		manning: true,
		ship: 'stealth_B',
		visibleStartingOxygen: 75,
		ventedRooms: 4,
		preVentedRooms: 0,
		totalRooms: 15,
		crew: 'human',
		showValues: false,
		pheromones: false,
		crewSettings: [],
		usingDefaults: true
	},
	mounted() {
		this.crewSettings = JSON.parse(localStorage.getItem('crewSettings')) || { ...defaultCrewSettings }
	},
	watch: {
		crewSettings: {
			handler(newSettings, oldSettings) {
				this.saveCrewSettings(newSettings)
			},
			deep: true
		},
		preVentedRooms: {
			handler(newValue, oldValue) {
				if (this.ventedRooms < newValue) {
					this.ventedRooms = newValue
				}
			}
		},
		ventedRooms: {
			handler(newValue, oldValue) {
				if (newValue < this.preVentedRooms) {
					this.preVentedRooms = newValue
				}
			}
		}
	},
	computed: {
		showValuesButtonText() {
			return this.showValues ? 'Hide' : 'Show'
		},
		crewSpeed() {
			return this.crewSettings.tilesPerSecond * this.racialMultiplier * this.bugDrugs
		},
		crewOptions() {
			return [
				{id: 'human', label: 'Human, etc.'},
				{id: 'mantis', label: 'Mantis'},
				{id: 'rock', label: 'Rock'},
				{id: 'lanius', label: 'Lanius'},
				{id: 'crystal', label: 'Crystal'}
			]
		},
		bugDrugs() {
			if (this.pheromones) {
				return 1 + (this.crewSettings.pheromones / 100)
			}
			return 1
		},
		racialMultiplier() {
			return this.crewSettings[this.crew] / 100
		},
		realStartingOxygen() {
			// If the player let O2 drop a bit, it will (e.g.) show 75 but actually be 75.5.
			// We adjust for this, assuming they pause/jump when the visible number changes.
			// And we assume they are dropping down, not going up.
			if (this.fullySaturated) {
				return this.proportionSaturated * 100
			}
			return this.visibleStartingOxygen + 0.5
		},
		roomOxygenLevel() {
			// Adjust for prevented rooms, which cause the other rooms to have higher O2 than the global figure
			return this.realStartingOxygen * this.totalRooms / (this.totalRooms - this.preVentedRooms)
		},
		fullySaturated() {
			return (this.visibleStartingOxygen + 0.5) >= (100 * this.proportionSaturated)
		},
		effectiveStartingOxygen() {
			return this.roomOxygenLevel * this.proportionUnvented
		},
		proportionSaturated() {
			return (this.totalRooms - this.preVentedRooms) / this.totalRooms
		},
		proportionUnvented() {
			return (this.totalRooms - this.ventedRooms) / this.totalRooms
		},
		shipOptions() {
			let ships = Object.entries(this.shipsData)
			let result = []
			
			for (let [ship, rooms] of ships) {
				result.push({
					id: ship,
					label: this.readableName(ship),
				})
			}
			return result
		},
	},
	methods: {
		toggleValues() {
			this.showValues = !this.showValues
		},
		readableName(name) {
			name = name.replace(/_/gi, ' ')
			return name.charAt(0).toUpperCase() + name.slice(1);
		},
		setStartingConditions(ship) {
			this.visibleStartingOxygen = ship ? this.shipsData[ship].oxygen : 0
			this.ventedRooms = ship ? this.shipsData[ship].ventedRooms : 0
			this.preVentedRooms = ship ? this.shipsData[ship].preVentedRooms : 0
			this.totalRooms = ship ? this.shipsData[ship].totalRooms : 0
		},
		useSecondsPerTile(event) {
			let tiles = 1 / event.target.value
			this.setTilesPersecond(tiles)
		},
		useTilesPerSecond(event) {
			let seconds = 1 / event.target.value
			this.setSecondsPerTile(seconds)
		},
		setTilesPersecond(tiles) {
			this.crewSettings.tilesPerSecond = Number(tiles.toFixed(2))
		},
		setSecondsPerTile(seconds) {
			this.crewSettings.secondsPerTile = Number(seconds.toFixed(3))
		},
		saveCrewSettings(newSettings) {
			localStorage.setItem('crewSettings', JSON.stringify(newSettings))
			this.usingDefaults = false

			if (JSON.stringify(newSettings) === JSON.stringify(defaultCrewSettings)) {
				this.usingDefaults = true
			}
		},
		resetCrewSpeed() {
			this.crewSettings = { ...defaultCrewSettings }
		}
	}
})
