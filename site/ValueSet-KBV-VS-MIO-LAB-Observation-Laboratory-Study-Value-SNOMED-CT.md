# Messergebnis Qualitativ SNOMED CT® - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **Messergebnis Qualitativ SNOMED CT®**

## ValueSet: Messergebnis Qualitativ SNOMED CT® 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Observation_Laboratory_Study_Value_SNOMED_CT | *Version*:1.0.0-update |
| Draft as of 2026-06-16 | *Computable Name*:KBV_VS_MIO_LAB_Observation_Laboratory_Study_Value_SNOMED_CT |
| **Copyright/Legal**: Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at ​http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED “AS IS.” ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. | |

 
Dieses Valueset enthält die Codes zur Beschreibung von Messergebnis Qualitativ SNOMED CT®. 

 **References** 

* [KBV_PR_MIO_LAB_Observation_Laboratory_Study](StructureDefinition-KBV-PR-MIO-LAB-Observation-Laboratory-Study.md)

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
  "id" : "KBV-VS-MIO-LAB-Observation-Laboratory-Study-Value-SNOMED-CT",
  "url" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Observation_Laboratory_Study_Value_SNOMED_CT",
  "version" : "1.0.0-update",
  "name" : "KBV_VS_MIO_LAB_Observation_Laboratory_Study_Value_SNOMED_CT",
  "title" : "Messergebnis Qualitativ SNOMED CT®",
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
  "description" : "Dieses Valueset enthält die Codes zur Beschreibung von Messergebnis Qualitativ SNOMED CT®.",
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
        "code" : "260347006",
        "display" : "+",
        "designation" : [{
          "language" : "de",
          "value" : "+ aus ++++ vorhanden"
        }]
      },
      {
        "code" : "260348001",
        "display" : "++",
        "designation" : [{
          "language" : "de",
          "value" : "++ aus ++++ vorhanden"
        }]
      },
      {
        "code" : "260349009",
        "display" : "+++",
        "designation" : [{
          "language" : "de",
          "value" : "+++ aus ++++ vorhanden"
        }]
      },
      {
        "code" : "260350009",
        "display" : "++++",
        "designation" : [{
          "language" : "de",
          "value" : "++++ aus ++++ vorhanden"
        }]
      },
      {
        "code" : "441614007",
        "display" : "Present one plus out of three plus",
        "designation" : [{
          "language" : "de",
          "value" : "+ aus +++ vorhanden"
        }]
      },
      {
        "code" : "441517005",
        "display" : "Present two plus out of three plus",
        "designation" : [{
          "language" : "de",
          "value" : "++ aus +++ vorhanden"
        }]
      },
      {
        "code" : "441521003",
        "display" : "Present three plus out of three plus",
        "designation" : [{
          "language" : "de",
          "value" : "+++ aus +++ vorhanden"
        }]
      },
      {
        "code" : "260373001",
        "display" : "Detected",
        "designation" : [{
          "language" : "de",
          "value" : "Nachgewiesen"
        }]
      },
      {
        "code" : "260385009",
        "display" : "Negative",
        "designation" : [{
          "language" : "de",
          "value" : "Negativ"
        }]
      },
      {
        "code" : "260392004",
        "display" : "Non-patent",
        "designation" : [{
          "language" : "de",
          "value" : "Nicht-durchgängig"
        }]
      },
      {
        "code" : "260415000",
        "display" : "Not detected",
        "designation" : [{
          "language" : "de",
          "value" : "Nicht nachgewiesen"
        }]
      },
      {
        "code" : "52101004",
        "display" : "Present",
        "designation" : [{
          "language" : "de",
          "value" : "Vorhanden"
        }]
      },
      {
        "code" : "10828004",
        "display" : "Positive",
        "designation" : [{
          "language" : "de",
          "value" : "Positiv"
        }]
      },
      {
        "code" : "2667000",
        "display" : "Absent",
        "designation" : [{
          "language" : "de",
          "value" : "Abwesend"
        }]
      },
      {
        "code" : "895231008",
        "display" : "Not detected in pooled specimen",
        "designation" : [{
          "language" : "de",
          "value" : "Nicht nachgewiesen in Poolprobe"
        }]
      },
      {
        "code" : "720735008",
        "display" : "Presumptive positive",
        "designation" : [{
          "language" : "de",
          "value" : "Vermutlich positiv"
        }]
      },
      {
        "code" : "373067005",
        "display" : "No",
        "designation" : [{
          "language" : "de",
          "value" : "Nein"
        }]
      },
      {
        "code" : "373066001",
        "display" : "Yes",
        "designation" : [{
          "language" : "de",
          "value" : "Ja"
        }]
      },
      {
        "code" : "264887000",
        "display" : "Not isolated",
        "designation" : [{
          "language" : "de",
          "value" : "Nicht isoliert"
        }]
      },
      {
        "code" : "264868006",
        "display" : "No growth",
        "designation" : [{
          "language" : "de",
          "value" : "Kein Wachstum"
        }]
      },
      {
        "code" : "260413007",
        "display" : "None",
        "designation" : [{
          "language" : "de",
          "value" : "Kein"
        }]
      },
      {
        "code" : "260408008",
        "display" : "Weakly positive",
        "designation" : [{
          "language" : "de",
          "value" : "Schwach positiv"
        }]
      },
      {
        "code" : "260405006",
        "display" : "Trace",
        "designation" : [{
          "language" : "de",
          "value" : "Spur"
        }]
      },
      {
        "code" : "260389003",
        "display" : "No reaction",
        "designation" : [{
          "language" : "de",
          "value" : "Keine Reaktion"
        }]
      },
      {
        "code" : "46651001",
        "display" : "Isolated",
        "designation" : [{
          "language" : "de",
          "value" : "Isoliert"
        }]
      },
      {
        "code" : "419984006",
        "display" : "Inconclusive",
        "designation" : [{
          "language" : "de",
          "value" : "Nicht auswertbar"
        }]
      },
      {
        "code" : "42425007",
        "display" : "Equivocal",
        "designation" : [{
          "language" : "de",
          "value" : "Zweideutig"
        }]
      },
      {
        "code" : "82334004",
        "display" : "Indeterminate",
        "designation" : [{
          "language" : "de",
          "value" : "Uneindeutig"
        }]
      },
      {
        "code" : "62482003",
        "display" : "Low",
        "designation" : [{
          "language" : "de",
          "value" : "Niedrig"
        }]
      },
      {
        "code" : "11214006",
        "display" : "Reactive",
        "designation" : [{
          "language" : "de",
          "value" : "Reaktiv"
        }]
      },
      {
        "code" : "131194007",
        "display" : "Non-Reactive",
        "designation" : [{
          "language" : "de",
          "value" : "Nicht-reaktiv"
        }]
      },
      {
        "code" : "280416009",
        "display" : "Indeterminate result",
        "designation" : [{
          "language" : "de",
          "value" : "Unbestimmtes Ergebnis"
        }]
      },
      {
        "code" : "75540009",
        "display" : "High",
        "designation" : [{
          "language" : "de",
          "value" : "Hoch"
        }]
      },
      {
        "code" : "455371000124106",
        "display" : "Invalid result",
        "designation" : [{
          "language" : "de",
          "value" : "Ungültiges Ergebnis"
        }]
      },
      {
        "code" : "89292003",
        "display" : "Rare",
        "designation" : [{
          "language" : "de",
          "value" : "Selten"
        }]
      },
      {
        "code" : "262008008",
        "display" : "Not performed",
        "designation" : [{
          "language" : "de",
          "value" : "Nicht durchgeführt"
        }]
      },
      {
        "code" : "17621005",
        "display" : "Normal",
        "designation" : [{
          "language" : "de",
          "value" : "Normal"
        }]
      },
      {
        "code" : "277025001",
        "display" : "Proven",
        "designation" : [{
          "language" : "de",
          "value" : "Erwiesen"
        }]
      }]
    }]
  }
}

```
