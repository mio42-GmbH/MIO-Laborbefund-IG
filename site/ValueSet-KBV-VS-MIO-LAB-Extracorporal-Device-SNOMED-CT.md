# Außerkörperliche Quellen SNOMED CT® - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **Außerkörperliche Quellen SNOMED CT®**

## ValueSet: Außerkörperliche Quellen SNOMED CT® 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Extracorporal_Device_SNOMED_CT | *Version*:1.0.0-update |
| Draft as of 2026-06-19 | *Computable Name*:KBV_VS_MIO_LAB_Extracorporal_Device_SNOMED_CT |
| **Copyright/Legal**: Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at ​http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED “AS IS.” ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. | |

 
Dieses Valueset enthält die Codes zur Beschreibung von Außerkörperliche Quellen SNOMED CT®. 

 **References** 

* [KBV_PR_MIO_LAB_Device_Specimen_Subject](StructureDefinition-KBV-PR-MIO-LAB-Device-Specimen-Subject.md)

### Logical Definition (CLD)

 

### Expansion

-------

 Explanation of the columns that may appear on this page: 

| | |
| :--- | :--- |
| Level | A few code lists that FHIR defines are hierarchical - each code is assigned a level. In this scheme, some codes are under other codes, and imply that the code they are under also applies |
| System | The source of the definition of the code (when the value set draws in codes defined elsewhere) |
| Code | The code (used as the code in the resource instance) |
| Display | The display (used in the*display*element of a[Coding](http://hl7.org/fhir/R4/datatypes.html#Coding)). If there is no display, implementers should not simply display the code, but map the concept into their application |
| Definition | An explanation of the meaning of the concept |
| Comments | Additional notes about how to use the code |



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "KBV-VS-MIO-LAB-Extracorporal-Device-SNOMED-CT",
  "url" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Extracorporal_Device_SNOMED_CT",
  "version" : "1.0.0-update",
  "name" : "KBV_VS_MIO_LAB_Extracorporal_Device_SNOMED_CT",
  "title" : "Außerkörperliche Quellen SNOMED CT®",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-06-19T11:56:12+02:00",
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
  "description" : "Dieses Valueset enthält die Codes zur Beschreibung von Außerkörperliche Quellen SNOMED CT®.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "DE",
      "display" : "Germany"
    }]
  }],
  "immutable" : false,
  "copyright" : "Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at ​http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED \"AS IS.\" ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.",
  "compose" : {
    "include" : [{
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/11000274103/version/20251115",
      "concept" : [{
        "code" : "19923001",
        "display" : "Catheter",
        "designation" : [{
          "language" : "de",
          "value" : "Katheter"
        }]
      },
      {
        "code" : "706499002",
        "display" : "Wearable urine collection bag"
      },
      {
        "code" : "41323003",
        "display" : "Urinary collection bag"
      },
      {
        "code" : "303947005",
        "display" : "Rod fixation system",
        "designation" : [{
          "language" : "de",
          "value" : "System zur Stabfixierung"
        }]
      },
      {
        "code" : "27606000",
        "display" : "Dental prosthesis",
        "designation" : [{
          "language" : "de",
          "value" : "Zahnprothese"
        }]
      },
      {
        "code" : "63112008",
        "display" : "Bone wire",
        "designation" : [{
          "language" : "de",
          "value" : "Knochendraht"
        }]
      },
      {
        "code" : "77777004",
        "display" : "Bone staple",
        "designation" : [{
          "language" : "de",
          "value" : "Knochenklammer"
        }]
      },
      {
        "code" : "77444004",
        "display" : "Bone pin",
        "designation" : [{
          "language" : "de",
          "value" : "Knochennagel"
        }]
      },
      {
        "code" : "68183006",
        "display" : "Bone screw",
        "designation" : [{
          "language" : "de",
          "value" : "Knochenschraube"
        }]
      },
      {
        "code" : "303503009",
        "display" : "Musculoskeletal implant",
        "designation" : [{
          "language" : "de",
          "value" : "Muskuloskelettales Implantat"
        }]
      },
      {
        "code" : "257296003",
        "display" : "Fixator"
      },
      {
        "code" : "6012004",
        "display" : "Hearing aid",
        "designation" : [{
          "language" : "de",
          "value" : "Hörgerät"
        }]
      },
      {
        "code" : "407744008",
        "display" : "Stoma appliance"
      },
      {
        "code" : "417136005",
        "display" : "Ileostomy bag",
        "designation" : [{
          "language" : "de",
          "value" : "Ileostomiebeutel"
        }]
      },
      {
        "code" : "704902005",
        "display" : "Colostomy irrigation bag"
      },
      {
        "code" : "8407004",
        "display" : "Bile collection bag"
      },
      {
        "code" : "398013009",
        "display" : "Implantable venous access port",
        "designation" : [{
          "language" : "de",
          "value" : "Implantierbarer Venenzugangsport"
        }]
      },
      {
        "code" : "303515008",
        "display" : "Orbital implant",
        "designation" : [{
          "language" : "de",
          "value" : "Orbitales Implantat"
        }]
      },
      {
        "code" : "303500007",
        "display" : "Auditory implant",
        "designation" : [{
          "language" : "de",
          "value" : "Hörimplantat"
        }]
      },
      {
        "code" : "701750003",
        "display" : "Subcutaneous glucose sensor"
      },
      {
        "code" : "464557001",
        "display" : "Parenteral/enteral solution bag"
      },
      {
        "code" : "30968007",
        "display" : "Drainage bag"
      },
      {
        "code" : "721001006",
        "display" : "Gastric drainage/decompression bag"
      },
      {
        "code" : "408861001",
        "display" : "Wound drainage bag"
      },
      {
        "code" : "736867000",
        "display" : "Wound drainage bag, sterile"
      }]
    }]
  }
}

```
