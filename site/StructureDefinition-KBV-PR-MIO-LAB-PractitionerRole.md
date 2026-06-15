# KBV_PR_MIO_LAB_PractitionerRole - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **KBV_PR_MIO_LAB_PractitionerRole**

## Resource Profile: KBV_PR_MIO_LAB_PractitionerRole 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_PractitionerRole | *Version*:1.0.0-update |
| Draft as of 2026-06-11 | *Computable Name*:KBV_PR_MIO_LAB_PractitionerRole |
| **Copyright/Legal**: Im folgenden Profil können Codes aus den Code-Systemen SNOMED CT®, LOINC, Ucum, ATC, ICD-10-GM, ICD-10-WHO, OPS, Alpha-ID/Alpha-ID-SE und ICF enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED CT® Clinical Terms® (SNOMED CT® CT®) which is used by permission of SNOMED CT® International. All rights reserved. SNOMED CT® CT®, was originally created by The College of American Pathologists. SNOMED CT® and SNOMED CT® CT are registered trademarks of SNOMED CT® International. Implementers of these artefacts must have the appropriate SNOMED CT® CT Affiliate license. This material contains content from LOINC (http://LOINC.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://LOINC.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED ‘AS IS.’ ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. Dieses Material enthält Inhalte aus ATC. Die Erstellung erfolgte unter Verwendung der Datenträger der amtlichen Fassung der ATC-Klassifikation mit DDD des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICD-10-GM, ICD-10-WHO, OPS Alpha-ID ans Alpha-ID-SE. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICF. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Deutschen Instituts für Medizinische Dokumentation und Information (DIMDI). ICF-Kodes, -Begriffe und -Texte © Weltgesundheitsorganisation, übersetzt und herausgegeben durch das Deutsche Institut für Medizinische Dokumentation und Information von der International classification of functioning, disability and health - ICF, herausgegeben durch die Weltgesundheitsorganisation. | |

 
Dieses Profil bildet eine behandelnde Person/Einrichtung ab. 

**Usages:**

* Use this Profile: [KBV_PR_MIO_LAB_Bundle](StructureDefinition-KBV-PR-MIO-LAB-Bundle.md)
* Refer to this Profile: [KBV_PR_MIO_LAB_Composition](StructureDefinition-KBV-PR-MIO-LAB-Composition.md), [KBV_PR_MIO_LAB_DiagnosticReport](StructureDefinition-KBV-PR-MIO-LAB-DiagnosticReport.md), [KBV_PR_MIO_LAB_Observation_Image_Attachment](StructureDefinition-KBV-PR-MIO-LAB-Observation-Image-Attachment.md), [KBV_PR_MIO_LAB_Observation_Laboratory_Study_Group](StructureDefinition-KBV-PR-MIO-LAB-Observation-Laboratory-Study-Group.md)... Show 3 more, [KBV_PR_MIO_LAB_Observation_Laboratory_Study](StructureDefinition-KBV-PR-MIO-LAB-Observation-Laboratory-Study.md), [KBV_PR_MIO_LAB_ServiceRequest](StructureDefinition-KBV-PR-MIO-LAB-ServiceRequest.md) and [KBV_PR_MIO_LAB_Specimen](StructureDefinition-KBV-PR-MIO-LAB-Specimen.md)
* Examples for this Profile: [PractitionerRole/a424d6c6-de52-443e-a9b2-5240d3b9401a](PractitionerRole-a424d6c6-de52-443e-a9b2-5240d3b9401a.md) and [PractitionerRole/bd9d76e7-9fa1-42a4-b364-f93845994612](PractitionerRole-bd9d76e7-9fa1-42a4-b364-f93845994612.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/kbv.mio.laborbefund|current/StructureDefinition/StructureDefinition-KBV-PR-MIO-LAB-PractitionerRole.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-KBV-PR-MIO-LAB-PractitionerRole.csv), [Excel](StructureDefinition-KBV-PR-MIO-LAB-PractitionerRole.xlsx), [Schematron](StructureDefinition-KBV-PR-MIO-LAB-PractitionerRole.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "KBV-PR-MIO-LAB-PractitionerRole",
  "url" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_PractitionerRole",
  "version" : "1.0.0-update",
  "name" : "KBV_PR_MIO_LAB_PractitionerRole",
  "title" : "KBV_PR_MIO_LAB_PractitionerRole",
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
  "description" : "Dieses Profil bildet eine behandelnde Person/Einrichtung ab.",
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
    "identity" : "servd",
    "uri" : "http://www.omg.org/spec/ServD/1.0/",
    "name" : "ServD"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "PractitionerRole",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "PractitionerRole",
      "path" : "PractitionerRole",
      "definition" : "Dieses Profil bildet eine behandelnde Person/Einrichtung ab."
    },
    {
      "id" : "PractitionerRole.meta",
      "path" : "PractitionerRole.meta",
      "mustSupport" : true
    },
    {
      "id" : "PractitionerRole.meta.id",
      "path" : "PractitionerRole.meta.id",
      "max" : "0"
    },
    {
      "id" : "PractitionerRole.meta.versionId",
      "path" : "PractitionerRole.meta.versionId",
      "mustSupport" : true
    },
    {
      "id" : "PractitionerRole.meta.lastUpdated",
      "path" : "PractitionerRole.meta.lastUpdated",
      "mustSupport" : true
    },
    {
      "id" : "PractitionerRole.meta.source",
      "path" : "PractitionerRole.meta.source",
      "max" : "0"
    },
    {
      "id" : "PractitionerRole.implicitRules",
      "path" : "PractitionerRole.implicitRules",
      "max" : "0"
    },
    {
      "id" : "PractitionerRole.language",
      "path" : "PractitionerRole.language",
      "max" : "0"
    },
    {
      "id" : "PractitionerRole.text.status",
      "path" : "PractitionerRole.text.status",
      "patternCode" : "extensions"
    },
    {
      "id" : "PractitionerRole.contained",
      "path" : "PractitionerRole.contained",
      "max" : "0"
    },
    {
      "id" : "PractitionerRole.identifier",
      "path" : "PractitionerRole.identifier",
      "max" : "0"
    },
    {
      "id" : "PractitionerRole.active",
      "path" : "PractitionerRole.active",
      "max" : "0"
    },
    {
      "id" : "PractitionerRole.period",
      "path" : "PractitionerRole.period",
      "max" : "0"
    },
    {
      "id" : "PractitionerRole.practitioner",
      "path" : "PractitionerRole.practitioner",
      "definition" : "Referenz auf eine behandelnde Person, welche in der Lage ist, die definierten Dienstleistungen für die Organisation zu erbringen.",
      "min" : 1,
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Practitioner|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "PractitionerRole.practitioner.reference",
      "path" : "PractitionerRole.practitioner.reference",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "PractitionerRole.practitioner.type",
      "path" : "PractitionerRole.practitioner.type",
      "max" : "0"
    },
    {
      "id" : "PractitionerRole.practitioner.identifier",
      "path" : "PractitionerRole.practitioner.identifier",
      "max" : "0"
    },
    {
      "id" : "PractitionerRole.practitioner.display",
      "path" : "PractitionerRole.practitioner.display",
      "max" : "0"
    },
    {
      "id" : "PractitionerRole.organization",
      "path" : "PractitionerRole.organization",
      "definition" : "Referenz auf die Einrichtung/Organisationseinheit, in der die behandelnde Person die entsprechenden Funktionen ausübt.",
      "min" : 1,
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Organization|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "PractitionerRole.organization.reference",
      "path" : "PractitionerRole.organization.reference",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "PractitionerRole.organization.type",
      "path" : "PractitionerRole.organization.type",
      "max" : "0"
    },
    {
      "id" : "PractitionerRole.organization.identifier",
      "path" : "PractitionerRole.organization.identifier",
      "max" : "0"
    },
    {
      "id" : "PractitionerRole.organization.display",
      "path" : "PractitionerRole.organization.display",
      "max" : "0"
    },
    {
      "id" : "PractitionerRole.code",
      "path" : "PractitionerRole.code",
      "definition" : "Hier wird die Rolle bzw. die Position in der Hierarchie der behandelnden Person in Bezug auf die Einrichtung angegeben.",
      "mustSupport" : true
    },
    {
      "id" : "PractitionerRole.code.coding",
      "path" : "PractitionerRole.code.coding",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "$this"
        }],
        "rules" : "open"
      },
      "definition" : "Hier wird ein Code aus einem geeigneten Code-System angegeben.",
      "mustSupport" : true
    },
    {
      "id" : "PractitionerRole.code.coding.system",
      "path" : "PractitionerRole.code.coding.system",
      "min" : 1
    },
    {
      "id" : "PractitionerRole.code.coding.code",
      "path" : "PractitionerRole.code.coding.code",
      "min" : 1
    },
    {
      "id" : "PractitionerRole.code.coding.display",
      "path" : "PractitionerRole.code.coding.display",
      "min" : 1
    },
    {
      "id" : "PractitionerRole.code.coding:RolleDerEinrichtung",
      "path" : "PractitionerRole.code.coding",
      "sliceName" : "RolleDerEinrichtung",
      "definition" : "Hier wird die Rolle in Bezug auf die Einrichtung anhand einer vorgegebenen Werteliste angegeben.",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.kbv.de/ValueSet/KBV_VS_Base_Role_Care"
      }
    },
    {
      "id" : "PractitionerRole.code.coding:RolleDerEinrichtung.system",
      "path" : "PractitionerRole.code.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "PractitionerRole.code.coding:RolleDerEinrichtung.version",
      "path" : "PractitionerRole.code.coding.version",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "PractitionerRole.code.coding:RolleDerEinrichtung.code",
      "path" : "PractitionerRole.code.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "PractitionerRole.code.coding:RolleDerEinrichtung.display",
      "path" : "PractitionerRole.code.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "PractitionerRole.code.coding:RolleDerEinrichtung.userSelected",
      "path" : "PractitionerRole.code.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "PractitionerRole.code.text",
      "path" : "PractitionerRole.code.text",
      "definition" : "Hier wird die Rolle in Bezug auf die Einrichtung als Freitext angegeben.",
      "mustSupport" : true
    },
    {
      "id" : "PractitionerRole.specialty",
      "path" : "PractitionerRole.specialty",
      "definition" : "Hier wird die medizinische Fachrichtung angegeben, die die behandelnde Person in der Einrichtung ausübt.",
      "mustSupport" : true
    },
    {
      "id" : "PractitionerRole.specialty.coding",
      "path" : "PractitionerRole.specialty.coding",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "$this"
        }],
        "rules" : "open"
      },
      "definition" : "Hier wird ein Code aus einem geeigneten Code-System angegeben.",
      "mustSupport" : true
    },
    {
      "id" : "PractitionerRole.specialty.coding.system",
      "path" : "PractitionerRole.specialty.coding.system",
      "min" : 1
    },
    {
      "id" : "PractitionerRole.specialty.coding.code",
      "path" : "PractitionerRole.specialty.coding.code",
      "min" : 1
    },
    {
      "id" : "PractitionerRole.specialty.coding.display",
      "path" : "PractitionerRole.specialty.coding.display",
      "min" : 1
    },
    {
      "id" : "PractitionerRole.specialty.coding:KBV-Fachgruppe",
      "path" : "PractitionerRole.specialty.coding",
      "sliceName" : "KBV-Fachgruppe",
      "definition" : " Hier wird die Fachrichtung anhand der KBV-Schlüsseltabelle S_BAR2_ARZTNRFACHGRUPPE wiedergegeben.Diese enthält die zweistellige Fachgruppencodierung für die 8.+9. Stelle der LANR (nach BAR-Schlüsselverzeichnis, Anlage 35). ",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.kbv.de/ValueSet/KBV_VS_SFHIR_BAR2_ARZTNRFACHGRUPPE"
      }
    },
    {
      "id" : "PractitionerRole.specialty.coding:KBV-Fachgruppe.system",
      "path" : "PractitionerRole.specialty.coding.system",
      "min" : 1,
      "patternUri" : "https://fhir.kbv.de/CodeSystem/KBV_CS_SFHIR_BAR2_ARZTNRFACHGRUPPE",
      "mustSupport" : true
    },
    {
      "id" : "PractitionerRole.specialty.coding:KBV-Fachgruppe.version",
      "path" : "PractitionerRole.specialty.coding.version",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "PractitionerRole.specialty.coding:KBV-Fachgruppe.code",
      "path" : "PractitionerRole.specialty.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "PractitionerRole.specialty.coding:KBV-Fachgruppe.display",
      "path" : "PractitionerRole.specialty.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "PractitionerRole.specialty.coding:KBV-Fachgruppe.userSelected",
      "path" : "PractitionerRole.specialty.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "PractitionerRole.specialty.text",
      "path" : "PractitionerRole.specialty.text",
      "definition" : "Hier wird die Fachrichtung als Freitext angegeben.",
      "mustSupport" : true
    },
    {
      "id" : "PractitionerRole.location",
      "path" : "PractitionerRole.location",
      "max" : "0"
    },
    {
      "id" : "PractitionerRole.healthcareService",
      "path" : "PractitionerRole.healthcareService",
      "max" : "0"
    },
    {
      "id" : "PractitionerRole.telecom",
      "path" : "PractitionerRole.telecom",
      "max" : "0"
    },
    {
      "id" : "PractitionerRole.availableTime",
      "path" : "PractitionerRole.availableTime",
      "max" : "0"
    },
    {
      "id" : "PractitionerRole.notAvailable",
      "path" : "PractitionerRole.notAvailable",
      "max" : "0"
    },
    {
      "id" : "PractitionerRole.availabilityExceptions",
      "path" : "PractitionerRole.availabilityExceptions",
      "max" : "0"
    },
    {
      "id" : "PractitionerRole.endpoint",
      "path" : "PractitionerRole.endpoint",
      "max" : "0"
    }]
  }
}

```
