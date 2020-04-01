let elements = ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Flourine", "Neon", "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenur","Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Caesium", "Barium", "Lanathanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Naptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Damstadtium", "Roentgenium", "Copernicium", "Nihonium", "Flerovium", "Moscovium", "Livermorium", "Tennessine", "Oganesson"];

function g() {
  document.getElementById("results").innerHTML = "";
  for(let x=0;x<elements.length;x++) {
    let m = new RegExp(document.getElementById("s").value.toUpperCase());
    if(elements[x].toUpperCase().match(m) !== null) {
      ePush(elements[x]);
    }
  }
}

let cv = "";
function onChange() {
  let v = document.getElementById("s").value;
  if(cv !== v) {
    cv = v;
    g();
  }
}setInterval(onChange, 0);


function ePush(element) {
  let h = document.createElement("h3");
  h.appendChild(document.createTextNode(`(${elements.indexOf(element) + 1}) ${element} - ${eConfig(elements.indexOf(element) + 1)} - (${eValence(elements.indexOf(element) + 1)} valence) - ${eAbbrev(elements.indexOf(element) + 1)}`));
  document.getElementById("results").appendChild(h);
}

function eConfig(atomic) {
  let orbitals = ["1s","2s","2p","3s","3p","4s","3d","4p","5s","4d","5p","6s","4f","5d","6p","7s","5f","6d","7p"],
      total = [2, 4, 10, 12, 18, 20, 30, 36, 38, 48, 54, 56, 70, 80, 86, 88, 102, 112, 118],
      assigned = {s: 2,p: 6,d: 10,f: 14},
      orbits = [],
      highest = 0,
      diff = 0,
      index = 0;
  for(let x=0;x<total.length;x++) {
    if(atomic > total[x]) {
      highest = total[x + 1];
      index = x + 1;
      diff = atomic - total[x];
      orbits.push(orbitals[x] + assigned[orbitals[x][orbitals[x].length - 1]]);
    }
  }

  if (atomic > 2) {
    orbits.push(`${orbitals[index]}${diff}`);
  }else {
    orbits.push(`1s${atomic}`);
  }

  return orbits.join(" ");
}

function eAbbrev(atomic) {
  return "";
}

function eValence(atomic) {
  let orbitals = ["1s","2s","2p","3s","3p","4s","3d","4p","5s","4d","5p","6s","4f","5d","6p","7s","5f","6d","7p"],
      total = [2, 4, 10, 12, 18, 20, 30, 36, 38, 48, 54, 56, 70, 80, 86, 88, 102, 112, 118],
      assigned = {s: 2,p: 6,d: 10,f: 14},
      orbits = [],
      value = [],
      highest = 0,
      diff = 0,
      index = 0;
  for(let x=0;x<total.length;x++) {
    if(atomic > total[x]) {
      highest = total[x + 1];
      index = x + 1;
      diff = atomic - total[x];
      orbits.push(orbitals[x] + assigned[orbitals[x][orbitals[x].length - 1]]);
    }
  }

  if (atomic > 2) {
    orbits.push(`${orbitals[index]}${diff}`);
  }else {
    orbits.push(`1s${atomic}`);
  }

  let max = 0;
  let applicable = 0;
  for(let x=0;x<orbits.length;x++) {
    if (parseInt(orbits[x].slice(0, 1)) > max) {
      max = parseInt(orbits[x].slice(0, 1));
      applicable = parseInt(orbits[x].slice(2, 3));
    }else if(parseInt(orbits[x].slice(0, 1)) === max) {
      applicable += parseInt(orbits[x].slice(2, 3));
    }
  }

  return applicable;
}
