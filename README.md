# Projektanalys
I projektet Drone Delights, en matleveransapplikation, valde jag att bygga applikationen med React. Anledningen till detta var att jag ville arbeta komponentbaserat, få en tydlig uppdelning mellan vyer och logik, samt effektivt hanterat state och navigation genom hela applikationen. Syftet med projektet var att skapa en applikation där både gästanvändare och inloggade användare kunde bläddra bland olika maträtter, lägga till i varukorgen samt spara favoriter. Applikationens användargränssnitt anpassas dynamisk beroende på om användaren är inloggad eller inte, vilket skapar en mer funktionell och personlig upplevelse.

Jag använde React Router för att möjliggöra navigation mellan olika sidor, såsom Home, meny, varukorgen och bekräftelsesidan etc. För att organisera projektet strukturerade jag koden i separata mappar: pages, context och components. Varje komponent har ett tydligt och avgränsat ansvar, vilket gör det enklare att både förstå, felsöka och vidareutveckla applikationen. 

För att hantera data använde jag json-server som en enkel och lokal backendlösning. Detta gjorde det möjligt att arbeta med verklighetstrogna API-anrop, vilket gav mig en djupare förståelse för hur frontend kommunicera med ett backend-API. Jag skapade egna resurser för prdukter, favoriter, städer och användare, och testade dessa via fetch-anrop direkt från fronted. 

Jag implementerade tre olika context: AuthContext, CartContext och FavoritesContext. Varje context har ansvar för olika hanteringar. Detta möjliggjorde global hantering av applikationens state och gjorde det möjligt att undvika prop-drilling. Det förbättrade kodstrukturen, läsbarheten och möjliggjorde återanvändbara komponenter med enkel åtkomst till relevant data.

Detta projektet har gett mig flera viktiga insikter, jag har insett att en tydlig struktur och komponentuppdelning minimierar fel och sparar tid. Jag har också förstått vikten av att sätta användaren i fokus, tänka på funktionalitet, flöde och visuell upplevelse som en helhet. 

### Starta json-server
npx json-server --watch src/data/db.json --port 3001

## Testinloggning
Användarenamn: user
lösen:password