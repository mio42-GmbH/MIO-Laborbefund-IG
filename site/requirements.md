# Umsetzungsanforderungen - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* **Umsetzungsanforderungen**

## Umsetzungsanforderungen

Hier sind Anforderungen an die mit der Umsetzung des MIO Laborbefund befassten Administrator:innen oder Systemhersteller:innen gelistet, die sich nicht im Rahmen der FHIR®-Spezifikation technisch definieren lassen und deshalb an dieser Stelle in Textform erläutert werden.

**Verbindlichkeiten**

* **MUSS**: Umsetzung ist obligat
* **SOLL**: Umsetzung ist notwendig, wird aber (noch) nicht zwingend verlangt
* **KANN**: Umsetzung ist empfohlen

### Übergreifende Umsetzungsanforderungen

Die hier aufgeführten “**Übergreifenden Umsetzungsanforderungen**” nehmen Bezug auf das gesamte MIO Laborbefund oder Themen, die sich auf mehrere Datenstrukturen beziehen.

| | |
| :--- | :--- |
| Typ | Anforderung |
| MUSS |  **Versionierung Laborbefund**  Erstellende Systeme bilden die Version des Laborgesamtbefundes über die versionNumber Extension in der Composition ab. Die Kombination aus dieser Version und des gleichbleibenden "Identifikator Laborgesamtbefund" (UUID) ist unabhängig vom FHIR®-Server.  |
| MUSS |  **Anzeige der Laborbefund-Versionen**  Das anzeigende System muss die Laborbefund-Versionen vorhalten oder per Abruf (z.B. aus der ePA) verfügbar machen können. Im Kontext klinischer Entscheidungen muss die Befund-Versions-Historie einschließlich der Inhalte lesbar und darstellbar sein.  |
| MUSS |  **Statusangaben im Laborbefund**  Der Bearbeitungsprozess des Laborgesamtbefundes wird mit einem Hauptstatus und einem Sekundärstatus dargestellt.  "Status Gesamtbefund" ist der **Hauptstatus**, der verpflichtend vergeben werden muss. Die Status-Werte orientieren sich an  HL7 FHIR®, möglich sind: * Registered - Registriert
* Partial - Nicht vollständig
* Preliminary - Vorläufig
* Final - Abgeschlossen
* Entered in Error - Irrtümliche Eingabe
* Cancelled - Storniert
* Amended - Geändert
* Corrected - Korrigiert
* Appended - Angefügt
 Änderungen am finalen Befund werden über die hier aufgeführten (Haupt)Status "Geändert", "Korrgiert", "Angefügt" abgebildet.  Änderungen an vorläufigen oder nicht vollständigen Befunden werden über den **Sekundärstatus** mit den entsprechenden Werten abgebildet, möglich sind: * Geändert
* Korrigiert
* Angefügt
 Aus "Status Gesamtbefund" und/oder kombiniert mit "Sekundärstatus" ist erkennbar, warum es eine neue Version des Befundes gegeben hat. Beim Versenden einer neuen Befundversion muss der Hauptstatus zweifelsfrei erkennbar sein sowie ggf. ergänzend der Sekundärstatus als Ursache/Veranlassung der neuen Version, um ggf. im empfangenden System zu entscheiden, welche Bereiche aktualisiert werden müssen und ob z.B. auch Notifikationen wie Flags / Kennzeichen ausgelöst werden müssen.  **Erläuterungen zur Verwendung von Statuswerten an Beispielen** *  (Haupt)Status "Appended": 
Zusatzinformationen, die keine Änderung des Messergebnisses darstellen
 
*  (Haupt)Status "Nicht vollständig" + Sekundärstatus "Angefügt":
Statt zuvor 5 von 7 Ergebnissen liegen nun 6 von 7 Ergebnissen vor
 
*  (Haupt)Status "Vorläufig" + Sekundärstatus "Geändert":
Präzision (ausgetauschte Formulierung) eines vorherigen Ergebnisses, welches immer noch als vorläufig gilt 
 |
