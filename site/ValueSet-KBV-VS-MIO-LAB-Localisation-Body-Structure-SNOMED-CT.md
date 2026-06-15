# Lokalisation innerhalb Körperstelle SNOMED CT® - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **Lokalisation innerhalb Körperstelle SNOMED CT®**

## ValueSet: Lokalisation innerhalb Körperstelle SNOMED CT® 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Localisation_Body_Structure_SNOMED_CT | *Version*:1.0.0-update |
| Draft as of 2026-06-15 | *Computable Name*:KBV_VS_MIO_LAB_Localisation_Body_Structure_SNOMED_CT |
| **Copyright/Legal**: Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at ​http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED “AS IS.” ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. | |

 
Dieses Valueset enthält die Codes zur Beschreibung von Lokalisation innerhalb Körperstelle SNOMED CT®. 

 **References** 

* [KBV_PR_MIO_LAB_BodyStructure](StructureDefinition-KBV-PR-MIO-LAB-BodyStructure.md)

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
  "id" : "KBV-VS-MIO-LAB-Localisation-Body-Structure-SNOMED-CT",
  "url" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Localisation_Body_Structure_SNOMED_CT",
  "version" : "1.0.0-update",
  "name" : "KBV_VS_MIO_LAB_Localisation_Body_Structure_SNOMED_CT",
  "title" : "Lokalisation innerhalb Körperstelle SNOMED CT®",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-06-15T16:45:57+02:00",
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
  "description" : "Dieses Valueset enthält die Codes zur Beschreibung von Lokalisation innerhalb Körperstelle SNOMED CT®.",
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
        "code" : "7771000",
        "display" : "Left",
        "designation" : [{
          "language" : "de",
          "value" : "Links"
        }]
      },
      {
        "code" : "24028007",
        "display" : "Right",
        "designation" : [{
          "language" : "de",
          "value" : "Rechts"
        }]
      },
      {
        "code" : "51440002",
        "display" : "Right and left",
        "designation" : [{
          "language" : "de",
          "value" : "Rechts und links"
        }]
      },
      {
        "code" : "40415009",
        "display" : "Proximal",
        "designation" : [{
          "language" : "de",
          "value" : "Proximal"
        }]
      },
      {
        "code" : "46053002",
        "display" : "Distal",
        "designation" : [{
          "language" : "de",
          "value" : "Distal"
        }]
      },
      {
        "code" : "255554000",
        "display" : "Dorsal"
      },
      {
        "code" : "255549009",
        "display" : "Anterior",
        "designation" : [{
          "language" : "de",
          "value" : "Anterior"
        }]
      },
      {
        "code" : "26283006",
        "display" : "Superficial",
        "designation" : [{
          "language" : "de",
          "value" : "Oberflächlich"
        }]
      },
      {
        "code" : "795002",
        "display" : "Deep",
        "designation" : [{
          "language" : "de",
          "value" : "Tief"
        }]
      },
      {
        "code" : "57195005",
        "display" : "Basal",
        "designation" : [{
          "language" : "de",
          "value" : "Basal"
        }]
      },
      {
        "code" : "261183002",
        "display" : "Upper",
        "designation" : [{
          "language" : "de",
          "value" : "Obere/r/s"
        }]
      },
      {
        "code" : "261122009",
        "display" : "Lower",
        "designation" : [{
          "language" : "de",
          "value" : "Untere/r/s"
        }]
      },
      {
        "code" : "255561001",
        "display" : "Medial",
        "designation" : [{
          "language" : "de",
          "value" : "Medial"
        }]
      },
      {
        "code" : "49370004",
        "display" : "Lateral",
        "designation" : [{
          "language" : "de",
          "value" : "Lateral"
        }]
      },
      {
        "code" : "264217000",
        "display" : "Superior",
        "designation" : [{
          "language" : "de",
          "value" : "Superior"
        }]
      },
      {
        "code" : "261089000",
        "display" : "Inferior",
        "designation" : [{
          "language" : "de",
          "value" : "Inferior"
        }]
      },
      {
        "code" : "255551008",
        "display" : "Posterior",
        "designation" : [{
          "language" : "de",
          "value" : "Posterior"
        }]
      },
      {
        "code" : "351726001",
        "display" : "Below"
      },
      {
        "code" : "352730000",
        "display" : "Supra-"
      },
      {
        "code" : "3583002",
        "display" : "Caudal",
        "designation" : [{
          "language" : "de",
          "value" : "Kaudal"
        }]
      },
      {
        "code" : "66787007",
        "display" : "Cephalic",
        "designation" : [{
          "language" : "de",
          "value" : "Kranial"
        }]
      },
      {
        "code" : "26216008",
        "display" : "Central"
      },
      {
        "code" : "43674008",
        "display" : "Apical"
      },
      {
        "code" : "14414005",
        "display" : "Peripheral",
        "designation" : [{
          "language" : "de",
          "value" : "Peripher"
        }]
      },
      {
        "code" : "255481003",
        "display" : "Left upper quadrant"
      },
      {
        "code" : "255497008",
        "display" : "Right upper quadrant"
      },
      {
        "code" : "255480002",
        "display" : "Left lower quadrant"
      },
      {
        "code" : "255495000",
        "display" : "Right lower quadrant"
      }]
    }]
  }
}

```
