# eb7fbea2-95bd-4618-b38d-ce69cde79726 - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **eb7fbea2-95bd-4618-b38d-ce69cde79726**

## Example Specimen: eb7fbea2-95bd-4618-b38d-ce69cde79726



## Resource Content

```json
{
  "resourceType" : "Specimen",
  "id" : "eb7fbea2-95bd-4618-b38d-ce69cde79726",
  "meta" : {
    "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Specimen|1.0.0-update"]
  },
  "identifier" : [{
    "value" : "Test Specimen identifier"
  }],
  "status" : "available",
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
  "receivedTime" : "2021-11-15T16:55:00+01:00",
  "collection" : {
    "collectedDateTime" : "2023-05-03"
  }
}

```
