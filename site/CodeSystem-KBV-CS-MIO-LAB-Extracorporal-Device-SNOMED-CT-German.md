# Außerkörperliche Quellen SNOMED CT® German - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **Außerkörperliche Quellen SNOMED CT® German**

## CodeSystem: Außerkörperliche Quellen SNOMED CT® German 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Extracorporal_Device_SNOMED_CT_German | *Version*:1.0.0-update |
| Draft as of 2026-06-19 | *Computable Name*:KBV_CS_MIO_LAB_Extracorporal_Device_SNOMED_CT_German |
| **Copyright/Legal**: Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at ​http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED “AS IS.” ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. | |

 
Dieses Codesystem enthält die Codes für deutsche Bezeichner für Außerkörperliche Quellen SNOMED CT® German. 

 This Code system is referenced in the content logical definition of the following value sets: 

* This CodeSystem is not used here; it may be used elsewhere (e.g. specifications and/or implementations that use this content)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "KBV-CS-MIO-LAB-Extracorporal-Device-SNOMED-CT-German",
  "url" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Extracorporal_Device_SNOMED_CT_German",
  "version" : "1.0.0-update",
  "name" : "KBV_CS_MIO_LAB_Extracorporal_Device_SNOMED_CT_German",
  "title" : "Außerkörperliche Quellen SNOMED CT® German",
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
  "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für Außerkörperliche Quellen SNOMED CT® German.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "DE",
      "display" : "Germany"
    }]
  }],
  "copyright" : "Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at ​http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED \"AS IS.\" ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.",
  "caseSensitive" : true,
  "content" : "complete",
  "concept" : [{
    "code" : "Fixateur",
    "display" : "Fixateur"
  },
  {
    "code" : "DrainageBeutel",
    "display" : "Drainage-Beutel"
  },
  {
    "code" : "StomaVorrichtung",
    "display" : "Stoma-Vorrichtung"
  },
  {
    "code" : "WunddrainageBeutel",
    "display" : "Wunddrainage-Beutel"
  },
  {
    "code" : "UrinSammelbeutel",
    "display" : "Urin-Sammelbeutel"
  },
  {
    "code" : "BeutelzurparenteralenenteralenErnaehrung",
    "display" : "Beutel zur parenteralen/enteralen Ernährung"
  },
  {
    "code" : "SubkutanerGlukosesensor",
    "display" : "Subkutaner Glukosesensor"
  },
  {
    "code" : "KolostomieSpuelbeutel",
    "display" : "Kolostomie-Spülbeutel"
  },
  {
    "code" : "TragbarerUrinSammelbeutel",
    "display" : "Tragbarer Urin-Sammelbeutel"
  },
  {
    "code" : "MagendrainageBeutel",
    "display" : "Magendrainage-Beutel"
  },
  {
    "code" : "SterilerWunddrainageBeutel",
    "display" : "Steriler Wunddrainage-Beutel"
  },
  {
    "code" : "GallendrainageBeutel",
    "display" : "Gallendrainage-Beutel"
  }]
}

```
