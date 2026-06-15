# b65dfcca-c6ce-4dac-8742-8da00c192c7d - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **b65dfcca-c6ce-4dac-8742-8da00c192c7d**

## Example Patient: b65dfcca-c6ce-4dac-8742-8da00c192c7d



## Resource Content

```json
{
  "resourceType" : "Patient",
  "id" : "b65dfcca-c6ce-4dac-8742-8da00c192c7d",
  "meta" : {
    "versionId" : "1",
    "lastUpdated" : "2023-05-03T11:15:00+01:00",
    "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Patient|1.0.0-update"]
  },
  "extension" : [{
    "extension" : [{
      "url" : "value",
      "valueCodeableConcept" : {
        "coding" : [{
          "system" : "http://terminology.hl7.org/CodeSystem/sex-parameter-for-clinical-use",
          "code" : "female-typical",
          "display" : "Apply female-typical setting or reference range"
        }]
      }
    },
    {
      "url" : "period",
      "valuePeriod" : {
        "start" : "2023-01-30",
        "end" : "2023-04-01"
      }
    },
    {
      "url" : "comment",
      "valueString" : "Hormontherapie"
    }],
    "url" : "http://hl7.org/fhir/StructureDefinition/patient-sexParameterForClinicalUse"
  }],
  "identifier" : [{
    "type" : {
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
        "version" : "5.0.0",
        "code" : "MR",
        "display" : "Krankenaktennummer"
      }]
    },
    "system" : "http://www.acmedasdd.com/identifiers/patient",
    "value" : "123456"
  },
  {
    "type" : {
      "coding" : [{
        "system" : "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_identifier_type",
        "version" : "1.8.0",
        "code" : "pkv-nr",
        "display" : "Private Krankenversicherung"
      },
      {
        "system" : "http://fhir.de/CodeSystem/identifier-type-de-basis",
        "code" : "PKV",
        "display" : "Private Krankenversicherung"
      }]
    },
    "system" : "http://www.acmedasdd.com/identifiers/patient",
    "value" : "1234567890",
    "assigner" : {
      "reference" : "Organization/b1135775-9c67-4d2f-8618-9ef3d1f5f3d7",
      "display" : "KK"
    }
  },
  {
    "type" : {
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
        "version" : "5.0.0",
        "code" : "PPN",
        "display" : "Passport number"
      }]
    },
    "system" : "http://www.acmedasdd.com/identifiers/patient",
    "value" : "123456"
  },
  {
    "type" : {
      "coding" : [{
        "system" : "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_identifier_type",
        "version" : "1.8.0",
        "code" : "kvk",
        "display" : "Krankenversichertenkarte"
      }]
    },
    "system" : "http://fhir.de/sid/gkv/kvk-versichertennummer",
    "value" : "123456"
  }],
  "name" : [{
    "use" : "official",
    "text" : "Dr. Hans Glücklich",
    "family" : "Hans",
    "_family" : {
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/humanname-own-name",
        "valueString" : "Glücklich"
      },
      {
        "url" : "http://fhir.de/StructureDefinition/humanname-namenszusatz",
        "valueString" : "Prinz"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix",
        "valueString" : "von"
      }]
    },
    "given" : ["Hans"],
    "prefix" : ["Dr"],
    "_prefix" : [{
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier",
        "valueCode" : "AC"
      }]
    }]
  }],
  "telecom" : [{
    "system" : "phone",
    "value" : "12123455"
  }],
  "gender" : "other",
  "_gender" : {
    "extension" : [{
      "url" : "http://fhir.de/StructureDefinition/gender-amtlich-de",
      "valueCoding" : {
        "system" : "http://fhir.de/CodeSystem/gender-amtlich-de",
        "code" : "X",
        "display" : "unbestimmt"
      }
    }]
  },
  "birthDate" : "2022-03-01",
  "deceasedBoolean" : false,
  "address" : [{
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct",
      "valueString" : "Schöneberg"
    }],
    "type" : "both",
    "line" : ["Schöneberg"],
    "_line" : [{
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName",
        "valueString" : "Mittestr"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber",
        "valueString" : "43"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator",
        "valueString" : "Nebenhaus"
      }]
    }],
    "city" : "Berlin",
    "postalCode" : "12015",
    "country" : "D"
  },
  {
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct",
      "valueString" : "Schöneberg"
    }],
    "type" : "postal",
    "line" : ["Schöneberg"],
    "_line" : [{
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox",
        "valueString" : "Mittestr"
      }]
    }],
    "city" : "Berlin",
    "postalCode" : "12015",
    "country" : "D"
  }],
  "maritalStatus" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
      "version" : "4.0.0",
      "code" : "W",
      "display" : "Widowed"
    }],
    "text" : "2021 verwitwet"
  },
  "communication" : [{
    "language" : {
      "coding" : [{
        "system" : "urn:ietf:bcp:47",
        "code" : "uk",
        "display" : "Ukrainian"
      }]
    }
  }]
}

```
