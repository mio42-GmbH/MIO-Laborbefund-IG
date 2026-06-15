# KBV_PR_MIO_LAB_Observation_Laboratory_Study - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **KBV_PR_MIO_LAB_Observation_Laboratory_Study**

## Resource Profile: KBV_PR_MIO_LAB_Observation_Laboratory_Study 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Laboratory_Study | *Version*:1.0.0-update |
| Draft as of 2026-06-11 | *Computable Name*:KBV_PR_MIO_LAB_Observation_Laboratory_Study |
| **Copyright/Legal**: Im folgenden Profil können Codes aus den Code-Systemen SNOMED CT®, LOINC, Ucum, ATC, ICD-10-GM, ICD-10-WHO, OPS, Alpha-ID/Alpha-ID-SE und ICF enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED CT® Clinical Terms® (SNOMED CT® CT®) which is used by permission of SNOMED CT® International. All rights reserved. SNOMED CT® CT®, was originally created by The College of American Pathologists. SNOMED CT® and SNOMED CT® CT are registered trademarks of SNOMED CT® International. Implementers of these artefacts must have the appropriate SNOMED CT® CT Affiliate license. This material contains content from LOINC (http://LOINC.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://LOINC.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED ‘AS IS.’ ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. Dieses Material enthält Inhalte aus ATC. Die Erstellung erfolgte unter Verwendung der Datenträger der amtlichen Fassung der ATC-Klassifikation mit DDD des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICD-10-GM, ICD-10-WHO, OPS Alpha-ID ans Alpha-ID-SE. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICF. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Deutschen Instituts für Medizinische Dokumentation und Information (DIMDI). ICF-Kodes, -Begriffe und -Texte © Weltgesundheitsorganisation, übersetzt und herausgegeben durch das Deutsche Institut für Medizinische Dokumentation und Information von der International classification of functioning, disability and health - ICF, herausgegeben durch die Weltgesundheitsorganisation. | |

 
Dieses Profil bildet eine Laboruntersuchung ab. 
Laboruntersuchungen können als Messung oder als Berechnung erfolgen. 
Eine Laboruntersuchung als Messung beschreibt die quantitative oder qualitative Untersuchung eines spezifischen Laborparameters in einem definierten Probenmaterial; z. B. die Untersuchung des Hämoglobin-(Hb-)Werts als Konzentration im Blut. Der Bezug zur Probe, anhand derer die Messung vorgenommen wurde, muss erkennbar sein. 
Berechnete Laborergebnisse können auf Messungen basieren, z.B. kann die berechnete GFR (glomeruläre Filtrationsrate) auf einem gemessenen Kreatinin-Wert im Serum basieren. 

**Usages:**

* Use this Profile: [KBV_PR_MIO_LAB_Bundle](StructureDefinition-KBV-PR-MIO-LAB-Bundle.md)
* Refer to this Profile: [KBV_PR_MIO_LAB_Observation_Image_Attachment](StructureDefinition-KBV-PR-MIO-LAB-Observation-Image-Attachment.md), [KBV_PR_MIO_LAB_Observation_Laboratory_Study_Group](StructureDefinition-KBV-PR-MIO-LAB-Observation-Laboratory-Study-Group.md), [KBV_PR_MIO_LAB_Observation_Laboratory_Study](StructureDefinition-KBV-PR-MIO-LAB-Observation-Laboratory-Study.md) and [KBV_PR_MIO_LAB_Provenance](StructureDefinition-KBV-PR-MIO-LAB-Provenance.md)
* Examples for this Profile: [Observation/035761c3-8934-499f-bf34-3963979afb56](Observation-035761c3-8934-499f-bf34-3963979afb56.md), [Observation/6a2a44c6-92f8-40cf-a0bc-673404f7ac9b](Observation-6a2a44c6-92f8-40cf-a0bc-673404f7ac9b.md), [Observation/96f33ca8-872d-4c8b-972e-b681db27d9df](Observation-96f33ca8-872d-4c8b-972e-b681db27d9df.md) and [Observation/c1b00183-b205-48a8-9d07-31fc8b6aa74e](Observation-c1b00183-b205-48a8-9d07-31fc8b6aa74e.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/kbv.mio.laborbefund|current/StructureDefinition/StructureDefinition-KBV-PR-MIO-LAB-Observation-Laboratory-Study.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-KBV-PR-MIO-LAB-Observation-Laboratory-Study.csv), [Excel](StructureDefinition-KBV-PR-MIO-LAB-Observation-Laboratory-Study.xlsx), [Schematron](StructureDefinition-KBV-PR-MIO-LAB-Observation-Laboratory-Study.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "KBV-PR-MIO-LAB-Observation-Laboratory-Study",
  "url" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Laboratory_Study",
  "version" : "1.0.0-update",
  "name" : "KBV_PR_MIO_LAB_Observation_Laboratory_Study",
  "title" : "KBV_PR_MIO_LAB_Observation_Laboratory_Study",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-06-11",
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
  "description" : "Dieses Profil bildet eine Laboruntersuchung ab.\n\nLaboruntersuchungen können als Messung oder als Berechnung erfolgen.\n\nEine Laboruntersuchung als Messung beschreibt die quantitative oder qualitative Untersuchung eines spezifischen Laborparameters in einem definierten Probenmaterial; z. B. die Untersuchung des Hämoglobin-(Hb-)Werts als Konzentration im Blut. Der Bezug zur Probe, anhand derer die Messung vorgenommen wurde, muss erkennbar sein.\n\nBerechnete Laborergebnisse können auf Messungen basieren, z.B. kann die berechnete GFR (glomeruläre Filtrationsrate) auf einem gemessenen Kreatinin-Wert im Serum basieren.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "DE",
      "display" : "Germany"
    }]
  }],
  "copyright" : "Im folgenden Profil können Codes aus den Code-Systemen SNOMED CT®, LOINC, Ucum, ATC, ICD-10-GM, ICD-10-WHO, OPS, Alpha-ID/Alpha-ID-SE und ICF enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED CT® Clinical Terms® (SNOMED CT® CT®) which is used by permission of SNOMED CT® International. All rights reserved. SNOMED CT® CT®, was originally created by The College of American Pathologists. SNOMED CT® and SNOMED CT® CT are registered trademarks of SNOMED CT® International. Implementers of these artefacts must have the appropriate SNOMED CT® CT Affiliate license. This material contains content from LOINC (http://LOINC.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://LOINC.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED 'AS IS.' ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. Dieses Material enthält Inhalte aus ATC. Die Erstellung erfolgte unter Verwendung der Datenträger der amtlichen Fassung der ATC-Klassifikation mit DDD des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICD-10-GM, ICD-10-WHO, OPS Alpha-ID ans Alpha-ID-SE. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICF. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Deutschen Instituts für Medizinische Dokumentation und Information (DIMDI). ICF-Kodes, -Begriffe und -Texte © Weltgesundheitsorganisation, übersetzt und herausgegeben durch das Deutsche Institut für Medizinische Dokumentation und Information von der International classification of functioning, disability and health - ICF, herausgegeben durch die Weltgesundheitsorganisation.",
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "workflow",
    "uri" : "http://hl7.org/fhir/workflow",
    "name" : "Workflow Pattern"
  },
  {
    "identity" : "sct-concept",
    "uri" : "http://snomed.info/conceptdomain",
    "name" : "SNOMED CT Concept Domain Binding"
  },
  {
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "sct-attr",
    "uri" : "http://snomed.org/attributebinding",
    "name" : "SNOMED CT Attribute Binding"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Observation",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Observation",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Observation",
      "path" : "Observation",
      "definition" : "Dieses Profil bildet eine Laboruntersuchung ab.\n\nLaboruntersuchungen können als Messung oder als Berechnung erfolgen.\n\nEine Laboruntersuchung als Messung beschreibt die quantitative oder qualitative Untersuchung eines spezifischen Laborparameters in einem definierten Probenmaterial; z. B. die Untersuchung des Hämoglobin-(Hb-)Werts als Konzentration im Blut. Der Bezug zur Probe, anhand derer die Messung vorgenommen wurde, muss erkennbar sein.\n\nBerechnete Laborergebnisse können auf Messungen basieren, z.B. kann die berechnete GFR (glomeruläre Filtrationsrate) auf einem gemessenen Kreatinin-Wert im Serum basieren.",
      "constraint" : [{
        "key" : "obs-code-1",
        "severity" : "error",
        "human" : "For Observation.code either a coding or a data absent reason must be provided. When stating a data absent reason, a text for Observation.code must be provided as well.",
        "expression" : "code.coding.empty() or code.extension('http://hl7.org/fhir/StructureDefinition/data-absent-reason').empty() and (code.extension('http://hl7.org/fhir/StructureDefinition/data-absent-reason').exists() implies code.text.exists())",
        "source" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Laboratory_Study"
      }]
    },
    {
      "id" : "Observation.meta",
      "path" : "Observation.meta",
      "mustSupport" : true
    },
    {
      "id" : "Observation.meta.id",
      "path" : "Observation.meta.id",
      "max" : "0"
    },
    {
      "id" : "Observation.meta.versionId",
      "path" : "Observation.meta.versionId",
      "mustSupport" : true
    },
    {
      "id" : "Observation.meta.lastUpdated",
      "path" : "Observation.meta.lastUpdated",
      "mustSupport" : true
    },
    {
      "id" : "Observation.meta.source",
      "path" : "Observation.meta.source",
      "max" : "0"
    },
    {
      "id" : "Observation.implicitRules",
      "path" : "Observation.implicitRules",
      "max" : "0"
    },
    {
      "id" : "Observation.language",
      "path" : "Observation.language",
      "max" : "0"
    },
    {
      "id" : "Observation.text.status",
      "path" : "Observation.text.status",
      "patternCode" : "extensions"
    },
    {
      "id" : "Observation.contained",
      "path" : "Observation.contained",
      "max" : "0"
    },
    {
      "id" : "Observation.extension",
      "path" : "Observation.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "rules" : "closed"
      },
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:externalService",
      "path" : "Observation.extension",
      "sliceName" : "externalService",
      "short" : "Kennzeichen Fremdleistung",
      "definition" : "Dieses Kennzeichen wird gesetzt, wenn die Laboruntersuchung von einem anderen Labor durchgeführt wird.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_External_Service"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:externalService.value[x]",
      "path" : "Observation.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:associationService",
      "path" : "Observation.extension",
      "sliceName" : "associationService",
      "short" : "Kennzeichen Verbundleistung",
      "definition" : "Dieses Kennzeichen wird gesetzt, wenn die \"Fremdleistung\" von einem anderen Labor aus dem eigenen Verbund durchgeführt wird und diese Information aus administrativen Gründen zusätzlich benötigt wird.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Association_Service"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:associationService.value[x]",
      "path" : "Observation.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:accreditedService",
      "path" : "Observation.extension",
      "sliceName" : "accreditedService",
      "short" : "Kennzeichen Akkreditierte Laboruntersuchung",
      "definition" : "Diese Angabe betrifft akkreditierte Labore. Basierend auf der Akkreditierung ist gefordert, dass nicht akkreditierte Leistungen gekennzeichnet werden, auch im Laborbefund.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Accredited_Service"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:accreditedService.value[x]",
      "path" : "Observation.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:zlogValue",
      "path" : "Observation.extension",
      "sliceName" : "zlogValue",
      "definition" : "Der zlog-Wert ist ein Relativwert, der auf einer logarithmischen Skala angibt, um wie viele Standardabweichungen ein Messwert vom Mittelwert des Referenzkollektivs abweicht. Er kann ergänzend, orientierend zur Bewertung eines Messergebnisses herangezogen werden.\n\nBerechnung zlog-Wert zum Laborergebnis (x):\n\nzlog = (log(x) –(log(UG)+log(OG))/2)*3,92/(log(OG)–log(UG))\n\n(UG),(OG) sind die Unter- und Obergrenzen des Referenzintervalls\n\n\nInterpretation des zlog-Wertes:\n* Sein Referenzintervall liegt methodenunabhängig stets zwischen – 1,96 und + 1,96\n* Stark erniedrigte oder erhöhte Laborergebnisse führen zu zlog-Werten um – 5 bzw. + 5.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_zlog"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:zlogValue.value[x]",
      "path" : "Observation.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult",
      "path" : "Observation.extension",
      "sliceName" : "alternativeResult",
      "definition" : "Hier werden auf eine alternative Einheit umgerechnete Messergebnisse mitgeführt.\n\nDies betrifft das quantitative Messergebnis, sowie die Richtgrenzenwerte und die zlog-Wert-Berechnung. Aus diesem Grund sind deren Strukturen hier (noch einmal) enthalten.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Alternative_Result"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value",
      "path" : "Observation.extension.extension",
      "sliceName" : "value",
      "short" : "Messergebnis quantitativ mit Alternativeinheit",
      "definition" : "Hier wird ein Messergebnis mit Alternativeinheit angegeben.",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]",
      "path" : "Observation.extension.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueQuantity",
      "path" : "Observation.extension.extension.value[x]",
      "sliceName" : "valueQuantity",
      "short" : "Ergebniswert mit Alternativeinheit",
      "definition" : "Hier wird der Ergebniswert als Quantität mit Alternativeinheit angegeben.",
      "type" : [{
        "code" : "Quantity"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueQuantity.value",
      "path" : "Observation.extension.extension.value[x].value",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueQuantity.comparator",
      "path" : "Observation.extension.extension.value[x].comparator",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueQuantity.unit",
      "path" : "Observation.extension.extension.value[x].unit",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueQuantity.system",
      "path" : "Observation.extension.extension.value[x].system",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueQuantity.code",
      "path" : "Observation.extension.extension.value[x].code",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueRange",
      "path" : "Observation.extension.extension.value[x]",
      "sliceName" : "valueRange",
      "short" : "Ergebnisbereich mit Alternativeinheit",
      "definition" : "Hier wird das Ergebnis als ein Wertebereich/Werteintervall mit Alternativeinheit angegeben.",
      "type" : [{
        "code" : "Range"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueRange.low",
      "path" : "Observation.extension.extension.value[x].low",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueRange.low.value",
      "path" : "Observation.extension.extension.value[x].low.value",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueRange.low.unit",
      "path" : "Observation.extension.extension.value[x].low.unit",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueRange.low.system",
      "path" : "Observation.extension.extension.value[x].low.system",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueRange.low.code",
      "path" : "Observation.extension.extension.value[x].low.code",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueRange.high",
      "path" : "Observation.extension.extension.value[x].high",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueRange.high.value",
      "path" : "Observation.extension.extension.value[x].high.value",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueRange.high.unit",
      "path" : "Observation.extension.extension.value[x].high.unit",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueRange.high.system",
      "path" : "Observation.extension.extension.value[x].high.system",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueRange.high.code",
      "path" : "Observation.extension.extension.value[x].high.code",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueRatio",
      "path" : "Observation.extension.extension.value[x]",
      "sliceName" : "valueRatio",
      "short" : "Ratio mit Alternativeinheit",
      "definition" : "Hier wird der Ergebniswert als Ratio mit Alternativeinheiten angegeben.",
      "type" : [{
        "code" : "Ratio"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueRatio.numerator",
      "path" : "Observation.extension.extension.value[x].numerator",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueRatio.numerator.value",
      "path" : "Observation.extension.extension.value[x].numerator.value",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueRatio.numerator.comparator",
      "path" : "Observation.extension.extension.value[x].numerator.comparator",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueRatio.numerator.unit",
      "path" : "Observation.extension.extension.value[x].numerator.unit",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueRatio.numerator.system",
      "path" : "Observation.extension.extension.value[x].numerator.system",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueRatio.numerator.code",
      "path" : "Observation.extension.extension.value[x].numerator.code",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueRatio.denominator",
      "path" : "Observation.extension.extension.value[x].denominator",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueRatio.denominator.value",
      "path" : "Observation.extension.extension.value[x].denominator.value",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueRatio.denominator.unit",
      "path" : "Observation.extension.extension.value[x].denominator.unit",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueRatio.denominator.system",
      "path" : "Observation.extension.extension.value[x].denominator.system",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:value.value[x]:valueRatio.denominator.code",
      "path" : "Observation.extension.extension.value[x].denominator.code",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:referenceRange",
      "path" : "Observation.extension.extension",
      "sliceName" : "referenceRange",
      "short" : "Richtgrenzen für Alternativeinheit",
      "definition" : "Richtgrenzen für das quantitative Ergebnis mit Alternativeinheit.",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:referenceRange.value[x]",
      "path" : "Observation.extension.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:referenceRange.value[x].low",
      "path" : "Observation.extension.extension.value[x].low",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:referenceRange.value[x].low.value",
      "path" : "Observation.extension.extension.value[x].low.value",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:referenceRange.value[x].low.unit",
      "path" : "Observation.extension.extension.value[x].low.unit",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:referenceRange.value[x].low.system",
      "path" : "Observation.extension.extension.value[x].low.system",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:referenceRange.value[x].low.code",
      "path" : "Observation.extension.extension.value[x].low.code",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:referenceRange.value[x].high",
      "path" : "Observation.extension.extension.value[x].high",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:referenceRange.value[x].high.value",
      "path" : "Observation.extension.extension.value[x].high.value",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:referenceRange.value[x].high.unit",
      "path" : "Observation.extension.extension.value[x].high.unit",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:referenceRange.value[x].high.system",
      "path" : "Observation.extension.extension.value[x].high.system",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:referenceRange.value[x].high.code",
      "path" : "Observation.extension.extension.value[x].high.code",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:zlog",
      "path" : "Observation.extension.extension",
      "sliceName" : "zlog",
      "definition" : "Der zlog-Wert ist ein Relativwert, der auf einer logarithmischen Skala angibt, um wie viele Standardabweichungen ein Messwert vom Mittelwert des Referenzkollektivs abweicht. Er kann ergänzend, orientierend zur Bewertung eines Messergebnisses herangezogen werden.\n\nBerechnung zlog-Wert zum Laborergebnis (x):\n\nzlog = (log(x) –(log(UG)+log(OG))/2)*3,92/(log(OG)–log(UG))\n\n(UG),(OG) sind die Unter- und Obergrenzen des Referenzintervalls\n\n\nInterpretation des zlog-Wertes:\n* Sein Referenzintervall liegt methodenunabhängig stets zwischen – 1,96 und + 1,96\n* Stark erniedrigte oder erhöhte Laborergebnisse führen zu zlog-Werten um – 5 bzw. + 5.",
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:alternativeResult.extension:zlog.value[x]",
      "path" : "Observation.extension.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "Observation.identifier",
      "path" : "Observation.identifier",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "type"
        }],
        "rules" : "closed"
      },
      "max" : "2",
      "mustSupport" : true
    },
    {
      "id" : "Observation.identifier:resultID",
      "path" : "Observation.identifier",
      "sliceName" : "resultID",
      "definition" : "Eindeutige ID zur Identifizierung der jeweiligen einzelnen Laboruntersuchung. Sie wird durch das auftragnehmende Laboratorium generiert.",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Observation.identifier:resultID.use",
      "path" : "Observation.identifier.use",
      "max" : "0"
    },
    {
      "id" : "Observation.identifier:resultID.type",
      "path" : "Observation.identifier.type",
      "min" : 1,
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
          "code" : "OBI",
          "display" : "Observation Instance Identifier"
        }]
      }
    },
    {
      "id" : "Observation.identifier:resultID.type.coding",
      "path" : "Observation.identifier.type.coding",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Observation.identifier:resultID.type.coding.system",
      "path" : "Observation.identifier.type.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.identifier:resultID.type.coding.version",
      "path" : "Observation.identifier.type.coding.version",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.identifier:resultID.type.coding.code",
      "path" : "Observation.identifier.type.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.identifier:resultID.type.coding.display",
      "path" : "Observation.identifier.type.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.identifier:resultID.type.coding.userSelected",
      "path" : "Observation.identifier.type.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Observation.identifier:resultID.type.text",
      "path" : "Observation.identifier.type.text",
      "max" : "0"
    },
    {
      "id" : "Observation.identifier:resultID.system",
      "path" : "Observation.identifier.system",
      "mustSupport" : true
    },
    {
      "id" : "Observation.identifier:resultID.value",
      "path" : "Observation.identifier.value",
      "mustSupport" : true
    },
    {
      "id" : "Observation.identifier:resultID.period",
      "path" : "Observation.identifier.period",
      "max" : "0"
    },
    {
      "id" : "Observation.identifier:resultID.assigner",
      "path" : "Observation.identifier.assigner",
      "max" : "0"
    },
    {
      "id" : "Observation.identifier:GTIN",
      "path" : "Observation.identifier",
      "sliceName" : "GTIN",
      "definition" : "Mit der GTIN (kurz für Global Trade Item Number ) kann jeder Artikel, jedes Produkt oder jede Produktvariante weltweit überschneidungsfrei identifiziert werden. Sie fungiert als Zugriffsschlüssel auf in Datenbanken hinterlegte Produktinformationen. Die GTIN ist gleichzeitig die Basis für den Barcode (auch bekannt als Strichcode). Über den Barcode wird sie maschinenlesbar und kann per Scanner automatisch ausgelesen werden.\n\n  Verwendung im Kontext Laborbefund: für die Darstellung von Laboruntersuchungen kann die GTIN herangezogen werden, um die Vergleichbarkeit von Tests zu validieren.",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Observation.identifier:GTIN.use",
      "path" : "Observation.identifier.use",
      "max" : "0"
    },
    {
      "id" : "Observation.identifier:GTIN.type",
      "path" : "Observation.identifier.type",
      "min" : 1,
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
          "code" : "UDI",
          "display" : "Universal Device Identifier"
        }]
      }
    },
    {
      "id" : "Observation.identifier:GTIN.type.coding",
      "path" : "Observation.identifier.type.coding",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Observation.identifier:GTIN.type.coding.system",
      "path" : "Observation.identifier.type.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.identifier:GTIN.type.coding.version",
      "path" : "Observation.identifier.type.coding.version",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.identifier:GTIN.type.coding.code",
      "path" : "Observation.identifier.type.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.identifier:GTIN.type.coding.display",
      "path" : "Observation.identifier.type.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.identifier:GTIN.type.coding.userSelected",
      "path" : "Observation.identifier.type.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Observation.identifier:GTIN.type.text",
      "path" : "Observation.identifier.type.text",
      "max" : "0"
    },
    {
      "id" : "Observation.identifier:GTIN.system",
      "path" : "Observation.identifier.system",
      "mustSupport" : true
    },
    {
      "id" : "Observation.identifier:GTIN.value",
      "path" : "Observation.identifier.value",
      "mustSupport" : true
    },
    {
      "id" : "Observation.identifier:GTIN.period",
      "path" : "Observation.identifier.period",
      "max" : "0"
    },
    {
      "id" : "Observation.identifier:GTIN.assigner",
      "path" : "Observation.identifier.assigner",
      "max" : "0"
    },
    {
      "id" : "Observation.basedOn",
      "path" : "Observation.basedOn",
      "max" : "0"
    },
    {
      "id" : "Observation.partOf",
      "path" : "Observation.partOf",
      "max" : "0"
    },
    {
      "id" : "Observation.status",
      "path" : "Observation.status",
      "definition" : "Bearbeitungsstatus der einzelnen Laboruntersuchung. Die Status-Werte orientieren sich an HL7® FHIR® Version 4.0.1, jedoch wurde der Wert \"unknown\" aufgrund von Nichtverwendung herausgenommen.",
      "mustSupport" : true
    },
    {
      "id" : "Observation.category",
      "path" : "Observation.category",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "extension.value"
        }],
        "rules" : "closed"
      },
      "short" : "Fachliche Bezeichnung für die zugehörige Untersuchungsgruppe, Inhalt identisch zu Observation_Laboratory_Study_Group.category",
      "definition" : "Zur einzelnen Laboruntersuchung wird das \"fachliche Gruppierungsmerkmal\" REDUNDANT abgebildet, der Inhalt entspricht exakt dem fachlichen Gruppierungsmerkmal der zugehörigen Untersuchungsgruppe. Dies ermöglicht bei datenbankbasierten Abfragen von Einzeluntersuchungen (z.B. in der ePA) eine direkte Zuordnung zur fachlichen Gruppierung. Das fachliche Gruppierungsmerkmal der Untersuchungsgruppe ist grundsätzlich führend!",
      "min" : 1,
      "max" : "3",
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:laboratory",
      "path" : "Observation.category",
      "sliceName" : "laboratory",
      "min" : 1,
      "max" : "1",
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "http://terminology.hl7.org/CodeSystem/observation-category",
          "code" : "laboratory"
        }]
      },
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:laboratory.extension",
      "path" : "Observation.category.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "description" : "Extensions are always sliced by (at least) url",
        "rules" : "closed"
      },
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:laboratory.extension:laboratory",
      "path" : "Observation.category.extension",
      "sliceName" : "laboratory",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Diskriminator"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:laboratory.extension:laboratory.value[x]",
      "path" : "Observation.category.extension.value[x]",
      "patternString" : "laboratory",
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:laboratory.coding",
      "path" : "Observation.category.coding",
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:laboratory.coding.system",
      "path" : "Observation.category.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:laboratory.coding.version",
      "path" : "Observation.category.coding.version",
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:laboratory.coding.code",
      "path" : "Observation.category.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:laboratory.coding.display",
      "path" : "Observation.category.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:laboratory.coding.userSelected",
      "path" : "Observation.category.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Observation.category:laboratory.text",
      "path" : "Observation.category.text",
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:studyType",
      "path" : "Observation.category",
      "sliceName" : "studyType",
      "short" : "Bezeichnung für Fachbereich, unter dem Laboruntersuchungen gruppiert werden, Inhalt identisch zu Observation_Laboratory_Study_Group.category:studyType",
      "definition" : "Hier kann die fachspezifische Eingrenzung innerhalb der Laboratoriumsmedizin anhand entsprechender Kategorie-Codes angegeben werden. Beispiele für eine fachspezifische Eingrenzung sind: \"Klinische Chemie\", \"Hämatologie\", \"Serologie\", \"Toxikologie\", \"Urindiagnostik\", \"Fertilitätsdiagnostik\". Es besteht auch die Option, eine allgemeine Kategorie für \"Labor\" zu vergeben.",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:studyType.extension",
      "path" : "Observation.category.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "description" : "Extensions are always sliced by (at least) url",
        "rules" : "closed"
      },
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:studyType.extension:studyType",
      "path" : "Observation.category.extension",
      "sliceName" : "studyType",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Diskriminator"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:studyType.extension:studyType.value[x]",
      "path" : "Observation.category.extension.value[x]",
      "patternString" : "studyType",
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:studyType.coding",
      "path" : "Observation.category.coding",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "$this"
        }],
        "rules" : "open"
      },
      "definition" : "Benennung des labormedizinischen Bereiches als Code.",
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:studyType.coding.system",
      "path" : "Observation.category.coding.system",
      "min" : 1
    },
    {
      "id" : "Observation.category:studyType.coding.code",
      "path" : "Observation.category.coding.code",
      "min" : 1
    },
    {
      "id" : "Observation.category:studyType.coding.display",
      "path" : "Observation.category.coding.display",
      "min" : 1
    },
    {
      "id" : "Observation.category:studyType.coding:loinc",
      "path" : "Observation.category.coding",
      "sliceName" : "loinc",
      "definition" : "LOINC®-Code für Fachbereich/Spezialgebiet der Labormedizin",
      "min" : 0,
      "max" : "1",
      "patternCoding" : {
        "system" : "http://loinc.org"
      },
      "mustSupport" : true,
      "binding" : {
        "strength" : "example",
        "valueSet" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Laboratory_Specialties_LOINC|1.0.0-update"
      }
    },
    {
      "id" : "Observation.category:studyType.coding:loinc.system",
      "path" : "Observation.category.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:studyType.coding:loinc.version",
      "path" : "Observation.category.coding.version",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:studyType.coding:loinc.code",
      "path" : "Observation.category.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:studyType.coding:loinc.display",
      "path" : "Observation.category.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:studyType.coding:loinc.userSelected",
      "path" : "Observation.category.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Observation.category:studyType.text",
      "path" : "Observation.category.text",
      "definition" : "Benennung des labormedizinischen Bereiches als Freitext.",
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:testProfile",
      "path" : "Observation.category",
      "sliceName" : "testProfile",
      "short" : "Bezeichnung für fachlich-medizinischen Bezug, unter dem Laboruntersuchungen gruppiert werden, Inhalt identisch zu Observation_Laboratory_Study_Group.category:testProfile",
      "definition" : "Unter Test-Profil werden zusammengehörige Labortests oder eine Gruppe von Einzeluntersuchungen aus einem Verfahren zusammengefasst.",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:testProfile.extension",
      "path" : "Observation.category.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "description" : "Extensions are always sliced by (at least) url",
        "rules" : "closed"
      },
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:testProfile.extension:testProfile",
      "path" : "Observation.category.extension",
      "sliceName" : "testProfile",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Diskriminator"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:testProfile.extension:testProfile.value[x]",
      "path" : "Observation.category.extension.value[x]",
      "patternString" : "testProfile",
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:testProfile.coding",
      "path" : "Observation.category.coding",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "$this"
        }],
        "rules" : "open"
      },
      "definition" : "Benennung eines Test-Profils als Code.",
      "mustSupport" : true,
      "binding" : {
        "strength" : "example",
        "valueSet" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Laboruntersuchungsgruppe|1.0.0-update"
      }
    },
    {
      "id" : "Observation.category:testProfile.coding.system",
      "path" : "Observation.category.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:testProfile.coding.version",
      "path" : "Observation.category.coding.version",
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:testProfile.coding.code",
      "path" : "Observation.category.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:testProfile.coding.display",
      "path" : "Observation.category.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:testProfile.coding.userSelected",
      "path" : "Observation.category.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Observation.category:testProfile.text",
      "path" : "Observation.category.text",
      "definition" : "Benennung des Test-Profils als Freitext.",
      "mustSupport" : true
    },
    {
      "id" : "Observation.code",
      "path" : "Observation.code",
      "definition" : "Hier wird die konkrete einzelne Laboruntersuchung spezifiziert.",
      "mustSupport" : true
    },
    {
      "id" : "Observation.code.extension:data-absent-reason",
      "path" : "Observation.code.extension",
      "sliceName" : "data-absent-reason",
      "short" : "Grund für das Nichtvorhandensein eines LOINC®-Codes",
      "definition" : "Begründung für die Nicht-Vergabe eines LOINC®-Codes zur Laboruntersuchung",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://hl7.org/fhir/StructureDefinition/data-absent-reason|5.3.0"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.code.extension:data-absent-reason.value[x]",
      "path" : "Observation.code.extension.value[x]",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Data_Absent_Reason|1.0.0-update"
      }
    },
    {
      "id" : "Observation.code.coding",
      "path" : "Observation.code.coding",
      "definition" : "In diesem Element wird ein LOINC®-Code für die Laboruntersuchung angegeben, inklusive Anzeigename (Display Name) sowie Name und Version des Codesystems.\n\nDie Angabe des LOINC®-Codes ist verbindlich. Falls dies nicht möglich ist, muss der Grund für das Nichtvorhandensein eines Codes (DataAbsentReason) angegeben werden.",
      "max" : "1",
      "patternCoding" : {
        "system" : "http://loinc.org"
      },
      "mustSupport" : true
    },
    {
      "id" : "Observation.code.coding.system",
      "path" : "Observation.code.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.code.coding.version",
      "path" : "Observation.code.coding.version",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.code.coding.code",
      "path" : "Observation.code.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.code.coding.display",
      "path" : "Observation.code.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.code.coding.userSelected",
      "path" : "Observation.code.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Observation.code.text",
      "path" : "Observation.code.text",
      "short" : "Verwender-spezifische (vom Long Common Name des LOINC®-Codes ggf. abweichende) Bezeichnung für die Laboruntersuchung",
      "definition" : "Die Freitext-Bezeichnung erlaubt es, in den verwendenden/verarbeitenden Systemen den Einrichtungs-spezifischen bzw. Verwender-spezifischen Bezeichner für eine Laboruntersuchung weiterhin zu verwenden.\n\nFür den Fall, dass anstelle des LOINC®-Codes ein Grund für das Nichtvorhandensein eines Codes (DataAbsentReason) vergeben wird, muss die Freitext-Bezeichnung befüllt sein.",
      "mustSupport" : true
    },
    {
      "id" : "Observation.subject",
      "path" : "Observation.subject",
      "short" : "Zu behandelnde Person",
      "definition" : "Hier wird die zu behandelnde Person referenziert.",
      "min" : 1,
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Patient|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.subject.identifier",
      "path" : "Observation.subject.identifier",
      "min" : 1,
      "type" : [{
        "code" : "Identifier",
        "profile" : ["http://fhir.de/StructureDefinition/identifier-kvid-10"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.focus",
      "path" : "Observation.focus",
      "max" : "0"
    },
    {
      "id" : "Observation.encounter",
      "path" : "Observation.encounter",
      "max" : "0"
    },
    {
      "id" : "Observation.effective[x]",
      "path" : "Observation.effective[x]",
      "short" : "Klinischer Bezugszeitpunkt",
      "definition" : "Der Klinische Bezugszeitpunkt ist wichtig, um die Laboruntersuchung im Zeitverlauf einordnen zu können.\n\nDie Redundanz ist beabsichtigt. Es geht darum, einen Zeitpunkt ermitteln zu können, der für Studien-Statistiken als vergleichsrelevant eingestuft wird. Da im klinischen Alltag nicht sicher gestellt ist, dass grundsätzlich und immer der Zeitpunkt der Materialentnahme auch dokumentiert wird, wurde dieser Algorithmus festgelegt, um die Dokumentation eines statistischen relevanten Zeitpunktes zu garantieren:\n\n* WENN der Entnahmezeitpunkt des Probenmaterials angeben ist, so gilt der Entnahmezeitpunkt;\n* WENN der Sammelzeitraum-bis angegeben ist, so gilt der bis-Zeitpunkt;\n* SONST gilt (hilfsweise) der Laboreingangszeitpunkt: Zeitpunkt des Eingangs der Probe im Labor.",
      "min" : 1,
      "type" : [{
        "code" : "dateTime"
      }],
      "constraint" : [{
        "key" : "date-1",
        "severity" : "error",
        "human" : "Datetime must be at least day, month and year.",
        "expression" : "($this as dateTime).toString().length() >= 10",
        "source" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Laboratory_Study"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.issued",
      "path" : "Observation.issued",
      "short" : "Dokumentationszeitpunkt",
      "definition" : "Zeitstempel oder Zeitangabe zur Dokumentation der einzelnen Laboruntersuchung.",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.performer",
      "path" : "Observation.performer",
      "definition" : "Hier wird das durchführende Labor in Bezug auf die einzelne Laboruntersuchung benannt.\n\nZur Beachtung: im Laborgesamtbefund wird das durchführende Labor (als DiagnosticReport.performer) dokumentiert. Für selbst erbrachte Laborleistungen muss aus Gründen der EU-Kompatibilität auch immer zur Einzeluntersuchung das durchführende Labor (Observation.performer) dokumentiert werden, dieses kann aus dem Laborgesamtbefund abgeleitet werden.\n\nWenn das auftragnehmende Labor die einzelne Laboruntersuchung nicht in Eigenleistung erbringt sondern an ein Speziallabor weiterleitet, sogenannte Fremdleistung, muss hier das durchführende sekundäre Labor als durchführendes Labor dokumentiert werden.",
      "min" : 1,
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Practitioner|1.0.0-update",
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_PractitionerRole|1.0.0-update",
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Organization|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.performer.reference",
      "path" : "Observation.performer.reference",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]",
      "path" : "Observation.value[x]",
      "slicing" : {
        "discriminator" : [{
          "type" : "type",
          "path" : "$this"
        }],
        "ordered" : false,
        "rules" : "open"
      },
      "definition" : "Messergebnisse können quantitativ oder qualitativ sein.",
      "type" : [{
        "code" : "Quantity"
      },
      {
        "code" : "CodeableConcept"
      },
      {
        "code" : "string"
      },
      {
        "code" : "Range"
      },
      {
        "code" : "Ratio"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueQuantity",
      "path" : "Observation.value[x]",
      "sliceName" : "valueQuantity",
      "definition" : "Hier wird der Ergebniswert als Quantität angegeben.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Quantity"
      }],
      "patternQuantity" : {
        "system" : "http://unitsofmeasure.org"
      },
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueQuantity.value",
      "path" : "Observation.value[x].value",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueQuantity.comparator",
      "path" : "Observation.value[x].comparator",
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueQuantity.unit",
      "path" : "Observation.value[x].unit",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueQuantity.system",
      "path" : "Observation.value[x].system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueQuantity.code",
      "path" : "Observation.value[x].code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueCodeableConcept",
      "path" : "Observation.value[x]",
      "sliceName" : "valueCodeableConcept",
      "short" : "Qualitatives Messergebnis (z.B. nominal oder ordinal)",
      "definition" : "Qualitative Messergebnisse sind - je nach Messgröße oder Skalierung:\n\nOrdinal, d.h. numerische, in der Regel ganzzahlige Ordnungswerte, die den Vergleich (z. B. kleiner als, größer als) ermöglichen oder zur Vergabe einer Punktebewertung (\"Benotung\") herangezogen werden, beispielsweise eine Schmerzskala (z.B. von 1 bis 10)\n\nNominal, d.h. Festwerte ohne Rangordnung, beispielsweise in der Mikrobiologie: Krankheitserreger (z.B. Escherichia Coli; Staphylococcus aureus als Bezeichner oder als Code.) oder Angabe zum Nachweis (z.B. vorhanden / nicht vorhanden).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueCodeableConcept.coding",
      "path" : "Observation.value[x].coding",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "$this"
        }],
        "rules" : "open"
      },
      "definition" : "Qualitatives Messergebnis in codierter Form.",
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueCodeableConcept.coding.system",
      "path" : "Observation.value[x].coding.system",
      "min" : 1
    },
    {
      "id" : "Observation.value[x]:valueCodeableConcept.coding.code",
      "path" : "Observation.value[x].coding.code",
      "min" : 1
    },
    {
      "id" : "Observation.value[x]:valueCodeableConcept.coding.display",
      "path" : "Observation.value[x].coding.display",
      "min" : 1
    },
    {
      "id" : "Observation.value[x]:valueCodeableConcept.coding:snomed",
      "path" : "Observation.value[x].coding",
      "sliceName" : "snomed",
      "definition" : "Darstellung des qualitativen Messergebnisses als SNOMED CT®-Code.",
      "min" : 0,
      "max" : "1",
      "patternCoding" : {
        "system" : "http://snomed.info/sct"
      },
      "mustSupport" : true,
      "binding" : {
        "strength" : "example",
        "valueSet" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Observation_Laboratory_Study_Value_SNOMED_CT|1.0.0-update"
      }
    },
    {
      "id" : "Observation.value[x]:valueCodeableConcept.coding:snomed.system",
      "path" : "Observation.value[x].coding.system",
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueCodeableConcept.coding:snomed.version",
      "path" : "Observation.value[x].coding.version",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueCodeableConcept.coding:snomed.code",
      "path" : "Observation.value[x].coding.code",
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueCodeableConcept.coding:snomed.display",
      "path" : "Observation.value[x].coding.display",
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueCodeableConcept.coding:snomed.userSelected",
      "path" : "Observation.value[x].coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Observation.value[x]:valueCodeableConcept.text",
      "path" : "Observation.value[x].text",
      "definition" : "Qualitatives Messergebnis als Freitext.",
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueRatio",
      "path" : "Observation.value[x]",
      "sliceName" : "valueRatio",
      "definition" : "Eine bisher gebräuchliche Ergebnisdarstellung von Antikörper-Bestimmungen ist der Verdünnungstiter, bei welchem die Antikörper noch nachweisbar sind. Umgangssprachlich häufig nur als \"Titer\" bezeichnet. Die Titerangabe setzt sich aus zwei ins Verhältnis gesetzten Quantitäten (Zähler, Nenner) zusammen. Wenn zur Ergebnisdarstellung ein Komparator benötigt wird, dann gelten die mathematischen Regeln, beispielsweise ist 1:32 ein kleinerer Wert als 1:16.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Ratio"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueRatio.numerator",
      "path" : "Observation.value[x].numerator",
      "definition" : "Hier wird der Zähler zum Ergebniswert Ratio angegeben.",
      "min" : 1,
      "patternQuantity" : {
        "system" : "http://unitsofmeasure.org"
      },
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueRatio.numerator.value",
      "path" : "Observation.value[x].numerator.value",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueRatio.numerator.comparator",
      "path" : "Observation.value[x].numerator.comparator",
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueRatio.numerator.unit",
      "path" : "Observation.value[x].numerator.unit",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueRatio.numerator.system",
      "path" : "Observation.value[x].numerator.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueRatio.numerator.code",
      "path" : "Observation.value[x].numerator.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueRatio.denominator",
      "path" : "Observation.value[x].denominator",
      "definition" : "Hier wird der Nenner zum Ergebniswert Ratio angegeben.",
      "min" : 1,
      "patternQuantity" : {
        "system" : "http://unitsofmeasure.org"
      },
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueRatio.denominator.value",
      "path" : "Observation.value[x].denominator.value",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueRatio.denominator.unit",
      "path" : "Observation.value[x].denominator.unit",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueRatio.denominator.system",
      "path" : "Observation.value[x].denominator.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueRatio.denominator.code",
      "path" : "Observation.value[x].denominator.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueRange",
      "path" : "Observation.value[x]",
      "sliceName" : "valueRange",
      "definition" : "Für Messergebnisse, die nicht als genau ein Wert, sondern als ein Wertebereich/Werteintervall angegeben werden.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Range"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueRange.low",
      "path" : "Observation.value[x].low",
      "definition" : "Untere Grenze eines Ergebnisbereiches, Ergebnisintervalls. Die Einheiten von Obergrenze und Untergrenze müssen identisch sein.",
      "min" : 1,
      "patternQuantity" : {
        "system" : "http://unitsofmeasure.org"
      },
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueRange.low.value",
      "path" : "Observation.value[x].low.value",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueRange.low.unit",
      "path" : "Observation.value[x].low.unit",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueRange.low.system",
      "path" : "Observation.value[x].low.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueRange.low.code",
      "path" : "Observation.value[x].low.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueRange.high",
      "path" : "Observation.value[x].high",
      "definition" : "Obere Grenze eines Ergebnisbereiches, Ergebnisintervalls. Die Einheiten von Obergrenze und Untergrenze müssen identisch sein.",
      "min" : 1,
      "patternQuantity" : {
        "system" : "http://unitsofmeasure.org"
      },
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueRange.high.value",
      "path" : "Observation.value[x].high.value",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueRange.high.unit",
      "path" : "Observation.value[x].high.unit",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueRange.high.system",
      "path" : "Observation.value[x].high.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueRange.high.code",
      "path" : "Observation.value[x].high.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]:valueString",
      "path" : "Observation.value[x]",
      "sliceName" : "valueString",
      "short" : "Ergebnis uncodiert in Textform",
      "definition" : "Textergebnis als Freitext. Dieses Feld ist für Beobachtungen vorgesehen, bei denen für das Resultat keine numerischen oder codierten Werte benötigt werden. Beispiele sind qualitative Beschreibungen oder freitextliche Kommentare.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "string"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.dataAbsentReason",
      "path" : "Observation.dataAbsentReason",
      "definition" : "Begründung für die Nicht-Verfügbarkeit eines Messergebnisses. Die Angabe eines Messergebnisses ist gefordert (\"required\"). Wenn kein Messergebnis zur Verfügung steht, wird in der FHIR®-Struktur ein \"dataAbsentReason\" angegeben. Der Inhalt dieser Begründung soll der System-anwendenden Person angezeigt werden",
      "mustSupport" : true
    },
    {
      "id" : "Observation.dataAbsentReason.coding",
      "path" : "Observation.dataAbsentReason.coding",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Observation.dataAbsentReason.coding.system",
      "path" : "Observation.dataAbsentReason.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.dataAbsentReason.coding.version",
      "path" : "Observation.dataAbsentReason.coding.version",
      "mustSupport" : true
    },
    {
      "id" : "Observation.dataAbsentReason.coding.code",
      "path" : "Observation.dataAbsentReason.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.dataAbsentReason.coding.display",
      "path" : "Observation.dataAbsentReason.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.dataAbsentReason.coding.userSelected",
      "path" : "Observation.dataAbsentReason.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Observation.dataAbsentReason.text",
      "path" : "Observation.dataAbsentReason.text",
      "max" : "0"
    },
    {
      "id" : "Observation.interpretation",
      "path" : "Observation.interpretation",
      "short" : "Medizinische Interpretation des einzelnen Laborergebnisses",
      "definition" : "Medizinisch relevante Bewertung zur einzelnen Laboruntersuchung. Die Interpretation kann als Code und/oder Text vorliegen. Die Angabe einer Interpretation ist optional, bei nicht vorhandener Klassifikation wird hier nichts übermittelt. Empfehlung: eine dokumentierte Interpretation sollte mindestens einen Interpretationscode enthalten.",
      "mustSupport" : true
    },
    {
      "id" : "Observation.interpretation.coding",
      "path" : "Observation.interpretation.coding",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "$this"
        }],
        "rules" : "open"
      },
      "definition" : "Hier kann die Interpretation als codierte Information angegeben werden.",
      "mustSupport" : true
    },
    {
      "id" : "Observation.interpretation.coding.system",
      "path" : "Observation.interpretation.coding.system",
      "min" : 1
    },
    {
      "id" : "Observation.interpretation.coding.code",
      "path" : "Observation.interpretation.coding.code",
      "min" : 1
    },
    {
      "id" : "Observation.interpretation.coding.display",
      "path" : "Observation.interpretation.coding.display",
      "min" : 1
    },
    {
      "id" : "Observation.interpretation.coding:hl7Interpretation",
      "path" : "Observation.interpretation.coding",
      "sliceName" : "hl7Interpretation",
      "definition" : "Für die codierte Interpretation wird eine Auswahl von Interpretationscodes als Option angeboten. Die Nutzung der hinterlegten Codes ist abhängig vom Kontext.",
      "min" : 0,
      "max" : "1",
      "patternCoding" : {
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation"
      },
      "mustSupport" : true,
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "http://hl7.org/fhir/ValueSet/observation-interpretation"
      }
    },
    {
      "id" : "Observation.interpretation.coding:hl7Interpretation.system",
      "path" : "Observation.interpretation.coding.system",
      "mustSupport" : true
    },
    {
      "id" : "Observation.interpretation.coding:hl7Interpretation.version",
      "path" : "Observation.interpretation.coding.version",
      "mustSupport" : true
    },
    {
      "id" : "Observation.interpretation.coding:hl7Interpretation.code",
      "path" : "Observation.interpretation.coding.code",
      "mustSupport" : true
    },
    {
      "id" : "Observation.interpretation.coding:hl7Interpretation.display",
      "path" : "Observation.interpretation.coding.display",
      "mustSupport" : true
    },
    {
      "id" : "Observation.interpretation.coding:hl7Interpretation.userSelected",
      "path" : "Observation.interpretation.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Observation.interpretation.coding:snomed",
      "path" : "Observation.interpretation.coding",
      "sliceName" : "snomed",
      "definition" : "Hier kann ein Code aus SNOMED-CT® angegeben werden.",
      "min" : 0,
      "max" : "1",
      "patternCoding" : {
        "system" : "http://snomed.info/sct"
      },
      "mustSupport" : true
    },
    {
      "id" : "Observation.interpretation.coding:snomed.system",
      "path" : "Observation.interpretation.coding.system",
      "mustSupport" : true
    },
    {
      "id" : "Observation.interpretation.coding:snomed.version",
      "path" : "Observation.interpretation.coding.version",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.interpretation.coding:snomed.code",
      "path" : "Observation.interpretation.coding.code",
      "mustSupport" : true
    },
    {
      "id" : "Observation.interpretation.coding:snomed.display",
      "path" : "Observation.interpretation.coding.display",
      "mustSupport" : true
    },
    {
      "id" : "Observation.interpretation.coding:snomed.userSelected",
      "path" : "Observation.interpretation.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Observation.interpretation.text",
      "path" : "Observation.interpretation.text",
      "definition" : "Hier kann eine medizinisch relevante Bewertung als Freitext eingegeben werden. Unter Eigenschaften sind mögliche Werte gelistet, die in dieses Feld hineinpassen könnten, beispielsweise ein Textfeld  aus dem LDT zur Interpretation des Ergebnisses.",
      "mustSupport" : true
    },
    {
      "id" : "Observation.note",
      "path" : "Observation.note",
      "definition" : "Die ergänzenden Angaben beziehen sich genau auf diese Einzeluntersuchung. Neben dem Element (Interpretation) ist dieses Feld für weitere, über die rein medizinische Interpretation hinausgehende Kommentierungen gedacht.",
      "mustSupport" : true
    },
    {
      "id" : "Observation.note.author[x]",
      "path" : "Observation.note.author[x]",
      "max" : "0"
    },
    {
      "id" : "Observation.note.time",
      "path" : "Observation.note.time",
      "max" : "0"
    },
    {
      "id" : "Observation.note.text",
      "path" : "Observation.note.text",
      "mustSupport" : true
    },
    {
      "id" : "Observation.bodySite",
      "path" : "Observation.bodySite",
      "max" : "0"
    },
    {
      "id" : "Observation.method",
      "path" : "Observation.method",
      "short" : "Untersuchungsmethode, ergänzende Spezifizierung (z.B. postkoordinierend)",
      "definition" : "Der LOINC®-Code impliziert über die LOINC®-Achse METHOD bereits eine Untersuchungsmethode, unter der Voraussetzung, dass der Part METHOD einen Wert beinhaltet. Die \"Untersuchungsmethode, ergänzende Spezifizierung\" kann in Bezug auf die LOINC®-spezifizierte Laboruntersuchung ergänzt werden, falls der Wert für die LOINC®-Achse METHOD nicht ausreichend spezifisch ist oder gar nicht vorhanden ist.\n\nEin Beispiel: die Laboruntersuchung (Observation_Laboratory_Study.code) ist mit dem LOINC®-Code 26453-1 \"Erythrocytes [#/volume] in Blood\" ohne Angabe zur Methode codiert. Als ergänzende Spezifizieruung wird für die Untersuchungsmethode (Observation_Laboratory_Study.method) der SNOMED CT®-Code 702659008 |Automated count| zugeordnet.",
      "mustSupport" : true
    },
    {
      "id" : "Observation.method.coding",
      "path" : "Observation.method.coding",
      "definition" : "Hier kann die Untersuchungsmethode als codierte Information angegeben werden.",
      "mustSupport" : true,
      "binding" : {
        "strength" : "example",
        "valueSet" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Observation_Methods"
      }
    },
    {
      "id" : "Observation.method.coding.system",
      "path" : "Observation.method.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.method.coding.version",
      "path" : "Observation.method.coding.version",
      "mustSupport" : true
    },
    {
      "id" : "Observation.method.coding.code",
      "path" : "Observation.method.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.method.coding.display",
      "path" : "Observation.method.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.method.coding.userSelected",
      "path" : "Observation.method.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Observation.method.text",
      "path" : "Observation.method.text",
      "definition" : "Hier kann eine Freitext-Bezeichnung der Untersuchungsmethode notiert werden. Mögliche Verwendung:\n\n* als Freitextergänzung, wenn die Methode durch die Spezifikation Laboruntersuchung (LOINC® Code: METHOD) nicht ausreichend spezifisch codiert werden kann\n* ersatzweise, wenn zur Untersuchungsmethode auch kein passender SNOMED CT®-Code zugeordnet werden kann\n* als ergänzender, dem SNOMED CT®-Code entsprechender Freitext",
      "mustSupport" : true
    },
    {
      "id" : "Observation.specimen",
      "path" : "Observation.specimen",
      "definition" : "Eine Laboruntersuchung kann auf einer Primärprobe oder einer weiter verarbeiteten Probe (Sekundärprobe) basieren. Die Zuordnung einer Sekundärprobe zu einer Laboruntersuchung ist dann empfehlenswert, wenn durch die Probenvorbereitung im Labor eine relevante Veränderung des Untersuchungsmaterials erfolgt (z.B. Abtrennung Plasma).\n\nEin Beispiel für die Unterscheidung zwischen Primärprobe und Sekundärprobe: als Primärprobe erreicht eine Probenart = Vollblut das Labor. Durch Zentrifugieren im Labor entsteht eine Sekundärprobe mit Probenart = Serum. Die zu analysierende Substanz wird im Serum gemessen.",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Specimen|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.specimen.reference",
      "path" : "Observation.specimen.reference",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.specimen.type",
      "path" : "Observation.specimen.type",
      "max" : "0"
    },
    {
      "id" : "Observation.specimen.identifier",
      "path" : "Observation.specimen.identifier",
      "max" : "0"
    },
    {
      "id" : "Observation.specimen.display",
      "path" : "Observation.specimen.display",
      "max" : "0"
    },
    {
      "id" : "Observation.device",
      "path" : "Observation.device",
      "short" : "Laboranalysegerät",
      "definition" : "Hier wird das Gerät bzw. Medizinprodukt referenziert, mit dem die Laboruntersuchung durchgeführt wird.",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Device_Laboratory_Analyzer|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.device.reference",
      "path" : "Observation.device.reference",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.device.type",
      "path" : "Observation.device.type",
      "max" : "0"
    },
    {
      "id" : "Observation.device.identifier",
      "path" : "Observation.device.identifier",
      "max" : "0"
    },
    {
      "id" : "Observation.device.display",
      "path" : "Observation.device.display",
      "max" : "0"
    },
    {
      "id" : "Observation.referenceRange",
      "path" : "Observation.referenceRange",
      "definition" : "Richtgrenzen oder Bewertungsgrenzen zu einer Laboruntersuchung\n\n* werden herangezogen für die Beurteilung und Einordnung von Messergebnissen\n* sind laborärztliche Entscheidungsgrenzen (mit ggf. juristischer Relevanz)\n* sind ärztliche Entscheidungshilfen im klinischen Allta\n\n\nDisclaimer: FHIR® definiert aktuell nur inklusive Richtgrenzen. Für die Praxistauglichkeit besteht aber die Anforderung, auch exklusive Richtgrenzen abbilden zu können. Diese Thematik wurde schon bei HL7® FHIR® platziert, es gibt aber noch keine abschließende Festlegung dazu. Im Informationsmodell sind beide Optionen bereits dargestellt, um diese Anforderung sichtbar zu machen.",
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.extension",
      "path" : "Observation.referenceRange.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "rules" : "closed"
      },
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.extension:sourceReferenceRange",
      "path" : "Observation.referenceRange.extension",
      "sliceName" : "sourceReferenceRange",
      "short" : "Quelle der Richtgrenzen",
      "definition" : "Mögliche Angaben als Quelle für Richtgrenzen können sein:\n\n* Internationaler Standard\n* Nationaler Standard\n* Literatur\n* Gerätehersteller\n* Beipackzettel\n* Labor-intern\n* nicht angegeben\n\nZusätzlich zur Freitextangabe einer LDT-Information ist in FHIR® auch die Codierung möglich (optional).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Source_Reference_Range"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.extension:sourceReferenceRange.value[x]",
      "path" : "Observation.referenceRange.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.extension:sourceReferenceRange.value[x].coding",
      "path" : "Observation.referenceRange.extension.value[x].coding",
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.extension:sourceReferenceRange.value[x].coding.system",
      "path" : "Observation.referenceRange.extension.value[x].coding.system",
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.extension:sourceReferenceRange.value[x].coding.version",
      "path" : "Observation.referenceRange.extension.value[x].coding.version",
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.extension:sourceReferenceRange.value[x].coding.code",
      "path" : "Observation.referenceRange.extension.value[x].coding.code",
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.extension:sourceReferenceRange.value[x].coding.display",
      "path" : "Observation.referenceRange.extension.value[x].coding.display",
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.extension:sourceReferenceRange.value[x].text",
      "path" : "Observation.referenceRange.extension.value[x].text",
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.extension:noLinearReferenceRange",
      "path" : "Observation.referenceRange.extension",
      "sliceName" : "noLinearReferenceRange",
      "short" : "Kennzeichen Nicht-linearer Referenzbereich",
      "definition" : "Kennzeichnung, dass das numerische Ergebnis aus einem NICHT-LINEAREN Wertebereich stammt. Beispiele hierfür sind ganzzahlige Scores oder Titer-Reihen. Umgangssprachlich wird auch von sog. \"semiquantitativen\" Ergebnissen gesprochen. Seit LOINC® Version 2.76 ist das anhand des LOINC®-Codes offiziell definiert und ablesbar mit Scale = \"SemiQn\". Das Kennzeichen ist optional und wird vom messenden Labor gesetzt.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_No_Linear_Reference_Range"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.extension:noLinearReferenceRange.value[x]",
      "path" : "Observation.referenceRange.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.low",
      "path" : "Observation.referenceRange.low",
      "definition" : "Die untere Richtgrenze ist eine quantitative Grenze. Datentyp und Einheit entsprechen denen beim quantitativen Messergebnis. Unter Eigenschaften sind mögliche Werte gelistet, die in dieses Feld hineinpassen könnten, beispielsweise ein Grenzwert aus dem LDT. Bei diesen Beispielen aus dem LDT gilt es zu beachten, dass die Grenzwerte nur für eine Richtgrenze vom Typ \"normal\" gelten.\n\nDisclaimer: FHIR® definiert aktuell nur inklusive Richtgrenzen. Für die Praxistauglichkeit besteht aber die Anforderung, auch exklusive Richtgrenzen abbilden zu können. Diese Thematik wurde schon bei HL7® FHIR® platziert, es gibt aber noch keine abschließende Festlegung dazu. Im Informationsmodell sind beide Optionen bereits dargestellt, um diese Anforderung sichtbar zu machen.",
      "patternQuantity" : {
        "system" : "http://unitsofmeasure.org"
      },
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.low.value",
      "path" : "Observation.referenceRange.low.value",
      "definition" : "Numerischer Wert für eine gemessene Größe, eine Zahl mit optionalen Dezimalstellen.",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.low.unit",
      "path" : "Observation.referenceRange.low.unit",
      "definition" : "Die Einheit leitet sich aus der Messgröße (gemessene Eigenschaft und Mengenmaß) ab. Ein Beispiel: Wenn die Messgröße \"Massekonzentration pro Volumen\" ist, kommen als Einheiten mg/dl oder g/dl in Frage. Nur UCUM-Einheiten sind zulässig.\n\nNicht immer werden Richtgrenzen mit Einheiten angegeben. Ein typisches Bespiel hierfür: zum Immunitätsnachweis aus einer Probe werden Verdünnungsreihen von 1:2, 1:4, 1:8, 1:16, 1:32 usw. hergestellt. Die Verdünnungen gibt man auf Zellkulturen, die dann mit einem Virus infiziert werden. Die höchste Verdünnungsstufe, bei der noch eine Infektion der Zellen vollständig verhindert wird, also noch ausreichend Antikörper vorhanden sind, wird als Titer angegeben. Dieser Titer wird ohne Einheiten angeben.",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.low.system",
      "path" : "Observation.referenceRange.low.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.low.code",
      "path" : "Observation.referenceRange.low.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.high",
      "path" : "Observation.referenceRange.high",
      "definition" : "Die obere Richtgrenze ist eine quantitative Grenze. Datentyp und Einheit entsprechen denen beim quantitativen Messergebnis. Unter Eigenschaften sind mögliche Werte gelistet, die in dieses Feld hineinpassen könnten, beispielsweise ein Grenzwert aus dem LDT. Bei diesen Beispielen aus dem LDT gilt es zu beachten, dass die Grenzwerte nur für eine Richtgrenze vom Typ \"normal\" gelten.\n\nDisclaimer: FHIR® definiert aktuell nur inklusive Richtgrenzen. Für die Praxistauglichkeit besteht aber die Anforderung, auch exklusive Richtgrenzen abbilden zu können. Diese Thematik wurde schon bei HL7® FHIR® platziert, es gibt aber noch keine abschließende Festlegung dazu. Im Informationsmodell sind beide Optionen bereits dargestellt, um diese Anforderung sichtbar zu machen.",
      "patternQuantity" : {
        "system" : "http://unitsofmeasure.org"
      },
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.high.value",
      "path" : "Observation.referenceRange.high.value",
      "definition" : "Numerischer Wert für eine gemessene Größe, eine Zahl mit optionalen Dezimalstellen.",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.high.unit",
      "path" : "Observation.referenceRange.high.unit",
      "definition" : "Die Einheit leitet sich aus der Messgröße (gemessene Eigenschaft und Mengenmaß) ab. Ein Beispiel: Wenn die Messgröße \"Massekonzentration pro Volumen\" ist, kommen als Einheiten mg/dl oder g/dl in Frage. Nur UCUM-Einheiten sind zulässig.\n\nNicht immer werden Richtgrenzen mit Einheiten angegeben. Ein typisches Bespiel hierfür: zum Immunitätsnachweis aus einer Probe werden Verdünnungsreihen von 1:2, 1:4, 1:8, 1:16, 1:32 usw. hergestellt. Die Verdünnungen gibt man auf Zellkulturen, die dann mit einem Virus infiziert werden. Die höchste Verdünnungsstufe, bei der noch eine Infektion der Zellen vollständig verhindert wird, also noch ausreichend Antikörper vorhanden sind, wird als Titer angegeben. Dieser Titer wird ohne Einheiten angeben.",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.high.system",
      "path" : "Observation.referenceRange.high.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.high.code",
      "path" : "Observation.referenceRange.high.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.type",
      "path" : "Observation.referenceRange.type",
      "definition" : "Die Typisierung von Richtgrenzen bezieht sich auf die Indikation einer Laboruntersuchung. Beispiele sind:\n\n* Referenzbereich, zur Feststellung oder Ausschluss von Erkrankungen\n* Therapeutischer Bereich, zur Einstellung einer medikamentösen Therapie\n* Zielbereich, zur Kontrolle medizinischer Maßnahmen\n* Perzentilen (z. B. circannuale 2,5-97,5, als 95% eines gesunden Kollektivs)\n* Erwartungsbereiche aufgrund endokrinologischer Konstitution",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.type.coding",
      "path" : "Observation.referenceRange.type.coding",
      "definition" : "Hier wird der Richtgrenzen-Typ in codierter Form angegeben.\n\nFür die codierte Richtgrenzen-Typisierung wird eine Auswahl von HL7®-Codes als (bevorzugte) Option angeboten. Die Nutzung der hinterlegten Codes ist abhängig vom Kontext.",
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.type.coding.system",
      "path" : "Observation.referenceRange.type.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.type.coding.version",
      "path" : "Observation.referenceRange.type.coding.version",
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.type.coding.code",
      "path" : "Observation.referenceRange.type.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.type.coding.display",
      "path" : "Observation.referenceRange.type.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.type.coding.userSelected",
      "path" : "Observation.referenceRange.type.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Observation.referenceRange.type.text",
      "path" : "Observation.referenceRange.type.text",
      "definition" : "Hier wird der Richtgrenzen-Typ als Freitext eingegeben.",
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.appliesTo",
      "path" : "Observation.referenceRange.appliesTo",
      "definition" : "Die Ermittlung von \"Normwerten\" basiert üblicherweise auf 95% eines gesunden Erwachsenen-Kollektivs. Normwerte sind Grenzwerte, die sich auf ein „Normalkollektiv“ beziehen. Als Normalkollektiv wird definiert: „gesunde“ PatientInnen ohne erhöhtes Risiko. Es kann spezifische Richtgrenzen für andere Kollektive geben. Mögliche Unterscheidungen sind:\n\n* nach Alter\n* nach klinisch-relevantem Geschlecht (divers, männlich, weiblich)\n* nach Konstitution/Merkmal\n* nach körperlichem Zustand\n\nBeispielsweise:\n\n* Biologisch weiblich (female-typical)\n* Biologisch männlich (male-typical)\n* Weiblich, postmenopausal\n* Erwachsene, männlich, 30-50 Jahre\n* Raucher\n* Kind (Beginn des 4. bis zum vollendeten 12. Lebensjahr)\n\nBei den Angaben zum Kollektiv können mehrere Angaben kombiniert aufgeführt werden. Zusätzlich zur Freitextangabe einer LDT-Information ist in FHIR® auch die Codierung möglich (optional).",
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.appliesTo.coding",
      "path" : "Observation.referenceRange.appliesTo.coding",
      "definition" : "Hier kann der \"Kollektiv-Bezug\" als codierte Information angegeben werden.\n\nDieses ValueSet mit HL7®-Codes für den Kollektivbezug enthält (eHDSI-konform) bislang nur geschlechtsspezifische Bezüge. Viele weitere, mögliche Kollektivbezüge sind noch nicht standardisiert terminologisch abgebildet.",
      "mustSupport" : true,
      "binding" : {
        "strength" : "example",
        "valueSet" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_EHDSIReferenceRangeAppliesTo|1.0.0-update"
      }
    },
    {
      "id" : "Observation.referenceRange.appliesTo.coding.system",
      "path" : "Observation.referenceRange.appliesTo.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.appliesTo.coding.version",
      "path" : "Observation.referenceRange.appliesTo.coding.version",
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.appliesTo.coding.code",
      "path" : "Observation.referenceRange.appliesTo.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.appliesTo.coding.display",
      "path" : "Observation.referenceRange.appliesTo.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.appliesTo.coding.userSelected",
      "path" : "Observation.referenceRange.appliesTo.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Observation.referenceRange.appliesTo.text",
      "path" : "Observation.referenceRange.appliesTo.text",
      "definition" : "Freitextangabe zum Kollektiv-Bezug der Richtgrenzen",
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.age",
      "path" : "Observation.referenceRange.age",
      "max" : "0"
    },
    {
      "id" : "Observation.referenceRange.text",
      "path" : "Observation.referenceRange.text",
      "definition" : "Textbasierter Referenzbereich, der verwendet werden kann, wenn ein quantitativer Bereich nicht geeignet ist.",
      "mustSupport" : true
    },
    {
      "id" : "Observation.hasMember",
      "path" : "Observation.hasMember",
      "max" : "0"
    },
    {
      "id" : "Observation.derivedFrom",
      "path" : "Observation.derivedFrom",
      "definition" : "Laboruntersuchungen, die als Berechnung erstellt werden, können auf Laboruntersuchungen beruhen, die hier referenziert werden. Hierbei ist zu beachten, dass die Angabe solch referenzierter Messunge(en) nicht zwingend vollständig ist.",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Laboratory_Study|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.derivedFrom.reference",
      "path" : "Observation.derivedFrom.reference",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.derivedFrom.type",
      "path" : "Observation.derivedFrom.type",
      "max" : "0"
    },
    {
      "id" : "Observation.derivedFrom.identifier",
      "path" : "Observation.derivedFrom.identifier",
      "max" : "0"
    },
    {
      "id" : "Observation.derivedFrom.display",
      "path" : "Observation.derivedFrom.display",
      "max" : "0"
    },
    {
      "id" : "Observation.component",
      "path" : "Observation.component",
      "max" : "0"
    }]
  }
}

```
