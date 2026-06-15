# 76fdc299-7b3f-404a-b32e-31e416bb0c32 - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **76fdc299-7b3f-404a-b32e-31e416bb0c32**

## Example Observation: 76fdc299-7b3f-404a-b32e-31e416bb0c32



## Resource Content

```json
{
  "resourceType" : "Observation",
  "id" : "76fdc299-7b3f-404a-b32e-31e416bb0c32",
  "meta" : {
    "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Laboratory_Study_Group|1.0.0-update"]
  },
  "status" : "final",
  "category" : [{
    "extension" : [{
      "url" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Diskriminator",
      "valueString" : "laboratory"
    }],
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/observation-category",
      "version" : "2.0.0",
      "code" : "laboratory",
      "display" : "Laboratory"
    }]
  }],
  "code" : {
    "coding" : [{
      "system" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_mio42",
      "version" : "1.0.0-update",
      "code" : "laboruntersuchungsgruppe",
      "display" : "Laboruntersuchungsgruppe"
    }]
  },
  "subject" : {
    "reference" : "Patient/84e01fa5-6763-4a96-99f3-170cf9b317ff",
    "identifier" : {
      "type" : {
        "coding" : [{
          "system" : "http://fhir.de/CodeSystem/identifier-type-de-basis",
          "code" : "KVZ10",
          "display" : "Krankenversichertennummer"
        }]
      },
      "system" : "http://fhir.de/sid/gkv/kvid-10",
      "value" : "K123456789"
    }
  },
  "_effectiveDateTime" : {
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
      "valueCode" : "not-permitted"
    }]
  },
  "hasMember" : [{
    "extension" : [{
      "url" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Sorting_Number",
      "valuePositiveInt" : 2121
    }],
    "reference" : "Observation/96f33ca8-872d-4c8b-972e-b681db27d9df"
  }]
}

```
