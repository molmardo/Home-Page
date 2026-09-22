'use strict';
const QUICK_LINKS = [
  [
    "Facebook",
    "https://www.facebook.com",
    "f",
    "#81b4ff"
  ],
  [
    "Gmail",
    "https://mail.google.com",
    "M",
    "#f2b2a3"
  ],
  [
    "YouTube",
    "https://www.youtube.com",
    "▶",
    "#ff766e"
  ],
  [
    "Google Drive",
    "https://drive.google.com",
    "△",
    "#f4d794"
  ],
  [
    "Google Maps",
    "https://maps.google.com",
    "↗",
    "#b1d6a0"
  ],
  [
    "Google Calendar",
    "https://calendar.google.com",
    "31",
    "#81b4ff"
  ],
  [
    "Google Translate",
    "https://translate.google.com",
    "G文",
    "#a4caff"
  ],
  [
    "DeepL Translate",
    "https://www.deepl.com/translator",
    "文",
    "#d0dff0"
  ],
  [
    "W3Schools",
    "https://www.w3schools.com",
    "W³",
    "#9bd5ad"
  ],
  [
    "Netflix",
    "https://www.netflix.com",
    "N",
    "#ff777d"
  ],
  [
    "ChatGPT",
    "https://chatgpt.com",
    "✳",
    "#a8dcc8"
  ],
  [
    "GitHub",
    "https://github.com",
    "GH",
    "#eceff5"
  ],
  [
    "Gemini",
    "https://gemini.google.com",
    "✦",
    "#c2b0ff"
  ],
  [
    "OneDrive",
    "https://onedrive.live.com",
    "☁",
    "#81b4ff"
  ],
  [
    "iCloud",
    "https://www.icloud.com",
    "☁",
    "#b2e1ff"
  ],
  [
    "Chrono24",
    "https://www.chrono24.com",
    "◷",
    "#f6d599"
  ],
  [
    "LinkedIn",
    "https://www.linkedin.com",
    "in",
    "#87bbff"
  ],
  [
    "Telex.hu",
    "https://telex.hu",
    "tx",
    "#f1f2f2"
  ],
  [
    "Twitch.tv",
    "https://www.twitch.tv",
    "T",
    "#c5a1ff"
  ],
  [
    "Google.com",
    "https://www.google.com",
    "G",
    "#f4d794"
  ],
  [
    "Flightradar24",
    "https://www.flightradar24.com",
    "✈",
    "#f8d368"
  ],
  [
    "MyFlightRadar24",
    "https://my.flightradar24.com",
    "✈",
    "#f8d368"
  ]
];
const $ = id => document.getElementById(id);
const defaults = { name: '', engine: 'google', theme: 'auto', language: 'hu', city: { name: 'Budapest', latitude: 47.4979, longitude: 19.0402 } };
let prefs = structuredClone(defaults); try { const saved = JSON.parse(localStorage.getItem('nyitany-v1')); if (saved) { prefs = { ...prefs, ...saved }; delete prefs.links; } } catch { }
if (!['hu', 'en'].includes(prefs.language)) prefs.language = 'hu';
const t = text => prefs.language === 'en' ? (EN[text] || text) : text;
const locale = () => prefs.language === 'en' ? 'en-GB' : 'hu-HU';
const translatedNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) { const n = walker.currentNode, key = n.textContent.trim(); if (EN[key]) translatedNodes.push({ node: n, key }); }
const translatedAttrs = [];
document.querySelectorAll('[placeholder],[aria-label]').forEach(el => ['placeholder', 'aria-label'].forEach(attr => { const key = el.getAttribute(attr); if (EN[key]) translatedAttrs.push({ el, attr, key }); }));
function translateUI() { document.documentElement.lang = prefs.language; translatedNodes.forEach(({ node, key }) => node.textContent = t(key)); translatedAttrs.forEach(({ el, attr, key }) => el.setAttribute(attr, t(key))); $('language').value = prefs.language; }
function save() { try { localStorage.setItem('nyitany-v1', JSON.stringify(prefs)); } catch { toast(t("A böngésző nem engedi a beállítások mentését.")); } }
function toast(message) { $('toast').textContent = message; $('toast').classList.add('show'); setTimeout(() => $('toast').classList.remove('show'), 3500); }
const quotes = [
  "A lustaság nem bűn, hanem életstílus.",
  "Ma is korán keltem. A saját időzónámban.",
  "A kávé nem old meg mindent, de legalább ébren nézem a problémát.",
  "Nem halogatok. Hagyom érlelődni a feladatot.",
  "A kanapé vonzerejét még a fizika sem tudja megmagyarázni.",
  "A hétfő egy rosszul sikerült hétvége-frissítés.",
  "A türelmem végtelen. Csak a próbaidőszak járt le.",
  "A rend a lelke mindennek. Az én asztalomnak kalandos lelke van.",
  "Ma sem lettem milliomos. Holnap újra ellenőrzöm.",
  "A sport fontos. Rendszeresen futok az időm után.",
  "A reggeli ébresztő az egyetlen ellenségem, akit én fizetek.",
  "Nem vagyok szétszórt. Több helyen vagyok összeszedett.",
  "A diétám jól halad. Már csak az evést kellene hozzá igazítani.",
  "A hűtőt nem azért nyitom ki, mert éhes vagyok. Hátha történt valami.",
  "A pénz nem boldogít, de szívesen vállalom a kísérletet.",
  "Ma produktív leszek. Ezt már fel is írtam.",
  "Az élet rövid. A megbeszélés sajnos nem.",
  "A határidő motivál. Főleg, amikor már tegnap volt.",
  "Nem késtem el. Megvártam, míg mindenki megérkezik.",
  "A boldogság néha csak egy működő wifi.",
  "Annyi tervem van, hogy pihennem kell tőlük.",
  "A mosogatás megvár. Ebben legalább megbízhatok.",
  "Nem beszélek magamban. Szakértővel egyeztetek.",
  "A memóriám kiváló. Csak nem tudom, hová tettem.",
  "A hétvége olyan, mint a süti: mindig kisebb, mint vártam.",
  "A felkelés az első hibám minden munkanapon.",
  "Nem vagyok lusta, csak takarékos üzemmódban működöm.",
  "A konyháig vezető séta is számít kirándulásnak.",
  "Ma mindenre nyitott vagyok. Kivéve az e-maileket.",
  "A csoki növényből van. Szerintem ez elég jó kezdet.",
  "A holnap a teendőlistám legnagyobb szponzora.",
  "Nincs túl sok böngészőlapom. Digitális panorámám van.",
  "A jelszavam olyan biztonságos, hogy már én sem jutok be.",
  "A számítógép újraindult. Én még keresem ezt a funkciót.",
  "A frissítés mindig akkor ér rá, amikor én nem.",
  "A nyomtató megérzi a félelmet. És a sürgős határidőt.",
  "Nem hibáztam. Találtam egy kreatív kerülőutat.",
  "Az edzéstervem ma is tökéletesen pihen.",
  "A kalóriák éjszaka titokban szűkítik a ruhákat.",
  "A korán kelés előnye, hogy több időm van álmosnak lenni.",
  "Néha nagy levegőt veszek. Aztán rendelek egy pizzát.",
  "Az önuralmam erős. Csak a pékség előtt gyenge a térerő.",
  "A motivációm úton van. Valószínűleg átszállással jön.",
  "A rendrakás legnehezebb része, hogy utána semmit sem találok.",
  "Nem felejtettem el. Csak meglepetés lesz, amikor eszembe jut.",
  "A naptáram tele van. Én inkább kávéval lennék tele.",
  "A felnőttkor az, amikor a jó szivacs is örömet okoz.",
  "A bevásárlólistám otthon maradt, hogy kipihenje magát.",
  "Csak egy dolgot veszek. Ezt a kosár még nem tudja.",
  "Az akciós ár a pénztárcám kedvenc horrorfilmje.",
  "A csomagkövetés a felnőttek adventi naptára.",
  "A futár mindig akkor érkezik, amikor vizes a kezem.",
  "A zoknik nem vesznek el. Önálló életet kezdenek.",
  "A szennyeskosárban valószínűleg ruhatenyészet működik.",
  "Az ablakmosás esőtánc, csak tisztítószerrel.",
  "A porszívózás után találom meg a legfontosabb morzsát.",
  "Főzni szeretek. A recepttel néha eltér a véleményünk.",
  "A recept szerint húsz perc. Nem számolt a személyiségemmel.",
  "A tészta mennyiségét mindig egy kisebb esküvőre becsülöm.",
  "A maradék pizza a holnapi énemnek írt szerelmes levél.",
  "A kávém erősebb nálam. Ezért dolgozunk csapatban.",
  "Reggelente a személyiségem még betöltés alatt áll.",
  "A szundi gombbal komoly, hosszú távú kapcsolatban vagyok.",
  "Nyolc óra alvás kell. Lehetőleg a délelőtti mellé.",
  "A párnám mindig a legjobb ötletekkel marasztal.",
  "Az álmaimat követem. Ezért alszom vissza.",
  "A nyugalom belülről jön. A zaj meg a szomszédból.",
  "Mély levegő. Nem minden értesítés életfeladat.",
  "A telefonom okos. Én meg rendszeresen keresem, miközben fogom.",
  "A képernyőidőm szerint a nap legalább harmincórás.",
  "Csak egy videót nézek. Mondta az ember három órával ezelőtt.",
  "A sorozat következő része magától indult. Én udvarias voltam.",
  "A távirányító mindig ott van, ahol utoljára nem keresném.",
  "A wifi jelszava ma már a vendégszeretet része.",
  "Az internet nélkül is lehet élni. De előbb rákeresnék, hogyan.",
  "A Google szerint mindenre van megoldás. Az én fiókomban kábelek vannak.",
  "A kábeleim éjszaka társastáncolnak a fiókban.",
  "A töltőm szabadságra ment, amikor egy százalékon voltam.",
  "A repülőtér az egyetlen hely, ahol reggel hatkor is érthető a süti.",
  "A bőröndöm szerint három napra tizenkét felső kell.",
  "A nyaralásra készülésből is ki kellene pihenni magam.",
  "A térkép szerint öt perc séta. A pékségeket nem számolta.",
  "Nem tévedtem el. Bővítem a helyismeretemet.",
  "A GPS nyugodtabban kezeli a hibáimat, mint én.",
  "A repülőket követem. A teendőim addig köröznek.",
  "A szabadság legszebb hangja a kikapcsolt ébresztő.",
  "A hétfőt át kellene helyezni egy másik hétre.",
  "A péntek már szerdán elkezd hiányozni.",
  "A vasárnap este a hétvége stáblistája.",
  "A munka megvár. Kár, hogy ilyen hűséges.",
  "Ez a megbeszélés lehetett volna egy rövid sóhaj is.",
  "A feladat egyszerűnek tűnt. Aztán megnyitottam.",
  "A teendőlistám ma kapott egy új feladatot: legyen rövidebb.",
  "A sikert apró lépésekben mérem. Ma eljutottam a kávéfőzőig.",
  "A multitasking nálam több dolog egyidejű elfelejtése.",
  "A kreatív szünetem feltűnően hasonlít az ebédre.",
  "A tökéletességre törekszem. Ezért még nem kezdtem el.",
  "Ma magam mögött hagyom a gondokat. Remélem, nem tudják a címem.",
  "A jókedv ingyen van. A hozzá tartozó croissant sajnos nem.",
  "Minden nap új lehetőség arra, hogy holnapra tervezzek."
];
function tick() { const d = new Date(), h = d.getHours(); const phase = prefs.theme === 'auto' ? (h >= 5 && h < 10 ? 'morning' : h >= 10 && h < 17 ? 'day' : h >= 17 && h < 21 ? 'evening' : 'night') : prefs.theme; document.body.dataset.phase = phase; $('clock').textContent = d.toLocaleTimeString(locale(), { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }); $('date').textContent = d.toLocaleDateString(locale(), { month: 'long', day: 'numeric', weekday: 'long' }); $('greeting').textContent = (h >= 5 && h < 10 ? t("Jó reggelt") : h >= 10 && h < 18 ? t("Szép napot") : t("Szép estét")) + (prefs.name ? ', ' + prefs.name + '!' : '!'); $('phase-label').textContent = { morning: t("☀ Reggeli fények"), day: t("☀ Nappali nyugalom"), evening: t("◒ Esti hangulat"), night: t("☾ Éjszakai csend") }[phase] + ' · ' + (prefs.theme === 'auto' ? t("automatikus háttér") : t("választott háttér")); const day = Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000); $('quote').textContent = (prefs.language === 'en' ? quotesEN : quotes)[day % quotes.length]; $('day-count').textContent = d.toLocaleDateString(locale(), { month: '2-digit', day: '2-digit' }); }
const engines = { google: ['Google', 'https://www.google.com/search?q='], duck: ['DuckDuckGo', 'https://duckduckgo.com/?q='], bing: ['Bing', 'https://www.bing.com/search?q='] };
function render() { translateUI(); tick(); $('engine-label').textContent = t('Kereső: ') + (engines[prefs.engine] || engines.google)[0]; $('links').replaceChildren(); QUICK_LINKS.forEach(item => { const card = document.createElement('div'); card.className = 'shortcut'; const a = document.createElement('a'); a.href = item[1]; const icon = document.createElement('span'); icon.className = 'app-icon'; icon.textContent = item[2]; icon.style.color = item[3]; const name = document.createElement('span'); name.textContent = item[0]; a.append(icon, name); card.append(a); $('links').append(card); }); }
$('search').onsubmit = e => { e.preventDefault(); const q = $('query').value.trim(); if (q) location.href = (engines[prefs.engine] || engines.google)[1] + encodeURIComponent(q); };
document.addEventListener('keydown', e => { if (e.key === '/' && !document.querySelector('dialog[open]') && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) { e.preventDefault(); $('query').focus(); } });
document.querySelectorAll('[data-close]').forEach(b => b.onclick = () => b.closest('dialog').close());
$('language').onchange = () => { prefs.language = $('language').value; save(); render(); renderEmbeds(); $('city-results').replaceChildren(); $('city-status').textContent = ''; weather(); };
$('settings-open').onclick = () => {
  $('name-input').value = prefs.name; $('engine').value = prefs.engine; $('theme').value = prefs.theme;
  const config = getEmbedConfig(); $('calendar-input').value = config.googleCalendarEmbedUrl || '';
  $('banner-one-input').value = config.myFlightRadar24Banners?.[0]?.imageUrl || '';
  $('banner-two-input').value = config.myFlightRadar24Banners?.[1]?.imageUrl || '';
  $('settings-error').textContent = ''; $('settings').showModal();
};
$('preferences').onsubmit = e => {
  e.preventDefault(); const calendar = $('calendar-input').value.trim();
  const images = [$('banner-one-input').value.trim(), $('banner-two-input').value.trim()];
  if (calendar && !calendarURL(calendar)) { $('settings-error').textContent = t('A Google Naptár beágyazási címe nem megfelelő.'); $('calendar-input').focus(); return; }
  if (images.some(url => url && !safeURL(url))) { $('settings-error').textContent = t('A bannerhez érvényes HTTPS-képcím szükséges.'); return; }
  prefs.name = $('name-input').value.trim(); prefs.engine = $('engine').value; prefs.theme = $('theme').value;
  prefs.embeds = { googleCalendarEmbedUrl: calendar, myFlightRadar24Banners: images.map(imageUrl => ({ imageUrl })) };
  save(); render(); renderEmbeds(); $('settings').close();
};
$('city-change').onclick = () => { $('city-dialog').showModal(); $('city-input').focus(); };
async function fetchJSON(url) { const controller = new AbortController(); const timeout = setTimeout(() => controller.abort(), 12000); try { const response = await fetch(url, { signal: controller.signal }); if (!response.ok) throw Error('HTTP ' + response.status); return await response.json(); } finally { clearTimeout(timeout); } }
let cityRequest = 0;
$('city-form').onsubmit = async e => { e.preventDefault(); const request = ++cityRequest; $('city-status').textContent = t("Települések keresése…"); $('city-results').replaceChildren(); try { const data = await fetchJSON('https://geocoding-api.open-meteo.com/v1/search?name=' + encodeURIComponent($('city-input').value.trim()) + '&count=5&language=' + prefs.language + '&format=json'); if (request !== cityRequest) return; $('city-status').textContent = data.results?.length ? t("Válaszd ki a települést:") : t("Nincs találat. Próbálj más településnevet."); for (const city of data.results || []) { const button = document.createElement('button'); button.type = 'button'; button.textContent = [city.name, city.admin1, city.country].filter(Boolean).join(', '); button.onclick = () => { prefs.city = { name: city.name, latitude: city.latitude, longitude: city.longitude }; save(); $('city-dialog').close(); weather(); }; $('city-results').append(button); } } catch { if (request === cityRequest) $('city-status').textContent = t("A keresés most nem érhető el. Ellenőrizd az internetkapcsolatot, majd próbáld újra."); } };
function condition(code) { if (code === 0) return ['☀', t("Derült")]; if (code <= 3) return ['⛅', t("Változóan felhős")]; if (code <= 48) return ['☁', t("Ködös")]; if (code <= 57) return ['☂', t("Szitálás")]; if (code <= 67) return ['☂', t("Esős")]; if (code <= 77) return ['❄', t("Havazás")]; if (code <= 82) return ['☂', t("Záporok")]; if (code <= 86) return ['❄', t("Hózápor")]; return ['ϟ', t("Zivatar")]; }
let weatherRequest = 0;
async function weather() { const request = ++weatherRequest; const city = prefs.city; $('location').textContent = city.name; $('temperature').textContent = '—°'; $('condition').textContent = t("Időjárás betöltése…"); $('weather-detail').textContent = ''; try { const data = await fetchJSON(`https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=1`); if (request !== weatherRequest) return; if (!Number.isFinite(data.current?.temperature_2m)) throw Error('missing data'); const [icon, label] = condition(data.current.weather_code); $('weather-icon').textContent = icon; $('temperature').textContent = Math.round(data.current.temperature_2m) + '°'; $('condition').textContent = label; $('weather-detail').textContent = `↑ ${Math.round(data.daily.temperature_2m_max[0])}°  ↓ ${Math.round(data.daily.temperature_2m_min[0])}°`; } catch { if (request !== weatherRequest) return; $('weather-icon').textContent = '☁'; $('condition').textContent = t("Az időjárás most nem érhető el."); $('weather-detail').textContent = t("Internet szükséges"); } }
render(); renderEmbeds(); weather(); setInterval(tick, 1000); setInterval(weather, 15 * 60 * 1000); window.addEventListener('online', weather);


