# KBV_PR_MIO_LAB_Substance - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **KBV_PR_MIO_LAB_Substance**

## Resource Profile: KBV_PR_MIO_LAB_Substance 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Substance | *Version*:1.0.0-update |
| Draft as of 2026-06-11 | *Computable Name*:KBV_PR_MIO_LAB_Substance |
| **Copyright/Legal**: Im folgenden Profil können Codes aus den Code-Systemen SNOMED CT®, LOINC, Ucum, ATC, ICD-10-GM, ICD-10-WHO, OPS, Alpha-ID/Alpha-ID-SE und ICF enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED CT® Clinical Terms® (SNOMED CT® CT®) which is used by permission of SNOMED CT® International. All rights reserved. SNOMED CT® CT®, was originally created by The College of American Pathologists. SNOMED CT® and SNOMED CT® CT are registered trademarks of SNOMED CT® International. Implementers of these artefacts must have the appropriate SNOMED CT® CT Affiliate license. This material contains content from LOINC (http://LOINC.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://LOINC.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED ‘AS IS.’ ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. Dieses Material enthält Inhalte aus ATC. Die Erstellung erfolgte unter Verwendung der Datenträger der amtlichen Fassung der ATC-Klassifikation mit DDD des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICD-10-GM, ICD-10-WHO, OPS Alpha-ID ans Alpha-ID-SE. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICF. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Deutschen Instituts für Medizinische Dokumentation und Information (DIMDI). ICF-Kodes, -Begriffe und -Texte © Weltgesundheitsorganisation, übersetzt und herausgegeben durch das Deutsche Institut für Medizinische Dokumentation und Information von der International classification of functioning, disability and health - ICF, herausgegeben durch die Weltgesundheitsorganisation. | |

 
Hier wird eine Substanz abgebildet, die bei der Probenverarbeitung als Zusatz hinzugefügt wird. 

**Usages:**

* Use this Profile: [KBV_PR_MIO_LAB_Bundle](StructureDefinition-KBV-PR-MIO-LAB-Bundle.md)
* Refer to this Profile: [KBV_PR_MIO_LAB_Specimen](StructureDefinition-KBV-PR-MIO-LAB-Specimen.md)
* Examples for this Profile: [Substance/4153de68-1124-4c02-a8a3-98f4c312f075](Substance-4153de68-1124-4c02-a8a3-98f4c312f075.md) and [Substance/a4b533d4-0a3c-4701-b411-fd9666bf3d03](Substance-a4b533d4-0a3c-4701-b411-fd9666bf3d03.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/kbv.mio.laborbefund|current/StructureDefinition/StructureDefinition-KBV-PR-MIO-LAB-Substance.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-KBV-PR-MIO-LAB-Substance.csv), [Excel](StructureDefinition-KBV-PR-MIO-LAB-Substance.xlsx), [Schematron](StructureDefinition-KBV-PR-MIO-LAB-Substance.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "KBV-PR-MIO-LAB-Substance",
  "url" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Substance",
  "version" : "1.0.0-update",
  "name" : "KBV_PR_MIO_LAB_Substance",
  "title" : "KBV_PR_MIO_LAB_Substance",
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
  "description" : "Hier wird eine Substanz abgebildet, die bei der Probenverarbeitung als Zusatz hinzugefügt wird.",
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
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "orim",
    "uri" : "http://hl7.org/orim",
    "name" : "Ontological RIM Mapping"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Substance",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Substance",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Substance",
      "path" : "Substance",
      "definition" : "Hier wird eine Substanz abgebildet, die bei der Probenverarbeitung als Zusatz hinzugefügt wird."
    },
    {
      "id" : "Substance.meta",
      "path" : "Substance.meta",
      "mustSupport" : true
    },
    {
      "id" : "Substance.meta.id",
      "path" : "Substance.meta.id",
      "max" : "0"
    },
    {
      "id" : "Substance.meta.versionId",
      "path" : "Substance.meta.versionId",
      "mustSupport" : true
    },
    {
      "id" : "Substance.meta.lastUpdated",
      "path" : "Substance.meta.lastUpdated",
      "mustSupport" : true
    },
    {
      "id" : "Substance.meta.source",
      "path" : "Substance.meta.source",
      "max" : "0"
    },
    {
      "id" : "Substance.implicitRules",
      "path" : "Substance.implicitRules",
      "max" : "0"
    },
    {
      "id" : "Substance.language",
      "path" : "Substance.language",
      "max" : "0"
    },
    {
      "id" : "Substance.text.status",
      "path" : "Substance.text.status",
      "patternCode" : "extensions"
    },
    {
      "id" : "Substance.contained",
      "path" : "Substance.contained",
      "max" : "0"
    },
    {
      "id" : "Substance.identifier",
      "path" : "Substance.identifier",
      "max" : "0"
    },
    {
      "id" : "Substance.status",
      "path" : "Substance.status",
      "max" : "0"
    },
    {
      "id" : "Substance.category",
      "path" : "Substance.category",
      "max" : "0"
    },
    {
      "id" : "Substance.code",
      "path" : "Substance.code",
      "definition" : "In diesem Element werden Angaben zu Additiva in Form einer Codierung gemacht. Diese werden als codierte Information und/oder als Freitext angegeben.",
      "mustSupport" : true
    },
    {
      "id" : "Substance.code.coding",
      "path" : "Substance.code.coding",
      "definition" : "Angabe der Probenzusätze bei der Probenweiterverarbeitung als codierte Information.",
      "mustSupport" : true,
      "binding" : {
        "strength" : "preferred",
        "valueSet" : "http://hl7.eu/fhir/laboratory/ValueSet/lab-specimenAdditive-eu-lab"
      }
    },
    {
      "id" : "Substance.code.coding.system",
      "path" : "Substance.code.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Substance.code.coding.version",
      "path" : "Substance.code.coding.version",
      "mustSupport" : true
    },
    {
      "id" : "Substance.code.coding.code",
      "path" : "Substance.code.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Substance.code.coding.display",
      "path" : "Substance.code.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Substance.code.coding.userSelected",
      "path" : "Substance.code.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Substance.code.text",
      "path" : "Substance.code.text",
      "definition" : "Angabe der Probenzusätze bei der Probenweiterverarbeitung als Freitext.",
      "mustSupport" : true
    },
    {
      "id" : "Substance.description",
      "path" : "Substance.description",
      "max" : "0"
    },
    {
      "id" : "Substance.instance",
      "path" : "Substance.instance",
      "max" : "0"
    },
    {
      "id" : "Substance.ingredient",
      "path" : "Substance.ingredient",
      "max" : "0"
    }]
  }
}

```
