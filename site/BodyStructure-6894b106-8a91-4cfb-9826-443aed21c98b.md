# 6894b106-8a91-4cfb-9826-443aed21c98b - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **6894b106-8a91-4cfb-9826-443aed21c98b**

## Example BodyStructure: 6894b106-8a91-4cfb-9826-443aed21c98b



## Resource Content

```json
{
  "resourceType" : "BodyStructure",
  "id" : "6894b106-8a91-4cfb-9826-443aed21c98b",
  "meta" : {
    "versionId" : "1",
    "lastUpdated" : "2023-05-03T11:15:00+01:00",
    "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_BodyStructure|1.0.0-update"]
  },
  "extension" : [{
    "extension" : [{
      "url" : "structure",
      "valueCodeableConcept" : {
        "coding" : [{
          "system" : "http://snomed.info/sct",
          "version" : "http://snomed.info/sct/11000274103/version/20251115",
          "code" : "90432007",
          "display" : "Structure of mucous membrane of nasopharynx (body structure)"
        }],
        "text" : "test"
      }
    },
    {
      "url" : "laterality",
      "valueCodeableConcept" : {
        "coding" : [{
          "system" : "http://snomed.info/sct",
          "version" : "http://snomed.info/sct/11000274103/version/20251115",
          "code" : "7771000",
          "display" : "Left (qualifier value)"
        }],
        "text" : "test"
      }
    },
    {
      "extension" : [{
        "url" : "clockFacePosition",
        "valueCodeableConcept" : {
          "coding" : [{
            "system" : "http://snomed.info/sct",
            "version" : "http://snomed.info/sct/11000274103/version/20251115",
            "code" : "260330005",
            "display" : "3 o'clock position (qualifier value)"
          }],
          "text" : "test"
        }
      }],
      "url" : "bodyLandmarkOrientation"
    },
    {
      "url" : "qualifier",
      "valueCodeableConcept" : {
        "coding" : [{
          "system" : "http://snomed.info/sct",
          "version" : "http://snomed.info/sct/11000274103/version/20251115",
          "code" : "46053002",
          "display" : "Distal (qualifier value)"
        }],
        "text" : "test"
      }
    }],
    "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-BodyStructure.includedStructure"
  }],
  "morphology" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/11000274103/version/20251115",
      "code" : "75910000",
      "display" : "Congenital hypersegmentation (morphologic abnormality)"
    }],
    "text" : "test"
  },
  "description" : "test",
  "patient" : {
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
