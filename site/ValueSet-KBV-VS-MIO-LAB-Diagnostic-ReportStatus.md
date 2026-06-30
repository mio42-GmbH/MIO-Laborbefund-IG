# Status Gesamtbefund - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **Status Gesamtbefund**

## ValueSet: Status Gesamtbefund 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Diagnostic_ReportStatus | *Version*:1.0.0-update |
| Draft as of 2026-06-30 | *Computable Name*:KBV_VS_MIO_LAB_Diagnostic_ReportStatus |
| **Copyright/Legal**: Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at ​http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED “AS IS.” ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. | |

 
Dieses Valueset enthält die Codes zur Beschreibung von Status Gesamtbefund. 

 **References** 

* [KBV_PR_MIO_LAB_DiagnosticReport](StructureDefinition-KBV-PR-MIO-LAB-DiagnosticReport.md)

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
  "id" : "KBV-VS-MIO-LAB-Diagnostic-ReportStatus",
  "url" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Diagnostic_ReportStatus",
  "version" : "1.0.0-update",
  "name" : "KBV_VS_MIO_LAB_Diagnostic_ReportStatus",
  "title" : "Status Gesamtbefund",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-06-30T11:44:07+02:00",
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
  "description" : "Dieses Valueset enthält die Codes zur Beschreibung von Status Gesamtbefund.",
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
      "system" : "http://hl7.org/fhir/diagnostic-report-status",
      "version" : "4.0.1",
      "concept" : [{
        "code" : "registered",
        "display" : "Registered"
      },
      {
        "code" : "partial",
        "display" : "Partial"
      },
      {
        "code" : "preliminary",
        "display" : "Preliminary"
      },
      {
        "code" : "final",
        "display" : "Final"
      },
      {
        "code" : "amended",
        "display" : "Amended"
      },
      {
        "code" : "appended",
        "display" : "Appended"
      },
      {
        "code" : "corrected",
        "display" : "Corrected"
      },
      {
        "code" : "cancelled",
        "display" : "Cancelled"
      },
      {
        "code" : "entered-in-error",
        "display" : "Entered in Error"
      }]
    }]
  }
}

```
