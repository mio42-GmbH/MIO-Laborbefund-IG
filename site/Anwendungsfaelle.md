# Anwendungsfälle - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* **Anwendungsfälle**

## Anwendungsfälle

Im Folgenden werden die Anwendungsfälle des MIO Laborbefund beschrieben, die nach jetzigem Stand mit dem Roll out der Stufe 1 des dgLP umgesetzt werden sollen.

### Strukturierten Laborbefund erstellen

Die organisatorischen Prozesse zum Erstellen eines Laborbefunds in einem Labor/einer Versorgungseinrichtung sollen sich durch die Einführung des MIO Laborbefund nicht wesentlich ändern. Um die mit dem MIO angestrebte semantische Harmonisierung von Laborbefunden zu erreichen, müssen die Labore bzw. die Einrichtungen, die Laborbefunde erzeugen, bereits im Vorfeld beginnen, ihre Leistungskataloge auf LOINC® zu mappen (zur Unterstützung dieses Prozesses siehe Umsetzungshilfen → Codierunterstützung). Im laufenden Betrieb müssen dann die Untersuchungs- und Befundergebnisse entsprechend der standardisierten Kodierungen (LOINC®, UCUM®, SNOMED-CT®) hinterlegt werden. Das jeweils genutzte Primärsystem (meist LIS) muss befähigt sein, aus den gesammelten Informationen zur Laboruntersuchung einen digitalen Laborbefund im FHIR®-Format gemäß der MIO-Spezifikation erzeugen. Um die Versorgungskontinuität insbesondere zu Beginn der MIO-Einführung sicherzustellen, muss das MIO neben den strukurierten Informationen auch einen Gesamtlaborbefund in Form eines eingebetteten PDF/A-Dokuments enthalten.

Beteiligte Primärsysteme: Laborinformationssysteme, Krankenhausinformationssysteme, Praxisverwaltungssysteme (soweit sie Funktionen zur Dokumentation von Laboruntersuchungen enthalten)

### Übermittlung des strukturierten Laborbefundes an den Einsender

Laborbefunde sind ab dem Roll out des MIO Laborbefund vom Labor mindestens auch im spezifikationskonformen FHIR®-Format an die beauftragende Einrichtung (Einsender) zu übermitteln. Der technische Übermittlungsweg obliegt dabei wie bisher der individuellen Vereinbarung zwischen Einsender und Labor und wird nicht vorgegeben. Damit kann das MIO beispielsweise als Payload per Order Entry oder als Anhang einer KIM-Nachricht bereitgestellt werden. Aktuell ist keine stichtagsbezogene Umstellung des Übermittlungsformats von den bisher verwendeten Formaten zum FHIR®-Format vorgegeben. Bis zur flächendeckend gegebenen Interoperabilität der Systeme auf Sende- und Empfangsseite bleiben die bestehenden Austauschformate (insb. LDT, HL7 v2) gültig und dürfen weiter genutzt werden.

Beteiligte Primärsysteme: Laborinformationssysteme, Krankenhausinformationssysteme, Praxisverwaltungssysteme

### Empfangen und Verarbeiten eines übermittelten strukturierten Laborbefundes beim Einsender

Praxisverwaltungssysteme und Krankenhausinformationssysteme müssen befähigt werden, FHIR®-strukturierte Laborbefunde zu empfangen und zu verarbeiten. Dabei müssen sie die Weiterleitung an andere Leistungserbringer und das Einstellen in die ePA unterstützen. Weiterhin müssen sie die Inhalte des Befundes in der Einrichtung zur Anzeige bringen können. Die Anwender:innen sollen mindestens die selben Funktionalitäten nutzen können, die das System für die Verarbeitung und Anzeige aktueller Laborbefunde vorhält.

Beteiligte Primärsysteme: Krankenhausinformationssysteme, Praxisverwaltungssysteme

### Einstellen eines strukturierten Laborbefundes in die ePA

Von den Laboren im spezifikationskonformen FHIR®-Format übermittelte Laborbefunde sollen durch die Einsendenden in die ePA eingestellt werden. Die Funktion zum Einstellen soll den typischen Arbeitsfluss der Behandelnden möglichst nicht behindern und zugleich die Möglichkeit bieten, per Voreinstellung wählen zu können, ob Laborbefunde bei bestimmten Arbeitsschritten automatisiert durch das System in die ePA hochgeladen werden sollen. Dabei ist jedoch sowohl die Widerspruchsmöglichkeit der Versicherten als auch die ggf. medizinische Notwendigkeit einer vorherigen ärztlichen Besprechung des Befundes mit dem/der Versicherten zu berücksichtigen. Im stationären Kontext sollen während des Entlassmanagements und technisch unterstützt durch das Krankenhausinformationssystem die für die Dokumentation und Nachbehandlung relevante Befunde ausgewählt und in einem Arbeitsschritt durch das System hochgeladen werden können. Auch hier ist das Widerspruchsrecht des Versicherten zum Einstellen in die ePA zu wahren. Ergebnisse genetischer Untersuchungen oder Analysen im Sinne des Gendiagnostikgesetzes sollen durch das Primärsystem nur nach ausdrücklicher Einwilligung des/der Versicherten in die ePA hochgeladen werden.

