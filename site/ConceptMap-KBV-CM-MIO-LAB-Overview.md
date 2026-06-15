# KBV_CM_MIO_LAB_Overview - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **KBV_CM_MIO_LAB_Overview**

## ConceptMap: KBV_CM_MIO_LAB_Overview 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_LAB_Overview | *Version*:1.0.0-update |
| Draft as of 2026-06-15 | *Computable Name*:KBV_CM_MIO_LAB_Overview |
| **Copyright/Legal**: Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at ​http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED “AS IS.” ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. | |

 
Diese Conceptmap verknüpft die Codes für KBV_CM_MIO_LAB_Overview mit deutschen Bezeichnungen. 



## Resource Content

```json
{
  "resourceType" : "ConceptMap",
  "id" : "KBV-CM-MIO-LAB-Overview",
  "url" : "https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_LAB_Overview",
  "version" : "1.0.0-update",
  "name" : "KBV_CM_MIO_LAB_Overview",
  "title" : "KBV_CM_MIO_LAB_Overview",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-06-15T16:45:57+02:00",
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
  "description" : "Diese Conceptmap verknüpft die Codes für KBV_CM_MIO_LAB_Overview mit deutschen Bezeichnungen.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "DE",
      "display" : "Germany"
    }]
  }],
  "copyright" : "Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at ​http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED \"AS IS.\" ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.",
  "group" : [{
    "source" : "http://hl7.org/fhir/administrative-gender",
    "sourceVersion" : "4.0.1",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_AdministrativeGender_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "female",
      "display" : "Female",
      "target" : [{
        "code" : "Weiblich",
        "display" : "Weiblich",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "male",
      "display" : "Male",
      "target" : [{
        "code" : "Maennlich",
        "display" : "Männlich",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "other",
      "display" : "Other",
      "target" : [{
        "code" : "Andere",
        "display" : "Andere",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "unknown",
      "display" : "Unknown",
      "target" : [{
        "code" : "Unbekannt",
        "display" : "Unbekannt",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://snomed.info/sct",
    "sourceVersion" : "http://snomed.info/sct/11000274103/version/20251115",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Bodystructure_Body_Landmark_Clock_Face_Position_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "260318004",
      "display" : "1 o'clock position",
      "target" : [{
        "code" : "1UhrPosition",
        "display" : "1-Uhr-Position",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "260322009",
      "display" : "10 o'clock position",
      "target" : [{
        "code" : "10UhrPosition",
        "display" : "10-Uhr-Position",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "260324005",
      "display" : "11 o'clock position",
      "target" : [{
        "code" : "11UhrPosition",
        "display" : "11-Uhr-Position",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "260326007",
      "display" : "12 o'clock position",
      "target" : [{
        "code" : "12UhrPosition",
        "display" : "12-Uhr-Position",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "260328008",
      "display" : "2 o'clock position",
      "target" : [{
        "code" : "2UhrPosition",
        "display" : "2-Uhr-Position",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "260330005",
      "display" : "3 o'clock position",
      "target" : [{
        "code" : "3UhrPosition",
        "display" : "3-Uhr-Position",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "260333007",
      "display" : "4 o'clock position",
      "target" : [{
        "code" : "4UhrPosition",
        "display" : "4-Uhr-Position",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "260335000",
      "display" : "5 o'clock position",
      "target" : [{
        "code" : "5UhrPosition",
        "display" : "5-Uhr-Position",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "260337008",
      "display" : "6 o'clock position",
      "target" : [{
        "code" : "6UhrPosition",
        "display" : "6-Uhr-Position",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "260339006",
      "display" : "7 o'clock position",
      "target" : [{
        "code" : "7UhrPosition",
        "display" : "7-Uhr-Position",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "260341007",
      "display" : "8 o'clock position",
      "target" : [{
        "code" : "8UhrPosition",
        "display" : "8-Uhr-Position",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "260343005",
      "display" : "9 o'clock position",
      "target" : [{
        "code" : "9UhrPosition",
        "display" : "9-Uhr-Position",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "urn:ietf:bcp:47",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_CommonLanguages_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "ar",
      "display" : "Arabic",
      "target" : [{
        "code" : "Arabisch",
        "display" : "Arabisch",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "bn",
      "display" : "Bengali",
      "target" : [{
        "code" : "Bengalisch",
        "display" : "Bengalisch",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "cs",
      "display" : "Czech",
      "target" : [{
        "code" : "Tschechisch",
        "display" : "Tschechisch",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "da",
      "display" : "Danish",
      "target" : [{
        "code" : "Daenisch",
        "display" : "Dänisch",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "de",
      "display" : "German",
      "target" : [{
        "code" : "Deutsch",
        "display" : "Deutsch",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "de-AT",
      "display" : "German (Austria)",
      "target" : [{
        "code" : "DeutschOesterreich",
        "display" : "Deutsch (Österreich)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "de-CH",
      "display" : "German (Switzerland)",
      "target" : [{
        "code" : "DeutschSchweiz",
        "display" : "Deutsch (Schweiz)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "de-DE",
      "display" : "German (Germany)",
      "target" : [{
        "code" : "DeutschDeutschland",
        "display" : "Deutsch (Deutschland)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "el",
      "display" : "Greek",
      "target" : [{
        "code" : "Griechisch",
        "display" : "Griechisch",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "en",
      "display" : "English",
      "target" : [{
        "code" : "Englisch",
        "display" : "Englisch",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "en-AU",
      "display" : "English (Australia)",
      "target" : [{
        "code" : "EnglischAustralien",
        "display" : "Englisch (Australien)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "en-CA",
      "display" : "English (Canada)",
      "target" : [{
        "code" : "EnglischKanada",
        "display" : "Englisch (Kanada)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "en-GB",
      "display" : "English (Great Britain)",
      "target" : [{
        "code" : "EnglischGrossbritannien",
        "display" : "Englisch (Großbritannien)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "en-IN",
      "display" : "English (India)",
      "target" : [{
        "code" : "EnglischIndien",
        "display" : "Englisch (Indien)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "en-NZ",
      "display" : "English (New Zeland)",
      "target" : [{
        "code" : "EnglischNeuseeland",
        "display" : "Englisch (Neuseeland)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "en-SG",
      "display" : "English (Singapore)",
      "target" : [{
        "code" : "EnglischSingapur",
        "display" : "Englisch (Singapur)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "en-US",
      "display" : "English (United States)",
      "target" : [{
        "code" : "EnglischUSA",
        "display" : "Englisch (USA)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "es",
      "display" : "Spanish",
      "target" : [{
        "code" : "Spanisch",
        "display" : "Spanisch",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "es-AR",
      "display" : "Spanish (Argentina)",
      "target" : [{
        "code" : "SpanischArgentinien",
        "display" : "Spanisch (Argentinien)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "es-ES",
      "display" : "Spanish (Spain)",
      "target" : [{
        "code" : "SpanischSpanien",
        "display" : "Spanisch (Spanien)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "es-UY",
      "display" : "Spanish (Uruguay)",
      "target" : [{
        "code" : "SpanischUruguay",
        "display" : "Spanisch (Uruguay)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "fi",
      "display" : "Finnish",
      "target" : [{
        "code" : "Finnisch",
        "display" : "Finnisch",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "fr",
      "display" : "French",
      "target" : [{
        "code" : "Franzoesisch",
        "display" : "Französisch",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "fr-BE",
      "display" : "French (Belgium)",
      "target" : [{
        "code" : "FranzoesischBelgien",
        "display" : "Französisch (Belgien)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "fr-CH",
      "display" : "French (Switzerland)",
      "target" : [{
        "code" : "FranzoesischSchweiz",
        "display" : "Französisch (Schweiz)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "fr-FR",
      "display" : "French (France)",
      "target" : [{
        "code" : "FranzoesischFrankreich",
        "display" : "Französisch (Frankreich)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "fy",
      "display" : "Frysian",
      "target" : [{
        "code" : "Friesisch",
        "display" : "Friesisch",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "fy-NL",
      "display" : "Frysian (Netherlands)",
      "target" : [{
        "code" : "FriesischNiederlande",
        "display" : "Friesisch (Niederlande)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "hr",
      "display" : "Croatian",
      "target" : [{
        "code" : "Kroatisch",
        "display" : "Kroatisch",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "it",
      "display" : "Italian",
      "target" : [{
        "code" : "Italienisch",
        "display" : "Italienisch",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "it-CH",
      "display" : "Italian (Switzerland)",
      "target" : [{
        "code" : "ItalienischSchweiz",
        "display" : "Italienisch (Schweiz)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "it-IT",
      "display" : "Italian (Italy)",
      "target" : [{
        "code" : "ItalienischItalien",
        "display" : "Italienisch (Italien)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "ja",
      "display" : "Japanese",
      "target" : [{
        "code" : "Japanisch",
        "display" : "Japanisch",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "ko",
      "display" : "Korean",
      "target" : [{
        "code" : "Koreanisch",
        "display" : "Koreanisch",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "nl",
      "display" : "Dutch",
      "target" : [{
        "code" : "Niederlaendisch",
        "display" : "Niederländisch",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "nl-BE",
      "display" : "Dutch (Belgium)",
      "target" : [{
        "code" : "NiederlaendischBelgien",
        "display" : "Niederländisch (Belgien)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "nl-NL",
      "display" : "Dutch (Netherlands)",
      "target" : [{
        "code" : "NiederlaendischNiederlande",
        "display" : "Niederländisch (Niederlande)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "no",
      "display" : "Norwegian",
      "target" : [{
        "code" : "Norwegisch",
        "display" : "Norwegisch",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "no-NO",
      "display" : "Norwegian (Norway)",
      "target" : [{
        "code" : "NorwegischNorwegen",
        "display" : "Norwegisch (Norwegen)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "pl",
      "display" : "Polish",
      "target" : [{
        "code" : "Polnisch",
        "display" : "Polnisch",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "pt",
      "display" : "Portuguese",
      "target" : [{
        "code" : "Portugiesisch",
        "display" : "Portugiesisch",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "pt-BR",
      "display" : "Portuguese (Brazil)",
      "target" : [{
        "code" : "PortugiesischBrasilien",
        "display" : "Portugiesisch (Brasilien)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "ru",
      "display" : "Russian",
      "target" : [{
        "code" : "Russisch",
        "display" : "Russisch",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "ru-RU",
      "display" : "Russian (Russia)",
      "target" : [{
        "code" : "RussischRussland",
        "display" : "Russisch (Russland)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "sr",
      "display" : "Serbian",
      "target" : [{
        "code" : "Serbisch",
        "display" : "Serbisch",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "sr-RS",
      "display" : "Serbian (Serbia)",
      "target" : [{
        "code" : "SerbischSerbien",
        "display" : "Serbisch (Serbien)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "sv",
      "display" : "Swedish",
      "target" : [{
        "code" : "Schwedisch",
        "display" : "Schwedisch",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "sv-SE",
      "display" : "Swedish (Sweden)",
      "target" : [{
        "code" : "SchwedischSchweden",
        "display" : "Schwedisch (Schweden)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "te",
      "display" : "Telegu",
      "target" : [{
        "code" : "Telugu",
        "display" : "Telugu",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "zh",
      "display" : "Chinese",
      "target" : [{
        "code" : "Chinesisch",
        "display" : "Chinesisch",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "zh-CN",
      "display" : "Chinese (China)",
      "target" : [{
        "code" : "ChinesischChina",
        "display" : "Chinesisch (China)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "zh-HK",
      "display" : "Chinese (Hong Kong)",
      "target" : [{
        "code" : "ChinesischHongKong",
        "display" : "Chinesisch (Hong Kong)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "zh-SG",
      "display" : "Chinese (Singapore)",
      "target" : [{
        "code" : "ChinesischSingapur",
        "display" : "Chinesisch (Singapur)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "zh-TW",
      "display" : "Chinese (Taiwan)",
      "target" : [{
        "code" : "ChinesischTaiwan",
        "display" : "Chinesisch (Taiwan)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "tr-TR",
      "display" : "Turkish",
      "target" : [{
        "code" : "Tuerkisch",
        "display" : "Türkisch",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "uk",
      "display" : "Ukrainian",
      "target" : [{
        "code" : "Ukrainisch",
        "display" : "Ukrainisch",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://unitsofmeasure.org",
    "sourceVersion" : "2.1",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_CommonUCUMCodesForDuration_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "a",
      "display" : "years",
      "target" : [{
        "code" : "a",
        "display" : "a",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "d",
      "display" : "days",
      "target" : [{
        "code" : "d",
        "display" : "d",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "h",
      "display" : "hours",
      "target" : [{
        "code" : "h",
        "display" : "h",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "min",
      "display" : "minutes",
      "target" : [{
        "code" : "min",
        "display" : "min",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "mo",
      "display" : "months",
      "target" : [{
        "code" : "mo",
        "display" : "mo",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "ms",
      "display" : "milliseconds",
      "target" : [{
        "code" : "ms",
        "display" : "ms",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "s",
      "display" : "seconds",
      "target" : [{
        "code" : "s",
        "display" : "s",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "wk",
      "display" : "weeks",
      "target" : [{
        "code" : "wk",
        "display" : "wk",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://terminology.hl7.org/CodeSystem/contactentity-type",
    "sourceVersion" : "4.0.1",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_ContactEntityType_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "ADMIN",
      "display" : "Administrative",
      "target" : [{
        "code" : "Administrativ",
        "display" : "Administrativ",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "BILL",
      "display" : "Billing",
      "target" : [{
        "code" : "Abrechnung",
        "display" : "Abrechnung",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "HR",
      "display" : "Human Resource",
      "target" : [{
        "code" : "Personalwesen",
        "display" : "Personalwesen",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "PATINF",
      "display" : "Patient",
      "target" : [{
        "code" : "Patienteninformation",
        "display" : "Patienteninformation",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "PAYOR",
      "display" : "Payor",
      "target" : [{
        "code" : "VersicherungsanspruchLeistungspruefungZahlung",
        "display" : "Versicherungsanspruch/Leistungsprüfung/Zahlung",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "PRESS",
      "display" : "Press",
      "target" : [{
        "code" : "Presse",
        "display" : "Presse",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://hl7.org/fhir/contact-point-system",
    "sourceVersion" : "4.0.1",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_ContactPointSystem_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "email",
      "display" : "Email",
      "target" : [{
        "code" : "EMail",
        "display" : "E-Mail",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "other",
      "display" : "Other",
      "target" : [{
        "code" : "Sonstiges",
        "display" : "Sonstiges",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "phone",
      "display" : "Phone",
      "target" : [{
        "code" : "Telefon",
        "display" : "Telefon",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://hl7.org/fhir/contact-point-system",
    "sourceVersion" : "4.0.1",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_ContactPointSystem_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "email",
      "display" : "Email",
      "target" : [{
        "code" : "EMail",
        "display" : "E-Mail",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "other",
      "display" : "Other",
      "target" : [{
        "code" : "Sonstiges",
        "display" : "Sonstiges",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "phone",
      "display" : "Phone",
      "target" : [{
        "code" : "Telefon",
        "display" : "Telefon",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://terminology.hl7.org/CodeSystem/data-absent-reason",
    "sourceVersion" : "4.0.1",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_DataAbsentReason_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "as-text",
      "display" : "As Text",
      "target" : [{
        "code" : "AlsText",
        "display" : "Als Text",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "asked-declined",
      "display" : "Asked But Declined",
      "target" : [{
        "code" : "Gefragtaberabgelehnt",
        "display" : "Gefragt, aber abgelehnt",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "asked-unknown",
      "display" : "Asked But Unknown",
      "target" : [{
        "code" : "Gefragtabernichtbekannt",
        "display" : "Gefragt, aber nicht bekannt",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "error",
      "display" : "Error",
      "target" : [{
        "code" : "Fehler",
        "display" : "Fehler",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "masked",
      "display" : "Masked",
      "target" : [{
        "code" : "Verdeckt",
        "display" : "Verdeckt",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "negative-infinity",
      "display" : "Negative Infinity (NINF)",
      "target" : [{
        "code" : "NegativeUnendlichkeit",
        "display" : "Negative Unendlichkeit",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "not-a-number",
      "display" : "Not a Number (NaN)",
      "target" : [{
        "code" : "KeineZahlNaN",
        "display" : "Keine Zahl (NaN)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "not-applicable",
      "display" : "Not Applicable",
      "target" : [{
        "code" : "Nichtzutreffend",
        "display" : "Nicht zutreffend",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "not-asked",
      "display" : "Not Asked",
      "target" : [{
        "code" : "Nichtangefragt",
        "display" : "Nicht angefragt",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "not-performed",
      "display" : "Not Performed",
      "target" : [{
        "code" : "Wirdnichtausgefuehrt",
        "display" : "Wird nicht ausgeführt",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "not-permitted",
      "display" : "Not Permitted",
      "target" : [{
        "code" : "Unzulaessig",
        "display" : "Unzulässig",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "positive-infinity",
      "display" : "Positive Infinity (PINF)",
      "target" : [{
        "code" : "PositiveUnendlichkeit",
        "display" : "Positive Unendlichkeit",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "temp-unknown",
      "display" : "Temporarily Unknown",
      "target" : [{
        "code" : "Derzeitunbekannt",
        "display" : "Derzeit unbekannt",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "unknown",
      "display" : "Unknown",
      "target" : [{
        "code" : "Unbekannt",
        "display" : "Unbekannt",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "unsupported",
      "display" : "Unsupported",
      "target" : [{
        "code" : "Nichtunterstuetzt",
        "display" : "Nicht unterstützt",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://terminology.hl7.org/CodeSystem/data-absent-reason",
    "sourceVersion" : "4.0.1",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Data_Absent_Reason_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "not-applicable",
      "display" : "Not Applicable",
      "target" : [{
        "code" : "Nichtzutreffend",
        "display" : "Nicht zutreffend",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "unknown",
      "display" : "Unknown",
      "target" : [{
        "code" : "Unbekannt",
        "display" : "Unbekannt",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://hl7.org/fhir/device-nametype",
    "sourceVersion" : "4.0.1",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_DeviceNameType_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "manufacturer-name",
      "display" : "Manufacturer name",
      "target" : [{
        "code" : "Herstellername",
        "display" : "Herstellername",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "model-name",
      "display" : "Model name",
      "target" : [{
        "code" : "Modellname",
        "display" : "Modellname",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "other",
      "display" : "other",
      "target" : [{
        "code" : "Sonstige",
        "display" : "Sonstige",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "patient-reported-name",
      "display" : "Patient Reported name",
      "target" : [{
        "code" : "PatientInberichteterName",
        "display" : "PatientInberichteter Name",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "udi-label-name",
      "display" : "UDI Label name",
      "target" : [{
        "code" : "UDIKennzeichnungsname",
        "display" : "UDI Kennzeichnungsname",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "user-friendly-name",
      "display" : "User Friendly name",
      "target" : [{
        "code" : "BenutzerfreundlicherName",
        "display" : "Benutzerfreundlicher Name",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://hl7.org/fhir/diagnostic-report-status",
    "sourceVersion" : "4.0.1",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Diagnostic_ReportStatus_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "amended",
      "display" : "Amended",
      "target" : [{
        "code" : "Geaendert",
        "display" : "Geändert",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "appended",
      "display" : "Appended",
      "target" : [{
        "code" : "Angefuegt",
        "display" : "Angefügt",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "cancelled",
      "display" : "Cancelled",
      "target" : [{
        "code" : "Storniert",
        "display" : "Storniert",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "corrected",
      "display" : "Corrected",
      "target" : [{
        "code" : "Korrigiert",
        "display" : "Korrigiert",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "entered-in-error",
      "display" : "Entered in Error",
      "target" : [{
        "code" : "IrrtuemlicheEingabe",
        "display" : "Irrtümliche Eingabe",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "final",
      "display" : "Final",
      "target" : [{
        "code" : "Abgeschlossen",
        "display" : "Abgeschlossen",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "partial",
      "display" : "Partial",
      "target" : [{
        "code" : "Nichtvollstaendig",
        "display" : "Nicht vollständig",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "preliminary",
      "display" : "Preliminary",
      "target" : [{
        "code" : "Vorlaeufig",
        "display" : "Vorläufig",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "registered",
      "display" : "Registered",
      "target" : [{
        "code" : "Registriert",
        "display" : "Registriert",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://terminology.hl7.org/CodeSystem/sex-parameter-for-clinical-use",
    "sourceVersion" : "2.0.0",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_EHDSIReferenceRangeAppliesTo_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "female-typical",
      "display" : "Apply female-typical setting or reference range",
      "target" : [{
        "code" : "Klinischweiblich",
        "display" : "Klinisch weiblich",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "male-typical",
      "display" : "Apply male-typical setting or reference range",
      "target" : [{
        "code" : "Klinischmaennlich",
        "display" : "Klinisch männlich",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://snomed.info/sct",
    "sourceVersion" : "http://snomed.info/sct/11000274103/version/20251115",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Extracorporal_Device_SNOMED_CT_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "257296003",
      "display" : "Fixator",
      "target" : [{
        "code" : "Fixateur",
        "display" : "Fixateur",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "30968007",
      "display" : "Drainage bag",
      "target" : [{
        "code" : "DrainageBeutel",
        "display" : "Drainage-Beutel",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "407744008",
      "display" : "Stoma appliance",
      "target" : [{
        "code" : "StomaVorrichtung",
        "display" : "Stoma-Vorrichtung",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "408861001",
      "display" : "Wound drainage bag",
      "target" : [{
        "code" : "WunddrainageBeutel",
        "display" : "Wunddrainage-Beutel",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "41323003",
      "display" : "Urinary collection bag",
      "target" : [{
        "code" : "UrinSammelbeutel",
        "display" : "Urin-Sammelbeutel",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "464557001",
      "display" : "Parenteral/enteral solution bag",
      "target" : [{
        "code" : "BeutelzurparenteralenenteralenErnaehrung",
        "display" : "Beutel zur parenteralen/enteralen Ernährung",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "701750003",
      "display" : "Subcutaneous glucose sensor",
      "target" : [{
        "code" : "SubkutanerGlukosesensor",
        "display" : "Subkutaner Glukosesensor",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "704902005",
      "display" : "Colostomy irrigation bag",
      "target" : [{
        "code" : "KolostomieSpuelbeutel",
        "display" : "Kolostomie-Spülbeutel",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "706499002",
      "display" : "Wearable urine collection bag",
      "target" : [{
        "code" : "TragbarerUrinSammelbeutel",
        "display" : "Tragbarer Urin-Sammelbeutel",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "721001006",
      "display" : "Gastric drainage/decompression bag",
      "target" : [{
        "code" : "MagendrainageBeutel",
        "display" : "Magendrainage-Beutel",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "736867000",
      "display" : "Wound drainage bag, sterile",
      "target" : [{
        "code" : "SterilerWunddrainageBeutel",
        "display" : "Steriler Wunddrainage-Beutel",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "8407004",
      "display" : "Bile collection bag",
      "target" : [{
        "code" : "GallendrainageBeutel",
        "display" : "Gallendrainage-Beutel",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://terminology.hl7.org/CodeSystem/v2-0916",
    "sourceVersion" : "2.0.0",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Hl7VSRelevantClincialInformation_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "F",
      "display" : "Patient was fasting prior to the procedure.",
      "target" : [{
        "code" : "Nuechtern",
        "display" : "Nüchtern",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "FNA",
      "display" : "Fasting not asked of the patient at time of procedure.",
      "target" : [{
        "code" : "AufforderungzurNuechternheitnichterfolgt",
        "display" : "Aufforderung zur Nüchternheit nicht erfolgt",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "NF",
      "display" : "The patient indicated they did not fast prior to the procedure.",
      "target" : [{
        "code" : "Nichtnuechtern",
        "display" : "Nicht nüchtern",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "NG",
      "display" : "Not Given - Patient was not asked at the time of the procedure.",
      "target" : [{
        "code" : "Nuechternstatusnichtabgefragt",
        "display" : "Nüchternstatus nicht abgefragt",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://terminology.hl7.org/CodeSystem/v2-0203",
    "sourceVersion" : "5.0.0",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Identifier_Type_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "ACSN",
      "display" : "Accession ID",
      "target" : [{
        "code" : "EingangsID",
        "display" : "Eingangs-ID",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "BSNR",
      "display" : "Primary physician office number",
      "target" : [{
        "code" : "Betriebsstaettennummer",
        "display" : "Betriebsstättennummer",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "FILL",
      "display" : "Filler Identifier",
      "target" : [{
        "code" : "IdentifikatordesAuftragnehmers",
        "display" : "Identifikator des Auftragnehmers",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "LACSN",
      "display" : "Laboratory Accession ID",
      "target" : [{
        "code" : "LaborzugangsID",
        "display" : "Laborzugangs-ID",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "MCN",
      "display" : "Microchip Number",
      "target" : [{
        "code" : "MikrochipNummer",
        "display" : "Mikrochip-Nummer",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "PLAC",
      "display" : "Placer Identifier",
      "target" : [{
        "code" : "IdentifikatordesAuftraggebers",
        "display" : "Identifikator des Auftraggebers",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "SID",
      "display" : "Specimen ID",
      "target" : [{
        "code" : "ProbenID",
        "display" : "Proben-ID",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "SNO",
      "display" : "Serial Number",
      "target" : [{
        "code" : "Seriennummer",
        "display" : "Seriennummer",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "USID",
      "display" : "Unique Specimen ID",
      "target" : [{
        "code" : "EindeutigeProbenID",
        "display" : "Eindeutige Proben-ID",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://snomed.info/sct",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_LabSpecimenAdditiveEu_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "115281000146102",
      "display" : "Sodium formate",
      "target" : [{
        "code" : "Natriumformiat",
        "display" : "Natriumformiat",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "1256100007",
      "display" : "Edetate dipotassium",
      "target" : [{
        "code" : "Dipotassiumedetat",
        "display" : "Dipotassiumedetat",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "1256101006",
      "display" : "Edetate tripotassium",
      "target" : [{
        "code" : "Kaliumtriphosphat",
        "display" : "Kaliumtriphosphat",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "1256102004",
      "display" : "Heparin lithium",
      "target" : [{
        "code" : "Lithiumheparin",
        "display" : "Lithiumheparin",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "1259913003",
      "display" : "Heparin ammonium",
      "target" : [{
        "code" : "HeparinAmmonium",
        "display" : "Heparin-Ammonium",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "21611007",
      "display" : "Boric acid",
      "target" : [{
        "code" : "Borsaeure",
        "display" : "Borsäure",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "27763000",
      "display" : "Hydrochloric acid",
      "target" : [{
        "code" : "Salzsaeure",
        "display" : "Salzsäure",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "29725000",
      "display" : "Heparin calcium",
      "target" : [{
        "code" : "HeparinCalcium",
        "display" : "Heparin-Calcium",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "30531001",
      "display" : "Calcium oxalate",
      "target" : [{
        "code" : "Calciumoxalat",
        "display" : "Calciumoxalat",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "372628006",
      "display" : "Edetate",
      "target" : [{
        "code" : "Ethylendiamintetraessigsaeure",
        "display" : "Ethylendiamintetraessigsäure",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "387418006",
      "display" : "Edetate disodium",
      "target" : [{
        "code" : "Dikaliumedetat",
        "display" : "Dikaliumedetat",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "50045009",
      "display" : "Heparin sodium",
      "target" : [{
        "code" : "Natriumheparin",
        "display" : "Natriumheparin",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "50306007",
      "display" : "Sodium tetraborate",
      "target" : [{
        "code" : "Natriumtetraborat",
        "display" : "Natriumtetraborat",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "6910009",
      "display" : "Sodium fluoride",
      "target" : [{
        "code" : "Natriumfluorid",
        "display" : "Natriumfluorid",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "69519002",
      "display" : "Edetic acid",
      "target" : [{
        "code" : "Edetinsaeure",
        "display" : "Edetinsäure",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://snomed.info/sct",
    "sourceVersion" : "http://snomed.info/sct/11000274103/version/20251115",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Localisation_Body_Structure_SNOMED_CT_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "255480002",
      "display" : "Left lower quadrant",
      "target" : [{
        "code" : "LinkeruntererQuadrant",
        "display" : "Linker unterer Quadrant",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "255481003",
      "display" : "Left upper quadrant",
      "target" : [{
        "code" : "LinkerobererQuadrant",
        "display" : "Linker oberer Quadrant",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "255495000",
      "display" : "Right lower quadrant",
      "target" : [{
        "code" : "RechteruntererQuadrant",
        "display" : "Rechter unterer Quadrant",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "255497008",
      "display" : "Right upper quadrant",
      "target" : [{
        "code" : "RechterobererQuadrant",
        "display" : "Rechter oberer Quadrant",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "26216008",
      "display" : "Central",
      "target" : [{
        "code" : "Zentral",
        "display" : "Zentral",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "351726001",
      "display" : "Below",
      "target" : [{
        "code" : "Unterhalb",
        "display" : "Unterhalb",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "43674008",
      "display" : "Apical",
      "target" : [{
        "code" : "Spitzenwaerts",
        "display" : "Spitzenwärts",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "66787007",
      "display" : "Cephalic",
      "target" : [{
        "code" : "Cranial",
        "display" : "Cranial",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "795002",
      "display" : "Deep",
      "target" : [{
        "code" : "Profund",
        "display" : "Profund",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
    "sourceVersion" : "2018-08-12",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Marital_Status_Codes_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "A",
      "display" : "Annulled",
      "target" : [{
        "code" : "Annuliert",
        "display" : "Annuliert",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "D",
      "display" : "Divorced",
      "target" : [{
        "code" : "Geschieden",
        "display" : "Geschieden",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "I",
      "display" : "Interlocutory",
      "target" : [{
        "code" : "Einstweilig",
        "display" : "Einstweilig",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "L",
      "display" : "Legally Separated",
      "target" : [{
        "code" : "Getrenntlebend",
        "display" : "Getrennt lebend",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "M",
      "display" : "Married",
      "target" : [{
        "code" : "Verheiratet",
        "display" : "Verheiratet",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "P",
      "display" : "Polygamous",
      "target" : [{
        "code" : "Polygam",
        "display" : "Polygam",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "S",
      "display" : "Never Married",
      "target" : [{
        "code" : "Ledig",
        "display" : "Ledig",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "T",
      "display" : "Domestic partner",
      "target" : [{
        "code" : "Lebenspartner",
        "display" : "Lebenspartner",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "U",
      "display" : "unmarried",
      "target" : [{
        "code" : "Unverheiratet",
        "display" : "Unverheiratet",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "W",
      "display" : "Widowed",
      "target" : [{
        "code" : "Verwitwet",
        "display" : "Verwitwet",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://terminology.hl7.org/CodeSystem/v3-NullFlavor",
    "sourceVersion" : "2018-08-12",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Marital_Status_Codes_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "UNK",
      "display" : "unknown",
      "target" : [{
        "code" : "Unbekannt",
        "display" : "Unbekannt",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
    "sourceVersion" : "4.0.1",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_ObservationInterpretationCodes_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "<",
      "display" : "Off scale low",
      "target" : [{
        "code" : "UnterhalbderanalytischenGrenze",
        "display" : "Unterhalb der analytischen Grenze",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : ">",
      "display" : "Off scale high",
      "target" : [{
        "code" : "OberhalbderanalytischenGrenze",
        "display" : "Oberhalb der analytischen Grenze",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "AA",
      "display" : "Critical abnormal",
      "target" : [{
        "code" : "Kritischabnormal",
        "display" : "Kritisch abnormal",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "AC",
      "display" : "Anti-complementary substances present",
      "target" : [{
        "code" : "VorhandeneantikomplementaereSubstanzen",
        "display" : "Vorhandene antikomplementäre Substanzen",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "B",
      "display" : "Better",
      "target" : [{
        "code" : "Besser",
        "display" : "Besser",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "CAR",
      "display" : "Carrier",
      "target" : [{
        "code" : "Anlagetraeger",
        "display" : "Anlageträger",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "Carrier",
      "display" : "Carrier",
      "target" : [{
        "code" : "Anlagetraeger",
        "display" : "Anlageträger",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "D",
      "display" : "Significant change down",
      "target" : [{
        "code" : "SignifikanterRueckgang",
        "display" : "Signifikanter Rückgang",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "DET",
      "display" : "Detected",
      "target" : [{
        "code" : "Nachgewiesen",
        "display" : "Nachgewiesen",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "E",
      "display" : "Equivocal",
      "target" : [{
        "code" : "Uneindeutig",
        "display" : "Uneindeutig",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "EX",
      "display" : "outside threshold",
      "target" : [{
        "code" : "InterpretationausserhalbdesGrenzwertes",
        "display" : "Interpretation außerhalb des Grenzwertes",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "EXP",
      "display" : "Expected",
      "target" : [{
        "code" : "Erwartet",
        "display" : "Erwartet",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "H",
      "display" : "High",
      "target" : [{
        "code" : "Erhoeht",
        "display" : "Erhöht",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "H>",
      "display" : "Significantly high",
      "target" : [{
        "code" : "Signifikanterhoeht",
        "display" : "Signifikant erhöht",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "HH",
      "display" : "Critical high",
      "target" : [{
        "code" : "Kritischerhoeht",
        "display" : "Kritisch erhöht",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "HM",
      "display" : "Hold for Medical Review",
      "target" : [{
        "code" : "ZurmedizinischenUeberpruefungzurueckhalten",
        "display" : "Zur medizinischen Überprüfung zurückhalten",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "HU",
      "display" : "Significantly high",
      "target" : [{
        "code" : "Signifikanterhoeht",
        "display" : "Signifikant erhöht",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "HX",
      "display" : "above high threshold",
      "target" : [{
        "code" : "OberhalbdesoberenGrenzwert",
        "display" : "Oberhalb des oberen Grenzwert",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "I",
      "display" : "Intermediate",
      "target" : [{
        "code" : "MittlereEmpfindlichkeit",
        "display" : "Mittlere Empfindlichkeit",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "IE",
      "display" : "Insufficient evidence",
      "target" : [{
        "code" : "Evidenzunzureichend",
        "display" : "Evidenz unzureichend",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "IND",
      "display" : "Indeterminate",
      "target" : [{
        "code" : "Unbestimmbar",
        "display" : "Unbestimmbar",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "L",
      "display" : "Low",
      "target" : [{
        "code" : "Erniedrigt",
        "display" : "Erniedrigt",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "L<",
      "display" : "Significantly low",
      "target" : [{
        "code" : "Signifikantniedrig",
        "display" : "Signifikant niedrig",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "LL",
      "display" : "Critical low",
      "target" : [{
        "code" : "Kritischerniedrigt",
        "display" : "Kritisch erniedrigt",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "LU",
      "display" : "Significantly low",
      "target" : [{
        "code" : "Signifikantniedrig",
        "display" : "Signifikant niedrig",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "LX",
      "display" : "below low threshold",
      "target" : [{
        "code" : "UnterhalbdesunterenGrenzwert",
        "display" : "Unterhalb des unteren Grenzwert",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "MS",
      "display" : "moderately susceptible",
      "target" : [{
        "code" : "MittlereEmpfindlichkeit",
        "display" : "Mittlere Empfindlichkeit",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "NCL",
      "display" : "No CLSI defined breakpoint",
      "target" : [{
        "code" : "KeinCLSIdefinierterSchwellenwertfuerEmpfindlichkeitverfuegbar",
        "display" : "Kein CLSI definierter Schwellenwert  für Empfindlichkeit verfügbar",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "ND",
      "display" : "Not detected",
      "target" : [{
        "code" : "Nichtnachgewiesen",
        "display" : "Nicht nachgewiesen",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "NEG",
      "display" : "Negative",
      "target" : [{
        "code" : "Negativ",
        "display" : "Negativ",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "NR",
      "display" : "Non-reactive",
      "target" : [{
        "code" : "Nichtreaktiv",
        "display" : "Nicht reaktiv",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "NS",
      "display" : "Non-susceptible",
      "target" : [{
        "code" : "Nichtempfindlich",
        "display" : "Nicht empfindlich",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "OBX",
      "display" : "Interpretation qualifiers in separate OBX segments",
      "target" : [{
        "code" : "DolmetscherkennzeicheninseparatenOBXSegmenten",
        "display" : "Dolmetscherkennzeichen in separaten OBX-Segmenten",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "ObservationInterpretationDetection",
      "display" : "ObservationInterpretationDetection",
      "target" : [{
        "code" : "Feststellungsinterpretation",
        "display" : "Feststellungsinterpretation",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "ObservationInterpretationExpectation",
      "display" : "ObservationInterpretationExpectation",
      "target" : [{
        "code" : "Erwartungsinterpretation",
        "display" : "Erwartungsinterpretation",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "POS",
      "display" : "Positive",
      "target" : [{
        "code" : "Positiv",
        "display" : "Positiv",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "QCF",
      "display" : "Quality control failure",
      "target" : [{
        "code" : "VersagenderQualitaetskontrolle",
        "display" : "Versagen der Qualitätskontrolle",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "R",
      "display" : "Resistant",
      "target" : [{
        "code" : "Resistent",
        "display" : "Resistent",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "RR",
      "display" : "Reactive",
      "target" : [{
        "code" : "Reaktiv",
        "display" : "Reaktiv",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "ReactivityObservationInterpretation",
      "display" : "ReactivityObservationInterpretation",
      "target" : [{
        "code" : "Reaktivitaetsinterpretation",
        "display" : "Reaktivitätsinterpretation",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "S",
      "display" : "Susceptible",
      "target" : [{
        "code" : "Empfindlich",
        "display" : "Empfindlich",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "SDD",
      "display" : "Susceptible-dose dependent",
      "target" : [{
        "code" : "DosisKonzentrationsabhaengigeEmpfindlichkeit",
        "display" : "Dosis-/Konzentrationsabhängige Empfindlichkeit",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "SYN-R",
      "display" : "Synergy - resistant",
      "target" : [{
        "code" : "ResistentgegenueberSubstanzkombination",
        "display" : "Resistent gegenüber Substanzkombination",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "SYN-S",
      "display" : "Synergy - susceptible",
      "target" : [{
        "code" : "EmpfindlichgegenueberSubstanzkombination",
        "display" : "Empfindlich gegenüber Substanzkombination",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TOX",
      "display" : "Cytotoxic substance present",
      "target" : [{
        "code" : "ZytotoxischeSubstanzvorhanden",
        "display" : "Zytotoxische Substanz vorhanden",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "U",
      "display" : "Significant change up",
      "target" : [{
        "code" : "SignifikanterAnstieg",
        "display" : "Signifikanter Anstieg",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "UNE",
      "display" : "Unexpected",
      "target" : [{
        "code" : "Unerwartet",
        "display" : "Unerwartet",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "VS",
      "display" : "very susceptible",
      "target" : [{
        "code" : "Sehrempfindlich",
        "display" : "Sehr empfindlich",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "W",
      "display" : "Worse",
      "target" : [{
        "code" : "Schlechter",
        "display" : "Schlechter",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "WR",
      "display" : "Weakly reactive",
      "target" : [{
        "code" : "Schwachreaktiv",
        "display" : "Schwach reaktiv",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "_GeneticObservationInterpretation",
      "display" : "GeneticObservationInterpretation",
      "target" : [{
        "code" : "InterpretationdergenetischenAnalyse",
        "display" : "Interpretation der genetischen Analyse",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "_ObservationInterpretationChange",
      "display" : "ObservationInterpretationChange",
      "target" : [{
        "code" : "Aenderungsverlauf",
        "display" : "Änderungsverlauf",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "_ObservationInterpretationExceptions",
      "display" : "ObservationInterpretationExceptions",
      "target" : [{
        "code" : "Ausnahmewertinterpretation",
        "display" : "Ausnahmewertinterpretation",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "_ObservationInterpretationNormality",
      "display" : "ObservationInterpretationNormality",
      "target" : [{
        "code" : "Normalitaetsinterpretation",
        "display" : "Normalitätsinterpretation",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "_ObservationInterpretationSusceptibility",
      "display" : "ObservationInterpretationSusceptibility",
      "target" : [{
        "code" : "InterpretationderantimikrobiellenResistenztestung",
        "display" : "Interpretation der antimikrobiellen Resistenztestung",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
    "sourceVersion" : "4.0.1",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_ObservationInterpretationCodes_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "<",
      "display" : "Off scale low",
      "target" : [{
        "code" : "UnterhalbderanalytischenGrenze",
        "display" : "Unterhalb der analytischen Grenze",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : ">",
      "display" : "Off scale high",
      "target" : [{
        "code" : "OberhalbderanalytischenGrenze",
        "display" : "Oberhalb der analytischen Grenze",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "AA",
      "display" : "Critical abnormal",
      "target" : [{
        "code" : "Kritischabnormal",
        "display" : "Kritisch abnormal",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "AC",
      "display" : "Anti-complementary substances present",
      "target" : [{
        "code" : "VorhandeneantikomplementaereSubstanzen",
        "display" : "Vorhandene antikomplementäre Substanzen",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "B",
      "display" : "Better",
      "target" : [{
        "code" : "Besser",
        "display" : "Besser",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "CAR",
      "display" : "Carrier",
      "target" : [{
        "code" : "Anlagetraeger",
        "display" : "Anlageträger",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "Carrier",
      "display" : "Carrier",
      "target" : [{
        "code" : "Anlagetraeger",
        "display" : "Anlageträger",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "D",
      "display" : "Significant change down",
      "target" : [{
        "code" : "SignifikanterRueckgang",
        "display" : "Signifikanter Rückgang",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "DET",
      "display" : "Detected",
      "target" : [{
        "code" : "Nachgewiesen",
        "display" : "Nachgewiesen",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "E",
      "display" : "Equivocal",
      "target" : [{
        "code" : "Uneindeutig",
        "display" : "Uneindeutig",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "EX",
      "display" : "outside threshold",
      "target" : [{
        "code" : "InterpretationausserhalbdesGrenzwertes",
        "display" : "Interpretation außerhalb des Grenzwertes",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "EXP",
      "display" : "Expected",
      "target" : [{
        "code" : "Erwartet",
        "display" : "Erwartet",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "H",
      "display" : "High",
      "target" : [{
        "code" : "Erhoeht",
        "display" : "Erhöht",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "H>",
      "display" : "Significantly high",
      "target" : [{
        "code" : "Signifikanterhoeht",
        "display" : "Signifikant erhöht",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "HH",
      "display" : "Critical high",
      "target" : [{
        "code" : "Kritischerhoeht",
        "display" : "Kritisch erhöht",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "HM",
      "display" : "Hold for Medical Review",
      "target" : [{
        "code" : "ZurmedizinischenUeberpruefungzurueckhalten",
        "display" : "Zur medizinischen Überprüfung zurückhalten",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "HU",
      "display" : "Significantly high",
      "target" : [{
        "code" : "Signifikanterhoeht",
        "display" : "Signifikant erhöht",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "HX",
      "display" : "above high threshold",
      "target" : [{
        "code" : "OberhalbdesoberenGrenzwert",
        "display" : "Oberhalb des oberen Grenzwert",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "I",
      "display" : "Intermediate",
      "target" : [{
        "code" : "MittlereEmpfindlichkeit",
        "display" : "Mittlere Empfindlichkeit",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "IE",
      "display" : "Insufficient evidence",
      "target" : [{
        "code" : "Evidenzunzureichend",
        "display" : "Evidenz unzureichend",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "IND",
      "display" : "Indeterminate",
      "target" : [{
        "code" : "Unbestimmbar",
        "display" : "Unbestimmbar",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "L",
      "display" : "Low",
      "target" : [{
        "code" : "Erniedrigt",
        "display" : "Erniedrigt",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "L<",
      "display" : "Significantly low",
      "target" : [{
        "code" : "Signifikantniedrig",
        "display" : "Signifikant niedrig",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "LL",
      "display" : "Critical low",
      "target" : [{
        "code" : "Kritischerniedrigt",
        "display" : "Kritisch erniedrigt",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "LU",
      "display" : "Significantly low",
      "target" : [{
        "code" : "Signifikantniedrig",
        "display" : "Signifikant niedrig",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "LX",
      "display" : "below low threshold",
      "target" : [{
        "code" : "UnterhalbdesunterenGrenzwert",
        "display" : "Unterhalb des unteren Grenzwert",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "MS",
      "display" : "moderately susceptible",
      "target" : [{
        "code" : "MittlereEmpfindlichkeit",
        "display" : "Mittlere Empfindlichkeit",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "NCL",
      "display" : "No CLSI defined breakpoint",
      "target" : [{
        "code" : "KeinCLSIdefinierterSchwellenwertfuerEmpfindlichkeitverfuegbar",
        "display" : "Kein CLSI definierter Schwellenwert  für Empfindlichkeit verfügbar",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "ND",
      "display" : "Not detected",
      "target" : [{
        "code" : "Nichtnachgewiesen",
        "display" : "Nicht nachgewiesen",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "NEG",
      "display" : "Negative",
      "target" : [{
        "code" : "Negativ",
        "display" : "Negativ",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "NR",
      "display" : "Non-reactive",
      "target" : [{
        "code" : "Nichtreaktiv",
        "display" : "Nicht reaktiv",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "NS",
      "display" : "Non-susceptible",
      "target" : [{
        "code" : "Nichtempfindlich",
        "display" : "Nicht empfindlich",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "OBX",
      "display" : "Interpretation qualifiers in separate OBX segments",
      "target" : [{
        "code" : "DolmetscherkennzeicheninseparatenOBXSegmenten",
        "display" : "Dolmetscherkennzeichen in separaten OBX-Segmenten",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "ObservationInterpretationDetection",
      "display" : "ObservationInterpretationDetection",
      "target" : [{
        "code" : "Feststellungsinterpretation",
        "display" : "Feststellungsinterpretation",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "ObservationInterpretationExpectation",
      "display" : "ObservationInterpretationExpectation",
      "target" : [{
        "code" : "Erwartungsinterpretation",
        "display" : "Erwartungsinterpretation",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "POS",
      "display" : "Positive",
      "target" : [{
        "code" : "Positiv",
        "display" : "Positiv",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "QCF",
      "display" : "Quality control failure",
      "target" : [{
        "code" : "VersagenderQualitaetskontrolle",
        "display" : "Versagen der Qualitätskontrolle",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "R",
      "display" : "Resistant",
      "target" : [{
        "code" : "Resistent",
        "display" : "Resistent",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "RR",
      "display" : "Reactive",
      "target" : [{
        "code" : "Reaktiv",
        "display" : "Reaktiv",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "ReactivityObservationInterpretation",
      "display" : "ReactivityObservationInterpretation",
      "target" : [{
        "code" : "Reaktivitaetsinterpretation",
        "display" : "Reaktivitätsinterpretation",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "S",
      "display" : "Susceptible",
      "target" : [{
        "code" : "Empfindlich",
        "display" : "Empfindlich",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "SDD",
      "display" : "Susceptible-dose dependent",
      "target" : [{
        "code" : "DosisKonzentrationsabhaengigeEmpfindlichkeit",
        "display" : "Dosis-/Konzentrationsabhängige Empfindlichkeit",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "SYN-R",
      "display" : "Synergy - resistant",
      "target" : [{
        "code" : "ResistentgegenueberSubstanzkombination",
        "display" : "Resistent gegenüber Substanzkombination",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "SYN-S",
      "display" : "Synergy - susceptible",
      "target" : [{
        "code" : "EmpfindlichgegenueberSubstanzkombination",
        "display" : "Empfindlich gegenüber Substanzkombination",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TOX",
      "display" : "Cytotoxic substance present",
      "target" : [{
        "code" : "ZytotoxischeSubstanzvorhanden",
        "display" : "Zytotoxische Substanz vorhanden",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "U",
      "display" : "Significant change up",
      "target" : [{
        "code" : "SignifikanterAnstieg",
        "display" : "Signifikanter Anstieg",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "UNE",
      "display" : "Unexpected",
      "target" : [{
        "code" : "Unerwartet",
        "display" : "Unerwartet",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "VS",
      "display" : "very susceptible",
      "target" : [{
        "code" : "Sehrempfindlich",
        "display" : "Sehr empfindlich",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "W",
      "display" : "Worse",
      "target" : [{
        "code" : "Schlechter",
        "display" : "Schlechter",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "WR",
      "display" : "Weakly reactive",
      "target" : [{
        "code" : "Schwachreaktiv",
        "display" : "Schwach reaktiv",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "_GeneticObservationInterpretation",
      "display" : "GeneticObservationInterpretation",
      "target" : [{
        "code" : "InterpretationdergenetischenAnalyse",
        "display" : "Interpretation der genetischen Analyse",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "_ObservationInterpretationChange",
      "display" : "ObservationInterpretationChange",
      "target" : [{
        "code" : "Aenderungsverlauf",
        "display" : "Änderungsverlauf",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "_ObservationInterpretationExceptions",
      "display" : "ObservationInterpretationExceptions",
      "target" : [{
        "code" : "Ausnahmewertinterpretation",
        "display" : "Ausnahmewertinterpretation",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "_ObservationInterpretationNormality",
      "display" : "ObservationInterpretationNormality",
      "target" : [{
        "code" : "Normalitaetsinterpretation",
        "display" : "Normalitätsinterpretation",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "_ObservationInterpretationSusceptibility",
      "display" : "ObservationInterpretationSusceptibility",
      "target" : [{
        "code" : "InterpretationderantimikrobiellenResistenztestung",
        "display" : "Interpretation der antimikrobiellen Resistenztestung",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
    "sourceVersion" : "4.0.1",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_ObservationReferenceRangeMeaningCodes_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "endocrine",
      "display" : "Endocrine",
      "target" : [{
        "code" : "Endokrinologischadaptiert",
        "display" : "Endokrinologisch adaptiert",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "follicular",
      "display" : "Follicular Stage",
      "target" : [{
        "code" : "ErwartungsbereichimfollikulaerenStadium",
        "display" : "Erwartungsbereich im follikulären Stadium",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "luteal",
      "display" : "Luteal",
      "target" : [{
        "code" : "ErwartungsbereichinderlutealenPhase",
        "display" : "Erwartungsbereich in der lutealen Phase",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "midcycle",
      "display" : "MidCycle",
      "target" : [{
        "code" : "ErwartungsbereichinderZyklusmitte",
        "display" : "Erwartungsbereich in der Zyklusmitte",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "normal",
      "display" : "Normal Range",
      "target" : [{
        "code" : "Referenzbereich",
        "display" : "Referenzbereich",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "post",
      "display" : "Post Therapeutic Desired Level",
      "target" : [{
        "code" : "PosttherapeutischerZielbereich",
        "display" : "Posttherapeutischer Zielbereich",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "postmenopausal",
      "display" : "Post-Menopause",
      "target" : [{
        "code" : "Erwartungsbereichpostmenopausal",
        "display" : "Erwartungsbereich postmenopausal",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "pre",
      "display" : "Pre Therapeutic Desired Level",
      "target" : [{
        "code" : "PraetherapeutischerZielbereich",
        "display" : "Prätherapeutischer Zielbereich",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "pre-puberty",
      "display" : "Pre-Puberty",
      "target" : [{
        "code" : "Erwartungsbereichpraepubertaer",
        "display" : "Erwartungsbereich präpubertär",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "recommended",
      "display" : "Recommended Range",
      "target" : [{
        "code" : "EntscheidungsgrenzeBewertungsgrenze",
        "display" : "Entscheidungsgrenze, Bewertungsgrenze",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "therapeutic",
      "display" : "Therapeutic Desired Level",
      "target" : [{
        "code" : "TherapeutischerZielbereich",
        "display" : "Therapeutischer Zielbereich",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "treatment",
      "display" : "Treatment Range",
      "target" : [{
        "code" : "TherapeutischerBereich",
        "display" : "Therapeutischer Bereich",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "type",
      "display" : "Type",
      "target" : [{
        "code" : "Generell",
        "display" : "Generell",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://hl7.org/fhir/observation-status",
    "sourceVersion" : "4.0.1",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Observation_Status_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "amended",
      "display" : "Amended",
      "target" : [{
        "code" : "Geaendert",
        "display" : "Geändert",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "cancelled",
      "display" : "Cancelled",
      "target" : [{
        "code" : "Storniert",
        "display" : "Storniert",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "corrected",
      "display" : "Corrected",
      "target" : [{
        "code" : "Korrigiert",
        "display" : "Korrigiert",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "entered-in-error",
      "display" : "Entered in Error",
      "target" : [{
        "code" : "IrrtuemlicheEingabe",
        "display" : "Irrtümliche Eingabe",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "final",
      "display" : "Final",
      "target" : [{
        "code" : "Abgeschlossen",
        "display" : "Abgeschlossen",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "preliminary",
      "display" : "Preliminary",
      "target" : [{
        "code" : "Vorlaeufig",
        "display" : "Vorläufig",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "registered",
      "display" : "Registered",
      "target" : [{
        "code" : "Registriert",
        "display" : "Registriert",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://terminology.hl7.org/CodeSystem/v2-0131",
    "sourceVersion" : "2.9",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_PatientRelationshipType_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "C",
      "display" : "Emergency Contact",
      "target" : [{
        "code" : "AnsprechpartnerIninNotfaellen",
        "display" : "AnsprechpartnerIn in Notfällen",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "E",
      "display" : "Employer",
      "target" : [{
        "code" : "ArbeitgeberIn",
        "display" : "ArbeitgeberIn",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "F",
      "display" : "Federal Agency",
      "target" : [{
        "code" : "Bundesbehoerde",
        "display" : "Bundesbehörde",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "I",
      "display" : "Insurance Company",
      "target" : [{
        "code" : "Versicherung",
        "display" : "Versicherung",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "N",
      "display" : "Next-of-Kin",
      "target" : [{
        "code" : "Kontaktperson",
        "display" : "Kontaktperson",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "O",
      "display" : "Other",
      "target" : [{
        "code" : "Andere",
        "display" : "Andere",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "S",
      "display" : "State Agency",
      "target" : [{
        "code" : "Landesbehoerde",
        "display" : "Landesbehörde",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "U",
      "display" : "Unknown",
      "target" : [{
        "code" : "Unbekannt",
        "display" : "Unbekannt",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    "sourceVersion" : "2018-08-12",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_PatientRelationshipType_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "ADOPTF",
      "display" : "adoptive father",
      "target" : [{
        "code" : "Adoptivvater",
        "display" : "Adoptivvater",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "ADOPTM",
      "display" : "adoptive mother",
      "target" : [{
        "code" : "Adoptivmutter",
        "display" : "Adoptivmutter",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "ADOPTP",
      "display" : "adoptive parent",
      "target" : [{
        "code" : "Adoptivelternteil",
        "display" : "Adoptivelternteil",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "AUNT",
      "display" : "aunt",
      "target" : [{
        "code" : "Tante",
        "display" : "Tante",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "BRO",
      "display" : "brother",
      "target" : [{
        "code" : "Bruder",
        "display" : "Bruder",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "BROINLAW",
      "display" : "brother-in-law",
      "target" : [{
        "code" : "Schwager",
        "display" : "Schwager",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "CHILD",
      "display" : "child",
      "target" : [{
        "code" : "Kind",
        "display" : "Kind",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "CHLDADOPT",
      "display" : "adopted child",
      "target" : [{
        "code" : "Adoptivkind",
        "display" : "Adoptivkind",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "CHLDFOST",
      "display" : "foster child",
      "target" : [{
        "code" : "Pflegekind",
        "display" : "Pflegekind",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "CHLDINLAW",
      "display" : "child-in-law",
      "target" : [{
        "code" : "Schwiegerkind",
        "display" : "Schwiegerkind",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "COUSN",
      "display" : "cousin",
      "target" : [{
        "code" : "Cousine",
        "display" : "Cousin(e)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "DAU",
      "display" : "natural daughter",
      "target" : [{
        "code" : "LeiblicheTochter",
        "display" : "Leibliche Tochter",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "DAUADOPT",
      "display" : "adopted daughter",
      "target" : [{
        "code" : "Adoptivtochter",
        "display" : "Adoptivtochter",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "DAUC",
      "display" : "daughter",
      "target" : [{
        "code" : "Tochter",
        "display" : "Tochter",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "DAUFOST",
      "display" : "foster daughter",
      "target" : [{
        "code" : "Pflegetochter",
        "display" : "Pflegetochter",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "DAUINLAW",
      "display" : "daughter in-law",
      "target" : [{
        "code" : "Schwiegertochter",
        "display" : "Schwiegertochter",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "DOMPART",
      "display" : "domestic partner",
      "target" : [{
        "code" : "Lebenspartnerin",
        "display" : "Lebenspartner/-in",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "EXT",
      "display" : "extended family member",
      "target" : [{
        "code" : "ErweitertesFamilienmitglied",
        "display" : "Erweitertes Familienmitglied",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "FAMMEMB",
      "display" : "family member",
      "target" : [{
        "code" : "Familienmitglied",
        "display" : "Familienmitglied",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "FMRSPS",
      "display" : "former spouse",
      "target" : [{
        "code" : "EhemaligerEhepartnerIn",
        "display" : "Ehemalige(r) EhepartnerIn",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "FRND",
      "display" : "unrelated friend",
      "target" : [{
        "code" : "NichtverwandterFreundIn",
        "display" : "Nicht verwandte(r) FreundIn",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "FTH",
      "display" : "father",
      "target" : [{
        "code" : "Vater",
        "display" : "Vater",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "FTHFOST",
      "display" : "foster father",
      "target" : [{
        "code" : "Ziehvater",
        "display" : "Ziehvater",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "FTHINLAW",
      "display" : "father-in-law",
      "target" : [{
        "code" : "Schwiegervater",
        "display" : "Schwiegervater",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "FTWIN",
      "display" : "fraternal twin",
      "target" : [{
        "code" : "ZweieiigerZwilling",
        "display" : "Zweieiiger Zwilling",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "FTWINBRO",
      "display" : "fraternal twin brother",
      "target" : [{
        "code" : "zweieiigerZwillingsbruder",
        "display" : "zweieiiger Zwillingsbruder",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "FTWINSIS",
      "display" : "fraternal twin sister",
      "target" : [{
        "code" : "ZweieiigeZwillingsschwester",
        "display" : "Zweieiige Zwillingsschwester",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "GESTM",
      "display" : "gestational mother",
      "target" : [{
        "code" : "werdendeMutter",
        "display" : "werdende Mutter",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "GGRFTH",
      "display" : "great grandfather",
      "target" : [{
        "code" : "Urgrossvater",
        "display" : "Urgroßvater",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "GGRMTH",
      "display" : "great grandmother",
      "target" : [{
        "code" : "Urgrossmutter",
        "display" : "Urgroßmutter",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "GGRPRN",
      "display" : "great grandparent",
      "target" : [{
        "code" : "Urgrosseltern",
        "display" : "Urgroßeltern",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "GRFTH",
      "display" : "grandfather",
      "target" : [{
        "code" : "Grossvater",
        "display" : "Großvater",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "GRMTH",
      "display" : "grandmother",
      "target" : [{
        "code" : "Grossmutter",
        "display" : "Großmutter",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "GRNDCHILD",
      "display" : "grandchild",
      "target" : [{
        "code" : "Enkelkind",
        "display" : "Enkelkind",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "GRNDDAU",
      "display" : "granddaughter",
      "target" : [{
        "code" : "Enkeltochter",
        "display" : "Enkeltochter",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "GRNDSON",
      "display" : "grandson",
      "target" : [{
        "code" : "Enkelsohn",
        "display" : "Enkelsohn",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "GRPRN",
      "display" : "grandparent",
      "target" : [{
        "code" : "Grosseltern",
        "display" : "Großeltern",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "HBRO",
      "display" : "half-brother",
      "target" : [{
        "code" : "Halbbruder",
        "display" : "Halbbruder",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "HSIB",
      "display" : "half-sibling",
      "target" : [{
        "code" : "Halbgeschwister",
        "display" : "Halbgeschwister",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "HSIS",
      "display" : "half-sister",
      "target" : [{
        "code" : "Halbschwester",
        "display" : "Halbschwester",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "HUSB",
      "display" : "husband",
      "target" : [{
        "code" : "Ehemann",
        "display" : "Ehemann",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "INLAW",
      "display" : "inlaw",
      "target" : [{
        "code" : "Schwiegerperson",
        "display" : "Schwiegerperson",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "ITWIN",
      "display" : "identical twin",
      "target" : [{
        "code" : "EineiigerZwilling",
        "display" : "Eineiiger Zwilling",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "ITWINBRO",
      "display" : "identical twin brother",
      "target" : [{
        "code" : "EineiigerZwillingsbruder",
        "display" : "Eineiiger Zwillingsbruder",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "ITWINSIS",
      "display" : "identical twin sister",
      "target" : [{
        "code" : "EineiigeZwillingsschwester",
        "display" : "Eineiige Zwillingsschwester",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "MAUNT",
      "display" : "maternal aunt",
      "target" : [{
        "code" : "Tantemuetterlicherseits",
        "display" : "Tante mütterlicherseits",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "MCOUSN",
      "display" : "maternal cousin",
      "target" : [{
        "code" : "Cousinmuetterlicherseits",
        "display" : "Cousin mütterlicherseits",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "MGGRFTH",
      "display" : "maternal great-grandfather",
      "target" : [{
        "code" : "Urgrossvatermuetterlicherseits",
        "display" : "Urgroßvater mütterlicherseits",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "MGGRMTH",
      "display" : "maternal great-grandmother",
      "target" : [{
        "code" : "Urgrossmuttermuetterlicherseits",
        "display" : "Urgroßmutter mütterlicherseits",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "MGGRPRN",
      "display" : "maternal great-grandparent",
      "target" : [{
        "code" : "Urgrosselternmuetterlicherseits",
        "display" : "Urgroßeltern mütterlicherseits",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "MGRFTH",
      "display" : "maternal grandfather",
      "target" : [{
        "code" : "Grossvatermuetterlicherseits",
        "display" : "Großvater mütterlicherseits",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "MGRMTH",
      "display" : "maternal grandmother",
      "target" : [{
        "code" : "Grossmuttermuetterlicherseits",
        "display" : "Großmutter mütterlicherseits",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "MGRPRN",
      "display" : "maternal grandparent",
      "target" : [{
        "code" : "Grosselternmuetterlicherseits",
        "display" : "Großeltern mütterlicherseits",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "MTH",
      "display" : "mother",
      "target" : [{
        "code" : "Mutter",
        "display" : "Mutter",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "MTHFOST",
      "display" : "foster mother",
      "target" : [{
        "code" : "Pflegemutter",
        "display" : "Pflegemutter",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "MTHINLAW",
      "display" : "mother-in-law",
      "target" : [{
        "code" : "Schwiegermutter",
        "display" : "Schwiegermutter",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "MUNCLE",
      "display" : "maternal uncle",
      "target" : [{
        "code" : "Onkelmuetterlicherseits",
        "display" : "Onkel mütterlicherseits",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "NBOR",
      "display" : "neighbor",
      "target" : [{
        "code" : "NachbarIn",
        "display" : "NachbarIn",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "NBRO",
      "display" : "natural brother",
      "target" : [{
        "code" : "LeiblicherBruder",
        "display" : "Leiblicher Bruder",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "NCHILD",
      "display" : "natural child",
      "target" : [{
        "code" : "LeiblichesKind",
        "display" : "Leibliches Kind",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "NEPHEW",
      "display" : "nephew",
      "target" : [{
        "code" : "Neffe",
        "display" : "Neffe",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "NFTH",
      "display" : "natural father",
      "target" : [{
        "code" : "LeiblicherVater",
        "display" : "Leiblicher Vater",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "NFTHF",
      "display" : "natural father of fetus",
      "target" : [{
        "code" : "LeiblicherVaterdesFoetus",
        "display" : "Leiblicher Vater des Fötus",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "NIECE",
      "display" : "niece",
      "target" : [{
        "code" : "Nichte",
        "display" : "Nichte",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "NIENEPH",
      "display" : "niece/nephew",
      "target" : [{
        "code" : "NichteNeffe",
        "display" : "Nichte/Neffe",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "NMTH",
      "display" : "natural mother",
      "target" : [{
        "code" : "LeiblicheMutter",
        "display" : "Leibliche Mutter",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "NMTHF",
      "display" : "natural mother of fetus",
      "target" : [{
        "code" : "LeiblicheMutterdesFoetus",
        "display" : "Leibliche Mutter des Fötus",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "NPRN",
      "display" : "natural parent",
      "target" : [{
        "code" : "LeiblicherElternteil",
        "display" : "Leiblicher Elternteil",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "NSIB",
      "display" : "natural sibling",
      "target" : [{
        "code" : "LeiblichesGeschwisterkind",
        "display" : "Leibliches Geschwisterkind",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "NSIS",
      "display" : "natural sister",
      "target" : [{
        "code" : "LeiblicheSchwester",
        "display" : "Leibliche Schwester",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "ONESELF",
      "display" : "self",
      "target" : [{
        "code" : "Selbst",
        "display" : "Selbst",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "PAUNT",
      "display" : "paternal aunt",
      "target" : [{
        "code" : "Tantevaeterlicherseits",
        "display" : "Tante väterlicherseits",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "PCOUSN",
      "display" : "paternal cousin",
      "target" : [{
        "code" : "Cousinvaeterlicherseits",
        "display" : "Cousin väterlicherseits",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "PGGRFTH",
      "display" : "paternal great-grandfather",
      "target" : [{
        "code" : "Urgrossvatervaeterlicherseits",
        "display" : "Urgroßvater väterlicherseits",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "PGGRMTH",
      "display" : "paternal great-grandmother",
      "target" : [{
        "code" : "Urgrossmuttervaeterlicherseits",
        "display" : "Urgroßmutter väterlicherseits",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "PGGRPRN",
      "display" : "paternal great-grandparent",
      "target" : [{
        "code" : "Urgrosselternvaeterlicherseits",
        "display" : "Urgroßeltern väterlicherseits",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "PGRFTH",
      "display" : "paternal grandfather",
      "target" : [{
        "code" : "Grossvatervaeterlicherseits",
        "display" : "Großvater väterlicherseits",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "PGRMTH",
      "display" : "paternal grandmother",
      "target" : [{
        "code" : "Grossmuttervaeterlicherseits",
        "display" : "Großmutter väterlicherseits",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "PGRPRN",
      "display" : "paternal grandparent",
      "target" : [{
        "code" : "Grosselternvaeterlicherseits",
        "display" : "Großeltern väterlicherseits",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "PRN",
      "display" : "parent",
      "target" : [{
        "code" : "Elternteil",
        "display" : "Elternteil",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "PRNFOST",
      "display" : "foster parent",
      "target" : [{
        "code" : "Pflegeeltern",
        "display" : "Pflegeeltern",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "PRNINLAW",
      "display" : "parent in-law",
      "target" : [{
        "code" : "Schwiegereltern",
        "display" : "Schwiegereltern",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "PUNCLE",
      "display" : "paternal uncle",
      "target" : [{
        "code" : "Onkelvaeterlicherseits",
        "display" : "Onkel väterlicherseits",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "ROOM",
      "display" : "Roommate",
      "target" : [{
        "code" : "MitbewohnerIn",
        "display" : "MitbewohnerIn",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "SIB",
      "display" : "sibling",
      "target" : [{
        "code" : "Geschwisterteil",
        "display" : "Geschwisterteil",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "SIBINLAW",
      "display" : "sibling in-law",
      "target" : [{
        "code" : "Schwiegergeschwister",
        "display" : "Schwiegergeschwister",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "SIGOTHR",
      "display" : "significant other",
      "target" : [{
        "code" : "Lebensgefaehrtein",
        "display" : "Lebensgefährte/-in",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "SIS",
      "display" : "sister",
      "target" : [{
        "code" : "Schwester",
        "display" : "Schwester",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "SISINLAW",
      "display" : "sister-in-law",
      "target" : [{
        "code" : "Schwaegerin",
        "display" : "Schwägerin",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "SON",
      "display" : "natural son",
      "target" : [{
        "code" : "LeiblicherSohn",
        "display" : "Leiblicher Sohn",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "SONADOPT",
      "display" : "adopted son",
      "target" : [{
        "code" : "Adoptivsohn",
        "display" : "Adoptivsohn",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "SONC",
      "display" : "son",
      "target" : [{
        "code" : "Sohn",
        "display" : "Sohn",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "SONFOST",
      "display" : "foster son",
      "target" : [{
        "code" : "Pflegesohn",
        "display" : "Pflegesohn",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "SONINLAW",
      "display" : "son in-law",
      "target" : [{
        "code" : "Schwiegersohn",
        "display" : "Schwiegersohn",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "SPS",
      "display" : "spouse",
      "target" : [{
        "code" : "EhepartnerIn",
        "display" : "EhepartnerIn",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "STPBRO",
      "display" : "stepbrother",
      "target" : [{
        "code" : "Stiefbruder",
        "display" : "Stiefbruder",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "STPCHLD",
      "display" : "step child",
      "target" : [{
        "code" : "Stiefkind",
        "display" : "Stiefkind",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "STPDAU",
      "display" : "stepdaughter",
      "target" : [{
        "code" : "Stieftochter",
        "display" : "Stieftochter",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "STPFTH",
      "display" : "stepfather",
      "target" : [{
        "code" : "Stiefvater",
        "display" : "Stiefvater",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "STPMTH",
      "display" : "stepmother",
      "target" : [{
        "code" : "Stiefmutter",
        "display" : "Stiefmutter",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "STPPRN",
      "display" : "step parent",
      "target" : [{
        "code" : "Stiefelternteil",
        "display" : "Stiefelternteil",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "STPSIB",
      "display" : "step sibling",
      "target" : [{
        "code" : "Stiefgeschwister",
        "display" : "Stiefgeschwister",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "STPSIS",
      "display" : "stepsister",
      "target" : [{
        "code" : "Stiefschwester",
        "display" : "Stiefschwester",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "STPSON",
      "display" : "stepson",
      "target" : [{
        "code" : "Stiefsohn",
        "display" : "Stiefsohn",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TWIN",
      "display" : "twin",
      "target" : [{
        "code" : "Zwilling",
        "display" : "Zwilling",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TWINBRO",
      "display" : "twin brother",
      "target" : [{
        "code" : "Zwillingsbruder",
        "display" : "Zwillingsbruder",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TWINSIS",
      "display" : "twin sister",
      "target" : [{
        "code" : "Zwillingsschwester",
        "display" : "Zwillingsschwester",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "UNCLE",
      "display" : "uncle",
      "target" : [{
        "code" : "Onkel",
        "display" : "Onkel",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "WIFE",
      "display" : "wife",
      "target" : [{
        "code" : "Ehefrau",
        "display" : "Ehefrau",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
    "sourceVersion" : "2018-08-12",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Provenance_Activity_Type_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "VRF",
      "display" : "verifier",
      "target" : [{
        "code" : "MedizinischeVerifikation",
        "display" : "Medizinische Verifikation",
        "equivalence" : "narrower",
        "comment" : "Der Begriff \"Medizinische Verifikation\" grenzt den Begriff \"verifier\" aus dem ursprünglichen Codesystem noch weiter ein, sodass der Äquivalenzgrad \"enger\" ist."
      }]
    }]
  },
  {
    "source" : "http://hl7.org/fhir/quantity-comparator",
    "sourceVersion" : "4.0.1",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_QuantityComparator_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "<",
      "display" : "Less than",
      "target" : [{
        "code" : "Kleiner",
        "display" : "Kleiner",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "<=",
      "display" : "Less or Equal to",
      "target" : [{
        "code" : "Kleinerodergleich",
        "display" : "Kleiner oder gleich",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : ">",
      "display" : "Greater than",
      "target" : [{
        "code" : "Groesser",
        "display" : "Größer",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : ">=",
      "display" : "Greater or Equal to",
      "target" : [{
        "code" : "Groesserodergleich",
        "display" : "Größer oder gleich",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://hl7.org/fhir/request-priority",
    "sourceVersion" : "4.0.1",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_RequestPriority_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "asap",
      "display" : "ASAP",
      "target" : [{
        "code" : "Baldmoeglichst",
        "display" : "Baldmöglichst",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "stat",
      "display" : "STAT",
      "target" : [{
        "code" : "SofortNotfall",
        "display" : "Sofort/Notfall",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "urgent",
      "display" : "Urgent",
      "target" : [{
        "code" : "Dringend",
        "display" : "Dringend",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://terminology.hl7.org/CodeSystem/data-absent-reason",
    "sourceVersion" : "1.0.0",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_SexParameterForClinicalUse_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "unknown",
      "display" : "Unknown",
      "target" : [{
        "code" : "Unbekannt",
        "display" : "Unbekannt",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://terminology.hl7.org/CodeSystem/sex-parameter-for-clinical-use",
    "sourceVersion" : "2.0.0",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_SexParameterForClinicalUse_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "female-typical",
      "display" : "Apply female-typical setting or reference range",
      "target" : [{
        "code" : "Klinischweiblich",
        "display" : "Klinisch weiblich",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "male-typical",
      "display" : "Apply male-typical setting or reference range",
      "target" : [{
        "code" : "Klinischmaennlich",
        "display" : "Klinisch männlich",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "specified",
      "display" : "Apply specified setting or reference range",
      "target" : [{
        "code" : "Komplex",
        "display" : "Komplex",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://terminology.hl7.org/CodeSystem/v2-0373",
    "sourceVersion" : "2.0.0",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_SpecimenProcessingProcedure_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "ACID",
      "display" : "Acidification",
      "target" : [{
        "code" : "Aufsaeuerung",
        "display" : "Aufsäuerung",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "ALK",
      "display" : "Alkalization",
      "target" : [{
        "code" : "Alkalisierung",
        "display" : "Alkalisierung",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "DEFB",
      "display" : "Defibrination",
      "target" : [{
        "code" : "Defibrinierung",
        "display" : "Defibrinierung",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "LDLP",
      "display" : "LDL Precipitation",
      "target" : [{
        "code" : "LDLAusfaellung",
        "display" : "LDL-Ausfällung",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "NEUT",
      "display" : "Neutralization",
      "target" : [{
        "code" : "Neutralisierung",
        "display" : "Neutralisierung",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "RECA",
      "display" : "Recalification",
      "target" : [{
        "code" : "Rekalkifizierung",
        "display" : "Rekalkifizierung",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://hl7.org/fhir/specimen-status",
    "sourceVersion" : "4.0.1",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_SpecimenStatus_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "available",
      "display" : "Available",
      "target" : [{
        "code" : "Verfuegbar",
        "display" : "Verfügbar",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "entered-in-error",
      "display" : "Entered in Error",
      "target" : [{
        "code" : "IrrtuermlicheEingabe",
        "display" : "Irrtürmliche Eingabe",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "unavailable",
      "display" : "Unavailable",
      "target" : [{
        "code" : "Nichtverfuegbar",
        "display" : "Nicht verfügbar",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "unsatisfactory",
      "display" : "Unsatisfactory",
      "target" : [{
        "code" : "Nichtgeeignet",
        "display" : "Nicht geeignet",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://snomed.info/sct",
    "sourceVersion" : "http://snomed.info/sct/11000274103/version/20251115",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Specimen_Condition_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "373881006",
      "display" : "Unsatisfactory for evaluation due to lack of patient identification on specimen and/or requisition form",
      "target" : [{
        "code" : "FehlendePatientenidentifikation",
        "display" : "Fehlende Patientenidentifikation",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "448140007",
      "display" : "Specimen unsatisfactory for evaluation due to obscuring lubricant jelly",
      "target" : [{
        "code" : "Geliert",
        "display" : "Geliert",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "448141006",
      "display" : "Specimen unsatisfactory for evaluation due to marked cellular degeneration",
      "target" : [{
        "code" : "Zelldegeneration",
        "display" : "Zelldegeneration",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "710070002",
      "display" : "Specimen unsatisfactory for evaluation due to broken container",
      "target" : [{
        "code" : "Probenbehaelterzerbrochen",
        "display" : "Probenbehälter zerbrochen",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "712743008",
      "display" : "Specimen unsatisfactory for evaluation due to improper storage of specimen",
      "target" : [{
        "code" : "Haemolyse",
        "display" : "Hämolyse",
        "equivalence" : "narrower",
        "comment" : "Der Begriff \"Hämolyse\" grenzt den Begriff \"Specimen unsatisfactory for evaluation due to improper storage of sample\" aus dem ursprünglichen Codesystem noch weiter ein, sodass der Äquivalenzgrad \"enger\" ist."
      }]
    }]
  },
  {
    "source" : "http://terminology.hl7.org/CodeSystem/v2-0493",
    "sourceVersion" : "3.0.0",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Specimen_Condition_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "AUT",
      "display" : "Autolyzed",
      "target" : [{
        "code" : "Autolysiert",
        "display" : "Autolysiert",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "CFU",
      "display" : "Centrifuged",
      "target" : [{
        "code" : "Zentrifugiert",
        "display" : "Zentrifugiert",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "CLOT",
      "display" : "Clotted",
      "target" : [{
        "code" : "Verklumpt",
        "display" : "Verklumpt",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "CON",
      "display" : "Contaminated",
      "target" : [{
        "code" : "Kontaminiert",
        "display" : "Kontaminiert",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "COOL",
      "display" : "Cool",
      "target" : [{
        "code" : "Gekuehlt",
        "display" : "Gekühlt",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "FROZ",
      "display" : "Frozen",
      "target" : [{
        "code" : "Gefroren",
        "display" : "Gefroren",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "HEM",
      "display" : "Hemolyzed",
      "target" : [{
        "code" : "Haemolysiert",
        "display" : "Hämolysiert",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "LIVE",
      "display" : "Live",
      "target" : [{
        "code" : "Lebendig",
        "display" : "Lebendig",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "ROOM",
      "display" : "Room Temperature",
      "target" : [{
        "code" : "Raumtemperatur",
        "display" : "Raumtemperatur",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "SNR",
      "display" : "Sample not received",
      "target" : [{
        "code" : "Probenichterhalten",
        "display" : "Probe nicht erhalten",
        "equivalence" : "equivalent"
      }]
    }]
  },
  {
    "source" : "http://snomed.info/sct",
    "sourceVersion" : "http://snomed.info/sct/11000274103/version/20251115",
    "target" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Type_Diagram_German",
    "targetVersion" : "1.0.0-update",
    "element" : [{
      "code" : "1304163000",
      "display" : "Isoelectric focusing electrophoresis technique",
      "target" : [{
        "code" : "ElektrophoresemitisoelektrischerFokussierung",
        "display" : "Elektrophorese mit isoelektrischer Fokussierung",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "417965000",
      "display" : "Electrophoresis band",
      "target" : [{
        "code" : "ElektrophoreseBand",
        "display" : "Elektrophorese-Band",
        "equivalence" : "equivalent"
      }]
    }]
  }]
}

```
