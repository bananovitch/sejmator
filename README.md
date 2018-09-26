## Sejmator

Aplikacja stworzona przy pomocy create-react-app w celu nauki. Korzysta z [publicznego API o nazwie "Sejmometr"](https://mojepanstwo.pl/api/sejmometr).

## 21 days of code

### Dzień 1
Postanowiłem wziąć udział w wyzwaniu 21 days of code. Na razie zaczynam od nowego Readme :) Niby nic, ale dokumentacja do podstawa, no i przy okazji wreszcie nauczyłem się korzystać z Markdowna. Jak już się z nim zaznajomiłem, żałuję że nie zrobiłem tego wcześniej.

Postanowiłem wziąc dzisiaj na tapetę testy komponentu RepsTable.js, który odpowiada za pobieranie danych. Chciałem napisać test mockujący zapytanie HTTP. 

Na samym początku zauwazyłem że jeden z innych testów - sprawdzający komponent `RepsTableDumb` - nie przechodzi. Wynika to zapewne z tego, że zawiera on komponent `Link` z Routera. Test dostaje wartość ""<Link />test klub0.99123"".

Hmmm... Link się nie renderuje dlatego, że korzystam z `shallow`, który nie renderuje zagnieżdżonych komponentów. Jeśli zmienię metodę w teście na `render` pojawia się błąd o tym, że zagnieżdżony `Link` nie ma wymaganego kontekstu (ach, Router). Jeśli zgodnie z dokumentacją owinę testowany element w `StaticRouter` dostaję inny straszliwie wyglądający błąd. `What the heck`.

Jest to o tyle zastanawiające, że na serwerze testowym mój komponent ma się doskonale, więc podejrzewam że problem jest z samym testem. OK, szkoda trochę tej godziny - trzeba doczytać dokumentację Routera. Na chwilę obecną zakomentuję ten test.

Zainstalujmy zatem Nock. Tak się skłąda że [ostatnio czytałem na dokładnie ten temat ciekawy artykuł](https://tech.travelaudience.com/how-to-test-asynchronous-data-fetching-on-a-react-component-ff2ee7433d71).

... no i minęła dzisiejsza godzina :) Do następnego dnia.
