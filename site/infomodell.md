# Informationsmodell - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* **Informationsmodell**

## Informationsmodell

 ▶ Erläuterungen zum Informationsmodell 

Das Informationsmodell adressiert das am MIO-Konzept interessierte medizinische Fachpublikum. Dies betrifft unter anderem Labormediziner:innen, die den Laborbefund erstellen, als auch medizinisches Personal, welches den Laborbefund entgegen nimmt und im Primärsystem verarbeitet sehen möchte.

#### Grundstruktur

Das Informationsmodell Laborbefund ist in mehrere Abschnitte gegliedert und verschachtelt strukturiert. Dieses Vorgehen dient der besseren Übersicht.

Die unter “Referenzierte Profile” dargestellten Strukturen sind angelehnt an die technische FHIR®-Struktur. Der Aufbau des Laborgesamtbefundes erschließt sich über die inkludierten Referenzierungen. Beispielsweise

* findet man unter “Ergebnisse” die “Untersuchungsgruppe” (Fachliche Gruppierung), welche die gesamte Struktur “Laboruntersuchung” enthält. Und innerhalb einer “Laboruntersuchung” ist die zugehörige “Probe” referenziert.
* sind unter “Referenzierte administrative Profile” die “Behandelnde Person”, “Einrichtung”, die Kombination “Behandelnde Person/Einrichtung”, “Patient:in” und “Kontaktperson” im Detail definiert. An verschiedenen Stellen des Laborbefundes (z. B. “Auftragnehmendes Labor” oder “Laborauftrag-Einsendung von”) wird darauf referenziert, ohne diese Strukturen redundant detailliert darzustellen.

**Abbildung 1: Vereinfachte Darstellung der Grundstruktur des Informationsmodells**

Die im MIO Laborbefund definierten Kardinalitäten und Konformitäten sind in dieser Abbildung vereinfacht wie folgt dargestellt:

* Profile, die in jedem MIO Laborbefund verpflichtend übermittelt werden müssen, sind mit einem Ausrufezeichen-Icon versehen.
* Profile, die in einem MIO Laborbefund mehrfach vorkommen (können), sind in Form eines Stapels dargestellt.

Die genaue Zuweisung von Kardinalitäten und Konformitäten zu einzelnen Elementen sind im Informationsmodell jeweils unter Details zum einzelnen Element dargestellt.

#### Detailinformationen zu den einzelnen Elementen des Informationsmodells

Hinweis: nicht jedes Element enthält alle hier aufgeführten Informationen.

