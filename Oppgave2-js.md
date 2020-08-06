# DEL 2. JAVASCRIPT

## INTRODUKSJON
- Gå til: https://tinyurl.com/yx4cjpo9 
- Dere som var med sist gå til Kode2 mappen og last ned script.js filen. 
- Dere som ikke var med sist, last også ned mappen kode. Legg script.js filen inn i denne mappen. 
- Legg filen i samme mappe som html filen du lagde sist. 
- Åpne html filen og script filen i visual studio code. 
- Åpne html filen i nettleseren din slik at du kan se endringene underveis

## Informasjon
For at noe skal skje når man trykker på en knapp, må knappen ha en tilhørende funksjon. Funksjonen skrives i JavaScript-filen og kjøres ved at man refererer til denne i <button> taggen i HTML-filen. Om man ønsker at noe skal skje ved trykking må button-taggen ha en onclick. En onclick skrives på følgende måte: onclick=”rpg.funksjonsnavn”, se eksempelet under:
	
~~~~
<button id="btnStart" type="button" onclick="rpg.initialize()">Start</button>
~~~~


Mesteparten av koden dere skal skrive er fra Initialize funksjonen og nedover. Vi har lagt inn mange kommentarer i JavaScrcrip-filen som vil hjelpe dere underveis i oppgavene (grønn tekst). 

START SPILLET
## Oppgave 1
I HTML filen, legg til koden under i head-taggen:
~~~~
<script src="script.js"></script>
<script> 
  var rpg = new RPG();
</script>
~~~~

## Oppgave 2
1. Trykk på start-knappen på nettsiden. Knappen fungerer ikke. Her må det legges til en onclick på knappen. 
~~~~
onclick="rpg.initialize()"
~~~~

2. Trykker dere nå på knappen igjen skal dere se noe av dataen til spilleren og monsteret. Vi vil at dere skal fylle ut resten av informasjonen om spilleren i funksjonen initialize. Dette gjør dere i script.js filen. 

3. Legg til informasjon om monster i selectMonster funksjonen.

4. Nå må også noen knapper vises og noen skjules. I initialize funksjonen skriv kode som skjuler start knappen, next knappen og shop tabellen. Eneste knappen som må vises er attack knappen.

# FØRSTE BATTLE
## Oppgave 3
1. ÅNEEEI! Monsteret har mye mer liv enn helten! Finn HP-en til monsteret i koden og reduser denne. Finn HP’en til spilleren og øk denne. Nå kan dere også endre navn, bilde osv på både monster og spiller som dere selv ønsker. Refresh og prøv å bekjempe monsteret på nytt!

2. ÅNEEEI IGJEN! Om du trykker attack ser du at det bare er spilleren som tar skade. I attack funksjonen blir skaden monsteret gjør regnet ut. men vi oppdaterer ikke HP’en til monsteret. Skriv inn dette i attack funksjonen. 

3. Om spilleren eller monsteret vinner burde det skrives ut en beskjed til brukeren. Husk å ta hensyn til begge scenarioene. For å skrive ut en beskjed til brukeren kan man bruke koden: 
~~~~
alert("beskjed til brukeren")
~~~~

4. Om spilleren vinner bør butikk tabellen vises. Skriv kode som gjør denne synlig om spilleren vinner. 

# KJØP I BUTIKKEN
## Oppgave 4
1. Etter brukeren trykker på kjøp sverd skal to ting skje:
  * brukerens AP oppdateres (brukeren må få utbytte av kjøpet sitt)
  * knappen for å kjøpe sverd skjules (brukeren kan bare kjøpe sverd èn gang). 

2. Etter brukeren trykker på kjøp armor skal to ting skje:
  * brukerens Armor oppdateres (brukeren må få utbytte av kjøpet sitt)
  * knappen for å kjøpe armor skjules (brukeren kan bare kjøpe armor èn gang). 

# SLÅSS MOT NYTT MONSTER
## Oppgave 5
Finn Next funksjonen i JavaScript-filen. Det er denne som velger neste monster. Hvilket monster som skal velges til neste kamp avgjøres i currentMonster variabelen. Finn riktig parameter til selectMonster funksjonen. 

# FORSLAG TIL VIDERE UTVIKLING AV SPILLET
* La brukeren velge mellom å attacke eller heale i hver battle. Legge til en heal-knapp ved siden av attack knappen. La denne øke HP-til brukeren.
* Legge til muligheten for super attack - denne gjør ekstra mye damage. Sett en limit i antall ganger denne kan brukes i hver battle. 
* Legge til flere playere og la brukeren velge ut hvem de vil være før de starter kampen mot et monster.
* Endre dagens player og monstre til egne bilder. Eller tegn ditt eget i paint, Adobe Illustrator eller Adobe Photoshop. Legg bildefilen i mappen som heter “img”  i spill prosjektet. 
* Legge til bilde (eller lag selv) av armor og weapon. Disse kan på lik linje som monster ha et eget navn og beskrivelse.
* Legge til flere typer weapon og armor i butikken, gi alle ulik AP
* Legge til at playeren har gull,  og la den vinne en viss mengde gull hver gang den vinner over et monster. Gi alle gjenstander i butikken en pris i gull. Brukeren kan ikke kjøpe noe i butikken om de ikke har nok gull. 
* Legge til flere beskjeder til brukeren, f.eks “You are missing 5 gold to buy the selected axe”
* La brukeren kjøpe potions i butikken og la brukeren bruke disse til å heale under en battle. Ikke alle potions trenger å hjelpe spilleren, noen kan også være gift og isteden ta mye HP. 

Generelt bruk fantasien eller ta inspirasjon fra spill dere allerede kjenner til :)
