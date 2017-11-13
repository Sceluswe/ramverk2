### Kmom01: Express
#### Berätta utförligt om din syn på Express och Pug och hur de samverkar. Relatera till andra ramverk du jobbat med. Lyft fram de fördelar och eventuellt nackdelar du finner, eller bara notera skillnader och likheter. 
Tidigare har jag endast arbetat med markdown filer och inte någon templatehanterare, därför kan jag inte göra någon jämförelse där. 

I mitt individuella projekt arbetade jag med ramverket Django och jag väljer därför att jämföra det med Express. Likt Express har Django scaffolding möjligheter och kan starta upp en server på liknande vis med hjälp av vyer. Båda är baserad på MVC principen. En skillnad mellan Express och Django är att man inte behöver installera något språk i Express då det är baserat på Javascript. I Django installerar man Python. I övrigt är Django ett större ramverk  (det är ett full-stack ramverk likt det vi arbetade med i ramverk1) som sköter allt som behövs för att en hemsida ska fungera, medans Express är ett minimalistiskt ramverk och används ofta som en grund i andra full-stack ramverk (MEAN, till exempel). Med det i åtanke verkar det troligt att Express kräver mindre serverkapacitet än vad ett ramverk likt Django kan tänkas göra. Beroende på målet kan det vara både en för och en nackdel att behöva plocka ihop sitt ramverk helt själv. Behöver man inte vissa delar skulle man kunna tjäna på att plocka ihop ett eget, även om det kostar mer tid. Ett problem med att bygga ett ramverk ifrån flera olika paket är att man dessutom blir beroende av flera olika paket som det kan ske ändringar i när utvecklaren av paketet behagar. Man får med andra ord vara uppmärksam på vad det sker för ändringar när man uppdaterar sina beroenden, eller vilket paket det kan tänkas vara som skapar felet (om man har något). Django däremot ger en färdig produkt och det är tydligt vart man kan gå för att rapportera felet. 

#### Berätta om din katalogstruktur och hur du organiserade din kod, hur tänkte du? 
Jag valde att följa den struktur som företaget jag utvecklade åt i tidigare kurs. De delade upp koden där man gör ändringar och koden som ligger i produktion. Därför delade jag upp min kod I följande struktur:
Build – En mapp med två undermappar, css och js. Denna mapp innehåller den okompilerade koden (build filerna).
Static—En mapp med 4 undermappar, css, img, content och js. Static innehåller den färdigbyggda och minifierade css och js koden. Det är alltså denna kod som användas av servern.
Views — Denna mapp innehåller de olika pug templatefilerna som express använder sig av.
Content — Alla markdownfiler med hemsidans innehåll.

#### Använde du någon form av scaffolding som Express erbjuder? 
Jag valde att inte använda mig av scaffolding denna gång. Istället använde jag en struktur jag är bekant med sedan individuella projektet.

#### Jobbar du med Markdown för innehållet, eller annat liknande? 
För själva innehållet valde jag att arbeta med Markdown. Det är en stil jag trivs med. Angående mina olika templates eller vyer så valde jag att följa kursens exempel och använda mig av pug. 

### Reflektion
Erfarenheter och lärdomar
I mitt individuella projekt (Indproj) lärde jag mig mer om hur man automatiserar utvecklingen av en hemsida och ser till så att ändringar i koden direkt genereras om så att servern sedan kan använda dem. För att åstadkomma detta i nuvarande kurs använder jag mig av samma npm paket som i Indproj och det heter Gulp. Gulp tillåter mig att kompilera och minifiera scss samt javascript till en ända fil som servern sedan använder. Dessutom kollar Gulp om ändringar gjorts i de filer man pekar Gulp emot. När en ändring görs kompileras koden om och servern märker ingen skillnad. Detta kan jag använda för all scss och framtida javascript kod. På så sätt slipper starta om servern samtidigt som jag slipper skriva in kommandon i onödan. 

#### Problem och lösningar
Det ända ”problemet” var valet imellan LESS och SCSS. Jag kan däremot LESS redan och valde därför att bättra på mina kunskaper inom SCSS. Mer specifikt valde jag att använda bootstrap som är ett scss ramverk.

#### Resultat
Jag är nöjd med resultatet och tycker att det ska bli roligt att prova på ytterligare ett ramverk. Det blir extra intressant att själv plocka ihop det del för del på det här sättet. Jag misstänker att vi kommer att arbeta oss upp till ett full-stack ramverk liknande MEAN och därför tjuvstartade jag med användandet av Gulp.