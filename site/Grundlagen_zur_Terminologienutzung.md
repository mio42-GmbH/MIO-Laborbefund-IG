# Grundlagen zur Terminologienutzung - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* **Grundlagen zur Terminologienutzung**

## Grundlagen zur Terminologienutzung

### Status Quo

Laboruntersuchungen werden in Deutschland aktuell noch sehr individuell klassifiziert, so dass Ergebnisse vergleichbarer Untersuchungen aus unterschiedlichen Laboren meist nicht maschinell in eine Kumulativdarstellung gebracht werden können. Hinzu kommt en teilweise regional begründeter unterschiedlicher Gebrauch von Messeinheiten, was die Vergleichbarkeit zusätzlich erschwert. Für eine entsprechende Harmonisierung braucht es die Nutzung von Terminologien. Dementsprechend sollen viele der strukturierten Informationen im MIO Laborbefund je nach Kontext als LOINC®-, SNOMED CT®- oder UCUM®-Code angegeben werden. Dies entspricht auch den Interoperabilitätsbestrebungen auf europäischer Ebene. Die notwendige EHDS-Kompatibilität wird von Beginn an sichergestellt.

### Geplantes Vorgehen: Stufenweise Einführung

Da die Bandbreite von Laboruntersuchungen sehr hoch ist und deren Ergebnisse mit Hilfe von mehr als 18.000 LOINC**®-**Codes angegeben werden können, lässt sich das durch die Labore zu erbringende Leistungskatalog-Mapping nicht aus dem Stand heraus in vollem Umfang erreichen. Neben der Einführung von LOINC**®** insbesondere zur Klassifizierung der Untersuchung bestehen noch weitere Herausforderungen in terminologischer Hinsicht. Dazu zählen beispielsweise die codierte Angabe der Prozeduren zur Probenentnahme oder Untersuchungsmethode in SNOMED CT**®** oder die Angabe quantitativer Messgrößen in UCUM**®**-Einheiten. Es braucht daher ein stufiges Vorgehen. Darüber besteht im Grundsatz Konsens zwischen den am dgLP-Einführungsprozess Beteiligten. Auf die entsprechenden Ausführungen im dgLP-Fachkonzept der gematik wird entsprechend verwiesen.

Einen abgestimmten (Zeit)Plan gibt es hierzu noch nicht. Vorstellbar ist, dass Labore zunächst nur die in der im Folgenden beschriebenen Kernliste enthaltenen Untersuchungen codiert angeben sollen und sich der Umfang in einem zweiten Schritt an der LOINC**®-**Mapping-Starthilfe orientiert.

### Unterstützungsleistungen zur LOINC-Einführung

#### Anwendungsleitfaden des BfArM

