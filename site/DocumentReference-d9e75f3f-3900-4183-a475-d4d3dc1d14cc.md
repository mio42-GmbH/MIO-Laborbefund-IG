# d9e75f3f-3900-4183-a475-d4d3dc1d14cc - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **d9e75f3f-3900-4183-a475-d4d3dc1d14cc**

## Example DocumentReference: d9e75f3f-3900-4183-a475-d4d3dc1d14cc



## Resource Content

```json
{
  "resourceType" : "DocumentReference",
  "id" : "d9e75f3f-3900-4183-a475-d4d3dc1d14cc",
  "meta" : {
    "versionId" : "1",
    "lastUpdated" : "2023-05-03T11:15:00+01:00",
    "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DocumentReference|1.0.0-update"]
  },
  "status" : "current",
  "type" : {
    "coding" : [{
      "system" : "http://ihe-d.de/CodeSystems/IHEXDStypeCode",
      "version" : "2020-02-07T07:55:58",
      "code" : "PATI",
      "display" : "Patienteninformationen"
    }],
    "text" : "test"
  },
  "category" : [{
    "coding" : [{
      "system" : "http://ihe-d.de/CodeSystems/IHEXDSclassCode",
      "version" : "2021-06-25T13:44:47",
      "code" : "ADM",
      "display" : "Administratives Dokument"
    }],
    "text" : "test"
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
  "content" : [{
    "attachment" : {
      "contentType" : "application/pdf",
      "data" : "dGVzdA==",
      "title" : "Anhang",
      "creation" : "2022-05-06"
    }
  }]
}

```
