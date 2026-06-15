# 1d344181-abf0-428d-9f3f-1bbd84b7684e - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **1d344181-abf0-428d-9f3f-1bbd84b7684e**

## Example Condition: 1d344181-abf0-428d-9f3f-1bbd84b7684e



## Resource Content

```json
{
  "resourceType" : "Condition",
  "id" : "1d344181-abf0-428d-9f3f-1bbd84b7684e",
  "meta" : {
    "versionId" : "1",
    "lastUpdated" : "2023-05-03T11:15:00+01:00",
    "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Condition_Diagnosis|1.0.0-update"]
  },
  "code" : {
    "coding" : [{
      "extension" : [{
        "url" : "http://fhir.de/StructureDefinition/icd-10-gm-mehrfachcodierungs-kennzeichen",
        "valueCoding" : {
          "system" : "http://fhir.de/CodeSystem/icd-10-gm-mehrfachcodierungs-kennzeichen",
          "version" : "1.5.4",
          "code" : "*",
          "display" : "*"
        }
      },
      {
        "url" : "http://fhir.de/StructureDefinition/seitenlokalisation",
        "valueCoding" : {
          "system" : "https://fhir.kbv.de/CodeSystem/KBV_CS_SFHIR_ICD_SEITENLOKALISATION",
          "version" : "1.00",
          "code" : "B",
          "display" : "beiderseits"
        }
      },
      {
        "url" : "http://fhir.de/StructureDefinition/icd-10-gm-diagnosesicherheit",
        "valueCoding" : {
          "system" : "https://fhir.kbv.de/CodeSystem/KBV_CS_SFHIR_ICD_DIAGNOSESICHERHEIT",
          "version" : "1.00",
          "code" : "V",
          "display" : "Verdacht auf / zum Ausschluss von"
        }
      }],
      "system" : "http://fhir.de/CodeSystem/bfarm/icd-10-gm",
      "version" : "2026",
      "code" : "A00",
      "display" : "Cholera"
    },
    {
      "system" : "http://www.orpha.net",
      "version" : "2025",
      "code" : "123",
      "display" : "Björnstad-Syndrom"
    },
    {
      "system" : "http://fhir.de/CodeSystem/bfarm/alpha-id",
      "version" : "2020",
      "code" : "I6158",
      "display" : "Ichthyosiformes Ekzem"
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/11000274103/version/20250515",
      "code" : "404684003",
      "display" : "Clinical finding (finding)"
    }],
    "text" : "Beispielkrankheit"
  },
  "subject" : {
    "reference" : "Patient/b65dfcca-c6ce-4dac-8742-8da00c192c7d",
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
  }
}

```