| KANN |  **Mapping auf passende LDT-Inhalte**  Wenn vorhanden und passend, sind zu einem Element unter Eigenschaften mögliche LDT-Inhalte aufgeführt, die in das Feld hineinpassen und auch übernommen werden könnten. Dies soll als Hilfestellung dienen, falls ggf. in einer Umstellungsphase auf das MIO Laborbefund LDT-Dateninhalte konkreten MIO-Strukturen zugeordnet werden sollen. Aufgrund der strukturellen Unterschiede zwischen LDT und MIO kann in das Informationsmodell kein vollständiges LDT-Mapping eingearbeitet werden.  Mapping-Vorschläge für **administrative Strukturen**, die im Informationsmodell mehrfach vorkommen, sind nicht zu den Elementen unter Eigenschaften aufgeführt, sondern werden hier im Hinweis aufgelistet. Dabei ist zu beachten, dass ein reines Feld-zu-Feld-Mapping aufgrund der strukturellen Unterschiede zwischen MIO-Basisstrukturen und LDT nicht immer funktioniert. Sofern logisch möglich, wurden Zuordnungsvorschläge formuliert.   In der folgenden Liste sind Elementen oder Codewerten aus dem Informationsmodell passende Feldkennungen (FK) aus dem LDT3 zugeordnet: NAME* Vorsatzwort - FK 3120, Vorsatzwort 
* Namenszusatz - FK 3100, Namenszusatz
* Titel - FK 3104, Titel
* Nachname - FK 3101, Nachname
* Vorname - FK 3102, Vorname
STRASSENANSCHRIFT* Straße - FK 3107, Straße 
* Hausnummer - FK 3109, Hausnummer
* Anschriftenzusatz - FK 3115, Anschriftenzusatz
* Postleitzahl - FK 3112, PLZ    
* Ort - FK 3113, Ort    
* Land/Wohnsitzländercode - FK 3114, Wohnsitzländercode
POSTFACH* Postfach - FK 3123, Postfach
* Postleitzahl - FK 3121, PostfachPLZ
* Ort - FK 3122, PostfachOrt
*  Land/Wohnsitzländercode - FK 3124, PostfachWohnsitzlaendercode 
KONTAKTDATEN* Kontaktkanal, Codewert: URL - FK 7334, Webadresse
* Kontaktkanal, Codewert: E-Mail - FK 7335, E-Mailadresse
* Kontaktkanal, Codewert: Fax - FK 7333, Faxnummer
* Kontaktkanal, Codewert: Telefon - FK 7330, Telefonnummer
*  Kontaktkanal, Codewert: Sonstiges - FK 7332, Alternative elektronische Postadresse 
*  Kontaktkanal, Codewert: Sonstiges - FK 7340, Spezifizierung der alternativen elektronischen Postadresse 
EINRICHTUNG/ORGANISATIONSEINHEIT* Bezeichnung - FK, 7268, Fachrichtung oder Stationskennung
BEHANDELNDE PERSON/EINRICHTUNG* Bezeichnung - FK, 7268, Fachrichtung oder Stationskennung
ROLLE IN BEZUG AUF DIE EINRICHTUNG*  Bezeichnung - FK 1252, Funktionsbezeichnung der Person innerhalb der Organisation 
 |
| KANN |  **Berücksichtigung von Angaben aus dem Laborauftrag**  Es obliegt dem/der befundenden Labormediziner:in, fachliche Angaben aus dem Auftrag zu berücksichtigen und solche, die für die Befundung wichtig sind, zu benennen. Laboraufträge liegen in historisch gewachsenen, teilweise sehr unterschiedlichen Strukturen vor. Für Angaben zur Fragestellung oder Begründung sind beispielsweise folgende Quellen denkbar: * aus Muster 10 die Angaben zur Auftragsdiagnose
* aus LDT2 die Angaben zur Auftragsdiagnose
*  aus LDT3 die Angaben zur Auftragsdiagnose, zum Anlass der Untersuchung oder zum Veranlassungsgrund 
 |
| MUSS |  **Signatur**  Bei elektronischen Übertragungswegen, bei denen die Schutzfunktion der TI bzw. der KIM wegfällt, ist ist die qualifizierte elektronische Signatur QES(HBA) erforderlich.  |

### Profil-/Elementbezogene Umsetzungsanforderungen

“**Profil-/Elementbezogene Umsetzungsanforderungen**” beziehen sich auf einzelne Elemente oder Strukturen und sind an der jeweiligen Stelle im Informationsmodell mit aufgeführt.
 Zur besseren Übersicht werden all diese hier, aufklappbar gruppiert nach Profil, jeweils in Tabellenform gelistet. Bedeutung der Tabellenspalten:

* Pfad Informationsmodell: Referenziert das Element im Informationsmodell
* FHIR®-Mapping: Referenziert das Element in FHIR®
* Typ: Benennt die Verbindlichkeit
* Anforderung: Textformulierung der Anforderung

-------

-------

-------

-------

-------

-------

-------

-------

-------

-------

-------

-------

-------

-------

-------

-------

-------

-------

