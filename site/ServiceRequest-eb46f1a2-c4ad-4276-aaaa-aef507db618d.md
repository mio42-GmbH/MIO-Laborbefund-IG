# eb46f1a2-c4ad-4276-aaaa-aef507db618d - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **eb46f1a2-c4ad-4276-aaaa-aef507db618d**

## Example ServiceRequest: eb46f1a2-c4ad-4276-aaaa-aef507db618d



## Resource Content

```json
{
  "resourceType" : "ServiceRequest",
  "id" : "eb46f1a2-c4ad-4276-aaaa-aef507db618d",
  "meta" : {
    "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_ServiceRequest|1.0.0-update"]
  },
  "identifier" : [{
    "type" : {
      "coding" : [{
        "system" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Laboratory_Identificator",
        "version" : "1.0.0-update",
        "code" : "AE",
        "display" : "Auftragsnummer des Einsenders"
      }]
    },
    "system" : "http://testsystem.de",
    "value" : "20211115-128"
  }],
  "status" : "active",
  "intent" : "order",
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/11000274103/version/20251115",
      "code" : "721965002",
      "display" : "Laboratory order (record artifact)"
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
  "requester" : {
    "reference" : "PractitionerRole/bd9d76e7-9fa1-42a4-b364-f93845994612"
  }
}

```
