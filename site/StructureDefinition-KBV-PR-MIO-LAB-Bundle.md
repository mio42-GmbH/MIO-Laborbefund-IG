# KBV_PR_MIO_LAB_Bundle - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **KBV_PR_MIO_LAB_Bundle**

## Resource Profile: KBV_PR_MIO_LAB_Bundle 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Bundle | *Version*:1.0.0-update |
| Draft as of 2026-06-11 | *Computable Name*:KBV_PR_MIO_LAB_Bundle |
| **Copyright/Legal**: Im folgenden Profil können Codes aus den Code-Systemen SNOMED CT®, LOINC, Ucum, ATC, ICD-10-GM, ICD-10-WHO, OPS, Alpha-ID/Alpha-ID-SE und ICF enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED CT® Clinical Terms® (SNOMED CT® CT®) which is used by permission of SNOMED CT® International. All rights reserved. SNOMED CT® CT®, was originally created by The College of American Pathologists. SNOMED CT® and SNOMED CT® CT are registered trademarks of SNOMED CT® International. Implementers of these artefacts must have the appropriate SNOMED CT® CT Affiliate license. This material contains content from LOINC (http://LOINC.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://LOINC.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED ‘AS IS.’ ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. Dieses Material enthält Inhalte aus ATC. Die Erstellung erfolgte unter Verwendung der Datenträger der amtlichen Fassung der ATC-Klassifikation mit DDD des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICD-10-GM, ICD-10-WHO, OPS Alpha-ID ans Alpha-ID-SE. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICF. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Deutschen Instituts für Medizinische Dokumentation und Information (DIMDI). ICF-Kodes, -Begriffe und -Texte © Weltgesundheitsorganisation, übersetzt und herausgegeben durch das Deutsche Institut für Medizinische Dokumentation und Information von der International classification of functioning, disability and health - ICF, herausgegeben durch die Weltgesundheitsorganisation. | |

 
Dieses Profil dient als bündelndes Element. Das Bundle kann als Klammer-Ressource verstanden werden, die die notwendigen Ressourcen zusammenfügt. Diese Ressource und die darin gebündelten Ressourcen können dann mit einer Signatur versehen werden. Das Bundle umfasst in dieser Anwendung einen Laborbefund. 

**Usages:**

* This Profile is not used by any profiles in this Specification

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/kbv.mio.laborbefund|current/StructureDefinition/StructureDefinition-KBV-PR-MIO-LAB-Bundle.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-KBV-PR-MIO-LAB-Bundle.csv), [Excel](StructureDefinition-KBV-PR-MIO-LAB-Bundle.xlsx), [Schematron](StructureDefinition-KBV-PR-MIO-LAB-Bundle.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "KBV-PR-MIO-LAB-Bundle",
  "url" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Bundle",
  "version" : "1.0.0-update",
  "name" : "KBV_PR_MIO_LAB_Bundle",
  "title" : "KBV_PR_MIO_LAB_Bundle",
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
  "description" : "Dieses Profil dient als bündelndes Element. Das Bundle kann als Klammer-Ressource verstanden werden, die die notwendigen Ressourcen zusammenfügt. Diese Ressource und die darin gebündelten Ressourcen können dann mit einer Signatur versehen werden. Das Bundle umfasst in dieser Anwendung einen Laborbefund.",
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
    "identity" : "cda",
    "uri" : "http://hl7.org/v3/cda",
    "name" : "CDA (R2)"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Bundle",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Bundle",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Bundle",
      "path" : "Bundle",
      "definition" : "Dieses Profil dient als bündelndes Element. Das Bundle kann als Klammer-Ressource verstanden werden, die die notwendigen Ressourcen zusammenfügt. Diese Ressource und die darin gebündelten Ressourcen können dann mit einer Signatur versehen werden. Das Bundle umfasst in dieser Anwendung einen Laborbefund."
    },
    {
      "id" : "Bundle.meta",
      "path" : "Bundle.meta",
      "mustSupport" : true
    },
    {
      "id" : "Bundle.meta.id",
      "path" : "Bundle.meta.id",
      "max" : "0"
    },
    {
      "id" : "Bundle.meta.versionId",
      "path" : "Bundle.meta.versionId",
      "mustSupport" : true
    },
    {
      "id" : "Bundle.meta.lastUpdated",
      "path" : "Bundle.meta.lastUpdated",
      "mustSupport" : true
    },
    {
      "id" : "Bundle.meta.source",
      "path" : "Bundle.meta.source",
      "max" : "0"
    },
    {
      "id" : "Bundle.meta.security",
      "path" : "Bundle.meta.security",
      "max" : "0"
    },
    {
      "id" : "Bundle.meta.tag",
      "path" : "Bundle.meta.tag",
      "max" : "0"
    },
    {
      "id" : "Bundle.implicitRules",
      "path" : "Bundle.implicitRules",
      "max" : "0"
    },
    {
      "id" : "Bundle.language",
      "path" : "Bundle.language",
      "max" : "0"
    },
    {
      "id" : "Bundle.identifier",
      "path" : "Bundle.identifier",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Bundle.type",
      "path" : "Bundle.type",
      "patternCode" : "document",
      "mustSupport" : true
    },
    {
      "id" : "Bundle.timestamp",
      "path" : "Bundle.timestamp",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Bundle.total",
      "path" : "Bundle.total",
      "max" : "0"
    },
    {
      "id" : "Bundle.link",
      "path" : "Bundle.link",
      "max" : "0"
    },
    {
      "id" : "Bundle.entry",
      "path" : "Bundle.entry",
      "slicing" : {
        "discriminator" : [{
          "type" : "type",
          "path" : "resource"
        }],
        "rules" : "closed"
      },
      "min" : 5,
      "mustSupport" : true
    },
    {
      "id" : "Bundle.entry.link",
      "path" : "Bundle.entry.link",
      "max" : "0"
    },
    {
      "id" : "Bundle.entry.fullUrl",
      "path" : "Bundle.entry.fullUrl",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Bundle.entry.resource",
      "path" : "Bundle.entry.resource",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Bundle.entry.search",
      "path" : "Bundle.entry.search",
      "max" : "0"
    },
    {
      "id" : "Bundle.entry.request",
      "path" : "Bundle.entry.request",
      "max" : "0"
    },
    {
      "id" : "Bundle.entry.response",
      "path" : "Bundle.entry.response",
      "max" : "0"
    },
    {
      "id" : "Bundle.entry:composition",
      "path" : "Bundle.entry",
      "sliceName" : "composition",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Bundle.entry:composition.resource",
      "path" : "Bundle.entry.resource",
      "type" : [{
        "code" : "Composition",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Composition"]
      }]
    },
    {
      "id" : "Bundle.entry:diagnosticReport",
      "path" : "Bundle.entry",
      "sliceName" : "diagnosticReport",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Bundle.entry:diagnosticReport.resource",
      "path" : "Bundle.entry.resource",
      "type" : [{
        "code" : "DiagnosticReport",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DiagnosticReport"]
      }]
    },
    {
      "id" : "Bundle.entry:patient",
      "path" : "Bundle.entry",
      "sliceName" : "patient",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Bundle.entry:patient.resource",
      "path" : "Bundle.entry.resource",
      "type" : [{
        "code" : "Patient",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Patient"]
      }]
    },
    {
      "id" : "Bundle.entry:observation",
      "path" : "Bundle.entry",
      "sliceName" : "observation",
      "min" : 1,
      "max" : "*",
      "mustSupport" : true
    },
    {
      "id" : "Bundle.entry:observation.resource",
      "path" : "Bundle.entry.resource",
      "type" : [{
        "code" : "Observation",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Laboratory_Study",
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Laboratory_Study_Group",
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Image_Attachment"]
      }]
    },
    {
      "id" : "Bundle.entry:specimen",
      "path" : "Bundle.entry",
      "sliceName" : "specimen",
      "min" : 0,
      "max" : "*",
      "mustSupport" : true
    },
    {
      "id" : "Bundle.entry:specimen.resource",
      "path" : "Bundle.entry.resource",
      "type" : [{
        "code" : "Specimen",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Specimen"]
      }]
    },
    {
      "id" : "Bundle.entry:serviceRequest",
      "path" : "Bundle.entry",
      "sliceName" : "serviceRequest",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Bundle.entry:serviceRequest.resource",
      "path" : "Bundle.entry.resource",
      "type" : [{
        "code" : "ServiceRequest",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_ServiceRequest"]
      }]
    },
    {
      "id" : "Bundle.entry:organization",
      "path" : "Bundle.entry",
      "sliceName" : "organization",
      "min" : 0,
      "max" : "*",
      "mustSupport" : true
    },
    {
      "id" : "Bundle.entry:organization.resource",
      "path" : "Bundle.entry.resource",
      "type" : [{
        "code" : "Organization",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Organization"]
      }]
    },
    {
      "id" : "Bundle.entry:practitioner",
      "path" : "Bundle.entry",
      "sliceName" : "practitioner",
      "min" : 0,
      "max" : "*",
      "mustSupport" : true
    },
    {
      "id" : "Bundle.entry:practitioner.resource",
      "path" : "Bundle.entry.resource",
      "type" : [{
        "code" : "Practitioner",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Practitioner"]
      }]
    },
    {
      "id" : "Bundle.entry:practitionerRole",
      "path" : "Bundle.entry",
      "sliceName" : "practitionerRole",
      "min" : 0,
      "max" : "*",
      "mustSupport" : true
    },
    {
      "id" : "Bundle.entry:practitionerRole.resource",
      "path" : "Bundle.entry.resource",
      "type" : [{
        "code" : "PractitionerRole",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_PractitionerRole"]
      }]
    },
    {
      "id" : "Bundle.entry:bodyStructure",
      "path" : "Bundle.entry",
      "sliceName" : "bodyStructure",
      "min" : 0,
      "max" : "*",
      "mustSupport" : true
    },
    {
      "id" : "Bundle.entry:bodyStructure.resource",
      "path" : "Bundle.entry.resource",
      "type" : [{
        "code" : "BodyStructure",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_BodyStructure"]
      }]
    },
    {
      "id" : "Bundle.entry:provenance",
      "path" : "Bundle.entry",
      "sliceName" : "provenance",
      "min" : 0,
      "max" : "*",
      "mustSupport" : true
    },
    {
      "id" : "Bundle.entry:provenance.resource",
      "path" : "Bundle.entry.resource",
      "type" : [{
        "code" : "Provenance",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Provenance"]
      }]
    },
    {
      "id" : "Bundle.entry:device",
      "path" : "Bundle.entry",
      "sliceName" : "device",
      "min" : 0,
      "max" : "*",
      "mustSupport" : true
    },
    {
      "id" : "Bundle.entry:device.resource",
      "path" : "Bundle.entry.resource",
      "type" : [{
        "code" : "Device",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Device_Laboratory_Analyzer",
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Device_Specimen_Container",
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Device_Specimen_Subject"]
      }]
    },
    {
      "id" : "Bundle.entry:condition",
      "path" : "Bundle.entry",
      "sliceName" : "condition",
      "min" : 0,
      "max" : "*",
      "mustSupport" : true
    },
    {
      "id" : "Bundle.entry:condition.resource",
      "path" : "Bundle.entry.resource",
      "type" : [{
        "code" : "Condition",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Condition_Diagnosis"]
      }]
    },
    {
      "id" : "Bundle.entry:deviceDefinition",
      "path" : "Bundle.entry",
      "sliceName" : "deviceDefinition",
      "min" : 0,
      "max" : "*",
      "mustSupport" : true
    },
    {
      "id" : "Bundle.entry:deviceDefinition.resource",
      "path" : "Bundle.entry.resource",
      "type" : [{
        "code" : "DeviceDefinition",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DeviceDefinition_Laboratory_Analyzer",
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DeviceDefinition_Specimen_Container",
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DeviceDefinition_Specimen_Subject"]
      }]
    },
    {
      "id" : "Bundle.entry:documentReference",
      "path" : "Bundle.entry",
      "sliceName" : "documentReference",
      "min" : 0,
      "max" : "*",
      "mustSupport" : true
    },
    {
      "id" : "Bundle.entry:documentReference.resource",
      "path" : "Bundle.entry.resource",
      "type" : [{
        "code" : "DocumentReference",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DocumentReference"]
      }]
    },
    {
      "id" : "Bundle.entry:substance",
      "path" : "Bundle.entry",
      "sliceName" : "substance",
      "min" : 0,
      "max" : "*",
      "mustSupport" : true
    },
    {
      "id" : "Bundle.entry:substance.resource",
      "path" : "Bundle.entry.resource",
      "type" : [{
        "code" : "Substance",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Substance"]
      }]
    },
    {
      "id" : "Bundle.entry:relatedPerson",
      "path" : "Bundle.entry",
      "sliceName" : "relatedPerson",
      "min" : 0,
      "max" : "*",
      "mustSupport" : true
    },
    {
      "id" : "Bundle.entry:relatedPerson.resource",
      "path" : "Bundle.entry.resource",
      "type" : [{
        "code" : "RelatedPerson",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_RelatedPerson"]
      }]
    }]
  }
}

```