Das unmittelbare Einstellen von Laborbefunden durch Laboreinrichtungen ist aufgrund fehlender regulatorischer und technischer Rahmenbedingungen zum Roll out der ersten Version des MIO Laborbefund noch nicht möglich, perspektivisch aber weiter vorgesehen.

Beteiligte Primärsysteme: Krankenhausinformationssysteme, Praxisverwaltungssysteme

### Aktualisieren eines Laborbefundes in der ePA

Initiitert durch eine Ergänzung oder Korrektur ist ein überarbeiteter Laborbefund erneut in die ePA einzustellen. Die Anwender sollen durch ihr Primärsystem dahingehend unterstützt werden, dass erkannt wird, wenn ein soeben aktualisierter Laborbefund zuvor bereits in die ePA hochgeladen wurde, um auch die aktuelle Fassung zügig bereitzustellen. Das ePA-Aktensystem erkennt anhand der eindeutigen Identifikationsnummer, dass dieser Laborbefund bereits in die ePA hochgeladen wurde und stellt den Befund als neue Version ein. Das ePA-Aktensystem hält die Vorversionen aktualisierter Laborbefunde weiterhin abrufbar vor.

Beteiligte Primärsysteme: Krankenhausinformationssysteme, Praxisverwaltungssysteme

### Suche und Herunterladen von Laborbefunden in der ePA

Mithilfe von Services und Schnittstellen der ePA wird es Primärsystemen ermöglicht, eine Volltextsuche anzubieten. Damit können die Inhalte einer ePA mittels Stichwörtern durchsucht werden; unabhängig davon, ob es sich dabei um ein PDF/A-Dokument oder um FHIR®-strukturierte Daten handelt. Darüber hinaus wird für FHIR®-strukturierte Laborbefunde eine qualifizierte Suche nach Inhalten in dedizierten Datenfeldern ermöglicht. Damit können beispielsweise alle Laboruntersuchungen gefunden werden, die innerhalb des definierten Zeitraums durchgeführt wurden und Untersuchungsergebnisse eines bestimmten Laborparameters (z. B. Leukozythen) enthalten oder als kritisch gekennzeichnet wurden. Die Suche soll iterativ verfeinert werden können. Nach erfolgreicher Selektion können die Anwender:innen die zur Trefferliste gehörenden Laborbefunde in ihr Primärsystem zur weiteren Nutzung herunterladen.

Der lesende Zugriff von Laborinformationssystemen auf die ePA ist perspektivisch vorgesehen, um hieraus bspw. den Vorteil zugänglicher Voruntersuchungen zur qualitätsgesicherten Interpretation der aktuell zu befundenen Untersuchung zu ziehen. Hierzu bedarf es jedoch noch der Anpassung regulatorischer und technischer Rahmenbedingungen.

Beteiligte Primärsysteme: Krankenhausinformationssysteme, Praxisverwaltungssysteme

### Anzeige eines strukturierten Laborbefundes

FHIR®-strukturierte Laborbefunde ermöglichen ärztlichen Primärsystemen eine auf die Anwender abgestimmte und durch diese konfigurierbare Detailansicht eines Laborbefunds. Dafür können bspw. hierarchische Ansichten mit “Ausklappfunktion” genutzt werden. Die Fülle möglicher Informationen stellt zugleich eine Herausforderung dar. Den Anwender:innen muss es möglich sein, die relevanten Informationen schnell zu erfassen und zugleich unmittelbaren Zugriff auf weitere wichtige Detailinformationen zu erlangen. Eine beispielhafte Umsetzung einer Einzelbefunddarstellung haben wir [hier](./Einzelbefunddarstellung_in_der_Primaersystemansicht.md) bereitgestellt. Praxisverwaltungssysteme und Krankenhausinformationssysteme bieten in aller Regel bereits Darstellungen strukturierter Laborbefunde an, die an den Bedarfen der Versorgenden ausgerichtet ist. Insoweit werden deshalb auch keine neuen Anforderungen an die dedizierte Darstellung von Laborbefunden gestellt sondern die nahtlose Integration der FHIR-strukturierten Laborbefunde in diese Ansichten. Damit sollten die gewohnten Ansichten erhalten bleiben und ggf. um zusätzliche Informationen ergänzt werden.

