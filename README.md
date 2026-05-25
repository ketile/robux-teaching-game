# Robux Bank - Nasjonale Prøver for 5. trinn 🚀

Et engasjerende, kawaii-stilisert læringsspill utviklet for å hjelpe elever på 5. trinn med å forberede seg til de nasjonale prøvene i **Regning**, **Engelsk** og **Lesing**.

Spillet bruker et motiverende belønningssystem der eleven tjener «Robux» til sin personlige bankkonto ved å svare riktig på oppgaver og bygge opp svar-streaks!

---

## 🌟 Funksjoner

### 1. Tre primærfag (150 oppgaver totalt)
*   **Regning (50 oppgaver)**: Tallforståelse, geometri, måling (tid, enhetsbytter), statistikk, kombinatorikk, og regnerekkefølge. Matematikkoppgavene har en pedagogisk, steg-for-steg-basert forklaring som vises når eleven svarer feil.
*   **Engelsk (50 oppgaver)**: Lytteforståelse (med innebygd engelsk tekst-til-tale), grammatikk, vokabular, preposisjoner og kortere leseforståelsestekster.
*   **Lesing (50 oppgaver)**: Basert på 5 lengre, Udir-lignende tekster i ulike sjangre (fakta, naturfag, skjønnlitteratur, instruksjoner, trafikkregler). Inkluderer tekstmarkering («word clicker») og kronologisk sortering.

### 2. Spillmoduser
*   **Øvingsmodus**: Eleven får umiddelbar tilbakemelding etter hver oppgave. Ved feil svar vises en detaljert pedagogisk forklaring.
*   **Prøvemodus**: Simulerer en reell nasjonal prøve med en tidsbegrensning på 15 minutter. Resultater og fasit blir først synlige etter at prøven er levert.

### 3. Brukervennlig og Responsivt Design
*   Tilpasset for både iPad (liggende) og desktop, helt uten behov for vertikal rulling av selve siden.
*   En fast, flytende bunnbar (iOS-style glassmorphism) holder alle fremdriftskontroller og navigasjonsknapper.
*   Enkel påloggingsflyt som husker forrige bruker lokalt, slik at man slipper å skrive inn navn hver gang.

### 4. Foreldre-innstillinger
*   Eget passordfritt admin-panel der foreldre kan se statistikk over opptjente Robux og registrere utbetalinger (når eleven f.eks. får ekte Robux kjøpt som belønning for innsatsen).

---

## 🛠️ Teknisk Stack

Dette prosjektet er bygget 100 % som en lettvektig, statisk webapplikasjon:
*   **HTML5** og **Vanilla CSS3** (med Google Fonts og FontAwesome-ikoner).
*   **Vanilla JavaScript (ES6+)**.
*   **Web Audio API** for innebygde lydeffekter (fanfarer og myntlyder generert programmatisk).
*   **Web Speech Synthesis API** for engelsk lytteforståelse.
*   **Lokal lagring (localStorage)** for å ta vare på elevprofiler og Robux-saldo uten behov for ekstern database.
*   *Forberedt for Firebase*: Enkelt å koble til en ekte Firestore-database via `firebase-config.js` for synkronisering på tvers av enheter.

---

## 🚀 Kom i gang lokalt

Siden spillet er bygget uten eksterne rammeverk eller byggesteg, er det superenkelte å starte:
1.  Last ned eller klon dette repositoriet.
2.  Dobbeltklikk på `index.html` for å åpne spillet direkte i din foretrukne nettleser (Chrome anbefales for best støtte av Speech Synthesis-stemmer).
3.  Skriv inn navnet ditt, og du er i gang!
