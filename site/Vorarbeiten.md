# Vorarbeiten - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* **Vorarbeiten**

## Vorarbeiten

### Derzeitige digitale Austauschformate für Laborbefunde

Bisher gibt es keinen verbindlichen Standard für digitale Laborbefunde, der sowohl im ambulanten als auch im stationären Sektor genutzt wird. Vorgaben zur Datenstruktur liefert die [Rili-BÄK 2019](https://www.bundesaerztekammer.de/fileadmin/user_upload/BAEK/Themen/Qualitaetssicherung/_Bek_BAEK_RiLi_QS_laboratoriumsmedizinischer_Untersuchungen.pdf) (Richtlinie Bundesärztekammer), insbesondere Teil A Kap. 6 relevante Inhalte. Weiter gibt die [DIN EN ISO 15189 Medizinische Laboratorien](https://www.dakks.de/de/medizinische-labore-din-en-iso-15189.html)im Kapitel „Befundberichte“ zur Rili-BÄK kompatible Vorgaben bezüglich der Anforderungen an einen Laborbefundbericht.

Zum digitalen Austausch von Laborbefunden werden in der medizinischen Versorgung in Deutschland seit einigen Jahren vorrangig zwei Formate genutzt: Vor allem im ambulanten Sektor kommt der Kommunikationsstandard [“Labordatentransfer” (LDT)](https://update.kbv.de/ita-update/Labor/Labordatenkommunikation/EXT_ITA_VGEX_LDT%203_2_19_Gesamtdokument.pdf) zum Einsatz. Er existiert in mehreren Versionen. Die aktuellste Version 3 hat jedoch keine flächendeckende Verbreitung in der ambulanten Labordatenkommunikation gefunden. Entwickelt wurde der LDT vom Qualitätsring Medizinische Software e. V. (QMS) und der Kassenärztlichen Bundesvereinigung (KBV). Er liefert in seiner Datensatzbeschreibung Grundlagen für die Strukturierung von Laborbefunden und deckt alle Teilprozesse ab, wie z. B. Auftrag, Laborbefund und Abrechnungsdaten. Innerhalb von Kliniken sind [HL7 V2.x Nachrichten](https://hl7.de/themen/hl7-v2-x-nachrichten/) für die Kommunikation von Versicherten- und Leistungsdaten sowie Leistungsanforderungen weit verbreitet. Teilweise kommt bereits eine **HL7 Version 3** zum Einsatz. Grundsätzlich handelt es sich hierbei um einen syntaktischen Standard. Eine standardisierte Beschreibung von Laborbefunden liegt in diesem Kontext nicht vor.

In Gremien und von zahlreichen Stakeholdern wurde wiederholt der Wunsch geäußert, das MIO Laborbefund langfristig als führenden Standard und zentrale Datenquelle zu etablieren. Ziel ist es, Laborbefunde zukünftig in allen Fachbereichen und Sektoren über ein einheitliches Format zu kommunizieren, auch außerhalb der ePA. Für die Kommunikation zwischen Leistungserbringenden bedeutet dies, vorrangig das MIO Laborbefund zu nutzen und dabei einen sicheren Übertragungsweg gemäß den Vorgaben des SGB V einzuhalten.

Für die Analyse und Erarbeitung des MIO Laborbefund wurden bewährte Konzepte aus aktuell genutzten Standards und Richtlinien sowie Vorarbeiten von Fachgremien berücksichtigt. Dabei wurde jedoch darauf geachtet, dass der Scope des MIO Laborbefund, also die strukturierte Abbildung aller medizinisch relevanten Informationen im Zusammenhang mit einer labormedizinischen Untersuchung, nicht verlassen wird. Im Gegensatz zum LDT enthält das MIO daher keine abrechnungsrelevanten Daten. ausschließlich den Laborbefund als fachliches Gesamtergebnis des Prozesses und basiert auf international standardisierten Terminologien, was einen wichtigen Unterschied zum LDT darstellt.

Im Zuge der Einführung des MIO müssen bestehende Übertragungsformate wie LDT, HL7v2 und HL7 FHIR berücksichtigt und idealerweise schrittweise durch das MIO Laborbefund ersetzt werden.

### Harmonisierung des MIO Laborbefund mit anderen Spezifikationen zu Labordaten

Damit ein reibungsloser Datenaustausch und eine einheitliche Kommunikation von Labordaten gewährleistet werden kann, wird eine weitgehende Harmonisierung mit bestehenden Standardisierungsprojekten angestrebt. Dies ist sowohl im Hinblick auf den EU-grenzüberschreitenden Austausch von Gesundheitsdaten als auch im Hinblick auf die Weiterverwendung der MIO Laborbefund-Daten für Forschungszwecke notwendig. Klarstellend muss jedoch darauf hingewiesen werden, dass sich die zu harmonisierenden Spezfikationen in Teilen unterscheiden müssen, um ihren jeweiligen Anwendungszweck bestmöglich zu untersützen.

#### EHDS Laboratory Report

Vom eHN (eHealth Network) wurden Guidelines entwickelt, die den grenzüberschreitenden Datenaustausch von Gesundheitsdaten in Europa unterstützen sollen. Ausgangspunkt der Aktivitäten des eHN ist die Cross-Border Directive EU2011/24. Die Guidelines bilden die Grundlage zur fachlichen Ausgestaltung der in der [Verordnung über den Europäischen Gesundheitsdatenraum (EHDS)](https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space-regulation-ehds_de) festgelegten priorisierten Kategorien elektronischer Gesundheitsdaten. Eine der entwickelten Guidelines ist die [eHN Guideline Laboratory Report](https://health.ec.europa.eu/publications/ehn-laboratory-result-guidelines_en). Auf dieser Basis entwickelte HL7® Europe einen Vorschlag für einen [Implementation Guide zum Laboratory Report](https://build.fhir.org/ig/hl7-eu/laboratory/), welcher nach derzeitigem Stand in dieser Form von der europäischen Koordinierungsgruppe des [Xt-EHR Projekts](https://www.xt-ehr.eu/projectoverview/) für die einzelnen priorisierten Datenkategorien an die EU-Kommission weitergereicht wird. Diese ist verantwortlich für die späteren Implementing Acts, welche unter anderem die detaillierten technischen Vorgaben zur Implementierung des European Electronic Health Record Exchange Format (EEHRxF), basierend auf FHIR (Fast Healthcare Interoperability Resources) enthalten wird. Der innereuropäische Austausch von Labordaten entsprechend dieser Vorgaben soll ab dem 26. März 2031 erfolgen.

Das MIO Laborbefund wurde auf die Kompatibilität mit dem HL7 Europe Laboratory Report abgeglichen und soweit möglich und notwendig angepasst. Bestimmte nationale Besonderheiten wie beispielsweise eine Gruppierung von Laboruntersuchungen unterscheiden die beiden Spezifikationen, ohne das dies EInfluss auf die Kompatibilität hätte. An anderen Stellen gelten im MIO Laborbefund fachlich begründete abweichende Vorgaben zu Valuesets, bei denen entsprechende Vorgaben für ein Mapping am NCPeH zur EU-Kompatibilität führen sollen.

#### Medizininformatik Initiative: Kerndatensatz-Modul Laborbefund

Die **[Medizininformaik-Initiative (MII)](https://www.medizininformatik-initiative.de/de/start)** legt den Fokus auf die Vereinheitlichung der Daten an universitätsmedizinischen Standorten, um diese vor allem für Forschungszwecke zu nutzen. Dazu hat sie u. a. das [Kerndatensatz-Modul Laborbefund](https://www.medizininformatik-initiative.de/Kerndatensatz/KDS_Laborbefund_2026/MIIIGModulLaborbefund.html) entwickelt. Dieses ist in HL7® FHIR® spezifiziert und folgt sowohl nationalen als auch internationalen Standards, wie LOINC® und SNOMED CT®.

Die Arbeiten der MII und der mio42 GmbH wurden gegenseitig gesichtet. Die Ergebnisse dieses Abgleichs sind in die Ausgestaltung der jeweiligen Modellierungen eingeflossen.

#### Deutsches Elek­tro­ni­sches Melde- und Infor­ma­tions­system für den Infek­tions­schutz (DEMIS)

Das [Deutsche Elektro­nische Melde- und Infor­ma­tions­system für den Infektions­schutz (DEMIS)](https://www.rki.de/DE/Themen/Infektionskrankheiten/Meldewesen/DEMIS/DEMIS_inhalt.html) ermöglicht seit Juni 2020 bundes­weit die elektro­nische Meldung gemäß Infektions­schutz­gesetz (IfSG).

Eine Harmonisierung wird insofern angestrebt, sodass zukünftig eine Teilmenge aus dem MIO Laborbefund in die DEMIS-Meldungautomatisiert übernommen werden kann.

#### Antibiotika-Resistenz-Surveillance (ARS)

Die Entstehung und Ausbreitung von Resistenzen gegen Antibiotika hat sich weltweit zu einem gravierenden Problem der öffentlichen Gesundheit entwickelt, da dadurch die Behandlung von bakteriellen Infektionskrankheiten zunehmend erschwert wird. Als Reaktion darauf hat das Bundesministerium für Gesundheit die [Deutsche Antibiotika Resistenzstrategie (DART)](https://amr.rki.de/Content/Common/Strategies.aspx) entwickelt. Eine zentrale Stellung nehmen dabei Surveillance-Systeme zur Antibiotika-Resistenz sowie zum Antibiotika-Verbrauch ein, um auf der Basis verlässlicher und repräsentativer Daten Maßnahmen zur Begrenzung des Problems ergreifen zu können.

Eine Harmonisierung wird insofern angestrebt, sodass zukünftig eine Teilmenge aus dem MIO Laborbefund in die **ARS-Meldung** automatisiert übernommen werden kann.

#### Informationstechnische Systeme in Krankenhäusern (ISiK)

Die gematik entwickelt mit [ISiK](https://fachportal.gematik.de/zielgruppen/primaersystemhersteller/isik) einen Standard zum Informationsaustausch zwischen Softwarekomponenten im Krankenhaus. Nach derzeitigem Stand umfasst ISiK noch keine Labordatenkommunikation, sondern lediglich ein Support-Modul für Laboruntersuchungen in AMTS-Use-Cases. Die Spezifikationen wurden gegenseitig gesichtet und der Austausch wird fortgeführt.

#### Terminologien in Laborbefunden

In Deutschland gibt es noch keine verbindlichen Vorgaben bzw. kein einheitliches Vorgehen, um eine semantische Interoperabilität von Labordaten sicherzustellen. Bisher werden Laboruntersuchungen in den Leistungskatalogen der Labore überwiegend mit systemeigenen Codes zur Identifikation versehen. Für die codierte Spezifikation von Laboruntersuchungen ist international und EU-weit [LOINC®](https://loinc.org/) als Code-System anerkannt und etabliert ([Erklärung LOINC®](https://mio.kbv.de/spaces/MIOATT/pages/127048637/Erkl%C3%A4rung+LOINC%C2%AE)).

Im MIO Laborbefund sollen deshalb die einzelnen Laboruntersuchungen über LOINC® spezifiziert werden. Für weitere semantische Codierungen, wie im u.g. Beispiel beim qualitativen Ergebnis, kommt [SNOMED CT®](https://www.snomed.org/) ([Erklärung SNOMED CT®](https://mio.kbv.de/pages/viewpage.action?pageId=30146912)) zum Einsatz. Das gilt auch für eine ergänzende Spezifizierung der angewandten Untersuchungsmethode sowie der dafür eingesetzten Probenmaterialien. Diese Vorgehensweise deckt sich mit den zu erwartenden Vorgaben zum Laboratory Report auf EU-Ebene (s. o.).

Beispiel

Laboruntersuchung “Fragestellung”:

* LOINC® 5196-1
 Hepatitis B virus surface Ag [Presence] in Serum or Plasma by Immunoassay
 Hepatitis-B-Virus-Oberflächen-Antigen [Nachweis] in Serum oder Plasma mit Immunoassay (deutsche Lingusitic Variant)

Qualitatives Ergebnis “Antwort”:

* SNOMED CT®260385009
 Negative (qualifier value)

#### Deutschsprachige LOINC®-Liste

Ein großer Teil der internationalen laborspezifischen LOINC®-Codes wurde vom [Bundesinstitut für Arzneimittel und Medizinprodukte (BfArM)](https://www.bfarm.de/DE/Home/_node.html) ins Deutsche übersetzt und durch das [Regenstrief Institute](https://www.regenstrief.org/) als [linguistic variants](https://loinc.org/linguistic-variants/) veröffentlicht**.** Die Erweiterung der deutschsprachigen LOINC®-Liste erfolgt fortlaufend.

#### LOINC®-Integration in den Primärsystemen

Die Integration von LOINC®-Codes in die Primärsysteme der elektronischen Laborbefunddokumentation stellt einen wichtigen Schritt in der Standardisierung und Optimierung von Laboranalysen dar. Hier sind die Schlüsselpunkte und Herausforderungen dieser Integration zusammengefasst:

**Fachliche Administration**: Innerhalb des Laborinformationssystems (LIS) einer Labororganisation ist eine Zuordnung der LOINC®-Codes zu den einzelnen Leistungen des zentralen Leistungskatalogs notwendig.

**Automatisierte Zuordnung in der Systemanwendung**: Bei der elektronischen Laborbefunddokumentation werden LOINC®-Codes, die in den Katalogdaten bereits verknüpft sind, als Hintergrundverarbeitung mitgegeben. Die Befund-dokumentierende Person (z.B. Laborärzt:innen) hat diesbezüglich keinen Codier-Aufwand.

