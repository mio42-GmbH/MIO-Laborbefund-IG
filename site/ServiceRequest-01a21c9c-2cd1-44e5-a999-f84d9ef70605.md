# 01a21c9c-2cd1-44e5-a999-f84d9ef70605 - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **01a21c9c-2cd1-44e5-a999-f84d9ef70605**

## Example ServiceRequest: 01a21c9c-2cd1-44e5-a999-f84d9ef70605



## Resource Content

```json
{
  "resourceType" : "ServiceRequest",
  "id" : "01a21c9c-2cd1-44e5-a999-f84d9ef70605",
  "meta" : {
    "versionId" : "1",
    "lastUpdated" : "2023-05-03T11:15:00+01:00",
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
    "value" : "20211115-127"
  },
  {
    "type" : {
      "coding" : [{
        "system" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Laboratory_Identificator",
        "version" : "1.0.0-update",
        "code" : "NI",
        "display" : "Nachforderungsidentifikation"
      }]
    },
    "system" : "http://testsystem.de",
    "value" : "20211115-127"
  }],
  "status" : "completed",
  "intent" : "order",
  "priority" : "routine",
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/11000274103/version/20251115",
      "code" : "721965002",
      "display" : "Laboratory order (record artifact)"
    }]
  },
  "orderDetail" : [{
    "text" : "Beispieltext"
  }],
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
  },
  "authoredOn" : "2023-05-03T11:08:15+01:00",
  "requester" : {
    "reference" : "Practitioner/2b946366-cf18-4d89-a29c-00bf69ac90f6"
  },
  "reasonCode" : [{
    "extension" : [{
      "url" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Reason_Type",
      "valueString" : "Anlass"
    }],
    "text" : "Grund"
  },
  {
    "extension" : [{
      "url" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Reason_Type",
      "valueString" : "Veranlassungsgrund"
    }],
    "text" : "Grund2"
  }],
  "reasonReference" : [{
    "reference" : "Condition/1d344181-abf0-428d-9f3f-1bbd84b7684e"
  }],
  "supportingInfo" : [{
    "display" : "testressource"
  }],
  "note" : [{
    "text" : "test"
  }]
}

```