Das Bundesinstitut für Arzneimittel und Medizinprodukte hat einen [Anwendungsleitfaden zur Kodierung von Labordaten in der elektronischen Patientenakte](https://www.bfarm.de/DE/Kodiersysteme/Terminologien/LOINC-UCUM/LOINC-und-RELMA/Anwendungsleitfaden/_node.html) veröffentlicht, welcher die Anwender:innen bei der Nutzung von Kodiersystemen unterstützen soll. Er vermittelt bzw. enthält

* Grundlagen über die Verwendung von medizinischen Terminologien im Laborbereich
* Basiswissen über Inhalt und Syntax zu LOINC®, UCUM**®** und SNOMED CT**®** zur Kodierung von Labordaten
* Regeln und Hinweise zur Auswahl von LOINC**®**-Termen, um eine einheitliche Verwendung von LOINC**®** zu unterstützen
* Hinweise, wie die Kodiersysteme bezogen werden können
* Handreichungen zur Unterstützung beim Daten-Mapping: Allgemeine Hinweise, Schritt-für-Schritt-Anleitungen, Beispiele

und richtet sich daher insbesondere an

* Personen und Organisationen, die ein LOINC**®**-Mapping im Laborbereich insbesondere für die ePA durchführen
* Softwareherstellende der datenverarbeitenden Systeme (LIS, PVS, KIS)
* Entwickelnde von Informationsmodellen.

#### Kernliste

Die Kernliste enthält zunächst ca. 130 Laboranalyten, welche regelhaft durch eine breite Anwenderschaft sowohl im ambulanten als auch stationären Setting in Auftrag gegeben werden und bei denen gleichzeitig eine Verlaufssicht auf die Entwicklung der Ergebnisse einen wertvollen Beitrag für die medizinische Prävention Versicherter bzw. für die Behandlung von Patient:innen leistet. Sie liefert einen Grundstein, mit dem für jedes Labor bei überschaubarem Codier- bzw. Mapping-Aufwand ein Einstieg in die semantische Interoperabilität für Laborwerte möglich gemacht wird, sofern das jeweilige LIS dieses adäquat unterstützt. Durch die mit dieser Kernliste empfohlene Kodierung wird zumindest für die praxisrelevantesten Analyten von Beginn an eine laboreinrichtungsübergreifende Kumulativdarstellung auf der empfangenden Seite, insbesondere bei den Hausärzt:innen, ermöglicht. Damit kann die Kernliste entscheidend zu einer frühzeitigen Akzeptanz der MIO-Einführung beitragen.

[Grundlagen_zur_Terminologienutzung_Kern-Liste_Zwischenveroeffentlichung_2026-06.xlsx](./Grundlagen_zur_Terminologienutzung_Kern-Liste_Zwischenveroeffentlichung_2026-06.xlsx)

Im Folgenden werden die wesentlichen Merkmale dieser Kernliste, der aktuelle Stand und das geplante weitere Vorgehen beschrieben:

Umfang und Aufbau:

* Die Liste besteht aus 15 Untersuchungsgruppen* mit ca. 130 darin einsortierten Analysen. 
* Einträge folgen einer fachlichen Ordnung mit vorgegebener Reihenfolge der Analysen,
* Untersuchungsgruppenbezeichner sind als Ad hoc-Code Valueset ausgeführt, da kein existierendes Codesystem passende Einträge geboten hat
 
* Soweit Untersuchungsergebnisse in der Versorgung in unterschiedlichen Einheiten-Dimensionen angegeben werden (z.B. mmol/l vs. mg/dl), wurden LOINC**®**-Paare gebildet. 
* In Bezug auf die Veröffentlichung zum Thema “Einheit unter den Einheiten” wurde für die betroffenen Untersuchungen die präferierte und die mögliche alternative Einheiten-Dimension entsprechend gekennzeichnet.
* Es wurden valide UCUM**®**-Einheiten vorgeschlagen, damit durch die untersuchende Einrichtung eine Umrechnung mit unterschiedlicher Größenordnung (z. B. ml vs. dl) oder auch Dimensionen (z.B. mol vs. g) erfolgen kann.
* Beide Varianten der Messergebnisse sollen im MIO mitgegeben werden können.
 

Limitationen:

* Eine Laboruntersuchung kann auf verschiedene Weisen codiert werden (z. B. mit oder ohne Methode, je nach gewählter Einheiten-Dimension). Die Kernliste bietet nach den Regeln des BfArM-Anwendungsleitfadens die Chance für ein flächendeckend harmonisiertes Herangehen und damit eine zuverlässigere Vergleichbarkeit für diese Untersuchungsergebnisse. Gleichwohl wären auch abweichende Codierungen (z. B. mit Methode) bei diesen Untersuchungen fachlich korrekt und möglich, so dass nicht ausgeschlossen werden kann, dass an sich vergleichbare Ergebnisse nicht gemeinsam in einer kumulativen Ansicht dargestellt werden können.
* Umrechnungsfaktoren für relevante Codes/Code-Paare mit unterschiedlichen Dimensionen wurden informationshalber ermittelt, aber in dieser Version zunächst weggelassen. Die Verantwortung für eine individuelle Umrechnung liegt bei den untersuchenden Einrichtungen.

Operationalisierung:

* Die in der Kernliste enthaltene Sortierung der Untersuchungsgruppen und die Sortierung der ihnen zugeordneten Analyten soll in den Primärsystemen zur Default-Ansicht genutzt werden.
* Nicht in der Kernliste aufgeführte Untersuchungsergebnisse sind unterhalb bzw. außerhalb der sortierten Liste aufzuführen.
* Untersuchungsergebnisse zu LOINC-Paaren sollen durch das Labor immer in beiden Einheiten-Dimensionen angegeben werden.
* Das empfangende System soll bei Untersuchungen, deren Ergebnisse in mehreren Einheiten-Dimensionen angegeben wurden, zunächst die präferierte Einheiten-Dimension (z. B. mmol/L bei Glucose) zur Anzeige bringen und den Nutzenden die Möglichkeit bieten, einen Anzeigenwechsel auf die (gewohnte) alternative Einheiten-Dimension (z.B. mmol/l vs. mg/dl bei Glucose) vorzunehmen.

Aktueller Stand und geplantes weiteres Vorgehen:

* Die vorläufige Fertigstellung unter Einbeziehung ausgewählter Vertreter:innen der Labormedizin und der Allgemeinmedizin ist erfolgt.
* Die Zwischenveröffentlichung soll dazu dienen, die Kernliste der breiten Öffentlichkeit zur Bewertung zur Verfügung zu stellen. Dabei soll sowohl die fachliche Korrektheit und Praxistauglichkeit als auch die mögliche technische Umsetzung durch LIS und PVS/KIS bewertet werden.
* Nach Bestätigung der fachlichen Korrektheit, Praxistauglichkeit und technischen Machbarkeit erfolgen Abstimmungen zur Verbindlichmachung mit der gematik/dem KIG. Die Kernliste soll dann integraler Bestandteil der Veröffentlichung der dgLP-Spezifikationen werden.

#### LOINC®-Mapping-Starthilfe

Um die im Grundsatz angestrebte stufenweise semantische Harmonisierung von Laborbefunden bestmöglich zu unterstützen, wird neben der Kernliste eine LOINC-Mapping-Starthilfe vorbereitet. Sie dient den Laboren als Hilfestellung, das Mapping ihres Leistungskataloges auf geschätzt 80% der regelmäßig nachgefragten Laboruntersuchungen auszudehnen. Die Starthilfe befindet sich noch in der Erarbeitung und wird sich auf den zusammengeführten Pool mehrerer bereits erfolgter Mappings großer Labore in Deutschland stützen. Dazu wurden die jeweils 1500 häufigsten Analysen der Labore in einen Pool überführt, der in Summe etwa 2000 Einträge umfasst. Dabei werden die derzeit für die einzelnen Laboruntersuchungen verwendeten, teils unterschiedlichen Bezeichnungen/Synonyme in einer Art Synopse zusammengeführt und dem empfohlenen LOINC**®**-Code gegenübergestellt. Für deren Verwendung, vielleicht auch in teil-automatisierten Schritten, wird eine Begleitdokumentation erstellt, die auch typische Fallstricke beim Mapping aufzeigen wird.

