# 0f9878cf-8297-43c1-bf2d-7de5da068bf6 - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **0f9878cf-8297-43c1-bf2d-7de5da068bf6**

## Example RelatedPerson: 0f9878cf-8297-43c1-bf2d-7de5da068bf6



## Resource Content

```json
{
  "resourceType" : "RelatedPerson",
  "id" : "0f9878cf-8297-43c1-bf2d-7de5da068bf6",
  "meta" : {
    "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_RelatedPerson|1.0.0-update"]
  },
  "patient" : {
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
  }
}

```
