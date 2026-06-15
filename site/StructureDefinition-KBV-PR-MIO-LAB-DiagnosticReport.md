# KBV_PR_MIO_LAB_DiagnosticReport - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **KBV_PR_MIO_LAB_DiagnosticReport**

## Resource Profile: KBV_PR_MIO_LAB_DiagnosticReport 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DiagnosticReport | *Version*:1.0.0-update |
| Draft as of 2026-06-11 | *Computable Name*:KBV_PR_MIO_LAB_DiagnosticReport |
| **Copyright/Legal**: Im folgenden Profil können Codes aus den Code-Systemen SNOMED CT®, LOINC, Ucum, ATC, ICD-10-GM, ICD-10-WHO, OPS, Alpha-ID/Alpha-ID-SE und ICF enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED CT® Clinical Terms® (SNOMED CT® CT®) which is used by permission of SNOMED CT® International. All rights reserved. SNOMED CT® CT®, was originally created by The College of American Pathologists. SNOMED CT® and SNOMED CT® CT are registered trademarks of SNOMED CT® International. Implementers of these artefacts must have the appropriate SNOMED CT® CT Affiliate license. This material contains content from LOINC (http://LOINC.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://LOINC.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED ‘AS IS.’ ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. Dieses Material enthält Inhalte aus ATC. Die Erstellung erfolgte unter Verwendung der Datenträger der amtlichen Fassung der ATC-Klassifikation mit DDD des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICD-10-GM, ICD-10-WHO, OPS Alpha-ID ans Alpha-ID-SE. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICF. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Deutschen Instituts für Medizinische Dokumentation und Information (DIMDI). ICF-Kodes, -Begriffe und -Texte © Weltgesundheitsorganisation, übersetzt und herausgegeben durch das Deutsche Institut für Medizinische Dokumentation und Information von der International classification of functioning, disability and health - ICF, herausgegeben durch die Weltgesundheitsorganisation. | |

 
Profil für den Laborgesamtbefund (DiagnosticReport). Darin verschachtelt unter “Ergebnisse” (DiagnosticReport.result) ist die Referenz auf “Untersuchungsgruppe” (Observation_Laboratory_Study_Group), darin die Referenz auf “Laboruntersuchung” (Observation_Laboratory_Study), darin die Referenz auf “Probe” (Specimen). 

**Usages:**

* Use this Profile: [KBV_PR_MIO_LAB_Bundle](StructureDefinition-KBV-PR-MIO-LAB-Bundle.md)
* Refer to this Profile: [KBV_PR_MIO_LAB_Composition](StructureDefinition-KBV-PR-MIO-LAB-Composition.md)
* Examples for this Profile: [DiagnosticReport/3604d5a6-798e-4615-8a22-1d280638e2c0](DiagnosticReport-3604d5a6-798e-4615-8a22-1d280638e2c0.md) and [DiagnosticReport/a6f3d3de-0857-45ed-916e-087d84391bc3](DiagnosticReport-a6f3d3de-0857-45ed-916e-087d84391bc3.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/kbv.mio.laborbefund|current/StructureDefinition/StructureDefinition-KBV-PR-MIO-LAB-DiagnosticReport.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-KBV-PR-MIO-LAB-DiagnosticReport.csv), [Excel](StructureDefinition-KBV-PR-MIO-LAB-DiagnosticReport.xlsx), [Schematron](StructureDefinition-KBV-PR-MIO-LAB-DiagnosticReport.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "KBV-PR-MIO-LAB-DiagnosticReport",
  "url" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DiagnosticReport",
  "version" : "1.0.0-update",
  "name" : "KBV_PR_MIO_LAB_DiagnosticReport",
  "title" : "KBV_PR_MIO_LAB_DiagnosticReport",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-06-11",
  "publisher" : "mio42 GmbH",
  "contact" : [{
    "name" : "mio42 GmbH",
    "telecom" : [{
      "system" : "url",
      "value" : "https://mio.kbv.de"
    },
    {
      "system" : "email",
      "value" : "hello@mio42.de"
    }]
  }],
  "description" : "Profil für den Laborgesamtbefund (DiagnosticReport). Darin verschachtelt unter \"Ergebnisse\" (DiagnosticReport.result) ist die Referenz auf \"Untersuchungsgruppe\" (Observation_Laboratory_Study_Group), darin die Referenz auf \"Laboruntersuchung\" (Observation_Laboratory_Study), darin die Referenz auf \"Probe\" (Specimen).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "DE",
      "display" : "Germany"
    }]
  }],
  "copyright" : "Im folgenden Profil können Codes aus den Code-Systemen SNOMED CT®, LOINC, Ucum, ATC, ICD-10-GM, ICD-10-WHO, OPS, Alpha-ID/Alpha-ID-SE und ICF enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED CT® Clinical Terms® (SNOMED CT® CT®) which is used by permission of SNOMED CT® International. All rights reserved. SNOMED CT® CT®, was originally created by The College of American Pathologists. SNOMED CT® and SNOMED CT® CT are registered trademarks of SNOMED CT® International. Implementers of these artefacts must have the appropriate SNOMED CT® CT Affiliate license. This material contains content from LOINC (http://LOINC.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://LOINC.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED 'AS IS.' ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. Dieses Material enthält Inhalte aus ATC. Die Erstellung erfolgte unter Verwendung der Datenträger der amtlichen Fassung der ATC-Klassifikation mit DDD des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICD-10-GM, ICD-10-WHO, OPS Alpha-ID ans Alpha-ID-SE. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICF. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Deutschen Instituts für Medizinische Dokumentation und Information (DIMDI). ICF-Kodes, -Begriffe und -Texte © Weltgesundheitsorganisation, übersetzt und herausgegeben durch das Deutsche Institut für Medizinische Dokumentation und Information von der International classification of functioning, disability and health - ICF, herausgegeben durch die Weltgesundheitsorganisation.",
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "workflow",
    "uri" : "http://hl7.org/fhir/workflow",
    "name" : "Workflow Pattern"
  },
  {
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "DiagnosticReport",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "DiagnosticReport",
      "path" : "DiagnosticReport",
      "definition" : "Profil für den Laborgesamtbefund (DiagnosticReport). Darin verschachtelt unter \"Ergebnisse\" (DiagnosticReport.result) ist die Referenz auf \"Untersuchungsgruppe\" (Observation_Laboratory_Study_Group), darin die Referenz auf \"Laboruntersuchung\" (Observation_Laboratory_Study), darin die Referenz auf \"Probe\" (Specimen).",
      "constraint" : [{
        "key" : "diag-status-1",
        "severity" : "error",
        "human" : "A secondary status can only be provided if the diagnostic report status is either \"partial\" or \"preliminary\".",
        "expression" : "status in ('registered'|'final'|'cancelled'|'entered-in-error') implies extension('https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Secondary_Status').empty()",
        "source" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DiagnosticReport"
      }]
    },
    {
      "id" : "DiagnosticReport.meta",
      "path" : "DiagnosticReport.meta",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.meta.id",
      "path" : "DiagnosticReport.meta.id",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.meta.versionId",
      "path" : "DiagnosticReport.meta.versionId",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.meta.lastUpdated",
      "path" : "DiagnosticReport.meta.lastUpdated",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.meta.source",
      "path" : "DiagnosticReport.meta.source",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.implicitRules",
      "path" : "DiagnosticReport.implicitRules",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.language",
      "path" : "DiagnosticReport.language",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.text.status",
      "path" : "DiagnosticReport.text.status",
      "patternCode" : "extensions"
    },
    {
      "id" : "DiagnosticReport.contained",
      "path" : "DiagnosticReport.contained",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.extension",
      "path" : "DiagnosticReport.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "rules" : "closed"
      },
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.extension:orderEntryTime",
      "path" : "DiagnosticReport.extension",
      "sliceName" : "orderEntryTime",
      "short" : "Auftrageingangszeitpunkt im Labor",
      "definition" : "Die Bedeutung und Verwendung des Auftragseingangszeitpunktes im Laborprozess kann unterschiedlich sein, beispielsweise:\n\n  * In einem OrderEntry-Setting kann der Auftragseingangszeitstempel zum Zeitpunkt der ersten Probeneinbuchung für diesen Auftrag im Labor gesetzt werden. In einem solchen Fall aktiviert/generiert die erste Probe den Auftrag im LIS.\n  * In einem papiergebundenen Setting ist in der Regel der Scanzeitpunkt des Papierauftrages der Auftragseingangszeitstempel. Ggf. kann dieser vor oder nach der/den zugehörigen Probeneinbuchungen liegen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Order_Entry_Time"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.extension:orderEntryTime.value[x]",
      "path" : "DiagnosticReport.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.extension:pseudonymizedReport",
      "path" : "DiagnosticReport.extension",
      "sliceName" : "pseudonymizedReport",
      "short" : "Kennzeichnung, ob ein Laborbefund pseudonymisiert ist",
      "definition" : "Mit diesem Kennzeichen kann ein Laborbefund als \"pseudonymisiert\" deklariert werden.\n\n  Fachlicher Hintergrund: es gibt Anwendungsfälle, z.B. aus der Betriebsmedizin, die erfordern, dass ein Laborbefund pseudonymisiert, also ohne personenidentifizierende Inhalte übertragen wird. Nach welchen Regeln und mit welchem Identifikator ein pseudonymisierter Laborbefund übermittelt wird, ist Gegenstand einer Einzelabstimmung zwischen der anfordernden Einrichtung und dem Labor. Oft ist bereits der Auftrag pseudonymisiert. Hinweis: Zu einem späteren Zeitpunkt könnten Patient:innen berechtigterweise fordern, dass der Laborbefund seinen anderen Befunden hinzugefügt wird, z.B. in der ePA. Durch das Hochladen in die ePA wird der Befund eindeutig einer Person zugeordnet und dadurch die Pseudonymisierung (auch bei unverändert verdeckten Personendaten) \"demaskiert\".",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Pseudonymized_Report"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.extension:pseudonymizedReport.value[x]",
      "path" : "DiagnosticReport.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.extension:criticalResult",
      "path" : "DiagnosticReport.extension",
      "sliceName" : "criticalResult",
      "short" : "Manuell gesetztes Kennzeichen Kritischer Befund",
      "definition" : "Dieses Kennzeichen ist optional und deklariert einen aus labormedizinischer Sicht medizinisch kritischen Befund. Es wird aus einer aktiven Entscheidung des/der Labormediziners/in manuell gesetzt.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Critical_Result"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.extension:criticalResult.value[x]",
      "path" : "DiagnosticReport.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.extension:secondaryStatus",
      "path" : "DiagnosticReport.extension",
      "sliceName" : "secondaryStatus",
      "short" : "Änderungsstatus Laborbefund (Sekundärstatus)",
      "definition" : "Optionale sekundäre Angabe des Änderungsstatus, die zusätzlich zum Hauptstatus \"Status Gesamtbefund\" mitgegeben werden kann. Es können mehrere Werte als Änderungsgrund angegeben werden. Die möglichen Werte sind:\n\n  * Geändert\n  * Korrigiert\n  * Angefügt\n\n  Der typische und in jedem Labor alltägliche Anwendungsfall ist die Nachforderung bei einer Stufendiagnostik. Änderungen am Gesamtbefund können sich auch auf einen noch nicht abgeschlossenen Befund beziehen, z.B. auf einen Teilbefund oder einen vorläufigen Befund.",
      "min" : 0,
      "max" : "3",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Secondary_Status"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.extension:secondaryStatus.value[x]",
      "path" : "DiagnosticReport.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.extension:secondaryStatus.value[x].system",
      "path" : "DiagnosticReport.extension.value[x].system",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.extension:secondaryStatus.value[x].version",
      "path" : "DiagnosticReport.extension.value[x].version",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.extension:secondaryStatus.value[x].code",
      "path" : "DiagnosticReport.extension.value[x].code",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.extension:secondaryStatus.value[x].display",
      "path" : "DiagnosticReport.extension.value[x].display",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.extension:DiagnosticReportCompositionR5",
      "path" : "DiagnosticReport.extension",
      "sliceName" : "DiagnosticReportCompositionR5",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://hl7.org/fhir/5.0/StructureDefinition/extension-DiagnosticReport.composition"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.extension:DiagnosticReportCompositionR5.extension",
      "path" : "DiagnosticReport.extension.extension",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.extension:DiagnosticReportCompositionR5.value[x]",
      "path" : "DiagnosticReport.extension.value[x]",
      "min" : 1,
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Composition|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.extension:DiagnosticReportCompositionR5.value[x].reference",
      "path" : "DiagnosticReport.extension.value[x].reference",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.extension:DiagnosticReportCompositionR5.value[x].type",
      "path" : "DiagnosticReport.extension.value[x].type",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.extension:DiagnosticReportCompositionR5.value[x].identifier",
      "path" : "DiagnosticReport.extension.value[x].identifier",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.extension:DiagnosticReportCompositionR5.value[x].display",
      "path" : "DiagnosticReport.extension.value[x].display",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.identifier",
      "path" : "DiagnosticReport.identifier",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "type"
        }],
        "rules" : "closed"
      },
      "min" : 1,
      "max" : "2",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.identifier:orderNumberLab",
      "path" : "DiagnosticReport.identifier",
      "sliceName" : "orderNumberLab",
      "short" : "Auftragnummer des Labors",
      "definition" : "Auftragsnummer, die das auftragsnehmende Labor vergibt und führt",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.identifier:orderNumberLab.use",
      "path" : "DiagnosticReport.identifier.use",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.identifier:orderNumberLab.type",
      "path" : "DiagnosticReport.identifier.type",
      "min" : 1,
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Laboratory_Identificator",
          "version" : "1.0.0-update",
          "code" : "AL",
          "display" : "Auftragsnummer des Labors"
        }]
      },
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.identifier:orderNumberLab.type.coding",
      "path" : "DiagnosticReport.identifier.type.coding",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.identifier:orderNumberLab.type.coding.system",
      "path" : "DiagnosticReport.identifier.type.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.identifier:orderNumberLab.type.coding.version",
      "path" : "DiagnosticReport.identifier.type.coding.version",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.identifier:orderNumberLab.type.coding.code",
      "path" : "DiagnosticReport.identifier.type.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.identifier:orderNumberLab.type.coding.display",
      "path" : "DiagnosticReport.identifier.type.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.identifier:orderNumberLab.type.coding.userSelected",
      "path" : "DiagnosticReport.identifier.type.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.identifier:orderNumberLab.type.text",
      "path" : "DiagnosticReport.identifier.type.text",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.identifier:orderNumberLab.system",
      "path" : "DiagnosticReport.identifier.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.identifier:orderNumberLab.value",
      "path" : "DiagnosticReport.identifier.value",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.identifier:orderNumberLab.period",
      "path" : "DiagnosticReport.identifier.period",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.identifier:orderNumberLab.assigner",
      "path" : "DiagnosticReport.identifier.assigner",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.identifier:overallLabReport",
      "path" : "DiagnosticReport.identifier",
      "sliceName" : "overallLabReport",
      "short" : "Versionsunabhängiger konstanter Identifikator Laborgesamtbefund (UUID)",
      "definition" : "Die eindeutige Identifikation des Laborbefundes zu einem Laborauftrag geschieht mittels UUID (Universal Unique Identifier). Sie wird durch das auftragnehmende, Befund erzeugende Labor generiert.\n\nDie UUID wird als Befundinhalt beim Übermitteln des Laborbefundes mitgegeben, auch dann, wenn der Laborbefund jenseits der ePA übermittelt wird (z. B: per E-Mail oder KIM). Diese UUID bleibt über den gesamten Workflow der Abarbeitung des Auftrages die selbe; und zwar durch die Versionierung eines Laborbefundes hindurch (z.B. vorläufiger Befund, finaler Befund, Befund mit Änderungen ...) und durch alle Systeme hindurch.",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.identifier:overallLabReport.use",
      "path" : "DiagnosticReport.identifier.use",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.identifier:overallLabReport.type",
      "path" : "DiagnosticReport.identifier.type",
      "min" : 1,
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
          "code" : "RI",
          "display" : "Resource Identifier"
        }]
      },
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.identifier:overallLabReport.type.coding",
      "path" : "DiagnosticReport.identifier.type.coding",
      "min" : 1,
      "max" : "1"
    },
    {
      "id" : "DiagnosticReport.identifier:overallLabReport.type.text",
      "path" : "DiagnosticReport.identifier.type.text",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.identifier:overallLabReport.system",
      "path" : "DiagnosticReport.identifier.system",
      "definition" : "System, welches den Aufbau der UUID reguliert",
      "min" : 1,
      "patternUri" : "urn:ietf:rfc:3986",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.identifier:overallLabReport.value",
      "path" : "DiagnosticReport.identifier.value",
      "definition" : "Hier wird die UUID eingetragen. Der String beginnt immer mit \"urn:uuid:\", der zusammengesetzte String sähe dann beispielsweise so aus: \"urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6\".",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.identifier:overallLabReport.period",
      "path" : "DiagnosticReport.identifier.period",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.identifier:overallLabReport.assigner",
      "path" : "DiagnosticReport.identifier.assigner",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.basedOn",
      "path" : "DiagnosticReport.basedOn",
      "definition" : "Referenz auf das auftragnehmende Labor",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_ServiceRequest|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.basedOn.reference",
      "path" : "DiagnosticReport.basedOn.reference",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.basedOn.type",
      "path" : "DiagnosticReport.basedOn.type",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.basedOn.identifier",
      "path" : "DiagnosticReport.basedOn.identifier",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.basedOn.display",
      "path" : "DiagnosticReport.basedOn.display",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.status",
      "path" : "DiagnosticReport.status",
      "definition" : "Bearbeitungsstatus des Laborgesamtbefundes. Die Status-Werte orientieren sich am HL7 FHIR® Standard, jedoch werden der Wert \"unknown\" und die Werte für Änderungen in diesem ValueSet nicht verwendet.\n\n  * Registered - Registriert\n  * Partial - Nicht vollständig\n  * Preliminary - Vorläufig\n  * Final - Abgeschlossen\n  * Entered in Error - Irrtümliche Eingabe\n  * Cancelled - Storniert\n  * Amended - Geändert\n  * Corrected - Korrigiert\n  * Appended - Angefügt\n\n  Änderungen am finalen Befund werden über die hier aufgeführten (Haupt)Status \"Geändert\", \"Korrgiert\", \"Angefügt\" abgebildet.\n\n  Änderungen an vorläufigen oder nicht vollständigen Befunden werden über den Sekundärstatus mit den entsprechenden Werten abgebildet.\n\n\n  \n  Achtung! Auch Patientenstammdaten, die der Personenidentität dienen, können korrigiert werden. Im Falle einer Patientenverwechslung muss der Hauptstatus=\"Irrtümliche Eingabe\" gesetzt werden, dies darf nicht als Änderung versendet werden!)",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Diagnostic_ReportStatus|1.0.0-update"
      }
    },
    {
      "id" : "DiagnosticReport.category",
      "path" : "DiagnosticReport.category",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.code",
      "path" : "DiagnosticReport.code",
      "short" : "Deklariert \"Laborbefund\"",
      "definition" : "Codierte Angabe zur Art des Befundes, hier Laborbefund",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.code.coding",
      "path" : "DiagnosticReport.code.coding",
      "min" : 1,
      "max" : "1",
      "patternCoding" : {
        "system" : "http://loinc.org",
        "version" : "2.82",
        "code" : "11502-2",
        "display" : "Laboratory report"
      },
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.code.coding.system",
      "path" : "DiagnosticReport.code.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.code.coding.version",
      "path" : "DiagnosticReport.code.coding.version",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.code.coding.code",
      "path" : "DiagnosticReport.code.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.code.coding.display",
      "path" : "DiagnosticReport.code.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.code.coding.userSelected",
      "path" : "DiagnosticReport.code.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.code.text",
      "path" : "DiagnosticReport.code.text",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.subject",
      "path" : "DiagnosticReport.subject",
      "short" : "Zu behandelnde Person",
      "definition" : "Hier wird die zu behandelnde Person referenziert.",
      "min" : 1,
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Patient|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.subject.identifier",
      "path" : "DiagnosticReport.subject.identifier",
      "min" : 1,
      "type" : [{
        "code" : "Identifier",
        "profile" : ["http://fhir.de/StructureDefinition/identifier-kvid-10"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.encounter",
      "path" : "DiagnosticReport.encounter",
      "short" : "Fallbezug",
      "definition" : "Referenzierung auf die Fall-Identifikation / Fallnummer bezüglich Begegnung/Aufenthalt.",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.effective[x]",
      "path" : "DiagnosticReport.effective[x]",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.issued",
      "path" : "DiagnosticReport.issued",
      "short" : "Dokumentationszeitpunkt Laborgesamtbefund",
      "definition" : "Dokumentationszeitpunkt des Befundes durch das auftragnehmende Labor.",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.performer",
      "path" : "DiagnosticReport.performer",
      "short" : "Auftragnehmendes Labor",
      "definition" : "Person oder Organisation, die für Erstellung des Laborgesamtbefundes verantwortlich ist.\n\n\n  Das auftragnehmende Labor kann die Laborleistung selbst erbringen, teilweise selbst erbringen und teilweise an ein Speziallabor weiterleiten oder insgesamt an ein Speziallabor weiterleiten. Der Gesamtbefund wird vollumfänglich zum gesamten Laborauftrag vom Auftragnehmer erstellt.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Practitioner|1.0.0-update",
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_PractitionerRole|1.0.0-update",
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Organization|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.performer.reference",
      "path" : "DiagnosticReport.performer.reference",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.resultsInterpreter",
      "path" : "DiagnosticReport.resultsInterpreter",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.specimen",
      "path" : "DiagnosticReport.specimen",
      "comment" : "Zum Erhalt der europäischen Interoperabilität, orientiert an der Veröffentlichung https://hl7.eu/fhir/laboratory/history.html kann auf Gesamtbefundebene auf das gesamte Probenmaterial referenziert werden. Diese optionale Angabe ist redundant zu den Probenreferenzen der Einzeluntersuchungen.",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Specimen|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.specimen.reference",
      "path" : "DiagnosticReport.specimen.reference",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.specimen.type",
      "path" : "DiagnosticReport.specimen.type",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.specimen.identifier",
      "path" : "DiagnosticReport.specimen.identifier",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.specimen.display",
      "path" : "DiagnosticReport.specimen.display",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.result",
      "path" : "DiagnosticReport.result",
      "definition" : "Die Laborergebnisse werden grundsätzlich gruppiert. Es gibt mindestens eine Untersuchungsgruppe.",
      "min" : 1,
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Laboratory_Study_Group|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.result.extension",
      "path" : "DiagnosticReport.result.extension",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.result.extension:sortingNumberGroup",
      "path" : "DiagnosticReport.result.extension",
      "sliceName" : "sortingNumberGroup",
      "short" : "Sortiernummer Untersuchungsgruppe",
      "definition" : "Zu jeder Untersuchungsgruppe gibt es immer eine Sortiernummer. Die mit dem Datenstrom mitgegebenen Sortiernummern sind als Standardsortierung gedacht. Die Standardsortierung legt das Befund-erstellende Labor fest. Verwender können in Primärsystemen zusätzlich interaktiv auch anders sortieren, wenn das Primärsystem solche Funktionen anbietet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Sorting_Number"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.result.extension:sortingNumberGroup.value[x]",
      "path" : "DiagnosticReport.result.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.result.reference",
      "path" : "DiagnosticReport.result.reference",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.result.type",
      "path" : "DiagnosticReport.result.type",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.result.identifier",
      "path" : "DiagnosticReport.result.identifier",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.result.display",
      "path" : "DiagnosticReport.result.display",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.imagingStudy",
      "path" : "DiagnosticReport.imagingStudy",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.media",
      "path" : "DiagnosticReport.media",
      "short" : "Ergänzende Dokumente (zusätzlich zum strukturierten Teil des Laborbefundes)",
      "definition" : "Zum Anhängen zusätzlicher Resultate, die nicht Teil des strukturierten MIO Laborbefundes sind. Hier können Befunde aus labormedizinischen Spezialbereichen in einem digitalen Dokumentformat angehängt werden, beispielsweise Ergebnisse aus mikrobiologischen Kulturen oder humangenetischen Untersuchungen. Ziel ist es, grundsätzlich alle Laborbefunde in digitalem Format übermitteln zu können und in der elektronischen Patientenakte ablegen zu können.",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.media.comment",
      "path" : "DiagnosticReport.media.comment",
      "short" : "Freitext-Angaben zum ergänzenden Dokument",
      "definition" : "Feld für Freitext-Angaben zum ergänzenden Dokument, die in der vorgegebenen Datenstruktur nicht erfasst werden können.",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.media.link",
      "path" : "DiagnosticReport.media.link",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.media.link.extension",
      "path" : "DiagnosticReport.media.link.extension",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.media.link.extension:link",
      "path" : "DiagnosticReport.media.link.extension",
      "sliceName" : "link",
      "short" : "Referenzierung auf ergänzende Dokumente",
      "definition" : "Referenzierung auf ergänzende Dokumente",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://hl7.org/fhir/StructureDefinition/alternate-reference|5.3.0"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.media.link.extension:link.value[x]",
      "path" : "DiagnosticReport.media.link.extension.value[x]",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DocumentReference|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.media.link.extension:link.value[x].reference",
      "path" : "DiagnosticReport.media.link.extension.value[x].reference",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.media.link.extension:link.value[x].type",
      "path" : "DiagnosticReport.media.link.extension.value[x].type",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.media.link.extension:link.value[x].identifier",
      "path" : "DiagnosticReport.media.link.extension.value[x].identifier",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.media.link.extension:link.value[x].display",
      "path" : "DiagnosticReport.media.link.extension.value[x].display",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.media.link.reference",
      "path" : "DiagnosticReport.media.link.reference",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.media.link.type",
      "path" : "DiagnosticReport.media.link.type",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.media.link.identifier",
      "path" : "DiagnosticReport.media.link.identifier",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.media.link.display",
      "path" : "DiagnosticReport.media.link.display",
      "definition" : "Hinweis, der besagt, dass anstelle einer Referenz auf Media auf eine DocumentReference über die Cross-version Extension „link“ referenziert wird.",
      "min" : 1,
      "patternString" : "Media wird durch eine DocumentReference dargestellt, auf die in einer Extension verwiesen wird.",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.conclusion",
      "path" : "DiagnosticReport.conclusion",
      "short" : "Beurteilung des Laborgesamtbefundes",
      "definition" : "Befund-Bewertung, die sich auf den gesamten Laborbefund bezieht und ggf. Antworten auf klinische Fragestellungen formuliert. ",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.conclusionCode",
      "path" : "DiagnosticReport.conclusionCode",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.presentedForm",
      "path" : "DiagnosticReport.presentedForm",
      "short" : "Kompletter Gesamtbefund als exportierbares Format",
      "definition" : "Zusätzlich zur FHIR®-Instanz soll der GESAMTE Laborbefund (das bezieht sowohl die strukturierten Daten als auch ergänzende Dokument-Anteile mit ein) in einem weiteren Format wie z.B. als PDF mitgegeben werden.\n\n  Um die Versorgungskontinuität insbesondere zu Beginn der MIO-Einführung sicherzustellen, wird erwartet, dass das MIO neben den strukurierten Informationen auch den Gesamtlaborbefund in Form eines eingebetteten PDF/A-Dokuments enthält!",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.presentedForm.contentType",
      "path" : "DiagnosticReport.presentedForm.contentType",
      "definition" : "Hier wird das Dateiformat angegeben.",
      "min" : 1,
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_MIME_Types|1.0.0-update"
      }
    },
    {
      "id" : "DiagnosticReport.presentedForm.language",
      "path" : "DiagnosticReport.presentedForm.language",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.presentedForm.data",
      "path" : "DiagnosticReport.presentedForm.data",
      "definition" : "Hier wird die Dokument-Datei angehängt.",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.presentedForm.url",
      "path" : "DiagnosticReport.presentedForm.url",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.presentedForm.size",
      "path" : "DiagnosticReport.presentedForm.size",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.presentedForm.hash",
      "path" : "DiagnosticReport.presentedForm.hash",
      "max" : "0"
    },
    {
      "id" : "DiagnosticReport.presentedForm.title",
      "path" : "DiagnosticReport.presentedForm.title",
      "definition" : "Hier wird ein Titel bzw. eine Bezeichnung für die angehängte Datei angegeben.",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.presentedForm.creation",
      "path" : "DiagnosticReport.presentedForm.creation",
      "definition" : "Hier wird der Zeitpunkt der Erstellung des referenzierten Dokumentes bzw. des Anhangs angegeben.",
      "mustSupport" : true
    }]
  }
}

```
