# KBV_PR_MIO_LAB_Composition - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **KBV_PR_MIO_LAB_Composition**

## Resource Profile: KBV_PR_MIO_LAB_Composition 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Composition | *Version*:1.0.0-update |
| Draft as of 2026-06-11 | *Computable Name*:KBV_PR_MIO_LAB_Composition |
| **Copyright/Legal**: Im folgenden Profil können Codes aus den Code-Systemen SNOMED CT®, LOINC, Ucum, ATC, ICD-10-GM, ICD-10-WHO, OPS, Alpha-ID/Alpha-ID-SE und ICF enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED CT® Clinical Terms® (SNOMED CT® CT®) which is used by permission of SNOMED CT® International. All rights reserved. SNOMED CT® CT®, was originally created by The College of American Pathologists. SNOMED CT® and SNOMED CT® CT are registered trademarks of SNOMED CT® International. Implementers of these artefacts must have the appropriate SNOMED CT® CT Affiliate license. This material contains content from LOINC (http://LOINC.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://LOINC.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED ‘AS IS.’ ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. Dieses Material enthält Inhalte aus ATC. Die Erstellung erfolgte unter Verwendung der Datenträger der amtlichen Fassung der ATC-Klassifikation mit DDD des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICD-10-GM, ICD-10-WHO, OPS Alpha-ID ans Alpha-ID-SE. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICF. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Deutschen Instituts für Medizinische Dokumentation und Information (DIMDI). ICF-Kodes, -Begriffe und -Texte © Weltgesundheitsorganisation, übersetzt und herausgegeben durch das Deutsche Institut für Medizinische Dokumentation und Information von der International classification of functioning, disability and health - ICF, herausgegeben durch die Weltgesundheitsorganisation. | |

 
Dieses Profil bündelt die Strukturen, die zum gesamten Laborbefund gehören. Das MIO Laborbefund enthält genau einen Laborgesamtbefund, inklusive aller Befundanteile und Anhänge. 

**Usages:**

* Use this Profile: [KBV_PR_MIO_LAB_Bundle](StructureDefinition-KBV-PR-MIO-LAB-Bundle.md)
* Refer to this Profile: [KBV_PR_MIO_LAB_DiagnosticReport](StructureDefinition-KBV-PR-MIO-LAB-DiagnosticReport.md)
* Examples for this Profile: [Composition/13c807c0-53e7-488e-84bb-023376563cf3](Composition-13c807c0-53e7-488e-84bb-023376563cf3.md) and [Composition/cdfb127b-df3c-493f-bc7e-e8be4a7bdc45](Composition-cdfb127b-df3c-493f-bc7e-e8be4a7bdc45.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/kbv.mio.laborbefund|current/StructureDefinition/StructureDefinition-KBV-PR-MIO-LAB-Composition.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-KBV-PR-MIO-LAB-Composition.csv), [Excel](StructureDefinition-KBV-PR-MIO-LAB-Composition.xlsx), [Schematron](StructureDefinition-KBV-PR-MIO-LAB-Composition.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "KBV-PR-MIO-LAB-Composition",
  "url" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Composition",
  "version" : "1.0.0-update",
  "name" : "KBV_PR_MIO_LAB_Composition",
  "title" : "KBV_PR_MIO_LAB_Composition",
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
  "description" : "Dieses Profil bündelt die Strukturen, die zum gesamten Laborbefund gehören. Das MIO Laborbefund enthält genau einen Laborgesamtbefund, inklusive aller Befundanteile und Anhänge.",
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
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "cda",
    "uri" : "http://hl7.org/v3/cda",
    "name" : "CDA (R2)"
  },
  {
    "identity" : "fhirdocumentreference",
    "uri" : "http://hl7.org/fhir/documentreference",
    "name" : "FHIR DocumentReference"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Composition",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Composition",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Composition",
      "path" : "Composition",
      "definition" : "Dieses Profil bündelt die Strukturen, die zum gesamten Laborbefund gehören. Das MIO Laborbefund enthält genau einen Laborgesamtbefund, inklusive aller Befundanteile und Anhänge."
    },
    {
      "id" : "Composition.meta",
      "path" : "Composition.meta",
      "mustSupport" : true
    },
    {
      "id" : "Composition.meta.id",
      "path" : "Composition.meta.id",
      "max" : "0"
    },
    {
      "id" : "Composition.meta.versionId",
      "path" : "Composition.meta.versionId",
      "mustSupport" : true
    },
    {
      "id" : "Composition.meta.lastUpdated",
      "path" : "Composition.meta.lastUpdated",
      "mustSupport" : true
    },
    {
      "id" : "Composition.meta.source",
      "path" : "Composition.meta.source",
      "max" : "0"
    },
    {
      "id" : "Composition.implicitRules",
      "path" : "Composition.implicitRules",
      "max" : "0"
    },
    {
      "id" : "Composition.language",
      "path" : "Composition.language",
      "max" : "0"
    },
    {
      "id" : "Composition.text.status",
      "path" : "Composition.text.status",
      "patternCode" : "extensions"
    },
    {
      "id" : "Composition.contained",
      "path" : "Composition.contained",
      "max" : "0"
    },
    {
      "id" : "Composition.extension",
      "path" : "Composition.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "rules" : "closed"
      },
      "min" : 2,
      "mustSupport" : true
    },
    {
      "id" : "Composition.extension:version",
      "path" : "Composition.extension",
      "sliceName" : "version",
      "definition" : "Vom erstellenden System vergegeben Version des Laborgesamtbefundes",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://hl7.org/fhir/5.0/StructureDefinition/extension-Composition.version"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Composition.extension:version.extension",
      "path" : "Composition.extension.extension",
      "max" : "0"
    },
    {
      "id" : "Composition.extension:version.value[x]",
      "path" : "Composition.extension.value[x]",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Composition.extension:basedOn-order-or-requisition",
      "path" : "Composition.extension",
      "sliceName" : "basedOn-order-or-requisition",
      "definition" : "Referenz auf die Laborauftrag-Informationen",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://hl7.eu/fhir/StructureDefinition/composition-basedOn-order-or-requisition"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Composition.extension:basedOn-order-or-requisition.value[x]",
      "path" : "Composition.extension.value[x]",
      "min" : 1,
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_ServiceRequest"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Composition.extension:basedOn-order-or-requisition.value[x].reference",
      "path" : "Composition.extension.value[x].reference",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Composition.extension:basedOn-order-or-requisition.value[x].type",
      "path" : "Composition.extension.value[x].type",
      "max" : "0"
    },
    {
      "id" : "Composition.extension:basedOn-order-or-requisition.value[x].identifier",
      "path" : "Composition.extension.value[x].identifier",
      "max" : "0"
    },
    {
      "id" : "Composition.extension:basedOn-order-or-requisition.value[x].display",
      "path" : "Composition.extension.value[x].display",
      "max" : "0"
    },
    {
      "id" : "Composition.extension:diagnosticReport-reference",
      "path" : "Composition.extension",
      "sliceName" : "diagnosticReport-reference",
      "definition" : "Referenz auf den Laborgesamtbefund",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://hl7.eu/fhir/extensions/StructureDefinition/composition-diagnosticReportReference"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Composition.extension:diagnosticReport-reference.value[x]",
      "path" : "Composition.extension.value[x]",
      "min" : 1,
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DiagnosticReport"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Composition.extension:diagnosticReport-reference.value[x].reference",
      "path" : "Composition.extension.value[x].reference",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Composition.extension:diagnosticReport-reference.value[x].type",
      "path" : "Composition.extension.value[x].type",
      "max" : "0"
    },
    {
      "id" : "Composition.extension:diagnosticReport-reference.value[x].identifier",
      "path" : "Composition.extension.value[x].identifier",
      "max" : "0"
    },
    {
      "id" : "Composition.extension:diagnosticReport-reference.value[x].display",
      "path" : "Composition.extension.value[x].display",
      "max" : "0"
    },
    {
      "id" : "Composition.extension:information-recipient",
      "path" : "Composition.extension",
      "sliceName" : "information-recipient",
      "short" : "Empfänger:in des Laborbefundes",
      "definition" : "Empfänger:innen können sein:\n\n  * Behandelnde/r Arzt/Ärztin als Person oder Einrichtung\n  * Behandelnde/r Therapeut:in als Person oder Einrichtung\n  * Behandelnde Person/Einrichtung-Kombination\n  * Der/die Patient:in selbst",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://hl7.eu/fhir/StructureDefinition/information-recipient"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Composition.extension:information-recipient.value[x]",
      "path" : "Composition.extension.value[x]",
      "min" : 1,
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Patient",
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_RelatedPerson",
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Practitioner",
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_PractitionerRole",
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Organization"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Composition.extension:information-recipient.value[x].reference",
      "path" : "Composition.extension.value[x].reference",
      "mustSupport" : true
    },
    {
      "id" : "Composition.extension:information-recipient.value[x].identifier",
      "path" : "Composition.extension.value[x].identifier",
      "mustSupport" : true
    },
    {
      "id" : "Composition.identifier",
      "path" : "Composition.identifier",
      "short" : "Versionsunabhängiger konstanter Identifikator Laborgesamtbefund (UUID)",
      "definition" : "Identifikator für gesamten Laborbefund, der vom durchführenden, den Befund erzeugenden Labor zugewiesen wird und der über die Versionen hinweg konstant bleibt.",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Composition.identifier.system",
      "path" : "Composition.identifier.system",
      "min" : 1,
      "patternUri" : "urn:ietf:rfc:3986",
      "mustSupport" : true
    },
    {
      "id" : "Composition.identifier.value",
      "path" : "Composition.identifier.value",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Composition.status",
      "path" : "Composition.status",
      "definition" : "Hier wird angegeben, ob ein vorläufiger oder endgültiger digitaler Laborbefund erstellt wird.",
      "mustSupport" : true
    },
    {
      "id" : "Composition.type",
      "path" : "Composition.type",
      "definition" : "Hier ist ein Code enthalten, welcher Beschreibt, dass es sich um einen Laborbefund handelt.",
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "http://snomed.info/sct",
          "version" : "http://snomed.info/sct/11000274103/version/20251115",
          "code" : "4241000179101",
          "display" : "Laboratory report (record artifact)"
        }]
      },
      "mustSupport" : true
    },
    {
      "id" : "Composition.type.coding",
      "path" : "Composition.type.coding",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Composition.type.coding.system",
      "path" : "Composition.type.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Composition.type.coding.version",
      "path" : "Composition.type.coding.version",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Composition.type.coding.code",
      "path" : "Composition.type.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Composition.type.coding.display",
      "path" : "Composition.type.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Composition.type.coding.userSelected",
      "path" : "Composition.type.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Composition.type.text",
      "path" : "Composition.type.text",
      "max" : "0"
    },
    {
      "id" : "Composition.category",
      "path" : "Composition.category",
      "max" : "0"
    },
    {
      "id" : "Composition.subject",
      "path" : "Composition.subject",
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
      "id" : "Composition.subject.identifier",
      "path" : "Composition.subject.identifier",
      "min" : 1,
      "type" : [{
        "code" : "Identifier",
        "profile" : ["http://fhir.de/StructureDefinition/identifier-kvid-10"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Composition.encounter",
      "path" : "Composition.encounter",
      "max" : "0"
    },
    {
      "id" : "Composition.date",
      "path" : "Composition.date",
      "definition" : "Erstellungszeitpunkt.",
      "mustSupport" : true
    },
    {
      "id" : "Composition.author",
      "path" : "Composition.author",
      "definition" : "Hier können ein Autor oder mehrere Autoren des Laborbefundes abgebildet werden",
      "mustSupport" : true
    },
    {
      "id" : "Composition.author.reference",
      "path" : "Composition.author.reference",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Composition.author.type",
      "path" : "Composition.author.type",
      "max" : "0"
    },
    {
      "id" : "Composition.author.identifier",
      "path" : "Composition.author.identifier",
      "max" : "0"
    },
    {
      "id" : "Composition.author.display",
      "path" : "Composition.author.display",
      "max" : "0"
    },
    {
      "id" : "Composition.title",
      "path" : "Composition.title",
      "definition" : "Hier wird dem Dokument ein lesbarer Name gegeben.",
      "patternString" : "Laboratory Report",
      "mustSupport" : true
    },
    {
      "id" : "Composition.confidentiality",
      "path" : "Composition.confidentiality",
      "max" : "0"
    },
    {
      "id" : "Composition.attester",
      "path" : "Composition.attester",
      "short" : "Freigabe des gesamten Laborbefundes",
      "definition" : "Hier werden Angaben zur Freigabe des gesamten Laborbefundes gemacht. Das beinhaltet die Angabe der freigebenden Person, des Zeitpunktes und der Typisierung der Freigabe.",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Composition.attester.mode",
      "path" : "Composition.attester.mode",
      "definition" : "Typisierung der Freigabe als Verantwortlichkeit im juristischen Sinn. Dies entspricht den Anforderungen der \"Richtlinie der Bundesärztekammer zur Qualitätssicherung laboratoriumsmedizinischer Untersuchungen\", welche für den Laborbefundbericht eine solche Freigabe vorschreibt.",
      "patternCode" : "legal",
      "mustSupport" : true
    },
    {
      "id" : "Composition.attester.time",
      "path" : "Composition.attester.time",
      "definition" : "Zeitpunkt der Freigabe des Gesamtbefundes. Im Laborkontext soll der Zeitpunkt nach Möglichkeit minutengenau angegeben werden, die Mindestangabe ist tagesgenau.",
      "min" : 1,
      "constraint" : [{
        "key" : "date-1",
        "severity" : "error",
        "human" : "Datetime must be at least day, month and year.",
        "expression" : "($this as dateTime).toString().length() >= 10",
        "source" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Composition"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Composition.attester.party",
      "path" : "Composition.attester.party",
      "definition" : "Referenz Freigebende Person",
      "min" : 1,
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Practitioner",
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_PractitionerRole"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Composition.attester.party.reference",
      "path" : "Composition.attester.party.reference",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Composition.attester.party.type",
      "path" : "Composition.attester.party.type",
      "max" : "0"
    },
    {
      "id" : "Composition.attester.party.identifier",
      "path" : "Composition.attester.party.identifier",
      "max" : "0"
    },
    {
      "id" : "Composition.attester.party.display",
      "path" : "Composition.attester.party.display",
      "max" : "0"
    },
    {
      "id" : "Composition.custodian",
      "path" : "Composition.custodian",
      "max" : "0"
    },
    {
      "id" : "Composition.relatesTo",
      "path" : "Composition.relatesTo",
      "max" : "0"
    },
    {
      "id" : "Composition.event",
      "path" : "Composition.event",
      "max" : "0"
    },
    {
      "id" : "Composition.section",
      "path" : "Composition.section",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "$this.code"
        }],
        "rules" : "open"
      },
      "definition" : "The \\\"body\\\" of the report is organized as a tree of up to two levels of sections: top level sections represent laboratory specialties. A top level section SHALL contain either one text block carrying all the text results produced for this specialty along with Laboratory Data Entries or a set of Laboratory Report Item Sections. In the first case the specialty section happens to also be a leaf section. In the latter case, each (second level) leaf section contained in the (top level) specialty section represents a Report Item: i.e., a battery, a specimen study (especially in microbiology), or an individual test. In addition, any leaf section SHALL contain a Laboratory Data Entries containing the observations of that section in a machine-readable format.",
      "mustSupport" : true
    },
    {
      "id" : "Composition.section:annotations",
      "path" : "Composition.section",
      "sliceName" : "annotations",
      "min" : 0,
      "max" : "*",
      "mustSupport" : true
    },
    {
      "id" : "Composition.section:annotations.title",
      "path" : "Composition.section.title",
      "max" : "0"
    },
    {
      "id" : "Composition.section:annotations.code",
      "path" : "Composition.section.code",
      "min" : 1,
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "http://loinc.org",
          "version" : "2.82",
          "code" : "48767-8",
          "display" : "Annotation comment [Interpretation] Narrative"
        }]
      },
      "mustSupport" : true
    },
    {
      "id" : "Composition.section:annotations.code.coding",
      "path" : "Composition.section.code.coding",
      "mustSupport" : true
    },
    {
      "id" : "Composition.section:annotations.code.coding.system",
      "path" : "Composition.section.code.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Composition.section:annotations.code.coding.version",
      "path" : "Composition.section.code.coding.version",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Composition.section:annotations.code.coding.code",
      "path" : "Composition.section.code.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Composition.section:annotations.code.coding.display",
      "path" : "Composition.section.code.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Composition.section:annotations.code.coding.userSelected",
      "path" : "Composition.section.code.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Composition.section:annotations.code.text",
      "path" : "Composition.section.code.text",
      "max" : "0"
    },
    {
      "id" : "Composition.section:annotations.author",
      "path" : "Composition.section.author",
      "max" : "0"
    },
    {
      "id" : "Composition.section:annotations.focus",
      "path" : "Composition.section.focus",
      "max" : "0"
    },
    {
      "id" : "Composition.section:annotations.text",
      "path" : "Composition.section.text",
      "definition" : "Freitextfeld für zusätzliche Informationen zum Laborgesamtbefund.",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Composition.section:annotations.text.status",
      "path" : "Composition.section.text.status",
      "patternCode" : "additional"
    },
    {
      "id" : "Composition.section:annotations.mode",
      "path" : "Composition.section.mode",
      "max" : "0"
    },
    {
      "id" : "Composition.section:annotations.orderedBy",
      "path" : "Composition.section.orderedBy",
      "max" : "0"
    },
    {
      "id" : "Composition.section:annotations.entry",
      "path" : "Composition.section.entry",
      "max" : "0"
    },
    {
      "id" : "Composition.section:annotations.emptyReason",
      "path" : "Composition.section.emptyReason",
      "max" : "0"
    },
    {
      "id" : "Composition.section:annotations.section",
      "path" : "Composition.section.section",
      "max" : "0"
    }]
  }
}

```
