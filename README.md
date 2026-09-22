# home page

[Magyar](#magyar) · [English](#english)

## Magyar

Magyar–angol böngésző-kezdőlap HTML, CSS és JavaScript használatával.

- Mentett nyelvválasztás; a felület, dátum, időjárás és 100 napi humoros gondolat mindkét nyelven elérhető.
- Másodperces óra, napszakhoz igazodó háttér és webes keresés.
- 22 rögzített gyorslink; az oldalon nem szerkeszthetők.
- Településre állítható időjárás, felső és alsó térközzel.
- Saját Google Naptár és két bannerkép, az oldalon megadható linkekkel.

### Használat

Nyisd meg az `index.html` fájlt. Tartsd mellette a `style.css`, `app.js`,
`i18n.js`, `config.js` fájlokat és az `assets` mappát. Nincs szükség buildelésre.
Az egyfájlos kiadásban csak a `Home-page.html` megnyitása szükséges.

A fejlécben válthatsz nyelvet. A **Testreszabás → Naptár és bannerek**
részben mindenki megadhatja a saját naptárát és két közvetlen HTTPS-képlinkjét.
Mentés után megjelennek az oldalon. Ürítsd ki a mezőt és ments a törléshez.

Google Naptárhoz a beágyazási vagy nyilvános naptárlinket használd.
A megtekintéshez megfelelő hozzáférés szükséges; a privát naptár beágyazását
a Google bejelentkezése és a böngésző sütikezelése is befolyásolhatja.
Nem szükséges nyilvánossá tenni egy személyes naptárat. Ha a beágyazás nem
jelenik meg, használd a **Naptár megnyitása** hivatkozást.

A bannerekhez közvetlen képcím szükséges, nem profiloldal vagy HTML-kód.
A képek a saját képarányukkal jelennek meg, külön kattintási link nélkül.

A személyes beállítások a saját böngésző helyi tárhelyén maradnak, nem kerülnek
a GitHub repositoryba, és nem szinkronizálódnak más eszközökkel. Az időjárás,
a naptár és a képek betöltésekor a böngésző a megfelelő külső szolgáltatást kéri le.
A `config.js` opcionális alapértékeket ad; az oldalon mentett beállítások felülírják.

## English

A Hungarian–English browser home page built with HTML, CSS and JavaScript.

- Saved language selection, localized dates and weather, and 100 humorous daily thoughts in each language.
- A live clock with seconds, a time-of-day background and web search.
- 22 fixed shortcuts that cannot be edited from the page.
- Weather for your chosen city, with spacing above and below.
- Your Google Calendar and two banner images, configured directly on the page.

### Getting started

Open `index.html`, keeping `style.css`, `app.js`, `i18n.js`, `config.js`
and the `assets` folder alongside it. No installation or build is required.
For the standalone edition, simply open `Home-page.html`.

Choose your language in the header. Under **Customize → Calendar and banners**,
paste your Google Calendar embed/public link and two direct HTTPS image URLs.
Save to display them. Clear a field and save to remove it.

Calendar access permissions still apply. Private calendar embeds may depend on
Google sign-in and browser cookie settings. You do not need to make a personal
calendar public; use **Open calendar** if the embed is unavailable.

Banner URLs must point directly to images, not profile pages or HTML snippets.
Images preserve their aspect ratio and have no separate click-through link.

Preferences are stored in your own browser, not in the GitHub repository,
and do not sync between devices. Loading weather, calendars and images makes
requests to their respective external services. `config.js` provides optional
defaults; settings saved on the page override them.

## Credits / Források

- Weather / Időjárás: [Open-Meteo](https://open-meteo.com/) — CC BY 4.0.
- Photo / Fotó: [Mattia Poli / Unsplash](https://unsplash.com/photos/a-mountain-lake-surrounded-by-snow-covered-mountains-XPVVtqCQWzY).
- [Google Calendar embedding guide / Beágyazási útmutató](https://support.google.com/calendar/answer/41207).
