// Udir-tilpasset oppgavedatabase for Nasjonale Prøver 5. trinn
// Støtter: multiple_choice, input, dropdown, matrix, sorting, matching og word_clicker.

window.taskDatabase = {
    math: [
        {
            level: 2,
            type: "multiple_choice",
            question: 'Hvilken brøkdel av denne sirkelen er rød? <br><br><div style="text-align:center;"><svg width="200" height="200" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="none" stroke="#333" stroke-width="2" /><path d="M50 50 L50 5 A45 45 0 1 1 5 50 Z" fill="#ff5252" stroke="#333" stroke-width="2" /><path d="M50 50 L5 50 A45 45 0 0 1 50 5 Z" fill="#fff" stroke="#333" stroke-width="2" /><line x1="50" y1="5" x2="50" y2="95" stroke="#333" stroke-width="2" /><line x1="5" y1="50" x2="95" y2="50" stroke="#333" stroke-width="2" /></svg></div>',
            options: ["1/4", "1/2", "3/4", "2/3"],
            correct: "3/4",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Tell opp alle delene i sirkelen:</span><span class="math-step-formula">4 deler</span></div><div class="math-step"><span class="math-step-desc">2. Tell hvor mange deler som er røde:</span><span class="math-step-formula">3 deler</span></div><div class="math-step"><span class="math-step-desc">3. Sett opp som brøk (røde deler av totalt):</span><span class="math-step-formula">3/4</span></div></div>'
        },
        {
            level: 2,
            type: "input",
            question: 'Hvilket tall peker pilen på? Skriv svaret som et tall (bruk minus for negative tall).<br><br><div style="text-align:center;"><svg width="450" height="150" viewBox="0 0 240 80"><line x1="20" y1="40" x2="220" y2="40" stroke="#333" stroke-width="2" /><!-- Tick marks and numbers --><line x1="20" y1="35" x2="20" y2="45" stroke="#333" stroke-width="2" /><text x="20" y="60" font-size="8" font-family="Nunito" text-anchor="middle">-5</text><line x1="40" y1="35" x2="40" y2="45" stroke="#333" stroke-width="1" /><line x1="60" y1="35" x2="60" y2="45" stroke="#333" stroke-width="2" /><line x1="80" y1="35" x2="80" y2="45" stroke="#333" stroke-width="1" /><line x1="100" y1="35" x2="100" y2="45" stroke="#333" stroke-width="1" /><line x1="120" y1="30" x2="120" y2="50" stroke="#333" stroke-width="2.5" /><text x="120" y="65" font-size="10" font-family="Fredoka One" text-anchor="middle" font-weight="bold">0</text><line x1="140" y1="35" x2="140" y2="45" stroke="#333" stroke-width="1" /><line x1="160" y1="35" x2="160" y2="45" stroke="#333" stroke-width="1" /><line x1="180" y1="35" x2="180" y2="45" stroke="#333" stroke-width="2" /><line x1="200" y1="35" x2="200" y2="45" stroke="#333" stroke-width="1" /><line x1="220" y1="35" x2="220" y2="45" stroke="#333" stroke-width="2" /><text x="220" y="60" font-size="8" font-family="Nunito" text-anchor="middle">5</text><!-- Arrow pointing at -3 (x=60) --><path d="M60 38 L55 25 L65 25 Z" fill="#ff4081" /><line x1="60" y1="10" x2="60" y2="25" stroke="#ff4081" stroke-width="2" /></svg></div>',
            correct: "-3",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Finn nullpunktet (0) på linjen:</span><span class="math-step-formula">0</span></div><div class="math-step"><span class="math-step-desc">2. Gå til venstre for negative tall:</span><span class="math-step-formula">Hver strek = -1</span></div><div class="math-step"><span class="math-step-desc">3. Tell antall hopp til pilen:</span><span class="math-step-formula">3 hopp til venstre</span></div><div class="math-step"><span class="math-step-desc">4. Konklusjon:</span><span class="math-step-formula">-3</span></div></div>'
        },
        {
            level: 2,
            type: "sorting",
            question: "Sorter tallene under i rekkefølge fra minst verdi (til venstre) til størst verdi (til høyre):",
            options: ["0,2", "1/10", "0,75", "1/2"],
            correct: ["1/10", "0,2", "1/2", "0,75"],
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Gjør om brøken 1/10 til desimaltall:</span><span class="math-step-formula">1/10 = 0,1</span></div><div class="math-step"><span class="math-step-desc">2. Gjør om brøken 1/2 til desimaltall:</span><span class="math-step-formula">1/2 = 0,5</span></div><div class="math-step"><span class="math-step-desc">3. Sammenlign alle desimaltallene:</span><span class="math-step-formula">0,1 &lt; 0,2 &lt; 0,5 &lt; 0,75</span></div><div class="math-step"><span class="math-step-desc">4. Rekkefølge:</span><span class="math-step-formula">1/10 ➔ 0,2 ➔ 1/2 ➔ 0,75</span></div></div>'
        },
        {
            level: 1,
            type: "input",
            question: "En planke er 2,4 meter lang. Hvor mange centimeter er planken?",
            correct: "240",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Finn ut hvor mange cm det er i 1 meter:</span><span class="math-step-formula">1 meter = 100 cm</span></div><div class="math-step"><span class="math-step-desc">2. Multipliser lengden i meter med 100:</span><span class="math-step-formula">2,4 &times; 100 = 240 cm</span></div></div>'
        },
        {
            level: 3,
            type: "multiple_choice",
            question: 'Et punkt ligger på koordinaten (3, 4) i et koordinatsystem. Hvis du flytter punktet 2 enheter til høyre (langs x-aksen) og 1 enhet opp (langs y-aksen), hva blir den nye koordinaten? <br><br><div style="text-align:center;"><svg width="250" height="250" viewBox="0 0 150 150"><line x1="45" y1="30" x2="45" y2="130" stroke="#eee" stroke-width="1" /><line x1="60" y1="30" x2="60" y2="130" stroke="#eee" stroke-width="1" /><line x1="75" y1="30" x2="75" y2="130" stroke="#eee" stroke-width="1" /><line x1="90" y1="30" x2="90" y2="130" stroke="#eee" stroke-width="1" /><line x1="105" y1="30" x2="105" y2="130" stroke="#eee" stroke-width="1" /><line x1="120" y1="30" x2="120" y2="130" stroke="#eee" stroke-width="1" /><line x1="30" y1="115" x2="130" y2="115" stroke="#eee" stroke-width="1" /><line x1="30" y1="100" x2="130" y2="100" stroke="#eee" stroke-width="1" /><line x1="30" y1="85" x2="130" y2="85" stroke="#eee" stroke-width="1" /><line x1="30" y1="70" x2="130" y2="70" stroke="#eee" stroke-width="1" /><line x1="30" y1="55" x2="130" y2="55" stroke="#eee" stroke-width="1" /><line x1="30" y1="40" x2="130" y2="40" stroke="#eee" stroke-width="1" /><line x1="30" y1="130" x2="135" y2="130" stroke="#555" stroke-width="2" /><line x1="30" y1="25" x2="30" y2="130" stroke="#555" stroke-width="2" /><path d="M135 130 L130 127 L130 133 Z" fill="#555" /><path d="M30 25 L27 30 L33 30 Z" fill="#555" /><text x="140" y="134" font-size="10" font-family="Fredoka One, sans-serif" fill="#555">x</text><text x="28" y="20" font-size="10" font-family="Fredoka One, sans-serif" fill="#555" text-anchor="middle">y</text><text x="30" y="142" font-size="8" font-family="Nunito, sans-serif" fill="#777" text-anchor="middle">0</text><text x="45" y="142" font-size="8" font-family="Nunito, sans-serif" fill="#777" text-anchor="middle">1</text><text x="60" y="142" font-size="8" font-family="Nunito, sans-serif" fill="#777" text-anchor="middle">2</text><text x="75" y="142" font-size="8" font-family="Nunito, sans-serif" fill="#777" text-anchor="middle">3</text><text x="90" y="142" font-size="8" font-family="Nunito, sans-serif" fill="#777" text-anchor="middle">4</text><text x="105" y="142" font-size="8" font-family="Nunito, sans-serif" fill="#777" text-anchor="middle">5</text><text x="120" y="142" font-size="8" font-family="Nunito, sans-serif" fill="#777" text-anchor="middle">6</text><text x="22" y="118" font-size="8" font-family="Nunito, sans-serif" fill="#777" text-anchor="end">1</text><text x="22" y="103" font-size="8" font-family="Nunito, sans-serif" fill="#777" text-anchor="end">2</text><text x="22" y="88" font-size="8" font-family="Nunito, sans-serif" fill="#777" text-anchor="end">3</text><text x="22" y="73" font-size="8" font-family="Nunito, sans-serif" fill="#777" text-anchor="end">4</text><text x="22" y="58" font-size="8" font-family="Nunito, sans-serif" fill="#777" text-anchor="end">5</text><text x="22" y="43" font-size="8" font-family="Nunito, sans-serif" fill="#777" text-anchor="end">6</text><circle cx="75" cy="70" r="4.5" fill="#ff4081" stroke="#fff" stroke-width="1.5" /><text x="82" y="68" font-size="8" font-family="Fredoka One, sans-serif" font-weight="bold" fill="#ff4081">(3, 4)</text></svg></div>',
            options: ["(5, 5)", "(1, 5)", "(5, 3)", "(1, 3)"],
            correct: "(5, 5)",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Flytt 2 enheter til høyre (øk x-aksen):</span><span class="math-step-formula">3 + 2 = 5</span></div><div class="math-step"><span class="math-step-desc">2. Flytt 1 enhet opp (øk y-aksen):</span><span class="math-step-formula">4 + 1 = 5</span></div><div class="math-step"><span class="math-step-desc">3. Nytt koordinatpunkt:</span><span class="math-step-formula">(5, 5)</span></div></div>'
        },
        {
            level: 3,
            type: "matrix",
            question: "Avgjør om påstandene om tallene under er riktige eller gale:",
            matrixRows: [
                { text: "Tallet 7 er et partall.", correct: "Galt" },
                { text: "Tallet 13 er et primtall.", correct: "Riktig" },
                { text: "0,5 er det samme som brøken 1/2.", correct: "Riktig" }
            ],
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. 7 kan ikke deles på 2 uten rest:</span><span class="math-step-formula">7 er et oddetall</span></div><div class="math-step"><span class="math-step-desc">2. 13 kan kun deles på 1 og 13:</span><span class="math-step-formula">13 er et primtall</span></div><div class="math-step"><span class="math-step-desc">3. Desimaltallet 0,5 betyr en halv:</span><span class="math-step-formula">0,5 = 1/2</span></div></div>'
        },
        {
            level: 1,
            type: "multiple_choice",
            question: "Hvilken plassverdi har sifferet 5 i tallet 352?",
            options: ["Eneplass", "Tierplass", "Hundrerplass", "Tusenplass"],
            correct: "Tierplass",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Plassverdi for 3 (hundrere):</span><span class="math-step-formula">300</span></div><div class="math-step"><span class="math-step-desc">2. Plassverdi for 5 (tiere):</span><span class="math-step-formula">50 (Tierplass)</span></div><div class="math-step"><span class="math-step-desc">3. Plassverdi for 2 (enere):</span><span class="math-step-formula">2</span></div></div>'
        },
        {
            level: 2,
            type: "input",
            question: "En fotballkamp starter kl. 14:15 og varer i nøyaktig 90 minutter. Når slutter fotballkampen? Skriv klokkeslettet på formen HH:MM.",
            correct: "15:45",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Gjør om 90 minutter til timer og minutter:</span><span class="math-step-formula">1 time og 30 min</span></div><div class="math-step"><span class="math-step-desc">2. Legg til 1 time til starttiden:</span><span class="math-step-formula">14:15 + 1t = 15:15</span></div><div class="math-step"><span class="math-step-desc">3. Legg til de gjenstående 30 minuttene:</span><span class="math-step-formula">15:15 + 30m = 15:45</span></div></div>'
        },
        {
            level: 3,
            type: "multiple_choice",
            question: "Emma skal velge én type is og én type strø. Hun kan velge mellom jordbæris, sjokoladeis og vaniljeis. Til strø kan hun velge mellom tuttifrutti og sjokoladestrø. Hvor mange forskjellige kombinasjoner av is med strø kan hun lage?",
            options: ["3", "5", "6", "9"],
            correct: "6",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Antall typer is å velge mellom:</span><span class="math-step-formula">3</span></div><div class="math-step"><span class="math-step-desc">2. Antall typer strø å velge mellom:</span><span class="math-step-formula">2</span></div><div class="math-step"><span class="math-step-desc">3. Regn ut totale kombinasjoner:</span><span class="math-step-formula">3 &times; 2 = 6</span></div></div>'
        },
        {
            level: 1,
            type: "matching",
            question: "Koble sammen geometrisk figur med dens beskrivelse:",
            leftItems: ["Kvadrat", "Trekant", "Sirkel", "Rektangel"],
            rightItems: ["4 like lange sider", "Har 3 hjørner", "Helt rund uten hjørner", "Motstående sider er like"],
            correct: {
                "Kvadrat": "4 like lange sider",
                "Trekant": "Har 3 hjørner",
                "Sirkel": "Helt rund uten hjørner",
                "Rektangel": "Motstående sider er like"
            },
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">Kvadrat:</span><span class="math-step-formula">4 like lange sider</span></div><div class="math-step"><span class="math-step-desc">Trekant:</span><span class="math-step-formula">Har 3 hjørner</span></div><div class="math-step"><span class="math-step-desc">Sirkel:</span><span class="math-step-formula">Helt rund (ingen hjørner)</span></div><div class="math-step"><span class="math-step-desc">Rektangel:</span><span class="math-step-formula">Motstående sider er like</span></div></div>'
        },
        {
            level: 2,
            type: "dropdown",
            question: "Et glass rommer 2 dl vann. Du må drikke ___ glass for å få i deg 1 liter vann.",
            options: ["2", "4", "5", "10"],
            correct: "5",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Gjør om 1 liter til desiliter (dl):</span><span class="math-step-formula">1 liter = 10 dl</span></div><div class="math-step"><span class="math-step-desc">2. Del totalt antall dl på glassets størrelse:</span><span class="math-step-formula">10 dl : 2 dl = 5</span></div></div>'
        },
        {
            level: 2,
            type: "multiple_choice",
            question: "Hvilket av disse tallene er et primtall?",
            options: ["9", "12", "15", "17"],
            correct: "17",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Sjekk delelighet for 9, 12 og 15:</span><span class="math-step-formula">9=3x3, 12=3x4, 15=3x5</span></div><div class="math-step"><span class="math-step-desc">2. Sjekk 17 (kan bare deles på 1 og 17):</span><span class="math-step-formula">17 er et primtall</span></div></div>'
        },
        {
            level: 2,
            type: "input",
            question: "Hva er omkretsen til et rektangel som er 8 cm langt og 5 cm bredt? Skriv kun tallet (i cm).",
            correct: "26",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Adder lengdene til alle de 4 sidene:</span><span class="math-step-formula">8 + 5 + 8 + 5</span></div><div class="math-step"><span class="math-step-desc">2. Regn ut summen:</span><span class="math-step-formula">26 cm</span></div></div>'
        },
        {
            level: 1,
            type: "multiple_choice",
            question: 'Hvor mange flere elever har hund enn katt i denne klassen? Se søylediagrammet under.<br><br><div style="text-align:center;"><svg width="250" height="150" viewBox="0 0 100 60"><line x1="15" y1="50" x2="90" y2="50" stroke="#333" stroke-width="1" /><line x1="15" y1="10" x2="15" y2="50" stroke="#333" stroke-width="1" /><!-- Hund --><rect x="25" y="14" width="12" height="36" fill="#4fc3f7" stroke="#0288d1" /><text x="31" y="56" font-size="5" text-anchor="middle">Hund</text><text x="31" y="11" font-size="5" text-anchor="middle">12</text><!-- Katt --><rect x="45" y="26" width="12" height="24" fill="#ff8a65" stroke="#d84315" /><text x="51" y="56" font-size="5" text-anchor="middle">Katt</text><text x="51" y="23" font-size="5" text-anchor="middle">8</text><!-- Kanin --><rect x="65" y="38" width="12" height="12" fill="#81c784" stroke="#2e7d32" /><text x="71" y="56" font-size="5" text-anchor="middle">Kanin</text><text x="71" y="35" font-size="5" text-anchor="middle">4</text></svg></div>',
            options: ["2", "4", "6", "12"],
            correct: "4",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Antall elever med hund:</span><span class="math-step-formula">12</span></div><div class="math-step"><span class="math-step-desc">2. Antall elever med katt:</span><span class="math-step-formula">8</span></div><div class="math-step"><span class="math-step-desc">3. Finn differansen (hvor mange flere):</span><span class="math-step-formula">12 - 8 = 4</span></div></div>'
        },
        {
            level: 2,
            type: "sorting",
            question: "Sorter temperaturene under fra den kaldeste (til venstre) til den varmeste (til høyre):",
            options: ["-8 °C", "3 °C", "-2 °C", "0 °C"],
            correct: ["-8 °C", "-2 °C", "0 °C", "3 °C"],
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Finn det kaldeste tallet (mest negative):</span><span class="math-step-formula">-8 °C</span></div><div class="math-step"><span class="math-step-desc">2. Finn det nest kaldeste tallet:</span><span class="math-step-formula">-2 °C</span></div><div class="math-step"><span class="math-step-desc">3. Sorter positive grader og null:</span><span class="math-step-formula">0 °C ➔ 3 °C</span></div></div>'
        },
        {
            level: 2,
            type: "input",
            question: "Oliver kjøper 3 pakker tyggegummi. Hver pakke koster 14 kroner. Han betaler med en 50-kronerseddel. Hvor mange kroner får han tilbake? Skriv kun tallet.",
            correct: "8",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Regn ut prisen for 3 pakker tyggegummi:</span><span class="math-step-formula">3 &times; 14 kr = 42 kr</span></div><div class="math-step"><span class="math-step-desc">2. Trekk prisen fra seddelen du betaler med:</span><span class="math-step-formula">50 kr - 42 kr = 8 kr</span></div></div>'
        },
        {
            level: 1,
            type: "multiple_choice",
            question: "Hvor mye er en tredjedel av 15 epler?",
            options: ["3 epler", "5 epler", "10 epler", "12 epler"],
            correct: "5 epler",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Del det totale antallet epler på 3:</span><span class="math-step-formula">15 : 3</span></div><div class="math-step"><span class="math-step-desc">2. Regn ut svaret:</span><span class="math-step-formula">5 epler</span></div></div>'
        },
        {
            level: 2,
            type: "input",
            question: "Temperaturen ble målt over fire dager: mandag 12 °C, tirsdag 14 °C, onsdag 15 °C, torsdag 11 °C. Hva var gjennomsnittstemperaturen for disse fire dagene? Skriv kun tallet.",
            correct: "13",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Finn summen av alle temperaturene:</span><span class="math-step-formula">12 + 14 + 15 + 11 = 52</span></div><div class="math-step"><span class="math-step-desc">2. Del summen på antall dager (4):</span><span class="math-step-formula">52 : 4 = 13 °C</span></div></div>'
        },
        {
            level: 3,
            type: "matrix",
            question: "Vurder om påstandene om tallet 120 er riktige eller gale:",
            matrixRows: [
                { text: "Tallet 120 kan deles likt på 5.", correct: "Riktig" },
                { text: "Halvparten av 120 er 70.", correct: "Galt" },
                { text: "Tallet 120 har 2 hundrere.", correct: "Galt" }
            ],
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">120 slutter på 0 og kan deles på 5:</span><span class="math-step-formula">120 : 5 = 24 (Riktig)</span></div><div class="math-step"><span class="math-step-desc">Halvparten av 120 er 60 (ikke 70):</span><span class="math-step-formula">120 : 2 = 60 (Galt)</span></div><div class="math-step"><span class="math-step-desc">Tallet har 1 hundrer, 2 tiere, 0 enere:</span><span class="math-step-formula">120 (Galt)</span></div></div>'
        },
        {
            level: 2,
            type: "multiple_choice",
            question: "En vinkel måler nøyaktig 90 grader. Hva kalles en slik vinkel?",
            options: ["Spiss vinkel", "Rett vinkel", "Stump vinkel", "Likebeint vinkel"],
            correct: "Rett vinkel",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">Vinkel på under 90 grader:</span><span class="math-step-formula">Spiss vinkel</span></div><div class="math-step"><span class="math-step-desc">Vinkel på nøyaktig 90 grader:</span><span class="math-step-formula">Rett vinkel</span></div><div class="math-step"><span class="math-step-desc">Vinkel på over 90 grader:</span><span class="math-step-formula">Stump vinkel</span></div></div>'
        },
        {
            level: 3,
            type: "input",
            question: "En flaske inneholder 0,75 liter saft. Hvor mange milliliter (ml) tilsvarer dette? Skriv kun tallet.",
            correct: "750",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Finn ut hvor mange ml det er i 1 liter:</span><span class="math-step-formula">1 liter = 1000 ml</span></div><div class="math-step"><span class="math-step-desc">2. Multipliser antallet liter med 1000:</span><span class="math-step-formula">0,75 &times; 1000 = 750 ml</span></div></div>'
        },
        {
            level: 2,
            type: "input",
            question: "Finn verdien av X i denne ligningen: X + 15 = 42. Skriv kun tallet.",
            correct: "27",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Trekk fra 15 på begge sider av likhetstegnet:</span><span class="math-step-formula">X = 42 - 15</span></div><div class="math-step"><span class="math-step-desc">2. Regn ut verdien til X:</span><span class="math-step-formula">X = 27</span></div></div>'
        },
        {
            level: 3,
            type: "multiple_choice",
            question: "Fire venner skal dele en pizza. Pizzaen er delt i 8 stykker. To av vennene spiser 2 stykker hver, og én venn spiser 3 stykker. Hvor stor brøkdel av pizzaen er igjen til den siste vennen?",
            options: ["1/8", "2/8", "3/8", "4/8"],
            correct: "1/8",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Finn ut hvor mye de tre vennene spiste til sammen:</span><span class="math-step-formula">2 + 2 + 3 = 7 stykker</span></div><div class="math-step"><span class="math-step-desc">2. Finn ut hvor mange stykker som er igjen:</span><span class="math-step-formula">8 - 7 = 1 stykke</span></div><div class="math-step"><span class="math-step-desc">3. Sett opp som brøkdel av hele pizzaen:</span><span class="math-step-formula">1/8</span></div></div>'
        },
        {
            level: 2,
            type: "input",
            question: "Hvor mange kanter (sider) har en regulær sekskant (heksagon)? Skriv kun tallet.",
            correct: "6",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">En trekant har:</span><span class="math-step-formula">3 sider</span></div><div class="math-step"><span class="math-step-desc">En firkant har:</span><span class="math-step-formula">4 sider</span></div><div class="math-step"><span class="math-step-desc">En sekskant (heksagon) har:</span><span class="math-step-formula">6 sider</span></div></div>'
        },
        {
            level: 1,
            type: "multiple_choice",
            question: 'Hvilket tall er det samme som "fire tusen og syv"?',
            options: ["470", "407", "4007", "4700"],
            correct: "4007",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">Tusenplassen:</span><span class="math-step-formula">4000</span></div><div class="math-step"><span class="math-step-desc">Eneplassen:</span><span class="math-step-formula">7</span></div><div class="math-step"><span class="math-step-desc">Sammensatt tall:</span><span class="math-step-formula">4007</span></div></div>'
        },
        {
            level: 3,
            type: "multiple_choice",
            question: "Hvor mange symmetrilinjer har et vanlig kvadrat?<br><br><div style=\"text-align:center;\"><svg width=\"80\" height=\"80\" viewBox=\"0 0 40 40\"><rect x=\"5\" y=\"5\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"#333\" stroke-width=\"1.5\" /></svg></div>",
            options: ["2", "3", "4", "8"],
            correct: "4",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">Symmetrilinjer på tvers (midten av sidene):</span><span class="math-step-formula">2 linjer</span></div><div class="math-step"><span class="math-step-desc">Symmetrilinjer på skrå (hjørne til hjørne):</span><span class="math-step-formula">2 linjer</span></div><div class="math-step"><span class="math-step-desc">Totalt antall symmetrilinjer:</span><span class="math-step-formula">4 linjer</span></div></div>'
        },
        {
            level: 2,
            type: "matching",
            question: "Koble sammen måleenhetene som tilsvarer hverandre:",
            leftItems: ["1 kg", "1 liter", "1 meter", "1 time"],
            rightItems: ["1000 gram", "10 desiliter", "100 centimeter", "60 minutter"],
            correct: {
                "1 kg": "1000 gram",
                "1 liter": "10 desiliter",
                "1 meter": "100 centimeter",
                "1 time": "60 minutter"
            },
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">Vekt:</span><span class="math-step-formula">1 kg = 1000 gram</span></div><div class="math-step"><span class="math-step-desc">Volum:</span><span class="math-step-formula">1 liter = 10 desiliter</span></div><div class="math-step"><span class="math-step-desc">Lengde:</span><span class="math-step-formula">1 meter = 100 centimeter</span></div><div class="math-step"><span class="math-step-desc">Tid:</span><span class="math-step-formula">1 time = 60 minutter</span></div></div>'
        },
        {
            level: 2,
            type: "input",
            question: "Hvis du dobler tallet 16, og deretter trekker fra 8, hvilket tall får du da? Skriv kun tallet.",
            correct: "24",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Dobbel tallet 16:</span><span class="math-step-formula">16 &times; 2 = 32</span></div><div class="math-step"><span class="math-step-desc">2. Trekk fra 8:</span><span class="math-step-formula">32 - 8 = 24</span></div></div>'
        },
        {
            level: 2,
            type: "multiple_choice",
            question: "I en pose er det 3 røde kuler, 2 blå kuler og 5 grønne kuler. Hvis du trekker én kule uten å se, hva er sannsynligheten for at du trekker en rød kule?",
            options: ["2/10", "3/10", "5/10", "3/5"],
            correct: "3/10",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Finn totalt antall kuler i posen:</span><span class="math-step-formula">3 + 2 + 5 = 10 kuler</span></div><div class="math-step"><span class="math-step-desc">2. Tell hvor mange kuler som er røde:</span><span class="math-step-formula">3 røde kuler</span></div><div class="math-step"><span class="math-step-desc">3. Sannsynlighet som brøk:</span><span class="math-step-formula">3/10</span></div></div>'
        },
        {
            level: 3,
            type: "input",
            question: "Fortsett tallmønsteret: 2, 5, 11, 23, ... Hva blir det neste tallet i rekken? Skriv kun tallet.",
            correct: "47",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">Mønster:</span><span class="math-step-formula">(Tall &times; 2) + 1</span></div><div class="math-step"><span class="math-step-desc">Siste tall i rekken:</span><span class="math-step-formula">23</span></div><div class="math-step"><span class="math-step-desc">Regn ut neste tall:</span><span class="math-step-formula">(23 &times; 2) + 1 = 47</span></div></div>'
        },
        {
            level: 1,
            type: "input",
            question: "Klokken er 08:30. Om nøyaktig 4 timer og 15 minutter skal Alida spise lunsj. Hvilket klokkeslett skal hun spise lunsj? Skriv klokkeslettet på formen HH:MM.",
            correct: "12:45",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Legg til 4 timer til starttiden:</span><span class="math-step-formula">08:30 + 4t = 12:30</span></div><div class="math-step"><span class="math-step-desc">2. Legg til de siste 15 minuttene:</span><span class="math-step-formula">12:30 + 15m = 12:45</span></div></div>'
        },
        {
            level: 2,
            type: "multiple_choice",
            question: "Hvilken av disse 3D-figurene har nøyaktig 6 sideflater som alle er kvadratiske?",
            options: ["Prisme", "Kube", "Pyramide", "Sylinder"],
            correct: "Kube",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">En kube er satt sammen av:</span><span class="math-step-formula">6 like store kvadrater</span></div><div class="math-step"><span class="math-step-desc">Eksempel på en kube:</span><span class="math-step-formula">En vanlig spillterning</span></div></div>'
        },
        {
            level: 2,
            type: "input",
            question: "Hva blir 450 delt på 9? Skriv kun tallet.",
            correct: "50",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Vi vet at:</span><span class="math-step-formula">45 : 9 = 5</span></div><div class="math-step"><span class="math-step-desc">2. Siden det er ti ganger så mye (450):</span><span class="math-step-formula">450 : 9 = 50</span></div></div>'
        },
        {
            level: 3,
            type: "multiple_choice",
            question: "Hvilken av disse brøkene har nøyaktig samme verdi som 2/3?",
            options: ["4/9", "6/9", "8/9", "3/2"],
            correct: "6/9",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Gang med 3 i telleren (oppe):</span><span class="math-step-formula">2 &times; 3 = 6</span></div><div class="math-step"><span class="math-step-desc">2. Gang med 3 i nevneren (nede):</span><span class="math-step-formula">3 &times; 3 = 9</span></div><div class="math-step"><span class="math-step-desc">3. Konklusjon (likeverdig brøk):</span><span class="math-step-formula">2/3 = 6/9</span></div></div>'
        },
        {
            level: 1,
            type: "input",
            question: "En trekant har sider med lengdene 5 cm, 5 cm og 8 cm. Hva er omkretsen til trekanten? Skriv kun tallet.",
            correct: "18",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Adder lengdene av de tre sidene:</span><span class="math-step-formula">5 + 5 + 8</span></div><div class="math-step"><span class="math-step-desc">2. Regn ut summen:</span><span class="math-step-formula">18 cm</span></div></div>'
        },
        {
            level: 2,
            type: "multiple_choice",
            question: "Hva blir tallet 478 avrundet til nærmeste hundrer?",
            options: ["400", "450", "480", "500"],
            correct: "500",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Sjekk om tallet er nærmest 400 eller 500:</span><span class="math-step-formula">478 er mellom 400 og 500</span></div><div class="math-step"><span class="math-step-desc">2. Siden 478 er 450 eller mer:</span><span class="math-step-formula">Rund opp til 500</span></div></div>'
        },
        {
            level: 2,
            type: "input",
            question: "En pose poteter veier 2,5 kg. Hvor mange gram er det? Skriv kun tallet.",
            correct: "2500",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Finn ut hvor mange gram det er i 1 kg:</span><span class="math-step-formula">1 kg = 1000 gram</span></div><div class="math-step"><span class="math-step-desc">2. Multipliser kilogram med 1000:</span><span class="math-step-formula">2,5 &times; 1000 = 2500 g</span></div></div>'
        },
        {
            level: 2,
            type: "input",
            question: "Hvis du deler 36 i 4 like store deler, og så multipliserer én av delene med 5, hvilket tall får du da? Skriv kun tallet.",
            correct: "45",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Del 36 i 4 like store deler:</span><span class="math-step-formula">36 : 4 = 9</span></div><div class="math-step"><span class="math-step-desc">2. Multipliser denne delen med 5:</span><span class="math-step-formula">9 &times; 5 = 45</span></div></div>'
        },
        {
            level: 2,
            type: "matrix",
            question: "En temperaturmåling over tre dager viser: mandag 8 °C, tirsdag 6 °C og onsdag -2 °C. Avgjør om påstandene er riktige eller gale:",
            matrixRows: [
                { text: "Det var 10 grader varmere på mandag enn på onsdag.", correct: "Riktig" },
                { text: "Gjennomsnittstemperaturen for de tre dagene var 4 °C.", correct: "Riktig" },
                { text: "Onsdag var den varmeste dagen.", correct: "Galt" }
            ],
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">Mandag (8 °C) vs onsdag (-2 °C):</span><span class="math-step-formula">8 - (-2) = 10 grader (Riktig)</span></div><div class="math-step"><span class="math-step-desc">Gjennomsnittet:</span><span class="math-step-formula">(8 + 6 - 2) : 3 = 4 °C (Riktig)</span></div><div class="math-step"><span class="math-step-desc">Onsdag var den kaldeste dagen:</span><span class="math-step-formula">-2 °C (Galt)</span></div></div>'
        },
        {
            level: 3,
            type: "input",
            question: "Hva er arealet til et rektangel som er 7 cm langt og 6 cm bredt? Skriv kun tallet (i kvadratcentimeter, cm²).",
            correct: "42",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Areal av rektangel = lengde &times; bredde:</span><span class="math-step-formula">7 &times; 6</span></div><div class="math-step"><span class="math-step-desc">2. Regn ut arealet:</span><span class="math-step-formula">42 cm²</span></div></div>'
        },
        {
            level: 1,
            type: "multiple_choice",
            question: "Hvilket regnestykke under gir det største svaret?",
            options: ["12 + 15", "6 x 5", "50 - 22", "80 : 2"],
            correct: "80 : 2",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">Regn ut hvert svar:</span><span class="math-step-formula">12+15=27, 6x5=30, 50-22=28, 80:2=40</span></div><div class="math-step"><span class="math-step-desc">Det største svaret:</span><span class="math-step-formula">40</span></div></div>'
        },
        {
            level: 3,
            type: "sorting",
            question: "Sorter brøkene under fra minst verdi (til venstre) til størst verdi (til høyre):",
            options: ["1/2", "1/4", "3/4", "1/8"],
            correct: ["1/8", "1/4", "1/2", "3/4"],
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Gjør om brøkene til desimaltall:</span><span class="math-step-formula">1/8=0,125, 1/4=0,25, 1/2=0,5, 3/4=0,75</span></div><div class="math-step"><span class="math-step-desc">2. Sammenlign verdiene:</span><span class="math-step-formula">0,125 &lt; 0,25 &lt; 0,5 &lt; 0,75</span></div></div>'
        },
        {
            level: 3,
            type: "multiple_choice",
            question: "Hvor mange sekunder er det til sammen i 5 minutter?",
            options: ["50", "150", "300", "500"],
            correct: "300",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Finn ut hvor mange sekunder det er i 1 minutt:</span><span class="math-step-formula">1 minutt = 60 sekunder</span></div><div class="math-step"><span class="math-step-desc">2. Multipliser minuttene med 60:</span><span class="math-step-formula">5 &times; 60 = 300 sekunder</span></div></div>'
        },
        {
            level: 2,
            type: "input",
            question: "Et tog drar fra stasjonen kl. 10:15 og ankommer Lillehammer kl. 12:35. Hvor mange minutter tok togreisen totalt? Skriv kun tallet.",
            correct: "140",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Finn minutter i to fulle timer (10:15 til 12:15):</span><span class="math-step-formula">2 timer = 120 minutter</span></div><div class="math-step"><span class="math-step-desc">2. Legg til de gjenstående minuttene (12:15 til 12:35):</span><span class="math-step-formula">20 minutter</span></div><div class="math-step"><span class="math-step-desc">3. Summen av reisetiden:</span><span class="math-step-formula">120 + 20 = 140 minutter</span></div></div>'
        },
        {
            level: 1,
            type: "multiple_choice",
            question: "Hvilket siffer står på tierplassen i tallet 836?",
            options: ["8", "3", "6", "30"],
            correct: "3",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">Hundrerplass:</span><span class="math-step-formula">8 (800)</span></div><div class="math-step"><span class="math-step-desc">Tierplass:</span><span class="math-step-formula">3 (30)</span></div><div class="math-step"><span class="math-step-desc">Eneplass:</span><span class="math-step-formula">6 (6)</span></div></div>'
        },
        {
            level: 2,
            type: "input",
            question: "Hvor mange hjørner har en kube (terning)? Skriv kun tallet.",
            correct: "8",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">Antall hjørner (4 oppe, 4 nede):</span><span class="math-step-formula">8 hjørner</span></div><div class="math-step"><span class="math-step-desc">Antall kanter (sider):</span><span class="math-step-formula">12 kanter</span></div><div class="math-step"><span class="math-step-desc">Antall sideflater:</span><span class="math-step-formula">6 sideflater</span></div></div>'
        },
        {
            level: 3,
            type: "multiple_choice",
            question: "Hvis du kjøper to bøker som koster 75 kroner per stykk, og tre penner som koster 15 kroner per stykk, hvor mye betaler du til sammen?",
            options: ["180 kr", "195 kr", "210 kr", "225 kr"],
            correct: "195 kr",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Regn ut prisen for 2 bøker:</span><span class="math-step-formula">2 &times; 75 kr = 150 kr</span></div><div class="math-step"><span class="math-step-desc">2. Regn ut prisen for 3 penner:</span><span class="math-step-formula">3 &times; 15 kr = 45 kr</span></div><div class="math-step"><span class="math-step-desc">3. Summer prisene sammen:</span><span class="math-step-formula">150 kr + 45 kr = 195 kr</span></div></div>'
        },
        {
            level: 2,
            type: "input",
            question: "I en klasse på 20 elever er det 12 elever som har katt som kjæledyr. Hvor mange prosent (%) av klassen har katt? Skriv kun tallet.",
            correct: "60",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Sett opp som brøk:</span><span class="math-step-formula">12 av 20 = 12/20</span></div><div class="math-step"><span class="math-step-desc">2. Utvid brøken til nevneren 100 (gang med 5):</span><span class="math-step-formula">(12&times;5) / (20&times;5) = 60/100</span></div><div class="math-step"><span class="math-step-desc">3. Gjør om til prosent:</span><span class="math-step-formula">60 %</span></div></div>'
        },
        {
            level: 3,
            type: "input",
            question: "Regn ut svaret på dette stykket: 5 + 4 x 3 - 2. Husk regnerekkefølge! Skriv kun tallet.",
            correct: "15",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Multiplikasjon gjøres først (4 &times; 3):</span><span class="math-step-formula">12</span></div><div class="math-step"><span class="math-step-desc">2. Utfør addisjon (5 + 12):</span><span class="math-step-formula">17</span></div><div class="math-step"><span class="math-step-desc">3. Utfør subtraksjon (17 - 2):</span><span class="math-step-formula">15</span></div></div>'
        },
        {
            level: 2,
            type: "multiple_choice",
            question: "Hvilket tall mangler i dette tallmønsteret: 3, 6, 12, __, 48?",
            options: ["18", "24", "30", "36"],
            correct: "24",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">Mønster:</span><span class="math-step-formula">Hvert tall dobler seg (tall &times; 2)</span></div><div class="math-step"><span class="math-step-desc">Finn det manglende tallet etter 12:</span><span class="math-step-formula">12 &times; 2 = 24</span></div><div class="math-step"><span class="math-step-desc">Sjekk om mønsteret fortsetter:</span><span class="math-step-formula">24 &times; 2 = 48 (Stemmer!)</span></div></div>'
        },
        // --- Oppgaver 51 til 100 ---
        {
            level: 1,
            type: "input",
            question: "Hva er halvparten av 150? Skriv kun tallet.",
            correct: "75",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Finn halvparten ved å dele på 2:</span><span class="math-step-formula">150 : 2</span></div><div class="math-step"><span class="math-step-desc">2. Regn ut svaret:</span><span class="math-step-formula">75</span></div></div>'
        },
        {
            level: 2,
            type: "multiple_choice",
            question: "Hvilket av disse tallene er et oddetall?",
            options: ["24", "46", "57", "88"],
            correct: "57",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Sjekk om tallene kan deles på 2 uten rest:</span><span class="math-step-formula">24, 46 og 88 er partall</span></div><div class="math-step"><span class="math-step-desc">2. Sjekk tallet 57:</span><span class="math-step-formula">57 : 2 = 28,5 (Rest)</span></div><div class="math-step"><span class="math-step-desc">3. Konklusjon:</span><span class="math-step-formula">57 er et oddetall</span></div></div>'
        },
        {
            level: 1,
            type: "dropdown",
            question: "Hvis du multipliserer 8 med 7, får du ___.",
            options: ["48", "54", "56", "63"],
            correct: "56",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Finn produktet ved multiplikasjon:</span><span class="math-step-formula">8 &times; 7</span></div><div class="math-step"><span class="math-step-desc">2. Regn ut svaret:</span><span class="math-step-formula">56</span></div></div>'
        },
        {
            level: 2,
            type: "input",
            question: "Hva er omkretsen til en likesidet trekant der hver side er 9 cm? Skriv kun tallet.",
            correct: "27",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Likesidet trekant betyr:</span><span class="math-step-formula">3 like lange sider</span></div><div class="math-step"><span class="math-step-desc">2. Adder alle de 3 sidene:</span><span class="math-step-formula">9 + 9 + 9</span></div><div class="math-step"><span class="math-step-desc">3. Regn ut summen:</span><span class="math-step-formula">27 cm</span></div></div>'
        },
        {
            level: 2,
            type: "multiple_choice",
            question: "Hvor mange tiere er det i tallet 450?",
            options: ["5", "45", "50", "4"],
            correct: "45",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Del tallet på 10 for å finne antall tiere:</span><span class="math-step-formula">450 : 10</span></div><div class="math-step"><span class="math-step-desc">2. Svaret blir:</span><span class="math-step-formula">45</span></div></div>'
        },
        {
            level: 2,
            type: "input",
            question: "Finn verdien av Y i denne ligningen: Y - 12 = 18. Skriv kun tallet.",
            correct: "30",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Legg til 12 på begge sider av likhetstegnet:</span><span class="math-step-formula">Y = 18 + 12</span></div><div class="math-step"><span class="math-step-desc">2. Regn ut verdien til Y:</span><span class="math-step-formula">Y = 30</span></div></div>'
        },
        {
            level: 2,
            type: "sorting",
            question: "Sorter brøkene under i rekkefølge fra minst verdi (til venstre) til størst verdi (til høyre):",
            options: ["2/4", "1/4", "3/4", "4/4"],
            correct: ["1/4", "2/4", "3/4", "4/4"],
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Siden nevnerne er like (4), sammenlign tellerne:</span><span class="math-step-formula">1 &lt; 2 &lt; 3 &lt; 4</span></div><div class="math-step"><span class="math-step-desc">2. Konklusjon:</span><span class="math-step-formula">1/4 ➔ 2/4 ➔ 3/4 ➔ 4/4</span></div></div>'
        },
        {
            level: 2,
            type: "matrix",
            question: "Avgjør om påstandene om 3D-figurer er riktige eller gale:",
            matrixRows: [
                { text: "En sylinder har to sirkelformede flater.", correct: "Riktig" },
                { text: "En kule har åtte hjørner.", correct: "Galt" },
                { text: "En pyramide har alltid rund bunn.", correct: "Galt" }
            ],
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">Sylinder:</span><span class="math-step-formula">To sirkeleflater (topp og bunn)</span></div><div class="math-step"><span class="math-step-desc">Kule:</span><span class="math-step-formula">Helt rund, 0 hjørner</span></div><div class="math-step"><span class="math-step-desc">Pyramide:</span><span class="math-step-formula">Har kantet bunn (f.eks. firkantet)</span></div></div>'
        },
        {
            level: 2,
            type: "input",
            question: "En pakke melk inneholder 1,5 liter. Hvor mange desiliter (dl) er det? Skriv kun tallet.",
            correct: "15",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Finn ut hvor mange dl det er i 1 liter:</span><span class="math-step-formula">1 liter = 10 dl</span></div><div class="math-step"><span class="math-step-desc">2. Multipliser antallet liter med 10:</span><span class="math-step-formula">1,5 &times; 10 = 15 dl</span></div></div>'
        },
        {
            level: 3,
            type: "multiple_choice",
            question: "Hvilken brøkdel av et år er 3 måneder?",
            options: ["1/2", "1/3", "1/4", "1/6"],
            correct: "1/4",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Sett opp som brøk av totale måneder i et år (12):</span><span class="math-step-formula">3/12</span></div><div class="math-step"><span class="math-step-desc">2. Forkort brøken ved å dele på 3 oppe og nede:</span><span class="math-step-formula">(3:3) / (12:3) = 1/4</span></div></div>'
        },
        {
            level: 2,
            type: "matching",
            question: "Koble sammen regnestykket med riktig svar:",
            leftItems: ["4 x 8", "30 : 5", "12 + 19", "45 - 25"],
            rightItems: ["32", "6", "31", "20"],
            correct: {
                "4 x 8": "32",
                "30 : 5": "6",
                "12 + 19": "31",
                "45 - 25": "20"
            },
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">Multiplikasjon:</span><span class="math-step-formula">4 &times; 8 = 32</span></div><div class="math-step"><span class="math-step-desc">Divisjon:</span><span class="math-step-formula">30 : 5 = 6</span></div><div class="math-step"><span class="math-step-desc">Addisjon:</span><span class="math-step-formula">12 + 19 = 31</span></div><div class="math-step"><span class="math-step-desc">Subtrakson:</span><span class="math-step-formula">45 - 25 = 20</span></div></div>'
        },
        {
            level: 1,
            type: "input",
            question: "Hva er 500 minus 135? Skriv kun tallet.",
            correct: "365",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Trekk fra hundrere først:</span><span class="math-step-formula">500 - 100 = 400</span></div><div class="math-step"><span class="math-step-desc">2. Trekk fra tiere:</span><span class="math-step-formula">400 - 30 = 370</span></div><div class="math-step"><span class="math-step-desc">3. Trekk til slutt fra enere:</span><span class="math-step-formula">370 - 5 = 365</span></div></div>'
        },
        {
            level: 2,
            type: "multiple_choice",
            question: "Hvor mange kanter (sider) har en terning (kube)?",
            options: ["6", "8", "12", "24"],
            correct: "12",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">Sideflater:</span><span class="math-step-formula">6 stykker</span></div><div class="math-step"><span class="math-step-desc">Hjørner:</span><span class="math-step-formula">8 stykker</span></div><div class="math-step"><span class="math-step-desc">Kanter (linjene):</span><span class="math-step-formula">12 stykker</span></div></div>'
        },
        {
            level: 2,
            type: "input",
            question: "Klokken er 15:45. Hvor mange minutter er det igjen til klokken blir 17:00? Skriv kun tallet.",
            correct: "75",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Tell minutter frem til neste hele time (16:00):</span><span class="math-step-formula">15 minutter</span></div><div class="math-step"><span class="math-step-desc">2. Finn minutter i en hel time til (16:00 til 17:00):</span><span class="math-step-formula">60 minutter</span></div><div class="math-step"><span class="math-step-desc">3. Summen av minutter:</span><span class="math-step-formula">15 + 60 = 75 minutter</span></div></div>'
        },
        {
            level: 2,
            type: "dropdown",
            question: "Tallet ___ kan deles på både 2, 3 og 5 uten rest.",
            options: ["12", "15", "25", "30"],
            correct: "30",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">30 delt på 2:</span><span class="math-step-formula">30 : 2 = 15</span></div><div class="math-step"><span class="math-step-desc">30 delt på 3:</span><span class="math-step-formula">30 : 3 = 10</span></div><div class="math-step"><span class="math-step-desc">30 delt på 5:</span><span class="math-step-formula">30 : 5 = 6</span></div></div>'
        },
        {
            level: 2,
            type: "multiple_choice",
            question: "Hva er gjennomsnittet av tallene 4, 8 og 12?",
            options: ["6", "8", "10", "12"],
            correct: "8",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Summer sammen alle de 3 tallene:</span><span class="math-step-formula">4 + 8 + 12 = 24</span></div><div class="math-step"><span class="math-step-desc">2. Del summen på antall tall (3):</span><span class="math-step-formula">24 : 3 = 8</span></div></div>'
        },
        {
            level: 3,
            type: "input",
            question: "En sykkel koster 1200 kroner. Du får 10 % rabatt. Hvor mange kroner sparer du? Skriv kun tallet.",
            correct: "120",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Husk at 10 % er det samme som en tiendedel:</span><span class="math-step-formula">10 % = 1/10</span></div><div class="math-step"><span class="math-step-desc">2. Del totalbeløpet på 10 for å finne 10 %:</span><span class="math-step-formula">1200 : 10 = 120 kr</span></div></div>'
        },
        {
            level: 2,
            type: "sorting",
            question: "Sorter temperaturene under fra den kaldeste (til venstre) til den varmeste (til høyre):",
            options: ["-15 °C", "-5 °C", "-20 °C", "5 °C"],
            correct: ["-20 °C", "-15 °C", "-5 °C", "5 °C"],
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Sammenlign de negative tallene (kaldere betyr mer negativt):</span><span class="math-step-formula">-20 °C &lt; -15 °C &lt; -5 °C</span></div><div class="math-step"><span class="math-step-desc">2. Plasser positive grader til slutt:</span><span class="math-step-formula">5 °C</span></div></div>'
        },
        {
            level: 3,
            type: "matrix",
            question: "Vurder påstandene om vinkler og linjer under:",
            matrixRows: [
                { text: "En spiss vinkel er større enn 90 grader.", correct: "Galt" },
                { text: "En rett vinkel er nøyaktig 90 grader.", correct: "Riktig" },
                { text: "En stang som står loddrett på bakken danner en rett vinkel.", correct: "Riktig" }
            ],
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">Spiss vinkel:</span><span class="math-step-formula">Mindre enn 90 grader</span></div><div class="math-step"><span class="math-step-desc">Rett vinkel:</span><span class="math-step-formula">Nøyaktig 90 grader</span></div><div class="math-step"><span class="math-step-desc">Loddrett på bakken:</span><span class="math-step-formula">Danner 90 grader (Rett vinkel)</span></div></div>'
        },
        {
            level: 2,
            type: "input",
            question: "Hva blir 250 ganger 4? Skriv kun tallet.",
            correct: "1000",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Regn ut 250 &times; 2 først:</span><span class="math-step-formula">500</span></div><div class="math-step"><span class="math-step-desc">2. Dobbel svaret en gang til for å gange med 4:</span><span class="math-step-formula">500 &times; 2 = 1000</span></div></div>'
        },
        {
            level: 2,
            type: "multiple_choice",
            question: "Hvis en pose godteri koster 35 kroner, hvor mange poser kan du maksimalt kjøpe for 150 kroner?",
            options: ["3", "4", "5", "6"],
            correct: "4",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Sjekk prisen for 4 poser:</span><span class="math-step-formula">4 &times; 35 kr = 140 kr</span></div><div class="math-step"><span class="math-step-desc">2. Sjekk prisen for 5 poser:</span><span class="math-step-formula">5 &times; 35 kr = 175 kr (for dyrt)</span></div></div>'
        },
        {
            level: 3,
            type: "input",
            question: "Regn ut: 10 - 2 x 3 + 4. Husk regnerekkefølge! Skriv kun tallet.",
            correct: "8",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Multiplikasjon gjøres først (2 &times; 3):</span><span class="math-step-formula">6</span></div><div class="math-step"><span class="math-step-desc">2. Utfør subtraksjon (10 - 6):</span><span class="math-step-formula">4</span></div><div class="math-step"><span class="math-step-desc">3. Utfør addisjon (4 + 4):</span><span class="math-step-formula">8</span></div></div>'
        },
        {
            level: 2,
            type: "dropdown",
            question: "Dersom du kaster en vanlig spillterning, er sannsynligheten for å få et partall (2, 4 eller 6) ___.",
            options: ["1/6", "2/6", "3/6", "5/6"],
            correct: "3/6",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Tell gunstige utfall (partall: 2, 4, 6):</span><span class="math-step-formula">3 utfall</span></div><div class="math-step"><span class="math-step-desc">2. Finn totale antall mulige sider (1 til 6):</span><span class="math-step-formula">6 sider</span></div><div class="math-step"><span class="math-step-desc">3. Sannsynlighet som brøk:</span><span class="math-step-formula">3/6 (eller 1/2)</span></div></div>'
        },
        {
            level: 3,
            type: "input",
            question: "Hva er arealet til et kvadrat der omkretsen er 24 cm? Skriv kun tallet (i kvadratcentimeter, cm²).",
            correct: "36",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Finn sidelengden (omkrets delt på 4 sider):</span><span class="math-step-formula">24 : 4 = 6 cm</span></div><div class="math-step"><span class="math-step-desc">2. Arealet til kvadratet = side &times; side:</span><span class="math-step-formula">6 &times; 6 = 36 cm²</span></div></div>'
        },
        {
            level: 1,
            type: "multiple_choice",
            question: "Hvilken plassverdi har sifferet 8 i tallet 18 204?",
            options: ["Enere", "Tiere", "Hundrere", "Tusenere"],
            correct: "Tusenere",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">8-tallet står på fjerde plass bakfra:</span><span class="math-step-formula">18 204 ➔ 8000 (Tusenere)</span></div></div>'
        },
        {
            level: 2,
            type: "matching",
            question: "Koble brøken til venstre med tilsvarende desimaltall til høyre:",
            leftItems: ["1/2", "1/4", "1/5", "3/4"],
            rightItems: ["0,5", "0,25", "0,20", "0,75"],
            correct: {
                "1/2": "0,5",
                "1/4": "0,25",
                "1/5": "0,20",
                "3/4": "0,75"
            },
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">Halvparten (1/2):</span><span class="math-step-formula">0,5</span></div><div class="math-step"><span class="math-step-desc">Kvart (1/4):</span><span class="math-step-formula">0,25</span></div><div class="math-step"><span class="math-step-desc">En femtedel (1/5):</span><span class="math-step-formula">0,20</span></div><div class="math-step"><span class="math-step-desc">Tre fjerdedeler (3/4):</span><span class="math-step-formula">0,75</span></div></div>'
        },
        {
            level: 2,
            type: "input",
            question: "En togreise tar 2 timer og 45 minutter. Toget starter kl. 13:10. Hvilket klokkeslett ankommer det? Skriv på formen HH:MM.",
            correct: "15:55",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Legg til de 2 timene til starttiden:</span><span class="math-step-formula">13:10 + 2t = 15:10</span></div><div class="math-step"><span class="math-step-desc">2. Legg til de 45 minuttene:</span><span class="math-step-formula">15:10 + 45m = 15:55</span></div></div>'
        },
        {
            level: 3,
            type: "multiple_choice",
            question: "Hvor mange symmetrilinjer har en regulær femkant (pentagon)?",
            options: ["1", "3", "5", "10"],
            correct: "5",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">En regulær femkant har like mange symmetrilinjer som sider:</span><span class="math-step-formula">5 sider = 5 symmetrilinjer</span></div></div>'
        },
        {
            level: 2,
            type: "input",
            question: "Hva blir overslaget hvis du runder av tallene til nærmeste tiere og regner ut: 29 + 41 + 19? Skriv kun tallet.",
            correct: "90",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Rund av 29 til nærmeste tier:</span><span class="math-step-formula">30</span></div><div class="math-step"><span class="math-step-desc">2. Rund av 41 til nærmeste tier:</span><span class="math-step-formula">40</span></div><div class="math-step"><span class="math-step-desc">3. Rund av 19 til nærmeste tier:</span><span class="math-step-formula">20</span></div><div class="math-step"><span class="math-step-desc">4. Adder de avrundede tallene:</span><span class="math-step-formula">30 + 40 + 20 = 90</span></div></div>'
        },
        {
            level: 2,
            type: "dropdown",
            question: "Hvis en sirkel har en radius på 5 cm, er diameteren ___ cm.",
            options: ["2,5", "5", "10", "15"],
            correct: "10",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">Diameteren er alltid dobbelt så lang som radiusen:</span><span class="math-step-formula">2 &times; 5 cm = 10 cm</span></div></div>'
        },
        {
            level: 3,
            type: "multiple_choice",
            question: "Hvilket av disse tallene er et primtall?",
            options: ["21", "23", "25", "27"],
            correct: "23",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Sjekk delelighet:</span><span class="math-step-formula">21=3x7, 25=5x5, 27=3x9</span></div><div class="math-step"><span class="math-step-desc">2. Sjekk 23 (kan kun deles på 1 og 23):</span><span class="math-step-formula">23 er et primtall</span></div></div>'
        },
        {
            level: 2,
            type: "input",
            question: "Du kjøper 4 brus til 22 kroner stykket og betaler med en 100-kronerseddel. Hvor mange kroner får du igjen? Skriv kun tallet.",
            correct: "12",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Regn ut hva de 4 brusene koster:</span><span class="math-step-formula">4 &times; 22 kr = 88 kr</span></div><div class="math-step"><span class="math-step-desc">2. Trekk prisen fra seddelen du betaler med:</span><span class="math-step-formula">100 kr - 88 kr = 12 kr</span></div></div>'
        },
        {
            level: 3,
            type: "sorting",
            question: "Sorter brøkene under i rekkefølge fra minst verdi (til venstre) til størst verdi (til høyre):",
            options: ["1/10", "1/2", "1/5", "1/100"],
            correct: ["1/100", "1/10", "1/5", "1/2"],
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Gjør om alle brøkene til desimaltall:</span><span class="math-step-formula">1/100=0,01, 1/10=0,1, 1/5=0,2, 1/2=0,5</span></div><div class="math-step"><span class="math-step-desc">2. Sammenlign desimaltallene:</span><span class="math-step-formula">0,01 &lt; 0,1 &lt; 0,2 &lt; 0,5</span></div></div>'
        },
        {
            level: 2,
            type: "matrix",
            question: "Vurder påstandene om deling og rest under:",
            matrixRows: [
                { text: "Hvis du deler 17 på 5, blir resten 2.", correct: "Riktig" },
                { text: "Hvis du deler 24 på 6, blir resten 1.", correct: "Galt" },
                { text: "Alle partall kan deles på 2 uten rest.", correct: "Riktig" }
            ],
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">17 delt på 5:</span><span class="math-step-formula">17 = 3 &times; 5 + 2 (Resten er 2)</span></div><div class="math-step"><span class="math-step-desc">24 delt på 6:</span><span class="math-step-formula">24 = 4 &times; 6 + 0 (Resten er 0)</span></div><div class="math-step"><span class="math-step-desc">Partalls-definisjonen:</span><span class="math-step-formula">Kan deles på 2 uten rest</span></div></div>'
        },
        {
            level: 2,
            type: "input",
            question: "En løpebane er 400 meter lang. Hvor mange runder må du løpe for å tilbakelegge 2 kilometer? Skriv kun tallet.",
            correct: "5",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Gjør om 2 kilometer til meter:</span><span class="math-step-formula">2 km = 2000 meter</span></div><div class="math-step"><span class="math-step-desc">2. Del totaldistansen på lengden av én runde:</span><span class="math-step-formula">2000 m : 400 m = 5</span></div></div>'
        },
        {
            level: 2,
            type: "multiple_choice",
            question: "Hvis du har 3 bukser og 4 skjorter, hvor mange unike kombinasjoner av ett par bukser og én skjorte kan du sette sammen?",
            options: ["7", "12", "16", "24"],
            correct: "12",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Bruk multiplikasjonsprinsippet for valg:</span><span class="math-step-formula">Bukser &times; Skjorter</span></div><div class="math-step"><span class="math-step-desc">2. Regn ut kombinasjonene:</span><span class="math-step-formula">3 &times; 4 = 12</span></div></div>'
        },
        {
            level: 3,
            type: "input",
            question: "Regn ut: 12 + 8 : 4 - 3. Husk regnerekkefølge! Skriv kun tallet.",
            correct: "11",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Utfør divisjonen først (8 : 4):</span><span class="math-step-formula">2</span></div><div class="math-step"><span class="math-step-desc">2. Utfør addisjonen (12 + 2):</span><span class="math-step-formula">14</span></div><div class="math-step"><span class="math-step-desc">3. Utfør subtraksjonen (14 - 3):</span><span class="math-step-formula">11</span></div></div>'
        },
        {
            level: 1,
            type: "dropdown",
            question: "Tallet 487 har ___ enere.",
            options: ["4", "8", "7", "87"],
            correct: "7",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">Plassverdiene til 487 er:</span><span class="math-step-formula">4 hundrere, 8 tiere, 7 enere</span></div></div>'
        },
        {
            level: 3,
            type: "multiple_choice",
            question: "Hvilket av disse koordinatpunktene ligger direkte på y-aksen?",
            options: ["(3, 2)", "(0, 4)", "(4, 0)", "(1, 1)"],
            correct: "(0, 4)",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">For at et punkt skal ligge på y-aksen, må:</span><span class="math-step-formula">x-koordinaten være 0</span></div><div class="math-step"><span class="math-step-desc">Sjekk punktene:</span><span class="math-step-formula">(0, 4) har x = 0 (Riktig)</span></div></div>'
        },
        {
            level: 2,
            type: "input",
            question: "En bil kjører med en jevn fart på 80 km/t. Hvor mange kilometer kjører den på 3 timer? Skriv kun tallet.",
            correct: "240",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Multipliser farten (per time) med antall timer:</span><span class="math-step-formula">80 km/t &times; 3 t</span></div><div class="math-step"><span class="math-step-desc">2. Regn ut svaret:</span><span class="math-step-formula">240 km</span></div></div>'
        },
        {
            level: 2,
            type: "matching",
            question: "Koble regneordet til venstre med dets korrekte matematiske symbol til høyre:",
            leftItems: ["Differanse", "Sum", "Produkt", "Kvotient"],
            rightItems: ["Minus (-)", "Pluss (+)", "Gange (x)", "Dele (:)"],
            correct: {
                "Differanse": "Minus (-)",
                "Sum": "Pluss (+)",
                "Produkt": "Gange (x)",
                "Kvotient": "Dele (:)"
            },
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">Differanse (svaret på):</span><span class="math-step-formula">Minus (-)</span></div><div class="math-step"><span class="math-step-desc">Sum (svaret på):</span><span class="math-step-formula">Pluss (+)</span></div><div class="math-step"><span class="math-step-desc">Produkt (svaret på):</span><span class="math-step-formula">Gange (x)</span></div><div class="math-step"><span class="math-step-desc">Kvotient (svaret på):</span><span class="math-step-formula">Dele (:)</span></div></div>'
        },
        {
            level: 2,
            type: "input",
            question: "Hva er medianen til disse tallene: 3, 5, 8, 9, 12? (Tallene er allerede i rekkefølge). Skriv kun tallet.",
            correct: "8",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Medianen er verdien som står nøyaktig i midten av en sortert rekke:</span><span class="math-step-formula">3, 5, [8], 9, 12</span></div><div class="math-step"><span class="math-step-desc">2. Svaret er:</span><span class="math-step-formula">8</span></div></div>'
        },
        {
            level: 3,
            type: "multiple_choice",
            question: "Hvor mange hjørner har en trekantet pyramide (tetraeder)?",
            options: ["3", "4", "5", "6"],
            correct: "4",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Tell hjørnene i den trekantede bunnflaten:</span><span class="math-step-formula">3 hjørner</span></div><div class="math-step"><span class="math-step-desc">2. Legg til topphjørnet:</span><span class="math-step-formula">1 hjørne</span></div><div class="math-step"><span class="math-step-desc">3. Totalt antall hjørner:</span><span class="math-step-formula">3 + 1 = 4 hjørner</span></div></div>'
        },
        {
            level: 2,
            type: "input",
            question: "En eske inneholder 250 gram jordbær. Hvor mange slike esker må du kjøpe for å få nøyaktig 1 kilo jordbær? Skriv kun tallet.",
            correct: "4",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Gjør om 1 kilo til gram:</span><span class="math-step-formula">1 kg = 1000 gram</span></div><div class="math-step"><span class="math-step-desc">2. Del totalvekten på vekten per eske:</span><span class="math-step-formula">1000 g : 250 g = 4</span></div></div>'
        },
        {
            level: 1,
            type: "dropdown",
            question: "Dersom du kaster en mynt, er sannsynligheten for å få kron ___.",
            options: ["1/2", "1/3", "1/4", "0"],
            correct: "1/2",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Det er to sider på mynten (mulige utfall):</span><span class="math-step-formula">Kron eller mynt (2)</span></div><div class="math-step"><span class="math-step-desc">2. Det er én side som er kron (gunstig utfall):</span><span class="math-step-formula">1</span></div><div class="math-step"><span class="math-step-desc">3. Sannsynligheten:</span><span class="math-step-formula">1/2</span></div></div>'
        },
        {
            level: 2,
            type: "multiple_choice",
            question: "Hvor mye er 3/5 av en mengde på 25 epler?",
            options: ["5", "10", "15", "20"],
            correct: "15",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Finn først 1/5 ved å dele på 5:</span><span class="math-step-formula">25 : 5 = 5 epler</span></div><div class="math-step"><span class="math-step-desc">2. Multipliser dette med 3 for å finne 3/5:</span><span class="math-step-formula">5 &times; 3 = 15 epler</span></div></div>'
        },
        {
            level: 3,
            type: "input",
            question: "En pappeske er 5 cm lang, 4 cm bred og 3 cm høy. Hva er volumet av esken i kubikkcentimeter? Skriv kun tallet.",
            correct: "60",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Volum av et rett prisme = lengde &times; bredde &times; høyde:</span><span class="math-step-formula">5 &times; 4 &times; 3</span></div><div class="math-step"><span class="math-step-desc">2. Regn ut volumet:</span><span class="math-step-formula">60 cm³</span></div></div>'
        },
        {
            level: 2,
            type: "sorting",
            question: "Sorter desimaltallene under i rekkefølge fra minst verdi (til venstre) til størst verdi (til høyre):",
            options: ["0,05", "0,5", "0,15", "0,005"],
            correct: ["0,005", "0,05", "0,15", "0,5"],
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Sammenlign tallene ved å se på plassverdiene etter komma:</span><span class="math-step-formula">0,005 (5 tusendeler) &lt; 0,05 (5 hundredeler)</span></div><div class="math-step"><span class="math-step-desc">2. Sorter de gjenværende tallene:</span><span class="math-step-formula">0,05 &lt; 0,15 &lt; 0,5</span></div></div>'
        },
        {
            level: 3,
            type: "matrix",
            question: "Vurder påstandene om negative tall under:",
            matrixRows: [
                { text: "Tallet -8 er større enn -5.", correct: "Galt" },
                { text: "Tallet -3 er mindre enn 0.", correct: "Riktig" },
                { text: "Differansen mellom 2 og -2 er 4.", correct: "Riktig" }
            ],
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">-8 ligger lenger til venstre enn -5 på tallinjen:</span><span class="math-step-formula">-8 er mindre enn -5 (Galt)</span></div><div class="math-step"><span class="math-step-desc">Negative tall er alltid mindre enn 0:</span><span class="math-step-formula">-3 &lt; 0 (Riktig)</span></div><div class="math-step"><span class="math-step-desc">Finn differansen (avstanden):</span><span class="math-step-formula">2 - (-2) = 2 + 2 = 4 (Riktig)</span></div></div>'
        },
        {
            level: 3,
            type: "input",
            question: "Et rektangel har en omkrets på 20 cm. Lengden er 7 cm. Hvor mange centimeter er bredden? Skriv kun tallet.",
            correct: "3",
            explanation: '<div class="math-steps"><div class="math-step"><span class="math-step-desc">1. Rektangelet har to sider med lengde 7 cm:</span><span class="math-step-formula">7 + 7 = 14 cm</span></div><div class="math-step"><span class="math-step-desc">2. Finn gjenværende omkrets til de to breddene:</span><span class="math-step-formula">20 - 14 = 6 cm</span></div><div class="math-step"><span class="math-step-desc">3. Del på 2 for å finne bredden av én side:</span><span class="math-step-formula">6 : 2 = 3 cm</span></div></div>'
        }
    ],
    english: [
        {
            level: 1,
            type: "multiple_choice",
            audioText: "Hello! My name is Arthur. I live in a red house with three bedrooms and a big garden.",
            question: "Hør godt på lydklippet. Hvor mange soverom har huset til Arthur?",
            options: ["Two", "Three", "Four", "Five"],
            correct: "Three",
            explanation: "Arthur says: 'I live in a red house with three bedrooms...' which means the house has three bedrooms."
        },
        {
            level: 2,
            type: "matching",
            question: "Koble sammen verbet i infinitiv (venstre) med riktig fortidsform (høyre):",
            leftItems: ["go", "see", "run", "eat"],
            rightItems: ["ran", "went", "ate", "saw"],
            correct: {
                "go": "went",
                "see": "saw",
                "run": "ran",
                "eat": "ate"
            },
            explanation: "Dette er uregelrette engelske verb i nåtid (infinitive) og fortid (past simple):<br><ul><li>go ➔ went</li><li>see ➔ saw</li><li>run ➔ ran</li><li>eat ➔ ate</li></ul>"
        },
        {
            level: 2,
            type: "dropdown",
            question: "Yesterday, she ___ her homework before dinner.",
            options: ["does", "did", "done", "doing"],
            correct: "did",
            explanation: "Vi bruker fortidsformen 'did' fordi setningen forteller om noe som skjedde i går ('Yesterday')."
        },
        {
            level: 2,
            type: "dropdown",
            question: "The book is ___ the table.",
            options: ["on", "in", "at", "into"],
            correct: "on",
            explanation: "Når noe ligger oppå en overflate (som et bord), bruker vi preposisjonen 'on'."
        },
        {
            level: 3,
            type: "multiple_choice",
            question: "Choose the sentence that is grammatically correct:",
            options: [
                "They goes to the school every day.",
                "They go to the school every day.",
                "They going to the school every day.",
                "They is go to the school every day."
            ],
            correct: "They go to the school every day.",
            explanation: "Fordi 'They' (de) er flertall, skal ikke verbet bøyes med -s (goes). Riktig form er 'They go'."
        },
        {
            level: 2,
            type: "multiple_choice",
            audioText: "My name is Sarah. Today the weather in London is very rainy and windy. I need my umbrella.",
            question: "Hør godt på lydklippet. Hvordan er været i London i dag?",
            options: ["Sol og varmt", "Snø og kaldt", "Regn og vind", "Overskyet men tørt"],
            correct: "Regn og vind",
            explanation: "Sarah forteller at været i London i dag er regnfullt og vindfullt ('rainy and windy'), og at hun trenger paraplyen sin."
        },
        {
            level: 1,
            type: "multiple_choice",
            audioText: "I have two pets. A brown dog named Buster, and a black cat named Luna. Buster loves playing fetch.",
            question: "Hør godt på lydklippet. Hva heter katten til fortelleren?",
            options: ["Luna", "Buster", "Luna og Buster", "Buster og Luna"],
            correct: "Luna",
            explanation: "Fortelleren sier at katten heter Luna ('a black cat named Luna') og hunden heter Buster."
        },
        {
            level: 2,
            type: "multiple_choice",
            audioText: "For breakfast, I usually eat cornflakes with milk. But on Sundays, I prefer pancakes with syrup.",
            question: "Hør godt på lydklippet. Hva liker fortelleren å spise til frokost på søndager?",
            options: ["Cornflakes med melk", "Pannekaker med sirup", "Brødskive med ost", "Egg og bacon"],
            correct: "Pannekaker med sirup",
            explanation: "Fortelleren sier at på søndager foretrekker hun pannekaker med sirup ('on Sundays, I prefer pancakes with syrup')."
        },
        {
            level: 3,
            type: "multiple_choice",
            audioText: "To get to the library, go straight down this street, turn left at the bakery, and it is on your right.",
            question: "Hør godt på lydklippet. Hvor ligger biblioteket ifølge veibeskrivelsen?",
            options: ["På venstre side etter bakeriet", "Rett ved siden av bakeriet", "På høyre side etter at du svinger til venstre", "Rett frem i enden av gaten"],
            correct: "På høyre side etter at du svinger til venstre",
            explanation: "Du skal gå rett frem, svinge til venstre ved bakeriet, og da ligger biblioteket på høyre side ('it is on your right')."
        },
        {
            level: 2,
            type: "multiple_choice",
            audioText: "We have science class at ten o'clock, then we have lunch at twelve, and art class at one o'clock.",
            question: "Hør godt på lydklippet. Når begynner kunsttimen (art class)?",
            options: ["Kl. 10:00", "Kl. 12:00", "Kl. 13:00", "Kl. 14:00"],
            correct: "Kl. 13:00",
            explanation: "Fortelleren sier at kunsttimen (art class) er klokken ett ('art class at one o'clock')."
        },
        {
            level: 1,
            type: "multiple_choice",
            audioText: "My brother plays football on Tuesdays, and my sister plays basketball on Thursdays. I play tennis on Saturdays.",
            question: "Hør godt på lydklippet. Hvilken dag spiller søsteren basketball?",
            options: ["Tirsdager (Tuesdays)", "Torsdager (Thursdays)", "Lørdager (Saturdays)", "Søndager (Sundays)"],
            correct: "Torsdager (Thursdays)",
            explanation: "Fortelleren sier at søsteren spiller basketball på torsdager ('my sister plays basketball on Thursdays')."
        },
        {
            level: 3,
            type: "multiple_choice",
            audioText: "I need to buy some milk, a loaf of bread, and a carton of eggs. Oh, and also some strawberries for dessert.",
            question: "Hør godt på lydklippet. Hva skal fortelleren kjøpe til dessert?",
            options: ["Melk", "Brød", "Egg", "Jordbær (strawberries)"],
            correct: "Jordbær (strawberries)",
            explanation: "Fortelleren nevner melk, brød og egg som matvarer, og legger til at hun skal kjøpe jordbær til dessert ('strawberries for dessert')."
        },
        {
            level: 2,
            type: "multiple_choice",
            audioText: "My grandfather is seventy years old, and my grandmother is sixty-eight years old.",
            question: "Hør godt på lydklippet. Hvor gammel er bestemoren?",
            options: ["70 år", "68 år", "60 år", "78 år"],
            correct: "68 år",
            explanation: "Bestefaren er sytti ('seventy') og bestemoren er sekstiåtte ('sixty-eight') år gammel."
        },
        {
            level: 1,
            type: "multiple_choice",
            audioText: "Our school is very big. It has three floors and twenty classrooms.",
            question: "Hør godt på lydklippet. Hvor mange klasserom har skolen?",
            options: ["3", "20", "30", "12"],
            correct: "20",
            explanation: "Skolen har tre etasjer og tjue klasserom ('twenty classrooms')."
        },
        {
            level: 1,
            type: "dropdown",
            question: "The keys are ___ the drawer.",
            options: ["in", "on", "at", "under"],
            correct: "in",
            explanation: "Vi bruker preposisjonen 'in' når noe befinner seg inni et lukket rom eller en beholder (som en skuff)."
        },
        {
            level: 2,
            type: "dropdown",
            question: "We ___ to the cinema last Saturday.",
            options: ["go", "went", "gone", "going"],
            correct: "went",
            explanation: "Fordi handlingen skjedde forrige lørdag ('last Saturday'), må vi bruke fortidsformen (past simple) 'went'."
        },
        {
            level: 2,
            type: "dropdown",
            question: "There are three ___ playing in the garden.",
            options: ["child", "childs", "children", "childrens"],
            correct: "children",
            explanation: "Flertallsformen av 'child' (barn) er det uregelmessige substantivet 'children' (uten s til slutt)."
        },
        {
            level: 1,
            type: "dropdown",
            question: "This is my sister. ___ is ten years old.",
            options: ["He", "She", "It", "They"],
            correct: "She",
            explanation: "Siden vi snakker om en søster (hunkjønn, entall), bruker vi det personlige pronomenet 'She' (hun)."
        },
        {
            level: 2,
            type: "dropdown",
            question: "An elephant is ___ than a mouse.",
            options: ["big", "bigger", "biggest", "biger"],
            correct: "bigger",
            explanation: "Når vi sammenligner to ting (en elefant og en mus), bruker vi komparativ form: 'bigger' (husk dobbel g)."
        },
        {
            level: 3,
            type: "dropdown",
            question: "My father ___ in a big hospital.",
            options: ["work", "works", "working", "workes"],
            correct: "works",
            explanation: "Siden subjektet er 'My father' (tredjeperson entall, han), må verbet få -s-ending i nåtid (works)."
        },
        {
            level: 1,
            type: "matching",
            question: "Koble sammen de engelske ordene med sin motsetning (antonym):",
            leftItems: ["hot", "big", "happy", "fast"],
            rightItems: ["cold", "small", "sad", "slow"],
            correct: {
                "hot": "cold",
                "big": "small",
                "happy": "sad",
                "fast": "slow"
            },
            explanation: "Dette er vanlige motsetninger på engelsk: varm/kald, stor/liten, glad/trist, rask/treg."
        },
        {
            level: 2,
            type: "dropdown",
            question: "We are lost. Can you help ___?",
            options: ["we", "us", "our", "ours"],
            correct: "us",
            explanation: "We are lost. Can you help us? Vi bruker objektsformen av pronomenet 'we', som er 'us' (oss)."
        },
        {
            level: 2,
            type: "dropdown",
            question: "The cat is sleeping ___ the sofa.",
            options: ["on", "in", "at", "into"],
            correct: "on",
            explanation: "Katten sover oppå sofaen, så vi bruker preposisjonen 'on'."
        },
        {
            level: 3,
            type: "dropdown",
            question: "___ you like to play football with us?",
            options: ["Do", "Does", "Are", "Is"],
            correct: "Do",
            explanation: "Når vi stiller spørsmål i nåtid med 'you' (du/dere), bruker vi hjelpeverbet 'Do'."
        },
        {
            level: 2,
            type: "dropdown",
            question: "Look at those ___ running away from the cat!",
            options: ["mouse", "mouses", "mice", "mices"],
            correct: "mice",
            explanation: "Det uregelrette flertallet av 'mouse' (mus) er 'mice' (flere mus)."
        },
        {
            level: 1,
            type: "dropdown",
            question: "This is my pen. It is ___.",
            options: ["my", "mine", "me", "myself"],
            correct: "mine",
            explanation: "Vi bruker det eiendomspronomenet 'mine' (min/mitt) når det står selvstendig til slutt i en setning."
        },
        {
            level: 2,
            type: "dropdown",
            question: "___ is your English teacher? - Mr. Jones is.",
            options: ["Who", "What", "Where", "When"],
            correct: "Who",
            explanation: "Svaret viser til en person ('Mr. Jones'), så vi må bruke spørreordet 'Who' (Hvem)."
        },
        {
            level: 1,
            type: "dropdown",
            question: "He was born ___ June.",
            options: ["in", "on", "at", "to"],
            correct: "in",
            explanation: "Vi bruker preposisjonen 'in' foran måneder (in June, in December)."
        },
        {
            level: 2,
            type: "dropdown",
            question: "The match starts ___ five o'clock.",
            options: ["at", "in", "on", "to"],
            correct: "at",
            explanation: "Vi bruker alltid preposisjonen 'at' foran spesifikke klokkeslett (at five o'clock)."
        },
        {
            level: 3,
            type: "dropdown",
            question: "I wanted to go swimming, ___ it started to rain.",
            options: ["but", "and", "because", "or"],
            correct: "but",
            explanation: "Vi bruker konjunksjonen 'but' (men) for å vise en motsetning mellom to setninger."
        },
        {
            level: 2,
            type: "matching",
            question: "Koble de engelske ordene med de riktige norske ordene:",
            leftItems: ["dog", "cat", "bird", "fish"],
            rightItems: ["hund", "katt", "fugl", "fisk"],
            correct: {
                "dog": "hund",
                "cat": "katt",
                "bird": "fugl",
                "fish": "fisk"
            },
            explanation: "Enkel ordtrening: dog = hund, cat = katt, bird = fugl, fish = fisk."
        },
        {
            level: 2,
            type: "sorting",
            question: "Sorter månedene i riktig kalenderrekkefølge (fra tidligst til senest):",
            options: ["April", "January", "February", "March"],
            correct: ["January", "February", "March", "April"],
            explanation: "Rekkefølgen på årets fire første måneder er: januar (January), februar (February), mars (March) og april (April)."
        },
        {
            level: 1,
            type: "dropdown",
            question: "I ___ a very nice book yesterday.",
            options: ["read", "reads", "reading", "readed"],
            correct: "read",
            explanation: "Fortidsformen av 'read' skrives på samme måte (read), selv om den uttales annerledes (som fargen 'red')."
        },
        {
            level: 3,
            type: "dropdown",
            question: "They ___ playing football right now.",
            options: ["is", "are", "am", "be"],
            correct: "are",
            explanation: "Siden subjektet er 'They' (flertall), må vi bruke verbformen 'are' i presens samtidsform."
        },
        {
            level: 2,
            type: "dropdown",
            question: "The house has four ___.",
            options: ["windows", "windowes", "windos", "windowss"],
            correct: "windows",
            explanation: "Det engelske ordet 'window' danner vanlig flertall ved å bare legge til en s: 'windows'."
        },
        {
            level: 3,
            type: "dropdown",
            question: "If it rains tomorrow, we ___ stay inside.",
            options: ["will", "would", "are", "have"],
            correct: "will",
            explanation: "Vi bruker 'will' for å uttrykke fremtid (hva som kommer til å skje hvis det regner)."
        },
        {
            level: 2,
            type: "dropdown",
            question: "This is the ___ cake I have ever eaten!",
            options: ["best", "better", "good", "bestest"],
            correct: "best",
            explanation: "Dette er superlativen av adjektivet 'good' (bra ➔ bedre ➔ best), som er uregelmessig: 'best'."
        },
        {
            level: 2,
            type: "dropdown",
            question: "My mother ___ delicious dinners every day.",
            options: ["cooks", "cook", "cooking", "cooked"],
            correct: "cooks",
            explanation: "Subjektet er 'My mother' (hun), så vi må ha presens entall-s på verbet: 'cooks'."
        },
        {
            level: 3,
            type: "dropdown",
            question: "I am writing a letter to my ___.",
            options: ["friend", "freind", "frind", "frend"],
            correct: "friend",
            explanation: "Den korrekte stavemåten for venn på engelsk er 'friend' (husk regelen 'i før e')."
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "Subject: Hello from Oslo!<br><br>Hi Jack,<br>How are you? I am having a great time in Norway. The weather is cold but sunny today. Yesterday, I went sledding with my cousin. Tomorrow, we are going to watch a football match. What is the weather like in London?<br><br>Best wishes,<br>Liam",
            question: "Hvem har skrevet denne e-posten?",
            options: ["Jack", "Liam", "Liams fetter", "En fotballspiller"],
            correct: "Liam",
            explanation: "Avsenderen signerer nederst i e-posten med 'Best wishes, Liam', som betyr at Liam har skrevet den."
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "Subject: Hello from Oslo!<br><br>Hi Jack,<br>How are you? I am having a great time in Norway. The weather is cold but sunny today. Yesterday, I went sledding with my cousin. Tomorrow, we are going to watch a football match. What is the weather like in London?<br><br>Best wishes,<br>Liam",
            question: "Hvordan beskriver Liam været i Norge i dag?",
            options: ["Regn og vind", "Varmt og solrikt", "Kaldt og solrikt (cold but sunny)", "Snøstorm og vind"],
            correct: "Kaldt og solrikt (cold but sunny)",
            explanation: "Liam skriver direkte i e-posten: 'The weather is cold but sunny today'."
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "Subject: Hello from Oslo!<br><br>Hi Jack,<br>How are you? I am having a great time in Norway. The weather is cold but sunny today. Yesterday, I went sledding with my cousin. Tomorrow, we are going to watch a football match. What is the weather like in London?<br><br>Best wishes,<br>Liam",
            question: "Hva gjorde Liam i går ('Yesterday')?",
            options: ["Han spilte en fotballkamp", "Han akte kjelke (went sledding)", "Han besøkte London", "Han gjorde lekser"],
            correct: "Han akte kjelke (went sledding)",
            explanation: "Liam skriver i e-posten: 'Yesterday, I went sledding...'. Sledding betyr å ake på kjelke/akebrett."
        },
        {
            level: 3,
            type: "multiple_choice",
            passage: "Subject: Hello from Oslo!<br><br>Hi Jack,<br>How are you? I am having a great time in Norway. The weather is cold but sunny today. Yesterday, I went sledding with my cousin. Tomorrow, we are going to watch a football match. What is the weather like in London?<br><br>Best wishes,<br>Liam",
            question: "Hvem dro Liam på aking sammen med?",
            options: ["Læreren sin", "Fetteren sin (his cousin)", "Jack", "Foreldrene sine"],
            correct: "Fetteren sin (his cousin)",
            explanation: "Liam skriver at han dro 'with my cousin', som betyr fetter eller kusine."
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "Day 1: We arrived in London at noon. We checked in at our hotel, which is near Hyde Park. In the afternoon, we visited the Science Museum. It was amazing! I liked the old planes best. Tonight, we are eating fish and chips.",
            question: "Hvor ligger hotellet ifølge dagboken?",
            options: ["Nær Hyde Park", "Ved Big Ben", "Nær Science Museum", "I utkanten av London"],
            correct: "Nær Hyde Park",
            explanation: "Det står i teksten: 'checked in at our hotel, which is near Hyde Park'."
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "Day 1: We arrived in London at noon. We checked in at our hotel, which is near Hyde Park. In the afternoon, we visited the Science Museum. It was amazing! I liked the old planes best. Tonight, we are eating fish and chips.",
            question: "Når på dagen ankom de London?",
            options: ["Tidlig om morgenen", "Midt på dagen (at noon)", "Sent på kvelden", "Dagen før"],
            correct: "Midt på dagen (at noon)",
            explanation: "Ordet 'noon' på engelsk betyr klokken 12:00, altså midt på dagen."
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "Day 1: We arrived in London at noon. We checked in at our hotel, which is near Hyde Park. In the afternoon, we visited the Science Museum. It was amazing! I liked the old planes best. Tonight, we are eating fish and chips.",
            question: "Hva likte skribenten aller best på Science Museum?",
            options: ["Gamle biler", "De interaktive spillene", "Gamle fly (old planes)", "Dinosaurene"],
            correct: "Gamle fly (old planes)",
            explanation: "Skribenten skriver direkte: 'I liked the old planes best' (Jeg likte de gamle flyene best)."
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "Day 1: We arrived in London at noon. We checked in at our hotel, which is near Hyde Park. In the afternoon, we visited the Science Museum. It was amazing! I liked the old planes best. Tonight, we are eating fish and chips.",
            question: "Hva skal de spise til kvelds ('Tonight')?",
            options: ["Pizza", "Burgere", "Fish and chips", "Pannekaker"],
            correct: "Fish and chips",
            explanation: "Den siste setningen forteller: 'Tonight, we are eating fish and chips'."
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "Lucy has a small puppy named Max. Max is very playful. Yesterday afternoon, Lucy opened the front door, and Max ran out into the garden. A minute later, Lucy looked out, but Max was not there. She called his name, 'Max! Max!'. Finally, she heard a quiet bark under the big oak tree. Max was trying to catch a brown squirrel.",
            question: "Hva slags dyr er Max?",
            options: ["En katt", "En valp (a puppy)", "Et ekorn", "En kanin"],
            correct: "En valp (a puppy)",
            explanation: "Første setning sier: 'Lucy has a small puppy named Max'. En 'puppy' er en valp."
        },
        {
            level: 3,
            type: "multiple_choice",
            passage: "Lucy has a small puppy named Max. Max is very playful. Yesterday afternoon, Lucy opened the front door, and Max ran out into the garden. A minute later, Lucy looked out, but Max was not there. She called his name, 'Max! Max!'. Finally, she heard a quiet bark under the big oak tree. Max was trying to catch a brown squirrel.",
            question: "Hvor fant Lucy valpen til slutt?",
            options: ["Inne i stua", "Under et stort eiketre (under the big oak tree)", "I naboens hage", "Bak garasjen"],
            correct: "Under et stort eiketre (under the big oak tree)",
            explanation: "Det står i teksten: 'she heard a quiet bark under the big oak tree' (hun hørte bjeffing under det store eiketreet)."
        },
        {
            level: 3,
            type: "multiple_choice",
            passage: "Lucy has a small puppy named Max. Max is very playful. Yesterday afternoon, Lucy opened the front door, and Max ran out into the garden. A minute later, Lucy looked out, but Max was not there. She called his name, 'Max! Max!'. Finally, she heard a quiet bark under the big oak tree. Max was trying to catch a brown squirrel.",
            question: "Hva prøvde Max å fange?",
            options: ["En katt", "Et brunt ekorn (a brown squirrel)", "En fugl", "En ball"],
            correct: "Et brunt ekorn (a brown squirrel)",
            explanation: "Siste setning forteller: 'Max was trying to catch a brown squirrel' (Max prøvde å fange et brunt ekorn)."
        },
        {
            level: 1,
            type: "multiple_choice",
            audioText: "I want to buy a new blue jacket and a pair of white shoes.",
            question: "Hør godt på lydklippet. Hva ønsker fortelleren å kjøpe?",
            options: ["En rød jakke og hvite sko", "En blå jakke og hvite sko", "En blå jakke og svarte sko", "En grønn jakke og brune sko"],
            correct: "En blå jakke og hvite sko",
            explanation: "Lydklippet sier 'a new blue jacket' (en ny blå jakke) og 'a pair of white shoes' (et par hvite sko)."
        },
        {
            level: 2,
            type: "multiple_choice",
            audioText: "My school starts at half past eight in the morning, and it finishes at two o'clock.",
            question: "Hør godt på lydklippet. Når slutter skolen til fortelleren?",
            options: ["Klokken halv ni", "Klokken to", "Klokken tre", "Klokken tolv"],
            correct: "Klokken to",
            explanation: "Lydklippet sier at skolen 'finishes at two o'clock' (slutter klokken to)."
        },
        {
            level: 2,
            type: "multiple_choice",
            audioText: "Go straight ahead, past the library, and then turn left at the supermarket.",
            question: "Hør godt på lydklippet. Hvor skal du svinge til venstre?",
            options: ["Ved biblioteket", "Ved supermarkedet", "Ved skolen", "Ved parken"],
            correct: "Ved supermarkedet",
            explanation: "Lydklippet sier 'turn left at the supermarket' (sving til venstre ved supermarkedet)."
        },
        {
            level: 1,
            type: "multiple_choice",
            audioText: "There are five apples and three bananas on the kitchen table.",
            question: "Hør godt på lydklippet. Hvor mange bananer ligger på kjøkkenbordet?",
            options: ["Tre bananer", "Fem bananer", "Åtte bananer", "To bananer"],
            correct: "Tre bananer",
            explanation: "Lydklippet sier 'five apples and three bananas' (fem epler og tre bananer)."
        },
        {
            level: 3,
            type: "multiple_choice",
            audioText: "Yesterday it was sunny, but today it is cloudy. Tomorrow, the weather report says it will rain all day.",
            question: "Hør godt på lydklippet. Hvordan er været i dag?",
            options: ["Det er sol", "Det er overskyet", "Det regner", "Det snør"],
            correct: "Det er overskyet",
            explanation: "Lydklippet sier 'Today it is cloudy' (I dag er det overskyet)."
        },
        {
            level: 2,
            type: "multiple_choice",
            audioText: "I have a big brother named David who is twelve years old, and a little sister named Lily who is six.",
            question: "Hør godt på lydklippet. Hvor gammel er lillesøsteren Lily?",
            options: ["Seks år", "Tolv år", "Åtte år", "Ti år"],
            correct: "Seks år",
            explanation: "Lydklippet sier 'a little sister named Lily who is six' (en lillesøster som heter Lily og er seks år)."
        },
        {
            level: 2,
            type: "multiple_choice",
            audioText: "We went to France on vacation last summer. We stayed there for two weeks and visited many museums.",
            question: "Hør godt på lydklippet. Hvor lenge var de i Frankrike?",
            options: ["Én uke", "To uker", "Tre uker", "En hel måned"],
            correct: "To uker",
            explanation: "Lydklippet sier 'We stayed there for two weeks' (Vi ble der i to uker)."
        },
        {
            level: 3,
            type: "multiple_choice",
            audioText: "My favorite animal is the giraffe because it has a very long neck. I also like elephants.",
            question: "Hør godt på lydklippet. Hva er fortellerens favorittdyr?",
            options: ["Elefant", "Sjiraff", "Løve", "Ape"],
            correct: "Sjiraff",
            explanation: "Lydklippet sier 'My favorite animal is the giraffe' (Mitt favorittdyr er sjiraffen)."
        },
        {
            level: 1,
            type: "multiple_choice",
            audioText: "I need to buy some eggs, milk, and a loaf of fresh bread from the bakery.",
            question: "Hør godt på lydklippet. Hva skal fortelleren kjøpe på bakeriet?",
            options: ["Egg og melk", "Et brød", "Kaker", "Frukt"],
            correct: "Et brød",
            explanation: "Bakeriet selger brød. Lydklippet sier 'a loaf of fresh bread from the bakery'."
        },
        {
            level: 2,
            type: "multiple_choice",
            audioText: "We are having spaghetti for dinner tonight, and my mom is making a chocolate cake for dessert.",
            question: "Hør godt på lydklippet. Hva skal de ha til dessert?",
            options: ["Spagetti", "Sjokoladekake", "Is", "Pannekaker"],
            correct: "Sjokoladekake",
            explanation: "Lydklippet sier 'chocolate cake for dessert' (sjokoladekake til dessert)."
        },
        {
            level: 3,
            type: "multiple_choice",
            audioText: "To get to the post office, you must cross the bridge and walk straight for ten minutes.",
            question: "Hør godt på lydklippet. Hva må du gjøre for å komme til postkontoret?",
            options: ["Gå over broen", "Svinge til høyre", "Ta bussen", "Gå gjennom parken"],
            correct: "Gå over broen",
            explanation: "Lydklippet sier 'cross the bridge' (gå over broen)."
        },
        {
            level: 2,
            type: "multiple_choice",
            audioText: "I usually play football on Tuesdays and swim on Fridays after school.",
            question: "Hør godt på lydklippet. Hva gjør fortelleren på fredager etter skolen?",
            options: ["Spiller fotball", "Svømmer", "Gjør lekser", "Ser på TV"],
            correct: "Svømmer",
            explanation: "Lydklippet sier 'swim on Fridays' (svømmer på fredager)."
        },
        {
            level: 2,
            type: "multiple_choice",
            audioText: "My dad bought a new car yesterday. It is silver and has five doors.",
            question: "Hør godt på lydklippet. Hvilken farge har den nye bilen?",
            options: ["Rød", "Blå", "Sølv", "Svart"],
            correct: "Sølv",
            explanation: "Lydklippet sier 'It is silver' (Den er sølvfarget)."
        },
        {
            level: 1,
            type: "multiple_choice",
            audioText: "There are four white sheep and one brown cow in the field.",
            question: "Hør godt på lydklippet. Hvor mange hvite sauer er det på jordet?",
            options: ["Én", "Fire", "Fem", "Tre"],
            correct: "Fire",
            explanation: "Lydklippet sier 'four white sheep' (fire hvite sauer)."
        },
        {
            level: 3,
            type: "multiple_choice",
            audioText: "I went to bed at nine o'clock last night because I was very tired after my football match.",
            question: "Hør godt på lydklippet. Hvorfor la fortelleren seg klokken ni?",
            options: ["Fordi han var sliten etter fotballkampen", "Fordi han måtte tidlig opp", "Fordi det var kjedelig på TV", "Fordi han var syk"],
            correct: "Fordi han var sliten etter fotballkampen",
            explanation: "Lydklippet sier 'because I was very tired after my football match' (fordi jeg var veldig sliten etter fotballkampen)."
        },
        {
            level: 2,
            type: "dropdown",
            question: "Sarah is my best friend. I play with ___ every day after school.",
            options: ["her", "him", "she", "them"],
            correct: "her",
            explanation: "Siden Sarah er et jentenavn (hunnkjønn), bruker vi objektformen av personlig pronomen 'her' (henne)."
        },
        {
            level: 2,
            type: "dropdown",
            question: "The painting is hanging ___ the wall in the living room.",
            options: ["on", "in", "under", "at"],
            correct: "on",
            explanation: "Når noe henger på en loddrett overflate som en vegg, bruker vi preposisjonen 'on'."
        },
        {
            level: 2,
            type: "dropdown",
            question: "Last year, my family ___ to England for our summer holiday.",
            options: ["go", "goes", "went", "going"],
            correct: "went",
            explanation: "Tidsuttrykket 'Last year' (i fjor) viser at handlingen skjedde i fortid, så vi må bruke preteritumsformen 'went'."
        },
        {
            level: 2,
            type: "dropdown",
            question: "I have two brushes, but my sister has three ___.",
            options: ["brush", "brushs", "brushes", "brushies"],
            correct: "brushes",
            explanation: "Substantiv som slutter på sibilant (som -sh) får endelsen -es i flertall: 'brushes'."
        },
        {
            level: 2,
            type: "dropdown",
            question: "Choose the correct question word based on the answer:<br><br>Question: '___ is the school?'<br>Answer: 'It is next to the post office.'",
            options: ["Who", "Where", "When", "What"],
            correct: "Where",
            explanation: "Svaret oppgir et sted ('next to the post office'). Derfor må spørsmålet starte med spørreordet 'Where' (Hvor)."
        },
        {
            level: 2,
            type: "dropdown",
            question: "Choose the correct question word based on the answer:<br><br>Question: '___ is that boy?'<br>Answer: 'He is my new classmate, Leo.'",
            options: ["Who", "Where", "When", "Which"],
            correct: "Who",
            explanation: "Svaret forteller hvem personen er ('my new classmate, Leo'). Derfor må spørsmålet starte med spørreordet 'Who' (Hvem)."
        },
        {
            level: 2,
            type: "dropdown",
            question: "Choose the correct question word based on the answer:<br><br>Question: '___ does the bus arrive?'<br>Answer: 'At five o'clock.'",
            options: ["Who", "Where", "When", "Why"],
            correct: "When",
            explanation: "Svaret oppgir et tidspunkt ('At five o'clock'). Derfor må spørsmålet starte med spørreordet 'When' (Når)."
        },
        {
            level: 2,
            type: "dropdown",
            question: "There are five ___ playing in the green park.",
            options: ["childs", "child", "children", "childrens"],
            correct: "children",
            explanation: "Flertallsformen av 'child' (barn) er uregelrett og heter 'children'."
        },
        {
            level: 1,
            type: "dropdown",
            question: "The elephant is very big, but the mouse is extremely ___.",
            options: ["small", "tall", "heavy", "loud"],
            correct: "small",
            explanation: "Her søker vi motsetningen (antonymet) til 'big' (stor), som er 'small' (liten)."
        },
        {
            level: 2,
            type: "dropdown",
            question: "He has a dog. The dog belongs to him. It is ___ dog.",
            options: ["his", "her", "my", "their"],
            correct: "his",
            explanation: "Siden hunden tilhører en gutt/mann ('belongs to him'), bruker vi det possessive pronomenet 'his' (hans)."
        },
        {
            level: 2,
            type: "dropdown",
            question: "Yesterday afternoon, they ___ football in the schoolyard.",
            options: ["play", "plays", "played", "playing"],
            correct: "played",
            explanation: "Vi bruker fortidsformen 'played' fordi setningen handler om noe som skjedde i går ('Yesterday afternoon')."
        },
        {
            level: 3,
            type: "dropdown",
            question: "Choose the correct preposition:<br><br>She is very good ___ playing the piano.",
            options: ["at", "in", "on", "with"],
            correct: "at",
            explanation: "Det faste uttrykket på engelsk er 'to be good at' (å være god til noe)."
        },
        {
            level: 2,
            type: "dropdown",
            question: "We have two cats. They belong to us. They are ___ cats.",
            options: ["our", "your", "their", "its"],
            correct: "our",
            explanation: "Siden kattene tilhører oss ('belong to us'), bruker vi det possessive pronomenet 'our' (våre)."
        },
        {
            level: 1,
            type: "dropdown",
            question: "In the summer, the days are hot, but in the winter, they are ___.",
            options: ["warm", "cold", "sunny", "bright"],
            correct: "cold",
            explanation: "Motsetningen til 'hot' (varm) i denne sammenhengen om vinteren er 'cold' (kald)."
        },
        {
            level: 2,
            type: "dropdown",
            question: "Yesterday, she ___ a beautiful song in the music class.",
            options: ["sing", "sings", "sang", "singed"],
            correct: "sang",
            explanation: "Verbet 'to sing' er uregelrett og har fortidsformen 'sang'."
        },
        {
            level: 2,
            type: "dropdown",
            question: "Look at the sky! There are three ___ flying south.",
            options: ["gooses", "goose", "geese", "geeses"],
            correct: "geese",
            explanation: "Flertallsformen av 'goose' (gås) er uregelrett og heter 'geese'."
        },
        {
            level: 2,
            type: "dropdown",
            question: "My mother is a teacher. She works in ___ school down the road.",
            options: ["a", "an", "the", "some"],
            correct: "a",
            explanation: "Vi bruker den ubestemte artikkelen 'a' foran ord som begynner med en konsonantlyd ('school')."
        },
        {
            level: 2,
            type: "dropdown",
            question: "I have an apple. The apple is for ___ because I am hungry.",
            options: ["me", "I", "my", "myself"],
            correct: "me",
            explanation: "Her trenger vi objektformen av det personlige pronomenet, som er 'me' (meg)."
        },
        {
            level: 2,
            type: "dropdown",
            question: "There are ten ___ swimming in the deep lake.",
            options: ["fishs", "fish", "fishes", "fishies"],
            correct: "fish",
            explanation: "Flertallsformen av substantiv 'fish' er vanligvis den samme i entall og flertall: 'fish'."
        },
        {
            level: 3,
            type: "dropdown",
            question: "Choose the correct preposition:<br><br>We are interested ___ learning more about space and planets.",
            options: ["in", "on", "at", "about"],
            correct: "in",
            explanation: "Det faste uttrykket på engelsk er 'to be interested in' (å være interessert i)."
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "<h3>A Trip to the Zoo</h3><p>Last Tuesday, Class 5B went on a school trip to the city zoo. They traveled by bus and arrived at ten o'clock. The weather was warm and sunny. First, their teacher, Mrs. Green, took them to see the monkeys. The monkeys were climbing trees and eating yellow bananas. Next, the class saw the tall giraffes. Liam liked the giraffes best because of their long necks. At noon, the students sat down near the penguin pool to eat their lunch. Liam had a cheese sandwich and an apple. After lunch, they watched the zookeeper feed the hungry seals with fresh fish. Finally, they bought some souvenirs at the gift shop before taking the bus back to school at three o'clock.</p>",
            question: "Which day did Class 5B go to the zoo?",
            options: ["Monday", "Tuesday", "Wednesday", "Friday"],
            correct: "Tuesday",
            explanation: "Det står i starten av teksten: 'Last Tuesday, Class 5B went on a school trip...'"
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "<h3>A Trip to the Zoo</h3><p>Last Tuesday, Class 5B went on a school trip to the city zoo. They traveled by bus and arrived at ten o'clock. The weather was warm and sunny. First, their teacher, Mrs. Green, took them to see the monkeys. The monkeys were climbing trees and eating yellow bananas. Next, the class saw the tall giraffes. Liam liked the giraffes best because of their long necks. At noon, the students sat down near the penguin pool to eat their lunch. Liam had a cheese sandwich and an apple. After lunch, they watched the zookeeper feed the hungry seals with fresh fish. Finally, they bought some souvenirs at the gift shop before taking the bus back to school at three o'clock.</p>",
            question: "How did the students travel to the zoo?",
            options: ["By train", "By car", "By bus", "On foot"],
            correct: "By bus",
            explanation: "Det står i teksten: 'They traveled by bus and arrived at ten o'clock.'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>A Trip to the Zoo</h3><p>Last Tuesday, Class 5B went on a school trip to the city zoo. They traveled by bus and arrived at ten o'clock. The weather was warm and sunny. First, their teacher, Mrs. Green, took them to see the monkeys. The monkeys were climbing trees and eating yellow bananas. Next, the class saw the tall giraffes. Liam liked the giraffes best because of their long necks. At noon, the students sat down near the penguin pool to eat their lunch. Liam had a cheese sandwich and an apple. After lunch, they watched the zookeeper feed the hungry seals with fresh fish. Finally, they bought some souvenirs at the gift shop before taking the bus back to school at three o'clock.</p>",
            question: "What was the weather like during the trip?",
            options: ["Cold and rainy", "Warm and sunny", "Windy and cloudy", "Snowy and cold"],
            correct: "Warm and sunny",
            explanation: "Teksten sier: 'The weather was warm and sunny.'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>A Trip to the Zoo</h3><p>Last Tuesday, Class 5B went on a school trip to the city zoo. They traveled by bus and arrived at ten o'clock. The weather was warm and sunny. First, their teacher, Mrs. Green, took them to see the monkeys. The monkeys were climbing trees and eating yellow bananas. Next, the class saw the tall giraffes. Liam liked the giraffes best because of their long necks. At noon, the students sat down near the penguin pool to eat their lunch. Liam had a cheese sandwich and an apple. After lunch, they watched the zookeeper feed the hungry seals with fresh fish. Finally, they bought some souvenirs at the gift shop before taking the bus back to school at three o'clock.</p>",
            question: "Which animals did the class see first?",
            options: ["The giraffes", "The monkeys", "The penguins", "The seals"],
            correct: "The monkeys",
            explanation: "Ifølge teksten: 'First, their teacher, Mrs. Green, took them to see the monkeys.'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>A Trip to the Zoo</h3><p>Last Tuesday, Class 5B went on a school trip to the city zoo. They traveled by bus and arrived at ten o'clock. The weather was warm and sunny. First, their teacher, Mrs. Green, took them to see the monkeys. The monkeys were climbing trees and eating yellow bananas. Next, the class saw the tall giraffes. Liam liked the giraffes best because of their long necks. At noon, the students sat down near the penguin pool to eat their lunch. Liam had a cheese sandwich and an apple. After lunch, they watched the zookeeper feed the hungry seals with fresh fish. Finally, they bought some souvenirs at the gift shop before taking the bus back to school at three o'clock.</p>",
            question: "Why did Liam like the giraffes best?",
            options: ["Because they were friendly", "Because of their long necks", "Because they ate yellow bananas", "Because they could swim fast"],
            correct: "Because of their long necks",
            explanation: "Teksten forteller: 'Liam liked the giraffes best because of their long necks.'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>A Trip to the Zoo</h3><p>Last Tuesday, Class 5B went on a school trip to the city zoo. They traveled by bus and arrived at ten o'clock. The weather was warm and sunny. First, their teacher, Mrs. Green, took them to see the monkeys. The monkeys were climbing trees and eating yellow bananas. Next, the class saw the tall giraffes. Liam liked the giraffes best because of their long necks. At noon, the students sat down near the penguin pool to eat their lunch. Liam had a cheese sandwich and an apple. After lunch, they watched the zookeeper feed the hungry seals with fresh fish. Finally, they bought some souvenirs at the gift shop before taking the bus back to school at three o'clock.</p>",
            question: "Where did the students sit to eat their lunch?",
            options: ["Near the monkey cage", "Near the penguin pool", "Inside the zoo cafe", "On the school bus"],
            correct: "Near the penguin pool",
            explanation: "Teksten sier: 'At noon, the students sat down near the penguin pool to eat their lunch.'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>A Trip to the Zoo</h3><p>Last Tuesday, Class 5B went on a school trip to the city zoo. They traveled by bus and arrived at ten o'clock. The weather was warm and sunny. First, their teacher, Mrs. Green, took them to see the monkeys. The monkeys were climbing trees and eating yellow bananas. Next, the class saw the tall giraffes. Liam liked the giraffes best because of their long necks. At noon, the students sat down near the penguin pool to eat their lunch. Liam had a cheese sandwich and an apple. After lunch, they watched the zookeeper feed the hungry seals with fresh fish. Finally, they bought some souvenirs at the gift shop before taking the bus back to school at three o'clock.</p>",
            question: "What did Liam eat for lunch?",
            options: ["A ham sandwich and a banana", "A cheese sandwich and an apple", "Spaghetti and chocolate cake", "A hot dog and an orange"],
            correct: "A cheese sandwich and an apple",
            explanation: "Teksten opplyser: 'Liam had a cheese sandwich and an apple.'"
        },
        {
            level: 3,
            type: "multiple_choice",
            passage: "<h3>A Trip to the Zoo</h3><p>Last Tuesday, Class 5B went on a school trip to the city zoo. They traveled by bus and arrived at ten o'clock. The weather was warm and sunny. First, their teacher, Mrs. Green, took them to see the monkeys. The monkeys were climbing trees and eating yellow bananas. Next, the class saw the tall giraffes. Liam liked the giraffes best because of their long necks. At noon, the students sat down near the penguin pool to eat their lunch. Liam had a cheese sandwich and an apple. After lunch, they watched the zookeeper feed the hungry seals with fresh fish. Finally, they bought some souvenirs at the gift shop before taking the bus back to school at three o'clock.</p>",
            question: "At what time did the class take the bus back to school?",
            options: ["At ten o'clock", "At noon", "At three o'clock", "At five o'clock"],
            correct: "At three o'clock",
            explanation: "Teksten sier: '...before taking the bus back to school at three o'clock.'"
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "<h3>My Hobby: Gardening</h3><p>Tom is eleven years old, and his favorite hobby is gardening. Every Saturday morning, he helps his grandfather in their backyard garden. They grow many kinds of vegetables, like red tomatoes, green peas, and carrots. First, Tom pulls out the weeds around the small plants. Then, he uses a blue watering can to water them. Tom has to be careful not to water them too much. His favorite part of gardening is harvesting. Last week, they picked a large basket of sweet strawberries and made a delicious strawberry pie. Tom feels proud when he eats vegetables that he grew himself.</p>",
            question: "How old is Tom?",
            options: ["Nine years old", "Ten years old", "Eleven years old", "Twelve years old"],
            correct: "Eleven years old",
            explanation: "Det står i starten av teksten: 'Tom is eleven years old...'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>My Hobby: Gardening</h3><p>Tom is eleven years old, and his favorite hobby is gardening. Every Saturday morning, he helps his grandfather in their backyard garden. They grow many kinds of vegetables, like red tomatoes, green peas, and carrots. First, Tom pulls out the weeds around the small plants. Then, he uses a blue watering can to water them. Tom has to be careful not to water them too much. His favorite part of gardening is harvesting. Last week, they picked a large basket of sweet strawberries and made a delicious strawberry pie. Tom feels proud when he eats vegetables that he grew himself.</p>",
            question: "Who does Tom help in the garden?",
            options: ["His father", "His grandfather", "His mother", "His classmate"],
            correct: "His grandfather",
            explanation: "Teksten sier: '...he helps his grandfather in their backyard garden.'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>My Hobby: Gardening</h3><p>Tom is eleven years old, and his favorite hobby is gardening. Every Saturday morning, he helps his grandfather in their backyard garden. They grow many kinds of vegetables, like red tomatoes, green peas, and carrots. First, Tom pulls out the weeds around the small plants. Then, he uses a blue watering can to water them. Tom has to be careful not to water them too much. His favorite part of gardening is harvesting. Last week, they picked a large basket of sweet strawberries and made a delicious strawberry pie. Tom feels proud when he eats vegetables that he grew himself.</p>",
            question: "Which vegetables do Tom and his grandfather grow?",
            options: ["Potatoes, onions, and garlic", "Tomatoes, peas, and carrots", "Lettuce and cucumbers", "Pumpkins and beans"],
            correct: "Tomatoes, peas, and carrots",
            explanation: "Teksten lister opp: '...vegetables, like red tomatoes, green peas, and carrots.'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>My Hobby: Gardening</h3><p>Tom is eleven years old, and his favorite hobby is gardening. Every Saturday morning, he helps his grandfather in their backyard garden. They grow many kinds of vegetables, like red tomatoes, green peas, and carrots. First, Tom pulls out the weeds around the small plants. Then, he uses a blue watering can to water them. Tom has to be careful not to water them too much. His favorite part of gardening is harvesting. Last week, they picked a large basket of sweet strawberries and made a delicious strawberry pie. Tom feels proud when he eats vegetables that he grew himself.</p>",
            question: "What does Tom do before watering the plants?",
            options: ["He picks strawberries", "He pulls out the weeds", "He bakes a strawberry pie", "He goes to school"],
            correct: "He pulls out the weeds",
            explanation: "Teksten sier: 'First, Tom pulls out the weeds around the small plants. Then, he uses a blue watering can...'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>My Hobby: Gardening</h3><p>Tom is eleven years old, and his favorite hobby is gardening. Every Saturday morning, he helps his grandfather in their backyard garden. They grow many kinds of vegetables, like red tomatoes, green peas, and carrots. First, Tom pulls out the weeds around the small plants. Then, he uses a blue watering can to water them. Tom has to be careful not to water them too much. His favorite part of gardening is harvesting. Last week, they picked a large basket of sweet strawberries and made a delicious strawberry pie. Tom feels proud when he eats vegetables that he grew himself.</p>",
            question: "What color is Tom's watering can?",
            options: ["Red", "Green", "Blue", "Yellow"],
            correct: "Blue",
            explanation: "Ifølge teksten: '...he uses a blue watering can to water them.'"
        },
        {
            level: 3,
            type: "multiple_choice",
            passage: "<h3>My Hobby: Gardening</h3><p>Tom is eleven years old, and his favorite hobby is gardening. Every Saturday morning, he helps his grandfather in their backyard garden. They grow many kinds of vegetables, like red tomatoes, green peas, and carrots. First, Tom pulls out the weeds around the small plants. Then, he uses a blue watering can to water them. Tom has to be careful not to water them too much. His favorite part of gardening is harvesting. Last week, they picked a large basket of sweet strawberries and made a delicious strawberry pie. Tom feels proud when he eats vegetables that he grew himself.</p>",
            question: "What is Tom's favorite part of gardening?",
            options: ["Pulling out weeds", "Watering the plants", "Harvesting", "Baking pie"],
            correct: "Harvesting",
            explanation: "I teksten står det: 'His favorite part of gardening is harvesting.'"
        },
        {
            level: 3,
            type: "multiple_choice",
            passage: "<h3>My Hobby: Gardening</h3><p>Tom is eleven years old, and his favorite hobby is gardening. Every Saturday morning, he helps his grandfather in their backyard garden. They grow many kinds of vegetables, like red tomatoes, green peas, and carrots. First, Tom pulls out the weeds around the small plants. Then, he uses a blue watering can to water them. Tom has to be careful not to water them too much. His favorite part of gardening is harvesting. Last week, they picked a large basket of sweet strawberries and made a delicious strawberry pie. Tom feels proud when he eats vegetables that he grew himself.</p>",
            question: "What did Tom and his grandfather make with the strawberries?",
            options: ["Strawberry jam", "A strawberry pie", "Strawberry ice cream", "A fruit salad"],
            correct: "A strawberry pie",
            explanation: "Teksten forteller at de: 'made a delicious strawberry pie'."
        }
    ],
    reading: [
        {
            level: 1,
            type: "multiple_choice",
            passage: "<h3>Surtsey – øya som ble født i flammer</h3><p>Den 14. november 1963 skjedde noe helt spesielt utenfor sørkysten av Island. Mannskapet på en fiskebåt oppdaget plutselig en tykk, sort røykstøtte som steg opp fra havet. De trodde først det var en annen båt som brant, men det de faktisk var vitne til, var et vulkanutbrudd under vann.</p><p>Vulkanen på havbunnen spydde ut rødglødende lava og aske. Etter hvert som lavaen kom i kontakt med det kalde vannet, stivnet den og bygget seg opp. Allerede dagen etter hadde det dannet seg en helt ny øy av stein og aske som stakk opp over havoverflaten. Øya fikk navnet Surtsey, oppkalt etter jotnen Surt fra norrøn mytologi.</p><p>For at forskerne skulle kunne studere hvordan planter og dyr sprer seg til et helt nytt landområde uten innblanding fra mennesker, ble Surtsey fredet med en gang. Kun et lite antall forskere fikk lov til å besøke øya. De første organismene som slo seg ned, var bakterier og muggsopp. Senere førte havstrømmer og vind med seg frø, og de første plantene begynte å vokse. Fugler begynte også å hekke på øya, og fugleskitt ga næring til jordsmonnet slik at flere planter kunne overleve. I dag er Surtsey på UNESCOs verdensarvliste.</p>",
            question: "Når startet vulkanutbruddet som dannet øya Surtsey?",
            options: ["14. november 1963", "15. november 1963", "14. november 1964", "15. november 1964"],
            correct: "14. november 1963",
            explanation: "I starten av teksten står det direkte: 'Den 14. november 1963 skjedde noe helt spesielt...'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Surtsey – øya som ble født i flammer</h3><p>Den 14. november 1963 skjedde noe helt spesielt utenfor sørkysten av Island. Mannskapet på en fiskebåt oppdaget plutselig en tykk, sort røykstøtte som steg opp fra havet. De trodde først det var en annen båt som brant, men det de faktisk var vitne til, var et vulkanutbrudd under vann.</p><p>Vulkanen på havbunnen spydde ut rødglødende lava og aske. Etter hvert som lavaen kom i kontakt med det kalde vannet, stivnet den og bygget seg opp. Allerede dagen etter hadde det dannet seg en helt ny øy av stein og aske som stakk opp over havoverflaten. Øya fikk navnet Surtsey, oppkalt etter jotnen Surt fra norrøn mytologi.</p><p>For at forskerne skulle kunne studere hvordan planter og dyr sprer seg til et helt nytt landområde uten innblanding fra mennesker, ble Surtsey fredet med en gang. Kun et lite antall forskere fikk lov til å besøke øya. De første organismene som slo seg ned, var bakterier og muggsopp. Senere førte havstrømmer og vind med seg frø, og de første plantene begynte å vokse. Fugler begynte også å hekke på øya, og fugleskitt ga næring til jordsmonnet slik at flere planter kunne overleve. I dag er Surtsey på UNESCOs verdensarvliste.</p>",
            question: "Hvorfor fikk bare forskere lov til å besøke Surtsey etter utbruddet?",
            options: [
                "Fordi øya var for farlig og giftig for vanlige folk.",
                "For at de skulle studere naturens spredning uten menneskelig påvirkning.",
                "Fordi øya ble brukt som en militær teststasjon.",
                "Fordi det var stor fare for et nytt utbrudd hvert øyeblikk."
            ],
            correct: "For at de skulle studere naturens spredning uten menneskelig påvirkning.",
            explanation: "I tredje avsnitt står det: 'For at forskerne skulle kunne studere hvordan planter og dyr sprer seg til et helt nytt landområde uten innblanding fra mennesker...'"
        },
        {
            level: 2,
            type: "word_clicker",
            passage: "<h3>Surtsey – øya som ble født i flammer</h3><p>Den 14. november 1963 skjedde noe helt spesielt utenfor sørkysten av Island. Mannskapet på en fiskebåt oppdaget plutselig en tykk, sort røykstøtte som steg opp fra havet. De trodde først det var en annen båt som brant, men det de faktisk var vitne til, var et vulkanutbrudd under vann.</p><p>Vulkanen på havbunnen spydde ut rødglødende lava og aske. Etter hvert som lavaen kom i kontakt med det kalde vannet, stivnet den og bygget seg opp. Allerede dagen etter hadde det dannet seg en helt ny øy av stein og aske som stakk opp over havoverflaten. Øya fikk navnet Surtsey, oppkalt etter jotnen Surt fra norrøn mytologi.</p><p>For at forskerne skulle kunne studere hvordan planter og dyr sprer seg til et helt nytt landområde uten innblanding fra mennesker, ble Surtsey fredet med en gang. Kun et lite antall forskere fikk lov til å besøke øya. De første organismene som slo seg ned, var bakterier og muggsopp. Senere førte havstrømmer og vind med seg frø, og de første plantene begynte å vokse. Fugler begynte også å hekke på øya, og fugleskitt ga næring til jordsmonnet slik at flere planter kunne overleve. I dag er Surtsey på UNESCOs verdensarvliste.</p>",
            passageText: "For at forskerne skulle kunne studere hvordan planter og dyr sprer seg til et helt nytt landområde uten innblanding fra mennesker, ble Surtsey fredet med en gang. Kun et lite antall forskere fikk lov til å besøke øya.",
            question: "Klikk på ordet i avsnittet under som betyr det samme som 'vernet mot ødeleggelse og inngrep':",
            correct: "fredet",
            explanation: "Å 'frede' betyr å verne et landområde, planter eller kulturminner mot ødeleggelse eller inngrep ved lov."
        },
        {
            level: 3,
            type: "multiple_choice",
            passage: "<h3>Surtsey – øya som ble født i flammer</h3><p>Den 14. november 1963 skjedde noe helt spesielt utenfor sørkysten av Island. Mannskapet på en fiskebåt oppdaget plutselig en tykk, sort røykstøtte som steg opp fra havet. De trodde først det var en annen båt som brant, men det de faktisk var vitne til, var et vulkanutbrudd under vann.</p><p>Vulkanen på havbunnen spydde ut rødglødende lava og aske. Etter hvert som lavaen kom i kontakt med det kalde vannet, stivnet den og bygget seg opp. Allerede dagen etter hadde det dannet seg en helt ny øy av stein og aske som stakk opp over havoverflaten. Øya fikk navnet Surtsey, oppkalt etter jotnen Surt fra norrøn mytologi.</p><p>For at forskerne skulle kunne studere hvordan planter og dyr sprer seg til et helt nytt landområde uten innblanding fra mennesker, ble Surtsey fredet med en gang. Kun et lite antall forskere fikk lov til å besøke øya. De første organismene som slo seg ned, var bakterier og muggsopp. Senere førte havstrømmer og vind med seg frø, og de første plantene begynte å vokse. Fugler begynte også å hekke på øya, og fugleskitt ga næring til jordsmonnet slik at flere planter kunne overleve. I dag er Surtsey på UNESCOs verdensarvliste.</p>",
            question: "Hva er hovedhensikten med teksten?",
            options: [
                "Å underholde med spennende historier om norrøne jotner.",
                "Å forklare hvorfor fiskebåter må unngå Island.",
                "Å informere om dannelsen og den naturlige utviklingen av en ny øy.",
                "Å overbevise leseren om at vulkanutbrudd er farlige."
            ],
            correct: "Å informere om dannelsen og den naturlige utviklingen av en ny øy.",
            explanation: "Teksten gir nøytral og lærerik informasjon om hvordan Surtsey ble dant og hvordan naturen koloniserte øya uten menneskers innblanding."
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "<h3>Surtsey – øya som ble født i flammer</h3><p>Den 14. november 1963 skjedde noe helt spesielt utenfor sørkysten av Island. Mannskapet på en fiskebåt oppdaget plutselig en tykk, sort røykstøtte som steg opp fra havet. De trodde først det var en annen båt som brant, men det de faktisk var vitne til, var et vulkanutbrudd under vann.</p><p>Vulkanen på havbunnen spydde ut rødglødende lava og aske. Etter hvert som lavaen kom i kontakt med det kalde vannet, stivnet den og bygget seg opp. Allerede dagen etter hadde det dannet seg en helt ny øy av stein og aske som stakk opp over havoverflaten. Øya fikk navnet Surtsey, oppkalt etter jotnen Surt fra norrøn mytologi.</p><p>For at forskerne skulle kunne studere hvordan planter og dyr sprer seg til et helt nytt landområde uten innblanding fra mennesker, ble Surtsey fredet med en gang. Kun et lite antall forskere fikk lov til å besøke øya. De første organismene som slo seg ned, var bakterier og muggsopp. Senere førte havstrømmer og vind med seg frø, og de første plantene begynte å vokse. Fugler begynte også å hekke på øya, og fugleskitt ga næring til jordsmonnet slik at flere planter kunne overleve. I dag er Surtsey på UNESCOs verdensarvliste.</p>",
            question: "Hvilket land ligger øya Surtsey i nærheten av?",
            options: ["Norge", "Sverige", "Island", "Grønland"],
            correct: "Island",
            explanation: "Første avsnitt forteller at dette skjedde 'utenfor sørkysten av Island'."
        },
        {
            level: 2,
            type: "matrix",
            question: "Hva var sant om dannelsen av Surtsey? Avgjør om påstandene er riktige eller gale:",
            matrixRows: [
                { text: "Mannskapet trodde først det brant en annen fiskebåt.", correct: "Riktig" },
                { text: "Øya ble oppkalt etter en islandsk forsker.", correct: "Galt" },
                { text: "Muggsopp var blant de første organismene som slo seg ned.", correct: "Riktig" }
            ],
            explanation: "Mannskapet trodde det brant en båt, øya ble oppkalt etter jotnen Surt (ikke en forsker), og bakterier og muggsopp var de aller første organismene på øya."
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Surtsey – øya som ble født i flammer</h3><p>Den 14. november 1963 skjedde noe helt spesielt utenfor sørkysten av Island. Mannskapet på en fiskebåt oppdaget plutselig en tykk, sort røykstøtte som steg opp fra havet. De trodde først det var en annen båt som brant, men det de faktisk var vitne til, var et vulkanutbrudd under vann.</p><p>Vulkanen på havbunnen spydde ut rødglødende lava og aske. Etter hvert som lavaen kom i kontakt med det kalde vannet, stivnet den og bygget seg opp. Allerede dagen etter hadde det dannet seg en helt ny øy av stein og aske som stakk opp over havoverflaten. Øya fikk navnet Surtsey, oppkalt etter jotnen Surt fra norrøn mytologi.</p><p>For at forskerne skulle kunne studere hvordan planter og dyr sprer seg til et helt nytt landområde uten innblanding fra mennesker, ble Surtsey fredet med en gang. Kun et lite antall forskere fikk lov til å besøke øya. De første organismene som slo seg ned, var bakterier og muggsopp. Senere førte havstrømmer og vind med seg frø, og de første plantene begynte å vokse. Fugler begynte også å hekke på øya, og fugleskitt ga næring til jordsmonnet slik at flere planter kunne overleve. I dag er Surtsey på UNESCOs verdensarvliste.</p>",
            question: "Hva bidro til å gi næring til jordsmonnet på Surtsey slik at flere planter overlevde?",
            options: ["Forskerne tilførte gjødsel", "Fugleskitt", "Regnvann som skylte bort lavaen", "Spesielle mineraler i lavaen"],
            correct: "Fugleskitt",
            explanation: "I tredje avsnitt står det: 'Fugler begynte også å hekke på øya, og fugleskitt ga næring til jordsmonnet slik at flere planter kunne overleve'."
        },
        {
            level: 3,
            type: "multiple_choice",
            passage: "<h3>Surtsey – øya som ble født i flammer</h3><p>Den 14. november 1963 skjedde noe helt spesielt utenfor sørkysten av Island. Mannskapet på en fiskebåt oppdaget plutselig en tykk, sort røykstøtte som steg opp fra havet. De trodde først det var en annen båt som brant, men det de faktisk var vitne til, var et vulkanutbrudd under vann.</p><p>Vulkanen på havbunnen spydde ut rødglødende lava og aske. Etter hvert som lavaen kom i kontakt med det kalde vannet, stivnet den og bygget seg opp. Allerede dagen etter hadde det dannet seg en helt ny øy av stein og aske som stakk opp over havoverflaten. Øya fikk navnet Surtsey, oppkalt etter jotnen Surt fra norrøn mytologi.</p><p>For at forskerne skulle kunne studere hvordan planter og dyr sprer seg til et helt nytt landområde uten innblanding fra mennesker, ble Surtsey fredet med en gang. Kun et lite antall forskere fikk lov til å besøke øya. De første organismene som slo seg ned, var bakterier og muggsopp. Senere førte havstrømmer og vind med seg frø, og de første plantene begynte å vokse. Fugler begynte også å hekke på øya, og fugleskitt ga næring til jordsmonnet slik at flere planter kunne overleve. I dag er Surtsey på UNESCOs verdensarvliste.</p>",
            question: "Hva betyr det at øya ble 'oppkalt etter jotnen Surt fra norrøn mytologi'?",
            options: ["At jotnen Surt var den som oppdaget øya", "At øyas navn (Surtsey) stammer fra navnet Surt", "At Surt var eieren av øya", "At forskerne trodde det bodde jotner på øya"],
            correct: "At øyas navn (Surtsey) stammer fra navnet Surt",
            explanation: "Å kalle opp noe etter noen betyr å gi det et navn som stammer fra eller refererer til denne personen eller skikkelsen."
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "<h3>Surtsey – øya som ble født i flammer</h3><p>Den 14. november 1963 skjedde noe helt spesielt utenfor sørkysten av Island. Mannskapet på en fiskebåt oppdaget plutselig en tykk, sort røykstøtte som steg opp fra havet. De trodde først det var en annen båt som brant, men det de faktisk var vitne til, var et vulkanutbrudd under vann.</p><p>Vulkanen på havbunnen spydde ut rødglødende lava og aske. Etter hvert som lavaen kom i kontakt med det kalde vannet, stivnet den og bygget seg opp. Allerede dagen etter hadde det dannet seg en helt ny øy av stein og aske som stakk opp over havoverflaten. Øya fikk navnet Surtsey, oppkalt etter jotnen Surt fra norrøn mytologi.</p><p>For at forskerne skulle kunne studere hvordan planter og dyr sprer seg til et helt nytt landområde uten innblanding fra mennesker, ble Surtsey fredet med en gang. Kun et lite antall forskere fikk lov til å besøke øya. De første organismene som slo seg ned, var bakterier og muggsopp. Senere førte havstrømmer og vind med seg frø, og de første plantene begynte å vokse. Fugler begynte også å hekke på øya, og fugleskitt ga næring til jordsmonnet slik at flere planter kunne overleve. I dag er Surtsey på UNESCOs verdensarvliste.</p>",
            question: "Hva trodde mannskapet på fiskebåten at den svarte røykstøtten var til å begynne med?",
            options: ["Et vulkanutbrudd under vann", "En annen båt som brant", "En stor regnsky", "Et stjerneskudd"],
            correct: "En annen båt som brant",
            explanation: "I første avsnitt står det: 'De trodde først det var en annen båt som brant...'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Surtsey – øya som ble født i flammer</h3><p>Den 14. november 1963 skjedde noe helt spesielt utenfor sørkysten av Island. Mannskapet på en fiskebåt oppdaget plutselig en tykk, sort røykstøtte som steg opp fra havet. De trodde først det var en annen båt som brant, men det de faktisk var vitne til, var et vulkanutbrudd under vann.</p><p>Vulkanen på havbunnen spydde ut rødglødende lava og aske. Etter hvert som lavaen kom i kontakt med det kalde vannet, stivnet den og bygget seg opp. Allerede dagen etter hadde det dannet seg en helt ny øy av stein og aske som stakk opp over havoverflaten. Øya fikk navnet Surtsey, oppkalt etter jotnen Surt fra norrøn mytologi.</p><p>For at forskerne skulle kunne studere hvordan planter og dyr sprer seg til et helt nytt landområde uten innblanding fra mennesker, ble Surtsey fredet med en gang. Kun et lite antall forskere fikk lov til å besøke øya. De første organismene som slo seg ned, var bakterier og muggsopp. Senere førte havstrømmer og vind med seg frø, og de første plantene begynte å vokse. Fugler begynte også å hekke på øya, og fugleskitt ga næring til jordsmonnet slik at flere planter kunne overleve. I dag er Surtsey på UNESCOs verdensarvliste.</p>",
            question: "Hvilken liste er Surtsey inkludert på i dag?",
            options: ["Islands nasjonalparkliste", "Nasjonale Geologiske Monumenter", "UNESCOs verdensarvliste", "EUs verneområdeliste"],
            correct: "UNESCOs verdensarvliste",
            explanation: "Siste setning bekrefter: 'I dag er Surtsey på UNESCOs verdensarvliste'."
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "<h3>Dyrelivet i Arktis</h3><p>Arktis er det kalde området helt nord på jorda. Her er vintrene lange, mørke og ekstremt kalde, og bakken er dekket av snø og is det meste av året. Likevel lever det mange spennende dyr her som har tilpasset seg det tøffe klimaet på utrolige måter.</p><p>Isbjørnen er det største rovdyret i Arktis. Den har tykk, hvit pels som isolerer godt mot kulda og fungerer som kamuflasje på isen. Under den hvite pelsen har isbjørnen faktisk helt sort hud. Den sorte huden hjelper isbjørnen med å absorbere varme fra solstrålene. Isbjørnen er en dyktig svømmer og bruker mesteparten av tiden sin på drivisen for å jakte på sel.</p><p>Fjellreven er et annet dyr som er godt tilpasset Arktis. Den har en ekstremt tett pels som holder den varm selv i temperaturer ned mot 50 minusgrader. Fjellreven skifter farge på pelsen med årstidene. Om vinteren er pelsen snøhvit for å gjemme seg i snøen, mens om sommeren blir den gråbrun for å gå i ett med steinene og jorda på tundraen. Den lever av lemen, fugler og rester etter isbjørnens måltider.</p><p>Ringselen er det vanligste byttedyret for isbjørnen. Den lever i havet og under isen. For å kunne puste lager den små pustehull i isen ved hjelp av de sterke klørne på forluffene sine. Isbjørnen ligger ofte tålmodig og venter ved disse pustehullene på at selen skal komme opp for å trekke pusten.</p>",
            question: "Hva er isbjørnen i det arktiske dyrelivet?",
            options: ["Det minste pattedyret", "Det største rovdyret", "En fredelig planteeter", "En arktisk fugleart"],
            correct: "Det største rovdyret",
            explanation: "Andre avsnitt innleder med: 'Isbjørnen er det største rovdyret i Arktis'."
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Dyrelivet i Arktis</h3><p>Arktis er det kalde området helt nord på jorda. Her er vintrene lange, mørke og ekstremt kalde, og bakken er dekket av snø og is det meste av året. Likevel lever det mange spennende dyr her som har tilpasset seg det tøffe klimaet på utrolige måter.</p><p>Isbjørnen er det største rovdyret i Arktis. Den har tykk, hvit pels som isolerer godt mot kulda og fungerer som kamuflasje på isen. Under den hvite pelsen har isbjørnen faktisk helt sort hud. Den sorte huden hjelper isbjørnen med å absorbere varme fra solstrålene. Isbjørnen er en dyktig svømmer og bruker mesteparten av tiden sin på drivisen for å jakte på sel.</p><p>Fjellreven er et annet dyr som er godt tilpasset Arktis. Den har en ekstremt tett pels som holder den varm selv i temperaturer ned mot 50 minusgrader. Fjellreven skifter farge på pelsen med årstidene. Om vinteren er pelsen snøhvit for å gjemme seg i snøen, mens om sommeren blir den gråbrun for å gå i ett med steinene og jorda på tundraen. Den lever av lemen, fugler og rester etter isbjørnens måltider.</p><p>Ringselen er det vanligste byttedyret for isbjørnen. Den lever i havet og under isen. For å kunne puste lager den små pustehull i isen ved hjelp av de sterke klørne på forluffene sine. Isbjørnen ligger ofte tålmodig og venter ved disse pustehullene på at selen skal komme opp for å trekke pusten.</p>",
            question: "Hvilken farge har huden under isbjørnens hvite pels?",
            options: ["Hvit", "Rosa", "Sort", "Grå"],
            correct: "Sort",
            explanation: "Teksten opplyser: 'Under den hvite pelsen har isbjørnen faktisk helt sort hud'."
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Dyrelivet i Arktis</h3><p>Arktis er det kalde området helt nord på jorda. Her er vintrene lange, mørke og ekstremt kalde, og bakken er dekket av snø og is det meste av året. Likevel lever det mange spennende dyr her som har tilpasset seg det tøffe klimaet på utrolige måter.</p><p>Isbjørnen er det største rovdyret i Arktis. Den har tykk, hvit pels som isolerer godt mot kulda og fungerer som kamuflasje på isen. Under den hvite pelsen har isbjørnen faktisk helt sort hud. Den sorte huden hjelper isbjørnen med å absorbere varme fra solstrålene. Isbjørnen er en dyktig svømmer og bruker mesteparten av tiden sin på drivisen for å jakte på sel.</p><p>Fjellreven er et annet dyr som er godt tilpasset Arktis. Den har en ekstremt tett pels som holder den varm selv i temperaturer ned mot 50 minusgrader. Fjellreven skifter farge på pelsen med årstidene. Om vinteren er pelsen snøhvit for å gjemme seg i snøen, mens om sommeren blir den gråbrun for å gå i ett med steinene og jorda på tundraen. Den lever av lemen, fugler og rester etter isbjørnens måltider.</p><p>Ringselen er det vanligste byttedyret for isbjørnen. Den lever i havet og under isen. For å kunne puste lager den små pustehull i isen ved hjelp av de sterke klørne på forluffene sine. Isbjørnen ligger ofte tålmodig og venter ved disse pustehullene på at selen skal komme opp for å trekke pusten.</p>",
            question: "Hva hjelper den sorte huden isbjørnen med?",
            options: ["Å svømme fortere", "Å tiltrekke seg andre isbjørner", "Å kamuflere seg i mørket", "Å absorbere varme fra solstrålene"],
            correct: "Å absorbere varme fra solstrålene",
            explanation: "I andre avsnitt står det: 'Den sorte huden hjelper isbjørnen med å absorbere varme fra solstrålene'."
        },
        {
            level: 2,
            type: "matrix",
            question: "Vurder om påstandene om fjellreven er riktige eller gale ut fra teksten:",
            matrixRows: [
                { text: "Fjellreven fryser hvis det blir kaldere enn 10 minusgrader.", correct: "Galt" },
                { text: "Fjellreven skifter farge på pelsen med årstidene.", correct: "Riktig" },
                { text: "Fjellreven spiser blant annet lemen.", correct: "Riktig" }
            ],
            explanation: "Fjellreven holder varmen helt ned mot 50 minusgrader, den skifter pelsfarge (hvit om vinteren, gråbrun om sommeren), og den spiser lemen, fugler og rester etter isbjørnen."
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "<h3>Dyrelivet i Arktis</h3><p>Arktis er det kalde området helt nord på jorda. Her er vintrene lange, mørke og ekstremt kalde, og bakken er dekket av snø og is det meste av året. Likevel lever det mange spennende dyr her som har tilpasset seg det tøffe klimaet på utrolige måter.</p><p>Isbjørnen er det største rovdyret i Arktis. Den har tykk, hvit pels som isolerer godt mot kulda og fungerer som kamuflasje på isen. Under den hvite pelsen har isbjørnen faktisk helt sort hud. Den sorte huden hjelper isbjørnen med å absorbere varme fra solstrålene. Isbjørnen er en dyktig svømmer og bruker mesteparten av tiden sin på drivisen for å jakte på sel.</p><p>Fjellreven er et annet dyr som er godt tilpasset Arktis. Den har en ekstremt tett pels som holder den varm selv i temperaturer ned mot 50 minusgrader. Fjellreven skifter farge på pelsen med årstidene. Om vinteren er pelsen snøhvit for å gjemme seg i snøen, mens om sommeren blir den gråbrun for å gå i ett med steinene og jorda på tundraen. Den lever av lemen, fugler og rester etter isbjørnens måltider.</p><p>Ringselen er det vanligste byttedyret for isbjørnen. Den lever i havet og under isen. For å kunne puste lager den små pustehull i isen ved hjelp av de sterke klørne på forluffene sine. Isbjørnen ligger ofte tålmodig og venter ved disse pustehullene på at selen skal komme opp for å trekke pusten.</p>",
            question: "Hvilken farge har fjellrevens pels om sommeren?",
            options: ["Snøhvit", "Gråbrun", "Kullsvart", "Rød og oransje"],
            correct: "Gråbrun",
            explanation: "Tredje avsnitt bekrefter at fjellrevens pels 'om sommeren blir den gråbrun'."
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Dyrelivet i Arktis</h3><p>Arktis er det kalde området helt nord på jorda. Here er vintrene lange, mørke og ekstremt kalde, og bakken er dekket av snø og is det meste av året. Likevel lever det mange spennende dyr her som har tilpasset seg det tøffe klimaet på utrolige måter.</p><p>Isbjørnen er det største rovdyret i Arktis. Den har tykk, hvit pels som isolerer godt mot kulda og fungerer som kamuflasje på isen. Under den hvite pelsen har isbjørnen faktisk helt sort hud. Den sorte huden hjelper isbjørnen med å absorbere varme fra solstrålene. Isbjørnen er en dyktig svømmer og bruker mesteparten av tiden sin på drivisen for å jakte på sel.</p><p>Fjellreven er et annet dyr som er godt tilpasset Arktis. Den har en ekstremt tett pels som holder den varm selv i temperaturer ned mot 50 minusgrader. Fjellreven skifter farge på pelsen med årstidene. Om vinteren er pelsen snøhvit for å gjemme seg i snøen, mens om sommeren blir den gråbrun for å gå i ett med steinene og jorda på tundraen. Den lever av lemen, fugler og rester etter isbjørnens måltider.</p><p>Ringselen er det vanligste byttedyret for isbjørnen. Den lever i havet og under isen. For å kunne puste lager den små pustehull i isen ved hjelp av de sterke klørne på forluffene sine. Isbjørnen ligger ofte tålmodig og venter ved disse pustehullene på at selen skal komme opp for å trekke pusten.</p>",
            question: "Hata lever fjellreven i hovedsak av?",
            options: ["Fisk og tang", "Lemen, fugler og rester etter isbjørnen", "Planteskudd og mose", "Isbjørnunger"],
            correct: "Lemen, fugler og rester etter isbjørnen",
            explanation: "Siste setning i avsnittet om fjellreven sier: 'Den lever av lemen, fugler og rester etter isbjørnens måltider'."
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Dyrelivet i Arktis</h3><p>Arktis er det kalde området helt nord på jorda. Her er vintrene lange, mørke og ekstremt kalde, og bakken er dekket av snø og is det meste av året. Likevel lever det mange spennende dyr her som har tilpasset seg det tøffe klimaet på utrolige måter.</p><p>Isbjørnen er det største rovdyret i Arktis. Den har tykk, hvit pels som isolerer godt mot kulda og fungerer som kamuflasje på isen. Under den hvite pelsen har isbjørnen faktisk helt sort hud. Den sorte huden hjelper isbjørnen med å absorbere varme fra solstrålene. Isbjørnen er en dyktig svømmer og bruker mesteparten av tiden sin på drivisen for å jakte på sel.</p><p>Fjellreven er et annet dyr som er godt tilpasset Arktis. Den har en ekstremt tett pels som holder den varm selv i temperaturer ned mot 50 minusgrader. Fjellreven skifter farge på pelsen med årstidene. Om vinteren er pelsen snøhvit for å gjemme seg i snøen, mens om sommeren blir den gråbrun for å gå i ett med steinene og jorda på tundraen. Den lever av lemen, fugler og rester etter isbjørnens måltider.</p><p>Ringselen er det vanligste byttedyret for isbjørnen. Den lever i havet og under isen. For å kunne puste lager den små pustehull i isen ved hjelp av de sterke klørne på forluffene sine. Isbjørnen ligger ofte tålmodig og venter ved disse pustehullene på at selen skal komme opp for å trekke pusten.</p>",
            question: "Hva er ringselen for isbjørnen?",
            options: ["En fiende", "Et lekent husdyr", "Det vanligste byttedyret", "En konkurrent"],
            correct: "Det vanligste byttedyret",
            explanation: "Siste avsnitt starter med: 'Ringselen er det vanligste byttedyret for isbjørnen'."
        },
        {
            level: 3,
            type: "multiple_choice",
            passage: "<h3>Dyrelivet i Arktis</h3><p>Arktis er det kalde området helt nord på jorda. Her er vintrene lange, mørke og ekstremt kalde, og bakken er dekket av snø og is det meste av året. Likevel lever det mange spennende dyr her som har tilpasset seg det tøffe klimaet på utrolige måter.</p><p>Isbjørnen er det største rovdyret i Arktis. Den har tykk, hvit pels som isolerer godt mot kulda og fungerer som kamuflasje på isen. Under den hvite pelsen har isbjørnen faktisk helt sort hud. Den sorte huden hjelper isbjørnen med å absorbere varme fra solstrålene. Isbjørnen er en dyktig svømmer og bruker mesteparten av tiden sin på drivisen for å jakte på sel.</p><p>Fjellreven er et annet dyr som er godt tilpasset Arktis. Den har en ekstremt tett pels som holder den varm selv i temperaturer ned mot 50 minusgrader. Fjellreven skifter farge på pelsen med årstidene. Om vinteren er pelsen snøhvit for å gjemme seg i snøen, mens om sommeren blir den gråbrun for å gå i ett med steinene og jorda på tundraen. Den lever av lemen, fugler og rester etter isbjørnens måltider.</p><p>Ringselen er det vanligste byttedyret for isbjørnen. Den lever i havet og under isen. For å kunne puste lager den små pustehull i isen ved hjelp av de sterke klørne på forluffene sine. Isbjørnen ligger ofte tålmodig og venter ved disse pustehullene på at selen skal komme opp for å trekke pusten.</p>",
            question: "Hvordan lager ringselen pustehull i den tykke isen?",
            options: ["Ved å dunke hodet mot isen", "Ved å puste varm luft på isen", "Ved å bruke sterke klør på forluffene", "Ved å hakke med tennene"],
            correct: "Ved å bruke sterke klør på forluffene",
            explanation: "Det står i teksten: 'lager den små pustehull i isen ved hjelp av de sterke klørne på forluffene sine'."
        },
        {
            level: 3,
            type: "word_clicker",
            passage: "<h3>Dyrelivet i Arktis</h3><p>Arktis er det kalde området helt nord på jorda. Her er vintrene lange, mørke og ekstremt kalde, og bakken er dekket av snø og is det meste av året. Likevel lever det mange spennende dyr her som har tilpasset seg det tøffe klimaet på utrolige måter.</p><p>Isbjørnen er det største rovdyret i Arktis. Den har tykk, hvit pels som isolerer godt mot kulda og fungerer som kamuflasje på isen. Under den hvite pelsen har isbjørnen faktisk helt sort hud. Den sorte huden hjelper isbjørnen med å absorbere varme fra solstrålene. Isbjørnen er en dyktig svømmer og bruker mesteparten av tiden sin på drivisen for å jakte på sel.</p><p>Fjellreven er et annet dyr som er godt tilpasset Arktis. Den har en ekstremt tett pels som holder den varm selv i temperaturer ned mot 50 minusgrader. Fjellreven skifter farge på pelsen med årstidene. Om vinteren er pelsen snøhvit for å gjemme seg i snøen, mens om sommeren blir den gråbrun for å gå i ett med steinene og jorda på tundraen. Den lever av lemen, fugler og rester etter isbjørnens måltider.</p><p>Ringselen er det vanligste byttedyret for isbjørnen. Den lever i havet og under isen. For å kunne puste lager den små pustehull i isen ved hjelp av de sterke klørne på forluffene sine. Isbjørnen ligger ofte tålmodig og venter ved disse pustehullene på at selen skal komme opp for å trekke pusten.</p>",
            passageText: "Isbjørnen har tykk, hvit pels som isolerer godt mot kulda og fungerer som kamuflasje på isen. Under den hvite pelsen har isbjørnen faktisk helt sort hud. Den sorte huden hjelper isbjørnen med å absorbere varme fra solstrålene.",
            question: "Klikk på ordet i avsnittet over som betyr det samme som 'suge til seg' eller 'ta opp':",
            correct: "absorbere",
            explanation: "Å absorbere betyr å suge til seg eller ta opp noe (som for eksempel fuktighet eller varme)."
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "<h3>Dyrelivet i Arktis</h3><p>Arktis er det kalde området helt nord på jorda. Her er vintrene lange, mørke og ekstremt kalde, og bakken er dekket av snø og is det meste av året. Likevel lever det mange spennende dyr her som har tilpasset seg det tøffe klimaet på utrolige måter.</p><p>Isbjørnen er det største rovdyret i Arktis. Den har tykk, hvit pels som isolerer godt mot kulda og fungerer som kamuflasje på isen. Under den hvite pelsen har isbjørnen faktisk helt sort hud. Den sorte huden hjelper isbjørnen med å absorbere varme fra solstrålene. Isbjørnen er en dyktig svømmer og bruker mesteparten av tiden sin på drivisen for å jakte på sel.</p><p>Fjellreven er et annet dyr som er godt tilpasset Arktis. Den har en ekstremt tett pels som holder den varm selv i temperaturer ned mot 50 minusgrader. Fjellreven skifter farge på pelsen med årstidene. Om vinteren er pelsen snøhvit for å gjemme seg i snøen, mens om sommeren blir den gråbrun for å gå i ett med steinene og jorda på tundraen. Den lever av lemen, fugler og rester etter isbjørnens måltider.</p><p>Ringselen er det vanligste byttedyret for isbjørnen. Den lever i havet og under isen. For å kunne puste lager den små pustehull i isen ved hjelp av de sterke klørne på forluffene sine. Isbjørnen ligger ofte tålmodig og venter ved disse pustehullene på at selen skal komme opp for å trekke pusten.</p>",
            question: "Hvor tilbringer isbjørnen mesteparten av tiden sin?",
            options: ["I dype huler", "På tundraen", "På drivisen", "På fjelltoppene"],
            correct: "På drivisen",
            explanation: "Teksten opplyser: 'Isbjørnen er en dyktig svømmer og bruker mesteparten av tiden sin på drivisen'."
        },
        {
            level: 2,
            type: "matching",
            question: "Koble sammen det arktiske dyret med riktig påstand:",
            leftItems: ["Isbjørn", "Fjellrev", "Ringsel", "Lemen"],
            rightItems: ["Har helt sort hud under pelsen", "Skifter farge på pelsen med årstidene", "Lager pustehull med klørne", "Er mat for fjellreven"],
            correct: {
                "Isbjørn": "Har helt sort hud under pelsen",
                "Fjellrev": "Skifter farge på pelsen med årstidene",
                "Ringsel": "Lager pustehull med klørne",
                "Lemen": "Er mat for fjellreven"
            },
            explanation: "Dette er dyrenes egenskaper: Isbjørnen har sort hud, fjellreven skifter farge, ringselen lager pustehull, og lemen er maten til fjellreven."
        },
        {
            level: 3,
            type: "multiple_choice",
            passage: "<h3>Dyrelivet i Arktis</h3><p>Arktis er det kalde området helt nord på jorda. Her er vintrene lange, mørke og ekstremt kalde, og bakken er dekket av snø og is det meste av året. Likevel lever det many spennende dyr her som har tilpasset seg det tøffe klimaet på utrolige måter.</p><p>Isbjørnen er det største rovdyret i Arktis. Den har tykk, hvit pels som isolerer godt mot kulda og fungerer som kamuflasje på isen. Under den hvite pelsen har isbjørnen faktisk helt sort hud. Den sorte huden hjelper isbjørnen med å absorbere varme fra solstrålene. Isbjørnen er en dyktig svømmer og bruker mesteparten av tiden sin på drivisen for å jakte på sel.</p><p>Fjellreven er et annet dyr som er godt tilpasset Arktis. Den har en ekstremt tett pels som holder den varm selv i temperaturer ned mot 50 minusgrader. Fjellreven skifter farge på pelsen med årstidene. Om vinteren er pelsen snøhvit for å gjemme seg i snøen, mens om sommeren blir den gråbrun for å gå i ett med steinene og jorda på tundraen. Den lever av lemen, fugler og rester etter isbjørnens måltider.</p><p>Ringselen er det vanligste byttedyret for isbjørnen. Den lever i havet og under isen. For å kunne puste lager den små pustehull i isen ved hjelp av de sterke klørne på forluffene sine. Isbjørnen ligger ofte tålmodig og venter ved disse pustehullene på at selen skal komme opp for å trekke pusten.</p>",
            question: "Hvorfor ligger isbjørnen og venter ved selens pustehull?",
            options: ["For å leke", "For å fange selen når den skal puste", "For å hvile forluffene", "For å drikke saltvann"],
            correct: "For å fange selen når den skal puste",
            explanation: "Siste setning forklarer at isbjørnen venter ved pustehullene på at ringselen skal komme opp for å trekke pusten."
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "<h3>Den hemmelige trehytta</h3><p>Leo og Ida hadde ferie, og dagene føltes uendelig lange. Bak bestefars gamle låve startet en tett granskog som de voksne hadde sagt at de ikke burde gå for langt inn i. Men nysgjerrigheten ble for stor. Med hver sin matpakke i sekken ruslet de inn mellom de mørke, duftende trærne.</p><p>Etter å ha gått i ti minutter, kom de til en liten åpning i skogen. Midt i lysningen sto en enorm, gammel eik. Da Leo så opp, sperret han øynene opp. Høyt oppe i tretoppen, støttet opp av tykke greiner, hang en trehytte. Veggene var gråslitte av vær og vind, og et lite vindu reflekterte sollyset.</p><p>En taustige hang ned fra en luke i bunnen av hytta. Ida klatret først, spent og litt skjelven i hendene. Da de kom opp, oppdaget de at hytta var koselig innredet. I hjørnet sto en gammel trestol, og på et lite bord lå det en støvete, innbundet bok med en messinglås. Boken var tom på de første sidene, men på den tredje siden sto det skrevet med sirlig skrift: 'Den som skriver sine ønsker i denne boken, vil oppleve merkelige ting.'</p><p>Barna så på hverandre. Var det et eventyr, eller var det på ekte? Leo tok opp en blyant fra sekken og skrev forsiktig: 'Vi ønsker oss en kurv med nystekte boller.' I samme sekund hørte de en svak rasling i greinene på utsiden av hytta.</p>",
            question: "Hvor starter den tette granskogen barna går inn i?",
            options: ["Bak skolen", "Bak bestefars gamle låve", "Ved stranden", "Nær skogsveien"],
            correct: "Bak bestefars gamle låve",
            explanation: "Første avsnitt forteller: 'Bak bestefars gamle låve startet en tett granskog'."
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Den hemmelige trehytta</h3><p>Leo og Ida hadde ferie, og dagene føltes uendelig lange. Bak bestefars gamle låve startet en tett granskog som de voksne hadde sagt at de ikke burde gå for langt inn i. Men nysgjerrigheten ble for stor. Med hver sin matpakke i sekken ruslet de inn mellom de mørke, duftende trærne.</p><p>Etter å ha gått i ti minutter, kom de til en liten åpning i skogen. Midt i lysningen sto en enorm, gammel eik. Da Leo så opp, sperret han øynene opp. Høyt oppe i tretoppen, støttet opp av tykke greiner, hang en trehytte. Veggene var gråslitte av vær og vind, og et lite vindu reflekterte sollyset.</p><p>En taustige hang ned fra en luke i bunnen av hytta. Ida klatret først, spent og litt skjelven i hendene. Da de kom opp, oppdaget de at hytta var koselig innredet. I hjørnet sto en gammel trestol, og på et lite bord lå det en støvete, innbundet bok med en messinglås. Boken var tom på de første sidene, men på den tredje siden sto det skrevet med sirlig skrift: 'Den som skriver sine ønsker i denne boken, vil oppleve merkelige ting.'</p><p>Barna så på hverandre. Var det et eventyr, eller var det på ekte? Leo tok opp en blyant fra sekken og skrev forsiktig: 'Vi ønsker oss en kurv med nystekte boller.' I samme sekund hørte de en svak rasling i greinene på utsiden av hytta.</p>",
            question: "Hvorfor gikk Leo og Ida inn i skogen selv om de voksne frarådet det?",
            options: ["De gikk seg vill", "De lette etter hunden sin", "Nysgjerrigheten ble for stor", "De skulle bygge hytte"],
            correct: "Nysgjerrigheten ble for stor",
            explanation: "Det står i første avsnitt: 'Men nysgjerrigheten ble for stor'."
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Den hemmelige trehytta</h3><p>Leo og Ida hadde ferie, og dagene føltes uendelig lange. Bak bestefars gamle låve startet en tett granskog som de voksne hadde sagt at de ikke burde gå for langt inn i. Men nysgjerrigheten ble for stor. Med hver sin matpakke i sekken ruslet de inn mellom de mørke, duftende trærne.</p><p>Etter å ha gått i ti minutter, kom de til en liten åpning i skogen. Midt i lysningen sto en enorm, gammel eik. Da Leo så opp, sperret han øynene opp. Høyt oppe i tretoppen, støttet opp av tykke greiner, hang en trehytte. Veggene var gråslitte av vær og vind, og et lite vindu reflekterte sollyset.</p><p>En taustige hang ned fra en luke i bunnen av hytta. Ida klatret først, spent og litt skjelven i hendene. Da de kom opp, oppdaget de at hytta var koselig innredet. I hjørnet sto en gammel trestol, og på et lite bord lå det en støvete, innbundet bok med en messinglås. Boken var tom på de første sidene, men på den tredje siden sto det skrevet med sirlig skrift: 'Den som skriver sine ønsker i denne boken, vil oppleve merkelige ting.'</p><p>Barna så på hverandre. Var det et eventyr, eller var det på ekte? Leo tok opp en blyant fra sekken og skrev forsiktig: 'Vi ønsker oss en kurv med nystekte boller.' I samme sekund hørte de en svak rasling i greinene på utsiden av hytta.</p>",
            question: "Hvilket tre var trehytta bygget i?",
            options: ["En gran", "En furu", "En enorm, gammel eik", "En bjørk"],
            correct: "En enorm, gammel eik",
            explanation: "Andre avsnitt forteller at treet midt i lysningen var 'en enorm, gammel eik'."
        },
        {
            level: 2,
            type: "matrix",
            question: "Hva fant barna inne i trehytta? Avgjør om påstandene er riktige eller gale:",
            matrixRows: [
                { text: "Det sto en gammel trestol i hjørnet.", correct: "Riktig" },
                { text: "De fant en kurv med boller på bordet.", correct: "Galt" },
                { text: "Det lå en bok med messinglås på bordet.", correct: "Riktig" }
            ],
            explanation: "Det sto en trestol i hjørnet, de fant en bok med messinglås (ikke boller - det var noe de ønsket seg senere), og boken lå på bordet."
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "<h3>Den hemmelige trehytta</h3><p>Leo og Ida hadde ferie, og dagene føltes uendelig lange. Bak bestefars gamle låve startet en tett granskog som de voksne hadde sagt at de ikke burde gå for langt inn i. Men nysgjerrigheten ble for stor. Med hver sin matpakke i sekken ruslet de inn mellom de mørke, duftende trærne.</p><p>Etter å ha gått i ti minutter, kom de til en liten åpning i skogen. Midt i lysningen sto en enorm, gammel eik. Da Leo så opp, sperret han øynene opp. Høyt oppe i tretoppen, støttet opp av tykke greiner, hang en trehytte. Veggene var gråslitte av vær og vind, og et lite vindu reflekterte sollyset.</p><p>En taustige hang ned fra en luke i bunnen av hytta. Ida klatret først, spent og litt skjelven i hendene. Da de kom opp, oppdaget de at hytta var koselig innredet. I hjørnet sto en gammel trestol, og på et lite bord lå det en støvete, innbundet bok med en messinglås. Boken var tom på de første sidene, men på den tredje siden sto det skrevet med sirlig skrift: 'Den som skriver sine ønsker i denne boken, vil oppleve merkelige ting.'</p><p>Barna så på hverandre. Var det et eventyr, eller var det på ekte? Leo tok opp en blyant fra sekken og skrev forsiktig: 'Vi ønsker oss en kurv med nystekte boller.' I samme sekund hørte de en svak rasling i greinene på utsiden av hytta.</p>",
            question: "Hvordan kom barna seg opp i trehytta?",
            options: ["De klatret i greinene", "De brukte en taustige", "De ble heist opp i en kurv", "De klatret opp en vanlig trestige"],
            correct: "De brukte en taustige",
            explanation: "I tredje avsnitt står det: 'En taustige hang ned fra en luke i bunnen av hytta'."
        },
        {
            level: 3,
            type: "word_clicker",
            passage: "<h3>Den hemmelige trehytta</h3><p>Leo og Ida hadde ferie, og dagene føltes uendelig lange. Bak bestefars gamle låve startet en tett granskog som de voksne hadde sagt at de ikke burde gå for langt inn i. Men nysgjerrigheten ble for stor. Med hver sin matpakke i sekken ruslet de inn mellom de mørke, duftende trærne.</p><p>Etter å ha gått i ti minutter, kom de til en liten åpning i skogen. Midt i lysningen sto en enorm, gammel eik. Da Leo så opp, sperret han øynene opp. Høyt oppe i tretoppen, støttet opp av tykke greiner, hang en trehytte. Veggene var gråslitte av vær og vind, og et lite vindu reflekterte sollyset.</p><p>En taustige hang ned fra en luke i bunnen av hytta. Ida klatret først, spent og litt skjelven i hendene. Da de kom opp, oppdaget de at hytta var koselig innredet. I hjørnet sto en gammel trestol, og på et lite bord lå det en støvete, innbundet bok med en messinglås. Boken var tom på de første sidene, men på den tredje siden sto det skrevet med sirlig skrift: 'Den som skriver sine ønsker i denne boken, vil oppleve merkelige ting.'</p><p>Barna så på hverandre. Var det et eventyr, eller var det på ekte? Leo tok opp en blyant fra sekken og skrev forsiktig: 'Vi ønsker oss en kurv med nystekte boller.' I samme sekund hørte de en svak rasling i greinene på utsiden av hytta.</p>",
            passageText: "Boken var tom på de første sidene, men på den tredje siden sto det skrevet med sirlig skrift: 'Den som skriver sine ønsker i denne boken, vil oppleve merkelige ting.'",
            question: "Klikk på ordet i avsnittet over som betyr det samme som 'nøyaktig, regelmessig og fin' (ofte brukt om håndskrift):",
            correct: "sirlig",
            explanation: "Sirlig betyr nøyaktig, pyntelig og ordentlig utført."
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Den hemmelige trehytta</h3><p>Leo og Ida hadde ferie, og dagene føltes uendelig lange. Bak bestefars gamle låve startet en tett granskog som de voksne hadde sagt at de ikke burde gå for langt inn i. Men nysgjerrigheten ble for stor. Med hver sin matpakke i sekken ruslet de inn mellom de mørke, duftende trærne.</p><p>Etter å ha gått i ti minutter, kom de til en liten åpning i skogen. Midt i lysningen sto en enorm, gammel eik. Da Leo så opp, sperret han øynene opp. Høyt oppe i tretoppen, støttet opp av tykke greiner, hang en trehytte. Veggene var gråslitte av vær og vind, og et lite vindu reflekterte sollyset.</p><p>En taustige hang ned fra en luke i bunnen av hytta. Ida klatret først, spent og litt skjelven i hendene. Da de kom opp, oppdaget de at hytta var koselig innredet. I hjørnet sto en gammel trestol, og på et lite bord lå det en støvete, innbundet bok med en messinglås. Boken var tom på de første sidene, men på den tredje siden sto det skrevet med sirlig skrift: 'Den som skriver sine ønsker i denne boken, vil oppleve merkelige ting.'</p><p>Barna så på hverandre. Var det et eventyr, eller var det på ekte? Leo tok opp en blyant fra sekken og skrev forsiktig: 'Vi ønsker oss en kurv med nystekte boller.' I samme sekund hørte de en svak rasling i greinene på utsiden av hytta.</p>",
            question: "Hva var spesielt med boken barna fant?",
            options: ["Den var skrevet av bestefar", "Den inneholdt hemmelige kart", "Den oppfylte ønsker skrevet i den", "Den hadde sider av rent gull"],
            correct: "Den oppfylte ønsker skrevet i den",
            explanation: "Boken hadde en tekst som sa: 'Den som skriver sine ønsker i denne boken, vil oppleve merkelige ting'."
        },
        {
            level: 2,
            type: "input",
            question: "Hva ønsket barna seg i boken? Skriv svaret med ett eller to ord (f.eks. 'varme sokker').",
            correct: "nystekte boller",
            explanation: "Barna skrev i boken: 'Vi ønsker oss en kurv med nystekte boller'."
        },
        {
            level: 3,
            type: "sorting",
            question: "Sorter hendelsene under i den rekkefølgen de skjedde i fortellingen (først til venstre):",
            options: ["De fant trehytta", "De gikk inn i granskogen", "Ida klatret opp først", "Leo skrev ønsket"],
            correct: ["De gikk inn i granskogen", "De fant trehytta", "Ida klatret opp først", "Leo skrev ønsket"],
            explanation: "Rekkefølgen i historien er: Gå inn i skogen -> finne hytta -> Ida klatrer opp -> Leo skriver ønsket."
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "<h3>Den hemmelige trehytta</h3><p>Leo og Ida hadde ferie, og dagene føltes uendelig lange. Bak bestefars gamle låve startet en tett granskog som de voksne hadde sagt at de ikke burde gå for langt inn i. Men nysgjerrigheten ble for stor. Med hver sin matpakke i sekken ruslet de inn mellom de mørke, duftende trærne.</p><p>Etter å ha gått i ti minutter, kom de til en liten åpning i skogen. Midt i lysningen sto en enorm, gammel eik. Da Leo så opp, sperret han øynene opp. Høyt oppe i tretoppen, støttet opp av tykke greiner, hang en trehytte. Veggene var gråslitte av vær og vind, og et lite vindu reflekterte sollyset.</p><p>En taustige hang ned fra en luke i bunnen av hytta. Ida klatret først, spent og litt skjelven i hendene. Da de kom opp, oppdaget de at hytta var koselig innredet. I hjørnet sto en gammel trestol, og på et lite bord lå det en støvete, innbundet bok med en messinglås. Boken var tom på de første sidene, men på den tredje siden sto det skrevet med sirlig skrift: 'Den som skriver sine ønsker i denne boken, vil oppleve merkelige ting.'</p><p>Barna så på hverandre. Var det et eventyr, eller var det på ekte? Leo tok opp en blyant fra sekken og skrev forsiktig: 'Vi ønsker oss en kurv med nystekte boller.' I samme sekund hørte de en svak rasling i greinene på utsiden av hytta.</p>",
            question: "Hvem av barna klatret opp taustigen først?",
            options: ["Leo", "Ida", "Begge klatret samtidig", "Ingen av dem"],
            correct: "Ida",
            explanation: "I tredje avsnitt står det: 'Ida klatret først, spent og litt skjelven i hendene'."
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Den hemmelige trehytta</h3><p>Leo og Ida hadde ferie, og dagene føltes uendelig lange. Bak bestefars gamle låve startet en tett granskog som de voksne hadde sagt at de ikke burde gå for langt inn i. Men nysgjerrigheten ble for stor. Med hver sin matpakke i sekken ruslet de inn mellom de mørke, duftende trærne.</p><p>Etter å ha gått i ti minutter, kom de til en liten åpning i skogen. Midt i lysningen sto en enorm, gammel eik. Da Leo så opp, sperret han øynene opp. Høyt oppe i tretoppen, støttet opp av tykke greiner, hang en trehytte. Veggene var gråslitte av vær og vind, og et lite vindu reflekterte sollyset.</p><p>En taustige hang ned fra en luke i bunnen av hytta. Ida klatret først, spent og litt skjelven i hendene. Da de kom opp, oppdaget de at hytta var koselig innredet. I hjørnet sto en gammel trestol, og på et lite bord lå det en støvete, innbundet bok med en messinglås. Boken var tom på de første sidene, men på den tredje siden sto det skrevet med sirlig skrift: 'Den som skriver sine ønsker i denne boken, vil oppleve merkelige ting.'</p><p>Barna så på hverandre. Var det et eventyr, eller var det på ekte? Leo tok opp en blyant fra sekken og skrev forsiktig: 'Vi ønsker oss en kurv med nystekte boller.' I samme sekund hørte de en svak rasling i greinene på utsiden av hytta.</p>",
            question: "Hva skjedde i samme sekund som Leo skrev ferdig ønsket sitt?",
            options: ["Hytta begynte å riste voldsomt", "En dør åpnet seg i treet", "De hørte en svak rasling i greinene", "Vinduet knuste"],
            correct: "De hørte en svak rasling i greinene",
            explanation: "Teksten avslutter med: 'I samme sekund hørte de en svak rasling i greinene på utsiden av hytta'."
        },
        {
            level: 3,
            type: "multiple_choice",
            passage: "<h3>Den hemmelige trehytta</h3><p>Leo og Ida hadde ferie, og dagene føltes uendelig lange. Bak bestefars gamle låve startet en tett granskog som de voksne hadde sagt at de ikke burde gå for langt inn i. Men nysgjerrigheten ble for stor. Med hver sin matpakke i sekken ruslet de inn mellom de mørke, duftende trærne.</p><p>Etter å ha gått i ti minutter, kom de til en liten åpning i skogen. Midt i lysningen sto en enorm, gammel eik. Da Leo så opp, sperret han øynene opp. Høyt oppe i tretoppen, støttet opp av tykke greiner, hang en trehytte. Veggene var gråslitte av vær og vind, og et lite vindu reflekterte sollyset.</p><p>En taustige hang ned fra en luke i bunnen av hytta. Ida klatret først, spent og litt skjelven i hendene. Da de kom opp, oppdaget de at hytta var koselig innredet. I hjørnet sto en gammel trestol, og på et lite bord lå det en støvete, innbundet bok med en messinglås. Boken var tom på de første sidene, men på den tredje siden sto det skrevet med sirlig skrift: 'Den som skriver sine ønsker i denne boken, vil oppleve merkelige ting.'</p><p>Barna så på hverandre. Var det et eventyr, eller var det på ekte? Leo tok opp en blyant fra sekken og skrev forsiktig: 'Vi ønsker oss en kurv med nystekte boller.' I samme sekund hørte de en svak rasling i greinene på utsiden av hytta.</p>",
            question: "Hva er det mest sannsynlige hovedtemaet i denne teksten?",
            options: ["Kunnskap om trær og skogbruk", "Magi, eventyrlyst og barneliv i ferien", "Regler om å ikke gå inn i skogen", "Bestefars historie og låvebygging"],
            correct: "Magi, eventyrlyst og barneliv i ferien",
            explanation: "Historien handler om barnas nysgjerrighet som leder dem til en hemmelig trehytte og en magisk ønske-bok, som setter i gang et eventyr."
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "<h3>Slik bretter du et perfekt papirfly</h3><p>Å brette papirfly er en gammel kunst. For å brette et fly som flyr langt og stabilt, er det viktig å være nøyaktig med brettene. Du trenger kun et vanlig A4-ark.</p><p><b>Steg 1:</b> Legg arket foran deg på høykant. Brett arket på midten på langs, slik at du får en brettelinje midt på arket. Brett det deretter ut igjen.</p><p><b>Steg 2:</b> Brett de to øverste hjørnene inn mot midtlinjen, slik at du får en spiss på toppen av arket.</p><p><b>Steg 3:</b> Brett den nye spissen nedover, slik at arket ser ut som en konvolutt. Spissen skal peke rett ned mot bunnen.</p><p><b>Steg 4:</b> Brett de to nye øverste hjørnene inn mot midten igjen, slik at de møtes rett over spissen fra forrige steg. Det skal stikke ut en liten trekant under bretten.</p><p><b>Steg 5:</b> Brett den lille trekanten oppover. Denne trekanten låser de andre brettene på plass.</p><p><b>Steg 6:</b> Brett hele flyet i to bakover langs midtlinjen. Brett til slutt vingene ned på hver side, slik at de flukter med bunnen av flykroppen. Nå er papirflyet klart til start!</p>",
            question: "Hvilket utstyr trenger du for å brette dette papirflyet?",
            options: ["Et A4-ark, saks og teip", "Kun et vanlig A4-ark", "Papir, linjal og lim", "Ingenting, man bruker hendene"],
            correct: "Kun et vanlig A4-ark",
            explanation: "Første avsnitt avslutter med: 'Du trenger kun et vanlig A4-ark'."
        },
        {
            level: 2,
            type: "sorting",
            question: "Sorter trinnene for papirflybretting i riktig rekkefølge (først til venstre):",
            options: ["Brett arket på langs og ut igjen", "Brett øverste hjørner til en spiss", "Brett den lille trekanten oppover", "Brett vingene ned på hver side"],
            correct: ["Brett arket på langs og ut igjen", "Brett øverste hjørner til en spiss", "Brett den lille trekanten oppover", "Brett vingene ned på hver side"],
            explanation: "Følger vi instruksjonen kronologisk: Brett på langs (Steg 1) -> Brett hjørnene til en spiss (Steg 2) -> Brett trekanten oppover (Steg 5) -> Brett vingene ned (Steg 6)."
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Slik bretter du et perfekt papirfly</h3><p>Å brette papirfly er en gammel kunst. For å brette et fly som flyr langt og stabilt, er det viktig å være nøyaktig med brettene. Du trenger kun et vanlig A4-ark.</p><p><b>Steg 1:</b> Legg arket foran deg på høykant. Brett arket på midten på langs, slik at du får en brettelinje midt på arket. Brett det deretter ut igjen.</p><p><b>Steg 2:</b> Brett de to øverste hjørnene inn mot midtlinjen, slik at du får en spiss på toppen av arket.</p><p><b>Steg 3:</b> Brett den nye spissen nedover, slik at arket ser ut som en konvolutt. Spissen skal peke rett ned mot bunnen.</p><p><b>Steg 4:</b> Brett de to nye øverste hjørnene inn mot midten igjen, slik at de møtes rett over spissen fra forrige steg. Det skal stikke ut en liten trekant under bretten.</p><p><b>Steg 5:</b> Brett den lille trekanten oppover. Denne trekanten låser de andre brettene på plass.</p><p><b>Steg 6:</b> Brett hele flyet i to bakover langs midtlinjen. Brett til slutt vingene ned på hver side, slik at de flukter med bunnen av flykroppen. Nå er papirflyet klart til start!</p>",
            question: "Hva ser arket ut som etter at du har brettet spissen nedover i Steg 3?",
            options: ["En hatt", "En båt", "En konvolutt", "En stjerne"],
            correct: "En konvolutt",
            explanation: "I Steg 3 står det: 'Brett den nye spissen nedover, slik at arket ser ut som en konvolutt'."
        },
        {
            level: 2,
            type: "dropdown",
            question: "Den lille trekanten brettes oppover i Steg 5 for å ___ de andre brettene på plass.",
            options: ["låse", "klippe", "skjule", "fjerne"],
            correct: "låse",
            explanation: "I Steg 5 står det: 'Denne trekanten låser de andre brettene på plass'."
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "<h3>Slik bretter du et perfekt papirfly</h3><p>Å brette papirfly er en gammel kunst. For å brette et fly som flyr langt og stabilt, er det viktig å være nøyaktig med brettene. Du trenger kun et vanlig A4-ark.</p><p><b>Steg 1:</b> Legg arket foran deg på høykant. Brett arket på midten på langs, slik at du får en brettelinje midt på arket. Brett det deretter ut igjen.</p><p><b>Steg 2:</b> Brett de to øverste hjørnene inn mot midtlinjen, slik at du får en spiss på toppen av arket.</p><p><b>Steg 3:</b> Brett den nye spissen nedover, slik at arket ser ut som en konvolutt. Spissen skal peke rett ned mot bunnen.</p><p><b>Steg 4:</b> Brett de to nye øverste hjørnene inn mot midten igjen, slik at de møtes rett over spissen fra forrige steg. Det skal stikke ut en liten trekant under bretten.</p><p><b>Steg 5:</b> Brett den lille trekanten oppover. Denne trekanten låser de andre brettene på plass.</p><p><b>Steg 6:</b> Brett hele flyet i to bakover langs midtlinjen. Brett til slutt vingene ned på hver side, slik at de flukter med bunnen av flykroppen. Nå er papirflyet klart til start!</p>",
            question: "Hvordan skal arket ligge foran deg når du begynner?",
            options: ["På tvers (liggende)", "På høykant (stående)", "Brettet i fire deler", "Rullet sammen som et rør"],
            correct: "På høykant (stående)",
            explanation: "Steg 1 forteller: 'Legg arket foran deg på høykant'."
        },
        {
            level: 3,
            type: "multiple_choice",
            passage: "<h3>Slik bretter du et perfekt papirfly</h3><p>Å brette papirfly er en gammel kunst. For å brette et fly som flyr langt og stabilt, er det viktig å være nøyaktig med brettene. Du trenger kun et vanlig A4-ark.</p><p><b>Steg 1:</b> Legg arket foran deg på høykant. Brett arket på midten på langs, slik at du får en brettelinje midt på arket. Brett det deretter ut igjen.</p><p><b>Steg 2:</b> Brett de to øverste hjørnene inn mot midtlinjen, slik at du får en spiss på toppen av arket.</p><p><b>Steg 3:</b> Brett den nye spissen nedover, slik at arket ser ut som en konvolutt. Spissen skal peke rett ned mot bunnen.</p><p><b>Steg 4:</b> Brett de to nye øverste hjørnene inn mot midten igjen, slik at de møtes rett over spissen fra forrige steg. Det skal stikke ut en liten trekant under bretten.</p><p><b>Steg 5:</b> Brett den lille trekanten oppover. Denne trekanten låser de andre brettene på plass.</p><p><b>Steg 6:</b> Brett hele flyet i to bakover langs midtlinjen. Brett til slutt vingene ned på hver side, slik at de flukter med bunnen av flykroppen. Nå er papirflyet klart til start!</p>",
            question: "Hva er fordelen med å være nøyaktig med brettene dine?",
            options: ["Det går raskere å brette", "Flyet flyr langt og stabilt", "Arket revner ikke", "Flyet blir lettere i vekt"],
            correct: "Flyet flyr langt og stabilt",
            explanation: "Første avsnitt forteller: 'For å brette et fly som flyr langt og stabilt, er det viktig å være nøyaktig med brettene'."
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Slik bretter du et perfekt papirfly</h3><p>Å brette papirfly er en gammel kunst. For å brette et fly som flyr langt og stabilt, er det viktig å være nøyaktig med brettene. Du trenger kun et vanlig A4-ark.</p><p><b>Steg 1:</b> Legg arket foran deg på høykant. Brett arket på midten på langs, slik at du får en brettelinje midt på arket. Brett det deretter ut igjen.</p><p><b>Steg 2:</b> Brett de to øverste hjørnene inn mot midtlinjen, slik at du får en spiss på toppen av arket.</p><p><b>Steg 3:</b> Brett den nye spissen nedover, slik at arket ser ut som en konvolutt. Spissen skal peke rett ned mot bunnen.</p><p><b>Steg 4:</b> Brett de to nye øverste hjørnene inn mot midten igjen, slik at de møtes rett over spissen fra forrige steg. Det skal stikke ut en liten trekant under bretten.</p><p><b>Steg 5:</b> Brett den lille trekanten oppover. Denne trekanten låser de andre brettene på plass.</p><p><b>Steg 6:</b> Brett hele flyet i to bakover langs midtlinjen. Brett til slutt vingene ned på hver side, slik at de flukter med bunnen av flykroppen. Nå er papirflyet klart til start!</p>",
            question: "Hva gjør du med vingene til slutt i Steg 6?",
            options: ["Klipper dem i to", "Bretter dem ned på hver side", "Bretter dem oppover", "Limer dem sammen"],
            correct: "Bretter dem ned på hver side",
            explanation: "I Steg 6 står det: 'Brett til slutt vingene ned på hver side'."
        },
        {
            level: 3,
            type: "word_clicker",
            passage: "<h3>Slik bretter du et perfekt papirfly</h3><p>Å brette papirfly er en gammel kunst. For å brette et fly som flyr langt og stabilt, er det viktig å være nøyaktig med brettene. Du trenger kun et vanlig A4-ark.</p><p><b>Steg 1:</b> Legg arket foran deg på høykant. Brett arket på midten på langs, slik at du får en brettelinje midt på arket. Brett det deretter ut igjen.</p><p><b>Steg 2:</b> Brett de to øverste hjørnene inn mot midtlinjen, slik at du får en spiss på toppen av arket.</p><p><b>Steg 3:</b> Brett den nye spissen nedover, slik at arket ser ut som en konvolutt. Spissen skal peke rett ned mot bunnen.</p><p><b>Steg 4:</b> Brett de to nye øverste hjørnene inn mot midten igjen, slik at de møtes rett over spissen fra forrige steg. Det skal stikke ut en liten trekant under bretten.</p><p><b>Steg 5:</b> Brett den lille trekanten oppover. Denne trekanten låser de andre brettene på plass.</p><p><b>Steg 6:</b> Brett hele flyet i to bakover langs midtlinjen. Brett til slutt vingene ned på hver side, slik at de flukter med bunnen av flykroppen. Nå er papirflyet klart til start!</p>",
            passageText: "Brett til slutt vingene ned på hver side, slik at de flukter med bunnen av flykroppen.",
            question: "Klikk på ordet i setningen over som betyr 'å være på linje med' eller 'være i flukt med':",
            correct: "flukter",
            explanation: "Å 'flukte med' betyr at linjene eller flatene ligger helt jevnt eller på linje med hverandre."
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "<h3>Trygg på sykkel</h3><p>Å sykle er kjempegøy, og det er en fin måte å komme seg til skolen på. Men i trafikken er du myk og sårbar. Derfor må du alltid passe godt på og følge trafikkreglene. Her er noen viktige regler for syklister.</p><p>Det aller viktigste sikkerhetsutstyret er sykkelhjelmen. Hjelmen beskytter hodet ditt hvis du skulle være uheldig og velte. Husk at hjelmen må sitte godt på hodet og være festet under haken for å hjelpe ordentlig. Det er også påbudt med lys på sykkelen hvis du sykler i mørket – hvitt eller gult lys foran, og rødt lys bak. I tillegg må sykkelen ha rød refleks bak, gul eller hvit refleks på pedalene, og en ringeklokke.</p><p>Når du sykler, regnes du som kjørende. Det betyr at du i utgangspunktet må følge de samme reglene som bilene. Du må sykle på høyre side av veien, og du har vikeplikt for trafikk fra høyre hvis det ikke er skiltet annerledes. Hvis du sykler på gang- og sykkelvei, må du ta hensyn til de som går. Passér fotgjengere i god avstand og i lav fart, og pling gjerne med ringeklokka i god tid før du kjører forbi.</p>",
            question: "Hva er det aller viktigste sikkerhetsutstyret når du sykler?",
            options: ["Ringeklokke", "Sykkelhjelm", "Refleks på pedalene", "Fargesterk jakke"],
            correct: "Sykkelhjelm",
            explanation: "Andre avsnitt starter med: 'Det aller viktigste sikkerhetsutstyret er sykkelhjelmen'."
        },
        {
            level: 2,
            type: "matrix",
            question: "Hva er påbudt utstyr på sykkelen ifølge teksten? Avgjør om påstandene er riktige eller gale:",
            matrixRows: [
                { text: "Ringeklokke.", correct: "Riktig" },
                { text: "Rød refleks foran.", correct: "Galt" },
                { text: "Gul eller hvit refleks på pedalene.", correct: "Riktig" }
            ],
            explanation: "Ringeklokke og refleks på pedalene er påbudt. Refleksen foran skal ikke være rød (det er påbudt med rød refleks bak)."
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Trygg på sykkel</h3><p>Å sykle er kjempegøy, og det er en fin måte å komme seg til skolen på. Men i trafikken er du myk og sårbar. Derfor må du alltid passe godt på og følge trafikkreglene. Her er noen viktige regler for syklister.</p><p>Det aller viktigste sikkerhetsutstyret er sykkelhjelmen. Hjelmen beskytter hodet ditt hvis du skulle være uheldig og velte. Husk at hjelmen må sitte godt på hodet og være festet under haken for å hjelpe ordentlig. Det er også påbudt med lys på sykkelen hvis du sykler i mørket – hvitt eller gult lys foran, og rødt lys bak. I tillegg må sykkelen ha rød refleks bak, gul eller hvit refleks på pedalene, og en ringeklokke.</p><p>Når du sykler, regnes du som kjørende. Det betyr at du i utgangspunktet må følge de samme reglene som bilene. Du må sykle på høyre side av veien, og du har vikeplikt for trafikk fra høyre hvis det ikke er skiltet annerledes. Hvis du sykler på gang- og sykkelvei, må du ta hensyn til de som går. Passér fotgjengere i god avstand og i lav fart, og pling gjerne med ringeklokka i god tid før du kjører forbi.</p>",
            question: "Hvilke regler må du følge når du sykler i veibanen?",
            options: ["De samme reglene som bilene", "Fotgjengernes regler", "Det er ingen faste regler", "Du bestemmer reglene selv"],
            correct: "De samme reglene som bilene",
            explanation: "I tredje avsnitt står det: 'Når du sykler, regnes du som kjørende. Det betyr at du i utgangspunktet må følge de samme reglene som bilene'."
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "<h3>Trygg på sykkel</h3><p>Å sykle er kjempegøy, og det er en fin måte å komme seg til skolen på. Men i trafikken er du myk og sårbar. Derfor må du alltid passe godt på og følge trafikkreglene. Her er noen viktige regler for syklister.</p><p>Det aller viktigste sikkerhetsutstyret er sykkelhjelmen. Hjelmen beskytter hodet ditt hvis du skulle være uheldig og velte. Husk at hjelmen må sitte godt på hodet og være festet under haken for å hjelpe ordentlig. Det er også påbudt med lys på sykkelen hvis du sykler i mørket – hvitt eller gult lys foran, og rødt lys bak. I tillegg må sykkelen ha rød refleks bak, gul eller hvit refleks på pedalene, og en ringeklokke.</p><p>Når du sykler, regnes du som kjørende. Det betyr at du i utgangspunktet må følge de samme reglene som bilene. Du må sykle på høyre side av veien, og du har vikeplikt for trafikk fra høyre hvis det ikke er skiltet annerledes. Hvis du sykler på gang- og sykkelvei, må du ta hensyn til de som går. Passér fotgjengere i god avstand og i lav fart, og pling gjerne med ringeklokka i god tid før du kjører forbi.</p>",
            question: "Hvilken side av veien skal du sykle på?",
            options: ["Venstre side", "Høyre side", "I midten", "Valgfritt"],
            correct: "Høyre side",
            explanation: "Tredje avsnitt bekrefter: 'Du må sykle på høyre side av veien'."
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Trygg på sykkel</h3><p>Å sykle er kjempegøy, og det er en fin måte å komme seg til skolen på. Men i trafikken er du myk og sårbar. Derfor må du alltid passe godt på og følge trafikkreglene. Her er noen viktige regler for syklister.</p><p>Det aller viktigste sikkerhetsutstyret er sykkelhjelmen. Hjelmen beskytter hodet ditt hvis du skulle være uheldig og velte. Husk at hjelmen må sitte godt på hodet og være festet under haken for å hjelpe ordentlig. Det er også påbudt med lys på sykkelen hvis du sykler i mørket – hvitt eller gult lys foran, og rødt lys bak. I tillegg må sykkelen ha rød refleks bak, gul eller hvit refleks på pedalene, og en ringeklokke.</p><p>Når du sykler, regnes du som kjørende. Det betyr at du i utgangspunktet må følge de samme reglene som bilene. Du må sykle på høyre side av veien, og du har vikeplikt for trafikk fra høyre hvis det ikke er skiltet annerledes. Hvis du sykler på gang- og sykkelvei, må du ta hensyn til de som går. Passér fotgjengere i god avstand og i lav fart, og pling gjerne med ringeklokka i god tid før du kjører forbi.</p>",
            question: "Hva betyr det at du har 'vikeplikt for trafikk fra høyre'?",
            options: ["At du må stoppe for de som kommer fra høyre side", "At du kan sykle først uansett", "At du må svinge til høyre", "At du må stoppe for fotgjengere på venstre side"],
            correct: "At du må stoppe for de som kommer fra høyre side",
            explanation: "Vikeplikt betyr at du må vike og slippe frem kjøretøy som kommer fra høyre."
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Trygg på sykkel</h3><p>Å sykle er kjempegøy, og det er en fin måte å komme seg til skolen på. Men i trafikken er du myk og sårbar. Derfor må du alltid passe godt på og følge trafikkreglene. Her er noen viktige regler for syklister.</p><p>Det aller viktigste sikkerhetsutstyret er sykkelhjelmen. Hjelmen beskytter hodet ditt hvis du skulle være uheldig og velte. Husk at hjelmen må sitte godt på hodet og være festet under haken for å hjelpe ordentlig. Det er også påbudt med lys på sykkelen hvis du sykler i mørket – hvitt eller gult lys foran, og rødt lys bak. I tillegg må sykkelen ha rød refleks bak, gul eller hvit refleks på pedalene, og en ringeklokke.</p><p>Når du sykler, regnes du som kjørende. Det betyr at du i utgangspunktet må følge de samme reglene som bilene. Du må sykle på høyre side av veien, og du har vikeplikt for trafikk fra høyre hvis det ikke er skiltet annerledes. Hvis du sykler på gang- og sykkelvei, må du ta hensyn til de som går. Passér fotgjengere i god avstand og i lav fart, og pling gjerne med ringeklokka i god tid før du kjører forbi.</p>",
            question: "Hvordan skal du passere fotgjengere på gang- og sykkelvei?",
            options: ["I god avstand og i lav fart", "Beskrivelsen stemmer ikke med teksten", "Så fort som mulig", "På høyre side i full fart"],
            correct: "I god avstand og i lav fart",
            explanation: "Teksten sier: 'Passér fotgjengere i god avstand og i lav fart, og pling gjerne med ringeklokka i god tid'."
        },
        {
            level: 3,
            type: "word_clicker",
            passage: "<h3>Trygg på sykkel</h3><p>Å sykle er kjempegøy, og det er en fin måte å komme seg til skolen på. Men i trafikken er du myk og sårbar. Derfor må du alltid passe godt på og følge trafikkreglene. Her er noen viktige regler for syklister.</p><p>Det aller viktigste sikkerhetsutstyret er sykkelhjelmen. Hjelmen beskytter hodet ditt hvis du skulle være uheldig og velte. Husk at hjelmen må sitte godt på hodet og være festet under haken for å hjelpe ordentlig. Det er også påbudt med lys på sykkelen hvis du sykler i mørket – hvitt eller gult lys foran, og rødt lys bak. I tillegg må sykkelen ha rød refleks bak, gul eller hvit refleks på pedalene, og en ringeklokke.</p><p>Når du sykler, regnes du som kjørende. Det betyr at du i utgangspunktet må følge de samme reglene som bilene. Du må sykle på høyre side av veien, og du har vikeplikt for trafikk fra høyre hvis det ikke er skiltet annerledes. Hvis du sykler på gang- og sykkelvei, må du ta hensyn til de som går. Passér fotgjengere i god avstand og i lav fart, og pling gjerne med ringeklokka i god tid før du kjører forbi.</p>",
            passageText: "Når du sykler, regnes du som kjørende. Det betyr at du i utgangspunktet må følge de samme reglene som bilene.",
            question: "Klikk på ordet i setningen over som betyr 'som en generell regel' eller 'i utgangspunktet':",
            correct: "utgangspunktet",
            explanation: "I utgangspunktet betyr opprinnelig, i utgangsstatusen, eller som en generell regel."
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Trygg på sykkel</h3><p>Å sykle er kjempegøy, og det er en fin måte å komme seg til skolen på. Men i trafikken er du myk og sårbar. Derfor må du alltid passe godt på og følge trafikkreglene. Her er noen viktige regler for syklister.</p><p>Det aller viktigste sikkerhetsutstyret er sykkelhjelmen. Hjelmen beskytter hodet ditt hvis du skulle være uheldig og velte. Husk at hjelmen må sitte godt på hodet og være festet under haken for å hjelpe ordentlig. Det er også påbudt med lys på sykkelen hvis du sykler i mørket – hvitt eller gult lys foran, og rødt lys bak. I tillegg må sykkelen ha rød refleks bak, gul eller hvit refleks på pedalene, og en ringeklokke.</p><p>Når du sykler, regnes du som kjørende. Det betyr at du i utgangspunktet må følge de samme reglene som bilene. Du må sykle på høyre side av veien, og du har vikeplikt for trafikk fra høyre hvis det ikke er skiltet annerledes. Hvis du sykler på gang- og sykkelvei, må du ta hensyn til de som går. Passér fotgjengere i god avstand og i lav fart, og pling gjerne med ringeklokka i god tid før du kjører forbi.</p>",
            question: "Når er det påbudt å bruke lys på sykkelen?",
            options: ["Hele døgnet", "Kun om vinteren", "Hvis du sykler i mørket", "Bare på bilveier"],
            correct: "Hvis du sykler i mørket",
            explanation: "Teksten opplyser: 'Det er også påbudt med lys på sykkelen hvis du sykler i mørket'."
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "<h3>Reise til Mars</h3><p>Mars er den fjerde planeten fra sola og kalles ofte «den røde planeten». Den røde fargen skyldes jernoksid, som egentlig er vanlig rust, i bakken og støvet. Mars er en kald og tørr ørkenverden med en veldig tynn atmosfære som består av mest karbondioksid. Fordi atmosfæren er så tynn, kan den ikke holde på varmen fra sola, og gjennomsnittstemperaturen på Mars er rundt minus 60 kuldegrader.</p><p>Mennesker har ennå ikke reist til Mars, men vi har sendt mange roboter dit. De nyeste og mest avanserte robotene kalles rovere. Roverne Curiosity og Perseverance har hjul og kjører rundt på overflaten for å ta bilder, gjøre målinger og lete etter tegn på at det har vært vann og kanskje mikroskopisk liv der for milliarder av år siden. De sender bildene og dataene tilbake til jorda via satellitter.</p><p>Å reise til Mars tar veldig lang tid. Med dagens raketter tar reisen omtrent sju til ni måneder hver vei, avhengig av hvor planetene befinner seg i banene sine. En av de største utfordringene for en fremtidig bemannet reise er å beskytte astronautene mot farlig stråling i verdensrommet, og å sørge for nok mat, vann og oksygen under den lange turen.</p>",
            question: "Hvilket kallenavn har planeten Mars?",
            options: ["Den blå planeten", "Den røde planeten", "Gasskjempen", "Isplaneten"],
            correct: "Den røde planeten",
            explanation: "Teksten starter med å si: 'Mars er den fjerde planeten fra sola og kalles ofte «den røde planeten»'."
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "<h3>Reise til Mars</h3><p>Mars er den fjerde planeten fra sola og kalles ofte «den røde planeten». Den røde fargen skyldes jernoksid, som egentlig er vanlig rust, i bakken og støvet. Mars er en kald og tørr ørkenverden med en veldig tynn atmosfære som består av mest karbondioksid. Fordi atmosfæren er så tynn, kan den ikke holde på varmen fra sola, og gjennomsnittstemperaturen på Mars er rundt minus 60 kuldegrader.</p><p>Mennesker har ennå ikke reist til Mars, men vi har sendt mange roboter dit. De nyeste og mest avanserte robotene kalles rovere. Roverne Curiosity og Perseverance har hjul og kjører rundt på overflaten for å ta bilder, gjøre målinger og lete etter tegn på at det har vært vann og kanskje mikroskopisk liv der for milliarder av år siden. De sender bildene og dataene tilbake til jorda via satellitter.</p><p>Å reise til Mars tar veldig lang tid. Med dagens raketter tar reisen omtrent sju til ni måneder hver vei, avhengig av hvor planetene befinner seg i banene sine. En av de største utfordringene for en fremtidig bemannet reise er å beskytte astronautene mot farlig stråling i verdensrommet, og å sørge for nok mat, vann og oksygen under den lange turen.</p>",
            question: "Hvorfor har Mars en rødlig farge?",
            options: ["Fordi det er fylt med rød lava", "På grunn av jernoksid (rust) i bakken og støvet", "Fordi atmosfæren reflekterer rødt sollys", "På grunn av røde planter og trær"],
            correct: "På grunn av jernoksid (rust) i bakken og støvet",
            explanation: "Teksten forklarer: 'Den røde fargen skyldes jernoksid, som egentlig er vanlig rust, i bakken og støvet.'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Reise til Mars</h3><p>Mars er den fjerde planeten fra sola og kalles ofte «den røde planeten». Den røde fargen skyldes jernoksid, som egentlig er vanlig rust, i bakken og støvet. Mars er en kald og tørr ørkenverden med en veldig tynn atmosfære som består av mest karbondioksid. Fordi atmosfæren er så tynn, kan den ikke holde på varmen fra sola, og gjennomsnittstemperaturen på Mars er rundt minus 60 kuldegrader.</p><p>Mennesker har ennå ikke reist til Mars, men vi har sendt mange roboter dit. De nyeste og mest avanserte robotene kalles rovere. Roverne Curiosity og Perseverance har hjul og kjører rundt på overflaten for å ta bilder, gjøre målinger og lete etter tegn på at det har vært vann og kanskje mikroskopisk liv der for milliarder av år siden. De sender bildene og dataene tilbake til jorda via satellitter.</p><p>Å reise til Mars tar veldig lang tid. Med dagens raketter tar reisen omtrent sju til ni måneder hver vei, avhengig av hvor planetene befinner seg i banene sine. En av de største utfordringene for en fremtidig bemannet reise er å beskytte astronautene mot farlig stråling i verdensrommet, og å sørge for nok mat, vann og oksygen under den lange turen.</p>",
            question: "Hva består atmosfæren på Mars hovedsakelig av?",
            options: ["Oksygen", "Karbondioksid", "Nitrogen", "Helium"],
            correct: "Karbondioksid",
            explanation: "I teksten står det: '...en veldig tynn atmosfære som består av mest karbondioksid.'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Reise til Mars</h3><p>Mars er den fjerde planeten fra sola og kalles ofte «den røde planeten». Den røde fargen skyldes jernoksid, som egentlig er vanlig rust, i bakken og støvet. Mars er en kald og tørr ørkenverden med en veldig tynn atmosfære som består av mest karbondioksid. Fordi atmosfæren er så tynn, kan den ikke holde på varmen fra sola, og gjennomsnittstemperaturen på Mars er rundt minus 60 kuldegrader.</p><p>Mennesker har ennå ikke reist til Mars, men vi har sendt mange roboter dit. De nyeste og mest avanserte robotene kalles rovere. Roverne Curiosity og Perseverance har hjul og kjører rundt på overflaten for å ta bilder, gjøre målinger og lete etter tegn på at det har vært vann og kanskje mikroskopisk liv der for milliarder av år siden. De sender bildene og dataene tilbake til jorda via satellitter.</p><p>Å reise til Mars tar veldig lang tid. Med dagens raketter tar reisen omtrent sju til ni måneder hver vei, avhengig av hvor planetene befinner seg i banene sine. En av de største utfordringene for en fremtidig bemannet reise er å beskytte astronautene mot farlig stråling i verdensrommet, og å sørge for nok mat, vann og oksygen under den lange turen.</p>",
            question: "Hva er gjennomsnittstemperaturen på Mars?",
            options: ["Pluss 20 varmegrader", "Minus 10 kuldegrader", "Minus 60 kuldegrader", "Minus 120 kuldegrader"],
            correct: "Minus 60 kuldegrader",
            explanation: "Teksten opplyser: '...gjennomsnittstemperaturen på Mars er rundt minus 60 kuldegrader.'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Reise til Mars</h3><p>Mars er den fjerde planeten fra sola og kalles ofte «den røde planeten». Den røde fargen skyldes jernoksid, som egentlig er vanlig rust, i bakken og støvet. Mars er en kald og tørr ørkenverden med en very tynn atmosfære som består av mest karbondioksid. Fordi atmosfæren er så tynn, kan den ikke holde på varmen fra sola, og gjennomsnittstemperaturen på Mars er rundt minus 60 kuldegrader.</p><p>Mennesker har ennå ikke reist til Mars, men vi har sendt mange roboter dit. De nyeste og mest avanserte robotene kalles rovere. Roverne Curiosity og Perseverance har hjul og kjører rundt på overflaten for å ta bilder, gjøre målinger og lete etter tegn på at det har vært vann og kanskje mikroskopisk liv der for milliarder av år siden. De sender bildene og dataene tilbake til jorda via satellitter.</p><p>Å reise til Mars tar veldig lang tid. Med dagens raketter tar reisen omtrent sju til ni måneder hver vei, avhengig av hvor planetene befinner seg i banene sine. En av de største utfordringene for en fremtidig bemannet reise er å beskytte astronautene mot farlig stråling i verdensrommet, og å sørge for nok mat, vann og oksygen under den lange turen.</p>",
            question: "Har det vært mennesker på Mars?",
            options: ["Ja, flere astronauter har landet der", "Nei, mennesker har ennå ikke reist til Mars", "Ja, men bare i korte perioder på noen timer", "Ja, på 1960-tallet"],
            correct: "Nei, mennesker har ennå ikke reist til Mars",
            explanation: "Teksten slår fast: 'Mennesker har ennå ikke reist til Mars, men vi har sendt mange roboter dit.'"
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "<h3>Reise til Mars</h3><p>Mars er den fjerde planeten fra sola og kalles ofte «den røde planeten». Den røde fargen skyldes jernoksid, som egentlig er vanlig rust, i bakken og støvet. Mars er en kald og tørr ørkenverden med en veldig tynn atmosfære som består av mest karbondioksid. Fordi atmosfæren er så tynn, kan den ikke holde på varmen fra sola, og gjennomsnittstemperaturen på Mars er rundt minus 60 kuldegrader.</p><p>Mennesker har ennå ikke reist til Mars, men vi har sendt mange roboter dit. De nyeste og mest avanserte robotene kalles rovere. Roverne Curiosity og Perseverance har hjul og kjører rundt på overflaten for å ta bilder, gjøre målinger og lete etter tegn på at det har vært vann og kanskje mikroskopisk liv der for milliarder av år siden. De sender bildene og dataene tilbake til jorda via satellitter.</p><p>Å reise til Mars tar veldig lang tid. Med dagens raketter tar reisen omtrent sju til ni måneder hver vei, avhengig av hvor planetene befinner seg i banene sine. En av de største utfordringene for en fremtidig bemannet reise er å beskytte astronautene mot farlig stråling i verdensrommet, og å sørge for nok mat, vann og oksygen under den lange turen.</p>",
            question: "Hva heter to av de nyeste og mest kjente robotene på Mars?",
            options: ["Voyager og Apollo", "Curiosity og Perseverance", "Sputnik og Hubble", "Mars 1 og Mars 2"],
            correct: "Curiosity og Perseverance",
            explanation: "Teksten oppgir navnet på robotene: 'Roverne Curiosity og Perseverance har hjul og kjører rundt på overflaten...'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Reise til Mars</h3><p>Mars er den fjerde planeten fra sola og kalles ofte «den røde planeten». Den røde fargen skyldes jernoksid, som egentlig er vanlig rust, i bakken og støvet. Mars er en kald og tørr ørkenverden med en veldig tynn atmosfære som består av mest karbondioksid. Fordi atmosfæren er så tynn, kan den ikke holde på varmen fra sola, og gjennomsnittstemperaturen på Mars er rundt minus 60 kuldegrader.</p><p>Mennesker har ennå ikke reist til Mars, men vi har sendt mange roboter dit. De nyeste og mest avanserte robotene kalles rovere. Roverne Curiosity og Perseverance har hjul og kjører rundt på overflaten for å ta bilder, gjøre målinger og lete etter tegn på at det har vært vann og kanskje mikroskopisk liv der for milliarder av år siden. De sender bildene og dataene tilbake til jorda via satellitter.</p><p>Å reise til Mars tar veldig lang tid. Med dagens raketter tar reisen omtrent sju til ni måneder hver vei, avhengig av hvor planetene befinner seg i banene sine. En av de største utfordringene for en fremtidig bemannet reise er å beskytte astronautene mot farlig stråling i verdensrommet, og å sørge for nok mat, vann og oksygen under den lange turen.</p>",
            question: "Hvorfor undersøker robotene overflaten på Mars?",
            options: ["For å bygge hus til mennesker", "For å ta bilder, gjøre målinger og lete etter tegn på vann og liv", "For å hente gull og sølv", "For å starte en romstasjon"],
            correct: "For å ta bilder, gjøre målinger og lete etter tegn på vann og liv",
            explanation: "Ifølge teksten kjører de rundt 'for å ta bilder, gjøre målinger og lete etter tegn på at det har vært vann og kanskje mikroskopisk liv der'."
        },
        {
            level: 3,
            type: "multiple_choice",
            passage: "<h3>Reise til Mars</h3><p>Mars er den fjerde planeten fra sola og kalles ofte «den røde planeten». Den røde fargen skyldes jernoksid, som egentlig er vanlig rust, i bakken og støvet. Mars er en kald og tørr ørkenverden med en veldig tynn atmosfære som består av mest karbondioksid. Fordi atmosfæren er så tynn, kan den ikke holde på varmen fra sola, og gjennomsnittstemperaturen på Mars er rundt minus 60 kuldegrader.</p><p>Mennesker har ennå ikke reist til Mars, men vi har sendt mange roboter dit. De nyeste og mest avanserte robotene kalles rovere. Roverne Curiosity og Perseverance har hjul og kjører rundt på overflaten for å ta bilder, gjøre målinger og lete etter tegn på at det har vært vann og kanskje mikroskopisk liv der for milliarder av år siden. De sender bildene og dataene tilbake til jorda via satellitter.</p><p>Å reise til Mars tar veldig lang tid. Med dagens raketter tar reisen omtrent sju til ni måneder hver vei, avhengig av hvor planetene befinner seg i banene sine. En av de største utfordringene for en fremtidig bemannet reise er å beskytte astronautene mot farlig stråling i verdensrommet, og å sørge for nok mat, vann og oksygen under den lange turen.</p>",
            question: "Hvor lang tid tar en reise til Mars hver vei med dagens teknologi?",
            options: ["Sju til ni dager", "Sju til ni uker", "Sju til ni måneder", "Sju til ni år"],
            correct: "Sju til ni måneder",
            explanation: "Teksten opplyser: 'Med dagens raketter tar reisen omtrent sju til ni måneder hver vei...'"
        },
        {
            level: 3,
            type: "multiple_choice",
            passage: "<h3>Reise til Mars</h3><p>Mars er den fjerde planeten fra sola og kalles ofte «den røde planeten». Den røde fargen skyldes jernoksid, som egentlig er vanlig rust, i bakken og støvet. Mars er en kald og tørr ørkenverden med en veldig tynn atmosfære som består av mest karbondioksid. Fordi atmosfæren er så tynn, kan den ikke holde på varmen fra sola, og gjennomsnittstemperaturen på Mars er rundt minus 60 kuldegrader.</p><p>Mennesker har ennå ikke reist til Mars, men vi har sendt mange roboter dit. De nyeste og mest avanserte robotene kalles rovere. Roverne Curiosity og Perseverance har hjul og kjører rundt på overflaten for å ta bilder, gjøre målinger og lete etter tegn på at det har vært vann og kanskje mikroskopisk liv der for milliarder av år siden. De sender bildene og dataene tilbake til jorda via satellitter.</p><p>Å reise til Mars tar veldig lang tid. Med dagens raketter tar reisen omtrent sju til ni måneder hver vei, avhengig av hvor planetene befinner seg i banene sine. En av de største utfordringene for en fremtidig bemannet reise er å beskytte astronautene mot farlig stråling i verdensrommet, og å sørge for nok mat, vann og oksygen under den lange turen.</p>",
            question: "Hva er en av de største utfordringene for en fremtidig bemannet reise til Mars?",
            options: ["At veien er vanskelig å finne", "Å beskytte astronautene mot farlig stråling og sørge for nok mat, vann og oksygen", "At motoren må slås av i verdensrommet", "Å styre raketten forbi månen"],
            correct: "Å beskytte astronautene mot farlig stråling og sørge for nok mat, vann og oksygen",
            explanation: "Dette står i siste setning: 'En av de største utfordringene for en fremtidig bemannet reise er å beskytte astronautene mot farlig stråling... og å sørge for nok mat, vann og oksygen'."
        },
        {
            level: 3,
            type: "word_clicker",
            passage: "<h3>Reise til Mars</h3><p>Mars er den fjerde planeten fra sola og kalles ofte «den røde planeten». Den røde fargen skyldes jernoksid, som egentlig er vanlig rust, i bakken og støvet. Mars er en kald og tørr ørkenverden med en veldig tynn atmosfære som består av mest karbondioksid. Fordi atmosfæren er så tynn, kan den ikke holde på varmen fra sola, og gjennomsnittstemperaturen på Mars er rundt minus 60 kuldegrader.</p><p>Mennesker har ennå ikke reist til Mars, men vi har sendt mange roboter dit. De nyeste og mest avanserte robotene kalles rovere. Roverne Curiosity og Perseverance har hjul og kjører rundt på overflaten for å ta bilder, gjøre målinger og lete etter tegn på at det har vært vann og kanskje mikroskopisk liv der for milliarder av år siden. De sender bildene og dataene tilbake til jorda via satellitter.</p><p>Å reise til Mars tar veldig lang tid. Med dagens raketter tar reisen omtrent sju til ni måneder hver vei, avhengig av hvor planetene befinner seg i banene sine. En av de største utfordringene for en fremtidig bemannet reise er å beskytte astronautene mot farlig stråling i verdensrommet, og å sørge for nok mat, vann og oksygen under den lange turen.</p>",
            passageText: "Mars er en kald og tørr ørkenverden med en veldig tynn atmosfære som består av mest karbondioksid.",
            question: "Klikk på ordet i setningen over som betyr 'gasslaget som omgir en planet':",
            correct: "atmosfære",
            explanation: "Atmosfære er gasslaget som ligger rundt en planet."
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "<h3>Slik bygges en middelalderborg</h3><p>I middelalderen bygde konger og adelsmenn store borger av stein. Borgene fungerte både som trygge hjem og som sterke forsvarsverk mot fiender. Å bygge en slik borg var et enormt arbeid som tok mange år og krevde hundrevis av arbeidere, som steinbukkere, murere og tømrere.</p><p>Byggeprosessen startet alltid med å finne et egnet sted, gjerne på en høyde eller en klippe slik at det var lett å se fiender som nærmet seg. Det første arbeiderne gjorde på byggeplassen, var å grave en dyp vollgrav rundt området. Deretter fylte de vollgraven med vann hvis det var mulig. Rett innenfor vollgraven murte de opp en høy, tykk ringmur av stein. Ringmuren hadde skyteskår og tårn slik at forsvarerene kunne skyte med pil og bue i sikkerhet.</p><p>Helt til slutt bygde de det aller sikreste stedet i borgen: det store borgtårnet, også kalt «donjonen». Donjonen lage innerst og var det siste forsvarsverket hvis fienden klarte å bryte gjennom ringmuren. Borgtårnet hadde tykke steinvegger, og inngangen lå ofte i andre etasje med en stige som kunne trekkes opp, slik at det var nesten umulig for fiender å trenge inn.</p>",
            question: "Hvilken funksjon hadde en middelalderborg?",
            options: ["De var kun for lagring av korn", "De fungerte som trygge hjem og sterke forsvarsverk", "De var skoler for barn", "De ble brukt som markedsplasser"],
            correct: "De fungerte som trygge hjem og sterke forsvarsverk",
            explanation: "Teksten sier: 'Borgene fungerte både som trygge hjem og som sterke forsvarsverk mot fiender.'"
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "<h3>Slik bygges en middelalderborg</h3><p>I middelalderen bygde konger og adelsmenn store borger av stein. Borgene fungerte både som trygge hjem og som sterke forsvarsverk mot fiender. Å bygge en slik borg var et enormt arbeid som tok mange år og krevde hundrevis av arbeidere, som steinbukkere, murere og tømrere.</p><p>Byggeprosessen startet alltid med å finne et egnet sted, gjerne på en høyde eller en klippe slik at det var lett å se fiender som nærmet seg. Det første arbeiderne gjorde på byggeplassen, var å grave en dyp vollgrav rundt området. Deretter fylte de vollgraven med vann hvis det var mulig. Rett innenfor vollgraven murte de opp en høy, tykk ringmur av stein. Ringmuren hadde skyteskår og tårn slik at forsvarerene kunne skyte med pil og bue i sikkerhet.</p><p>Helt til slutt bygde de det aller sikreste stedet i borgen: det store borgtårnet, også kalt «donjonen». Donjonen lage innerst og var det siste forsvarsverket hvis fienden klarte å bryte gjennom ringmuren. Borgtårnet hadde tykke steinvegger, og inngangen lå ofte i andre etasje med en stige som kunne trekkes opp, slik at det var nesten umulig for fiender å trenge inn.</p>",
            question: "Hva slags byggemateriale ble hovedsakelig brukt til borgene?",
            options: ["Tre og halm", "Stein", "Jern og glass", "Betong"],
            correct: "Stein",
            explanation: "I starten står det: 'I middelalderen bygde konger og adelsmenn store borger av stein.'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Slik bygges en middelalderborg</h3><p>I middelalderen bygde konger og adelsmenn store borger av stein. Borgene fungerte både som trygge hjem og som sterke forsvarsverk mot fiender. Å bygge en slik borg var et enormt arbeid som tok mange år og krevde hundrevis av arbeidere, som steinbukkere, murere og tømrere.</p><p>Byggeprosessen startet alltid med å finne et egnet sted, gjerne på en høyde eller en klippe slik at det var lett å se fiender som nærmet seg. Det første arbeiderne gjorde på byggeplassen, var å grave en dyp vollgrav rundt området. Deretter fylte de vollgraven med vann hvis det var mulig. Rett innenfor vollgraven murte de opp en høy, tykk ringmur av stein. Ringmuren hadde skyteskår og tårn slik at forsvarerene kunne skyte med pil og bue i sikkerhet.</p><p>Helt til slutt bygde de det aller sikreste stedet i borgen: det store borgtårnet, også kalt «donjonen». Donjonen lage innerst og var det siste forsvarsverket hvis fienden klarte å bryte gjennom ringmuren. Borgtårnet hadde tykke steinvegger, og inngangen lå ofte i andre etasje med en stige som kunne trekkes opp, slik at det var nesten umulig for fiender å trenge inn.</p>",
            question: "Hvorfor bygde man ofte borgen på en høyde eller en klippe?",
            options: ["Fordi jorda var bedre der", "For at det skulle være lett å se fiender som nærmet seg", "Fordi det regnet mindre der", "For å være nærmere skyene"],
            correct: "For at det skulle være lett å se fiender som nærmet seg",
            explanation: "Teksten forklarer: '...gjerne på en høyde eller en klippe slik at det var lett å se fiender som nærmet seg.'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Slik bygges en middelalderborg</h3><p>I middelalderen bygde konger og adelsmenn store borger av stein. Borgene fungerte både som trygge hjem og som sterke forsvarsverk mot fiender. Å bygge en slik borg var et enormt arbeid som tok mange år og krevde hundrevis av arbeidere, som steinbukkere, murere og tømrere.</p><p>Byggeprosessen startet alltid med å finne et egnet sted, gjerne på en høyde eller en klippe slik at det var lett å se fiender som nærmet seg. Det første arbeiderne gjorde på byggeplassen, var å grave en dyp vollgrav rundt området. Deretter fylte de vollgraven med vann hvis det var mulig. Rett innenfor vollgraven murte de opp en høy, tykk ringmur av stein. Ringmuren hadde skyteskår og tårn slik at forsvarerene kunne skyte med pil og bue i sikkerhet.</p><p>Helt til slutt bygde de det aller sikreste stedet i borgen: det store borgtårnet, også kalt «donjonen». Donjonen lage innerst og var det siste forsvarsverket hvis fienden klarte å bryte gjennom ringmuren. Borgtårnet hadde tykke steinvegger, og inngangen lå ofte i andre etasje med en stige som kunne trekkes opp, slik at det var nesten umulig for fiender å trenge inn.</p>",
            question: "Hva var det første arbeiderne gjorde på byggeplassen?",
            options: ["Mure opp ringmuren", "Grave en dyp vollgrav", "Bygge borgtårnet", "Lage en trebro"],
            correct: "Grave en dyp vollgrav",
            explanation: "I andre avsnitt står det: 'Det første arbeiderne gjorde på byggeplassen, var å grave en dyp vollgrav rundt området.'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Slik bygges en middelalderborg</h3><p>I middelalderen bygde konger og adelsmenn store borger av stein. Borgene fungerte både som trygge hjem og som sterke forsvarsverk mot fiender. Å bygge en slik borg var et enormt arbeid som tok mange år og krevde hundrevis av arbeidere, som steinbukkere, murere og tømrere.</p><p>Byggeprosessen startet alltid med å finne et egnet sted, gjerne på en høyde eller en klippe slik at det var lett å se fiender som nærmet seg. Det første arbeiderne gjorde på byggeplassen, var å grave en dyp vollgrav rundt området. Deretter fylte de vollgraven med vann hvis det var mulig. Rett innenfor vollgraven murte de opp en høy, tykk ringmur av stein. Ringmuren hadde skyteskår og tårn slik at forsvarerene kunne skyte med pil og bue i sikkerhet.</p><p>Helt til slutt bygde de det aller sikreste stedet i borgen: det store borgtårnet, også kalt «donjonen». Donjonen lage innerst og var det siste forsvarsverket hvis fienden klarte å bryte gjennom ringmuren. Borgtårnet hadde tykke steinvegger, og inngangen lå ofte i andre etasje med en stige som kunne trekkes opp, slik at det var nesten umulig for fiender å trenge inn.</p>",
            question: "Hva gjorde de med vollgraven etter at den var gravd?",
            options: ["Fylte den med vann (hvis mulig)", "La tak over den", "Planted trær i den", "Fylte den med spisse steiner"],
            correct: "Fylte den med vann (hvis mulig)",
            explanation: "Teksten opplyser: 'Deretter fylte de vollgraven med vann hvis det var mulig.'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Slik bygges en middelalderborg</h3><p>I middelalderen bygde konger og adelsmenn store borger av stein. Borgene fungerte både som trygge hjem og som sterke forsvarsverk mot fiender. Å bygge en slik borg var et enormt arbeid som tok mange år og krevde hundrevis av arbeidere, som steinbukkere, murere og tømrere.</p><p>Byggeprosessen startet alltid med å finne et egnet sted, gjerne på en høyde eller en klippe slik at det var lett å se fiender som nærmet seg. Det første arbeiderne gjorde på byggeplassen, var å grave en dyp vollgrav rundt området. Deretter fylte de vollgraven med vann hvis det var mulig. Rett innenfor vollgraven murte de opp en høy, tykk ringmur av stein. Ringmuren hadde skyteskår og tårn slik at forsvarerene kunne skyte med pil og bue i sikkerhet.</p><p>Helt til slutt bygde de det aller sikreste stedet i borgen: det store borgtårnet, også kalt «donjonen». Donjonen lage innerst og var det siste forsvarsverket hvis fienden klarte å bryte gjennom ringmuren. Borgtårnet hadde tykke steinvegger, og inngangen lå ofte i andre etasje med en stige som kunne trekkes opp, slik at det var nesten umulig for fiender å trenge inn.</p>",
            question: "Hva var plassert rett innenfor vollgraven?",
            options: ["Det store borgtårnet", "En høy, tykk ringmur", "Kongens stall", "En grønnsakshage"],
            correct: "En høy, tykk ringmur",
            explanation: "Ifølge teksten: 'Rett innenfor vollgraven murte de opp en høy, tykk ringmur av stein.'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Slik bygges en middelalderborg</h3><p>I middelalderen bygde konger og adelsmenn store borger av stein. Borgene fungerte både som trygge hjem og som sterke forsvarsverk mot fiender. Å bygge en slik borg var et enormt arbeid som tok mange år og krevde hundrevis av arbeidere, som steinbukkere, murere og tømrere.</p><p>Byggeprosessen startet alltid med å finne et egnet sted, gjerne på en høyde eller en klippe slik at det var lett å se fiender som nærmet seg. Det første arbeiderne gjorde på byggeplassen, var å grave en dyp vollgrav rundt området. Deretter fylte de vollgraven med vann hvis det var mulig. Rett innenfor vollgraven murte de opp en høy, tykk ringmur av stein. Ringmuren hadde skyteskår og tårn slik at forsvarerene kunne skyte med pil og bue i sikkerhet.</p><p>Helt til slutt bygde de det aller sikreste stedet i borgen: det store borgtårnet, også kalt «donjonen». Donjonen lage innerst og var det siste forsvarsverket hvis fienden klarte å bryte gjennom ringmuren. Borgtårnet hadde tykke steinvegger, og inngangen lå ofte i andre etasje med en stige som kunne trekkes opp, slik at det var nesten umulig for fiender å trenge inn.</p>",
            question: "Hva ble bygget helt til slutt i prosessen?",
            options: ["Vollgraven", "Borgtårnet (donjonen)", "Ringmuren", "Portrommet"],
            correct: "Borgtårnet (donjonen)",
            explanation: "I tredje avsnitt står det: 'Helt til slutt bygde de det aller sikreste stedet i borgen: det store borgtårnet, også kalt «donjonen».'"
        },
        {
            level: 3,
            type: "multiple_choice",
            passage: "<h3>Slik bygges en middelalderborg</h3><p>I middelalderen bygde konger og adelsmenn store borger av stein. Borgene fungerte både som trygge hjem og som sterke forsvarsverk mot fiender. Å bygge en slik borg var et enormt arbeid som tok mange år og krevde hundrevis av arbeidere, som steinbukkere, murere og tømrere.</p><p>Byggeprosessen startet alltid med å finne et egnet sted, gjerne på en høyde eller en klippe slik at det var lett å se fiender som nærmet seg. Det første arbeiderne gjorde på byggeplassen, var å grave en dyp vollgrav rundt området. Deretter fylte de vollgraven med vann hvis det var mulig. Rett innenfor vollgraven murte de opp en høy, tykk ringmur av stein. Ringmuren hadde skyteskår og tårn slik at forsvarerene kunne skyte med pil og bue i sikkerhet.</p><p>Helt til slutt bygde de det aller sikreste stedet i borgen: det store borgtårnet, også kalt «donjonen». Donjonen lage innerst og var det siste forsvarsverket hvis fienden klarte å bryte gjennom ringmuren. Borgtårnet hadde tykke steinvegger, og inngangen lå ofte i andre etasje med en stige som kunne trekkes opp, slik at det var nesten umulig for fiender å trenge inn.</p>",
            question: "Hvorfor lå inngangen til borgtårnet ofte i andre etasje?",
            options: ["For å få bedre utsikt", "For at røyken fra kjøkkenet skulle slippe ut", "Fordi stigen kunne trekkes opp for å hindre fiender", "Fordi første etasje ble fylt med vann"],
            correct: "Fordi stigen kunne trekkes opp for å hindre fiender",
            explanation: "Teksten forklarer: '...inngangen lå ofte i andre etasje med en stige som kunne trekkes opp, slik at det var nesten umulig for fiender å trenge inn.'"
        },
        {
            level: 3,
            type: "sorting",
            passage: "<h3>Slik bygges en middelalderborg</h3><p>I middelalderen bygde konger og adelsmenn store borger av stein. Borgene fungerte både som trygge hjem og som sterke forsvarsverk mot fiender. Å bygge en slik borg var et enormt arbeid som tok mange år og krevde hundrevis av arbeidere, som steinbukkere, murere og tømrere.</p><p>Byggeprosessen startet alltid med å finne et egnet sted, gjerne på en høyde eller en klippe slik at det var lett å se fiender som nærmet seg. Det første arbeiderne gjorde på byggeplassen, var å grave en dyp vollgrav rundt området. Deretter fylte de vollgraven med vann hvis det var mulig. Rett innenfor vollgraven murte de opp en høy, tykk ringmur av stein. Ringmuren hadde skyteskår og tårn slik at forsvarerene kunne skyte med pil og bue i sikkerhet.</p><p>Helt til slutt bygde de det aller sikreste stedet i borgen: det store borgtårnet, også kalt «donjonen». Donjonen lage innerst og var det siste forsvarsverket hvis fienden klarte å bryte gjennom ringmuren. Borgtårnet hadde tykke steinvegger, og inngangen lå ofte i andre etasje med en stige som kunne trekkes opp, slik at det var nesten umulig for fiender å trenge inn.</p>",
            question: "Sorter byggetrinnene under i riktig kronologisk rekkefølge fra start (til venstre) til slutt (til høyre):",
            options: ["Bygge ringmuren", "Finne et egnet sted", "Bygge borgtårnet (donjonen)", "Grave en dyp vollgrav"],
            correct: ["Finne et egnet sted", "Grave en dyp vollgrav", "Bygge ringmuren", "Bygge borgtårnet (donjonen)"],
            explanation: "Byggingen startet med å finne et sted, deretter grave vollgrav, så mure ringmuren, og helt til slutt bygge det indre borgtårnet."
        },
        {
            level: 3,
            type: "word_clicker",
            passage: "<h3>Slik bygges en middelalderborg</h3><p>I middelalderen bygde konger og adelsmenn store borger av stein. Borgene fungerte både som trygge hjem og som sterke forsvarsverk mot fiender. Å bygge en slik borg var et enormt arbeid som tok mange år og krevde hundrevis av arbeidere, som steinbukkere, murere og tømrere.</p><p>Byggeprosessen startet alltid med å finne et egnet sted, gjerne på en høyde eller en klippe slik at det var lett å se fiender som nærmet seg. Det første arbeiderne gjorde på byggeplassen, var å grave en dyp vollgrav rundt området. Deretter fylte de vollgraven med vann hvis det var mulig. Rett innenfor vollgraven murte de opp en høy, tykk ringmur av stein. Ringmuren hadde skyteskår og tårn slik at forsvarerene kunne skyte med pil og bue i sikkerhet.</p><p>Helt til slutt bygde de det aller sikreste stedet i borgen: det store borgtårnet, også kalt «donjonen». Donjonen lage innerst og var det siste forsvarsverket hvis fienden klarte å bryte gjennom ringmuren. Borgtårnet hadde tykke steinvegger, og inngangen lå ofte i andre etasje med en stige som kunne trekkes opp, slik at det var nesten umulig for fiender å trenge inn.</p>",
            passageText: "Deretter fylte de vollgraven med vann hvis det var mulig.",
            question: "Klikk på ordet i setningen over som betyr 'grøft rundt en borg':",
            correct: "vollgraven",
            explanation: "En vollgrav er en dyp grøft gravd rundt en borg for å beskytte mot angrep."
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "<h3>Detektivklubben og den forsvunne hunden</h3><p>Klara og Sebastian hadde startet sin egen detektivklubb, «Super-snokene». De hadde et eget kontor i trehytta i hagen to Klara, utstyrt med forstørrelsesglass, notatbøker og walkietalkier. En tirsdag ettermiddag kom naboen, fru Hansen, gråtende bort til gjerdet. Hennes lille, hvite puddel Bella var borte. Hun hadde sluppet henne ut i hagen en halvtime tidligere, og nå var porten åpen og Bella vekk.</p><p>Detektivene startet etterforskningen umiddelbart. Først undersøkte de porten og oppdaget en bit av en blå strikket ulltråd som hang fast i en spiker på portstolpen. Dette var det første sporet! Klara noterte det ned, mens Sebastian tok bilde med telefonen sin. Deretter gikk de nedover gaten for å se etter vitner eller flere spor. Utenfor matbutikken møtte de Postmannen Thomas, som kunne fortelle at han hadde sett en gutt med en blå strikkelue som leide en liten hvit hund i retning parken.</p><p>Detektivene løp spent bort til parken. Ved den store andedammen oppdaget de en gutt med en blå lue. Ved siden av ham satt Bella og spiste på en kjeks. Gutten ble forskrekket da detektivene konfronterte ham, men forklarte fort at han bare hadde funnet Bella gående alene langs veien. Han hadde tatt henne med til parken for å passe på henne mens han prøvde å finne eieren. Klara og Sebastian ringte fru Hansen, og noen minutter senere var Bella trygt gjenforent med sin glade eier.</p>",
            question: "Hva kalles detektivklubben til Klara og Sebastian?",
            options: ["Detektiv-klanen", "Super-snokene", "Hundesnuserne", "Tjafse-patruljen"],
            correct: "Super-snokene",
            explanation: "Første setning sier: 'Klara og Sebastian hadde startet sin egen detektivklubb, «Super-snokene»'."
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "<h3>Detektivklubben og den forsvunne hunden</h3><p>Klara og Sebastian hadde startet sin egen detektivklubb, «Super-snokene». De hadde et eget kontor i trehytta i hagen til Klara, utstyrt med forstørrelsesglass, notatbøker og walkietalkier. En tirsdag ettermiddag kom naboen, fru Hansen, gråtende bort til gjerdet. Hennes lille, hvite puddel Bella var borte. Hun hadde sluppet henne ut i hagen en halvtime tidligere, og nå var porten åpen og Bella vekk.</p><p>Detektivene startet etterforskningen umiddelbart. Først undersøkte de porten og oppdaget en bit av en blå strikket ulltråd som hang fast i en spiker på portstolpen. Dette var det første sporet! Klara noterte det ned, mens Sebastian tok bilde med telefonen sin. Deretter gikk de nedover gaten for å se etter vitner eller flere spor. Utenfor matbutikken møtte de Postmannen Thomas, som kunne fortelle at han hadde sett en gutt med en blå strikkelue som leide en liten hvit hund i retning parken.</p><p>Detektivene løp spent bort til parken. Ved den store andedammen oppdaget de en gutt med en blå lue. Ved siden av ham satt Bella og spiste på en kjeks. Gutten ble forskrekket da detektivene konfronterte ham, men forklarte fort at han bare hadde funnet Bella gående alene langs veien. Han hadde tatt henne med til parken for å passe på henne mens han prøvde å finne eieren. Klara og Sebastian ringte fru Hansen, og noen minutter senere var Bella trygt gjenforent med sin glade eier.</p>",
            question: "Hvor hadde detektivene kontoret sitt?",
            options: ["I kjelleren hos Sebastian", "I trehytta i hagen til Klara", "I garasjen til fru Hansen", "På skolen"],
            correct: "I trehytta i hagen til Klara",
            explanation: "Teksten opplyser: 'De hadde et eget kontor i trehytta i hagen til Klara...'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Detektivklubben og den forsvunne hunden</h3><p>Klara og Sebastian hadde startet sin egen detektivklubb, «Super-snokene». De hadde et eget kontor i trehytta i hagen til Klara, utstyrt med forstørrelsesglass, notatbøker og walkietalkier. En tirsdag ettermiddag kom naboen, fru Hansen, gråtende bort til gjerdet. Hennes lille, hvite puddel Bella var borte. Hun hadde sluppet henne ut i hagen en halvtime tidligere, og nå var porten åpen og Bella vekk.</p><p>Detektivene startet etterforskningen umiddelbart. Først undersøkte de porten og oppdaget en bit av en blå strikket ulltråd som hang fast i en spiker på portstolpen. Dette var det første sporet! Klara noterte det ned, mens Sebastian tok bilde med telefonen sin. Deretter gikk de nedover gaten for å se etter vitner eller flere spor. Utenfor matbutikken møtte de Postmannen Thomas, som kunne fortelle at han hadde sett en gutt med en blå strikkelue som leide en liten hvit hund i retning parken.</p><p>Detektivene løp spent bort til parken. Ved den store andedammen oppdaget de en gutt med en blå lue. Ved siden av ham satt Bella og spiste på en kjeks. Gutten ble forskrekket da detektivene konfronterte ham, men forklarte fort at han bare hadde funnet Bella gående alene langs veien. Han hadde tatt henne med til parken for å passe på henne mens han prøvde å finne eieren. Klara og Sebastian ringte fru Hansen, og noen minutter senere var Bella trygt gjenforent med sin glade eier.</p>",
            question: "Hva slags hund hadde fru Hansen mistet?",
            options: ["En stor schæfer", "En liten, hvit puddel", "En brun dachs", "En gyllen retriever"],
            correct: "En liten, hvit puddel",
            explanation: "Teksten beskriver hunden: 'Hennes lille, hvite puddel Bella var borte.'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Detektivklubben og den forsvunne hunden</h3><p>Klara og Sebastian hadde startet sin egen detektivklubb, «Super-snokene». De hadde et eget kontor i trehytta i hagen til Klara, utstyrt med forstørrelsesglass, notatbøker og walkietalkier. En tirsdag ettermiddag kom naboen, fru Hansen, gråtende bort til gjerdet. Hennes lille, hvite puddel Bella var borte. Hun hadde sluppet henne ut i hagen en halvtime tidligere, og nå var porten åpen og Bella vekk.</p><p>Detektivene startet etterforskningen umiddelbart. Først undersøkte de porten og oppdaget en bit av en blå strikket ulltråd som hang fast i en spiker på portstolpen. Dette var det første sporet! Klara noterte det ned, mens Sebastian tok bilde med telefonen sin. Deretter gikk de nedover gaten for å se etter vitner eller flere spor. Utenfor matbutikken møtte de Postmannen Thomas, som kunne fortelle at han hadde sett en gutt med en blå strikkelue som leide en liten hvit hund i retning parken.</p><p>Detektivene løp spent bort til parken. Ved den store andedammen oppdaget de en gutt med en blå lue. Ved siden av ham satt Bella og spiste på en kjeks. Gutten ble forskrekket da detektivene konfronterte ham, men forklarte fort at han bare hadde funnet Bella gående alene langs veien. Han hadde tatt henne med til parken for å passe på henne mens han prøvde å finne eieren. Klara og Sebastian ringte fru Hansen, og noen minutter senere var Bella trygt gjenforent med sin glade eier.</p>",
            question: "Hva var det første sporet detektivene oppdaget på portstolpen?",
            options: ["Et fotspor i gjørma", "En bit av en blå strikket ulltråd", "En mistet lue", "En tyggis"],
            correct: "En bit av en blå strikket ulltråd",
            explanation: "Det står i andre avsnitt: '...og oppdaget en bit av en blå strikket ulltråd som hang fast i en spiker på portstolpen.'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Detektivklubben og den forsvunne hunden</h3><p>Klara og Sebastian hadde startet sin egen detektivklubb, «Super-snokene». De hadde et eget kontor i trehytta i hagen til Klara, utstyrt med forstørrelsesglass, notatbøker og walkietalkier. En tirsdag ettermiddag kom naboen, fru Hansen, gråtende bort til gjerdet. Hennes lille, hvite puddel Bella var borte. Hun hadde sluppet henne ut i hagen en halvtime tidligere, og nå var porten åpen og Bella vekk.</p><p>Detektivene startet etterforskningen umiddelbart. Først undersøkte de porten og oppdaget en bit av en blå strikket ulltråd som hang fast i en spiker på portstolpen. Dette var det første sporet! Klara noterte det ned, mens Sebastian tok bilde med telefonen sin. Deretter gikk de nedover gaten for å se etter vitner eller flere spor. Utenfor matbutikken møtte de Postmannen Thomas, som kunne fortelle at han hadde sett en gutt med en blå strikkelue som leide en liten hvit hund i retning parken.</p><p>Detektivene løp spent bort til parken. Ved den store andedammen oppdaget de en gutt med en blå lue. Ved siden av ham satt Bella og spiste på en kjeks. Gutten ble forskrekket da detektivene konfronterte ham, men forklarte fort at han bare hadde funnet Bella gående alene langs veien. Han hadde tatt henne med til parken for å passe på henne mens han prøvde å finne eieren. Klara og Sebastian ringte fru Hansen, og noen minutter senere var Bella trygt gjenforent med sin glade eier.</p>",
            question: "Hvem møtte detektivene utenfor matbutikken?",
            options: ["En politimann", "Postmannen Thomas", "En klassekamerat", "Fru Hansens datter"],
            correct: "Postmannen Thomas",
            explanation: "Teksten sier: 'Utenfor matbutikken møtte de Postmannen Thomas...'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Detektivklubben og den forsvunne hunden</h3><p>Klara og Sebastian hadde startet sin egen detektivklubb, «Super-snokene». De hadde et eget kontor i trehytta i hagen til Klara, utstyrt med forstørrelsesglass, notatbøker og walkietalkier. En tirsdag ettermiddag kom naboen, fru Hansen, gråtende bort til gjerdet. Hennes lille, hvite puddel Bella var borte. Hun hadde sluppet henne ut i hagen en halvtime tidligere, og nå var porten åpen og Bella vekk.</p><p>Detektivene startet etterforskningen umiddelbart. Først undersøkte de porten og oppdaget en bit av en blå strikket ulltråd som hang fast i en spiker på portstolpen. Dette var det første sporet! Klara noterte det ned, mens Sebastian tok bilde med telefonen sin. Deretter gikk de nedover gaten for å se etter vitner eller flere spor. Utenfor matbutikken møtte de Postmannen Thomas, som kunne fortelle at han hadde sett en gutt med en blå strikkelue som leide en liten hvit hund i retning parken.</p><p>Detektivene løp spent bort til parken. Ved den store andedammen oppdaget de en gutt med en blå lue. Ved siden av ham satt Bella og spiste på en kjeks. Gutten ble forskrekket da detektivene konfronterte ham, men forklarte fort at han bare hadde funnet Bella gående alene langs veien. Han hadde tatt henne med til parken for å passe på henne mens han prøvde å finne eieren. Klara og Sebastian ringte fru Hansen, og noen minutter senere var Bella trygt gjenforent med sin glade eier.</p>",
            question: "Hva hadde postmannen sett?",
            options: ["En hund som løp etter en katt", "En gutt med en blå strikkelue som leide en hvit hund", "En rød sykkel i veikanten", "Ingenting spesielt"],
            correct: "En gutt med en blå strikkelue som leide en hvit hund",
            explanation: "Thomas fortalte 'at han hadde sett en gutt med en blå strikkelue som leide en liten hvit hund i retning parken'."
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Detektivklubben og den forsvunne hunden</h3><p>Klara og Sebastian hadde startet sin egen detektivklubb, «Super-snokene». De hadde et eget kontor i trehytta i hagen til Klara, utstyrt med forstørrelsesglass, notatbøker og walkietalkier. En tirsdag ettermiddag kom naboen, fru Hansen, gråtende bort til gjerdet. Hennes lille, hvite puddel Bella var borte. Hun hadde sluppet henne ut i hagen en halvtime tidligere, og nå var porten åpen og Bella vekk.</p><p>Detektivene startet etterforskningen umiddelbart. Først undersøkte de porten og oppdaget en bit av en blå strikket ulltråd som hang fast i en spiker på portstolpen. Dette var det første sporet! Klara noterte det ned, mens Sebastian tok bilde med telefonen sin. Deretter gikk de nedover gaten for å se etter vitner eller flere spor. Utenfor matbutikken møtte de Postmannen Thomas, som kunne fortelle at han hadde sett en gutt med en blå strikkelue som leide en liten hvit hund i retning parken.</p><p>Detektivene løp spent bort til parken. Ved den store andedammen oppdaget de en gutt med en blå lue. Ved siden av ham satt Bella og spiste på en kjeks. Gutten ble forskrekket da detektivene konfronterte ham, men forklarte fort at han bare hadde funnet Bella gående alene langs veien. Han hadde tatt henne med til parken for å passe på henne mens han prøvde å finne eieren. Klara og Sebastian ringte fru Hansen, og noen minutter senere var Bella trygt gjenforent med sin glade eier.</p>",
            question: "Hvor i parken fant de Bella og gutten?",
            options: ["Bak den store lekeplassen", "Ved den store andedammen", "Under en stor eik", "Ved fotballbanen"],
            correct: "Ved den store andedammen",
            explanation: "Teksten forteller: 'Ved den store andedammen oppdaget de en gutt med en blå lue. Ved siden av ham satt Bella...'"
        },
        {
            level: 3,
            type: "multiple_choice",
            passage: "<h3>Detektivklubben og den forsvunne hunden</h3><p>Klara og Sebastian hadde startet sin egen detektivklubb, «Super-snokene». De hadde et eget kontor i trehytta i hagen til Klara, utstyrt med forstørrelsesglass, notatbøker og walkietalkier. En tirsdag ettermiddag kom naboen, fru Hansen, gråtende bort til gjerdet. Hennes lille, hvite puddel Bella var borte. Hun hadde sluppet henne ut i hagen en halvtime tidligere, og nå var porten åpen og Bella vekk.</p><p>Detektivene startet etterforskningen umiddelbart. Først undersøkte de porten og oppdaget en bit av en blå strikket ulltråd som hang fast i en spiker på portstolpen. Dette var det første sporet! Klara noterte det ned, mens Sebastian tok bilde med telefonen sin. Deretter gikk de nedover gaten for å se etter vitner eller flere spor. Utenfor matbutikken møtte de Postmannen Thomas, som kunne fortelle at han hadde sett en gutt med en blå strikkelue som leide en liten hvit hund i retning parken.</p><p>Detektivene løp spent bort til parken. Ved den store andedammen oppdaget de en gutt med en blå lue. Ved siden av ham satt Bella og spiste på en kjeks. Gutten ble forskrekket da detektivene konfronterte ham, men forklarte fort at han bare hadde funnet Bella gående alene langs veien. Han hadde tatt henne med til parken for å passe på henne mens han prøvde å finne eieren. Klara og Sebastian ringte fru Hansen, og noen minutter senere var Bella trygt gjenforent med sin glade eier.</p>",
            question: "Hvorfor hadde gutten tatt med seg Bella til parken?",
            options: ["For å stjele henne", "For å passe på henne mens han prøvde å finne eieren", "For å lære henne triks", "For å selge henne"],
            correct: "For å passe på henne mens han prøvde å finne eieren",
            explanation: "Gutten forklarte 'at han bare hadde funnet Bella gående alene langs veien. Han hadde tatt henne med til parken for å passe på henne mens han prøvde å finne eieren.'"
        },
        {
            level: 3,
            type: "sorting",
            passage: "<h3>Detektivklubben og den forsvunne hunden</h3><p>Klara og Sebastian hadde startet sin egen detektivklubb, «Super-snokene». De hadde et eget kontor i trehytta i hagen til Klara, utstyrt med forstørrelsesglass, notatbøker og walkietalkier. En tirsdag ettermiddag kom naboen, fru Hansen, gråtende bort til gjerdet. Hennes lille, hvite puddel Bella var borte. Hun hadde sluppet henne ut i hagen en halvtime tidligere, og nå var porten åpen og Bella vekk.</p><p>Detektivene startet etterforskningen umiddelbart. Først undersøkte de porten og oppdaget en bit av en blå strikket ulltråd som hang fast i en spiker på portstolpen. Dette var det første sporet! Klara noterte det ned, mens Sebastian tok bilde med telefonen sin. Deretter gikk de nedover gaten for å se etter vitner eller flere spor. Utenfor matbutikken møtte de Postmannen Thomas, som kunne fortelle at han hadde sett en gutt med en blå strikkelue som leide en liten hvit hund i retning parken.</p><p>Detektivene løp spent bort til parken. Ved den store andedammen oppdaget de en gutt med en blå lue. Ved siden av ham satt Bella og spiste på en kjeks. Gutten ble forskrekket da detektivene konfronterte ham, men forklarte fort at han bare hadde funnet Bella gående alene langs veien. Han hadde tatt henne med til parken for å passe på henne mens han prøvde å finne eieren. Klara og Sebastian ringte fru Hansen, og noen minutter senere var Bella trygt gjenforent med sin glade eier.</p>",
            question: "Sorter hendelsene under i kronologisk rekkefølge fra først (til venstre) til sist (til høyre):",
            options: ["Finne Bella i parken", "Finne en blå ulltråd på porten", "Fru Hansen forteller om hunden", "Snakke med Postmannen Thomas"],
            correct: ["Fru Hansen forteller om hunden", "Finne en blå ulltråd på porten", "Snakke med Postmannen Thomas", "Finne Bella i parken"],
            explanation: "Først kom fru Hansen for å si ifra, så undersøkte de porten (ulltråden), deretter snakket de med postmannen, og til slutt fant de Bella i parken."
        },
        {
            level: 3,
            type: "word_clicker",
            passage: "<h3>Detektivklubben og den forsvunne hunden</h3><p>Klara og Sebastian hadde startet sin egen detektivklubb, «Super-snokene». De hadde et eget kontor i trehytta i hagen til Klara, utstyrt med forstørrelsesglass, notatbøker og walkietalkier. En tirsdag ettermiddag kom naboen, fru Hansen, gråtende bort til gjerdet. Hennes lille, hvite puddel Bella var borte. Hun hadde sluppet henne ut i hagen en halvtime tidligere, og nå var porten åpen og Bella vekk.</p><p>Detektivene startet etterforskningen umiddelbart. Først undersøkte de porten og oppdaget en bit av en blå strikket ulltråd som hang fast i en spiker på portstolpen. Dette var det første sporet! Klara noterte det ned, mens Sebastian tok bilde med telefonen sin. Deretter gikk de nedover gaten for å se etter vitner eller flere spor. Utenfor matbutikken møtte de Postmannen Thomas, som kunne fortelle at han hadde sett en gutt med en blå strikkelue som leide en liten hvit hund i retning parken.</p><p>Detektivene løp spent bort til parken. Ved den store andedammen oppdaget de en gutt med en blå lue. Ved siden av ham satt Bella og spiste på en kjeks. Gutten ble forskrekket da detektivene konfronterte ham, men forklarte fort at han bare hadde funnet Bella gående alene langs veien. Han hadde tatt henne med til parken for å passe på henne mens han prøvde å finne eieren. Klara og Sebastian ringte fru Hansen, og noen minutter senere var Bella trygt gjenforent med sin glade eier.</p>",
            passageText: "Detektivene startet etterforskningen umiddelbart.",
            question: "Klikk på ordet i setningen over som betyr 'med en gang' eller 'uten opphold':",
            correct: "umiddelbart",
            explanation: "Umiddelbart betyr med en gang, direkte eller uten forsinkelse."
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "<h3>Superenkle sjokoladekjeks</h3><p>Det er koselig å bake, og disse sjokoladekjeksene er både kjempegode og enkle å lage. Før du begynner å blande ingrediensene, må du huske å forvarme stekeovnen til 180 grader. Da blir ovnen varm nok til at kjeksene steker jevnt med en gang de settes inn.</p><p>Du trenger følgende ingredienser: 100 gram romtemperert smør, 1 desiliter sukker, 1 egg, 2,5 desiliter hvetemel, 1 teskje bakepulver og 100 gram hakket kokesjokolade. Først pisker du smør og sukker sammen til en luftig blanding. Deretter rører du inn egget. I en annen bolle blander du hvetemel og bakepulver, før du har dette oppi smørblandingen og rører godt. Til slutt vender du forsiktig inn den hakkede kokesjokoladen med en sleiv.</p><p>Bruk en spiseskje og sett deigen i små klatter på en stekeplate dekket med bakepapir. Pass på å ha litt avstand mellom klattene, for kjeksene vil flyte utover under stekingen. Stek kjeksene midt i ovnen i 10 til 12 minutter, til de er lysebrune i kantene. La dem avkjøles på en rist i fem minutter før du spiser dem – da blir de deilig sprø på utsiden og myke inni.</p>",
            question: "Hva må du gjøre aller først, før du blander ingrediensene?",
            options: ["Piske egget stivt", "Forvarme stekeovnen til 180 grader", "Hakke kokesjokoladen", "Sette deigen på stekeplaten"],
            correct: "Forvarme stekeovnen til 180 grader",
            explanation: "Teksten sier: 'Før du begynner å blande ingrediensene, må du huske å forvarme stekeovnen til 180 grader.'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Superenkle sjokoladekjeks</h3><p>Det er koselig å bake, og disse sjokoladekjeksene er både kjempegode og enkle å lage. Før du begynner å blande ingrediensene, må du huske å forvarme stekeovnen til 180 grader. Da blir ovnen varm nok til at kjeksene steker jevnt med en gang de settes inn.</p><p>Du trenger følgende ingredienser: 100 gram romtemperert smør, 1 desiliter sukker, 1 egg, 2,5 desiliter hvetemel, 1 teskje bakepulver og 100 gram hakket kokesjokolade. Først pisker du smør og sukker sammen til en luftig blanding. Deretter rører du inn egget. I en annen bolle blander du hvetemel og bakepulver, før du har dette oppi smørblandingen og rører godt. Til slutt vender du forsiktig inn den hakkede kokesjokoladen med en sleiv.</p><p>Bruk en spiseskje og sett deigen i små klatter på en stekeplate dekket med bakepapir. Pass på å ha litt avstand mellom klattene, for kjeksene vil flyte utover under stekingen. Stek kjeksene midt i ovnen i 10 til 12 minutter, til de er lysebrune i kantene. La dem avkjøles på en rist i fem minutter før du spiser dem – da blir de deilig sprø på utsiden og myke inni.</p>",
            question: "Hvorfor må du forvarme ovnen?",
            options: ["For at deigen ikke skal smelte på benken", "Slik at kjeksene steker jevnt med en gang de settes inn", "For å spare strøm", "For at kjeksene skal bli helt svarte"],
            correct: "Slik at kjeksene steker jevnt med en gang de settes inn",
            explanation: "Teksten forklarer: 'Da blir ovnen varm nok til at kjeksene steker jevnt med en gang de settes inn.'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Superenkle sjokoladekjeks</h3><p>Det er koselig å bake, og disse sjokoladekjeksene er både kjempegode og enkle å lage. Før du begynner å blande ingrediensene, må du huske å forvarme stekeovnen til 180 grader. Da blir ovnen varm nok til at kjeksene steker jevnt med en gang de settes inn.</p><p>Du trenger følgende ingredienser: 100 gram romtemperert smør, 1 desiliter sukker, 1 egg, 2,5 desiliter hvetemel, 1 teskje bakepulver og 100 gram hakket kokesjokolade. Først pisker du smør og sukker sammen til en luftig blanding. Deretter rører du inn egget. I en annen bolle blander du hvetemel og bakepulver, før du har dette oppi smørblandingen og rører godt. Til slutt vender du forsiktig inn den hakkede kokesjokoladen med en sleiv.</p><p>Bruk en spiseskje og sett deigen i små klatter på en stekeplate dekket med bakepapir. Pass på å ha litt avstand mellom klattene, for kjeksene vil flyte utover under stekingen. Stek kjeksene midt i ovnen i 10 til 12 minutter, til de er lysebrune i kantene. La dem avkjøles på en rist i fem minutter før du spiser dem – da blir de deilig sprø på utsiden og myke inni.</p>",
            question: "Hvor mye smør trenger du til denne oppskriften?",
            options: ["50 gram", "100 gram", "150 gram", "200 gram"],
            correct: "100 gram",
            explanation: "Under ingredienser står det: '100 gram romtemperert smør'."
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Superenkle sjokoladekjeks</h3><p>Det er koselig å bake, og disse sjokoladekjeksene er både kjempegode og enkle å lage. Før du begynner å blande ingrediensene, må du huske å forvarme stekeovnen til 180 grader. Da blir ovnen varm nok til at kjeksene steker jevnt med en gang de settes inn.</p><p>Du trenger følgende ingredienser: 100 gram romtemperert smør, 1 desiliter sukker, 1 egg, 2,5 desiliter hvetemel, 1 teskje bakepulver og 100 gram hakket kokesjokolade. Først pisker du smør og sukker sammen til en luftig blanding. Deretter rører du inn egget. I en annen bolle blander du hvetemel og bakepulver, før du har dette oppi smørblandingen og rører godt. Til slutt vender du forsiktig inn den hakkede kokesjokoladen med en sleiv.</p><p>Bruk en spiseskje og sett deigen i små klatter på en stekeplate dekket med bakepapir. Pass på å ha litt avstand mellom klattene, for kjeksene vil flyte utover under stekingen. Stek kjeksene midt i ovnen i 10 til 12 minutter, til de er lysebrune i kantene. La dem avkjøles på en rist i fem minutter før du spiser dem – da blir de deilig sprø på utsiden og myke inni.</p>",
            question: "Hvilken ingrediens skal piskes sammen med smøret først?",
            options: ["Hvetemel", "Bakepulver", "Sukker", "Kokesjokolade"],
            correct: "Sukker",
            explanation: "Instruksjonen lyder: 'Først pisker du smør og sukker sammen til en luftig blanding.'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Superenkle sjokoladekjeks</h3><p>Det er koselig å bake, og disse sjokoladekjeksene er både kjempegode og enkle å lage. Før du begynner å blande ingrediensene, må du huske å forvarme stekeovnen til 180 grader. Da blir ovnen varm nok til at kjeksene steker jevnt med en gang de settes inn.</p><p>Du trenger følgende ingredienser: 100 gram romtemperert smør, 1 desiliter sukker, 1 egg, 2,5 desiliter hvetemel, 1 teskje bakepulver og 100 gram hakket kokesjokolade. Først pisker du smør og sukker sammen til en luftig blanding. Deretter rører du inn egget. I en annen bolle blander du hvetemel og bakepulver, før du har dette oppi smørblandingen og rører godt. Til slutt vender du forsiktig inn den hakkede kokesjokoladen med en sleiv.</p><p>Bruk en spiseskje og sett deigen i små klatter på en stekeplate dekket med bakepapir. Pass på å ha litt avstand mellom klattene, for kjeksene vil flyte utover under stekingen. Stek kjeksene midt i ovnen i 10 til 12 minutter, til de er lysebrune i kantene. La dem avkjøles på en rist i fem minutter før du spiser dem – da blir de deilig sprø på utsiden og myke inni.</p>",
            question: "Når skal kokesjokoladen tilsettes i deigen?",
            options: ["Aller først sammen med smøret", "Helt til slutt, etter at melet er rørt inn", "Samtidig med egget", "Etter at kjeksene er stekt"],
            correct: "Helt til slutt, etter at melet er rørt inn",
            explanation: "Det står i teksten: 'Til slutt vender du forsiktig inn den hakkede kokesjokoladen med en sleiv.'"
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "<h3>Superenkle sjokoladekjeks</h3><p>Det er koselig å bake, og disse sjokoladekjeksene er både kjempegode og enkle å lage. Før du begynner å blande ingrediensene, må du huske å forvarme stekeovnen til 180 grader. Da blir ovnen varm nok til at kjeksene steker jevnt med en gang de settes inn.</p><p>Du trenger følgende ingredienser: 100 gram romtemperert smør, 1 desiliter sukker, 1 egg, 2,5 desiliter hvetemel, 1 teskje bakepulver og 100 gram hakket kokesjokolade. Først pisker du smør og sukker sammen til en luftig blanding. Deretter rører du inn egget. I en annen bolle blander du hvetemel og bakepulver, før du har dette oppi smørblandingen og rører godt. Til slutt vender du forsiktig inn den hakkede kokesjokoladen med en sleiv.</p><p>Bruk en spiseskje og sett deigen i små klatter på en stekeplate dekket med bakepapir. Pass på å ha litt avstand mellom klattene, for kjeksene vil flyte utover under stekingen. Stek kjeksene midt i ovnen i 10 til 12 minutter, til de er lysebrune i kantene. La dem avkjøles på en rist i fem minutter før du spiser dem – da blir de deilig sprø på utsiden og myke inni.</p>",
            question: "Hva bør du dekke stekeplaten med før du legger på deigen?",
            options: ["Aluminiumsfolie", "Bakepapir", "Ingenting", "Smør og sukker"],
            correct: "Bakepapir",
            explanation: "Teksten spesifiserer: '...sett deigen i små klatter på en stekeplate dekket med bakepapir.'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Superenkle sjokoladekjeks</h3><p>Det er koselig å bake, og disse sjokoladekjeksene er både kjempegode og enkle å lage. Før du begynner å blande ingrediensene, må du huske å forvarme stekeovnen til 180 grader. Da blir ovnen varm nok til at kjeksene steker jevnt med en gang de settes inn.</p><p>Du trenger følgende ingredienser: 100 gram romtemperert smør, 1 desiliter sukker, 1 egg, 2,5 desiliter hvetemel, 1 teskje bakepulver og 100 gram hakket kokesjokolade. Først pisker du smør og sukker sammen til en luftig blanding. Deretter rører du inn egget. I en annen bolle blander du hvetemel og bakepulver, før du har dette oppi smørblandingen og rører godt. Til slutt vender du forsiktig inn den hakkede kokesjokoladen med en sleiv.</p><p>Bruk en spiseskje og sett deigen i små klatter på en stekeplate dekket med bakepapir. Pass på å ha litt avstand mellom klattene, for kjeksene vil flyte utover under stekingen. Stek kjeksene midt i ovnen i 10 til 12 minutter, til de er lysebrune i kantene. La dem avkjøles på en rist i fem minutter før du spiser dem – da blir de deilig sprø på utsiden og myke inni.</p>",
            question: "Hvorfor må du ha avstand mellom deigklattene på stekeplaten?",
            options: ["For at de ikke skal brenne seg", "Fordi kjeksene flyter utover under stekingen", "For at det skal se ryddigere ut", "Slik at de steker saktere"],
            correct: "Fordi kjeksene flyter utover under stekingen",
            explanation: "Teksten opplyser: 'Pass på å ha litt avstand mellom klattene, for kjeksene vil flyte utover under stekingen.'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Superenkle sjokoladekjeks</h3><p>Det er koselig å bake, og disse sjokoladekjeksene er både kjempegode og enkle å lage. Før du begynner å blande ingrediensene, må du huske å forvarme stekeovnen til 180 grader. Da blir ovnen varm nok til at kjeksene steker jevnt med en gang de settes inn.</p><p>Du trenger følgende ingredienser: 100 gram romtemperert smør, 1 desiliter sukker, 1 egg, 2,5 desiliter hvetemel, 1 teskje bakepulver og 100 gram hakket kokesjokolade. Først pisker du smør og sukker sammen til en luftig blanding. Deretter rører du inn egget. I en annen bolle blander du hvetemel og bakepulver, før du har dette oppi smørblandingen og rører godt. Til slutt vender du forsiktig inn den hakkede kokesjokoladen med en sleiv.</p><p>Bruk en spiseskje og sett deigen i små klatter på en stekeplate dekket med bakepapir. Pass på å ha litt avstand mellom klattene, for kjeksene vil flyte utover under stekingen. Stek kjeksene midt i ovnen i 10 til 12 minutter, til de er lysebrune i kantene. La dem avkjøles på en rist i fem minutter før du spiser dem – da blir de deilig sprø på utsiden og myke inni.</p>",
            question: "Hvor lenge skal kjeksene steke i ovnen?",
            options: ["5 til 8 minutter", "10 til 12 minutter", "15 til 20 minutter", "En halvtime"],
            correct: "10 til 12 minutter",
            explanation: "Det står i teksten: 'Stek kjeksene midt i ovnen i 10 til 12 minutter...'"
        },
        {
            level: 3,
            type: "multiple_choice",
            passage: "<h3>Superenkle sjokoladekjeks</h3><p>Det er koselig å bake, og disse sjokoladekjeksene er både kjempegode og enkle å lage. Før du begynner å blande ingrediensene, må du huske å forvarme stekeovnen til 180 grader. Da blir ovnen varm nok til at kjeksene steker jevnt med en gang de settes inn.</p><p>Du trenger følgende ingredienser: 100 gram romtemperert smør, 1 desiliter sukker, 1 egg, 2,5 desiliter hvetemel, 1 teskje bakepulver og 100 gram hakket kokesjokolade. Først pisker du smør og sukker sammen til en luftig blanding. Deretter rører du inn egget. I en annen bolle blander du hvetemel og bakepulver, før du har dette oppi smørblandingen og rører godt. Til slutt vender du forsiktig inn den hakkede kokesjokoladen med en sleiv.</p><p>Bruk en spiseskje og sett deigen i små klatter på en stekeplate dekket med bakepapir. Pass på å ha litt avstand mellom klattene, for kjeksene vil flyte utover under stekingen. Stek kjeksene midt i ovnen i 10 til 12 minutter, til de er lysebrune i kantene. La dem avkjøles på en rist i fem minutter før du spiser dem – da blir de deilig sprø på utsiden og myke inni.</p>",
            question: "Hvorfor bør kjeksene avkjøles på en rist i 5 minutter?",
            options: ["For at de ikke skal være for varme å holde i", "For at de skal bli sprø på utsiden og myke inni", "For at sjokoladen skal stivne helt", "For at de skal krympe"],
            correct: "For at de skal bli sprø på utsiden og myke inni",
            explanation: "Teksten avslutter med: 'La dem avkjøles på en rist i fem minutter... da blir de deilig sprø på utsiden og myke inni.'"
        },
        {
            level: 3,
            type: "word_clicker",
            passage: "<h3>Superenkle sjokoladekjeks</h3><p>Det er koselig å bake, og disse sjokoladekjeksene er både kjempegode og enkle å lage. Før du begynner å blande ingrediensene, må du huske å forvarme stekeovnen til 180 grader. Da blir ovnen varm nok til at kjeksene steker jevnt med en gang de settes inn.</p><p>Du trenger følgende ingredienser: 100 gram romtemperert smør, 1 desiliter sukker, 1 egg, 2,5 desiliter hvetemel, 1 teskje bakepulver og 100 gram hakket kokesjokolade. Først pisker du smør og sukker sammen til en luftig blanding. Deretter rører du inn egget. I en annen bolle blander du hvetemel og bakepulver, før du har dette oppi smørblandingen og rører godt. Til slutt vender du forsiktig inn den hakkede kokesjokoladen med en sleiv.</p><p>Bruk en spiseskje og sett deigen i små klatter på en stekeplate dekket med bakepapir. Pass på å ha litt avstand mellom klattene, for kjeksene vil flyte utover under stekingen. Stek kjeksene midt i ovnen i 10 til 12 minutter, til de er lysebrune i kantene. La dem avkjøles på en rist i fem minutter før du spiser dem – da blir de deilig sprø på utsiden og myke inni.</p>",
            passageText: "Før du begynner å blande ingrediensene, må du huske å forvarme stekeovnen til 180 grader.",
            question: "Klikk på ordet i setningen over som betyr 'varme opp ovnen på forhånd':",
            correct: "forvarme",
            explanation: "Å forvarme betyr å varme opp ovnen på forhånd, før maten settes inn."
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "<h3>Sikker på nett – «Nettvett»</h3><p>Internett gir oss tilgang til utrolig mye gøy og nyttig informasjon, men det er også viktig å huske på sikkerheten. Å ha godt nettvett betyr å beskytte seg selv og andre når man er på mobilen eller PC-en. En av de viktigste reglene handler om passord. Et sterkt passord bør inneholde både store og små bokstaver, tall og spesialtegn (som for eksempel ropetegn eller spørsmålstegn). Du må aldri dele passordene dine med andre enn foreldrene dine – ikke en gang med dine beste venner.</p><p>En annen viktig del av nettvett handler om personvern og deling av bilder. Før du deler et bilde av en annen person på nett, må du alltid spørre om lov først. Dette gjelder uansett om det er et bilde av en venn, en søsken eller en lærer. Det er ulovlig å dele bilder av andre uten samtykke. Du bør også være forsiktig med å legge ut personlige opplysninger, som telefonnummeret ditt eller adressen der du bor, på åpne nettsider.</p><p>Til slutt må du huske å være en god venn på nett. Det er lett å si eller skrive ting i en chat som kan oppfattes sårende, fordi man ikke ser ansiktet eller hører stemmen til den man snakker med. Hvis du opplever noe ubehagelig eller ser mobbing på nett, bør du alltid fortelle det to en voksen du stoler på, som en forelder eller en lærer på skolen.</p>",
            question: "Hva betyr det å ha godt 'nettvett'?",
            options: ["Å vite hvordan man programmerer en datamaskin", "Å beskytte seg selv og andre når man bruker internett", "Å bruke internett hele dagen uten pauser", "Å kjøpe dyre spill på nettet"],
            correct: "Å beskytte seg selv og andre når man bruker internett",
            explanation: "Teksten definerer: 'Å ha godt nettvett betyr å beskytte seg selv og andre når man er på mobilen eller PC-en.'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Sikker på nett – «Nettvett»</h3><p>Internett gir oss tilgang til utrolig mye gøy og nyttig informasjon, men det er også viktig å huske på sikkerheten. Å ha godt nettvett betyr å beskytte seg selv og andre når man er på mobilen eller PC-en. En av de viktigste reglene handler om passord. Et sterkt passord bør inneholde både store og små bokstaver, tall og spesialtegn (som for eksempel ropetegn eller spørsmålstegn). Du må aldri dele passordene dine med andre enn foreldrene dine – ikke en gang med dine beste venner.</p><p>En annen viktig del av nettvett handler om personvern og deling av bilder. Før du deler et bilde av en annen person på nett, må du alltid spørre om lov først. Dette gjelder uansett om det er et bilde av en venn, en søsken eller en lærer. Det er ulovlig å dele bilder av andre uten samtykke. Du bør også være forsiktig med å legge ut personlige opplysninger, som telefonnummeret ditt eller adressen der du bor, på åpne nettsider.</p><p>Til slutt må du huske å være en god venn på nett. Det er lett å si eller skrive ting i en chat som kan oppfattes sårende, fordi man ikke ser ansiktet eller hører stemmen til den man snakker med. Hvis du opplever noe ubehagelig eller ser mobbing på nett, bør du alltid fortelle det til en voksen du stoler på, som en forelder eller en lærer på skolen.</p>",
            question: "Hvilke tegn bør et sterkt passord inneholde?",
            options: ["Bare små bokstaver", "Bare tall og navnet ditt", "Store og små bokstaver, tall og spesialtegn", "Kun spesialtegn"],
            correct: "Store og små bokstaver, tall og spesialtegn",
            explanation: "Teksten forklarer: 'Et sterkt passord bør inneholde både store og små bokstaver, tall og spesialtegn...'"
        },
        {
            level: 1,
            type: "multiple_choice",
            passage: "<h3>Sikker på nett – «Nettvett»</h3><p>Internett gir oss tilgang til utrolig mye gøy og nyttig informasjon, men det er også viktig å huske på sikkerheten. Å ha godt nettvett betyr å beskytte seg selv og andre når man er på mobilen eller PC-en. En av de viktigste reglene handler om passord. Et sterkt passord bør inneholde både store og små bokstaver, tall og spesialtegn (som for eksempel ropetegn eller spørsmålstegn). Du må aldri dele passordene dine med andre enn foreldrene dine – ikke en gang med dine beste venner.</p><p>En annen viktig del av nettvett handler om personvern og deling av bilder. Før du deler et bilde av en annen person på nett, må du alltid spørre om lov først. Dette gjelder uansett om det er et bilde av en venn, en søsken eller en lærer. Det er ulovlig å dele bilder av andre uten samtykke. Du bør også være forsiktig med å legge ut personlige opplysninger, som telefonnummeret ditt eller adressen der du bor, på åpne nettsider.</p><p>Til slutt må du huske å være en god venn på nett. Det er lett å si eller skrive ting i en chat som kan oppfattes sårende, fordi man ikke ser ansiktet eller hører stemmen til den man snakker med. Hvis du opplever noe ubehagelig eller ser mobbing på nett, bør du alltid fortelle det til en voksen du stoler på, som en forelder eller en lærer på skolen.</p>",
            question: "Hvem er de eneste du kan dele passordene dine med?",
            options: ["Bestevennene dine", "Foreldrene dine", "Læreren din", "Ingen i hele verden"],
            correct: "Foreldrene dine",
            explanation: "Det står i teksten: 'Du må aldri dele passordene dine med andre enn foreldrene dine...'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Sikker på nett – «Nettvett»</h3><p>Internett gir oss tilgang til utrolig mye gøy og nyttig informasjon, men det er også viktig å huske på sikkerheten. Å ha godt nettvett betyr å beskytte seg selv og andre når man er på mobilen eller PC-en. En av de viktigste reglene handler om passord. Et sterkt passord bør inneholde både store og små bokstaver, tall og spesialtegn (som for eksempel ropetegn eller spørsmålstegn). Du må aldri dele passordene dine med andre enn foreldrene dine – ikke en gang med dine beste venner.</p><p>En annen viktig del av nettvett handler om personvern og deling av bilder. Før du deler et bilde av en annen person på nett, må du alltid spørre om lov først. Dette gjelder uansett om det er et bilde av en venn, en søsken eller en lærer. Det er ulovlig å dele bilder av andre uten samtykke. Du bør også være forsiktig med å legge ut personlige opplysninger, som telefonnummeret ditt eller adressen der du bor, på åpne nettsider.</p><p>Til slutt må du huske å være en god venn på nett. Det er lett å si eller skrive ting i en chat som kan oppfattes sårende, fordi man ikke ser ansiktet eller hører stemmen til den man snakker med. Hvis du opplever noe ubehagelig eller ser mobbing på nett, bør du alltid fortelle det til en voksen du stoler på, som en forelder eller en lærer på skolen.</p>",
            question: "Hva må du alltid gjøre før du deler et bilde av en annen person på nett?",
            options: ["Redigere bildet så det ser morsomt ut", "Spørre personen om lov først", "Sende bildet til foreldrene dine", "Legge til en lang tekst under bildet"],
            correct: "Spørre personen om lov først",
            explanation: "Teksten sier direkte: 'Før du deler et bilde av en annen person på nett, må du alltid spørre om lov først.'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Sikker på nett – «Nettvett»</h3><p>Internett gir oss tilgang til utrolig mye gøy og nyttig informasjon, men det er også viktig å huske på sikkerheten. Å ha godt nettvett betyr å beskytte seg selv og andre når man er på mobilen eller PC-en. En av de viktigste reglene handler om passord. Et sterkt passord bør inneholde både store og små bokstaver, tall og spesialtegn (som for eksempel ropetegn eller spørsmålstegn). Du må aldri dele passordene dine med andre enn foreldrene dine – ikke en gang med dine beste venner.</p><p>En annen viktig del av nettvett handler om personvern og deling av bilder. Før du deler et bilde av en annen person på nett, må du alltid spørre om lov først. Dette gjelder uansett om det er et bilde av en venn, en søsken eller en lærer. Det er ulovlig å dele bilder av andre uten samtykke. Du bør også være forsiktig med å legge ut personlige opplysninger, som telefonnummeret ditt eller adressen der du bor, på åpne nettsider.</p><p>Til slutt må du huske å være en god venn på nett. Det er lett å si eller skrive ting i en chat som kan oppfattes sårende, fordi man ikke ser ansiktet eller hører stemmen til den man snakker med. Hvis du opplever noe ubehagelig eller ser mobbing på nett, bør du alltid fortelle det til en voksen du stoler på, som en forelder eller en lærer på skolen.</p>",
            question: "Hvilken informasjon bør du unngå å dele på åpne nettsider?",
            options: ["Hva du liker å spise til middag", "Telefonnummeret eller adressen din", "Hvilke spill du liker best", "At du liker hunder"],
            correct: "Telefonnummeret eller adressen din",
            explanation: "Ifølge teksten: 'Du bør også være forsiktig med å legge ut personlige opplysninger, som telefonnummeret ditt eller adressen der du bor...'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Sikker på nett – «Nettvett»</h3><p>Internett gir oss tilgang til utrolig mye gøy og nyttig informasjon, men det er også viktig å huske på sikkerheten. Å ha godt nettvett betyr å beskytte seg selv og andre når man er på mobilen eller PC-en. En av de viktigste reglene handler om passord. Et sterkt passord bør inneholde både store og små bokstaver, tall og spesialtegn (som for eksempel ropetegn eller spørsmålstegn). Du må aldri dele passordene dine med andre enn foreldrene dine – ikke en gang med dine beste venner.</p><p>En annen viktig del av nettvett handler om personvern og deling av bilder. Før du deler et bilde av en annen person på nett, må du alltid spørre om lov først. Dette gjelder uansett om det er et bilde av en venn, en søsken eller en lærer. Det er ulovlig å dele bilder av andre uten samtykke. Du bør også være forsiktig med å legge ut personlige opplysninger, som telefonnummeret ditt eller adressen der du bor, på åpne nettsider.</p><p>Til slutt må du huske å være en god venn på nett. Det er lett å si eller skrive ting i en chat som kan oppfattes sårende, fordi man ikke ser ansiktet eller hører stemmen til den man snakker med. Hvis du opplever noe ubehagelig eller ser mobbing på nett, bør du alltid fortelle det til en voksen du stoler på, som en forelder eller en lærer på skolen.</p>",
            question: "Hvorfor er det lett at meldinger i en chat kan oppfattes sårende?",
            options: ["Fordi bokstavene er for små", "Fordi man ikke ser ansiktet eller hører stemmen til den andre", "Fordi internett er for tregt", "Fordi man skriver for fort"],
            correct: "Fordi man ikke ser ansiktet eller hører stemmen til den andre",
            explanation: "Teksten sier: 'Det er lett å si eller skrive ting i en chat som kan oppfattes sårende, fordi man ikke ser ansiktet eller hører stemmen til den man snakker med.'"
        },
        {
            level: 2,
            type: "multiple_choice",
            passage: "<h3>Sikker på nett – «Nettvett»</h3><p>Internett gir oss tilgang til utrolig mye gøy og nyttig informasjon, men det er også viktig å huske på sikkerheten. Å ha godt nettvett betyr å beskytte seg selv og andre når man er på mobilen eller PC-en. En av de viktigste reglene handler om passord. Et sterkt passord bør inneholde både store og små bokstaver, tall og spesialtegn (som for eksempel ropetegn eller spørsmålstegn). Du må aldri dele passordene dine med andre enn foreldrene dine – ikke en gang med dine beste venner.</p><p>En annen viktig del av nettvett handler om personvern og deling av bilder. Før du deler et bilde av en annen person på nett, må du alltid spørre om lov først. Dette gjelder uansett om det er et bilde av en venn, en søsken eller en lærer. Det er ulovlig å dele bilder av andre uten samtykke. Du bør også være forsiktig med å legge ut personlige opplysninger, som telefonnummeret ditt eller adressen der du bor, på åpne nettsider.</p><p>Til slutt må du huske å være en god venn på nett. Det er lett å si eller skrive ting i en chat som kan oppfattes sårende, fordi man ikke ser ansiktet eller hører stemmen til den man snakker med. Hvis du opplever noe ubehagelig eller ser mobbing på nett, bør du always fortelle det til en voksen du stoler på, som en forelder eller en lærer på skolen.</p>",
            question: "Hva bør du gjøre hvis du opplever noe ubehagelig eller ser mobbing på nett?",
            options: ["Slette chatten og late som ingenting skjedde", "Skrive noe slemt tilbake", "Alltid fortelle det til en voksen du stoler på", "Slå av PC-en og aldri bruke den igjen"],
            correct: "Alltid fortelle det til en voksen du stoler på",
            explanation: "Teksten råder: 'Hvis du opplever noe ubehagelig eller ser mobbing på nett, bør du alltid fortelle det til en voksen du stoler på...'"
        },
        {
            level: 3,
            type: "matrix",
            passage: "<h3>Sikker på nett – «Nettvett»</h3><p>Internett gir oss tilgang til utrolig mye gøy og nyttig informasjon, men det er også viktig å huske på sikkerheten. Å ha godt nettvett betyr å beskytte seg selv og andre når man er på mobilen eller PC-en. En av de viktigste reglene handler om passord. Et sterkt passord bør inneholde både store og små bokstaver, tall og spesialtegn (som for eksempel ropetegn eller spørsmålstegn). Du må aldri dele passordene dine med andre enn foreldrene dine – ikke en gang med dine beste venner.</p><p>En annen viktig del av nettvett handler om personvern og deling av bilder. Før du deler et bilde av en annen person på nett, må du alltid spørre om lov først. Dette gjelder uansett om det er et bilde av en venn, en søsken eller en lærer. Det er ulovlig å dele bilder av andre uten samtykke. Du bør også være forsiktig med å legge ut personlige opplysninger, som telefonnummeret ditt eller adressen der du bor, på åpne nettsider.</p><p>Til slutt må du huske å være en god venn på nett. Det er lett å si eller skrive ting i en chat som kan oppfattes sårende, fordi man ikke ser ansiktet eller hører stemmen til den man snakker med. Hvis du opplever noe ubehagelig eller ser mobbing på nett, bør du alltid fortelle det til en voksen du stoler på, som en forelder eller en lærer på skolen.</p>",
            question: "Vurder om påstandene om deling på nett er riktige eller gale:",
            matrixRows: [
                { text: "Det er ulovlig å dele bilder av andre uten samtykke.", correct: "Riktig" },
                { text: "Du kan fritt dele adressen din på alle åpne nettforum.", correct: "Galt" },
                { text: "Et passord som '12345' regnes som et sterkt passord.", correct: "Galt" }
            ],
            explanation: "Bilder krever samtykke. Personlige opplysninger bør ikke deles åpent. Enkle tallsekvenser er svake passord."
        },
        {
            level: 3,
            type: "sorting",
            passage: "<h3>Sikker på nett – «Nettvett»</h3><p>Internett gir oss tilgang til utrolig mye gøy og nyttig informasjon, men det er også viktig å huske på sikkerheten. Å ha godt nettvett betyr å beskytte seg selv og andre når man er på mobilen eller PC-en. En av de viktigste reglene handler om passord. Et sterkt passord bør inneholde både store og små bokstaver, tall og spesialtegn (som for eksempel ropetegn eller spørsmålstegn). Du må aldri dele passordene dine med andre enn foreldrene dine – ikke en gang med dine beste venner.</p><p>En annen viktig del av nettvett handler om personvern og deling av bilder. Før du deler et bilde av en annen person på nett, må du alltid spørre om lov først. Dette gjelder uansett om det er et bilde av en venn, en søsken eller en lærer. Det er ulovlig å dele bilder av andre uten samtykke. Du bør også være forsiktig med å legge ut personlige opplysninger, som telefonnummeret ditt eller adressen der du bor, på åpne nettsider.</p><p>Til slutt må du huske å være en god venn på nett. Det er lett å si eller skrive ting i en chat som kan oppfattes sårende, fordi man ikke ser ansiktet eller hører stemmen til den man snakker med. Hvis du opplever noe ubehagelig eller ser mobbing på nett, bør du alltid fortelle det til en voksen du stoler på, som en forelder eller en lærer på skolen.</p>",
            question: "Sorter disse passordene fra det svakeste (til venstre) til det sterkeste (til høyre) basert på nettvettreglene:",
            options: ["Fotball123", "Fotball", "F0tb@ll!23", "123456"],
            correct: ["123456", "Fotball", "Fotball123", "F0tb@ll!23"],
            explanation: "Kun tall (svakest) ➔ kun bokstaver ➔ bokstaver og tall ➔ store/små bokstaver, tall og spesialtegn (sterkest)."
        },
        {
            level: 3,
            type: "word_clicker",
            passage: "<h3>Sikker på nett – «Nettvett»</h3><p>Internett gir oss tilgang til utrolig mye gøy og nyttig informasjon, men det er også viktig å huske på sikkerheten. Å ha godt nettvett betyr å beskytte seg selv og andre når man er på mobilen eller PC-en. En av de viktigste reglene handler om passord. Et sterkt passord bør inneholde både store og små bokstaver, tall og spesialtegn (som for eksempel ropetegn eller spørsmålstegn). Du må aldri dele passordene dine med andre enn foreldrene dine – ikke en gang med dine beste venner.</p><p>En annen viktig del av nettvett handler om personvern og deling av bilder. Før du deler et bilde av en annen person på nett, må du always spørre om lov først. Dette gjelder uansett om det er et bilde av en venn, en søsken eller en lærer. Det er ulovlig å dele bilder av andre uten samtykke. Du bør også være forsiktig med å legge ut personlige opplysninger, som telefonnummeret ditt eller adressen der du bor, på åpne nettsider.</p><p>Til slutt må du huske å være en god venn på nett. Det er lett å si eller skrive ting i en chat som kan oppfattes sårende, fordi man ikke ser ansiktet eller hører stemmen til den man snakker med. Hvis du opplever noe ubehagelig eller ser mobbing på nett, bør du alltid fortelle det til en voksen du stoler på, som en forelder eller en lærer på skolen.</p>",
            passageText: "En annen viktig del av nettvett handler om personvern og deling av bilder.",
            question: "Klikk på ordet i setningen over som betyr 'beskyttelse av personlige opplysninger':",
            correct: "personvern",
            explanation: "Personvern handler om å beskytte eget privatliv og egne opplysninger."
        }
    ]
};
