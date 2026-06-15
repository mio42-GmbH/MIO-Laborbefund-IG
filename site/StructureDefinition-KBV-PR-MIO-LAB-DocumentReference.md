# KBV_PR_MIO_LAB_DocumentReference - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **KBV_PR_MIO_LAB_DocumentReference**

## Resource Profile: KBV_PR_MIO_LAB_DocumentReference 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DocumentReference | *Version*:1.0.0-update |
| Draft as of 2026-06-11 | *Computable Name*:KBV_PR_MIO_LAB_DocumentReference |
| **Copyright/Legal**: Im folgenden Profil können Codes aus den Code-Systemen SNOMED CT®, LOINC, Ucum, ATC, ICD-10-GM, ICD-10-WHO, OPS, Alpha-ID/Alpha-ID-SE und ICF enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED CT® Clinical Terms® (SNOMED CT® CT®) which is used by permission of SNOMED CT® International. All rights reserved. SNOMED CT® CT®, was originally created by The College of American Pathologists. SNOMED CT® and SNOMED CT® CT are registered trademarks of SNOMED CT® International. Implementers of these artefacts must have the appropriate SNOMED CT® CT Affiliate license. This material contains content from LOINC (http://LOINC.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://LOINC.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED ‘AS IS.’ ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. Dieses Material enthält Inhalte aus ATC. Die Erstellung erfolgte unter Verwendung der Datenträger der amtlichen Fassung der ATC-Klassifikation mit DDD des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICD-10-GM, ICD-10-WHO, OPS Alpha-ID ans Alpha-ID-SE. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICF. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Deutschen Instituts für Medizinische Dokumentation und Information (DIMDI). ICF-Kodes, -Begriffe und -Texte © Weltgesundheitsorganisation, übersetzt und herausgegeben durch das Deutsche Institut für Medizinische Dokumentation und Information von der International classification of functioning, disability and health - ICF, herausgegeben durch die Weltgesundheitsorganisation. | |

 
Hier werden zusätzliche Resultate, die nicht Teil des strukturierten MIO Laborbefundes sind, abgebildet. 

**Usages:**

* Use this Profile: [KBV_PR_MIO_LAB_Bundle](StructureDefinition-KBV-PR-MIO-LAB-Bundle.md)
* Refer to this Profile: [KBV_PR_MIO_LAB_DiagnosticReport](StructureDefinition-KBV-PR-MIO-LAB-DiagnosticReport.md)
* Examples for this Profile: [DocumentReference/d9e75f3f-3900-4183-a475-d4d3dc1d14cc](DocumentReference-d9e75f3f-3900-4183-a475-d4d3dc1d14cc.md) and [DocumentReference/f7dab433-b4b3-4908-8495-4876f0240511](DocumentReference-f7dab433-b4b3-4908-8495-4876f0240511.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/kbv.mio.laborbefund|current/StructureDefinition/StructureDefinition-KBV-PR-MIO-LAB-DocumentReference.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-KBV-PR-MIO-LAB-DocumentReference.csv), [Excel](StructureDefinition-KBV-PR-MIO-LAB-DocumentReference.xlsx), [Schematron](StructureDefinition-KBV-PR-MIO-LAB-DocumentReference.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "KBV-PR-MIO-LAB-DocumentReference",
  "url" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DocumentReference",
  "version" : "1.0.0-update",
  "name" : "KBV_PR_MIO_LAB_DocumentReference",
  "title" : "KBV_PR_MIO_LAB_DocumentReference",
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
  "description" : "Hier werden zusätzliche Resultate, die nicht Teil des strukturierten MIO Laborbefundes sind, abgebildet.",
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
    "identity" : "fhircomposition",
    "uri" : "http://hl7.org/fhir/composition",
    "name" : "FHIR Composition"
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
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  },
  {
    "identity" : "xds",
    "uri" : "http://ihe.net/xds",
    "name" : "XDS metadata equivalent"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "DocumentReference",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/DocumentReference",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "DocumentReference",
      "path" : "DocumentReference",
      "definition" : "Hier werden zusätzliche Resultate, die nicht Teil des strukturierten MIO Laborbefundes sind, abgebildet."
    },
    {
      "id" : "DocumentReference.meta",
      "path" : "DocumentReference.meta",
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.meta.id",
      "path" : "DocumentReference.meta.id",
      "max" : "0"
    },
    {
      "id" : "DocumentReference.meta.versionId",
      "path" : "DocumentReference.meta.versionId",
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.meta.lastUpdated",
      "path" : "DocumentReference.meta.lastUpdated",
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.meta.source",
      "path" : "DocumentReference.meta.source",
      "max" : "0"
    },
    {
      "id" : "DocumentReference.implicitRules",
      "path" : "DocumentReference.implicitRules",
      "max" : "0"
    },
    {
      "id" : "DocumentReference.language",
      "path" : "DocumentReference.language",
      "max" : "0"
    },
    {
      "id" : "DocumentReference.text.status",
      "path" : "DocumentReference.text.status",
      "patternCode" : "extensions"
    },
    {
      "id" : "DocumentReference.contained",
      "path" : "DocumentReference.contained",
      "max" : "0"
    },
    {
      "id" : "DocumentReference.masterIdentifier",
      "path" : "DocumentReference.masterIdentifier",
      "max" : "0"
    },
    {
      "id" : "DocumentReference.identifier",
      "path" : "DocumentReference.identifier",
      "max" : "0"
    },
    {
      "id" : "DocumentReference.status",
      "path" : "DocumentReference.status",
      "definition" : "Zum Anhängen zusätzlicher Resultate, die nicht Teil des strukturierten MIO Laborbefundes sind",
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.docStatus",
      "path" : "DocumentReference.docStatus",
      "max" : "0"
    },
    {
      "id" : "DocumentReference.type",
      "path" : "DocumentReference.type",
      "definition" : "In diesem Element werden Angaben zum Typ des Dokuments gemacht. Diese werden als codierte Information und/oder als Freitext angegeben."
    },
    {
      "id" : "DocumentReference.type.coding",
      "path" : "DocumentReference.type.coding",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "$this"
        }],
        "rules" : "open"
      },
      "definition" : "Hier wird ein Code aus einem geeigneten Code-System angegeben."
    },
    {
      "id" : "DocumentReference.type.coding:xds",
      "path" : "DocumentReference.type.coding",
      "sliceName" : "xds",
      "definition" : "Hier wird der Dokumenttyp gem. IHE-De-Terminologie in codierter Form angeben.",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "http://ihe-d.de/ValueSets/IHEXDStypeCode"
      }
    },
    {
      "id" : "DocumentReference.type.coding:xds.system",
      "path" : "DocumentReference.type.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.type.coding:xds.version",
      "path" : "DocumentReference.type.coding.version",
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.type.coding:xds.code",
      "path" : "DocumentReference.type.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.type.coding:xds.display",
      "path" : "DocumentReference.type.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.type.coding:xds.userSelected",
      "path" : "DocumentReference.type.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "DocumentReference.type.text",
      "path" : "DocumentReference.type.text",
      "definition" : "Hier wird ein Freitext eingetragen."
    },
    {
      "id" : "DocumentReference.category",
      "path" : "DocumentReference.category",
      "definition" : "In diesem Element werden Angaben zur Kategorie des Dokuments gemacht. Diese werden als codierte Information und/oder als Freitext angegeben."
    },
    {
      "id" : "DocumentReference.category.coding",
      "path" : "DocumentReference.category.coding",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "$this"
        }],
        "rules" : "open"
      },
      "definition" : "Hier wird ein Code aus einem geeigneten Code-System angegeben."
    },
    {
      "id" : "DocumentReference.category.coding:xds",
      "path" : "DocumentReference.category.coding",
      "sliceName" : "xds",
      "definition" : "Hier wird die Kategorie des Dokuments gem. IHE-De-Terminologie in codierter Form angeben.",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "http://ihe-d.de/ValueSets/IHEXDSclassCode"
      }
    },
    {
      "id" : "DocumentReference.category.coding:xds.system",
      "path" : "DocumentReference.category.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.category.coding:xds.version",
      "path" : "DocumentReference.category.coding.version",
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.category.coding:xds.code",
      "path" : "DocumentReference.category.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.category.coding:xds.display",
      "path" : "DocumentReference.category.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.category.coding:xds.userSelected",
      "path" : "DocumentReference.category.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "DocumentReference.category.text",
      "path" : "DocumentReference.category.text",
      "definition" : "Hier wird ein Freitext eingetragen."
    },
    {
      "id" : "DocumentReference.subject",
      "path" : "DocumentReference.subject",
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
      "id" : "DocumentReference.subject.identifier",
      "path" : "DocumentReference.subject.identifier",
      "min" : 1,
      "type" : [{
        "code" : "Identifier",
        "profile" : ["http://fhir.de/StructureDefinition/identifier-kvid-10"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.date",
      "path" : "DocumentReference.date",
      "max" : "0"
    },
    {
      "id" : "DocumentReference.author",
      "path" : "DocumentReference.author",
      "max" : "0"
    },
    {
      "id" : "DocumentReference.authenticator",
      "path" : "DocumentReference.authenticator",
      "max" : "0"
    },
    {
      "id" : "DocumentReference.custodian",
      "path" : "DocumentReference.custodian",
      "max" : "0"
    },
    {
      "id" : "DocumentReference.relatesTo",
      "path" : "DocumentReference.relatesTo",
      "max" : "0"
    },
    {
      "id" : "DocumentReference.description",
      "path" : "DocumentReference.description",
      "max" : "0"
    },
    {
      "id" : "DocumentReference.securityLabel",
      "path" : "DocumentReference.securityLabel",
      "max" : "0"
    },
    {
      "id" : "DocumentReference.content",
      "path" : "DocumentReference.content",
      "slicing" : {
        "discriminator" : [{
          "type" : "exists",
          "path" : "attachment.url"
        }],
        "rules" : "closed"
      },
      "definition" : "In diesem Element wird eine strukturierte Referenz auf andere Inhalte gemacht, dies kann z. B. ein anderes Dokument in der ePA sein\r\n\r\noder\r\n\r\nHier wird das Dokument in Form eines formatierten Anhangs abgebildet."
    },
    {
      "id" : "DocumentReference.content:appendix",
      "path" : "DocumentReference.content",
      "sliceName" : "appendix",
      "min" : 1,
      "max" : "*",
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.content:appendix.attachment",
      "path" : "DocumentReference.content.attachment",
      "definition" : "Hier wird das Dokument in Form eines formatierten Anhangs abgebildet.",
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.content:appendix.attachment.contentType",
      "path" : "DocumentReference.content.attachment.contentType",
      "definition" : "Hier wird das Dateiformat angegeben.",
      "min" : 1,
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_MIME_Types|1.0.0-update"
      }
    },
    {
      "id" : "DocumentReference.content:appendix.attachment.language",
      "path" : "DocumentReference.content.attachment.language",
      "max" : "0"
    },
    {
      "id" : "DocumentReference.content:appendix.attachment.data",
      "path" : "DocumentReference.content.attachment.data",
      "definition" : "Hier wird die Dokument-Datei angehängt.",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.content:appendix.attachment.url",
      "path" : "DocumentReference.content.attachment.url",
      "max" : "0"
    },
    {
      "id" : "DocumentReference.content:appendix.attachment.size",
      "path" : "DocumentReference.content.attachment.size",
      "max" : "0"
    },
    {
      "id" : "DocumentReference.content:appendix.attachment.hash",
      "path" : "DocumentReference.content.attachment.hash",
      "max" : "0"
    },
    {
      "id" : "DocumentReference.content:appendix.attachment.title",
      "path" : "DocumentReference.content.attachment.title",
      "definition" : "Hier wird ein Titel bzw. eine Bezeichnung für die angehängte Datei angegeben.",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.content:appendix.attachment.creation",
      "path" : "DocumentReference.content.attachment.creation",
      "definition" : "Hier wird der Zeitpunkt der Erstellung des referenzierten Dokumentes bzw. des Anhangs angegeben.",
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.content:appendix.format",
      "path" : "DocumentReference.content.format",
      "max" : "0"
    },
    {
      "id" : "DocumentReference.context",
      "path" : "DocumentReference.context",
      "max" : "0"
    }]
  }
}

```
