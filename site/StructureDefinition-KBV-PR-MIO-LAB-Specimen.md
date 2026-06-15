# KBV_PR_MIO_LAB_Specimen - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **KBV_PR_MIO_LAB_Specimen**

## Resource Profile: KBV_PR_MIO_LAB_Specimen 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Specimen | *Version*:1.0.0-update |
| Draft as of 2026-06-11 | *Computable Name*:KBV_PR_MIO_LAB_Specimen |
| **Copyright/Legal**: Im folgenden Profil können Codes aus den Code-Systemen SNOMED CT®, LOINC, Ucum, ATC, ICD-10-GM, ICD-10-WHO, OPS, Alpha-ID/Alpha-ID-SE und ICF enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED CT® Clinical Terms® (SNOMED CT® CT®) which is used by permission of SNOMED CT® International. All rights reserved. SNOMED CT® CT®, was originally created by The College of American Pathologists. SNOMED CT® and SNOMED CT® CT are registered trademarks of SNOMED CT® International. Implementers of these artefacts must have the appropriate SNOMED CT® CT Affiliate license. This material contains content from LOINC (http://LOINC.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://LOINC.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED ‘AS IS.’ ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. Dieses Material enthält Inhalte aus ATC. Die Erstellung erfolgte unter Verwendung der Datenträger der amtlichen Fassung der ATC-Klassifikation mit DDD des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICD-10-GM, ICD-10-WHO, OPS Alpha-ID ans Alpha-ID-SE. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICF. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Deutschen Instituts für Medizinische Dokumentation und Information (DIMDI). ICF-Kodes, -Begriffe und -Texte © Weltgesundheitsorganisation, übersetzt und herausgegeben durch das Deutsche Institut für Medizinische Dokumentation und Information von der International classification of functioning, disability and health - ICF, herausgegeben durch die Weltgesundheitsorganisation. | |

 
Dieses Profil bildet eine Probe ab. 
Identifizierung und Eigenschaften der primären oder sekundären Probe, auf deren Basis die Laboruntersuchung als Messung durchgeführt wird. Ein inhaltliches Beispiel für die Unterscheidung von Primär- und Sekundärprobe: 
* Primärprobe: Probenart = Vollblut (über LOINC® oder ergänzende Spezifizierung Probenart); Probengewinnung / Methode = Blutabnahme; Probenverarbeitung / Methode = Zentrifugieren
* Sekundärprobe: Probenart = Serum (über LOINC® oder ergänzende Spezifizierung Probenart); Probengewinnung / Methode = Zentrifugieren zur Serumgewinnung; Probe / Ausgangsmaterial = Vollblut
 

**Usages:**

* Use this Profile: [KBV_PR_MIO_LAB_Bundle](StructureDefinition-KBV-PR-MIO-LAB-Bundle.md)
* Refer to this Profile: [KBV_PR_MIO_LAB_DiagnosticReport](StructureDefinition-KBV-PR-MIO-LAB-DiagnosticReport.md), [KBV_PR_MIO_LAB_Observation_Laboratory_Study](StructureDefinition-KBV-PR-MIO-LAB-Observation-Laboratory-Study.md) and [KBV_PR_MIO_LAB_Specimen](StructureDefinition-KBV-PR-MIO-LAB-Specimen.md)
* Examples for this Profile: [Specimen/4f47fe9c-d92e-46f4-ad6d-85740aaa467b](Specimen-4f47fe9c-d92e-46f4-ad6d-85740aaa467b.md) and [Specimen/eb7fbea2-95bd-4618-b38d-ce69cde79726](Specimen-eb7fbea2-95bd-4618-b38d-ce69cde79726.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/kbv.mio.laborbefund|current/StructureDefinition/StructureDefinition-KBV-PR-MIO-LAB-Specimen.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-KBV-PR-MIO-LAB-Specimen.csv), [Excel](StructureDefinition-KBV-PR-MIO-LAB-Specimen.xlsx), [Schematron](StructureDefinition-KBV-PR-MIO-LAB-Specimen.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "KBV-PR-MIO-LAB-Specimen",
  "url" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Specimen",
  "version" : "1.0.0-update",
  "name" : "KBV_PR_MIO_LAB_Specimen",
  "title" : "KBV_PR_MIO_LAB_Specimen",
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
  "description" : "Dieses Profil bildet eine Probe ab.\n\nIdentifizierung und Eigenschaften der primären oder sekundären Probe, auf deren Basis die Laboruntersuchung als Messung durchgeführt wird. Ein inhaltliches Beispiel für die Unterscheidung von Primär- und Sekundärprobe:\n\n* Primärprobe: Probenart = Vollblut (über LOINC® oder ergänzende Spezifizierung Probenart); Probengewinnung / Methode = Blutabnahme; Probenverarbeitung / Methode = Zentrifugieren\n\n* Sekundärprobe: Probenart = Serum (über LOINC® oder ergänzende Spezifizierung Probenart); Probengewinnung / Methode = Zentrifugieren zur Serumgewinnung; Probe / Ausgangsmaterial = Vollblut",
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
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Specimen",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Specimen",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Specimen",
      "path" : "Specimen",
      "definition" : "Dieses Profil bildet eine Probe ab.\n\nIdentifizierung und Eigenschaften der primären oder sekundären Probe, auf deren Basis die Laboruntersuchung als Messung durchgeführt wird. Ein inhaltliches Beispiel für die Unterscheidung von Primär- und Sekundärprobe:\n\n* Primärprobe: Probenart = Vollblut (über LOINC® oder ergänzende Spezifizierung Probenart); Probengewinnung / Methode = Blutabnahme; Probenverarbeitung / Methode = Zentrifugieren\n\n* Sekundärprobe: Probenart = Serum (über LOINC® oder ergänzende Spezifizierung Probenart); Probengewinnung / Methode = Zentrifugieren zur Serumgewinnung; Probe / Ausgangsmaterial = Vollblut"
    },
    {
      "id" : "Specimen.meta",
      "path" : "Specimen.meta",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.meta.id",
      "path" : "Specimen.meta.id",
      "max" : "0"
    },
    {
      "id" : "Specimen.meta.versionId",
      "path" : "Specimen.meta.versionId",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.meta.lastUpdated",
      "path" : "Specimen.meta.lastUpdated",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.meta.source",
      "path" : "Specimen.meta.source",
      "max" : "0"
    },
    {
      "id" : "Specimen.implicitRules",
      "path" : "Specimen.implicitRules",
      "max" : "0"
    },
    {
      "id" : "Specimen.language",
      "path" : "Specimen.language",
      "max" : "0"
    },
    {
      "id" : "Specimen.text.status",
      "path" : "Specimen.text.status",
      "patternCode" : "extensions"
    },
    {
      "id" : "Specimen.contained",
      "path" : "Specimen.contained",
      "max" : "0"
    },
    {
      "id" : "Specimen.extension",
      "path" : "Specimen.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "ordered" : false,
        "rules" : "open"
      },
      "mustSupport" : true
    },
    {
      "id" : "Specimen.extension:focus",
      "path" : "Specimen.extension",
      "sliceName" : "focus",
      "short" : "Außerkörperliche Quelle zur Probenentnahme",
      "definition" : "Falls die Probe nicht unmittelbar aus dem menschlichen Körper direkt entnommen wird, sondern beispielsweise aus einem Sammelgefäß oder Katheter gewonnen wird.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://hl7.eu/fhir/laboratory/StructureDefinition/specimen-focus"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Specimen.extension:focus.value[x]",
      "path" : "Specimen.extension.value[x]",
      "min" : 1,
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Device_Specimen_Subject|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Specimen.extension:focus.value[x].reference",
      "path" : "Specimen.extension.value[x].reference",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.extension:focus.value[x].type",
      "path" : "Specimen.extension.value[x].type",
      "max" : "0"
    },
    {
      "id" : "Specimen.extension:focus.value[x].identifier",
      "path" : "Specimen.extension.value[x].identifier",
      "max" : "0"
    },
    {
      "id" : "Specimen.extension:focus.value[x].display",
      "path" : "Specimen.extension.value[x].display",
      "max" : "0"
    },
    {
      "id" : "Specimen.identifier",
      "path" : "Specimen.identifier",
      "definition" : "Die Rili-BÄK fordert, dass das eingesandte Probenmaterial und Teilmengen davon eindeutig einem/r Patient:in zuzuordnen sein müssen. Der Sachverhalt, dass es zu einem Untersuchungsmaterial Teilmengen geben kann, wird im Datenmodell berücksichtigt, indem es sowohl die \"Identifikation Probe Einsender\" (Specimen.identifier 1..*) gibt, als auch für mögliche Teilmengen daraus die \"Probenbehälter-ID\" (Device_Specimen_Container.identifier 0..*).",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.identifier.use",
      "path" : "Specimen.identifier.use",
      "max" : "0"
    },
    {
      "id" : "Specimen.identifier.type",
      "path" : "Specimen.identifier.type",
      "definition" : "Für die Probe können unterschiedliche Identifikatoren vergeben werden. Unterschieden werden beispielsweise \"Identifkator, den die auftragerteilende Institution vergibt\" (Order-Placer, Einsender) und \"Identifkator, den die auftragserfüllende Laboreinrichtung vergibt\" (Order-Filler, Auftragnehmer). Der ID-Typ gibt an, um welche Art von Proben-Identifikator es sich handelt.",
      "mustSupport" : true,
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Identifier_Type|1.0.0-update"
      }
    },
    {
      "id" : "Specimen.identifier.type.coding",
      "path" : "Specimen.identifier.type.coding",
      "definition" : "Code für die Typisierung des Proben-Identifikators.\n\nHL7®-Code für die Typisierung des Proben-Identifikators. In diesem Kontext mögliche Codes sind beispielsweise:\n* PLAC (Placer Identifier) - Identifikator, den die Auftragserteilende Institution vergibt\n* ACSN (Accession ID) - Identifikator, den das Labor zum Auftragseingang vergibt\n* FILL (Filler Identifier) - Identifikator, den das Labor zur Auftragserfüllung vergibt\n* SID (Specimen ID)",
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.identifier.type.coding.system",
      "path" : "Specimen.identifier.type.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.identifier.type.coding.version",
      "path" : "Specimen.identifier.type.coding.version",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.identifier.type.coding.code",
      "path" : "Specimen.identifier.type.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.identifier.type.coding.display",
      "path" : "Specimen.identifier.type.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.identifier.type.coding.userSelected",
      "path" : "Specimen.identifier.type.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Specimen.identifier.type.text",
      "path" : "Specimen.identifier.type.text",
      "definition" : "Text für die Typisierung des Proben-Identifikators.",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.identifier.system",
      "path" : "Specimen.identifier.system",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.identifier.value",
      "path" : "Specimen.identifier.value",
      "definition" : "Identifikator-Wert",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.identifier.period",
      "path" : "Specimen.identifier.period",
      "max" : "0"
    },
    {
      "id" : "Specimen.identifier.assigner",
      "path" : "Specimen.identifier.assigner",
      "max" : "0"
    },
    {
      "id" : "Specimen.accessionIdentifier",
      "path" : "Specimen.accessionIdentifier",
      "max" : "0"
    },
    {
      "id" : "Specimen.status",
      "path" : "Specimen.status",
      "definition" : "Hier wird ein Code für den Probenstatus vor der Messung angegeben:\n\n* Verfügbar: das physische Exemplar ist vorhanden und in gutem Zustand.\n* Nicht verfügbar: es ist kein physisches Exemplar vorhanden, da es entweder verloren, zerstört oder verbraucht wurde.\n* Nicht geeignet: die Probe kann aufgrund eines Qualitätsproblems, z. B. eines zerbrochenen Behälters, einer Verunreinigung oder eines abgelaufenen Verfallsdatums, nicht verwendet werden.\n* Irrtümliche Eingabe: die Probe wurde irrtümlich eingegeben und ist daher ungültig.",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.type",
      "path" : "Specimen.type",
      "short" : "Probenart, ergänzende Spezifizierung (z.B. postkoordinierend)",
      "definition" : "Probenart, ergänzende Spezifizierung Code/Bezeichnung\n\nDer LOINC®-Code impliziert über die LOINC®-Achse SYSTEM bereits eine Probenart. Falls der Wert für die LOINC®-Achse SYSTEM nicht ausreichend spezifisch ist, kann in Bezug auf den LOINC®-Code der Laboruntersuchung, die \"Probenart, ergänzende Spezifizierung\" (Specimen.type) ergänzt werden. Ein Beispiel: Wenn mit dem LOINC®-Code das Untersuchungsmaterial \"Blut\" definiert ist, könnte als ergänzende Spezifikation der SNOMED CT®-Code für \"arterielles Blut\" dokumentiert werden.",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.type.coding",
      "path" : "Specimen.type.coding",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "$this"
        }],
        "rules" : "open"
      },
      "definition" : "Hier wird die Probenart als codierte Information angegeben.",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.type.coding.system",
      "path" : "Specimen.type.coding.system",
      "min" : 1
    },
    {
      "id" : "Specimen.type.coding.code",
      "path" : "Specimen.type.coding.code",
      "min" : 1
    },
    {
      "id" : "Specimen.type.coding.display",
      "path" : "Specimen.type.coding.display",
      "min" : 1
    },
    {
      "id" : "Specimen.type.coding:snomed",
      "path" : "Specimen.type.coding",
      "sliceName" : "snomed",
      "definition" : "Hier kann ein Code aus SNOMED CT® angegeben werden.",
      "min" : 0,
      "max" : "1",
      "patternCoding" : {
        "system" : "http://snomed.info/sct"
      },
      "mustSupport" : true,
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Specimen_Type_SNOMED_CT|1.0.0-update"
      }
    },
    {
      "id" : "Specimen.type.coding:snomed.system",
      "path" : "Specimen.type.coding.system",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.type.coding:snomed.version",
      "path" : "Specimen.type.coding.version",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.type.coding:snomed.code",
      "path" : "Specimen.type.coding.code",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.type.coding:snomed.display",
      "path" : "Specimen.type.coding.display",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.type.coding:snomed.userSelected",
      "path" : "Specimen.type.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Specimen.type.text",
      "path" : "Specimen.type.text",
      "definition" : "Freitext Bezeichnung für die ergänzende Spezifizierung der Probenart. Mögliche Verwendung:\n\n* als Freitextergänzung, wenn die Probenart durch die Spezifikation Laboruntersuchung (LOINC® Code: SYSTEM) nicht ausreichend spezifisch codiert werden kann\n* als Freitextergänzung, wenn die die Probenart durch Probenart, ergänzende Spezifizierung/SNOMED CT®-Code nicht ausreichend spezifisch bezeichnet werden kann\n* ersatzweise, wenn gar keine passende Codierung zugeordnet werden kann\n* wenn zusätzlich eine Freitext-Bezeichnung aus der LDT-Kommunikation übernommen werden soll.",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.subject",
      "path" : "Specimen.subject",
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
      "id" : "Specimen.subject.identifier",
      "path" : "Specimen.subject.identifier",
      "min" : 1,
      "type" : [{
        "code" : "Identifier",
        "profile" : ["http://fhir.de/StructureDefinition/identifier-kvid-10"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Specimen.receivedTime",
      "path" : "Specimen.receivedTime",
      "definition" : "Zeitpunkt des Eingangs der Probe im Labor. Dieser Zeitpunkt sollte nach Möglichkeit minutengenau angegeben werden. Im klinischen Alltag ist die minutengenaue Erfassung nicht immer realistisch. Deshalb ist die Mindestangabe hier tagesgenau.",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.parent",
      "path" : "Specimen.parent",
      "definition" : "Ausgangsmaterial für eine Sekundärprobe. Die Sekundärprobe existiert nur auf Basis einer Primärprobe. Wenn eine Sekundärprobe angegeben wird, dann ist das Ausgangsmaterial verpflichtend anzugeben, damit der Bezug hergestellt werden kann.",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Specimen|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Specimen.parent.reference",
      "path" : "Specimen.parent.reference",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.parent.type",
      "path" : "Specimen.parent.type",
      "max" : "0"
    },
    {
      "id" : "Specimen.parent.identifier",
      "path" : "Specimen.parent.identifier",
      "max" : "0"
    },
    {
      "id" : "Specimen.parent.display",
      "path" : "Specimen.parent.display",
      "max" : "0"
    },
    {
      "id" : "Specimen.request",
      "path" : "Specimen.request",
      "max" : "0"
    },
    {
      "id" : "Specimen.collection",
      "path" : "Specimen.collection",
      "definition" : "Optionale Angaben zur Probengewinnung, dazu gehören: Zeitangabe, Methode der Probengewinnung, Entnahmeort, Angabe zum Nüchternstatus.",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.extension",
      "path" : "Specimen.collection.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "ordered" : false,
        "rules" : "open"
      },
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.extension:bodySite",
      "path" : "Specimen.collection.extension",
      "sliceName" : "bodySite",
      "short" : "Körperstelle der Probenentnahme",
      "definition" : "Es kann eine Körperstruktur mit Seitenangabe, weiterer Lokalisierung und Aussage zur Morphologie angegeben werden.\n\nEs wäre auch möglich, dass eine Probenentnahme aus mehr als einer Körperstelle gewonnen wird.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://hl7.org/fhir/StructureDefinition/bodySite|5.3.0"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.extension:bodySite.value[x]",
      "path" : "Specimen.collection.extension.value[x]",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_BodyStructure|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.collector",
      "path" : "Specimen.collection.collector",
      "definition" : "Person, welche die Probe entnimmt.",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_PractitionerRole|1.0.0-update",
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Practitioner|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.collector.reference",
      "path" : "Specimen.collection.collector.reference",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.collector.type",
      "path" : "Specimen.collection.collector.type",
      "max" : "0"
    },
    {
      "id" : "Specimen.collection.collector.identifier",
      "path" : "Specimen.collection.collector.identifier",
      "max" : "0"
    },
    {
      "id" : "Specimen.collection.collector.display",
      "path" : "Specimen.collection.collector.display",
      "max" : "0"
    },
    {
      "id" : "Specimen.collection.collected[x]",
      "path" : "Specimen.collection.collected[x]",
      "slicing" : {
        "discriminator" : [{
          "type" : "type",
          "path" : "$this"
        }],
        "ordered" : false,
        "rules" : "open"
      },
      "definition" : "Hier wird eine Zeitangabe zur Probengewinnung vorgenommen.",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.collected[x]:collectedDateTime",
      "path" : "Specimen.collection.collected[x]",
      "sliceName" : "collectedDateTime",
      "definition" : "Punktueller Zeitpunkt der Entnahme/Abnahme/Gewinnung der Probe. Dieser Zeitpunkt sollte nach Möglichkeit minutengenau angegeben werden. Im klinischen Alltag ist die minutengenaue Erfassung zur Probenentnahme nicht immer realistisch. Die Mindestangabe ist hier tagesgenau.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "dateTime"
      }],
      "constraint" : [{
        "key" : "date-1",
        "severity" : "error",
        "human" : "Datetime must be at least day, month and year.",
        "expression" : "($this as dateTime).toString().length() >= 10",
        "source" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Specimen"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.collected[x]:collectedPeriod",
      "path" : "Specimen.collection.collected[x]",
      "sliceName" : "collectedPeriod",
      "definition" : "Zeitraum mit Start- und Endzeitpunkt, hier geht es um den konkreten Zeitraum die Probenentnahme.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Period"
      }],
      "constraint" : [{
        "key" : "spec-collected-1",
        "severity" : "error",
        "human" : "The start and end of the time period must include at least day, month and year.",
        "expression" : "($this.start.toString().length() >= 16) and ($this.end.toString().length() >= 16)",
        "source" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Specimen"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.collected[x]:collectedPeriod.start",
      "path" : "Specimen.collection.collected[x].start",
      "definition" : "Beginn eines Zeitraumes.",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.collected[x]:collectedPeriod.end",
      "path" : "Specimen.collection.collected[x].end",
      "definition" : "Ende eines Zeitraumes.",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.duration",
      "path" : "Specimen.collection.duration",
      "definition" : "Dauer steht für eine Zeitspanne, sie ist mindestens durch einen quantitativen Wert und eine zeitbezogene UCUM-Einheit definiert. Hier geht es um die zur Probengewinnung benötigte Zeitspanne, z. B. Sammelurin über einige Stunden.",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.duration.value",
      "path" : "Specimen.collection.duration.value",
      "definition" : "Hier wird der numerische Wert der Zeitdauer angegeben. Hierbei handelt es sich um eine Zahl mit optionalen Dezimalstellen.",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.duration.comparator",
      "path" : "Specimen.collection.duration.comparator",
      "definition" : "Der Komparator kann sein:\n\n* < (kleiner)\n* <= (kleiner oder gleich)\n* >= (größer oder gleich)\n* > (größer)\n\nDer häufigste Option ist, dass eine Dauer = (gleich) eines Wertes ist. In diesem Fall wird kein Komparator gesetzt.",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.duration.unit",
      "path" : "Specimen.collection.duration.unit",
      "definition" : "Hier wird die Einheit der Zeitdauer angegeben. Es sind nur UCUM-Einheiten zulässig.",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.duration.system",
      "path" : "Specimen.collection.duration.system",
      "definition" : "Hier wird die Einheit der Zeitdauer angegeben. Es sind nur UCUM-Einheiten zulässig.",
      "min" : 1,
      "patternUri" : "http://unitsofmeasure.org",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.duration.code",
      "path" : "Specimen.collection.duration.code",
      "definition" : "Hier wird die Einheit der Zeitdauer angegeben. Es sind nur UCUM-Einheiten zulässig.",
      "min" : 1,
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "http://hl7.org/fhir/ValueSet/duration-units"
      }
    },
    {
      "id" : "Specimen.collection.quantity",
      "path" : "Specimen.collection.quantity",
      "max" : "0"
    },
    {
      "id" : "Specimen.collection.method",
      "path" : "Specimen.collection.method",
      "definition" : "Methode, mit welcher das Probenmaterial gewonnen wurde. Diese Angabe kommt infrage für\n\n* die primäre Entnahme des Probenmaterials (Primär-Probe) oder\n* die sekundäre Probengewinnung (Sekundär-Probe), z.B. Zentrifugat im Labor",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.method.coding",
      "path" : "Specimen.collection.method.coding",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "$this"
        }],
        "rules" : "open"
      },
      "definition" : "Hier kann die Methode der Probengewinnung als codierte Information angegeben werden.",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.method.coding.system",
      "path" : "Specimen.collection.method.coding.system",
      "min" : 1
    },
    {
      "id" : "Specimen.collection.method.coding.code",
      "path" : "Specimen.collection.method.coding.code",
      "min" : 1
    },
    {
      "id" : "Specimen.collection.method.coding.display",
      "path" : "Specimen.collection.method.coding.display",
      "min" : 1
    },
    {
      "id" : "Specimen.collection.method.coding:snomed",
      "path" : "Specimen.collection.method.coding",
      "sliceName" : "snomed",
      "min" : 0,
      "max" : "1",
      "patternCoding" : {
        "system" : "http://snomed.info/sct"
      },
      "mustSupport" : true,
      "binding" : {
        "strength" : "example",
        "valueSet" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Specimen_Collection_Method_SNOMED_CT|1.0.0-update"
      }
    },
    {
      "id" : "Specimen.collection.method.coding:snomed.system",
      "path" : "Specimen.collection.method.coding.system",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.method.coding:snomed.version",
      "path" : "Specimen.collection.method.coding.version",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.method.coding:snomed.code",
      "path" : "Specimen.collection.method.coding.code",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.method.coding:snomed.display",
      "path" : "Specimen.collection.method.coding.display",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.method.coding:snomed.userSelected",
      "path" : "Specimen.collection.method.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Specimen.collection.method.text",
      "path" : "Specimen.collection.method.text",
      "definition" : "Freitext Bezeichnung der Probenentnahme-Methode",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.bodySite",
      "path" : "Specimen.collection.bodySite",
      "max" : "0"
    },
    {
      "id" : "Specimen.collection.fastingStatus[x]",
      "path" : "Specimen.collection.fastingStatus[x]",
      "slicing" : {
        "discriminator" : [{
          "type" : "type",
          "path" : "$this"
        }],
        "ordered" : false,
        "rules" : "open"
      },
      "definition" : "Aussage zur Abstinenz von Nahrungsmitteln und Getränken für einen bestimmten Zeitraum vor der Probengewinnung.",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.fastingStatus[x]:fastingStatusCodeableConcept",
      "path" : "Specimen.collection.fastingStatus[x]",
      "sliceName" : "fastingStatusCodeableConcept",
      "definition" : "Angabe zum Nüchternstatus.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.fastingStatus[x]:fastingStatusCodeableConcept.coding",
      "path" : "Specimen.collection.fastingStatus[x].coding",
      "definition" : "Angabe zum Nüchternstatus in codierter Form.",
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.fastingStatus[x]:fastingStatusCodeableConcept.coding.system",
      "path" : "Specimen.collection.fastingStatus[x].coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.fastingStatus[x]:fastingStatusCodeableConcept.coding.version",
      "path" : "Specimen.collection.fastingStatus[x].coding.version",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.fastingStatus[x]:fastingStatusCodeableConcept.coding.code",
      "path" : "Specimen.collection.fastingStatus[x].coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.fastingStatus[x]:fastingStatusCodeableConcept.coding.display",
      "path" : "Specimen.collection.fastingStatus[x].coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.fastingStatus[x]:fastingStatusCodeableConcept.coding.userSelected",
      "path" : "Specimen.collection.fastingStatus[x].coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Specimen.collection.fastingStatus[x]:fastingStatusCodeableConcept.text",
      "path" : "Specimen.collection.fastingStatus[x].text",
      "definition" : "Freitextangabe zum Nüchternstatus.",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.fastingStatus[x]:fastingStatusDuration",
      "path" : "Specimen.collection.fastingStatus[x]",
      "sliceName" : "fastingStatusDuration",
      "definition" : "Dauer des Nüchternzustandes. Dauer steht für eine Zeitspanne, sie ist mindestens durch einen quantitativen Wert und eine zeitbezogene UCUM-Einheit definiert.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Duration"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.fastingStatus[x]:fastingStatusDuration.value",
      "path" : "Specimen.collection.fastingStatus[x].value",
      "definition" : "Hier wird der numerische Wert der Zeitdauer angegeben. Hierbei handelt es sich um eine Zahl mit optionalen Dezimalstellen.",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.fastingStatus[x]:fastingStatusDuration.comparator",
      "path" : "Specimen.collection.fastingStatus[x].comparator",
      "definition" : "Der Komparator kann sein:\n\n* < (kleiner)\n* <= (kleiner oder gleich)\n* >= (größer oder gleich)\n* > (größer)\n\nDer häufigste Option ist, dass eine Dauer = (gleich) eines Wertes ist. In diesem Fall wird kein Komparator gesetzt.",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.fastingStatus[x]:fastingStatusDuration.unit",
      "path" : "Specimen.collection.fastingStatus[x].unit",
      "definition" : "Hier wird die Einheit der Zeitdauer angegeben. Es sind nur UCUM-Einheiten zulässig.",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.fastingStatus[x]:fastingStatusDuration.system",
      "path" : "Specimen.collection.fastingStatus[x].system",
      "definition" : "Hier wird die Einheit der Zeitdauer angegeben. Es sind nur UCUM-Einheiten zulässig.",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.collection.fastingStatus[x]:fastingStatusDuration.code",
      "path" : "Specimen.collection.fastingStatus[x].code",
      "definition" : "Hier wird die Einheit der Zeitdauer angegeben. Es sind nur UCUM-Einheiten zulässig.",
      "min" : 1,
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "http://hl7.org/fhir/ValueSet/duration-units"
      }
    },
    {
      "id" : "Specimen.processing",
      "path" : "Specimen.processing",
      "definition" : "Optionale Angaben zur Probenverarbeitung, dazu gehören: Zeitangabe, Additiva und ggf. beschreibender Text.",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.processing.description",
      "path" : "Specimen.processing.description",
      "definition" : "Freitext Beschreibung zur Probenverarbeitung.",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.processing.procedure",
      "path" : "Specimen.processing.procedure",
      "definition" : "Methode / Verfahren zur Weiterverarbeitung des Probenmaterials, angegeben in codierter Form oder als Text",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.processing.procedure.coding",
      "path" : "Specimen.processing.procedure.coding",
      "definition" : "Methode / Verfahren zur Weiterverarbeitung des Probenmaterials als codierte Information",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.processing.procedure.coding.system",
      "path" : "Specimen.processing.procedure.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.processing.procedure.coding.version",
      "path" : "Specimen.processing.procedure.coding.version",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.processing.procedure.coding.code",
      "path" : "Specimen.processing.procedure.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.processing.procedure.coding.display",
      "path" : "Specimen.processing.procedure.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.processing.procedure.coding.userSelected",
      "path" : "Specimen.processing.procedure.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Specimen.processing.procedure.text",
      "path" : "Specimen.processing.procedure.text",
      "definition" : "Hier kann die Methode / das Verfahren zur Weiterverarbeitung des Probenmaterials als Freitext angegeben werden.",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.processing.additive",
      "path" : "Specimen.processing.additive",
      "short" : "Probenzusätze in der Probenverarbeitung",
      "definition" : "Referenzierung auf Additiva, die bei der Probenweiterverarbeitung hinzugefügt werden.",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Substance|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Specimen.processing.additive.reference",
      "path" : "Specimen.processing.additive.reference",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.processing.additive.type",
      "path" : "Specimen.processing.additive.type",
      "max" : "0"
    },
    {
      "id" : "Specimen.processing.additive.identifier",
      "path" : "Specimen.processing.additive.identifier",
      "max" : "0"
    },
    {
      "id" : "Specimen.processing.additive.display",
      "path" : "Specimen.processing.additive.display",
      "max" : "0"
    },
    {
      "id" : "Specimen.processing.time[x]",
      "path" : "Specimen.processing.time[x]",
      "slicing" : {
        "discriminator" : [{
          "type" : "type",
          "path" : "$this"
        }],
        "ordered" : false,
        "rules" : "open"
      },
      "definition" : "Hier wird eine Zeitangabe vorgenommen.",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.processing.time[x]:timeDateTime",
      "path" : "Specimen.processing.time[x]",
      "sliceName" : "timeDateTime",
      "definition" : "Im Laborkontext sollte der Zeitpunkt nach Möglichkeit minutengenau angegeben werden, die Mindestangabe ist tagesgenau.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "dateTime"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Specimen.processing.time[x]:timePeriod",
      "path" : "Specimen.processing.time[x]",
      "sliceName" : "timePeriod",
      "definition" : "Zeitraum mit Start und Ende",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Period"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Specimen.processing.time[x]:timePeriod.start",
      "path" : "Specimen.processing.time[x].start",
      "definition" : "Beginn eines Zeitraume",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.processing.time[x]:timePeriod.end",
      "path" : "Specimen.processing.time[x].end",
      "definition" : "Ende eines Zeitraume",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.container",
      "path" : "Specimen.container",
      "definition" : "Optionale Angaben zum Behältnis, in dem sich die Probe befindet. Hierzu kann angegeben werden, um welche Art Behältnis es sich handelt, welche Zusätze es enthält und welche Menge an Probenmaterial es enthält.",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.container.extension",
      "path" : "Specimen.container.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "ordered" : false,
        "rules" : "open"
      },
      "mustSupport" : true
    },
    {
      "id" : "Specimen.container.extension:SpecimenContainerDeviceR5",
      "path" : "Specimen.container.extension",
      "sliceName" : "SpecimenContainerDeviceR5",
      "definition" : "Referenz auf den Probenbehälter.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://hl7.org/fhir/5.0/StructureDefinition/extension-Specimen.container.device"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Specimen.container.extension:SpecimenContainerDeviceR5.extension",
      "path" : "Specimen.container.extension.extension",
      "max" : "0"
    },
    {
      "id" : "Specimen.container.extension:SpecimenContainerDeviceR5.value[x]",
      "path" : "Specimen.container.extension.value[x]",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Device_Specimen_Container|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Specimen.container.extension:SpecimenContainerDeviceR5.value[x].reference",
      "path" : "Specimen.container.extension.value[x].reference",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.container.extension:SpecimenContainerDeviceR5.value[x].type",
      "path" : "Specimen.container.extension.value[x].type",
      "max" : "0"
    },
    {
      "id" : "Specimen.container.extension:SpecimenContainerDeviceR5.value[x].identifier",
      "path" : "Specimen.container.extension.value[x].identifier",
      "max" : "0"
    },
    {
      "id" : "Specimen.container.extension:SpecimenContainerDeviceR5.value[x].display",
      "path" : "Specimen.container.extension.value[x].display",
      "max" : "0"
    },
    {
      "id" : "Specimen.container.identifier",
      "path" : "Specimen.container.identifier",
      "max" : "0"
    },
    {
      "id" : "Specimen.container.description",
      "path" : "Specimen.container.description",
      "max" : "0"
    },
    {
      "id" : "Specimen.container.type",
      "path" : "Specimen.container.type",
      "max" : "0"
    },
    {
      "id" : "Specimen.container.capacity",
      "path" : "Specimen.container.capacity",
      "max" : "0"
    },
    {
      "id" : "Specimen.container.specimenQuantity",
      "path" : "Specimen.container.specimenQuantity",
      "definition" : "Menge der Probe im Behälter.",
      "patternQuantity" : {
        "system" : "http://unitsofmeasure.org"
      },
      "mustSupport" : true
    },
    {
      "id" : "Specimen.container.specimenQuantity.value",
      "path" : "Specimen.container.specimenQuantity.value",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.container.specimenQuantity.unit",
      "path" : "Specimen.container.specimenQuantity.unit",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.container.specimenQuantity.system",
      "path" : "Specimen.container.specimenQuantity.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.container.specimenQuantity.code",
      "path" : "Specimen.container.specimenQuantity.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.container.additive[x]",
      "path" : "Specimen.container.additive[x]",
      "max" : "0"
    },
    {
      "id" : "Specimen.condition",
      "path" : "Specimen.condition",
      "definition" : "Hier wird eine Angabe zum Zustand der Probe gemacht.",
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.condition.coding",
      "path" : "Specimen.condition.coding",
      "definition" : "Hier wird der Zustand der Probe als codierte Information angegeben.",
      "mustSupport" : true,
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Specimen_Condition|1.0.0-update"
      }
    },
    {
      "id" : "Specimen.condition.coding.system",
      "path" : "Specimen.condition.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.condition.coding.version",
      "path" : "Specimen.condition.coding.version",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.condition.coding.code",
      "path" : "Specimen.condition.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.condition.coding.display",
      "path" : "Specimen.condition.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Specimen.condition.coding.userSelected",
      "path" : "Specimen.condition.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Specimen.condition.text",
      "path" : "Specimen.condition.text",
      "definition" : "Freitext Angabe zum Zustand der Probe.",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.note",
      "path" : "Specimen.note",
      "definition" : "Feld für ergänzende Freitext-Angaben zum Probenmaterial, die in der vorgegebenen Datenstruktur nicht erfasst werden können. Ein Beispiel dafür wäre die Angabe, dass die Probe bei 37 Grad (Körpertemperatur) aufbewahrt wurde.",
      "mustSupport" : true
    },
    {
      "id" : "Specimen.note.author[x]",
      "path" : "Specimen.note.author[x]",
      "max" : "0"
    },
    {
      "id" : "Specimen.note.time",
      "path" : "Specimen.note.time",
      "max" : "0"
    },
    {
      "id" : "Specimen.note.text",
      "path" : "Specimen.note.text",
      "mustSupport" : true
    }]
  }
}

```
