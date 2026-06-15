# KBV_PR_MIO_LAB_Practitioner - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **KBV_PR_MIO_LAB_Practitioner**

## Resource Profile: KBV_PR_MIO_LAB_Practitioner 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Practitioner | *Version*:1.0.0-update |
| Draft as of 2026-06-11 | *Computable Name*:KBV_PR_MIO_LAB_Practitioner |
| **Copyright/Legal**: Im folgenden Profil können Codes aus den Code-Systemen SNOMED CT®, LOINC, Ucum, ATC, ICD-10-GM, ICD-10-WHO, OPS, Alpha-ID/Alpha-ID-SE und ICF enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED CT® Clinical Terms® (SNOMED CT® CT®) which is used by permission of SNOMED CT® International. All rights reserved. SNOMED CT® CT®, was originally created by The College of American Pathologists. SNOMED CT® and SNOMED CT® CT are registered trademarks of SNOMED CT® International. Implementers of these artefacts must have the appropriate SNOMED CT® CT Affiliate license. This material contains content from LOINC (http://LOINC.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://LOINC.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED ‘AS IS.’ ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. Dieses Material enthält Inhalte aus ATC. Die Erstellung erfolgte unter Verwendung der Datenträger der amtlichen Fassung der ATC-Klassifikation mit DDD des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICD-10-GM, ICD-10-WHO, OPS Alpha-ID ans Alpha-ID-SE. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICF. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Deutschen Instituts für Medizinische Dokumentation und Information (DIMDI). ICF-Kodes, -Begriffe und -Texte © Weltgesundheitsorganisation, übersetzt und herausgegeben durch das Deutsche Institut für Medizinische Dokumentation und Information von der International classification of functioning, disability and health - ICF, herausgegeben durch die Weltgesundheitsorganisation. | |

 
Dieses Profil bildet eine behandelnde Person ab. 

**Usages:**

* Use this Profile: [KBV_PR_MIO_LAB_Bundle](StructureDefinition-KBV-PR-MIO-LAB-Bundle.md)
* Refer to this Profile: [KBV_PR_MIO_LAB_Composition](StructureDefinition-KBV-PR-MIO-LAB-Composition.md), [KBV_PR_MIO_LAB_DiagnosticReport](StructureDefinition-KBV-PR-MIO-LAB-DiagnosticReport.md), [KBV_PR_MIO_LAB_Observation_Image_Attachment](StructureDefinition-KBV-PR-MIO-LAB-Observation-Image-Attachment.md), [KBV_PR_MIO_LAB_Observation_Laboratory_Study_Group](StructureDefinition-KBV-PR-MIO-LAB-Observation-Laboratory-Study-Group.md)... Show 5 more, [KBV_PR_MIO_LAB_Observation_Laboratory_Study](StructureDefinition-KBV-PR-MIO-LAB-Observation-Laboratory-Study.md), [KBV_PR_MIO_LAB_PractitionerRole](StructureDefinition-KBV-PR-MIO-LAB-PractitionerRole.md), [KBV_PR_MIO_LAB_Provenance](StructureDefinition-KBV-PR-MIO-LAB-Provenance.md), [KBV_PR_MIO_LAB_ServiceRequest](StructureDefinition-KBV-PR-MIO-LAB-ServiceRequest.md) and [KBV_PR_MIO_LAB_Specimen](StructureDefinition-KBV-PR-MIO-LAB-Specimen.md)
* Examples for this Profile: [Practitioner/24435567-fed3-43f8-8fc8-954f68df7fce](Practitioner-24435567-fed3-43f8-8fc8-954f68df7fce.md) and [Practitioner/2b946366-cf18-4d89-a29c-00bf69ac90f6](Practitioner-2b946366-cf18-4d89-a29c-00bf69ac90f6.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/kbv.mio.laborbefund|current/StructureDefinition/StructureDefinition-KBV-PR-MIO-LAB-Practitioner.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-KBV-PR-MIO-LAB-Practitioner.csv), [Excel](StructureDefinition-KBV-PR-MIO-LAB-Practitioner.xlsx), [Schematron](StructureDefinition-KBV-PR-MIO-LAB-Practitioner.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "KBV-PR-MIO-LAB-Practitioner",
  "url" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Practitioner",
  "version" : "1.0.0-update",
  "name" : "KBV_PR_MIO_LAB_Practitioner",
  "title" : "KBV_PR_MIO_LAB_Practitioner",
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
  "description" : "Dieses Profil bildet eine behandelnde Person ab.",
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
  "type" : "Practitioner",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Practitioner",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Practitioner",
      "path" : "Practitioner",
      "definition" : "Dieses Profil bildet eine behandelnde Person ab.",
      "constraint" : [{
        "key" : "pract-de-1",
        "severity" : "error",
        "human" : "Die amtliche Differenzierung der Geschlechtsangabe 'other' darf nur gefüllt sein, wenn das Geschlecht 'other' angegeben ist.",
        "expression" : "gender.exists() and gender='other' implies gender.extension('http://fhir.de/StructureDefinition/gender-amtlich-de').exists()",
        "source" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Practitioner"
      }]
    },
    {
      "id" : "Practitioner.meta",
      "path" : "Practitioner.meta",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.meta.id",
      "path" : "Practitioner.meta.id",
      "max" : "0"
    },
    {
      "id" : "Practitioner.meta.versionId",
      "path" : "Practitioner.meta.versionId",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.meta.lastUpdated",
      "path" : "Practitioner.meta.lastUpdated",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.meta.source",
      "path" : "Practitioner.meta.source",
      "max" : "0"
    },
    {
      "id" : "Practitioner.implicitRules",
      "path" : "Practitioner.implicitRules",
      "max" : "0"
    },
    {
      "id" : "Practitioner.language",
      "path" : "Practitioner.language",
      "max" : "0"
    },
    {
      "id" : "Practitioner.text.status",
      "path" : "Practitioner.text.status",
      "patternCode" : "extensions"
    },
    {
      "id" : "Practitioner.contained",
      "path" : "Practitioner.contained",
      "max" : "0"
    },
    {
      "id" : "Practitioner.extension",
      "path" : "Practitioner.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "rules" : "closed"
      },
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.extension:additionalComment",
      "path" : "Practitioner.extension",
      "sliceName" : "additionalComment",
      "definition" : "In diesem Element werden als Freitext ergänzende Angaben zur Person gemacht, wie beispielsweise Zusatzqualifikationen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.extension:additionalComment.value[x]",
      "path" : "Practitioner.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.extension:additionalComment.value[x]:valueString",
      "path" : "Practitioner.extension.value[x]",
      "sliceName" : "valueString",
      "type" : [{
        "code" : "string"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier",
      "path" : "Practitioner.identifier",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "type"
        },
        {
          "type" : "value",
          "path" : "system"
        }],
        "rules" : "open"
      },
      "definition" : "In diesem Element wird der Identifier (Identifikator) für diese behandelnde Person definiert. Der Identifikator kann aus diversen Quellen stammen.",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:ANR",
      "path" : "Practitioner.identifier",
      "sliceName" : "ANR",
      "definition" : "In diesem Element wird die Arztnummer (umgangssprachlich auch Lebenslange Arztnummer „LANR“ genannt) nach § 108 SGB V abgebildet.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "Identifier",
        "profile" : ["http://fhir.de/StructureDefinition/identifier-lanr"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:ANR.use",
      "path" : "Practitioner.identifier.use",
      "max" : "0"
    },
    {
      "id" : "Practitioner.identifier:ANR.type",
      "path" : "Practitioner.identifier.type",
      "min" : 1
    },
    {
      "id" : "Practitioner.identifier:ANR.type.coding",
      "path" : "Practitioner.identifier.type.coding",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:ANR.type.coding.system",
      "path" : "Practitioner.identifier.type.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:ANR.type.coding.version",
      "path" : "Practitioner.identifier.type.coding.version",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:ANR.type.coding.code",
      "path" : "Practitioner.identifier.type.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:ANR.type.coding.display",
      "path" : "Practitioner.identifier.type.coding.display",
      "min" : 1,
      "patternString" : "Lifelong physician number",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:ANR.type.coding.userSelected",
      "path" : "Practitioner.identifier.type.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Practitioner.identifier:ANR.type.text",
      "path" : "Practitioner.identifier.type.text",
      "max" : "0"
    },
    {
      "id" : "Practitioner.identifier:ANR.system",
      "path" : "Practitioner.identifier.system",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:ANR.value",
      "path" : "Practitioner.identifier.value",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:ANR.period",
      "path" : "Practitioner.identifier.period",
      "max" : "0"
    },
    {
      "id" : "Practitioner.identifier:ANR.assigner",
      "path" : "Practitioner.identifier.assigner",
      "max" : "0"
    },
    {
      "id" : "Practitioner.identifier:EFN",
      "path" : "Practitioner.identifier",
      "sliceName" : "EFN",
      "definition" : "In diesem Element wird die einheitliche Fortbildungsnummer (EFN) abgebildet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Identifier",
        "profile" : ["http://fhir.de/StructureDefinition/identifier-efn"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:EFN.use",
      "path" : "Practitioner.identifier.use",
      "max" : "0"
    },
    {
      "id" : "Practitioner.identifier:EFN.type",
      "path" : "Practitioner.identifier.type",
      "min" : 1
    },
    {
      "id" : "Practitioner.identifier:EFN.type.coding",
      "path" : "Practitioner.identifier.type.coding",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:EFN.type.coding.system",
      "path" : "Practitioner.identifier.type.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:EFN.type.coding.version",
      "path" : "Practitioner.identifier.type.coding.version",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:EFN.type.coding.code",
      "path" : "Practitioner.identifier.type.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:EFN.type.coding.display",
      "path" : "Practitioner.identifier.type.coding.display",
      "min" : 1,
      "patternString" : "Doctor number",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:EFN.type.coding.userSelected",
      "path" : "Practitioner.identifier.type.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Practitioner.identifier:EFN.type.text",
      "path" : "Practitioner.identifier.type.text",
      "max" : "0"
    },
    {
      "id" : "Practitioner.identifier:EFN.system",
      "path" : "Practitioner.identifier.system",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:EFN.value",
      "path" : "Practitioner.identifier.value",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:EFN.period",
      "path" : "Practitioner.identifier.period",
      "max" : "0"
    },
    {
      "id" : "Practitioner.identifier:EFN.assigner",
      "path" : "Practitioner.identifier.assigner",
      "max" : "0"
    },
    {
      "id" : "Practitioner.identifier:ZANR",
      "path" : "Practitioner.identifier",
      "sliceName" : "ZANR",
      "definition" : "In diesem Element wird die Zahnarztnummer analog zur ANR abgebildet.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "Identifier",
        "profile" : ["http://fhir.de/StructureDefinition/identifier-zanr"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:ZANR.use",
      "path" : "Practitioner.identifier.use",
      "max" : "0"
    },
    {
      "id" : "Practitioner.identifier:ZANR.type",
      "path" : "Practitioner.identifier.type",
      "min" : 1
    },
    {
      "id" : "Practitioner.identifier:ZANR.type.coding",
      "path" : "Practitioner.identifier.type.coding",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:ZANR.type.coding.system",
      "path" : "Practitioner.identifier.type.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:ZANR.type.coding.version",
      "path" : "Practitioner.identifier.type.coding.version",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:ZANR.type.coding.code",
      "path" : "Practitioner.identifier.type.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:ZANR.type.coding.display",
      "path" : "Practitioner.identifier.type.coding.display",
      "min" : 1,
      "patternString" : "Zahnarztnummer",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:ZANR.type.coding.userSelected",
      "path" : "Practitioner.identifier.type.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Practitioner.identifier:ZANR.type.text",
      "path" : "Practitioner.identifier.type.text",
      "max" : "0"
    },
    {
      "id" : "Practitioner.identifier:ZANR.system",
      "path" : "Practitioner.identifier.system",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:ZANR.value",
      "path" : "Practitioner.identifier.value",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:ZANR.period",
      "path" : "Practitioner.identifier.period",
      "max" : "0"
    },
    {
      "id" : "Practitioner.identifier:ZANR.assigner",
      "path" : "Practitioner.identifier.assigner",
      "max" : "0"
    },
    {
      "id" : "Practitioner.identifier:Telematik-ID",
      "path" : "Practitioner.identifier",
      "sliceName" : "Telematik-ID",
      "definition" : "Bei der Telematik-ID handelt es sich um eine eindeutige elektronische Identität von Leistungserbringenden und medizinischen Institutionen in der Telematik-Infrastruktur.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "Identifier",
        "profile" : ["http://fhir.de/StructureDefinition/identifier-telematik-id"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:Telematik-ID.use",
      "path" : "Practitioner.identifier.use",
      "max" : "0"
    },
    {
      "id" : "Practitioner.identifier:Telematik-ID.type",
      "path" : "Practitioner.identifier.type",
      "min" : 1
    },
    {
      "id" : "Practitioner.identifier:Telematik-ID.type.coding",
      "path" : "Practitioner.identifier.type.coding",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:Telematik-ID.type.coding.system",
      "path" : "Practitioner.identifier.type.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:Telematik-ID.type.coding.version",
      "path" : "Practitioner.identifier.type.coding.version",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:Telematik-ID.type.coding.code",
      "path" : "Practitioner.identifier.type.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:Telematik-ID.type.coding.display",
      "path" : "Practitioner.identifier.type.coding.display",
      "min" : 1,
      "patternString" : "Provider number",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:Telematik-ID.type.coding.userSelected",
      "path" : "Practitioner.identifier.type.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Practitioner.identifier:Telematik-ID.type.text",
      "path" : "Practitioner.identifier.type.text",
      "max" : "0"
    },
    {
      "id" : "Practitioner.identifier:Telematik-ID.system",
      "path" : "Practitioner.identifier.system",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:Telematik-ID.value",
      "path" : "Practitioner.identifier.value",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:Telematik-ID.period",
      "path" : "Practitioner.identifier.period",
      "max" : "0"
    },
    {
      "id" : "Practitioner.identifier:Telematik-ID.assigner",
      "path" : "Practitioner.identifier.assigner",
      "max" : "0"
    },
    {
      "id" : "Practitioner.identifier:BNR",
      "path" : "Practitioner.identifier",
      "sliceName" : "BNR",
      "definition" : "Die lebenslangen Beschäftigtennummer (LBNR) wird an Personen vergeben, die in der pflegerischen Versorgung tätig sind und unter die Regelungen des § 293 Absatz 8 SGB V fallen, und wird von dem Beschäftigtenverzeichnis der ambulanten Pflege (BeVaP) vergeben.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "Identifier",
        "profile" : ["http://fhir.de/StructureDefinition/identifier-lbnr"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:BNR.use",
      "path" : "Practitioner.identifier.use",
      "max" : "0"
    },
    {
      "id" : "Practitioner.identifier:BNR.type",
      "path" : "Practitioner.identifier.type",
      "min" : 1
    },
    {
      "id" : "Practitioner.identifier:BNR.type.coding",
      "path" : "Practitioner.identifier.type.coding",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:BNR.type.coding.system",
      "path" : "Practitioner.identifier.type.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:BNR.type.coding.version",
      "path" : "Practitioner.identifier.type.coding.version",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:BNR.type.coding.code",
      "path" : "Practitioner.identifier.type.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:BNR.type.coding.display",
      "path" : "Practitioner.identifier.type.coding.display",
      "min" : 1,
      "patternString" : "Provider number",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:BNR.type.coding.userSelected",
      "path" : "Practitioner.identifier.type.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Practitioner.identifier:BNR.type.text",
      "path" : "Practitioner.identifier.type.text",
      "max" : "0"
    },
    {
      "id" : "Practitioner.identifier:BNR.system",
      "path" : "Practitioner.identifier.system",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:BNR.value",
      "path" : "Practitioner.identifier.value",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.identifier:BNR.period",
      "path" : "Practitioner.identifier.period",
      "max" : "0"
    },
    {
      "id" : "Practitioner.identifier:BNR.assigner",
      "path" : "Practitioner.identifier.assigner",
      "max" : "0"
    },
    {
      "id" : "Practitioner.active",
      "path" : "Practitioner.active",
      "max" : "0"
    },
    {
      "id" : "Practitioner.name",
      "path" : "Practitioner.name",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "use"
        }],
        "rules" : "closed"
      },
      "definition" : "Dieses Element beschreibt den vollständigen Namen der behandelnden Person.",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.name:name",
      "path" : "Practitioner.name",
      "sliceName" : "name",
      "definition" : "Dieses Element beschreibt diverse Namensbestandteile der behandelnden Person.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "HumanName",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Datatype_Name"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.name:name.text",
      "path" : "Practitioner.name.text",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.name:name.family",
      "path" : "Practitioner.name.family",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.name:name.family.extension",
      "path" : "Practitioner.name.family.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "ordered" : false,
        "rules" : "closed"
      },
      "min" : 1,
      "max" : "3",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.name:name.family.extension:namenszusatz",
      "path" : "Practitioner.name.family.extension",
      "sliceName" : "namenszusatz",
      "short" : "Namenszusatz",
      "definition" : "Hier wird der Namenszusatz als Bestandteil des Nachnamens angegeben.",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.name:name.family.extension:namenszusatz.value[x]",
      "path" : "Practitioner.name.family.extension.value[x]",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.name:name.family.extension:nachname",
      "path" : "Practitioner.name.family.extension",
      "sliceName" : "nachname",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.name:name.family.extension:nachname.value[x]",
      "path" : "Practitioner.name.family.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.name:name.family.extension:vorsatzwort",
      "path" : "Practitioner.name.family.extension",
      "sliceName" : "vorsatzwort",
      "definition" : "Hier wird ein Vorsatzwort angegeben.",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.name:name.family.extension:vorsatzwort.value[x]",
      "path" : "Practitioner.name.family.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.name:name.given",
      "path" : "Practitioner.name.given",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.name:name.prefix",
      "path" : "Practitioner.name.prefix",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.name:name.prefix.extension",
      "path" : "Practitioner.name.prefix.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "ordered" : false,
        "rules" : "closed"
      }
    },
    {
      "id" : "Practitioner.name:name.prefix.extension:prefix-qualifier",
      "path" : "Practitioner.name.prefix.extension",
      "sliceName" : "prefix-qualifier",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.name:name.prefix.extension:prefix-qualifier.value[x]",
      "path" : "Practitioner.name.prefix.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.name:name.prefix.extension:prefix-qualifier.value[x]:valueCode",
      "path" : "Practitioner.name.prefix.extension.value[x]",
      "sliceName" : "valueCode",
      "type" : [{
        "code" : "code"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.name:name.suffix",
      "path" : "Practitioner.name.suffix",
      "max" : "0"
    },
    {
      "id" : "Practitioner.name:name.period",
      "path" : "Practitioner.name.period",
      "max" : "0"
    },
    {
      "id" : "Practitioner.name:geburtsname",
      "path" : "Practitioner.name",
      "sliceName" : "geburtsname",
      "definition" : "Der Geburtsname ist der Nachname, den eine Person bei der Geburt erhalten hat. Dieser umfasst auch das Vorsatzwort und den Namenszusatz.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "HumanName",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Datatype_Maiden_Name"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.name:geburtsname.family.extension:namenszusatz",
      "path" : "Practitioner.name.family.extension",
      "sliceName" : "namenszusatz",
      "definition" : "Hier wird der Namenszusatz als Bestandteil des Nachnamens angegeben."
    },
    {
      "id" : "Practitioner.name:geburtsname.family.extension:vorsatzwort",
      "path" : "Practitioner.name.family.extension",
      "sliceName" : "vorsatzwort",
      "definition" : "Hier wird das Vorsatzwort angegeben."
    },
    {
      "id" : "Practitioner.telecom",
      "path" : "Practitioner.telecom",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.telecom.system",
      "path" : "Practitioner.telecom.system",
      "definition" : "Definition der Art des Kontaktes, z. B. Telefon (phone), E-Mail, Fax.",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.telecom.value",
      "path" : "Practitioner.telecom.value",
      "definition" : "In diesem Element können Kontaktinformationen passend zum Kontaktkanal angegeben werden. Beispiele für mögliche Werte sind: 'm.mustermann@mio42.de' (beim Kontaktkanal 'E-Mail', oder '030712345678' (beim Kontaktkanal 'Telefon').",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.telecom.use",
      "path" : "Practitioner.telecom.use",
      "max" : "0"
    },
    {
      "id" : "Practitioner.telecom.rank",
      "path" : "Practitioner.telecom.rank",
      "max" : "0"
    },
    {
      "id" : "Practitioner.telecom.period",
      "path" : "Practitioner.telecom.period",
      "max" : "0"
    },
    {
      "id" : "Practitioner.address",
      "path" : "Practitioner.address",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "type"
        }],
        "rules" : "closed"
      },
      "definition" : "Dieses Element beschreibt die Anschrift der behandelnden Person.",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address.use",
      "path" : "Practitioner.address.use",
      "max" : "0"
    },
    {
      "id" : "Practitioner.address.state",
      "path" : "Practitioner.address.state",
      "max" : "0"
    },
    {
      "id" : "Practitioner.address:Strassenanschrift",
      "path" : "Practitioner.address",
      "sliceName" : "Strassenanschrift",
      "definition" : "Hier werden Angaben zur Straßenanschrift gemacht.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "Address",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Datatype_Street_Address"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Strassenanschrift.extension",
      "path" : "Practitioner.address.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "description" : "Extensions are always sliced by (at least) url",
        "rules" : "closed"
      },
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Strassenanschrift.extension:Stadtteil",
      "path" : "Practitioner.address.extension",
      "sliceName" : "Stadtteil",
      "definition" : "In diesem Element kann der Stadt- oder Ortsteil angegeben werden, z. B. wenn der Ort ein Stadtstaat ist.",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Strassenanschrift.extension:Stadtteil.value[x]",
      "path" : "Practitioner.address.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Strassenanschrift.use",
      "path" : "Practitioner.address.use",
      "max" : "0"
    },
    {
      "id" : "Practitioner.address:Strassenanschrift.type",
      "path" : "Practitioner.address.type",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Strassenanschrift.text",
      "path" : "Practitioner.address.text",
      "max" : "0"
    },
    {
      "id" : "Practitioner.address:Strassenanschrift.line",
      "path" : "Practitioner.address.line",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Strassenanschrift.line.extension",
      "path" : "Practitioner.address.line.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "ordered" : false,
        "rules" : "closed"
      },
      "max" : "3",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Strassenanschrift.line.extension:Strasse",
      "path" : "Practitioner.address.line.extension",
      "sliceName" : "Strasse",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Strassenanschrift.line.extension:Strasse.value[x]",
      "path" : "Practitioner.address.line.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Strassenanschrift.line.extension:Hausnummer",
      "path" : "Practitioner.address.line.extension",
      "sliceName" : "Hausnummer",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Strassenanschrift.line.extension:Hausnummer.value[x]",
      "path" : "Practitioner.address.line.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Strassenanschrift.line.extension:Adresszusatz",
      "path" : "Practitioner.address.line.extension",
      "sliceName" : "Adresszusatz",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Strassenanschrift.line.extension:Adresszusatz.value[x]",
      "path" : "Practitioner.address.line.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Strassenanschrift.city",
      "path" : "Practitioner.address.city",
      "definition" : "In dieses Feld kann der Ort eingetragen werden.",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Strassenanschrift.state",
      "path" : "Practitioner.address.state",
      "max" : "0"
    },
    {
      "id" : "Practitioner.address:Strassenanschrift.postalCode",
      "path" : "Practitioner.address.postalCode",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Strassenanschrift.country",
      "path" : "Practitioner.address.country",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Strassenanschrift.period",
      "path" : "Practitioner.address.period",
      "max" : "0"
    },
    {
      "id" : "Practitioner.address:Postfach",
      "path" : "Practitioner.address",
      "sliceName" : "Postfach",
      "definition" : "Hier werden Angaben zu einem Postfach gemacht.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "Address",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Datatype_Post_Office_Box"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Postfach.extension",
      "path" : "Practitioner.address.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "description" : "Extensions are always sliced by (at least) url",
        "rules" : "closed"
      },
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Postfach.extension:Stadtteil",
      "path" : "Practitioner.address.extension",
      "sliceName" : "Stadtteil",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Postfach.extension:Stadtteil.value[x]",
      "path" : "Practitioner.address.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Postfach.use",
      "path" : "Practitioner.address.use",
      "max" : "0"
    },
    {
      "id" : "Practitioner.address:Postfach.type",
      "path" : "Practitioner.address.type",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Postfach.text",
      "path" : "Practitioner.address.text",
      "max" : "0"
    },
    {
      "id" : "Practitioner.address:Postfach.line",
      "path" : "Practitioner.address.line",
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Postfach.line.extension",
      "path" : "Practitioner.address.line.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "ordered" : false,
        "rules" : "closed"
      },
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Postfach.line.extension:Postfach",
      "path" : "Practitioner.address.line.extension",
      "sliceName" : "Postfach",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Postfach.line.extension:Postfach.value[x]",
      "path" : "Practitioner.address.line.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Postfach.city",
      "path" : "Practitioner.address.city",
      "definition" : "In dieses Feld kann der Ort eingetragen werden.",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Postfach.state",
      "path" : "Practitioner.address.state",
      "max" : "0"
    },
    {
      "id" : "Practitioner.address:Postfach.postalCode",
      "path" : "Practitioner.address.postalCode",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Postfach.country",
      "path" : "Practitioner.address.country",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.address:Postfach.period",
      "path" : "Practitioner.address.period",
      "max" : "0"
    },
    {
      "id" : "Practitioner.gender",
      "path" : "Practitioner.gender",
      "definition" : "Hier wird die Geschlechtsdefinition der behandelnden Person angegeben",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.gender.extension",
      "path" : "Practitioner.gender.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "rules" : "closed"
      },
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.gender.extension:other-amtlich",
      "path" : "Practitioner.gender.extension",
      "sliceName" : "other-amtlich",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://fhir.de/StructureDefinition/gender-amtlich-de"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.gender.extension:other-amtlich.value[x]",
      "path" : "Practitioner.gender.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.gender.extension:other-amtlich.value[x].system",
      "path" : "Practitioner.gender.extension.value[x].system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.gender.extension:other-amtlich.value[x].version",
      "path" : "Practitioner.gender.extension.value[x].version",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.gender.extension:other-amtlich.value[x].code",
      "path" : "Practitioner.gender.extension.value[x].code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.gender.extension:other-amtlich.value[x].display",
      "path" : "Practitioner.gender.extension.value[x].display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.gender.extension:other-amtlich.value[x].userSelected",
      "path" : "Practitioner.gender.extension.value[x].userSelected",
      "max" : "0"
    },
    {
      "id" : "Practitioner.birthDate",
      "path" : "Practitioner.birthDate",
      "max" : "0"
    },
    {
      "id" : "Practitioner.photo",
      "path" : "Practitioner.photo",
      "max" : "0"
    },
    {
      "id" : "Practitioner.qualification",
      "path" : "Practitioner.qualification",
      "definition" : "Das Element beschreibt die Qualifikation der Person (z. B. Hebamme).",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.qualification.identifier",
      "path" : "Practitioner.qualification.identifier",
      "max" : "0"
    },
    {
      "id" : "Practitioner.qualification.code",
      "path" : "Practitioner.qualification.code",
      "mustSupport" : true,
      "binding" : {
        "strength" : "preferred",
        "valueSet" : "https://fhir.kbv.de/ValueSet/KBV_VS_Base_Practitioner_Speciality"
      }
    },
    {
      "id" : "Practitioner.qualification.code.coding",
      "path" : "Practitioner.qualification.code.coding",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.qualification.code.coding.system",
      "path" : "Practitioner.qualification.code.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.qualification.code.coding.version",
      "path" : "Practitioner.qualification.code.coding.version",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.qualification.code.coding.code",
      "path" : "Practitioner.qualification.code.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.qualification.code.coding.display",
      "path" : "Practitioner.qualification.code.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.qualification.code.coding.userSelected",
      "path" : "Practitioner.qualification.code.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Practitioner.qualification.code.text",
      "path" : "Practitioner.qualification.code.text",
      "max" : "0"
    },
    {
      "id" : "Practitioner.qualification.period",
      "path" : "Practitioner.qualification.period",
      "max" : "0"
    },
    {
      "id" : "Practitioner.qualification.issuer",
      "path" : "Practitioner.qualification.issuer",
      "max" : "0"
    },
    {
      "id" : "Practitioner.communication",
      "path" : "Practitioner.communication",
      "max" : "0"
    }]
  }
}

```