Enthält das MO Anhänge mit Zusatzinformationen, wie bspw. Diagramme oder zusätzliche Befundanteile aus Spezialbereichen (z. B. Genetik, Pathologie), die noch nicht in strukturierter Form vorliegen, muss dies für die Anwender ersichtlich und zur Anzeige auswählbar sein. Gleiches gilt für den als PDF/A-Dokument regelhaft mitzuliefernden Gesamtlaborbefund (in der FHIR®-Struktur eingebettete Darstellung als presented form).

Soweit es sich bei dem angezeigten Laborbefund um die Vorversion eines geänderten Laborbefunds handelt, muss in der Darstellung durch das Primärsystem ein deutlicher Warnhinweis gezeigt werden, dass eine aktualisierte Version existiert.

Beteiligte Primärsysteme: Krankenhausinformationssysteme, Praxisverwaltungssysteme

### Anzeige von Laborbefunden in Kumulativdarstellungen

Zur Beurteilung von Krankheitsverläufen und Therapieerfolgen ist die Darstellung der Ergebnisse gleicher Laboruntersuchungen (Analyten), die zu unterschiedlichen Zeitpunkten bestimmt wurden, von essenzieller Bedeutung. Derzeit sind Verlaufs- bzw. Kumulativdarstellungen meist nur aus Daten mehrerer Laborbefunde möglich, wennn diese aus der gleichen Laboreinrichtung stammen. Durch die angestrebte semantische Harmonisierung strukturierter Laborbefunde können zukünftig auch Labor-Fremdbefunde in Kumulativdarstellungen einbezogen werden, was insbesondere bei der Behandlung chronisch erkrankter Patienten, die im zeitlichen Verlauf oder parallel in unterschiedlichen Einrichtungen in Behandlung sind, eine verbesserte Informationslage ermöglicht. Grundlage dafür ist, dass Labor ihre Laboruntersuchungen mit dem LOINC®-Code versehen, der dieser Untersuchung in ihrem Leistungskatalog zugeordnet wurde. Dieses LOINC®-Mapping der Leistungskataloge sollte bereits im Vorfeld der MIO-Einführung starten (s. a. [Unterstützungsleistungen zur LOINC®-Einführung](./Grundlagen_zur_Terminologienutzung.md#untersttzungsleistungen-zur-loinc-einfhrung)). Dies ist als Voraussetzung anzusehen, damit zum Roll out zumindest die relevantesten Untersuchungen über den LOINC®-Code flächendeckend als vergleichbar identifiziert werden können und einrichtungsübergreifende Kumulativdarstellungen überhaupt erstellt werden können.

Während die ePA für diesen Anwendungsfall die Datenpunkte bereitstellt, erfolgt die integrative Darstellung durch die Primärsysteme. Untersuchungsergebnisse aus Laborbefunden der ePA, die nicht LOINC®-kodiert wurden oder ausschließlich im PDF/A-Format vorliegen, können nicht in Kumulativdarstellungen verarbeitet werden. Diese können nur als Einzelbefund gesichtet werden.

Beteiligte Primärsysteme: Krankenhausinformationssysteme, Praxisverwaltungssysteme

### Anzeige eines Laborbefunds als PDF

Auch nach Einführung des MIO Laborbefund kann es erforderlich sein, einen an sich im FHIR®-strukturierten Format vorliegenden Laborbefund als PDF/A-Dokument anzeigen zu lassen. Zum einen wird es Nutzergruppen (z. B. Pflegedienste) geben, deren Primärsysteme zum Zeitpunkt des Roll outs noch nicht verpflichtet sind, das MIO-Format verarbeiten zu können. Diese sind somit auf den verpflichtend als eingebettetes PDF/A-Dokument mitzuliefernden Gesamtlaborbefund angewiesen. Zum anderen wird das MIO Laborbefund in seiner ersten Version nicht alle Laborbereiche strukturiert abbilden. Befundanteile aus Spezialbereichen (z. B. Mikrobiologische Kulturdiagnostik, Pathologische Gewebeuntersuchungen, genetische Befunde) können aufgrund dafür noch fehlender semantischer und struktureller Standards nur teilstrukturiert übermittelt werden. Diese Befundanteile werden als PDF/A in den Laborbefund eingebettet.

### Ausleitung pseudonymisierter Labordaten an das Forschungsdatenzentrum

Auf Antrag beim Forschungsdatenzentrum (FDZ) können Forschende auf einen Datenbestand pseudonymisierter Laborbefunde zurückgreifen, um diese für ihre Forschungsvorhaben nutzen zu können. Dazu werden strukturierte Laborbefunde von Versicherten, die der Datenspende zu Forschungszwecken nicht widersprochen haben, pseudonymisiert und an das Forschungsdatenzentrum ausgeleitet.

