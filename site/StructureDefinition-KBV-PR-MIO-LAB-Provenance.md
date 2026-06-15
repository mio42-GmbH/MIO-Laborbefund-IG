# KBV_PR_MIO_LAB_Provenance - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **KBV_PR_MIO_LAB_Provenance**

## Resource Profile: KBV_PR_MIO_LAB_Provenance 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Provenance | *Version*:1.0.0-update |
| Draft as of 2026-06-11 | *Computable Name*:KBV_PR_MIO_LAB_Provenance |
| **Copyright/Legal**: Im folgenden Profil können Codes aus den Code-Systemen SNOMED CT®, LOINC, Ucum, ATC, ICD-10-GM, ICD-10-WHO, OPS, Alpha-ID/Alpha-ID-SE und ICF enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED CT® Clinical Terms® (SNOMED CT® CT®) which is used by permission of SNOMED CT® International. All rights reserved. SNOMED CT® CT®, was originally created by The College of American Pathologists. SNOMED CT® and SNOMED CT® CT are registered trademarks of SNOMED CT® International. Implementers of these artefacts must have the appropriate SNOMED CT® CT Affiliate license. This material contains content from LOINC (http://LOINC.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://LOINC.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED ‘AS IS.’ ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. Dieses Material enthält Inhalte aus ATC. Die Erstellung erfolgte unter Verwendung der Datenträger der amtlichen Fassung der ATC-Klassifikation mit DDD des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICD-10-GM, ICD-10-WHO, OPS Alpha-ID ans Alpha-ID-SE. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICF. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Deutschen Instituts für Medizinische Dokumentation und Information (DIMDI). ICF-Kodes, -Begriffe und -Texte © Weltgesundheitsorganisation, übersetzt und herausgegeben durch das Deutsche Institut für Medizinische Dokumentation und Information von der International classification of functioning, disability and health - ICF, herausgegeben durch die Weltgesundheitsorganisation. | |

 
Hier werden Angaben zur medizinischen Freigabe der Laboruntersuchung gemacht. Das beinhaltet die Angabe der freigebenden Person, des Zeitpunktes und der Typisierung der Freigabe. 

**Usages:**

* Use this Profile: [KBV_PR_MIO_LAB_Bundle](StructureDefinition-KBV-PR-MIO-LAB-Bundle.md)
* Examples for this Profile: [Provenance/5f40f9f7-4474-4080-bb31-a314d1cda038](Provenance-5f40f9f7-4474-4080-bb31-a314d1cda038.md) and [Provenance/f3533f34-781a-4cb4-9926-19fc8479b3e3](Provenance-f3533f34-781a-4cb4-9926-19fc8479b3e3.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/kbv.mio.laborbefund|current/StructureDefinition/StructureDefinition-KBV-PR-MIO-LAB-Provenance.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-KBV-PR-MIO-LAB-Provenance.csv), [Excel](StructureDefinition-KBV-PR-MIO-LAB-Provenance.xlsx), [Schematron](StructureDefinition-KBV-PR-MIO-LAB-Provenance.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "KBV-PR-MIO-LAB-Provenance",
  "url" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Provenance",
  "version" : "1.0.0-update",
  "name" : "KBV_PR_MIO_LAB_Provenance",
  "title" : "KBV_PR_MIO_LAB_Provenance",
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
  "description" : "Hier werden Angaben zur medizinischen Freigabe der Laboruntersuchung gemacht. Das beinhaltet die Angabe der freigebenden Person, des Zeitpunktes und der Typisierung der Freigabe.",
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
    "identity" : "w3c.prov",
    "uri" : "http://www.w3.org/ns/prov",
    "name" : "W3C PROV"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "fhirauditevent",
    "uri" : "http://hl7.org/fhir/auditevent",
    "name" : "FHIR AuditEvent Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Provenance",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Provenance",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Provenance",
      "path" : "Provenance",
      "definition" : "Hier werden Angaben zur medizinischen Freigabe der Laboruntersuchung gemacht. Das beinhaltet die Angabe der freigebenden Person, des Zeitpunktes und der Typisierung der Freigabe."
    },
    {
      "id" : "Provenance.meta",
      "path" : "Provenance.meta",
      "mustSupport" : true
    },
    {
      "id" : "Provenance.meta.id",
      "path" : "Provenance.meta.id",
      "max" : "0"
    },
    {
      "id" : "Provenance.meta.versionId",
      "path" : "Provenance.meta.versionId",
      "mustSupport" : true
    },
    {
      "id" : "Provenance.meta.lastUpdated",
      "path" : "Provenance.meta.lastUpdated",
      "mustSupport" : true
    },
    {
      "id" : "Provenance.meta.source",
      "path" : "Provenance.meta.source",
      "max" : "0"
    },
    {
      "id" : "Provenance.implicitRules",
      "path" : "Provenance.implicitRules",
      "max" : "0"
    },
    {
      "id" : "Provenance.language",
      "path" : "Provenance.language",
      "max" : "0"
    },
    {
      "id" : "Provenance.text.status",
      "path" : "Provenance.text.status",
      "patternCode" : "extensions"
    },
    {
      "id" : "Provenance.contained",
      "path" : "Provenance.contained",
      "max" : "0"
    },
    {
      "id" : "Provenance.target",
      "path" : "Provenance.target",
      "definition" : "Hier wird die Laboruntersuchung referenziert, auf die sich die medizinische Freigabe bezieht.",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Laboratory_Study|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Provenance.target.reference",
      "path" : "Provenance.target.reference",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Provenance.target.type",
      "path" : "Provenance.target.type",
      "max" : "0"
    },
    {
      "id" : "Provenance.target.identifier",
      "path" : "Provenance.target.identifier",
      "max" : "0"
    },
    {
      "id" : "Provenance.target.display",
      "path" : "Provenance.target.display",
      "max" : "0"
    },
    {
      "id" : "Provenance.occurred[x]",
      "path" : "Provenance.occurred[x]",
      "definition" : "Der Zeitpunkt, wenn Ergebnis als \"medizinisch qualitätsgesichert bzw. bewertet\" in das Laborinformationssystem übernommen wird.\n\nIm Laborkontext sollte der Zeitpunkt nach Möglichkeit minutengenau angegeben werden, die Mindestangabe ist tagesgenau.",
      "min" : 1,
      "type" : [{
        "code" : "dateTime"
      }],
      "constraint" : [{
        "key" : "date-1",
        "severity" : "error",
        "human" : "Datetime must be at least day, month and year.",
        "expression" : "($this as dateTime).toString().length() >= 10",
        "source" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Provenance"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Provenance.recorded",
      "path" : "Provenance.recorded",
      "mustSupport" : true
    },
    {
      "id" : "Provenance.policy",
      "path" : "Provenance.policy",
      "max" : "0"
    },
    {
      "id" : "Provenance.location",
      "path" : "Provenance.location",
      "max" : "0"
    },
    {
      "id" : "Provenance.reason",
      "path" : "Provenance.reason",
      "max" : "0"
    },
    {
      "id" : "Provenance.activity",
      "path" : "Provenance.activity",
      "definition" : "Typisierung der Freigabe als Feststellung der korrekten und medizinisch fachgerechten Leistungserbringung.",
      "min" : 1,
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
          "code" : "VRF",
          "display" : "verifier"
        }]
      },
      "mustSupport" : true
    },
    {
      "id" : "Provenance.activity.coding",
      "path" : "Provenance.activity.coding",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Provenance.activity.coding.system",
      "path" : "Provenance.activity.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Provenance.activity.coding.version",
      "path" : "Provenance.activity.coding.version",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Provenance.activity.coding.code",
      "path" : "Provenance.activity.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Provenance.activity.coding.display",
      "path" : "Provenance.activity.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Provenance.activity.coding.userSelected",
      "path" : "Provenance.activity.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Provenance.agent",
      "path" : "Provenance.agent",
      "definition" : "Hier wird die Person angegeben, die die medizinische Freigabe durchgeführt hat.",
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Provenance.agent.type",
      "path" : "Provenance.agent.type",
      "max" : "0"
    },
    {
      "id" : "Provenance.agent.role",
      "path" : "Provenance.agent.role",
      "max" : "0"
    },
    {
      "id" : "Provenance.agent.who",
      "path" : "Provenance.agent.who",
      "definition" : "Hier wird die Person angegeben, die die medizinische Freigabe durchgeführt hat. ",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Practitioner|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Provenance.agent.who.reference",
      "path" : "Provenance.agent.who.reference",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Provenance.agent.who.type",
      "path" : "Provenance.agent.who.type",
      "max" : "0"
    },
    {
      "id" : "Provenance.agent.who.identifier",
      "path" : "Provenance.agent.who.identifier",
      "max" : "0"
    },
    {
      "id" : "Provenance.agent.who.display",
      "path" : "Provenance.agent.who.display",
      "max" : "0"
    },
    {
      "id" : "Provenance.agent.onBehalfOf",
      "path" : "Provenance.agent.onBehalfOf",
      "max" : "0"
    },
    {
      "id" : "Provenance.entity",
      "path" : "Provenance.entity",
      "max" : "0"
    },
    {
      "id" : "Provenance.signature",
      "path" : "Provenance.signature",
      "max" : "0"
    }]
  }
}

```
