# FHIR-Artefakte - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* **FHIR-Artefakte**

## FHIR-Artefakte

Diese Seite enthält eine Übersicht aller FHIR-Artefakte, die im Rahmen dieses Implementierungsleitfadens für den Laborbefund definiert werden. Sie bilden die Grundlage für die strukturierte Abbildung und Verarbeitung von Labordaten innerhalb des Laborbefund.

Die FHIR®-Spezifikation ist ebenfalla in unserem Simplifier-Projekt zu finden: [https://simplifier.net/lab1x0x0](https://simplifier.net/lab1x0x0)

Als Umsetzungshilfe stellen wir auch ein [Validierungspaket](https://github.com/mio42-GmbH/Validierungspaket-MIO-Laborbefund/releases/tag/v1.0.0-update) zur Verfügung. Dieses enthält technische Minimal- und Maximalbeispiele, alle notwendigen Dependecies (Abhängigkeiten) und die gesamte FHIR®-Spezifikation des MIO Laborbefundes.

### Terminologien: Value Sets

| | |
| :--- | :--- |
| [ Körperstelle SNOMED CT® ](ValueSet-KBV-VS-MIO-LAB-Body-Structures-SNOMED-CT.md) | Dieses Valueset enthält die Codes zur Beschreibung von Körperstelle SNOMED CT®. |
| [ Bodystructure Clock Face Position SNOMED CT® ](ValueSet-KBV-VS-MIO-LAB-Bodystructure-Body-Landmark-Clock-Face-Position.md) | Dieses Valueset enthält die Codes zur Beschreibung von Bodystructure Clock Face Position SNOMED CT®. |
| [ Nichtvorhandensein LOINC® ](ValueSet-KBV-VS-MIO-LAB-Data-Absent-Reason.md) | Dieses Valueset enthält die Codes zur Beschreibung von Nichtvorhandensein LOINC®. |
| [ Status Gesamtbefund ](ValueSet-KBV-VS-MIO-LAB-Diagnostic-ReportStatus.md) | Dieses Valueset enthält die Codes zur Beschreibung von Status Gesamtbefund. |
| [ Kollektivbezug ](ValueSet-KBV-VS-MIO-LAB-EHDSIReferenceRangeAppliesTo.md) | Dieses Valueset enthält die Codes zur Beschreibung von Kollektivbezug. |
| [ Außerkörperliche Quellen SNOMED CT® ](ValueSet-KBV-VS-MIO-LAB-Extracorporal-Device-SNOMED-CT.md) | Dieses Valueset enthält die Codes zur Beschreibung von Außerkörperliche Quellen SNOMED CT®. |
| [ Identifier Type ](ValueSet-KBV-VS-MIO-LAB-Identifier-Type.md) | Dieses Valueset enthält die Codes zur Beschreibung von Identifier Type. |
| [ Laboranalysegerät SNOMED CT® ](ValueSet-KBV-VS-MIO-LAB-Laboratory-Analyzer-SNOMED-CT.md) | Dieses Valueset enthält die Codes zur Beschreibung von Laboranalysegerät SNOMED CT®. |
| [ Laborbereich LOINC® ](ValueSet-KBV-VS-MIO-LAB-Laboratory-Specialties-LOINC.md) | Dieses Valueset enthält die Codes zur Beschreibung von Laborbereich LOINC®. |
| [ Test-Profil Laboruntersuchungsgruppe ](ValueSet-KBV-VS-MIO-LAB-Laboruntersuchungsgruppe.md) | Dieses Valueset enthält die Codes zur Beschreibung von Test-Profil Laboruntersuchungsgruppe. |
| [ Lateralität Körperstelle SNOMED CT® ](ValueSet-KBV-VS-MIO-LAB-Laterality-Body-Structure-SNOMED-CT.md) | Dieses Valueset enthält die Codes zur Beschreibung von Lateralität Körperstelle SNOMED CT®. |
| [ Lokalisation innerhalb Körperstelle SNOMED CT® ](ValueSet-KBV-VS-MIO-LAB-Localisation-Body-Structure-SNOMED-CT.md) | Dieses Valueset enthält die Codes zur Beschreibung von Lokalisation innerhalb Körperstelle SNOMED CT®. |
| [ Dateiformat ](ValueSet-KBV-VS-MIO-LAB-MIME-Types.md) | Dieses Valueset enthält die Codes zur Beschreibung von Dateiformat. |
| [ Messergebnis Qualitativ SNOMED CT® ](ValueSet-KBV-VS-MIO-LAB-Observation-Laboratory-Study-Value-SNOMED-CT.md) | Dieses Valueset enthält die Codes zur Beschreibung von Messergebnis Qualitativ SNOMED CT®. |
| [ Untersuchungsmethode SNOMED CT® ](ValueSet-KBV-VS-MIO-LAB-Observation-Methods.md) | Dieses Valueset enthält die Codes zur Beschreibung von Untersuchungsmethode SNOMED CT®. |
| [ Status Laboruntersuchung ](ValueSet-KBV-VS-MIO-LAB-Observation-Status.md) | Dieses Valueset enthält die Codes zur Beschreibung von Status Laboruntersuchung. |
| [ Sekundärstatus Gesamtbefund ](ValueSet-KBV-VS-MIO-LAB-Secondary-Status.md) | Dieses Valueset enthält die Codes zur Beschreibung von Sekundärstatus Gesamtbefund. |
| [ Probenentnahme-Methode SNOMED CT® ](ValueSet-KBV-VS-MIO-LAB-Specimen-Collection-Method-SNOMED-CT.md) | Dieses Valueset enthält die Codes zur Beschreibung von Probenentnahme-Methode SNOMED CT®. |
| [ Zustand Probe ](ValueSet-KBV-VS-MIO-LAB-Specimen-Condition.md) | Dieses Valueset enthält die Codes zur Beschreibung von Zustand Probe. |
| [ Probenart SNOMED CT® ](ValueSet-KBV-VS-MIO-LAB-Specimen-Type-SNOMED-CT.md) | Dieses Valueset enthält die Codes zur Beschreibung von Probenart SNOMED CT®. |
| [ Typisierung Messdiagramm ](ValueSet-KBV-VS-MIO-LAB-Type-Diagram.md) | Dieses Valueset enthält die Codes zur Beschreibung von Typisierung Messdiagramm. |

### Terminologien: Code Systems

| | |
| :--- | :--- |
| [ AdministrativeGender German ](CodeSystem-KBV-CS-MIO-LAB-AdministrativeGender-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für AdministrativeGender German. |
| [ Bodystructure Clock Face Position SNOMED CT® German ](CodeSystem-KBV-CS-MIO-LAB-Bodystructure-Body-Landmark-Clock-Face-Position-G.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für Bodystructure Clock Face Position SNOMED CT® German. |
| [ Bevorzugte Sprache German ](CodeSystem-KBV-CS-MIO-LAB-CommonLanguages-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für Bevorzugte Sprache German. |
| [ Common UCUM Codes for Duration German ](CodeSystem-KBV-CS-MIO-LAB-CommonUCUMCodesForDuration-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für Common UCUM Codes for Duration German. |
| [ Contact entity type German ](CodeSystem-KBV-CS-MIO-LAB-ContactEntityType-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für Contact entity type German. |
| [ ContactPointSystem German ](CodeSystem-KBV-CS-MIO-LAB-ContactPointSystem-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für ContactPointSystem German. |
| [ DataAbsentReason German ](CodeSystem-KBV-CS-MIO-LAB-DataAbsentReason-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für DataAbsentReason German. |
| [ Nichtvorhandensein LOINC® German ](CodeSystem-KBV-CS-MIO-LAB-Data-Absent-Reason-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für Nichtvorhandensein LOINC® German. |
| [ DeviceNameType German ](CodeSystem-KBV-CS-MIO-LAB-DeviceNameType-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für DeviceNameType German. |
| [ Status Gesamtbefund German ](CodeSystem-KBV-CS-MIO-LAB-Diagnostic-ReportStatus-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für Status Gesamtbefund German. |
| [ Kollektivbezug German ](CodeSystem-KBV-CS-MIO-LAB-EHDSIReferenceRangeAppliesTo-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für Kollektivbezug German. |
| [ Außerkörperliche Quellen SNOMED CT® German ](CodeSystem-KBV-CS-MIO-LAB-Extracorporal-Device-SNOMED-CT-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für Außerkörperliche Quellen SNOMED CT® German. |
| [ hl7VS-relevantClincialInformation German ](CodeSystem-KBV-CS-MIO-LAB-Hl7VSRelevantClincialInformation-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für hl7VS-relevantClincialInformation German. |
| [ Identifier Type German ](CodeSystem-KBV-CS-MIO-LAB-Identifier-Type-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für Identifier Type German. |
| [ Specimen Additive German ](CodeSystem-KBV-CS-MIO-LAB-LabSpecimenAdditiveEu-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für Specimen Additive German. |
| [ KBV_CS_MIO_LAB_Laboratory_Identificator ](CodeSystem-KBV-CS-MIO-LAB-Laboratory-Identificator.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für KBV_CS_MIO_LAB_Laboratory_Identificator. |
| [ Lokalisation innerhalb Körperstelle SNOMED CT® German ](CodeSystem-KBV-CS-MIO-LAB-Localisation-Body-Structure-SNOMED-CT-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für Lokalisation innerhalb Körperstelle SNOMED CT® German. |
| [ MaritalStatus German ](CodeSystem-KBV-CS-MIO-LAB-Marital-Status-Codes-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für MaritalStatus German. |
| [ Observation Interpretation Codes German ](CodeSystem-KBV-CS-MIO-LAB-ObservationInterpretationCodes-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für Observation Interpretation Codes German. |
| [ Observation Reference Range Meaning Codes German ](CodeSystem-KBV-CS-MIO-LAB-ObservationReferenceRangeMeaningCodes-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für Observation Reference Range Meaning Codes German. |
| [ Status Laboruntersuchung German ](CodeSystem-KBV-CS-MIO-LAB-Observation-Status-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für Status Laboruntersuchung German. |
| [ PatientRelationshipType German ](CodeSystem-KBV-CS-MIO-LAB-PatientRelationshipType-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für PatientRelationshipType German. |
| [ Typisierung Freigabe German ](CodeSystem-KBV-CS-MIO-LAB-Provenance-Activity-Type-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für Typisierung Freigabe German. |
| [ QuantityComparator German ](CodeSystem-KBV-CS-MIO-LAB-QuantityComparator-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für QuantityComparator German. |
| [ Request priority German ](CodeSystem-KBV-CS-MIO-LAB-RequestPriority-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für Request priority German. |
| [ KBV_CS_MIO_LAB_Secondary_Status ](CodeSystem-KBV-CS-MIO-LAB-Secondary-Status.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für KBV_CS_MIO_LAB_Secondary_Status. |
| [ Sex Parameter for Clinical Use German ](CodeSystem-KBV-CS-MIO-LAB-SexParameterForClinicalUse-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für Sex Parameter for Clinical Use German. |
| [ Specimen processing procedure German ](CodeSystem-KBV-CS-MIO-LAB-SpecimenProcessingProcedure-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für Specimen processing procedure German. |
| [ SpecimenStatus German ](CodeSystem-KBV-CS-MIO-LAB-SpecimenStatus-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für SpecimenStatus German. |
| [ Zustand Probe German ](CodeSystem-KBV-CS-MIO-LAB-Specimen-Condition-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für Zustand Probe German. |
| [ KBV_CS_MIO_LAB_Test_Profil_Laboruntersuchungsgruppe ](CodeSystem-KBV-CS-MIO-LAB-Test-Profil-Laboruntersuchungsgruppe.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für KBV_CS_MIO_LAB_Test_Profil_Laboruntersuchungsgruppe. |
| [ Typisierung Messdiagramm German ](CodeSystem-KBV-CS-MIO-LAB-Type-Diagram-German.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für Typisierung Messdiagramm German. |
| [ KBV_CS_MIO_LAB_mio42 ](CodeSystem-KBV-CS-MIO-LAB-mio42.md) | Dieses Codesystem enthält die Codes für deutsche Bezeichner für KBV_CS_MIO_LAB_mio42. |

### Terminologien: Concept Maps

| | |
| :--- | :--- |
| [ KBV_CM_MIO_LAB_Overview ](ConceptMap-KBV-CM-MIO-LAB-Overview.md) | Diese Conceptmap verknüpft die Codes für KBV_CM_MIO_LAB_Overview mit deutschen Bezeichnungen. |

### Ressourcenprofile

| | |
| :--- | :--- |
| [ KBV_PR_MIO_LAB_BodyStructure ](StructureDefinition-KBV-PR-MIO-LAB-BodyStructure.md) | Dieses Profil bildet eine Körperstruktur ab. Angaben zur Körperstruktur können enthalten: * Körperstelle (anatomische Benennung) * Lateralität (für paarige Organe/Strukturen: rechts, links, beidseits) * Lokalisierung (für räumliche Angaben, z.B. oben, unten) * Uhrzeigerposition (z.B. 12-Uhr-Position) * Morphologie (z.B. pathologische Strukturen) |
| [ KBV_PR_MIO_LAB_Bundle ](StructureDefinition-KBV-PR-MIO-LAB-Bundle.md) | Dieses Profil dient als bündelndes Element. Das Bundle kann als Klammer-Ressource verstanden werden, die die notwendigen Ressourcen zusammenfügt. Diese Ressource und die darin gebündelten Ressourcen können dann mit einer Signatur versehen werden. Das Bundle umfasst in dieser Anwendung einen Laborbefund. |
| [ KBV_PR_MIO_LAB_Composition ](StructureDefinition-KBV-PR-MIO-LAB-Composition.md) | Dieses Profil bündelt die Strukturen, die zum gesamten Laborbefund gehören. Das MIO Laborbefund enthält genau einen Laborgesamtbefund, inklusive aller Befundanteile und Anhänge. |
| [ KBV_PR_MIO_LAB_Condition_Diagnosis ](StructureDefinition-KBV-PR-MIO-LAB-Condition-Diagnosis.md) | Hier wird eine Diagnose im Kontext des Laborauftrages abgebildet. In den Angaben zum LDT-Mapping findet man Beispiele für Inhalte, die in diese Datenstruktur hineinpassen könnten bzw. auch übernommen werden könnten. Angaben zur Auftragsdiagnose können beispielsweise in Muster 10 vorkommen oder über den Labordatentransfer übermittelt werden. |
| [ KBV_PR_MIO_LAB_Device_Laboratory_Analyzer ](StructureDefinition-KBV-PR-MIO-LAB-Device-Laboratory-Analyzer.md) | In diesem Profil werden Informationen zum Analysegerät angegeben, mit dem die Messung durchgeführt wird. |
| [ KBV_PR_MIO_LAB_Device_Specimen_Container ](StructureDefinition-KBV-PR-MIO-LAB-Device-Specimen-Container.md) | In diesem Profil werden Informationen zum Probenbehälter angegeben, z. B. Blutröhrchen, steriler Urinprobenbehälter. |
| [ KBV_PR_MIO_LAB_Device_Specimen_Subject ](StructureDefinition-KBV-PR-MIO-LAB-Device-Specimen-Subject.md) | Dieses Profil bildet eine außerkörperliche Quelle ab. Falls die Probe nicht unmittelbar aus dem menschlichen Körper direkt entnommen wird, sondern beispielsweise aus einem Sammelgefäß oder Katheter gewonnen wird, kann das einen Einfluss auf das Messergebnis haben. Für diesen Fall kann die (außerkörperliche) Quelle für die Probenentnahme benannt werden. Es wäre auch möglich, dass eine Probenentnahme aus mehreren außerkörperlichen Quellen gewonnen wird. |
| [ KBV_PR_MIO_LAB_DeviceDefinition_Laboratory_Analyzer ](StructureDefinition-KBV-PR-MIO-LAB-DeviceDefinition-Laboratory-Analyzer.md) | Dieses Profil bildet das Modell eines Laboranalysegerätes ab. |
| [ KBV_PR_MIO_LAB_DeviceDefinition_Specimen_Container ](StructureDefinition-KBV-PR-MIO-LAB-DeviceDefinition-Specimen-Container.md) | Dieses Profil bildet das Modell eines Probenbehälters ab. |
| [ KBV_PR_MIO_LAB_DeviceDefinition_Specimen_Subject ](StructureDefinition-KBV-PR-MIO-LAB-DeviceDefinition-Specimen-Subject.md) | Dieses Profil bildet das Modell einer außerkörperlichen Stelle ab. |
| [ KBV_PR_MIO_LAB_DiagnosticReport ](StructureDefinition-KBV-PR-MIO-LAB-DiagnosticReport.md) | Profil für den Laborgesamtbefund (DiagnosticReport). Darin verschachtelt unter "Ergebnisse" (DiagnosticReport.result) ist die Referenz auf "Untersuchungsgruppe" (Observation_Laboratory_Study_Group), darin die Referenz auf "Laboruntersuchung" (Observation_Laboratory_Study), darin die Referenz auf "Probe" (Specimen). |
| [ KBV_PR_MIO_LAB_DocumentReference ](StructureDefinition-KBV-PR-MIO-LAB-DocumentReference.md) | Hier werden zusätzliche Resultate, die nicht Teil des strukturierten MIO Laborbefundes sind, abgebildet. |
| [ KBV_PR_MIO_LAB_Observation_Image_Attachment ](StructureDefinition-KBV-PR-MIO-LAB-Observation-Image-Attachment.md) | Abbildung, die zu einer Laboruntersuchung oder einer Untersuchungsgruppe als Ergänzung mitgegeben wird. Beispielsweise kann die Ausprägung einer Elektrophorese-Kurve eine hilfreiche oder wichtige Zusatzinformation zu einer Erkrankung geben, die durch den quantitativen Ergebniswert allein nicht hinreichend erkennbar wird. |
| [ KBV_PR_MIO_LAB_Observation_Laboratory_Study_Group ](StructureDefinition-KBV-PR-MIO-LAB-Observation-Laboratory-Study-Group.md) | Dieses Profil bildet eine Untersuchungsgruppe ab. Untersuchungsgruppen sind ein technisches Mittel, um fachlich zusammengehörige Laborergebnisse innerhalb des Laborgesamtbefundes gruppiert und sortiert anzuordnen. Die Struktur "Laborgesamtbefund/Ergebnisse" enthält mindestens eine Struktur "Untersuchungsgruppe" im Abschnitt Ergebnisse. Für die gruppierte Darstellung von Laboruntersuchungen können (optional) aus den fachlichen Gruppierungsmerkmalen fachliche Bezeichner als Gruppenüberschrift abgeleitet werden. Untersuchungsgruppen, deren Sortierreihenfolge und die Sortierreihenfolge der einzelnen Untersuchungen innerhalb einer Gruppe werden Labor-intern definiert. Das empfangende System muss diese Gruppierungen und Sortierungen interpretieren können. Diese Strukturierung dient dem Erhalt des fachlichen Kontextes von digital kommunizierten Laboruntersuchungen. |
| [ KBV_PR_MIO_LAB_Observation_Laboratory_Study ](StructureDefinition-KBV-PR-MIO-LAB-Observation-Laboratory-Study.md) | Dieses Profil bildet eine Laboruntersuchung ab. Laboruntersuchungen können als Messung oder als Berechnung erfolgen. Eine Laboruntersuchung als Messung beschreibt die quantitative oder qualitative Untersuchung eines spezifischen Laborparameters in einem definierten Probenmaterial; z. B. die Untersuchung des Hämoglobin-(Hb-)Werts als Konzentration im Blut. Der Bezug zur Probe, anhand derer die Messung vorgenommen wurde, muss erkennbar sein. Berechnete Laborergebnisse können auf Messungen basieren, z.B. kann die berechnete GFR (glomeruläre Filtrationsrate) auf einem gemessenen Kreatinin-Wert im Serum basieren. |
| [ KBV_PR_MIO_LAB_Organization ](StructureDefinition-KBV-PR-MIO-LAB-Organization.md) | Dieses Profil bildet eine Einrichtung ab. |
| [ KBV_PR_MIO_LAB_Patient ](StructureDefinition-KBV-PR-MIO-LAB-Patient.md) | Dieses Profil bildet eine Person ab, die eine oder mehrere medizinische Leistungen in Anspruch nimmt. |
| [ KBV_PR_MIO_LAB_Practitioner ](StructureDefinition-KBV-PR-MIO-LAB-Practitioner.md) | Dieses Profil bildet eine behandelnde Person ab. |
| [ KBV_PR_MIO_LAB_PractitionerRole ](StructureDefinition-KBV-PR-MIO-LAB-PractitionerRole.md) | Dieses Profil bildet eine behandelnde Person/Einrichtung ab. |
| [ KBV_PR_MIO_LAB_Provenance ](StructureDefinition-KBV-PR-MIO-LAB-Provenance.md) | Hier werden Angaben zur medizinischen Freigabe der Laboruntersuchung gemacht. Das beinhaltet die Angabe der freigebenden Person, des Zeitpunktes und der Typisierung der Freigabe. |
| [ KBV_PR_MIO_LAB_RelatedPerson ](StructureDefinition-KBV-PR-MIO-LAB-RelatedPerson.md) | Dieses Profil bildet eine Kontakt- oder Bezugsperson ab. |
| [ KBV_PR_MIO_LAB_ServiceRequest ](StructureDefinition-KBV-PR-MIO-LAB-ServiceRequest.md) | Administrative und für die Befundung klinisch relevante Teilinformationen aus dem Laborauftrag |
| [ KBV_PR_MIO_LAB_Specimen ](StructureDefinition-KBV-PR-MIO-LAB-Specimen.md) | Dieses Profil bildet eine Probe ab. Identifizierung und Eigenschaften der primären oder sekundären Probe, auf deren Basis die Laboruntersuchung als Messung durchgeführt wird. Ein inhaltliches Beispiel für die Unterscheidung von Primär- und Sekundärprobe: * Primärprobe: Probenart = Vollblut (über LOINC® oder ergänzende Spezifizierung Probenart); Probengewinnung / Methode = Blutabnahme; Probenverarbeitung / Methode = Zentrifugieren * Sekundärprobe: Probenart = Serum (über LOINC® oder ergänzende Spezifizierung Probenart); Probengewinnung / Methode = Zentrifugieren zur Serumgewinnung; Probe / Ausgangsmaterial = Vollblut |
| [ KBV_PR_MIO_LAB_Substance ](StructureDefinition-KBV-PR-MIO-LAB-Substance.md) | Hier wird eine Substanz abgebildet, die bei der Probenverarbeitung als Zusatz hinzugefügt wird. |

### Erweiterungen (Extension) Definitions

| | |
| :--- | :--- |
| [ KBV_EX_MIO_LAB_Accredited_Service ](StructureDefinition-KBV-EX-MIO-LAB-Accredited-Service.md) | Diese Extension bildet eine Kennzeichnung für akkreditierte Laboruntersuchungen ab. |
| [ KBV_EX_MIO_LAB_Alternative_Result ](StructureDefinition-KBV-EX-MIO-LAB-Alternative-Result.md) | Diese Extension bildet das Resultat einer Laboruntersuchung mit einer Alternativeinheit ab. |
| [ KBV_EX_MIO_LAB_Association_Service ](StructureDefinition-KBV-EX-MIO-LAB-Association-Service.md) | Diese Extension bildet eine Kennzeichnung für Verbundleistungen ab. |
| [ KBV_EX_MIO_LAB_Critical_Result ](StructureDefinition-KBV-EX-MIO-LAB-Critical-Result.md) | In dieser Extension kann ein, aus labormedizinischer Sicht, medizinisch kritischer Befund deklariert werden. |
| [ KBV_EX_MIO_LAB_Diskriminator ](StructureDefinition-KBV-EX-MIO-LAB-Diskriminator.md) | Diese Extension dient als Unterscheidungsmerkmal. |
| [ KBV_EX_MIO_LAB_External_Service ](StructureDefinition-KBV-EX-MIO-LAB-External-Service.md) | Diese Extension bildet eine Kennzeichnung für Fremdleistungen ab. |
| [ KBV_EX_MIO_LAB_No_Linear_Reference_Range ](StructureDefinition-KBV-EX-MIO-LAB-No-Linear-Reference-Range.md) | Diese Extension kennzeichnet, dass es sich um einen nicht-linearen Wertebereich handelt. |
| [ KBV_EX_MIO_LAB_Order_Entry_Time ](StructureDefinition-KBV-EX-MIO-LAB-Order-Entry-Time.md) | Diese Extension bildet einen Auftrageingangszeitpunkt ab. |
| [ KBV_EX_MIO_LAB_Pseudonymized_Report ](StructureDefinition-KBV-EX-MIO-LAB-Pseudonymized-Report.md) | In dieser Extension kann ein Laborbefund als pseudonymisiert deklariert werden. Es kann bei der Steuerung der Übermittlungswege und für technische Validierung genutzt werden. |
| [ KBV_EX_MIO_LAB_Reason_Type ](StructureDefinition-KBV-EX-MIO-LAB-Reason-Type.md) | Diese Extension dient der Unterscheidung zwischen Anlass und Veranlassungsgrund des Laborauftrags. |
| [ KBV_EX_MIO_LAB_Secondary_Status ](StructureDefinition-KBV-EX-MIO-LAB-Secondary-Status.md) | In dieser Extension kann eine optionale sekundäre Angabe des Änderungsstatus, zusätzlich zum Hauptstatus des Gesamtbefundes angegeben werden |
| [ KBV_EX_MIO_LAB_Sorting_Number ](StructureDefinition-KBV-EX-MIO-LAB-Sorting-Number.md) | Diese Extension bildet eine Sortiernummer ab. |
| [ KBV_EX_MIO_LAB_Source_Reference_Range ](StructureDefinition-KBV-EX-MIO-LAB-Source-Reference-Range.md) | Diese Extension bildet eine Quelle der Richtgrenze ab. |
| [ KBV_EX_MIO_LAB_zlog ](StructureDefinition-KBV-EX-MIO-LAB-zlog.md) | Diese Extension bildet den zlog-Wert ab. |

### Beispielinstanzen

Bei den hieraufgeführten Beispielinstanzen handelt es sich um sogenannte **technische Beispiele**. Diese haben keinen Anspruch auf fachliche Korrektheit der Informationen und werden wie folgt kategorisiert:

* **Maximalbeispiele**: Diese Art von Beispielen ist dadurch charakterisiert, dass alle Elemente, die zugelassen (optional und verpflichtend) sind, mit Informationen gefüllt werden müssen. Für jedes Profil wird ein Maximalbeispiel generiert. Die Inhalte sind fiktiv und ihaltlich nicht aufeinander abgestimmt.
* **Minimalbeispiele**: Diese Beispiele enthalten ausschließlich Informationen für die verpflichtenden Elemente (Kardinalität 1..1 oder 1..*). Für jedes Profil wird ein Minimalbeispiel generiert. Die Inhalte sind fiktiv und inhaltlich nicht aufeinander abgestimmmt.

**BodyStructure**

* [6894b106-8a91-4cfb-9826-443aed21c98b](BodyStructure-6894b106-8a91-4cfb-9826-443aed21c98b.md)

* [72f65586-b2b5-465f-a792-89fb7545d7bc](BodyStructure-72f65586-b2b5-465f-a792-89fb7545d7bc.md)

**Composition**

* [Laboratory Report](Composition-13c807c0-53e7-488e-84bb-023376563cf3.md)

* [Laboratory Report](Composition-cdfb127b-df3c-493f-bc7e-e8be4a7bdc45.md)

**Condition**

* [1d344181-abf0-428d-9f3f-1bbd84b7684e](Condition-1d344181-abf0-428d-9f3f-1bbd84b7684e.md)

* [988426e1-b7df-44b2-881c-09e7cf482b72](Condition-988426e1-b7df-44b2-881c-09e7cf482b72.md)

**Device**

* [05146497-2ca3-488e-96cb-c27c77ab6a3c](Device-05146497-2ca3-488e-96cb-c27c77ab6a3c.md)

* [18a30aa6-3b2d-4738-9ca9-125a452d14e0](Device-18a30aa6-3b2d-4738-9ca9-125a452d14e0.md)

* [1ba291b4-78b5-4bf9-92f7-50f2f3c94cf5](Device-1ba291b4-78b5-4bf9-92f7-50f2f3c94cf5.md)

* [c46e7bfb-1ee3-4c6b-9ce2-204939133cc5](Device-c46e7bfb-1ee3-4c6b-9ce2-204939133cc5.md)

* [d057eafe-1927-4b09-936b-5cb61b4c7dc6](Device-d057eafe-1927-4b09-936b-5cb61b4c7dc6.md)

* [ff1903f6-188a-4e60-b3bc-4b48d4582db8](Device-ff1903f6-188a-4e60-b3bc-4b48d4582db8.md)

**DeviceDefinition**

* [01021964-005b-4dd5-975d-2e9a9fa917d9](DeviceDefinition-01021964-005b-4dd5-975d-2e9a9fa917d9.md)

* [25068c1f-a497-4cfe-b4e7-4a7026adf1e6](DeviceDefinition-25068c1f-a497-4cfe-b4e7-4a7026adf1e6.md)

* [30a47ba7-8975-4383-ad43-61c032c30e53](DeviceDefinition-30a47ba7-8975-4383-ad43-61c032c30e53.md)

* [430a63d5-b9ed-469b-a3a1-7aae27f27b11](DeviceDefinition-430a63d5-b9ed-469b-a3a1-7aae27f27b11.md)

* [8157f177-3f3e-46b4-be27-efcbf7a216be](DeviceDefinition-8157f177-3f3e-46b4-be27-efcbf7a216be.md)

* [81840764-fb77-49e6-9a7b-5cb028d29895](DeviceDefinition-81840764-fb77-49e6-9a7b-5cb028d29895.md)

**DiagnosticReport**

* [3604d5a6-798e-4615-8a22-1d280638e2c0](DiagnosticReport-3604d5a6-798e-4615-8a22-1d280638e2c0.md)

* [a6f3d3de-0857-45ed-916e-087d84391bc3](DiagnosticReport-a6f3d3de-0857-45ed-916e-087d84391bc3.md)

**DocumentReference**

* [d9e75f3f-3900-4183-a475-d4d3dc1d14cc](DocumentReference-d9e75f3f-3900-4183-a475-d4d3dc1d14cc.md)

* [f7dab433-b4b3-4908-8495-4876f0240511](DocumentReference-f7dab433-b4b3-4908-8495-4876f0240511.md)

**Observation**

* [035761c3-8934-499f-bf34-3963979afb56](Observation-035761c3-8934-499f-bf34-3963979afb56.md)

* [0cfe903c-5061-4441-bf5d-1f35c4283c19](Observation-0cfe903c-5061-4441-bf5d-1f35c4283c19.md)

* [51b6129a-b68c-485d-a37b-9593fee4354f](Observation-51b6129a-b68c-485d-a37b-9593fee4354f.md)

* [6a2a44c6-92f8-40cf-a0bc-673404f7ac9b](Observation-6a2a44c6-92f8-40cf-a0bc-673404f7ac9b.md)

* [76fdc299-7b3f-404a-b32e-31e416bb0c32](Observation-76fdc299-7b3f-404a-b32e-31e416bb0c32.md)

* [7813a2dc-36aa-41ce-b5f5-f338e944b5e9](Observation-7813a2dc-36aa-41ce-b5f5-f338e944b5e9.md)

* [96f33ca8-872d-4c8b-972e-b681db27d9df](Observation-96f33ca8-872d-4c8b-972e-b681db27d9df.md)

* [c1b00183-b205-48a8-9d07-31fc8b6aa74e](Observation-c1b00183-b205-48a8-9d07-31fc8b6aa74e.md)

**Organization**

* [2110eb93-f57f-4f17-8e80-b76bc98d2c6a](Organization-2110eb93-f57f-4f17-8e80-b76bc98d2c6a.md)

* [b1135775-9c67-4d2f-8618-9ef3d1f5f3d7](Organization-b1135775-9c67-4d2f-8618-9ef3d1f5f3d7.md)

**Patient**

* [84e01fa5-6763-4a96-99f3-170cf9b317ff](Patient-84e01fa5-6763-4a96-99f3-170cf9b317ff.md)

* [b65dfcca-c6ce-4dac-8742-8da00c192c7d](Patient-b65dfcca-c6ce-4dac-8742-8da00c192c7d.md)

**Practitioner**

* [24435567-fed3-43f8-8fc8-954f68df7fce](Practitioner-24435567-fed3-43f8-8fc8-954f68df7fce.md)

* [2b946366-cf18-4d89-a29c-00bf69ac90f6](Practitioner-2b946366-cf18-4d89-a29c-00bf69ac90f6.md)

**PractitionerRole**

* [a424d6c6-de52-443e-a9b2-5240d3b9401a](PractitionerRole-a424d6c6-de52-443e-a9b2-5240d3b9401a.md)

* [bd9d76e7-9fa1-42a4-b364-f93845994612](PractitionerRole-bd9d76e7-9fa1-42a4-b364-f93845994612.md)

**Provenance**

* [5f40f9f7-4474-4080-bb31-a314d1cda038](Provenance-5f40f9f7-4474-4080-bb31-a314d1cda038.md)

* [f3533f34-781a-4cb4-9926-19fc8479b3e3](Provenance-f3533f34-781a-4cb4-9926-19fc8479b3e3.md)

**RelatedPerson**

* [0f9878cf-8297-43c1-bf2d-7de5da068bf6](RelatedPerson-0f9878cf-8297-43c1-bf2d-7de5da068bf6.md)

* [778e032a-723a-4f3e-915f-ffbc5488b369](RelatedPerson-778e032a-723a-4f3e-915f-ffbc5488b369.md)

**ServiceRequest**

* [01a21c9c-2cd1-44e5-a999-f84d9ef70605](ServiceRequest-01a21c9c-2cd1-44e5-a999-f84d9ef70605.md)

* [eb46f1a2-c4ad-4276-aaaa-aef507db618d](ServiceRequest-eb46f1a2-c4ad-4276-aaaa-aef507db618d.md)

**Specimen**

* [4f47fe9c-d92e-46f4-ad6d-85740aaa467b](Specimen-4f47fe9c-d92e-46f4-ad6d-85740aaa467b.md)

* [eb7fbea2-95bd-4618-b38d-ce69cde79726](Specimen-eb7fbea2-95bd-4618-b38d-ce69cde79726.md)

**Substance**

* [4153de68-1124-4c02-a8a3-98f4c312f075](Substance-4153de68-1124-4c02-a8a3-98f4c312f075.md)

* [a4b533d4-0a3c-4701-b411-fd9666bf3d03](Substance-a4b533d4-0a3c-4701-b411-fd9666bf3d03.md)

