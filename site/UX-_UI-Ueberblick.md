# UX-/UI-Überblick - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* **UX-/UI-Überblick**

## UX-/UI-Überblick

### Einführung

### Wo stehen wir gerade?

Wir haben zahlreiche Reviews mit unseren Stakeholdern durchgeführt, um unsere Konzepte für eine optimale Nutzererfahrung (UX) im Zusammenhang mit dem MIO Laborbefund zu validieren. In Zusammenarbeit mit Vetreter:innen aus unserem labormedizinischem Beirat, dem HÄV, dem bvitg und der DKG haben wir wertvolles Feedback aus der Perspektive der Versorgenden sowie der Industrie gesammelt. Auf dieser Grundlage können wir nun einen abgestimmten UX-Vorschlag für die [Darstellung eines einzelnen Laborbefunds](./Einzelbefunddarstellung_in_der_Primaersystemansicht.md) präsentieren, der die wichtigsten UX-Thesen umfasst. Außerdem können wir Entwürfe zu einer möglichen Integration im Primärsystem bereitstellen, die kritische UX-Fragen fokussieren und für die weitere Spezifikationsarbeit als Diskussionsgrundlage dienen können.

Eine Prüfung der Umsetzbarkeit der hier gezeigten Vision oder eine Einordnung in konkrete Einführungsschritte muss in einem nächsten Schritt gemeinsam mit der gematik erarbeitet werden.

#### Workflows in Primärsystemen

Bezüglich der Workflows in den Primärsystemen sind wir zu folgendem Ergebnis gekommen: Laborbefunde werden nach ihrer Erstellung als MIO weiterhin als Einzeldokumente behandelt. Das bedeutet, sie können wie bisherige (PDF-)Befunde gelesen, versendet, hoch- und heruntergeladen werden. Diese Standardaktionen haben wir nicht gesondert visualisiert. Unsere Prozessanalyse hat jedoch andere kritische UX-Punkte identifiziert, die wir näher betrachten möchten: die zusammengeführte Darstellung von Ergebnissen über mehrere Laborbefunde hinweg (Kumulativdarstellung) und die Interaktionen zwischen Primärsystem und (Service-basierter) ePA zum Abrufen der Laborbefunde.

#### Wichtigster Mehrwert des MIO Laborbefund in der Nachnutzung: Kumulativansicht

Der besondere Mehrwert der strukturierten Daten liegt in der flexiblen Nachnutzung. Beispielsweise können Befunde aus verschiedenen Datenquellen, d. h., aus unterschiedlichen Laboren, in einer Übersicht, etwa als [Kumulativansicht](./Kumulativdarstellung_in_der_Primaersystemansicht.md) (tabellarisch und chronologisch sortiert), angezeigt werden. Weitere Vorteile umfassen die Übertragung der Daten in andere Berichtsdokumente sowie (KI-)gestützte Auswertungen von Verläufen in Verbindung mit weiteren Gesundheitsdaten und vieles mehr. Wir betrachten aber die Kumulativdarstellung als das relevanteste MIO-spezifische Nachnutzungspotenzial und haben uns daher am Beispiel eines Hausärzt:innen-PVS Gedanken gemacht, was hier bei Implementierung zu beachten wäre. Dabei haben wir die zentralen UX-Thesen sowie offene Fragestellungen dokumentiert.

Eine Erkenntnis hier ist, dass eine Kumulativdarstellung nur dann effektiv ist, wenn Untersuchungen, die inhaltlich zusammengehören, auch in einer Zeile angezeigt werden. Aktuell entspricht dies nicht der heterogenen Dokumentationsweise der verschiedenen Labore und deren LOINC**®**-Codierung. Die Vielzahl an Codes und deren spezifische Details führen oft zu mehreren Codierungsmöglichkeiten. Dieses Problem ist nicht neu, da Praxissysteme bereits jetzt strukturierte Daten aus unterschiedlichen Quellen zusammenführen. Mit der Einführung des MIO und der damit verbundenen Einbeziehung einer größeren Anzahl an Befunden aus verschiedenen Quellen wird dieses Thema jedoch noch bedeutender.

Um diese Herausforderungen zu adressieren, arbeiten wir an der Ausarbeitung einer Lösung zunächst für die gebräuchlichsten Laboruntersuchungen, die zugleich auch für Verlaufsansichten relevant sind (s. hierzu die Ausführungen zur Kernliste unter [Unterstützungsleistungen zur LOINC-Einführung](./Grundlagen_zur_Terminologienutzung.md#untersttzungsleistungen-zur-loinc-einfhrung)).

#### Neue ePA-Interaktionen durch die Service-basierte ePA

Ein weiterer zentraler Punkt aus UX-Perspektive sind die möglichen [ePA-Interaktionen](./Moegliche_Primaersysteminteraktionen_mit_der_ePA.md). Die Art und Weise, wie Labordaten in den Service-basierten Teil der ePA integriert werden, bestimmt, wie auf diese beispielsweise im Rahmen von Suchanfragen nach Vorbefunden zugegriffen werden kann. Im Vergleich zur Dokumenten-basierten ePA ergeben sich hier ganz neue Möglichkeiten, insbesondere, was die Suchkriterien anbetrifft.

**🛈 Hinweis**

Unsere Visualisierungen sollen als Diskussionsgrundlage für weitere Entwicklungsschritte dienen und stellen keine verbindliche Vorgabe zur Umsetzung dar.

