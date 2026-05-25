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
        }
    ]
};
