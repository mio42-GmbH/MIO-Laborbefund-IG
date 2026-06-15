# KBV_PR_MIO_LAB_Observation_Laboratory_Study_Group - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **KBV_PR_MIO_LAB_Observation_Laboratory_Study_Group**

## Resource Profile: KBV_PR_MIO_LAB_Observation_Laboratory_Study_Group 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Laboratory_Study_Group | *Version*:1.0.0-update |
| Draft as of 2026-06-11 | *Computable Name*:KBV_PR_MIO_LAB_Observation_Laboratory_Study_Group |
| **Copyright/Legal**: Im folgenden Profil können Codes aus den Code-Systemen SNOMED CT®, LOINC, Ucum, ATC, ICD-10-GM, ICD-10-WHO, OPS, Alpha-ID/Alpha-ID-SE und ICF enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED CT® Clinical Terms® (SNOMED CT® CT®) which is used by permission of SNOMED CT® International. All rights reserved. SNOMED CT® CT®, was originally created by The College of American Pathologists. SNOMED CT® and SNOMED CT® CT are registered trademarks of SNOMED CT® International. Implementers of these artefacts must have the appropriate SNOMED CT® CT Affiliate license. This material contains content from LOINC (http://LOINC.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://LOINC.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED ‘AS IS.’ ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. Dieses Material enthält Inhalte aus ATC. Die Erstellung erfolgte unter Verwendung der Datenträger der amtlichen Fassung der ATC-Klassifikation mit DDD des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICD-10-GM, ICD-10-WHO, OPS Alpha-ID ans Alpha-ID-SE. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICF. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Deutschen Instituts für Medizinische Dokumentation und Information (DIMDI). ICF-Kodes, -Begriffe und -Texte © Weltgesundheitsorganisation, übersetzt und herausgegeben durch das Deutsche Institut für Medizinische Dokumentation und Information von der International classification of functioning, disability and health - ICF, herausgegeben durch die Weltgesundheitsorganisation. | |

 
Dieses Profil bildet eine Untersuchungsgruppe ab. 
Untersuchungsgruppen sind ein technisches Mittel, um fachlich zusammengehörige Laborergebnisse innerhalb des Laborgesamtbefundes gruppiert und sortiert anzuordnen. Die Struktur “Laborgesamtbefund/Ergebnisse” enthält mindestens eine Struktur “Untersuchungsgruppe” im Abschnitt Ergebnisse. 
Für die gruppierte Darstellung von Laboruntersuchungen können (optional) aus den fachlichen Gruppierungsmerkmalen fachliche Bezeichner als Gruppenüberschrift abgeleitet werden. 
Untersuchungsgruppen, deren Sortierreihenfolge und die Sortierreihenfolge der einzelnen Untersuchungen innerhalb einer Gruppe werden Labor-intern definiert. Das empfangende System muss diese Gruppierungen und Sortierungen interpretieren können. Diese Strukturierung dient dem Erhalt des fachlichen Kontextes von digital kommunizierten Laboruntersuchungen. 

**Usages:**

* Use this Profile: [KBV_PR_MIO_LAB_Bundle](StructureDefinition-KBV-PR-MIO-LAB-Bundle.md)
* Refer to this Profile: [KBV_PR_MIO_LAB_DiagnosticReport](StructureDefinition-KBV-PR-MIO-LAB-DiagnosticReport.md) and [KBV_PR_MIO_LAB_Observation_Image_Attachment](StructureDefinition-KBV-PR-MIO-LAB-Observation-Image-Attachment.md)
* Examples for this Profile: [Observation/51b6129a-b68c-485d-a37b-9593fee4354f](Observation-51b6129a-b68c-485d-a37b-9593fee4354f.md) and [Observation/76fdc299-7b3f-404a-b32e-31e416bb0c32](Observation-76fdc299-7b3f-404a-b32e-31e416bb0c32.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/kbv.mio.laborbefund|current/StructureDefinition/StructureDefinition-KBV-PR-MIO-LAB-Observation-Laboratory-Study-Group.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-KBV-PR-MIO-LAB-Observation-Laboratory-Study-Group.csv), [Excel](StructureDefinition-KBV-PR-MIO-LAB-Observation-Laboratory-Study-Group.xlsx), [Schematron](StructureDefinition-KBV-PR-MIO-LAB-Observation-Laboratory-Study-Group.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "KBV-PR-MIO-LAB-Observation-Laboratory-Study-Group",
  "url" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Laboratory_Study_Group",
  "version" : "1.0.0-update",
  "name" : "KBV_PR_MIO_LAB_Observation_Laboratory_Study_Group",
  "title" : "KBV_PR_MIO_LAB_Observation_Laboratory_Study_Group",
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
  "description" : "Dieses Profil bildet eine Untersuchungsgruppe ab.\n\nUntersuchungsgruppen sind ein technisches Mittel, um fachlich zusammengehörige Laborergebnisse innerhalb des Laborgesamtbefundes gruppiert und sortiert anzuordnen. Die Struktur \"Laborgesamtbefund/Ergebnisse\" enthält mindestens eine Struktur \"Untersuchungsgruppe\" im Abschnitt Ergebnisse.\n\nFür die gruppierte Darstellung von Laboruntersuchungen können (optional) aus den fachlichen Gruppierungsmerkmalen fachliche Bezeichner als Gruppenüberschrift abgeleitet werden.\n\nUntersuchungsgruppen, deren Sortierreihenfolge und die Sortierreihenfolge der einzelnen Untersuchungen innerhalb einer Gruppe werden Labor-intern definiert. Das empfangende System muss diese Gruppierungen und Sortierungen interpretieren können. Diese Strukturierung dient dem Erhalt des fachlichen Kontextes von digital kommunizierten Laboruntersuchungen.",
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
      "definition" : "Dieses Profil bildet eine Untersuchungsgruppe ab.\n\nUntersuchungsgruppen sind ein technisches Mittel, um fachlich zusammengehörige Laborergebnisse innerhalb des Laborgesamtbefundes gruppiert und sortiert anzuordnen. Die Struktur \"Laborgesamtbefund/Ergebnisse\" enthält mindestens eine Struktur \"Untersuchungsgruppe\" im Abschnitt Ergebnisse.\n\nFür die gruppierte Darstellung von Laboruntersuchungen können (optional) aus den fachlichen Gruppierungsmerkmalen fachliche Bezeichner als Gruppenüberschrift abgeleitet werden.\n\nUntersuchungsgruppen, deren Sortierreihenfolge und die Sortierreihenfolge der einzelnen Untersuchungen innerhalb einer Gruppe werden Labor-intern definiert. Das empfangende System muss diese Gruppierungen und Sortierungen interpretieren können. Diese Strukturierung dient dem Erhalt des fachlichen Kontextes von digital kommunizierten Laboruntersuchungen.",
      "constraint" : [{
        "key" : "eu-lab-1",
        "severity" : "error",
        "human" : "If observation status is other then \"registered\" or \"cancelled\", at least one of these Observation elements shall be provided:  \"value\", \"dataAbsentReason\", \"hasMember\" or \"component\"",
        "expression" : "(status in ('registered'|'cancelled')) or value.exists() or hasMember.exists() or component.exists() or dataAbsentReason.exists()",
        "source" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Laboratory_Study_Group"
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
      "id" : "Observation.identifier",
      "path" : "Observation.identifier",
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
      "patternCode" : "final"
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
      "short" : "Fachliche Bezeichnung für eine Untersuchungsgruppe",
      "definition" : "Zur jeweiligen Gruppe kann es (optional) gruppenbezogene fachliche Bezeichner geben, abgebildet in der vorliegenden Struktur \"Fachliches Gruppierungsmerkmal\". Für die gruppierte Darstellung von Laborergebnissen im Laborgesamtbefund können solche fachlichen Gruppierungsmerkmale als Gruppenüberschrift dienen. Mögliche Gruppenüberschriften sind:\n\n  * \"Laborbereich\" (z.B. Klinische Chemie)\n  * \"Test-Profil\" (z.B. \"Gerinnungsstatus\")\n  * \"Laborbereich\" mit \"Test-Profil\" kombiniert",
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
      "short" : "Bezeichnung für Fachbereich, unter dem Laboruntersuchungen gruppiert werden.",
      "definition" : "Hier kann die fachspezifische Eingrenzung innerhalb der Laboratoriumsmedizin anhand entsprechender Kategorie-Codes angegeben werden. Typische Beispiele für eine fachspezifische Eingrenzung sind: \"Klinische Chemie\", \"Hämatologie\", \"Serologie\", \"Toxikologie\".",
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
      "definition" : "LOINC®-Code für Fachbereich/Spezialgebiet der Labormedizin.",
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
      "short" : "Bezeichnung für fachlich-medizinischen Bezug, unter dem Laboruntersuchungen gruppiert werden.",
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
      "definition" : "Dieses Element ist vorhanden, um die Datenstruktur \"Laboruntersuchungsgruppe\" FHIR-konform mit einem klassifizierenden Code abzubilden.",
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_mio42",
          "version" : "1.0.0-update",
          "code" : "laboruntersuchungsgruppe",
          "display" : "Laboruntersuchungsgruppe"
        }]
      },
      "mustSupport" : true
    },
    {
      "id" : "Observation.code.coding",
      "path" : "Observation.code.coding",
      "min" : 1,
      "max" : "1",
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
      "max" : "0"
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
      "definition" : "Dieses Element wird lediglich mit einem data-absent-reason Code befüllt.",
      "min" : 1,
      "type" : [{
        "code" : "dateTime"
      }]
    },
    {
      "id" : "Observation.effective[x].extension",
      "path" : "Observation.effective[x].extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "ordered" : false,
        "rules" : "open"
      },
      "min" : 1,
      "max" : "1"
    },
    {
      "id" : "Observation.effective[x].extension:data-absent-reason",
      "path" : "Observation.effective[x].extension",
      "sliceName" : "data-absent-reason",
      "short" : "effective[x] absence reason",
      "definition" : "Provides a reason why the effectiveTime is missing.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://hl7.org/fhir/StructureDefinition/data-absent-reason|5.3.0"]
      }]
    },
    {
      "id" : "Observation.effective[x].extension:data-absent-reason.value[x]",
      "path" : "Observation.effective[x].extension.value[x]",
      "patternCode" : "not-permitted",
      "mustSupport" : true
    },
    {
      "id" : "Observation.effective[x].value",
      "path" : "Observation.effective[x].value",
      "max" : "0"
    },
    {
      "id" : "Observation.issued",
      "path" : "Observation.issued",
      "max" : "0"
    },
    {
      "id" : "Observation.performer",
      "path" : "Observation.performer",
      "short" : "Durchführendes Labor",
      "definition" : "Hier wird das durchführende Labor in Bezug auf die Untersuchungsgruppe benannt.\n\nZum Erhalt der europäischen Interoperabilität, orientiert an der Veröffentlichung \"HL7 Europe Laboratory Report\" wird die durchführende Person (\"performer\" im FHIR®-Profil \"Observation\") im Informationsmodell bei der Untersuchungsgruppe mitgeführt. Bisher liegt im Rahmen der Spezifizierungsarbeit zum MIO Laborbefund keine medizinisch-fachliche Begründung vor, dass diese Struktur befüllt werden muss.",
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
      "max" : "0"
    },
    {
      "id" : "Observation.dataAbsentReason",
      "path" : "Observation.dataAbsentReason",
      "max" : "0"
    },
    {
      "id" : "Observation.interpretation",
      "path" : "Observation.interpretation",
      "short" : "Medizinische Interpretation der Untersuchungsgruppe",
      "definition" : "Medizinisch relevante Bewertung zur Untersuchungsgruppe. Die Interpretation kann als Code und/oder Text vorliegen. Die Angabe einer Interpretation ist optional, bei nicht vorhandener Klassifikation wird hier nichts übermittelt. Empfehlung: eine dokumentierte Interpretation sollte mindestens einen Interpretationscode enthalten.",
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
      "mustSupport" : true
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
      "min" : 1,
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
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.interpretation.coding:hl7Interpretation.display",
      "path" : "Observation.interpretation.coding.display",
      "min" : 1,
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
      "min" : 1,
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
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.interpretation.coding:snomed.display",
      "path" : "Observation.interpretation.coding.display",
      "min" : 1,
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
      "mustSupport" : true
    },
    {
      "id" : "Observation.note",
      "path" : "Observation.note",
      "definition" : "Die ergänzenden Angaben beziehen sich genau auf diese Untersuchungsgruppe. Neben dem Element \"Interpretation\" ist dieses Feld für weitere, über die rein medizinische Interpretation hinausgehende Kommentierungen gedacht.",
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
      "max" : "0"
    },
    {
      "id" : "Observation.specimen",
      "path" : "Observation.specimen",
      "max" : "0"
    },
    {
      "id" : "Observation.device",
      "path" : "Observation.device",
      "max" : "0"
    },
    {
      "id" : "Observation.referenceRange",
      "path" : "Observation.referenceRange",
      "max" : "0"
    },
    {
      "id" : "Observation.hasMember",
      "path" : "Observation.hasMember",
      "definition" : "Laboruntersuchungen, die in der Untersuchungsgruppe enthalten sind, werden hier referenziert.",
      "min" : 1,
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Laboratory_Study|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.hasMember.extension",
      "path" : "Observation.hasMember.extension",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.hasMember.extension:sortingNumberResult",
      "path" : "Observation.hasMember.extension",
      "sliceName" : "sortingNumberResult",
      "short" : "Sortiernummer Laboruntersuchung innerhalb der Untersuchungsgruppe",
      "definition" : "Laboruntersuchungen werden innerhalb einer Gruppe grundsätzlich sortiert. Die mit dem Datenstrom mitgegebenen Sortiernummern sind als Standardsortierung gedacht. Die Standardsortierung legt das Befund-erstellende Labor fest. Verwender können in Primärsystemen zusätzlich interaktiv auch anders sortieren, wenn das Primärsystem solche Funktionen anbietet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Sorting_Number"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.hasMember.extension:sortingNumberResult.value[x]",
      "path" : "Observation.hasMember.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "Observation.hasMember.reference",
      "path" : "Observation.hasMember.reference",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.hasMember.type",
      "path" : "Observation.hasMember.type",
      "max" : "0"
    },
    {
      "id" : "Observation.hasMember.identifier",
      "path" : "Observation.hasMember.identifier",
      "max" : "0"
    },
    {
      "id" : "Observation.hasMember.display",
      "path" : "Observation.hasMember.display",
      "max" : "0"
    },
    {
      "id" : "Observation.derivedFrom",
      "path" : "Observation.derivedFrom",
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