function safeURL(value) { try { const u = new URL(value); return u.protocol === 'https:' && !u.username && !u.password ? u.href : null; } catch { return null; } }
function calendarURL(value) {
  const safe = safeURL(value); if (!safe) return null; const u = new URL(safe);
  if (u.hostname !== 'calendar.google.com') return null;
  if (/\/embed\/?$/.test(u.pathname) && u.searchParams.get('src')) return u.href;
  let id = u.searchParams.get('src');
  if (!id && u.searchParams.get('cid')) { try { const cid = u.searchParams.get('cid'); id = cid.includes('@') ? cid : atob(cid.replace(/-/g, '+').replace(/_/g, '/')); } catch { return null; } }
  if (!id) return null; const embed = new URL('https://calendar.google.com/calendar/embed'); embed.searchParams.set('src', id); return embed.href;
}
function getEmbedConfig() { return prefs.embeds || window.HOME_PAGE_CONFIG || {}; }
function emptyEmbed(container, title, message, symbol) { const box = document.createElement('div'); box.className = 'embed-empty'; const icon = document.createElement('span'); icon.textContent = symbol; icon.setAttribute('aria-hidden', 'true'); const heading = document.createElement('h3'); heading.textContent = title; const p = document.createElement('p'); p.textContent = message; box.append(icon, heading, p); container.replaceChildren(box); }
function renderEmbeds() {
  const config = getEmbedConfig(), calendar = $('calendar-content');
  const url = calendarURL(config.googleCalendarEmbedUrl);
  if (url) { const u = new URL(url); u.searchParams.set('hl', prefs.language); const frame = document.createElement('iframe'); frame.title = t('Saját Google Naptár'); frame.src = u.href; frame.loading = 'lazy'; frame.className = 'calendar-frame'; calendar.replaceChildren(frame); }
  else emptyEmbed(calendar, t('A naptárad helye'), config.googleCalendarEmbedUrl ? t('A Google Naptár beágyazási címe nem megfelelő.') : t('Add meg a naptár linkjét a Testreszabás menüben.'), '▦');
  [0, 1].forEach(i => {
    const container = $('flight-banner-' + (i + 1)); const banner = config.myFlightRadar24Banners?.[i] || {}; const src = safeURL(banner.imageUrl);
    if (!src) { emptyEmbed(container, t((i + 1) + '. banner'), t('Add meg a kép linkjét a Testreszabás menüben.'), '✈'); return; }
    const img = document.createElement('img'); img.alt = 'MyFlightRadar24 · ' + t((i + 1) + '. banner'); img.loading = 'lazy';
    img.onerror = () => { if (container.contains(img)) container.textContent = t('A banner nem tölthető be. Ellenőrizd a képcímet és az internetkapcsolatot.'); };
    container.replaceChildren(img); img.src = src;
  });
}