| | |
| :--- | :--- |
| **Name** | Benennt das Element (deutsches Konzept) |
| **Beschreibung** | Beschreibt und erläutert die Verwendung des Elementes im Anwenderkontext aus fachlicher Perspektive. Diese “Beschreibung” wird in FHIR®-Artefakten des IG als**Definition**erst mit Klick auf die**Detailed Description**zugänglich. |
| **Rationale:** | Enthält eine Begründung, warum das Element in der vorliegenden Form in das Informationsmodell aufgenommen wurde, z.B. durch Referenzen auf externe Spezifikationen. |
| **Datentyp:** | Gibt den Datentyp an, mit dem das Element befüllt wird, siehe auch:[https://hl7.org/fhir/datatypes.html](https://hl7.org/fhir/datatypes.html). |
| **Kardinalität:** | Gibt an, wie häufig in einem bestimmten Anwendungsszenario ein Wert für das Element übermittelt werden darf - ausgedrückt mittels eines* minimalen und eines* maximalen Wertes, siehe auch[https://www.hl7.org/fhir/conformance-rules.html#cardinality](https://www.hl7.org/fhir/conformance-rules.html#cardinality).Dazu Benennung eine* der folgenden Konformitäten:* Mandatory (M) = es **muss **(mindestens) ein gültiger Wert im Element vorliegen
* Optional (O) = es **kann **(mindestens) ein gültiger Wert vorliegen
* Not present (NP) = es **darf kein** Wert vorliegen
***Hinweis: es können in seltenen Fällen auch mehrere Kardinalitäten/Konformitäten in Abhängigkeit von definierten Bedingungen an einem Element angegeben sein** |
| **Terminologie-Assoziation / Wertelisten:** | Enthält einzelne oder mehrere Codes, mit denen dieses Element gefüllt werden kann bzw. muss. |
| **FHIR®-Mappings:** | Gibt an, an welcher Stelle in der technischen FHIR®-Spezifikation das Element umgesetzt ist. |
| **MUSS- / SOLL- / KANN-Angaben:** | Enthält Anforderungen, die gemäß ihrer Verbindlichkeit mit MUSS, SOLL oder KANN betitelt sind und unter den “[Umsetzungsanforderungen](./requirements.md)” noch einmal zusammen gelistet werden. Adressiert werden hier mit der Umsetzung befasste Administrator:innen oder Systemhersteller.innen. |
| **LDT2, LDT3, Muster 10 …** | Unverbindliche Vorschläge zum Mapping von (Alt-)Daten auf dieses MIO-Element |
| **Short** | Kurzbeschreibung für das Element. Erscheint in FHIR®-Artefakten des IG (Table) direkt sichtbar unter “Description & Constraints”, wogegen die “Beschreibung” als FHIR®-**Definition**erst unter die**Detailed Description**zugänglich wird. Die Kurzbeschreibung dient der besseren Verständigung über den Zweck des Elementes. Das erscheint nicht grundsätzlich für jedes FHIR®-Element notwendig, so dass es nicht zu jedem FHIR®-Element ein in deutscher Sprache formuliertes “Short” gibt. |

**Tabelle 1: Erläuterungen zum Informationsmodell MIO Laborbefund**

**🛈 Disclaimer**

Bei der Verwendung von KBV-Basis-ValueSets wird hauptsächlich die aktuell veröffentlichte Version 1.8.0 angewendet. Vereinzelt wurden ValueSets aus der nachfolgenden (aktuell noch nicht veröffentlichten) KBV Basis übernommen, wenn dies als fachlich sinnvolle Ergänzung angesehen wurde.

**Details**

**Name:**

**Beschreibung:**

**Rationale:**

**Datentyp:**

**Kardinalität:**

**Operationalisierungshinweis:**

**Terminologie Assoziationen:**

**Wertelisten:**

**FHIR Mappings:**

 ▶ Szenario: Laborbefund dokumentieren 

* Name: MIO Laborbefund
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:   Identifikator
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: identifier
* Name:   Laborgesamtbefund
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: reference
* Name:   Laborbefund-Adressierung an
  * Kardinalität: 1..*
  * Konformität: M
  * Datentyp: 
* Name:     Behandelnde Person
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: reference
* Name:     Einrichtung/Organisationseinheit
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: reference
* Name:     Behandelnde Person/Einrichtung
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: reference
* Name:     Patient:in
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: reference
* Name:     Kontaktperson
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: reference
* Name:   Ergänzende Angaben
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:   Referenz auf vorherige Version (informativ)
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: complex
* Name:   Freigabe
  * Kardinalität: 1..*
  * Konformität: M
  * Datentyp: 
* Name:     Referenz Freigebende Person
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:       Behandelnde Person
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: reference
* Name:       Behandelnde Person/Einrichtung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: reference
* Name:     Freigabezeitpunkt
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: datetime
* Name:     Freigabetyp
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name: Referenzierte Profile
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:   Additiv
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:     Code/Bezeichnung
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:       Code-Auswahl
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         HL7®-Code AdditivePreservative
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:         Code aus anderem Codesystem
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:       Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:   Administrative Profile
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:     Behandelnde Person
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:       Identifikator
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         ANR
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: identifier
* Name:         EFN
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: identifier
* Name:         ZANR
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: identifier
* Name:         Telematik-ID
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: identifier
* Name:       Name
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:         Name
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:           Vollständiger Name
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Vorsatzwort
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Namenszusatz
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Titel
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: string
* Name:           Nachname
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: string
* Name:           Vorname
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Anschrift
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         Straßenanschrift
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:           Straße
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Hausnummer
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Anschriftenzusatz
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Stadtteil
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Postleitzahl
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Ort
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Land/Wohnsitzländercode
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:         Postfach
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:           Postfach
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Stadtteil
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Postleitzahl
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Ort
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Land/Wohnsitzländercode
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:       Administratives Geschlecht
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:       Kontaktdaten
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         Kontaktkanal
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:         Wert
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: string
* Name:       Qualifikation
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: code
* Name:       Ergänzende Angaben
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Behandelnde Person/Einrichtung
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:       Referenz Einrichtung/Organisationseinheit
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:         Einrichtung/Organisationseinheit
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: reference
* Name:       Referenz Behandelnde Person
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:         Behandelnde Person
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: reference
* Name:       Fachrichtung - Code/Bezeichnung
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         Code-Auswahl
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:           KBV-Fachgruppencodierung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:           Code aus einem anderen Codesystem
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: code
* Name:         Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Rolle in Bezug auf die Einrichtung - Code/Bezeichnung
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         Code-Auswahl
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:           Rolle in der Einrichtung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:           Code aus einem anderen Codesystem
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: code
* Name:         Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Einrichtung/Organisationseinheit
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:       Identifikator
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         VKNR
  * Kardinalität: 0..*
  * Konformität: R
  * Datentyp: identifier
* Name:         KZV-Abrechnungsnummer
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: identifier
* Name:         IK-Nummer
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: identifier
* Name:         BSNR
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: identifier
* Name:         Telematik-ID
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: identifier
* Name:       Name
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Typ - Code/Bezeichnung
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         Code-Auswahl
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:           IHE-Code
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:           HL7®-Fachabteilungsschlüssel
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:           HL7®-Fachabteilungsschlüssel erweitert
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:           Code aus anderem Codesystem
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: code
* Name:         Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Übergeordnete Einrichtung/Organisationseinheit
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:         Einrichtung/Organisationseinheit
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: reference
* Name:       Anschrift
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         Straßenanschrift
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:           Straße
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Hausnummer
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Anschriftenzusatz
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Stadtteil
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Postleitzahl
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Ort
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Land/Wohnsitzländercode
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:         Postfach
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:           Postfach
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Stadtteil
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Postleitzahl
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Ort
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Land/Wohnsitzländercode
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:       Spezieller Kontakt
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         Kontaktangaben
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:           Kontaktkanal
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:           Wert
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: string
* Name:         Zweck
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:         Name
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:         Adresse
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Organisationskontaktdaten
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         Kontaktkanal
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:         Wert
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: string
* Name:       Ergänzende Angaben
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Kontaktperson
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:       Identifikator
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: string
* Name:       Beziehung - Code/Bezeichnung
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         Code-Auswahl
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:           Patient relationship type
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: code
* Name:           Code aus einem Codesystem
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: code
* Name:         Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Administratives Geschlecht
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:       Name
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:         Vollständiger Name
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:         Vorsatzwort
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:         Namenszusatz
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:         Titel
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:         Nachname
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: string
* Name:         Vorname
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Anschrift
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         Straßenanschrift
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:           Straße
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Hausnummer
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Anschriftenzusatz
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Stadtteil
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Postleitzahl
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Ort
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Land/Wohnsitzländercode
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:         Postfach
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:           Postfach
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Stadtteil
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Postleitzahl
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Ort
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Land/Wohnsitzländercode
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:       Kontaktdaten
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         Kontaktkanal
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:         Wert
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: string
* Name:       Hinweis
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Patient:in
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:       Identifikator
  * Kardinalität: 1..*
  * Konformität: M
  * Datentyp: 
* Name:         VersichertenID
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: identifier
* Name:         Versichertennummer_KVK
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: identifier
* Name:         Versichertennummer_PKV
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: identifier
* Name:         PID
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: identifier
* Name:         Reisepassnummer
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: identifier
* Name:       Name
  * Kardinalität: Bedingung
* Name: 1..1WENN Name bekannt ist
  * Kardinalität: R
  * Konformität: 
* Name: 0..1SONST (beispielsweise bei Pseudonymisierung) DataAbsentReason in FHIR®
  * Kardinalität: O
  * Konformität: 
* Name:         Name
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:           Vollständiger Name
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Vorsatzwort
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Namenszusatz
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Titel
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Nachname
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: string
* Name:           Vorname
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Anschrift
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         Straßenanschrift
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:           Straße
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Hausnummer
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Anschriftenzusatz
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Stadtteil
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Postleitzahl
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Ort
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Land/Wohnsitzländercode
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:         Postfach
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:           Postfach
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Stadtteil
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Postleitzahl
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Ort
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:           Land/Wohnsitzländercode
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:       Geburtsdatum
  * Kardinalität: Bedingung
* Name: 1..1Normalerweise sollte das Datum immer angegeben werden
  * Kardinalität: M
  * Konformität: date
* Name: 0..1In nicht abschließend definierten Ausnahmen ist eine Nichtangabe erlaubt.
  * Kardinalität: O
  * Konformität: date
* Name:       Administratives Geschlecht
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:       Klinisches Geschlecht
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         Klinisches Geschlecht Code/Bezeichnung
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:           HL7®-Code Klinisches Geschlecht
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:           Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:         Zeitraum
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:           von
  * Kardinalität: 0..1
  * Konformität: R
  * Datentyp: datetime
* Name:           bis
  * Kardinalität: 0..1
  * Konformität: R
  * Datentyp: datetime
* Name:         Ergänzende Angaben zum Klinischen Geschlecht
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Kontaktdaten
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         Kontaktkanal
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:         Wert
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: string
* Name:       Personenstand
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:       Sprache
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: code
* Name:       Verstorben
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:         Verstorben
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: boolean
* Name:         Verstorben zum Zeitpunkt
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: datetime
* Name:   Außerkörperliche Quelle
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:     Identifikator außerkörperliche Quelle
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: identifier
* Name:     Spezifischer Typ - Code/Bezeichnung
  * Kardinalität: 0..1
  * Konformität: R
  * Datentyp: 
* Name:       Code-Auswahl
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         SNOMED CT®-Code
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:         Code aus anderem Codesystem
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: code
* Name:       Bezeichnung
  * Kardinalität: 0..1
  * Konformität: R
  * Datentyp: string
* Name:     Kategorie
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:       Code Außerkörperliche Quelle
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:     UDI
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:       UDI-DI
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: string
* Name:       UDI-PI
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Produktnummern
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:       Modellnummer
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Seriennummer
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Chargennummer
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Andere Produktnummer
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         Produktnummer
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:         Bezeichnung der Produktnummer
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Hersteller
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:       Einrichtung/Organisationseinheit
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: reference
* Name:     Version
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Ergänzende Angaben zur außerkörperlichen Quelle
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: string
* Name:   Diagnose
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:     Code/Bezeichnung
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:       Code-Auswahl
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         ICD-10-GM-Code
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:           Diagnosecode
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:           Codierungskennzeichen
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:           ICD-Diagnosesicherheit
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:           ICD-Seitenlokalisation
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:         ALPHA-ID-Code
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:         SNOMED CT®-Code
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:         ORPHANET-Code
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:         Code aus einem anderen Codesystem
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:       Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:   Ergänzende Dokumente
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:     Dateiname
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: string
* Name:     Dateiformat
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:     Datei
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: blob
* Name:     Zeitpunkt der Erstellung des Dokumentes
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: datetime
* Name:   Körperstruktur
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:     Körperstelle Code/Bezeichnung
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:       SNOMED CT®-Code
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:       Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Lateralität Code/Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:       SNOMED CT®-Code
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:       Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Lokalisation Code/Bezeichnung
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:       SNOMED CT®-Code
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:       Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Uhrzeigerposition Code/Bezeichnung
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:       SNOMED CT®-Code
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:       Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Morphologie Code/Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:       SNOMED CT®-Code
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:       Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Ergänzende Angaben
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:   Laboranalysegerät
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:     Spezifischer Typ - Code/Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:       Code-Auswahl
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         SNOMED CT®-Code
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:         Code aus anderem Codesystem
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: code
* Name:       Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Kategorie
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:       Code Laboranalysegerät
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:     Name des Gerätes
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:       Name
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: string
* Name:       Typ
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:     UDI
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:       UDI-DI
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: string
* Name:       UDI-PI
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Produktnummern
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:       Modellnummer
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Seriennummer
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Chargennummer
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Andere Produktnummer
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         Produktnummer
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:         Bezeichnung der Produktnummer
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Hersteller
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:       Einrichtung/Organisationseinheit
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: reference
* Name:     Version
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Ergänzende Angaben zum Laboranalysegerät
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: string
* Name:   Laborauftrag-Informationen
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:     Auftragsidentifikatoren
  * Kardinalität: 1..*
  * Konformität: M
  * Datentyp: 
* Name:       Identifikator Auftraggeber
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: identifier
* Name:       Auftragsnummer des Einsenders
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: identifier
* Name:       Nachforderungsidentifikation
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: identifier
* Name:     Auftragszeitpunkt
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: datetime
* Name:     Laborauftrag-Einsendung von
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:       Behandelnde Person
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: reference
* Name:       Einrichtung/Organisationseinheit
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: reference
* Name:       Behandelnde Person/Einrichtung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: reference
* Name:       Patient:in
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: reference
* Name:       Kontaktperson
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: reference
* Name:     Fragestellung/Begründung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:       Referenz Auftragsdiagnose
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         Diagnose
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: reference
* Name:       Anlass
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Veranlassungsgrund
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Klinische Angaben
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Freitext-Anforderung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Auftragsbezogene Hinweise
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Dringlichkeit
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:   Laborgesamtbefund
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:     Code Laborgesamtbefund
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:     Patient:in
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: reference
* Name:     Referenz Begegnung/Aufenthalt
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: complex
* Name:     Kennzeichen Pseudonymisierter Befund
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: boolean
* Name:     Auftragnehmendes Labor
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:       Behandelnde Person
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: reference
* Name:       Einrichtung/Organisationseinheit
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: reference
* Name:       Behandelnde Person/Einrichtung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: reference
* Name:     Auftragsnummer des Labors
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: identifier
* Name:     Auftragseingangszeitpunkt
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: datetime
* Name:     Laborauftrag-Informationen
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: reference
* Name:     Identifikator Laborgesamtbefund
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:       URI System
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: string
* Name:       UUID
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: string
* Name:     Status Gesamtbefund
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:     Sekundärstatus Gesamtbefund
  * Kardinalität: Bedingung
* Name: 0..3WENN Status Gesamtbefund (DiagnosticReport.status) ="Partial" oder "Preliminary"
  * Kardinalität: O
  * Konformität: code
* Name: 0..0SONST
  * Kardinalität: NP
  * Konformität: code
* Name:     Probe
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:       Probe
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: reference
* Name:     Ergebnisse
  * Kardinalität: 1..*
  * Konformität: M
  * Datentyp: 
* Name:       Sortiernummer Gruppe
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: count
* Name:       Laboruntersuchungsgruppe
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: reference
* Name:     Gesamtbeurteilung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Kennzeichen Kritischer Befund
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: boolean
* Name:     Ergänzende Dokumente
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:       Referenz Ergänzende Dokumente
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:         Ergänzende Dokumente
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: reference
* Name:       Freitext-Angaben zum ergänzenden Dokument
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Zeitpunkt Befund-Erstellung
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: datetime
* Name:     Anhang-Laborgesamtbefund
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:       Dateiname
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: string
* Name:       Dateiformat
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:       Datei
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: blob
* Name:       Zeitpunkt der Erstellung des Dokumentes
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: datetime
* Name:   Laboruntersuchungsgruppe
  * Kardinalität: 1..*
  * Konformität: M
  * Datentyp: 
* Name:     Code Laboruntersuchungsgruppe
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:     Fachliches Gruppierungsmerkmal Auswahl
  * Kardinalität: 0..2
  * Konformität: O
  * Datentyp: 
* Name:       Labormedizinischer Bereich Code/Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:         Code-Auswahl
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:           LOINC®-Code
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:           Code aus anderem Codesystem
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: code
* Name:         Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Test-Profil Code/Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:         Code-Auswahl
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:           Code Test-Profil
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:           Code aus anderem Codesystem
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: code
* Name:         Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Referenz auf Laboruntersuchung
  * Kardinalität: 1..*
  * Konformität: M
  * Datentyp: 
* Name:       Sortiernummer Laboruntersuchung
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: count
* Name:       Laboruntersuchung
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: reference
* Name:     Interpretation Untersuchungsgruppe Code/Bezeichnung
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:       Code-Auswahl
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         HL7®-Code
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:         SNOMED CT®-Code
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:         Code aus anderem Codesystem
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: code
* Name:       Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Untersuchungsbild-Anhang (informativ)
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:       Untersuchungsbild-Anhang
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: reference
* Name:     Ergänzende Angaben zur Untersuchungsgruppe
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: string
* Name:     Durchgeführt von
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:       Behandelnde Person
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: reference
* Name:       Einrichtung/Organisationseinheit
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: reference
* Name:       Behandelnde Person/Einrichtung
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: reference
* Name:   Laboruntersuchung
  * Kardinalität: 1..*
  * Konformität: M
  * Datentyp: 
* Name:     Identifikator Laboruntersuchung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: identifier
* Name:     GTIN-Code
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: identifier
* Name:     Fachliches Gruppierungsmerkmal Auswahl
  * Kardinalität: 0..2
  * Konformität: O
  * Datentyp: 
* Name:       Labormedizinischer Bereich Code/Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:         Code-Auswahl
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:           LOINC®-Code
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:           Code aus anderem Codesystem
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: code
* Name:         Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Test-Profil Code/Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:         Code-Auswahl
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:           Code Test-Profil
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:           Code aus anderem Codesystem
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: code
* Name:         Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Zugrunde liegende Messungen
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:       Laboruntersuchung
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: reference
* Name:     Spezifikation Laboruntersuchung
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:       Laboruntersuchung Code/Bezeichnung
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:         LOINC®-Code
  * Kardinalität: Bedingung
* Name: 0..0WENN ein DataAbsentReason angegeben ist
  * Kardinalität: O
  * Konformität: code
* Name: 1..1SONST
  * Kardinalität: M
  * Konformität: code
* Name:         Bezeichnung Laboruntersuchung
  * Kardinalität: Bedingung
* Name: 1..1WENN anstelle eines LOINC®-Codes ein DataAbsentReason angegeben ist
  * Kardinalität: M
  * Konformität: string
* Name: 0..1SONST
  * Kardinalität: O
  * Konformität: string
* Name:         Grund für das Nichtvorhandensein eines LOINC®-Codes
  * Kardinalität: Bedingung
* Name: 1..1WENN kein LOINC®-Code angegeben ist
  * Kardinalität: M
  * Konformität: code
* Name: 0..0SONST
  * Kardinalität: O
  * Konformität: code
* Name:       Untersuchungsmethode, ergänzende Spezifizierung Code/Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:         Code-Auswahl
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:           SNOMED CT®-Code
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:           Code aus anderem Codesystem
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: code
* Name:         Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Probenart, Ergänzende Spezifizierung (informativ)
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:     Fremdleistung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:       Kennzeichen Fremdleistung
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: boolean
* Name:       Kennzeichen Verbundleistung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: boolean
* Name:     Kennzeichen Akkreditierte Laboruntersuchung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: boolean
* Name:     Durchführendes Labor
  * Kardinalität: 1..*
  * Konformität: O
  * Datentyp: 
* Name:       Behandelnde Person
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: reference
* Name:       Einrichtung/Organisationseinheit
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: reference
* Name:       Behandelnde Person/Einrichtung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: reference
* Name:     Status Laboruntersuchung
  * Kardinalität: 1..1
  * Konformität: O
  * Datentyp: code
* Name:     Probe
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:       Probe
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: reference
* Name:     Gerät
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:       Laboranalysegerät
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: reference
* Name:     Klinischer Bezugszeitpunkt
  * Kardinalität: 1..1
  * Konformität: O
  * Datentyp: datetime
* Name:     Medizinische Freigabe (informativ)
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:       Medizinische Freigabe
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: reference
* Name:     Dokumentationszeitpunkt
  * Kardinalität: 1..1
  * Konformität: O
  * Datentyp: datetime
* Name:     Messergebnis
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:       Messergebnis quantitativ
  * Kardinalität: Bedingung
* Name: 1..1WENN "Messergebnis qualitativ" NICHT vorhanden UND "Begründung Nicht-Verfügbarkeit" NICHT vorhanden
  * Kardinalität: M
  * Konformität: 
* Name: 0..0SONST
  * Kardinalität: NP
  * Konformität: 
* Name:         Kennzeichen &quot;Nicht-linearer Referenzbereich&quot;
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: boolean
* Name:         Ergebniswert Quantität
  * Kardinalität: Bedingung
* Name: 1..1WENN quantitatives Messergebnis vorhanden und UNGLEICH (Ratio ODER Ergebnisbereich)
  * Kardinalität: M
  * Konformität: 
* Name: 0..0SONST
  * Kardinalität: NP
  * Konformität: 
* Name:           Wert
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: quantity
* Name:           Komparator
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:           Einheit
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:         Ergebniswert Ratio
  * Kardinalität: Bedingung
* Name: 1..1WENN quantitatives Messergebnis vorhanden und UNGLEICH (Ergebniswert ODER Ergebnisbereich)
  * Kardinalität: M
  * Konformität: 
* Name: 0..0SONST
  * Kardinalität: NP
  * Konformität: 
* Name:           Komparator
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:           Zähler Ergebniswert Quantität
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:             Wert
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: quantity
* Name:             Einheit
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:           Nenner Ergebniswert Quantität
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:             Wert
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: quantity
* Name:             Einheit
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:         Ergebnisbereich
  * Kardinalität: Bedingung
* Name: 1..1WENN quantitatives Messergebnis vorhanden und UNGLEICH (Ergebniswert ODER Ratio)
  * Kardinalität: M
  * Konformität: 
* Name: 0..0SONST
  * Kardinalität: NP
  * Konformität: 
* Name:           Obergrenze
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:             Wert
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: quantity
* Name:             Einheit
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:           Untergrenze
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:             Wert
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: quantity
* Name:             Einheit
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:       Messergebnis qualitativ Code/Bezeichnung
  * Kardinalität: Bedingung
* Name: 1..1WENN "Messergebnis quantitativ" NICHT vorhanden UND "Begründung Nicht-Verfügbarkeit" NICHT vorhanden
  * Kardinalität: M
  * Konformität: 
* Name: 0..0SONST
  * Kardinalität: NP
  * Konformität: 
* Name:         Ergebnis Code-Auswahl
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:           SNOMED CT® Code
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:           Code aus anderem Codesystem
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: code
* Name:         Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Textergebnis
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Begründung Nicht-Verfügbarkeit
  * Kardinalität: Bedingung
* Name: 1..1WENN Messergebnis fehlt (WENN "Messergebnis qualitativ" NICHT vorhanden und WENN "Messergebnis quantitativ" NICHT vorhanden)
  * Kardinalität: M
  * Konformität: code
* Name: 0..0SONST
  * Kardinalität: NP
  * Konformität: code
* Name:     Richtgrenzen
  * Kardinalität: Bedingung
* Name: 1..*WENN ein quantitatives Messergebnis vorliegt
  * Kardinalität: M
  * Konformität: 
* Name: 0..1SONST
  * Kardinalität: O
  * Konformität: 
* Name:       Richtgrenzen-Typ Code/Bezeichnung
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:         Code-Auswahl
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:           HL7® Typen von Referenzbereichen
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:           Code aus anderem Codesystem
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: code
* Name:         Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Kollektiv-Bezug Code/Bezeichnung
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         Code-Auswahl
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:           HL7®-Code
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:           Code aus einem Codesystem
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: code
* Name:         Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Quelle für Richtgrenzen
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Obere Richtgrenze
  * Kardinalität: Bedingung
* Name: 1..1WENN Untere Richtgrenze nicht ausgefüllt
  * Kardinalität: M
  * Konformität: 
* Name: 0..1SONST
  * Kardinalität: O
  * Konformität: 
* Name:         Wert
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: quantity
* Name:         Komparator
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:         Einheit
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:       Untere Richtgrenze
  * Kardinalität: Bedingung
* Name: 1..1WENN Obere Richtgrenze nicht ausgefüllt
  * Kardinalität: M
  * Konformität: 
* Name: 0..1SONST
  * Kardinalität: O
  * Konformität: 
* Name:         Wert
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: quantity
* Name:         Komparator
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:         Einheit
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:       Textbasierte Referenz
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     zlog-Wert
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: decimal
* Name:     Messergebnis mit Alternativeinheit
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:       Messergebnis quantitativ mit Alternativeinheit
  * Kardinalität: Bedingung
* Name: 1..1WENN zum quantitativen Messergebnis (empfohlene Einheit) die Darstellung mit Alternativeinheit vorgesehen ist
  * Kardinalität: M
  * Konformität: 
* Name: 0..0SONST
  * Kardinalität: O
  * Konformität: 
* Name:         Ergebniswert Quantität mit Alternativeinheit
  * Kardinalität: Bedingung
* Name: 1..1WENN zum primären Ergebniswert Quantität (empfohlene Einheit) die Darstellung mit Alternativeinheit vorgesehen ist
  * Kardinalität: M
  * Konformität: 
* Name: 0..0SONST
  * Kardinalität: O
  * Konformität: 
* Name:           Wert
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: quantity
* Name:           Komparator
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:           Einheit
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:         Ergebniswert Ratio mit Alternativeinheit
  * Kardinalität: Bedingung
* Name: 1..1WENN zum primären Ergebniswert Ratio (empfohlene Einheit) die Darstellung mit Alternativeinheiten vorgesehen ist
  * Kardinalität: M
  * Konformität: 
* Name: 0..0SONST
  * Kardinalität: O
  * Konformität: 
* Name:           Komparator
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:           Zähler Ergebniswert Quantität
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:             Wert
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: quantity
* Name:             Einheit
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:           Nenner Ergebniswert Quantität
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:             Wert
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: quantity
* Name:             Einheit
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:         Ergebnisbereich mit Alternativeinheit
  * Kardinalität: Bedingung
* Name: 1..1WENN zum primären Ergebnisbereich (empfohlene Einheit) die Darstellung mit Alternativeinheit vorgesehen ist
  * Kardinalität: M
  * Konformität: 
* Name: 0..0SONST
  * Kardinalität: O
  * Konformität: 
* Name:           Obergrenze
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:             Wert
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: quantity
* Name:             Einheit
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:           Untergrenze
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:             Wert
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: quantity
* Name:             Einheit
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:       Richtgrenzen für Alternativeinheit
  * Kardinalität: Bedingung
* Name: 1..*WENN ein quantitatives Messergebnis mit Alternativeinheit existiert, sind die entsprechenden zugehörigen Richtgrenzen mit Alternativeinheit erforderlich
  * Kardinalität: M
  * Konformität: 
* Name: 0..0SONST
  * Kardinalität: O
  * Konformität: 
* Name:         Obere Richtgrenze für Alternativeinheit
  * Kardinalität: Bedingung
* Name: 1..1WENN ein quantitatives Messergebnis mit Alternativeinheit existiert UND zum primären quantitativen Messergebnis eine obere Richtgrenze existiert, ist die entsprechende obere Richtgrenze mit Alternativeinheit erforderlich
  * Kardinalität: M
  * Konformität: 
* Name: 0..0SONST
  * Kardinalität: O
  * Konformität: 
* Name:           Wert
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: quantity
* Name:           Komparator
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:           Einheit
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:         Untere Richtgrenze für Alternativeinheit
  * Kardinalität: Bedingung
* Name: 1..1WENN ein quantitatives Messergebnis mit Alternativeinheit existiert UND zum primären quantitativen Messergebnis eine untere Richtgrenze existiert, ist die entsprechende untere Richtgrenze mit Alternativeinheit erforderlich
  * Kardinalität: M
  * Konformität: 
* Name: 0..0SONST
  * Kardinalität: O
  * Konformität: 
* Name:           Wert
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: quantity
* Name:           Komparator
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:           Einheit
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:       zlog-Wert basierend auf Ergebnis mit Alternativeinheit
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: decimal
* Name:     Interpretation Laboruntersuchung Code/Bezeichnung
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:       Code-Auswahl
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         HL7®-Code
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:         SNOMED CT®-Code
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:         Code aus anderem Codesystem
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: code
* Name:       Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Untersuchungsbild-Anhang (informativ)
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:       Untersuchungsbild-Anhang
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: reference
* Name:     Ergänzende Angaben zur durchgeführten Untersuchung
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: string
* Name:   Medizinische Freigabe
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:     Referenz auf das Ziel
  * Kardinalität: 1..*
  * Konformität: M
  * Datentyp: 
* Name:       Laboruntersuchung
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: reference
* Name:     Freigebende Person
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:       Behandelnde Person
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: reference
* Name:       Behandelnde Person/Einrichtung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: reference
* Name:     Medizinischer Freigabezeitpunkt
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: datetime
* Name:     Freigabetyp
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:   Probe
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:     Ausgangsmaterial
  * Kardinalität: Bedingung
* Name: 1..*WENN diese Probe aus einer Primärprobe gewonnen wurde (=diese Probe ist eine Sekundärprobe mit Bezug auf die Primärprobe)
  * Kardinalität: M
  * Konformität: 
* Name: 0..0SONST
  * Kardinalität: NP
  * Konformität: 
* Name:       Probe
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: reference
* Name:     Identifikator Probe
  * Kardinalität: 1..*
  * Konformität: M
  * Datentyp: 
* Name:       ID-Typ Code/Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:         Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       ID-Wert
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: string
* Name:     Status Probe
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:     Zustand Probe Code/Bezeichnung
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:       Code Zustand Probe
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:       Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Probenart, ergänzende Spezifizierung Code/Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:       Code-Auswahl
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         SNOMED CT®-Code
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:         Code aus anderem Codesystem
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: code
* Name:       Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Probeneingangszeitpunkt
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: datetime
* Name:     Probengewinnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:       Probenehmer:in
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:         Behandelnde Person
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: reference
* Name:         Behandelnde Person/Einrichtung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: reference
* Name:       Zeitangabe
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:         Zeitpunkt
  * Kardinalität: Bedingung
* Name: 1..1WENN Entnahme zu einem konkreten Zeitpunkt erfolgt
  * Kardinalität: M
  * Konformität: datetime
* Name: 0..0SONST
  * Kardinalität: NP
  * Konformität: datetime
* Name:         Zeitraum
  * Kardinalität: Bedingung
* Name: 1..1WENN über einen konkreten Zeitraum gesammelt wird
  * Kardinalität: M
  * Konformität: 
* Name: 0..0SONST
  * Kardinalität: NP
  * Konformität: 
* Name:           von
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: datetime
* Name:           bis
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: datetime
* Name:         Dauer
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:           Wert
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: quantity
* Name:           Komparator
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:           Einheit
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:       Methode Probengewinnung Code/Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:         Code-Auswahl
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:           SNOMED CT®-Code
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:           Code aus anderem Codesystem
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: code
* Name:         Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Entnahmeort
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         Körperstruktur
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:           Körperstruktur
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: reference
* Name:         Außerkörperliche Quelle
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:           Außerkörperliche Quelle
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: reference
* Name:       Nüchternstatus
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:         Nüchternstatus Code/Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:           Code Nüchternstatus
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:           Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:         Dauer
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:           Wert
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: quantity
* Name:           Komparator
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:           Einheit
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:     Probenverarbeitung
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:       Methode Code/Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:         Code Auswahl
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:           HL7®-Code
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:           Code aus anderem Codesystem
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: code
* Name:         Bezeichnung
  * Kardinalität: 0..1
  * Konformität: R
  * Datentyp: string
* Name:       Referenz Additiv
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         Additiv
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: reference
* Name:       Zeitangabe
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:         Zeitpunkt
  * Kardinalität: Bedingung
* Name: 1..1WENN die Verarbeitung zu einem konkreten Zeitpunkt erfolgt
  * Kardinalität: M
  * Konformität: datetime
* Name: 0..0SONST
  * Kardinalität: NP
  * Konformität: datetime
* Name:         Zeitraum
  * Kardinalität: Bedingung
* Name: 1..1WENN über einen konkreten Zeitraum verarbeitet wird
  * Kardinalität: M
  * Konformität: 
* Name: 0..0SONST
  * Kardinalität: NP
  * Konformität: 
* Name:           von
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: datetime
* Name:           bis
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: datetime
* Name:       Beschreibung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Angaben zum Probenbehälter
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:       Referenz auf Probenbehälter
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:         Probenbehälter
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: reference
* Name:       Menge der Probe im Behälter
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:         Wert
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: quantity
* Name:         Einheit
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:     Ergänzende Angaben zur Probe
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: string
* Name:   Probenbehälter
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:     Identifikator Probenbehälter
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: identifier
* Name:     Spezifischer Typ - Code/Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:       Code-Auswahl
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         SNOMED CT®-Code
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: code
* Name:         Code aus anderem Codesystem
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: code
* Name:       Bezeichnung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Kategorie
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: 
* Name:       Code Probenbehälter
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:     UDI
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:       UDI-DI
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: string
* Name:       UDI-PI
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Produktnummern
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:       Modellnummer
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Seriennummer
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Chargennummer
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:       Andere Produktnummer
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:         Produktnummer
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:         Bezeichnung der Produktnummer
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: string
* Name:     Hersteller
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: 
* Name:       Einrichtung/Organisationseinheit
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: reference
* Name:     Ergänzende Angaben zum Probenbehälter
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: string
* Name:   Untersuchungsbild-Anhang
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:     Referenz auf Untersuchung/Untersuchungsgruppe
  * Kardinalität: 1..*
  * Konformität: M
  * Datentyp: 
* Name:       Laboruntersuchungsgruppe
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: reference
* Name:       Laboruntersuchung
  * Kardinalität: 0..1
  * Konformität: O
  * Datentyp: reference
* Name:     Code für Untersuchungsbild-Anhang
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:     Status Untersuchungsbild-Anhang
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: string
* Name:     Dateiname
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: string
* Name:     Dateiformat
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: code
* Name:     Datei
  * Kardinalität: 1..1
  * Konformität: M
  * Datentyp: blob
* Name:     Ausführende Person/Einrichtung
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: 
* Name:     Ergänzende Angaben
  * Kardinalität: 0..*
  * Konformität: O
  * Datentyp: string

