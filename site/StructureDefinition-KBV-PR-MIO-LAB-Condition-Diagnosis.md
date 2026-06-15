# KBV_PR_MIO_LAB_Condition_Diagnosis - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **KBV_PR_MIO_LAB_Condition_Diagnosis**

## Resource Profile: KBV_PR_MIO_LAB_Condition_Diagnosis 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Condition_Diagnosis | *Version*:1.0.0-update |
| Draft as of 2026-06-11 | *Computable Name*:KBV_PR_MIO_LAB_Condition_Diagnosis |
| **Copyright/Legal**: Im folgenden Profil können Codes aus den Code-Systemen SNOMED CT®, LOINC, Ucum, ATC, ICD-10-GM, ICD-10-WHO, OPS, Alpha-ID/Alpha-ID-SE und ICF enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED CT® Clinical Terms® (SNOMED CT® CT®) which is used by permission of SNOMED CT® International. All rights reserved. SNOMED CT® CT®, was originally created by The College of American Pathologists. SNOMED CT® and SNOMED CT® CT are registered trademarks of SNOMED CT® International. Implementers of these artefacts must have the appropriate SNOMED CT® CT Affiliate license. This material contains content from LOINC (http://LOINC.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://LOINC.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED ‘AS IS.’ ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. Dieses Material enthält Inhalte aus ATC. Die Erstellung erfolgte unter Verwendung der Datenträger der amtlichen Fassung der ATC-Klassifikation mit DDD des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICD-10-GM, ICD-10-WHO, OPS Alpha-ID ans Alpha-ID-SE. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICF. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Deutschen Instituts für Medizinische Dokumentation und Information (DIMDI). ICF-Kodes, -Begriffe und -Texte © Weltgesundheitsorganisation, übersetzt und herausgegeben durch das Deutsche Institut für Medizinische Dokumentation und Information von der International classification of functioning, disability and health - ICF, herausgegeben durch die Weltgesundheitsorganisation. | |

 
Hier wird eine Diagnose im Kontext des Laborauftrages abgebildet. 
In den Angaben zum LDT-Mapping findet man Beispiele für Inhalte, die in diese Datenstruktur hineinpassen könnten bzw. auch übernommen werden könnten. Angaben zur Auftragsdiagnose können beispielsweise in Muster 10 vorkommen oder über den Labordatentransfer übermittelt werden. 

**Usages:**

* Use this Profile: [KBV_PR_MIO_LAB_Bundle](StructureDefinition-KBV-PR-MIO-LAB-Bundle.md)
* Refer to this Profile: [KBV_PR_MIO_LAB_ServiceRequest](StructureDefinition-KBV-PR-MIO-LAB-ServiceRequest.md)
* Examples for this Profile: [Condition/1d344181-abf0-428d-9f3f-1bbd84b7684e](Condition-1d344181-abf0-428d-9f3f-1bbd84b7684e.md) and [Condition/988426e1-b7df-44b2-881c-09e7cf482b72](Condition-988426e1-b7df-44b2-881c-09e7cf482b72.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/kbv.mio.laborbefund|current/StructureDefinition/StructureDefinition-KBV-PR-MIO-LAB-Condition-Diagnosis.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-KBV-PR-MIO-LAB-Condition-Diagnosis.csv), [Excel](StructureDefinition-KBV-PR-MIO-LAB-Condition-Diagnosis.xlsx), [Schematron](StructureDefinition-KBV-PR-MIO-LAB-Condition-Diagnosis.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "KBV-PR-MIO-LAB-Condition-Diagnosis",
  "url" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Condition_Diagnosis",
  "version" : "1.0.0-update",
  "name" : "KBV_PR_MIO_LAB_Condition_Diagnosis",
  "title" : "KBV_PR_MIO_LAB_Condition_Diagnosis",
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
  "description" : "Hier wird eine Diagnose im Kontext des Laborauftrages abgebildet.\n\nIn den Angaben zum LDT-Mapping findet man Beispiele für Inhalte, die in diese Datenstruktur hineinpassen könnten bzw. auch übernommen werden könnten. Angaben zur Auftragsdiagnose können beispielsweise in Muster 10 vorkommen oder über den Labordatentransfer übermittelt werden.",
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
  "type" : "Condition",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Condition",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Condition",
      "path" : "Condition",
      "definition" : "Hier wird eine Diagnose im Kontext des Laborauftrages abgebildet.\n\nIn den Angaben zum LDT-Mapping findet man Beispiele für Inhalte, die in diese Datenstruktur hineinpassen könnten bzw. auch übernommen werden könnten. Angaben zur Auftragsdiagnose können beispielsweise in Muster 10 vorkommen oder über den Labordatentransfer übermittelt werden."
    },
    {
      "id" : "Condition.meta",
      "path" : "Condition.meta",
      "mustSupport" : true
    },
    {
      "id" : "Condition.meta.id",
      "path" : "Condition.meta.id",
      "max" : "0"
    },
    {
      "id" : "Condition.meta.versionId",
      "path" : "Condition.meta.versionId",
      "mustSupport" : true
    },
    {
      "id" : "Condition.meta.lastUpdated",
      "path" : "Condition.meta.lastUpdated",
      "mustSupport" : true
    },
    {
      "id" : "Condition.meta.source",
      "path" : "Condition.meta.source",
      "max" : "0"
    },
    {
      "id" : "Condition.implicitRules",
      "path" : "Condition.implicitRules",
      "max" : "0"
    },
    {
      "id" : "Condition.language",
      "path" : "Condition.language",
      "max" : "0"
    },
    {
      "id" : "Condition.text.status",
      "path" : "Condition.text.status",
      "patternCode" : "extensions"
    },
    {
      "id" : "Condition.contained",
      "path" : "Condition.contained",
      "max" : "0"
    },
    {
      "id" : "Condition.extension",
      "path" : "Condition.extension",
      "max" : "0"
    },
    {
      "id" : "Condition.identifier",
      "path" : "Condition.identifier",
      "max" : "0"
    },
    {
      "id" : "Condition.clinicalStatus",
      "path" : "Condition.clinicalStatus",
      "max" : "0"
    },
    {
      "id" : "Condition.verificationStatus",
      "path" : "Condition.verificationStatus",
      "max" : "0"
    },
    {
      "id" : "Condition.category",
      "path" : "Condition.category",
      "max" : "0"
    },
    {
      "id" : "Condition.severity",
      "path" : "Condition.severity",
      "max" : "0"
    },
    {
      "id" : "Condition.code",
      "path" : "Condition.code",
      "definition" : "In diesem Element werden Angaben zur Diagnose in Form einer Codierung gemacht. Diese werden als codierte Information und/oder als Freitext angegeben.",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding",
      "path" : "Condition.code.coding",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "system"
        }],
        "rules" : "open"
      },
      "definition" : "Jede Diagnose muss mindestens einen Diagnosecode besitzen. Hierbei können die vorgeschlagenen Codesysteme (ICD, Alpha-ID, SNOMED CT®, ORPHANET) und/oder andere Codesysteme verwendet werden.",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding.system",
      "path" : "Condition.code.coding.system",
      "min" : 1
    },
    {
      "id" : "Condition.code.coding.code",
      "path" : "Condition.code.coding.code",
      "min" : 1
    },
    {
      "id" : "Condition.code.coding.display",
      "path" : "Condition.code.coding.display",
      "min" : 1
    },
    {
      "id" : "Condition.code.coding:ICD-10-GM",
      "path" : "Condition.code.coding",
      "sliceName" : "ICD-10-GM",
      "definition" : "In diesem Element wird der Code für die Diagnose als ICD-10-Code angegeben, inklusive Anzeigename (Display Name) sowie Name und Version des Codesystems.\n\nDer ICD-Code ist in Deutschland das abrechnungsrelevante Codesystem im ambulanten und stationären Bereich. So wird z. B. bei der Abrechnung nach § 301 und § 295 SGB V die Codierung von Diagnosen mittels ICD-10 GM gesetzlich vorgeschrieben. Im ICD-System ist im Gegensatz zu anderen Codesystem eine detaillierte Spezifikation von Diagnosen ohne Umwege möglich: die Einordnung der diagnostizierten Erkrankung als Ätiologie oder Manifestation, die Diagnosesicherheit und die Beschreibung des Schweregrades wie auch der Seitenlokalisation.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Coding",
        "profile" : ["http://fhir.de/StructureDefinition/CodingICD10GM"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:ICD-10-GM.extension:Mehrfachcodierungs-Kennzeichen",
      "path" : "Condition.code.coding.extension",
      "sliceName" : "Mehrfachcodierungs-Kennzeichen",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:ICD-10-GM.extension:Mehrfachcodierungs-Kennzeichen.value[x]",
      "path" : "Condition.code.coding.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:ICD-10-GM.extension:Mehrfachcodierungs-Kennzeichen.value[x].system",
      "path" : "Condition.code.coding.extension.value[x].system",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:ICD-10-GM.extension:Mehrfachcodierungs-Kennzeichen.value[x].version",
      "path" : "Condition.code.coding.extension.value[x].version",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:ICD-10-GM.extension:Mehrfachcodierungs-Kennzeichen.value[x].code",
      "path" : "Condition.code.coding.extension.value[x].code",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:ICD-10-GM.extension:Mehrfachcodierungs-Kennzeichen.value[x].display",
      "path" : "Condition.code.coding.extension.value[x].display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:ICD-10-GM.extension:Mehrfachcodierungs-Kennzeichen.value[x].userSelected",
      "path" : "Condition.code.coding.extension.value[x].userSelected",
      "max" : "0"
    },
    {
      "id" : "Condition.code.coding:ICD-10-GM.extension:Seitenlokalisation",
      "path" : "Condition.code.coding.extension",
      "sliceName" : "Seitenlokalisation",
      "definition" : "Zur Spezifizierung von Diagnoseangaben (ICD-10) dürfen die Zusatzkennzeichen für die Seitigkeit (R, L oder B) angegeben werden, d. h. die Angabe ist freiwillig; dies gilt für die stationäre und die ambulante Versorgung.",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:ICD-10-GM.extension:Seitenlokalisation.value[x]",
      "path" : "Condition.code.coding.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:ICD-10-GM.extension:Seitenlokalisation.value[x].system",
      "path" : "Condition.code.coding.extension.value[x].system",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:ICD-10-GM.extension:Seitenlokalisation.value[x].version",
      "path" : "Condition.code.coding.extension.value[x].version",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:ICD-10-GM.extension:Seitenlokalisation.value[x].code",
      "path" : "Condition.code.coding.extension.value[x].code",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:ICD-10-GM.extension:Seitenlokalisation.value[x].display",
      "path" : "Condition.code.coding.extension.value[x].display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:ICD-10-GM.extension:Seitenlokalisation.value[x].userSelected",
      "path" : "Condition.code.coding.extension.value[x].userSelected",
      "max" : "0"
    },
    {
      "id" : "Condition.code.coding:ICD-10-GM.extension:Diagnosesicherheit",
      "path" : "Condition.code.coding.extension",
      "sliceName" : "Diagnosesicherheit",
      "definition" : "Die Diagnosesicherheit, d. h. wie sicher die Diagnose im Einzelfall zu werten ist, wird durch ein Zusatzkennzeichen zum ICD-Code angegeben. Für Abrechnungszwecke in der ambulanten Versorgung muss obligatorisch ein Zusatzkennzeichen für die Diagnosesicherheit (A, G, V oder Z) angegeben werden, d. h. die Angabe ist obligatorisch. In der stationären Versorgung sind diese Zusatzkennzeichen für die Angabe der Diagnosesicherheit für Abrechnungszwecke dagegen nicht zulässig.",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:ICD-10-GM.extension:Diagnosesicherheit.value[x]",
      "path" : "Condition.code.coding.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:ICD-10-GM.extension:Diagnosesicherheit.value[x].system",
      "path" : "Condition.code.coding.extension.value[x].system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:ICD-10-GM.extension:Diagnosesicherheit.value[x].version",
      "path" : "Condition.code.coding.extension.value[x].version",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:ICD-10-GM.extension:Diagnosesicherheit.value[x].code",
      "path" : "Condition.code.coding.extension.value[x].code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:ICD-10-GM.extension:Diagnosesicherheit.value[x].display",
      "path" : "Condition.code.coding.extension.value[x].display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:ICD-10-GM.extension:Diagnosesicherheit.value[x].userSelected",
      "path" : "Condition.code.coding.extension.value[x].userSelected",
      "max" : "0"
    },
    {
      "id" : "Condition.code.coding:ICD-10-GM.system",
      "path" : "Condition.code.coding.system",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:ICD-10-GM.version",
      "path" : "Condition.code.coding.version",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:ICD-10-GM.code",
      "path" : "Condition.code.coding.code",
      "definition" : "In diesem Element wird der Code für die Diagnose angegeben, inklusive Anzeigename (Display Name) sowie Name und Version des Code-Systems, allerdings ohne ein Mehrfachcodierungskennzeichen (z. B. '*', '†' oder '!'). Diese sind in anderen entsprechenden Elementen abzubilden.",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:ICD-10-GM.display",
      "path" : "Condition.code.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:ICD-10-GM.userSelected",
      "path" : "Condition.code.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Condition.code.coding:alphaId",
      "path" : "Condition.code.coding",
      "sliceName" : "alphaId",
      "definition" : "In diesem Element wird der Code für die Diagnose als Alpha-ID-Code angegeben, inklusive Anzeigename (Display Name) sowie Name und Version des Codesystems.\n\nBasierend auf dem alphabetischen Verzeichnis der deutschen Modifikation der International Classification of Diseases (ICD-GM) wird jeder Erkrankung eine fortlaufende Alpha-ID zugewiesen. Im Gegensatz zum ICD-Code erlaubt die Alpha-ID eine ein-eindeutige, individuelle und nicht-klassifizierende Identifikation einer Erkrankung. Die Alpha-ID ist kumulativ und stabil, während ICD-Codes Überarbeitungen erfahren.",
      "comment" : "Bei Alpha-ID-Codes, die zu postkoordinierten ICD-10-Codes gemappt werden, sollten diese nur einmal bei der Primärdiagnose und nicht mehr bei den Sekundärdiagnosen angeben werden (Stichpunkt: related Conditions in FHIR). In Fällen bei denen eine abweichende Diagnosesicherheit zwischen Primär- und Sekundärdiagnose vorhanden ist muss sichergestellt werden, dass die Diagnosesicherheit der Primärdiagnose zu dem assozierten Alpha-ID-Code passt. Siehe der Implementierungsguide (IG) der deutschen Basisprofile von HL7",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Coding",
        "profile" : ["http://fhir.de/StructureDefinition/CodingAlphaID"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:alphaId.system",
      "path" : "Condition.code.coding.system",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:alphaId.version",
      "path" : "Condition.code.coding.version",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:alphaId.code",
      "path" : "Condition.code.coding.code",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:alphaId.display",
      "path" : "Condition.code.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:alphaId.userSelected",
      "path" : "Condition.code.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Condition.code.coding:snomed",
      "path" : "Condition.code.coding",
      "sliceName" : "snomed",
      "definition" : "In diesem Element wird der Code für die Diagnose als SNOMED CT®-Code angegeben, inklusive Anzeigename (Display Name) sowie Name und Version des Codesystems.\n\nSNOMED CT® bietet eine umfassende Codiermöglichkeit zu medizinischen Diagnosen, Befunden und Ereignissen. Dazu gehören beispielsweise alle Children der \"(Finding)\"-Konzepte, darunter auch die \"(Disorder)\"-Konzepte.",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.kbv.de/ValueSet/KBV_VS_Base_Diagnosis_SNOMED_CT"
      }
    },
    {
      "id" : "Condition.code.coding:snomed.system",
      "path" : "Condition.code.coding.system",
      "min" : 1,
      "fixedUri" : "http://snomed.info/sct",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:snomed.version",
      "path" : "Condition.code.coding.version",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:snomed.code",
      "path" : "Condition.code.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:snomed.display",
      "path" : "Condition.code.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:snomed.userSelected",
      "path" : "Condition.code.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Condition.code.coding:orphanet",
      "path" : "Condition.code.coding",
      "sliceName" : "orphanet",
      "definition" : "In diesem Element wird der Code für die Diagnose als ORPHANET-Code angegeben, inklusive Anzeigename (Display Name) sowie Name und Version des Codesystems.\n\nORPHANET ist eine Initiative der Europäischen Union mit französischen Wurzeln zur Erfassung von seltenen Erkrankungen. Relevant für die Eingrenzung von seltenen Krankheiten ist ihre Definition anhand der Prävalenz. Die ORPHANET-Datenbank umfasst mehrere tausend seltene Krankheiten. Es gibt Mappings zwischen der ORPHAnumber und anderen Diagnosecodiersystemen.",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:orphanet.system",
      "path" : "Condition.code.coding.system",
      "min" : 1,
      "fixedUri" : "http://www.orpha.net",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:orphanet.version",
      "path" : "Condition.code.coding.version",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:orphanet.code",
      "path" : "Condition.code.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:orphanet.display",
      "path" : "Condition.code.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:orphanet.userSelected",
      "path" : "Condition.code.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Condition.code.text",
      "path" : "Condition.code.text",
      "short" : "Diagnoseerläuterung",
      "definition" : "Dieses Element ermöglicht die Angabe einer freitextlichen Diagnosebezeichnung, in der auch nähere Ausführungen oder zusätzliche Anmerkungen zu einer Diagnose aufgenommen werden können. Auch die textliche Erläuterung des Schweregrades kann hier abgebildet werden",
      "mustSupport" : true
    },
    {
      "id" : "Condition.bodySite",
      "path" : "Condition.bodySite",
      "max" : "0"
    },
    {
      "id" : "Condition.subject",
      "path" : "Condition.subject",
      "short" : "Zu behandelnde Person",
      "definition" : "Hier wird die zu behandelnde Person referenziert.",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Patient|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Condition.subject.identifier",
      "path" : "Condition.subject.identifier",
      "min" : 1,
      "type" : [{
        "code" : "Identifier",
        "profile" : ["http://fhir.de/StructureDefinition/identifier-kvid-10"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Condition.encounter",
      "path" : "Condition.encounter",
      "max" : "0"
    },
    {
      "id" : "Condition.onset[x]",
      "path" : "Condition.onset[x]",
      "slicing" : {
        "discriminator" : [{
          "type" : "type",
          "path" : "$this"
        }],
        "ordered" : false,
        "rules" : "open"
      },
      "max" : "0"
    },
    {
      "id" : "Condition.onset[x]:onsetPeriod",
      "path" : "Condition.onset[x]",
      "sliceName" : "onsetPeriod",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "Period"
      }]
    },
    {
      "id" : "Condition.onset[x]:onsetRange",
      "path" : "Condition.onset[x]",
      "sliceName" : "onsetRange",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "Range"
      }]
    },
    {
      "id" : "Condition.onset[x]:onsetDateTime",
      "path" : "Condition.onset[x]",
      "sliceName" : "onsetDateTime",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "dateTime"
      }]
    },
    {
      "id" : "Condition.onset[x]:onsetAge",
      "path" : "Condition.onset[x]",
      "sliceName" : "onsetAge",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "Age"
      }]
    },
    {
      "id" : "Condition.abatement[x]",
      "path" : "Condition.abatement[x]",
      "slicing" : {
        "discriminator" : [{
          "type" : "type",
          "path" : "$this"
        }],
        "ordered" : false,
        "rules" : "open"
      },
      "max" : "0"
    },
    {
      "id" : "Condition.abatement[x]:abatementPeriod",
      "path" : "Condition.abatement[x]",
      "sliceName" : "abatementPeriod",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "Period"
      }]
    },
    {
      "id" : "Condition.abatement[x]:abatementRange",
      "path" : "Condition.abatement[x]",
      "sliceName" : "abatementRange",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "Range"
      }]
    },
    {
      "id" : "Condition.abatement[x]:abatementDateTime",
      "path" : "Condition.abatement[x]",
      "sliceName" : "abatementDateTime",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "dateTime"
      }]
    },
    {
      "id" : "Condition.abatement[x]:abatementAge",
      "path" : "Condition.abatement[x]",
      "sliceName" : "abatementAge",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "Age"
      }]
    },
    {
      "id" : "Condition.recordedDate",
      "path" : "Condition.recordedDate",
      "max" : "0"
    },
    {
      "id" : "Condition.recorder",
      "path" : "Condition.recorder",
      "max" : "0"
    },
    {
      "id" : "Condition.asserter",
      "path" : "Condition.asserter",
      "max" : "0"
    },
    {
      "id" : "Condition.stage",
      "path" : "Condition.stage",
      "max" : "0"
    },
    {
      "id" : "Condition.evidence",
      "path" : "Condition.evidence",
      "max" : "0"
    },
    {
      "id" : "Condition.note",
      "path" : "Condition.note",
      "max" : "0"
    }]
  }
}

```
