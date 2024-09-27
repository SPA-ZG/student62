# projekt6

# prije pokretanja pokrenuti npm install

# za lokalno pokretanje pokrenuti npm run serve

1. interpolation/one-way binding - Da, interpolacija je vidljiva na nekoliko mjesta, ali istaknuo bih stranicu
   koja prikazuje UFC kalkulator. Interpolacija se radi kod prikaza kategorije i prvaka. U kodu se može naći u
   src -> components -> UfcCalculator.vue (linija 37). Vidljiva je i kod prikaza mase (linija 31). Može se naći
   i drugdje u kodu, ali ovo su samo reprezentativni primjeri. One-way binding vidljiv je u komponenti koja prikazuje
   jedan NBA tim kod prikaza slike grba tima. U kodu vidljivo u src -> components -> NbaTeam.vue (linija 5).
2. two-way binding - Da, prisutno u komponenti UfcCalculator. Korisnik unosi masu u kilogramima ili funtama (lbs), a vrijednost
   tih varijabli se automatski ažurira. U kodu vidljivo u src -> components -> UfcCalculator.vue (linija 8 i linija 21). Inače u
   aplikaciji, ovo se vidi na stranici UFC kategorije.
3. methods - Da, u komponenti UfcCalculator implementirane su metode za pretvorbu kilograma u funte i obrnuto.
   U kodu vidljivo u src -> components -> UfcCalculator.vue (linija 53).
4. computed properties - Da, u komponenti UfcCalculator implementirano je izračunavanje kategorije i njezinih prvaka na temelju
   mase koja je unesena. U kodu vidljivo u src -> components -> UfcCalculator.vue (linija 61).
5. barem jedan scoped style - Da, na stranici koja prikazuje NBA ekipe, implementiran je scoped style koji
   stranicu organizira u grid layout. U kodu vidljivo u src -> views -> NbaTeamsView.vue (linija 29)
6. koristiti barem jedan lifecycle hook - Da, u komponenti ClockComponent koja prikazuje trenutno vrijeme je ovo
   implementirano. Slično kao na predavanjima, koristi se mounted hook koja nakon što se stranica učita u DOM pokreće
   prikaz vremena svake sekunde. U kodu vidljivo u src -> components -> ClockComponent.vue (linija 12). U aplikaciji se
   vrijeme prikazuje stalno.

7. routing (više stranica) - Da, postoji root stranica, ali i stranice /teams, /ufc, /darts te jedna koja prihvaća
   sve ostale zahtjeve (catch all). Routing je inače vidljiv u src -> router -> index.js

8. (barem) dvije komponente - Da. Komponenta bez stanja je ona koja služi za prikaz NBA ekipe. Ona ima properties pomoću kojih se
   dohvaća slika grba, ime ekipe i trener ekipe. U kodu src -> components -> NbaTeam.vue (linija 16). Komponenta sa stanjem je
   view koji prikazuje sve NBA ekipe. Lokalno ima spremljene NBA ekipe u svojom data svojstvu. U kodu src -> views -> NbaTeamsView.vue
   (linija 21).

9. barem jedna komponenta mora emitirati barem jedan event - Da. Na stranici UFC kategorije, nakon unosa mase u bilo
   kojoj jedinici i nakon pritiska tipke Enter, pokreće se preračunavanje mase između mjernih jedinica. U kodu src -> components
   -> UfcCalculator (linija 11 i linija 24).

10. store (Pinia) - Da. U aplikacija, stranica koja prikazuje pikado igrače demonstrira Pinia store. U datoteci src -> stores
    -> darts.js definiran je Pinia store s podacima, getterima i metodom za ažuriranje bodova i broja pobjeda za igrače.
    Na stranici za prikaz pikado igrača se onda može inkrementirati broj pobjeda, poraza i remija za svakog igrača, a pomoću
    Pinia storea se izračunava njegov broj bodova i broj pobjeda ukupno. U kodu src -> views -> DartsView.vue.

11. asinkroni dohvat podataka s backenda - Da. Stranica koja prikazuje NBA ekipe koristi asinkroni dohvat podataka o ekipama.
    To se može vidjeti u DeveloperToolsima u kartici Network. Nakon otvaranja kartice Network i učitavanja stranice uz brisanje
    cache memorije (Ctrl + Shift + R), vidljivo je da se dohvaćaju svi resursi osim onih potrebnih na stranici NBA ekipe.
    Ti se podaci dohvaćaju tek ako se poželi otvoriti ta stranica. U kodu vidljivo u datoteci main.js (linija 8).
