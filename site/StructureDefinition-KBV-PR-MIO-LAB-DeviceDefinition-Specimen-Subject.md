# KBV_PR_MIO_LAB_DeviceDefinition_Specimen_Subject - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **KBV_PR_MIO_LAB_DeviceDefinition_Specimen_Subject**

## Resource Profile: KBV_PR_MIO_LAB_DeviceDefinition_Specimen_Subject 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DeviceDefinition_Specimen_Subject | *Version*:1.0.0-update |
| Draft as of 2026-06-11 | *Computable Name*:KBV_PR_MIO_LAB_DeviceDefinition_Specimen_Subject |
| **Copyright/Legal**: Im folgenden Profil können Codes aus den Code-Systemen SNOMED CT®, LOINC, Ucum, ATC, ICD-10-GM, ICD-10-WHO, OPS, Alpha-ID/Alpha-ID-SE und ICF enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED CT® Clinical Terms® (SNOMED CT® CT®) which is used by permission of SNOMED CT® International. All rights reserved. SNOMED CT® CT®, was originally created by The College of American Pathologists. SNOMED CT® and SNOMED CT® CT are registered trademarks of SNOMED CT® International. Implementers of these artefacts must have the appropriate SNOMED CT® CT Affiliate license. This material contains content from LOINC (http://LOINC.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://LOINC.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED ‘AS IS.’ ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. Dieses Material enthält Inhalte aus ATC. Die Erstellung erfolgte unter Verwendung der Datenträger der amtlichen Fassung der ATC-Klassifikation mit DDD des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICD-10-GM, ICD-10-WHO, OPS Alpha-ID ans Alpha-ID-SE. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICF. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Deutschen Instituts für Medizinische Dokumentation und Information (DIMDI). ICF-Kodes, -Begriffe und -Texte © Weltgesundheitsorganisation, übersetzt und herausgegeben durch das Deutsche Institut für Medizinische Dokumentation und Information von der International classification of functioning, disability and health - ICF, herausgegeben durch die Weltgesundheitsorganisation. | |

 
Dieses Profil bildet das Modell einer außerkörperlichen Stelle ab. 

**Usages:**

* Use this Profile: [KBV_PR_MIO_LAB_Bundle](StructureDefinition-KBV-PR-MIO-LAB-Bundle.md)
* Refer to this Profile: [KBV_PR_MIO_LAB_Device_Specimen_Subject](StructureDefinition-KBV-PR-MIO-LAB-Device-Specimen-Subject.md)
* Examples for this Profile: [DeviceDefinition/430a63d5-b9ed-469b-a3a1-7aae27f27b11](DeviceDefinition-430a63d5-b9ed-469b-a3a1-7aae27f27b11.md) and [DeviceDefinition/81840764-fb77-49e6-9a7b-5cb028d29895](DeviceDefinition-81840764-fb77-49e6-9a7b-5cb028d29895.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/kbv.mio.laborbefund|current/StructureDefinition/StructureDefinition-KBV-PR-MIO-LAB-DeviceDefinition-Specimen-Subject.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-KBV-PR-MIO-LAB-DeviceDefinition-Specimen-Subject.csv), [Excel](StructureDefinition-KBV-PR-MIO-LAB-DeviceDefinition-Specimen-Subject.xlsx), [Schematron](StructureDefinition-KBV-PR-MIO-LAB-DeviceDefinition-Specimen-Subject.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "KBV-PR-MIO-LAB-DeviceDefinition-Specimen-Subject",
  "url" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DeviceDefinition_Specimen_Subject",
  "version" : "1.0.0-update",
  "name" : "KBV_PR_MIO_LAB_DeviceDefinition_Specimen_Subject",
  "title" : "KBV_PR_MIO_LAB_DeviceDefinition_Specimen_Subject",
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
  "description" : "Dieses Profil bildet das Modell einer außerkörperlichen Stelle ab.",
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
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "DeviceDefinition",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/DeviceDefinition",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "DeviceDefinition.meta",
      "path" : "DeviceDefinition.meta",
      "mustSupport" : true
    },
    {
      "id" : "DeviceDefinition.meta.id",
      "path" : "DeviceDefinition.meta.id",
      "max" : "0"
    },
    {
      "id" : "DeviceDefinition.meta.versionId",
      "path" : "DeviceDefinition.meta.versionId",
      "mustSupport" : true
    },
    {
      "id" : "DeviceDefinition.meta.lastUpdated",
      "path" : "DeviceDefinition.meta.lastUpdated",
      "mustSupport" : true
    },
    {
      "id" : "DeviceDefinition.meta.source",
      "path" : "DeviceDefinition.meta.source",
      "max" : "0"
    },
    {
      "id" : "DeviceDefinition.implicitRules",
      "path" : "DeviceDefinition.implicitRules",
      "max" : "0"
    },
    {
      "id" : "DeviceDefinition.language",
      "path" : "DeviceDefinition.language",
      "max" : "0"
    },
    {
      "id" : "DeviceDefinition.text.status",
      "path" : "DeviceDefinition.text.status",
      "patternCode" : "extensions"
    },
    {
      "id" : "DeviceDefinition.contained",
      "path" : "DeviceDefinition.contained",
      "max" : "0"
    },
    {
      "id" : "DeviceDefinition.identifier",
      "path" : "DeviceDefinition.identifier",
      "max" : "0"
    },
    {
      "id" : "DeviceDefinition.udiDeviceIdentifier",
      "path" : "DeviceDefinition.udiDeviceIdentifier",
      "max" : "0"
    },
    {
      "id" : "DeviceDefinition.manufacturer[x]",
      "path" : "DeviceDefinition.manufacturer[x]",
      "definition" : "Hier wird der Hersteller des Produkts referenziert.",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Organization|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DeviceDefinition.deviceName",
      "path" : "DeviceDefinition.deviceName",
      "max" : "0"
    },
    {
      "id" : "DeviceDefinition.modelNumber",
      "path" : "DeviceDefinition.modelNumber",
      "max" : "0"
    },
    {
      "id" : "DeviceDefinition.type",
      "path" : "DeviceDefinition.type",
      "short" : "Kategorie",
      "definition" : "Kategorisierung der außerkörperlichen Stelle",
      "min" : 1,
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "http://snomed.info/sct",
          "version" : "http://snomed.info/sct/11000274103/version/20251115",
          "code" : "371882005",
          "display" : "Device used (attribute)"
        }]
      },
      "mustSupport" : true
    },
    {
      "id" : "DeviceDefinition.type.coding",
      "path" : "DeviceDefinition.type.coding",
      "definition" : "Hier wird ein Code erfasst, welcher angibt um welchen Gerätetyp es sich handelt.",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "DeviceDefinition.type.coding.system",
      "path" : "DeviceDefinition.type.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DeviceDefinition.type.coding.version",
      "path" : "DeviceDefinition.type.coding.version",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DeviceDefinition.type.coding.code",
      "path" : "DeviceDefinition.type.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DeviceDefinition.type.coding.display",
      "path" : "DeviceDefinition.type.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DeviceDefinition.type.coding.userSelected",
      "path" : "DeviceDefinition.type.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "DeviceDefinition.type.text",
      "path" : "DeviceDefinition.type.text",
      "definition" : "Hier wird ein Freitext eingetragen.",
      "max" : "0"
    },
    {
      "id" : "DeviceDefinition.specialization",
      "path" : "DeviceDefinition.specialization",
      "max" : "0"
    },
    {
      "id" : "DeviceDefinition.version",
      "path" : "DeviceDefinition.version",
      "max" : "0"
    },
    {
      "id" : "DeviceDefinition.safety",
      "path" : "DeviceDefinition.safety",
      "max" : "0"
    },
    {
      "id" : "DeviceDefinition.shelfLifeStorage",
      "path" : "DeviceDefinition.shelfLifeStorage",
      "max" : "0"
    },
    {
      "id" : "DeviceDefinition.physicalCharacteristics",
      "path" : "DeviceDefinition.physicalCharacteristics",
      "max" : "0"
    },
    {
      "id" : "DeviceDefinition.languageCode",
      "path" : "DeviceDefinition.languageCode",
      "max" : "0"
    },
    {
      "id" : "DeviceDefinition.capability",
      "path" : "DeviceDefinition.capability",
      "max" : "0"
    },
    {
      "id" : "DeviceDefinition.property",
      "path" : "DeviceDefinition.property",
      "max" : "0"
    },
    {
      "id" : "DeviceDefinition.owner",
      "path" : "DeviceDefinition.owner",
      "max" : "0"
    },
    {
      "id" : "DeviceDefinition.contact",
      "path" : "DeviceDefinition.contact",
      "max" : "0"
    },
    {
      "id" : "DeviceDefinition.url",
      "path" : "DeviceDefinition.url",
      "max" : "0"
    },
    {
      "id" : "DeviceDefinition.onlineInformation",
      "path" : "DeviceDefinition.onlineInformation",
      "max" : "0"
    },
    {
      "id" : "DeviceDefinition.note",
      "path" : "DeviceDefinition.note",
      "max" : "0"
    },
    {
      "id" : "DeviceDefinition.quantity",
      "path" : "DeviceDefinition.quantity",
      "max" : "0"
    },
    {
      "id" : "DeviceDefinition.parentDevice",
      "path" : "DeviceDefinition.parentDevice",
      "max" : "0"
    },
    {
      "id" : "DeviceDefinition.material",
      "path" : "DeviceDefinition.material",
      "max" : "0"
    }]
  }
}

```
