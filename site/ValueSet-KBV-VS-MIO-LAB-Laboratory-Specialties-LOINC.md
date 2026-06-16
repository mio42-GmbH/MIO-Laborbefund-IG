# Laborbereich LOINC® - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **Laborbereich LOINC®**

## ValueSet: Laborbereich LOINC® 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Laboratory_Specialties_LOINC | *Version*:1.0.0-update |
| Draft as of 2026-06-16 | *Computable Name*:KBV_VS_MIO_LAB_Laboratory_Specialties_LOINC |
| **Copyright/Legal**: Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at ​http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED “AS IS.” ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. | |

 
Dieses Valueset enthält die Codes zur Beschreibung von Laborbereich LOINC®. 

 **References** 

* [KBV_PR_MIO_LAB_Observation_Laboratory_Study](StructureDefinition-KBV-PR-MIO-LAB-Observation-Laboratory-Study.md)
* [KBV_PR_MIO_LAB_Observation_Laboratory_Study_Group](StructureDefinition-KBV-PR-MIO-LAB-Observation-Laboratory-Study-Group.md)

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
  "id" : "KBV-VS-MIO-LAB-Laboratory-Specialties-LOINC",
  "url" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Laboratory_Specialties_LOINC",
  "version" : "1.0.0-update",
  "name" : "KBV_VS_MIO_LAB_Laboratory_Specialties_LOINC",
  "title" : "Laborbereich LOINC®",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-06-16T13:04:47+02:00",
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
  "description" : "Dieses Valueset enthält die Codes zur Beschreibung von Laborbereich LOINC®.",
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
      "system" : "http://loinc.org",
      "version" : "2.82",
      "concept" : [{
        "code" : "18717-9",
        "display" : "Blood bank studies (set)",
        "designation" : [{
          "language" : "de",
          "value" : "Blutbank-Untersuchungen"
        }]
      },
      {
        "code" : "18718-7",
        "display" : "Cell marker studies (set)",
        "designation" : [{
          "language" : "de",
          "value" : "Zellmarkerdiagnostik"
        }]
      },
      {
        "code" : "18719-5",
        "display" : "Chemistry studies (set)",
        "designation" : [{
          "language" : "de",
          "value" : "Klinische Chemie"
        }]
      },
      {
        "code" : "18720-3",
        "display" : "Coagulation studies (set)",
        "designation" : [{
          "language" : "de",
          "value" : "Gerinnungsdiagnostik"
        }]
      },
      {
        "code" : "18721-1",
        "display" : "Therapeutic drug monitoring studies (set)",
        "designation" : [{
          "language" : "de",
          "value" : "Therapeutische Arzneimittelüberwachung"
        }]
      },
      {
        "code" : "18722-9",
        "display" : "Fertility studies (set)",
        "designation" : [{
          "language" : "de",
          "value" : "Fertilitätsdiagnostik"
        }]
      },
      {
        "code" : "18723-7",
        "display" : "Hematology studies (set)",
        "designation" : [{
          "language" : "de",
          "value" : "Hämatologie"
        }]
      },
      {
        "code" : "18724-5",
        "display" : "HLA studies (set)",
        "designation" : [{
          "language" : "de",
          "value" : "HLA-Diagnostik"
        }]
      },
      {
        "code" : "18725-2",
        "display" : "Microbiology studies (set)",
        "designation" : [{
          "language" : "de",
          "value" : "Mikrobiologie"
        }]
      },
      {
        "code" : "18727-8",
        "display" : "Serology studies (set)",
        "designation" : [{
          "language" : "de",
          "value" : "Serologie"
        }]
      },
      {
        "code" : "18728-6",
        "display" : "Toxicology studies (set)",
        "designation" : [{
          "language" : "de",
          "value" : "Toxikologie"
        }]
      },
      {
        "code" : "18729-4",
        "display" : "Urinalysis studies (set)",
        "designation" : [{
          "language" : "de",
          "value" : "Urindiagnostik"
        }]
      },
      {
        "code" : "18767-4",
        "display" : "Blood gas studies (set)",
        "designation" : [{
          "language" : "de",
          "value" : "Blutgasanalytik"
        }]
      },
      {
        "code" : "18768-2",
        "display" : "Cell counts+Differential studies (set)",
        "designation" : [{
          "language" : "de",
          "value" : "Zellzählungen und Zelldifferenzierung"
        }]
      },
      {
        "code" : "18769-0",
        "display" : "Microbial susceptibility tests Set",
        "designation" : [{
          "language" : "de",
          "value" : "Mikrobielle Empfindlichkeitstests"
        }]
      },
      {
        "code" : "26435-8",
        "display" : "Molecular pathology studies (set)",
        "designation" : [{
          "language" : "de",
          "value" : "Molekularpathologie"
        }]
      },
      {
        "code" : "26436-6",
        "display" : "Laboratory studies (set)",
        "designation" : [{
          "language" : "de",
          "value" : "Laboruntersuchungen"
        }]
      },
      {
        "code" : "26437-4",
        "display" : "Chemistry challenge studies (set)",
        "designation" : [{
          "language" : "de",
          "value" : "Funktionstests"
        }]
      },
      {
        "code" : "26438-2",
        "display" : "Cytology studies (set)",
        "designation" : [{
          "language" : "de",
          "value" : "Zytologie"
        }]
      }]
    }]
  }
}

```
